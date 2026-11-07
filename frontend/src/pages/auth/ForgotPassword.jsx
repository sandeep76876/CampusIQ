import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import AuthInput from '../../components/auth/AuthInput';
import '../../components/auth/AuthComponents.css';

/**
 * ForgotPassword Page Component
 * Allows users to request a password recovery email using their institute email or ID.
 */
const ForgotPassword = () => {
  const [identifier, setIdentifier] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!identifier.trim()) {
      setError('Please enter your institute email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier.trim())) {
      setError('Please provide a valid email format');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Simulate recovery email dispatch
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <AuthLayout>
      <div className="auth-header">
        <div className="auth-title-row">
          <h2 className="auth-title">Reset Password</h2>
          <span className="title-sparkle-rays" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.5 7L18.5 8.5L13.5 10L12 15L10.5 10L5.5 8.5L10.5 7L12 2Z" fill="#F59E0B" />
            </svg>
          </span>
        </div>
        <p className="auth-subtitle">
          {submitted
            ? 'Recovery instructions sent'
            : 'Enter your verified email to receive a password reset link'}
        </p>
      </div>

      {submitted ? (
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="auth-alert-banner success" role="alert">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>
              If an account exists for <strong>{identifier}</strong>, a recovery link has been dispatched.
            </span>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            Please check your institutional inbox and spam folders. The link is valid for 15 minutes.
          </p>

          <Link to="/login" className="btn-primary-auth" style={{ textDecoration: 'none' }}>
            <span>Back to Login</span>
            <span className="btn-arrow-icon" aria-hidden="true">→</span>
          </Link>
        </div>
      ) : (
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <AuthInput
            id="recovery-identifier"
            name="identifier"
            type="email"
            label="Institute Email Address"
            labelIcon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            }
            placeholder="e.g. yourname@university.edu"
            value={identifier}
            onChange={(e) => {
              setIdentifier(e.target.value);
              if (error) setError(null);
            }}
            error={error}
            required
            autoComplete="email"
          />

          <button
            type="submit"
            className="btn-primary-auth"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? 'Sending Link...' : 'Send Recovery Link'}</span>
            <span className="btn-arrow-icon" aria-hidden="true">→</span>
          </button>

          <p className="auth-footer-switch">
            Remember your credentials?
            <Link to="/login" className="auth-switch-link">
              Log In
            </Link>
          </p>
        </form>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
