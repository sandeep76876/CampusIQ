// Internal backend endpoints bridging client actions to the external Python AI/ML microservice: HTTP request handling and response dispatch
const service = require('./ai.service');
const { success, error } = require('../../utils/responseHandler');

exports.getAll = async (req, res, next) => {
  try {
    const data = await service.findAll();
    return success(res, data, 'ai retrieved successfully');
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await service.findById(req.params.id);
    return success(res, data, 'ai record found');
  } catch (err) {
    next(err);
  }
};
