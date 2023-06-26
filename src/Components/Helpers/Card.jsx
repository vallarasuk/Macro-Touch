import React from "react";

const Card = ({ title, image, content, className, topColor, bottomColor }) => {
  const isLoading = false; // Set this to true when the card is in a loading state

  return (
    <div className="col-lg-4 col-md-6">
      <div
        className={`card ${className} ${isLoading ? "loading" : ""}`}
        style={{
          border: "none",
          borderRadius: "12.179px",
          position: "relative",
        }}
      >
        {isLoading ? (
          <div className="loading-spinner"></div>
        ) : (
          <>
            <div className="card-img text-center">
              <img src={image} alt="vector" className="p-5" />
            </div>
            <div className="card-body">
              <h5 className="text-center">{title}</h5>
              <p>{content}</p>
            </div>
          </>
        )}
        <div
          className="custom-border-top"
          style={{ background: topColor }}
        ></div>
        <div
          className="custom-border-bottom"
          style={{ background: bottomColor }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
