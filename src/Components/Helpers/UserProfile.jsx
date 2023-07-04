import React, { useState, useEffect } from "react";
import userIcon from "../Images/usericon.svg";
import tickStar from "../Images/ticketstar.svg";
import "./helper_style.css";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user profile data from the backend
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      // Make an API call to fetch user profile data
      const response = await fetch("your-backend-api-endpoint");
      const data = await response.json();

      // Update the user profile data in the state
      setUserData(data);
    } catch (error) {
      console.log("Error fetching user profile data:", error);
    }
  };

  const handleProfileClick = () => {
    // Open the user's profile with the necessary information
    // You can implement your logic to open the profile here
    console.log("Opening user profile:", userData);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      onClick={handleProfileClick}
      style={{ cursor: "pointer" }}
    >
      {userData && (
        <>
          <div className="credit p-1">
            <div className="d-flex align-items-center">
              <img className="count_icon" src={tickStar} alt="counting icon" />
              <strong className="fw-bold h4 ms-3">
                {userData.creditCount}
              </strong>
            </div>
          </div>
          <div className="user-icon mx-3">
            <img src={userIcon} alt="User Profile" />
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
