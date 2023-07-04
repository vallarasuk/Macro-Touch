import React from "react";
import Btn from "../Assects/Button";
import vector from "../Images/Vector.svg";

const Card = ({ title, creditCount, price, color, creditText }) => {
  return (
    <div
      className="card shadow d-flex flex-column justify-content-center align-items-center"
      style={{
        borderTop: `5px solid ${color}`,
        borderBottom: `5px solid ${color}`,
        borderLeft: "none",
        borderRight: "none",
        borderRadius: "14px",
        padding: "20px", // Add padding for spacing
        minWidth: "280px", // Set minimum width for the card
        maxWidth: "400px", // Set maximum width for the card
        margin: "0 auto", // Center the card horizontally
      }}
    >
      <div className="card-img text-center pt-4">
        <img
          className="vector_img shadow img-fluid"
          src={vector}
          alt="vector"
          style={{ maxWidth: "100%" }} // Set maximum width for the image
        />
      </div>
      <div className="card-body">
        <h5 className="fw-bold text-center my-2">{title}</h5>
        <p className="my-3 text-center">
          {/* Center align the text */}
          {creditText} <br />
          <span className="fw-bold price-color text-start d-inline-block my-1">
            {price}
          </span>
        </p>
        <div className="buy_btn text-center my-4">
          <Btn button_name="Buy" />
        </div>
      </div>
    </div>
  );
};

export default Card;
