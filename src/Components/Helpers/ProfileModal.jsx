// ProfileModal.js
import React from "react";
import Modal from "react-modal";
import defaultIcon from "../Images/gg_profile.png";

const ProfileModal = ({ isOpen, onRequestClose, profileImage }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className=""
      overlayClassName="profile-modal-overlay"
      contentLabel="Profile Modal"
    >
      {/* Display the user's profile image or the default icon in the modal */}
      {profileImage ? (
        <img src={profileImage} alt="User Profile" className="profile-modal-image" />
      ) : (
        <img src={defaultIcon} alt="Default Icon" className="profile-modal-image" />
      )}

      {/* Content for the modal */}
      <div className="modal-content">
        <div className="modal-card">
          <h2>Reports</h2>
          {/* Add content for the Reports card */}
        </div>
        <div className="modal-card">
          <h2>Transaction Details</h2>
          {/* Add content for the Transaction Details card */}
        </div>
      </div>

      <button className="close-modal-btn" onClick={onRequestClose}>
        Close Modal
      </button>
    </Modal>
  );
};

export default ProfileModal;
