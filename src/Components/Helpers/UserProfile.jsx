import React, { useState, useRef, useEffect } from "react";
import userIcon from "../Images/usericon.svg";
import tickStar from "../Images/ticketstar.svg";
import "./helper_style.css";
import Modal from "react-modal";
import ProfileInfo from "./ProfileInfo";

const UserProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleClickOutsideModal = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      !event.target.classList.contains("user-icon") &&
      !event.target.classList.contains("count_icon") &&
      !event.target.classList.contains("card")
    ) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideModal);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, []);

  return (
    <div>
      <div
        className={`d-flex justify-content-center align-items-center ${
          modalIsOpen ? "popup-open" : ""
        }`}
        style={{ cursor: "pointer" }}
        onClick={openModal}
      >
        <div className="credit p-1">
          <div className="d-flex align-items-center">
            <img className="count_icon" src={tickStar} alt="counting icon" />
            <strong className="fw-bold h4 ms-3">02</strong>
          </div>
        </div>
        <div className="user-icon mx-3">
          <img src={userIcon} alt="User Profile" />
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="User Profile Modal"
        className="user-profile-modal"
        overlayClassName="user-profile-overlay"
        closeTimeoutMS={300}
        shouldCloseOnOverlayClick={false} // Disable close on overlay click
      >
        <div className={`user-profile-modal-content`} ref={modalRef}>
          <ProfileInfo closeModal={closeModal} />
        </div>
      </Modal>
    </div>
  );
};

export default UserProfile;
