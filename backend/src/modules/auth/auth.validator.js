// Authentication request validation schemas
const { body } = require('express-validator');

exports.registerValidator = [
  body('email')
    .isEmail()
    .withMessage('Valid institutional email is required')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First name is required')
    .isLength({ min: 2 })
    .withMessage('First name must be at least 2 characters'),
  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Last name is required'),
  body('role')
    .optional()
    .toUpperCase()
    .isIn(['STUDENT', 'TEACHER'])
    .withMessage('Registration is only permitted for STUDENT or TEACHER roles')
];

exports.loginValidator = [
  body('identifier')
    .trim()
    .notEmpty()
    .withMessage('Email or Institute ID is required'),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  body('role')
    .optional()
    .toUpperCase()
    .isIn(['STUDENT', 'TEACHER', 'ADMIN', 'HOD'])
    .withMessage('Invalid role specified')
];

exports.refreshTokenValidator = [
  body('refreshToken')
    .notEmpty()
    .withMessage('Refresh token is required')
];
