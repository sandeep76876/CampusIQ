// Authentication, user login, token refresh, and password recovery endpoints: REST API route declarations
const express = require('express');
const router = express.Router();
const controller = require('./auth.controller');
const authMiddleware = require('../../middleware/auth.middleware');

// Route definitions placeholder
router.get('/', authMiddleware, controller.getAll);
router.get('/:id', authMiddleware, controller.getById);

module.exports = router;
