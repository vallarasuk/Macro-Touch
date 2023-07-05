import React, { useState, useEffect } from "react";

const Logo = ({ logo_alt_name,logo_icon }) => {
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
      {logoIcon && (
        <img className="logo-image" src={logoIcon} alt={logo_alt_name} />
      )}
        <img className="logo-image" src={logo_icon} alt={logo_alt_name} />

    </div>
  );
};

export default Logo;
