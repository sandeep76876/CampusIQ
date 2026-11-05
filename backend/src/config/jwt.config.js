// Centralized JWT configuration options and expiry definitions
module.exports = {
  secret: process.env.JWT_SECRET || 'campusiq_default_dev_secret',
  expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  refreshSecret: process.env.JWT_REFRESH_SECRET || 'campusiq_default_refresh_secret',
  refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d'
};
