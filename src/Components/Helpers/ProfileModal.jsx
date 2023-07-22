import React from "react";
import Modal from "react-modal";
import defaultIcon from "../Images/gg_profile.png";
import TransactionIcon from "../Images/uil_transaction.png";
import { Link } from "react-router-dom";

const ProfileModal = ({
  isOpen,
  onRequestClose,
  profileImage,
  handleOpenModal,
}) => {
  return (
    <>
      {/* Use the 'isOpen' prop to control the modal visibility */}
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className="profile-modal"
        overlayClassName="profile-modal-overlay"
      >
        <div className="profile-content">
          {/* Display the user's profile image or the default icon */}
          {profileImage ? (
            <img
              src={profileImage}
              alt="User Profile"
              className="profile-image-modal"
            />
          ) : (
            <img
              src={defaultIcon}
              alt="Default Icon"
              className="profile-image-modal"
            />
          )}
          <h2 className="profile-name">User Name</h2>
          <p className="profile-email">user@example.com</p>
          <p className="profile-userId">User ID: 12345</p>
          <Link to="/transaction-history" className="transaction-link">
            <img
              src={TransactionIcon}
              alt="Transaction icon"
              className="trans-image"
            />
            <span>Transaction History</span>
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default ProfileModal;
