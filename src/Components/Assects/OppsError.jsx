import React, { useState } from "react";
import OppsErrorImage from "../Images/oops error.svg";

const OppsError = ({ onClose }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleTryAgain = () => {
    setFadeOut(true); // Trigger the fade-out animation
    setTimeout(() => {
      onClose(); // Close the modal after the animation completes
    }, 500); // Adjust the timeout duration to match the transition duration in CSS
  };

  return (
    <div className="container">
      <div
        className={`row justify-content-center ${fadeOut ? "fade-out" : ""}`}
      >
        <div className="col text-center">
          <img src={OppsErrorImage} alt="Oops error" />
          <h2 className="mt-4">Error</h2>
          <p>Please upload a JPEG, PDF, or CSV file.</p>
          <h1 className="display-4 my-5">Oops!</h1>
          <button className="btn btn-primary" onClick={handleTryAgain}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default OppsError;
