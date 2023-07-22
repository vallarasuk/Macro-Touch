import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileModal from "./ProfileModal";
import userIcon from "../Images/usericon.svg";
import tickStar from "../Images/ticketstar.svg";
import "./helper_style.css";
import TransactionIcon from "../Images/uil_transaction.png";
import defaultIcon from "../Images/gg_profile.png";
import Btn from "../Assects/Button";

const ProfileInfo = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from the backend and get the profile image URL
    axios
      .get("/api/userDetails") // Replace this with the appropriate API endpoint
      .then((response) => {
        const userImage = response.data.profileImage;
        if (userImage) {
          // If the user has a profile image, set it in the state
          setProfileImage(userImage);
        } else {
          // If the user does not have a profile image, set the default icon
          setProfileImage(defaultIcon);
        }
      })
      .catch((error) => {
        console.log("Error fetching user details:", error);
      });
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    // Implement the logout functionality here (e.g., clear user session)
    // For example, if you are using localStorage to store user authentication:
    localStorage.removeItem("authToken"); // Remove the user authentication token
    navigate("/login"); // Redirect to the login page after logout using navigate
  };

  return (
    <div className="profile-info">
      <div className="card profile">
        <div className="profile-section d-flex">
          {/* Use Link for navigation */}
          <Link
            className="d-flex align-items-center"
            onClick={handleOpenModal}
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
        {/* Logout Button */}
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
      </div>

      

      {/* Profile Modal */}
      {/* <ProfileModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        profileImage={profileImage}
      /> */}
    </div>
  );
};

export default ProfileInfo;
