// Shared validation rules for UUIDs, pagination parameters, and date formats
const { param, query } = require('express-validator');

exports.idParamValidator = [
  param('id').isUUID().withMessage('Invalid UUID parameter format')
];

exports.paginationValidator = [
  query('page').optional().isInt({ min: 1 }).toInt(),
  query('limit').optional().isInt({ min: 1, max: 100 }).toInt()
];
