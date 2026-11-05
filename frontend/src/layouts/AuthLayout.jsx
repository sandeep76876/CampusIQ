// Minimal layout designed for authentication forms (Login, Register, Password Reset)
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-card">{children}</div>
    </div>
  );
};

export default AuthLayout;
