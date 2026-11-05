// Performance aggregates, departmental pass percentages, and analytical summaries: HTTP request handling and response dispatch
const service = require('./analytics.service');
const { success, error } = require('../../utils/responseHandler');

exports.getAll = async (req, res, next) => {
  try {
    const data = await service.findAll();
    return success(res, data, 'analytics retrieved successfully');
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await service.findById(req.params.id);
    return success(res, data, 'analytics record found');
  } catch (err) {
    next(err);
  }
};
