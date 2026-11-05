// Examination records, internal assessments, grading logic, and report cards: REST API route declarations
const express = require('express');
const router = express.Router();
const controller = require('./marks.controller');
const authMiddleware = require('../../middleware/auth.middleware');

// Route definitions placeholder
router.get('/', authMiddleware, controller.getAll);
router.get('/:id', authMiddleware, controller.getById);

module.exports = router;
