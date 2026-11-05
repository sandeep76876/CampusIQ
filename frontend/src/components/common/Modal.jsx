// Accessible modal dialog wrapper for forms, confirmations, and alerts
import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-dialog">
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
