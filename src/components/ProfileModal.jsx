import React from 'react';
import './ProfileModal.css';

const ProfileModal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={imageUrl} alt="Profile Enlarged" className="modal-image" />
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProfileModal;

