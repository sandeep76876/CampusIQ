import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import RoleSelector from '../../components/auth/RoleSelector';
import AuthInput from '../../components/auth/AuthInput';
import '../../components/auth/AuthComponents.css';

/**
 * Register Page Component
 * Implements the CampusIQ account creation interface matching the design language.
 * Admin creation is intentionally restricted to authorized institutional admins.
 */
const Register = () => {
  const navigate = useNavigate();

  // Role State (Restricted to Student & Faculty only)
  const [selectedRole, setSelectedRole] = useState('student');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    identifier: '',
    department: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Departments List
  const departments = [
    { value: 'CSE', label: 'Computer Science & Engineering' },
    { value: 'IT', label: 'Information Technology' },
    { value: 'ECE', label: 'Electronics & Communication' },
    { value: 'EEE', label: 'Electrical & Electronics' },
    { value: 'ME', label: 'Mechanical Engineering' },
    { value: 'CE', label: 'Civil Engineering' },
    { value: 'MGMT', label: 'School of Business & Management' },
    { value: 'SCI', label: 'Applied Sciences & Mathematics' }
  ];

  // Input change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (feedback) {
      setFeedback(null);
    }
  };

  // Client-side validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full legal name';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    if (!formData.identifier.trim()) {
      newErrors.identifier = `Please enter your institute email or ${
        selectedRole === 'student' ? 'Student ID' : 'Faculty ID'
      }`;
    } else if (
      formData.identifier.includes('@') &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.identifier.trim())
    ) {
      newErrors.identifier = 'Please provide a valid institutional email';
    }

    if (!formData.department) {
      newErrors.department = 'Please select your academic department';
    }

    if (!formData.password) {
      newErrors.password = 'Please create a secure password';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'You must accept the academic terms to continue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      // Simulate backend registration request
      await new Promise((resolve) => setTimeout(resolve, 800));

      setFeedback({
        type: 'success',
        message: 'Account successfully created! Redirecting to login...'
      });

      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (err) {
      setFeedback({
        type: 'error',
        message: 'Registration could not be completed. Please try again.'
      });
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      {/* Header with Title and 3 Golden Accent Rays (\ | /) */}
      <div className="auth-header">
        <div className="auth-title-row">
          <h2 className="auth-title">Create Account</h2>
          <span className="title-sparkle-rays" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="accent-rays-svg">
              <line x1="3" y1="18" x2="1" y2="10" stroke="#F59E0B" strokeWidth="2.8" strokeLinecap="round" />
              <line x1="12" y1="18" x2="12" y2="6" stroke="#F59E0B" strokeWidth="2.8" strokeLinecap="round" />
              <line x1="21" y1="18" x2="23" y2="10" stroke="#F59E0B" strokeWidth="2.8" strokeLinecap="round" />
            </svg>
          </span>
        </div>
        <p className="auth-subtitle">Join the CampusIQ Academic Platform</p>
      </div>

      {/* Role Selector: Student and Faculty ONLY */}
      <RoleSelector
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        roles={['student', 'faculty']}
      />

      {/* Admin Restriction Informative Notice */}
      <div className="admin-restricted-notice" role="note">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <span>
          <strong>Admin notice:</strong> Administrator accounts are assigned directly by Campus IT.
        </span>
      </div>

      {/* Feedback Banner */}
      {feedback && (
        <div className={`auth-alert-banner ${feedback.type}`} role="alert">
          {feedback.type === 'success' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          )}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Registration Form */}
      <form className="auth-form compact" onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <AuthInput
          id="register-fullname"
          name="fullName"
          type="text"
          label="Full Legal Name"
          labelIcon={
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
          placeholder="e.g. Alex Johnson"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          autoComplete="name"
          required
        />

        {/* Institute Email / ID */}
        <AuthInput
          id="register-identifier"
          name="identifier"
          type="text"
          label={selectedRole === 'student' ? 'Institute Email / Student ID' : 'Faculty Email / Staff ID'}
          labelIcon={
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          }
          placeholder={selectedRole === 'student' ? 'e.g. alex.j@university.edu or STU2024' : 'e.g. prof.alex@university.edu'}
          value={formData.identifier}
          onChange={handleChange}
          error={errors.identifier}
          autoComplete="username"
          required
        />

        {/* Academic Department */}
        <AuthInput
          id="register-department"
          name="department"
          type="select"
          label="Department / School"
          labelIcon={
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m2 7 10-5 10 5-10 5z" />
              <path d="M12 22V12" />
              <path d="M6 12v6c0 1.5 2.5 3 6 3s6-1.5 6-3v-6" />
            </svg>
          }
          placeholder="Choose your academic department"
          value={formData.department}
          onChange={handleChange}
          options={departments}
          error={errors.department}
          required
        />

        {/* Password */}
        <AuthInput
          id="register-password"
          name="password"
          type="password"
          label="Password (min. 8 characters)"
          labelIcon={
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          }
          placeholder="Create a strong password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="new-password"
          required
        />

        {/* Confirm Password */}
        <AuthInput
          id="register-confirm-password"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          labelIcon={
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          }
          placeholder="Re-enter your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          autoComplete="new-password"
          required
        />

        {/* Terms of Service Checkbox */}
        <div className="terms-agreement-row">
          <input
            type="checkbox"
            id="register-terms"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleChange}
            className="custom-checkbox"
          />
          <label htmlFor="register-terms">
            I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Academic Privacy Policy</Link>.
          </label>
        </div>
        {errors.agreedToTerms && (
          <p className="auth-field-error" style={{ marginTop: '-8px' }} role="alert">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{errors.agreedToTerms}</span>
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary-auth"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? 'Creating account...' : 'Create Account'}</span>
          <span className="btn-arrow-icon" aria-hidden="true">→</span>
        </button>

        {/* Footer Link to Login */}
        <p className="auth-footer-switch">
          Already have an account?
          <Link to="/login" className="auth-switch-link">
            Log In
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;
