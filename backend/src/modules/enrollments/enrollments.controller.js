// Course enrollment registrations, eligibility verification, and student rosters: HTTP request handling and response dispatch
const service = require('./enrollments.service');
const { success, error } = require('../../utils/responseHandler');

exports.getAll = async (req, res, next) => {
  try {
    const data = await service.findAll();
    return success(res, data, 'enrollments retrieved successfully');
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await service.findById(req.params.id);
    return success(res, data, 'enrollments record found');
  } catch (err) {
    next(err);
  }
};
