import React from "react";
import "./assect_styles.css";

const Btn = ({ button_name, className }) => {
  return (
    <div>
      <button
        className={`${className} px-4 fw-bold text-capitalize button_style`}
      >
        {button_name}
      </button>
    </div>
  );
};

export default Btn;
