// Standardized API response formatters for success and failure envelopes
exports.success = (res, data, message = 'Success', statusCode = 200) => {
  return res.status(statusCode).json({ success: true, message, data });
};

exports.error = (res, message = 'An error occurred', statusCode = 500, errors = null) => {
  return res.status(statusCode).json({ success: false, message, errors });
};
