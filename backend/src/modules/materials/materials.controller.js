// Lecture notes, syllabus PDFs, and multimedia study material repositories: HTTP request handling and response dispatch
const service = require('./materials.service');
const { success, error } = require('../../utils/responseHandler');

exports.getAll = async (req, res, next) => {
  try {
    const data = await service.findAll();
    return success(res, data, 'materials retrieved successfully');
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await service.findById(req.params.id);
    return success(res, data, 'materials record found');
  } catch (err) {
    next(err);
  }
};
