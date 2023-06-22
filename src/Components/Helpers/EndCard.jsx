import React from "react";
import Btn from "../Assects/Button";
import "./helper_style.css";

const EndCard = () => {
  return (
    <div className="my-5 summary_card">
      <div className="row">
        <div className="col-8 offset-2 text-center justify-content-center summary_card">
          <h1>Get your first Summarization </h1>
          <p className="mt-4">
            Get your summarization on your bank statements, There are no data
            leakage and not data storing grab you first report and have a
            comment over your bank account.
          </p>
          <Btn button_name="Get Started" className="custom_color" />
        </div>
      </div>
    </div>
  );
};

export default EndCard;
