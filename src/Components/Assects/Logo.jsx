import React from "react";

const Logo = ({ logo_icon, logo_alt_name }) => {
  return (
    <div className="logo-container">
      <img className="logo-image" src={logo_icon} alt={logo_alt_name} />
    </div>
  );
};

export default Logo;
