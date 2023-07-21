import React from "react";
import { useNavigate } from "react-router-dom";
import "./assect_styles.css";

const Btn = ({ button_name, className, link }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(link);
  };

  return (
    <button
      className={`${className} px-4 fw-bold text-capitalize button_style`}
      onClick={handleLoginClick} // Call handleLoginClick function on click
    >
      {button_name}
    </button>
  );
};

export default Btn;
