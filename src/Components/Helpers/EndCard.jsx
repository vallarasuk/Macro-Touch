import React from "react";
import Btn from "../Assects/Button";
import "./helper_style.css";

const EndCard = () => {
  return (
    <div className="container end_card">
      <div className="row">
        <div
          className="col-md-10 offset-md-1 shadow p-5 rounded-5 text-center summary_card shadow-lg"
          style={{
            background: "linear-gradient(67.3deg, #1B0069, #AD00FF)",
          }}
        >
          <h1 className="pb-4">Get Your First Summarization</h1>
          <p className="px-md-5 pb-4 mx-5">
            Get your summarization on your bank statements. There is no data
            leakage and no data storing. Grab your first report and have a
            comprehensive view of your bank account.
          </p>
          <Btn button_name="Get Started" className="custom_color end-btn" />
        </div>
      </div>
    </div>
  );
};

export default EndCard;
