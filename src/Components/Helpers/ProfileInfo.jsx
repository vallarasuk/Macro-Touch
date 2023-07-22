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
import { CSSTransition } from "react-transition-group";

const ProfileInfo = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from the backend and get the profile image URL
    axios
      .get("/api/userDetails") // Replace this with the appropriate API endpoint
      .then((response) => {
        const userData = response.data;
        setUserDetails(userData); // Save the user details in state
        const userImage = userData.profileImage;
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
    // Check user login from backend before opening the modal
    axios
      .get("/api/checkLogin") // Replace this with the appropriate API endpoint for checking user login
      .then((response) => {
        const isLoggedIn = response.data.isLoggedIn;
        if (isLoggedIn) {
          setIsModalOpen(true); // Open the modal with user details
        } else {
          // Redirect to the login page if not logged in
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log("Error checking user login:", error);
      });
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
          <Link className="d-flex align-items-center" onClick={handleOpenModal}>
            {/* Display the user's profile image or the default icon */}
            {profileImage ? (
              <img
                src={profileImage}
                alt="User Profile"
                className="profile-image"
              />
            ) : (
              <img
                src={defaultIcon}
                alt="Default Icon"
                className="profile-image"
              />
            )}
            <h3 className="text-decoration-underline ms-3">Your Profile</h3>
          </Link>
        </div>

        <div className="profile-section d-flex align-items-center">
          <img
            src={TransactionIcon}
            alt="Transaction icon"
            className="trans-image"
          />
          <h3 className="text-decoration-underline ms-3">
            Transaction History
          </h3>
        </div>
        {/* Logout Button */}
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      {/* User Detail Modal */}
      <CSSTransition
        in={isModalOpen}
        timeout={800}
        classNames="profile-info-modal"
        unmountOnExit
      >
        <ProfileModal closeModal={handleCloseModal} userDetails={userDetails} />
      </CSSTransition>
    </div>
  );
};

export default ProfileInfo;
