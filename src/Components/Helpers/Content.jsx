import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import profile from "../Images/Ellipse 4.png";
import accuracy from "../Images/accuracy.svg";
import dataPrivacy from "../Images/data-privacy.svg";
import privacy from "../Images/material-symbols_shield-lock-outline.svg";
import think_image from "../Images/thinkimage.png";
import timeline from "../Images/timeline.svg";
import EndCard from "./EndCard";
import HowSection from "./HowSection";
import "./helper_style.css";

const testimonials = [
  {
    name: "John Doe",
    testimonial:
      "Before MacroTouch, I struggled to understand my bank statement. Now, with automatic categorization and a clear summary, I recommend it to anyone seeking financial clarity.",
    profile_image: profile,
  },
  {
    name: "John Doe",
    testimonial:
      "Before MacroTouch, I struggled to understand my bank statement. Now, with automatic categorization and a clear summary, I recommend it to anyone seeking financial clarity.",
    profile_image: profile,
  },
  {
    name: "John Doe",
    testimonial:
      "Before MacroTouch, I struggled to understand my bank statement. Now, with automatic categorization and a clear summary, I recommend it to anyone seeking financial clarity.",
    profile_image: profile,
  },
  // Add more testimonials here
];

const Content = () => {
  return (
    <>
      <HowSection />

      <div className="why_section">
        <div className="container">
          <h1 className="mb-5 text-center">Why Choose Us</h1>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6 mb-5 px-3">
                  <img src={privacy} alt="Privacy" />
                  <h2>Privacy</h2>
                  <p>Protect user data and ensure confidentiality.</p>
                </div>
                <div className="col-md-6 mb-5 px-3">
                  <img src={accuracy} alt="Accuracy" />
                  <h2>Accuracy</h2>
                  <p>Improve data accuracy to enhance user experience.</p>
                </div>
                <div className="col-md-6 mb-5 px-3">
                  <img src={timeline} alt="Timeliness" />
                  <h2>Timeliness</h2>
                  <p>No delay to improve user satisfaction and experience.</p>
                </div>
                <div className="col-md-6 mb-5 px-3">
                  <img src={dataPrivacy} alt="Data Privacy" />
                  <h2>Data Privacy</h2>
                  <p>Not storing your data, ensuring no data leakage.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <img
                src={think_image}
                alt="Illustration of decision-making"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 listen_section">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div>
              <h1 className="text-center">Listen to Others' Experiences</h1>
              <div
                id="carouselExampleRide"
                className={`carousel slide my-5 text-center`}
                data-bs-ride="carousel"
              >
                <div className={`carousel-inner `}>
                  {testimonials.map((testimonial, index) => (
                    <div
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      key={index}
                    >
                      <div className="row justify-content-center my-4">
                        <div className="col-10 col-md-6">
                          <img
                            src={testimonial.profile_image}
                            className="d-block mx-auto"
                            alt="..."
                          />
                        </div>
                      </div>
                      <h4 className="fw-bold">{testimonial.name}</h4>
                      <p className="text-center col-10 offset-1">
                        {testimonial.testimonial}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  className={`carousel-control-prev`}
                  type="button"
                  data-bs-target="#carouselExampleRide"
                  data-bs-slide="prev"
                >
                  <BsChevronLeft
                    size={34}
                    className={`carousel-control-icon `}
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className={`carousel-control-next `}
                  type="button"
                  data-bs-target="#carouselExampleRide"
                  data-bs-slide="next"
                >
                  <BsChevronRight
                    size={34}
                    className={`carousel-control-icon `}
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EndCard />
    </>
  );
};

export default Content;
