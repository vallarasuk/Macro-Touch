import React, { useState, useEffect } from "react";
import logoicon from "../Images/logomain.svg"

const Logo = ({ logo_alt_name, logo_icon }) => {
  const [logoIcon, setLogoIcon] = useState("");

  useEffect(() => {
    // Make an API call to fetch the logo URL from the backend
    const fetchLogo = async () => {
      try {
        const response = await fetch("your-backend-logo-api-endpoint");
        if (response.ok) {
          const data = await response.json();
          setLogoIcon(data.logoIcon);
        } else {
          console.log("Failed to fetch logo");
        }
      } catch (error) {
        console.log("Error fetching logo:", error);
      }
    };

    fetchLogo();
  }, []);

  return (
    <div className="logo-container">
      {logoicon && (
        <img className="logo-image" src={logoicon} alt={logo_alt_name} />
      )}
      {!logoicon && (
        <img className="logo-image" src={logoicon} alt={logo_alt_name} />
      )}
    </div>
  );
};

export default Logo;
