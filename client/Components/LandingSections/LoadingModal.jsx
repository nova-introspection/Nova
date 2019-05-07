import React from 'react';

const LoadingModal = (props) => (
  <div className={`modal ${props.isActive}`}>
    <div className="modal-background"></div>
      <div className="modal-content has-text-centered" style={{color: 'white', fontSize:'50px'}}>
        <i className="fas fa-sync-alt fa-spin"></i>
      </div>
  </div>
)

export default LoadingModal;