// ProfileModal.js
import React from "react";
import Modal from "react-modal";
import defaultIcon from "../Images/gg_profile.png";
import TransactionIcon from "../Images/uil_transaction.png";
import { Link } from "react-router-dom";


const ProfileModal = ({ isOpen, onRequestClose, profileImage }) => {
  return (
    
    <div className="profile-info">
    <div className="card profile">
      <div className="profile-section d-flex">
        {/* Use Link for navigation */}
        <Link
          className="d-flex align-items-center"
          // to="/detail"
          // onClick={handleOpenModal}
        >
          {/* Display the user's profile image or the default icon */}
          {profileImage ? (
            <img src={profileImage} alt="User Profile" className="profile-image" />
          ) : (
            <img src={defaultIcon} alt="Default Icon" className="profile-image" />
          )}
          <h3 className="text-decoration-underline ms-3">Your Profile</h3>
        </Link>
      </div>

      <div className="profile-section d-flex align-items-center">
        <img src={TransactionIcon} alt="Transaction icon" className="trans-image" />
        <h3 className="text-decoration-underline ms-3">Transaction History</h3>
      </div>
    </div>
  </div>
  );
};

export default ProfileModal;
