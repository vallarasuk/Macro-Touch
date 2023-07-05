import React, { useState } from "react";
import userIcon from "../Images/usericon.svg";
import tickStar from "../Images/ticketstar.svg";
import "./helper_style.css";
import Modal from "react-modal";
import TransactionDetail from "./TransactionDetail";
import TransactionIcon from "../Images/uil_transaction.png";

const ProfileInfo = () => {
  return (
    <div
      className="profile-info"
      style={{ backgroundColor: "background: rgba(255, 255, 255, 0.38)" }}
    >
      <div className="card profile">
        <div className="profile-section d-flex">
          <img src={userIcon} alt="User Profile" className="profile-image" />
          <h3 className="text-decoration-underline">Your Profile</h3>
        </div>

        <div className="profile-section d-flex">
          <img
            src={TransactionIcon}
            alt="Transaction icon"
            className="trans-image"
          />
          <h3 className="text-decoration-underline">Transaction History</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
