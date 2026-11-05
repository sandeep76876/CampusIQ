// Role-Based Access Control middleware restricting routes to authorized roles
module.exports = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden. You lack permission to perform this action.'
      });
    }
    next();
  };
};
