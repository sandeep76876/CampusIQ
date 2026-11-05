// User management, profile updates, and role assignments: HTTP request handling and response dispatch
const service = require('./users.service');
const { success, error } = require('../../utils/responseHandler');

exports.getAll = async (req, res, next) => {
  try {
    const data = await service.findAll();
    return success(res, data, 'users retrieved successfully');
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await service.findById(req.params.id);
    return success(res, data, 'users record found');
  } catch (err) {
    next(err);
  }
};
