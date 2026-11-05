// Student demographic profiles, enrollments, and academic trajectories: REST API route declarations
const express = require('express');
const router = express.Router();
const controller = require('./students.controller');
const authMiddleware = require('../../middleware/auth.middleware');

// Route definitions placeholder
router.get('/', authMiddleware, controller.getAll);
router.get('/:id', authMiddleware, controller.getById);

module.exports = router;
