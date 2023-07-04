import React from "react";
import OppsErrorImage from "../Images/oops error.svg";

const OppsFail = () => {
  return (
    <div className="d-flex align-items-center justify-content-center oops-parent">
      <div className="text-center">
        <img src={OppsErrorImage} alt="Oops error" className="img-fluid" />
        <h1 className="opps-fail-title">Oops!</h1>
        <h4 className="oops-fail-title-content">Insufficient balance</h4>
        <a href="/price" className="oops-fail-connect-link">
          Recharge your credits to continue
        </a>
      </div>
    </div>
  );
};

export default OppsFail;
