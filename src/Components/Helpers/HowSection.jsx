import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Btn from "../Assects/Button";
import "./helper_style.css";

const HowSection = () => {
  return (
    <div className="how_section d-flex align-items-center">
      <div className="container">
        <h1 className="mt-5 text-center p-md-5">How it Works</h1>
        <div className="row justify-content-evenly">
          <div className="col-md-4 text-center d-flex align-items-center">
            <div>
              <h1>Process Data</h1>
              <p>Our system will process and analyze your transaction data.</p>
            </div>
            <BsArrowRight size={64} />
          </div>
          <div className="col-md-4 text-center d-flex align-items-center">
            <div>
              <h1>Let it Process</h1>
              <p>
                Wait for a few seconds until we process the file and create the
                summarized report for you.
              </p>
            </div>
            <BsArrowRight size={64} />
          </div>
          <div className="col-md-4 text-center d-flex align-items-center">
            <div>
              <h1>Download the file</h1>
              <p>
                Once your report is ready, download the report and <br />
                <span className="custom_color fw-bold">Feel the veracity.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center my-5">
          <Btn button_name="Get started" />
        </div>
      </div>
    </div>
  );
};

export default HowSection;
