import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./helper_style.css";

const InstructionModal = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleGotIt = () => {
    setIsOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (isOpen) {
      rootElement.classList.add("modal-open");
    } else {
      rootElement.classList.remove("modal-open");
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleGotIt}
      className="instruction-modal"
      overlayClassName="instruction-modal-overlay"
    >
      <h2 className="modal-title text-center mb-4">Instruction</h2>
      <div className="modal-content">
        <ul className="step-list">
          <li>
            <span className="step-number">1.</span>
            Drag and drop your file or click browse to search on your computer
          </li>
          <li>
            <span className="step-number">2.</span>
            The file should be in JPEG, CSV, or PDF formats
          </li>
          <li>
            <span className="step-number">3.</span>
            Choose your bank from the dropdown below
          </li>
          <li>
            <span className="step-number">4.</span>
            Enter the maximum amount you need to get summarized in the next box
          </li>
          <li>
            <span className="step-number">5.</span>
            Then click the upload
          </li>
        </ul>
      </div>

      <div className="d-flex justify-content-center">
        <button className="got-it-button" onClick={handleGotIt}>
          Got it
        </button>
      </div>
    </Modal>
  );
};

export default InstructionModal;
