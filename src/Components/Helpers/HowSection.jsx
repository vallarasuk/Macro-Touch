import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import Btn from "../Assects/Button";
import upload from "../Images/cloud-upload.svg";
import gear from "../Images/mdi_gear.svg";
import download from "../Images/material-symbols_cloud-download-rounded.svg";
import "./helper_style.css"; // Import the CSS file for custom styles

const HowSection = () => {
  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    animatedItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 200}ms`;
      item.classList.add("fade-in");
    });
  }, []);

  return (
    <div className="how_section d-flex align-items-center" id="how_section">
      <div className="container">
        <h1 className="text-center mb-5">How it Works</h1>
        <div className="row justify-content-evenly align-items-center">
          <div className="col-md-4 text-center d-flex align-items-center">
            <div className="animated-item">
              <img src={upload} alt="upload" className="animated-img" />
              <h2>Process Data</h2>
              <p className="p-2">
                Our system will process and analyze your transaction data.
              </p>
            </div>
            <BsArrowRight className="arrow-icon" size={64} />
          </div>
          <div className="col-md-4 text-center d-flex align-items-center">
            <div className="animated-item">
              <img src={gear} alt="gear" className="animated-img" />
              <h2>Let it Process</h2>
              <p className="p-2">
                Wait for a few seconds until we process the file and create the
                summarized report for you.
              </p>
            </div>
            <BsArrowRight className="arrow-icon" size={64} />
          </div>
          <div className="col-md-4 text-center d-flex align-items-center">
            <div className="animated-item">
              <img src={download} alt="download" className="animated-img" />
              <h2>Download the file</h2>
              <p className="p-2">
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
