const jwt = require('jsonwebtoken');

// Verify standard user token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'No token provided.' });

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET || 'secret');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized!' });
  }
};

// RBAC Middleware
const requireRole = (roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Access denied. Insufficient permissions.' });
    }
    next();
  };
};

// Sub-admin granular permissions
const requirePermission = (permission) => {
  return (req, res, next) => {
    // Super admin overrides all permissions
    if (req.user.role === 'superadmin') return next();
    
    if (req.user.role !== 'subadmin' || !req.user.permissions.includes(permission)) {
      return res.status(403).json({ error: `Access denied. Requires ${permission} permission.` });
    }
    next();
  };
};

module.exports = { verifyToken, requireRole, requirePermission };
