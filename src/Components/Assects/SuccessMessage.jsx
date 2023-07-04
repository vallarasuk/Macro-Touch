import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./assect_styles.css";

const SuccessMessage = ({ closeModal, downloadStarted }) => {
  const handleCloseModal = () => {
    closeModal(); // Call the close modal function passed from the parent
  };

  return (
    <div
      className={`modal fade show d-flex align-items-center justify-content-center ${
        downloadStarted ? "success-modal" : "hidden-modal"
      }`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content success-parent">
          <div className="modal-body">
            <div className="success-title text-center">
              <FontAwesomeIcon
                icon={faCheck}
                size="3x"
                className="tick-icon rounded-circle text-white"
              />
              <h1>Feel the veracity</h1>
              <p>Your download has started</p>
              <button className="back-button" onClick={handleCloseModal}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
