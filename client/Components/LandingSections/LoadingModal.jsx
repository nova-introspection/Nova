import React from 'react';

const LoadingModal = ({ isActive }) => (
  <div className={`modal ${isActive}`}>
    <div className="modal-background" />
    <div
      className="modal-content has-text-centered"
      style={{ color: 'white', fontSize: '50px' }}
    >
      <i className="fas fa-sync-alt fa-spin" />
    </div>
  </div>
);

export default LoadingModal;
