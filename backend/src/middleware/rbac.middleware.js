// Role-Based Access Control (RBAC) middleware
module.exports = (...allowedRoles) => {
  // Normalize roles to uppercase
  const normalizedRoles = allowedRoles.flat().map(r => String(r).toUpperCase());

  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(401).json({
        success: false,
        message: 'Authentication context missing. Role could not be verified.'
      });
    }

    const userRole = String(req.user.role).toUpperCase();

    // Check if role is allowed
    if (!normalizedRoles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        code: 'INSUFFICIENT_PERMISSIONS',
        message: `Forbidden: Access restricted. Role '${userRole}' does not have sufficient privileges for this resource. Required: [${normalizedRoles.join(', ')}]`
      });
    }

    next();
  };
};
