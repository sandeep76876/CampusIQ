// Users management routes with RBAC protection
const express = require('express');
const router = express.Router();
const controller = require('./users.controller');
const authMiddleware = require('../../middleware/auth.middleware');
const rbacMiddleware = require('../../middleware/rbac.middleware');

// GET /api/v1/users - Admin and HOD only
router.get('/', authMiddleware, rbacMiddleware('ADMIN', 'HOD'), controller.getAll);

// GET /api/v1/users/:id - Admin or Self
router.get('/:id', authMiddleware, controller.getById);

// PATCH /api/v1/users/:id/role - Admin only
router.patch('/:id/role', authMiddleware, rbacMiddleware('ADMIN'), controller.updateRole);

// PATCH /api/v1/users/:id/status - Admin only
router.patch('/:id/status', authMiddleware, rbacMiddleware('ADMIN'), controller.updateStatus);

module.exports = router;
