import React from 'react';
import './AuthComponents.css';

/**
 * RoleSelector Component
 * Segmented control for choosing account role (Student, Faculty, Admin)
 */
const RoleSelector = ({ selectedRole, onRoleChange, roles = ['student', 'faculty', 'admin'] }) => {
  const roleConfig = {
    student: {
      label: 'Student',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    faculty: {
      label: 'Faculty',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    },
    admin: {
      label: 'Admin',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    }
  };

  return (
    <div className="role-selector" role="tablist" aria-label="Select User Role">
      {roles.map((roleKey) => {
        const item = roleConfig[roleKey];
        if (!item) return null;
        const isActive = selectedRole === roleKey;

        return (
          <button
            key={roleKey}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`role-tab ${isActive ? 'active' : ''}`}
            onClick={() => onRoleChange(roleKey)}
          >
            <span className="role-icon">{item.icon}</span>
            <span className="role-label">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default RoleSelector;
