// Authentication request controller
const authService = require('./auth.service');
const { success } = require('../../utils/responseHandler');

exports.register = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName, role, department, phoneNumber } = req.body;
    const result = await authService.register({
      email,
      password,
      firstName,
      lastName,
      role,
      department,
      phoneNumber
    });
    return success(res, result, 'Account registered successfully', 201);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { identifier, password, role } = req.body;
    const result = await authService.login({ identifier, password, role });
    return success(res, result, 'Authenticated successfully', 200);
  } catch (err) {
    next(err);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const result = await authService.refreshAccessToken(refreshToken);
    return success(res, result, 'Token refreshed successfully', 200);
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const result = await authService.logout(refreshToken);
    return success(res, result, 'Logged out successfully', 200);
  } catch (err) {
    next(err);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const user = await authService.getMe(req.user.id);
    return success(res, user, 'Authenticated user profile retrieved', 200);
  } catch (err) {
    next(err);
  }
};
