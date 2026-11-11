// Users controller with Role-Based Access Control logic
const usersService = require('./users.service');
const { success } = require('../../utils/responseHandler');

exports.getAll = async (req, res, next) => {
  try {
    const { role, page, limit } = req.query;
    const users = await usersService.findAll({ role, page, limit });
    return success(res, users, 'Users retrieved successfully');
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const targetId = req.params.id;
    // Allow if user is ADMIN or requesting their own profile
    if (req.user.role !== 'ADMIN' && req.user.id !== targetId) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: You can only access your own profile.'
      });
    }

    const user = await usersService.findById(targetId);
    return success(res, user, 'User found');
  } catch (err) {
    next(err);
  }
};

exports.updateRole = async (req, res, next) => {
  try {
    const { role } = req.body;
    const updated = await usersService.updateRole(req.params.id, role);
    return success(res, updated, `Role updated to ${role}`);
  } catch (err) {
    next(err);
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const { isActive } = req.body;
    const updated = await usersService.updateStatus(req.params.id, isActive);
    return success(res, updated, `User active status updated to ${isActive}`);
  } catch (err) {
    next(err);
  }
};
