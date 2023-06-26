import React from "react";
import userIcon from "../Images/usericon.svg";
import tickStar from "../Images/ticketstar.svg";

const UserProfile = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="credit p-1">
        <div className="d-flex align-items-center">
          <img className="count_icon" src={tickStar} alt="counting icon" />
          <strong className="fw-bold h4 ms-3">02</strong>
        </div>
      </div>
      <div className="user-icon mx-3">
        <img src={userIcon} alt="User Profile" />
      </div>
    </div>
  );
};

export default UserProfile;
