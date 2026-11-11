// Authentication REST API routes
const express = require('express');
const router = express.Router();
const controller = require('./auth.controller');
const validator = require('./auth.validator');
const validate = require('../../middleware/validate.middleware');
const authMiddleware = require('../../middleware/auth.middleware');

// Public registration endpoint
router.post('/register', validator.registerValidator, validate, controller.register);

// Public login endpoint
router.post('/login', validator.loginValidator, validate, controller.login);

// Refresh access token
router.post('/refresh-token', validator.refreshTokenValidator, validate, controller.refreshToken);

// Logout (Protected or with refresh token)
router.post('/logout', controller.logout);

// Current user profile (Protected)
router.get('/me', authMiddleware, controller.getMe);

module.exports = router;
