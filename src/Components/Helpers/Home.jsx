import React from "react";
import home_section_image from "../Images/heroimage.png";
import Btn from "../Assects/Button";

const Home = () => {
  return (
    <div className="home_section d-flex align-items-center">
      <div className="row align-items-center">
        <div className="col-6 text-start  align-items-center flex-column">
          <h1 className="text-capitalize display-1 fw-light">
            Get Your Bank statement summarized
          </h1>
          <div className="my-3 ">
            <h3>Feel the Veracity</h3>
            <Btn
              button_name="Get Started"
              className="m-0 mt-4 get_start_btn_name"
            />
          </div>
        </div>
        <div className="col-6">
          <img src={home_section_image} alt="Bank Statement" />
        </div>
      </div>
    </div>
  );
};

export default Home;
