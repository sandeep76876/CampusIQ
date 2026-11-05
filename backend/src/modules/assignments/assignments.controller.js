// Homework, project assignments, student submissions, and grading workflows: HTTP request handling and response dispatch
const service = require('./assignments.service');
const { success, error } = require('../../utils/responseHandler');

exports.getAll = async (req, res, next) => {
  try {
    const data = await service.findAll();
    return success(res, data, 'assignments retrieved successfully');
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await service.findById(req.params.id);
    return success(res, data, 'assignments record found');
  } catch (err) {
    next(err);
  }
};
