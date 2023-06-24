import React from "react";
import Btn from "../Assects/Button";
import "./helper_style.css";

const EndCard = () => {
  return (
    <div className="container summary_card">
      <div className="row">
        <div className="col-md-10 offset-md-1 shadow p-5 rounded-5 text-center summary_card" style={{ backgroundColor: "linear-gradient(67.3deg, #1B0069 -32.92%, #AD00FF 101.42%)" }}>
          <h1>Get Your First Summarization</h1>
          <p className="px-md-5 p-3 m-md-5">
            Get your summarization on your bank statements. There is no data
            leakage and no data storing. Grab your first report and have a
            comprehensive view of your bank account.
          </p>
          <Btn button_name="Get Started" className="custom_color" />
        </div>
      </div>
    </div>
  );
};

export default EndCard;
