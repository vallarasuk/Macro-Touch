import React from "react";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Btn from "../Assects/Button";
import think_image from "../Images/thinkimage.png";
import profile from "../Images/gg_profile.png";
import EndCard from "./EndCard";

const Content = () => {
  return (
    <div>
      {/* how it section */}
   <div className="how_section">
   <h1 className="mt-5 text-center p-md-5">How it Works</h1>
      <div className="row justify-content-evenly">
        <div className="col-3 text-center d-flex align-items-center">
          <div>
            <h1>Process Data</h1>
            <p>Our system will process and analyze your transaction data. </p>
          </div>
          <BsArrowRight size={64} />
        </div>
        <div className="col-3 text-center d-flex align-items-center">
          <div>
            <h1>Let it Process</h1>
            <p>
              Wait for few second untill we process the file and create the
              summarized report for you.
            </p>
          </div>
          <BsArrowRight size={64} />
        </div>
        <div className="col-3 text-center d-flex align-items-center">
          <div>
            <h1>Download the file</h1>
            <p>
              Once your report is ready. <br /> Download the report and <br />
              <span className="custom_color fw-bold">Feel the veracity.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <Btn button_name="Get stared" />
      </div>
   </div>

      {/* why to choose us */}
      <div className="why_section">
        <h1 className="my-5 text-center p-md-5">Why to choose us</h1>

        <div className="row align-items-center">
          <div className="col-8">
            <div className="row">
              <div className="d-flex justify-content-evenly">
                <div className="col-5 my-5 px-3">
                  <h2>Privacy</h2>
                  <p>Protect user data and ensure confidentiality.</p>
                </div>
                <div className="col-5 my-5 px-3">
                  <h2>Accuracy</h2>
                  <p>Improve data accuracy can enhance user expreience.</p>
                </div>
              </div>
              <div className="d-flex justify-content-evenly">
                <div className="col-5 my-5 px-3">
                  <h2>Timeliness</h2>
                  <p>No delay to improve user satisfaction and expreience.</p>
                </div>
                <div className="col-5 my-5 px-3">
                  <h2>Data Privacy</h2>
                  <p>
                    Not storing your data and this leads to no data leakage.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 text-center">
            <img src={think_image} alt="Illustration of decision-making" />
          </div>
        </div>
      </div>

      {/* listen to other experiences */}
      <div className="container my-5 listen_section ">
        <div className="row justify-content-center mt-5 align-item-center">
          <div className="col-10">
            <div>
              <h1 className="text-center">
                Listen to others' experiences
              </h1>
              <div
                id="carouselExampleRide"
                className="carousel slide my-5 text-center"
                data-bs-ride="true"
              >
                <div className="carousel-inner text-center">
                  <div className="carousel-item active row">
                    <div className="d-flex justify-content-center my-4">
                      <img src={profile} className="d-block" alt="..." />
                      <br />
                    </div>
                    <h4 className="fw-bold">John Doe</h4>
                    <p className="text-center col-8 offset-2">
                      "Before MacroTouch, I struggle to understand my bank
                      statement. Now, with automatic categorization and a clear
                      summary, I recommend it to anyone seeking financial
                      clarity."
                    </p>
                  </div>
                  <div className="carousel-item row">
                    <div className="d-flex justify-content-center my-4">
                      <img src={profile} className="d-block" alt="..." />
                    </div>
                    <h4 className="fw-bold">John Doe</h4>
                    <p className="text-center col-8 offset-2">
                      "Before MacroTouch, I struggle to understand my bank
                      statement. Now, with automatic categorization and a clear
                      summary, I recommend it to anyone seeking financial
                      clarity."
                    </p>
                  </div>
                  <div className="carousel-item row">
                    <div className="d-flex justify-content-center my-4">
                      <img src={profile} className="d-block" alt="..." />
                    </div> <h4 className="fw-bold">John Doe</h4>
                    <p className="text-center  col-8 offset-2">
                      "Before MacroTouch, I struggle to understand my bank
                      statement. Now, with automatic categorization and a clear
                      summary, I recommend it to anyone seeking financial
                      clarity."
                    </p>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleRide"
                  data-bs-slide="prev"
                >
                  <BsChevronLeft size={34} className="carousel-control-icon" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleRide"
                  data-bs-slide="next"
                >
                  <BsChevronRight size={34} className="carousel-control-icon" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EndCard/>
    </div>
  );
};

export default Content;
