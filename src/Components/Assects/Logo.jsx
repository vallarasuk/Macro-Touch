import React from "react";

const Logo = ({ logo_icon, logo_alt_name }) => {
  return (
    <div className="mx-2">
      <img width={44} height={44} src={logo_icon} alt={logo_alt_name} />
    </div>
  );
};

export default Logo;
