import React from 'react';
import loginBgImage from '../assets/images/Login_BG.png';
import './AuthLayout.css';

/**
 * AuthLayout Component
 * High-end academic split-screen layout with dual glassmorphism:
 * Left: Elevated Frosted Glass Header Panel positioned vertically high to ensure full visibility of the campus building below.
 * Right: Pristine Frosted Glass Form Card on a natural cream canvas.
 */
const AuthLayout = ({ children }) => {
  return (
    <div className="campusiq-auth-root">
      {/* 1. Deep Forest Green Curved Brand Backdrop */}
      <div className="brand-curved-backdrop-container" aria-hidden="true">
        <svg
          className="brand-curved-backdrop-svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="forestWingGradient" x1="0%" y1="0%" x2="60%" y2="100%">
              <stop offset="0%" stopColor="#04231a" />
              <stop offset="40%" stopColor="#08382b" />
              <stop offset="100%" stopColor="#0b4535" />
            </linearGradient>
          </defs>
          <path
            d="M 0,0 L 460,0 C 490,220 495,440 465,680 C 445,800 440,900 445,1000 L 0,1000 Z"
            fill="url(#forestWingGradient)"
          />
        </svg>
      </div>

      {/* 2. Campus Building & Environment Visual Overlay (Login_BG.png) */}
      <div 
        className="campusiq-auth-bg-overlay"
        style={{ backgroundImage: `url(${loginBgImage})` }}
        aria-hidden="true"
      />

      {/* 3. Main Interactive Container */}
      <div className="campusiq-auth-container">
        
        {/* Left Section: Branding Showcase positioned vertically high */}
        <section className="campusiq-brand-section" aria-label="CampusIQ Platform Highlights">
          <div className="brand-glass-card">
            
            {/* CampusIQ Logo & Subtitle */}
            <div className="brand-logo-container">
              <div className="logo-icon-wrapper">
                <svg width="44" height="44" viewBox="0 0 48 48" fill="none" className="cap-svg">
                  {/* Cap Crown in Golden Amber */}
                  <path
                    d="M24 7L4 18L24 29L44 18L24 7Z"
                    fill="#F59E0B"
                    stroke="#D97706"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  {/* Cap Skull Base */}
                  <path
                    d="M10 22.5V31.5C10 36 16.2 39.5 24 39.5C31.8 39.5 38 36 38 31.5V22.5"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Tassel */}
                  <path
                    d="M44 18.5V33.5C44 34.6 43.1 35.5 42 35.5C40.9 35.5 40 34.6 40 33.5V21"
                    stroke="#FBBF24"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="42" cy="36" r="2.5" fill="#F59E0B" />
                </svg>
              </div>

              <div className="logo-text-wrapper">
                <h1 className="brand-title">
                  Campus<span className="brand-title-accent">IQ</span>
                </h1>
                <p className="brand-subtitle">Smart Academic Platform</p>
                <div className="brand-underline-accent" />
              </div>
            </div>

            {/* Main Tagline */}
            <div className="brand-tagline-container">
              <h2 className="brand-tagline">
                Your All-in-One<br />
                Academic Companion
              </h2>
            </div>

            {/* 4 Feature Badges with Clean White Line Icons in Frosted Pods */}
            <div className="brand-features-grid">
              {/* Feature 1: Attendance */}
              <div className="feature-item">
                <div className="feature-icon-pod">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                    <path d="m9 16 2 2 4-4" />
                  </svg>
                </div>
                <span className="feature-label">Attendance</span>
              </div>

              {/* Feature 2: Grades */}
              <div className="feature-item">
                <div className="feature-icon-pod">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" x2="18" y1="20" y2="10" />
                    <line x1="12" x2="12" y1="20" y2="4" />
                    <line x1="6" x2="6" y1="20" y2="14" />
                  </svg>
                </div>
                <span className="feature-label">Grades</span>
              </div>

              {/* Feature 3: Assignments */}
              <div className="feature-item">
                <div className="feature-icon-pod">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 10 5-10 5L2 7l10-5Z" />
                    <path d="m2 17 10 5 10-5" />
                    <path d="m2 12 10 5 10-5" />
                  </svg>
                </div>
                <span className="feature-label">Assignments</span>
              </div>

              {/* Feature 4: AI & Analytics */}
              <div className="feature-item">
                <div className="feature-icon-pod">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m16 18 6-6-6-6" />
                    <path d="m8 6-6 6 6 6" />
                    <path d="m14 4-4 16" />
                  </svg>
                </div>
                <span className="feature-label">AI & Analytics</span>
              </div>
            </div>

          </div>

          {/* Dedicated transparent breathing area ensuring school building is completely visible */}
          <div className="school-building-viewarea" aria-hidden="true" />
        </section>

        {/* Right Section: Form Card Container with Frosted Glassmorphism */}
        <section className="campusiq-form-section" aria-label="CampusIQ Authentication Portal">
          <div className="form-card-wrapper">
            <div className="auth-card-elevated auth-glass-panel">
              {children}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AuthLayout;
