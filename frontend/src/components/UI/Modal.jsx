import React from 'react';

const Modal = ({ isOpen, onClose, children, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white p-6 rounded shadow-lg ${className}`}>
        <button onClick={onClose} className="float-right text-gray-500">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;