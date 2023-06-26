import React from "react";
import vector from "../Images/Vector.svg";
import "./helper_style.css";
import Btn from "../Assects/Button";

const PriceCard = () => {
  return (
    <div className="container">
      <h1 className="text-center my-3">The Credit Packs</h1>

      <div className="row mt-5 justify-content-evenly align-items-center">
        <div className="col-lg-4 col-md-6">
          <div
            className="card shadow d-flex flex-column justify-content-center align-items-center"
            style={{
              borderTop: "5px solid #7201C2",
              borderBottom: "5px solid #7201C2",
              borderLeft: "none",
              borderRight: "none",
              borderRadius: "14px",
            }}
          >
            <div className="card-img text-center pt-4">
              <img
                className="vector_img shadow img-fluid"
                src={vector}
                alt="vector"
              />
            </div>
            <div className="card-body">
              <h5 className="fw-bold text-center my-2">1 Credit</h5>
              <p className="my-3">
                The cost of one credit is just <br />
                <span className="fw-bold price-color text-start d-inline-block my-1">
                  Rs 9
                </span>
              </p>
              <div className="buy_btn text-center my-4">
                <Btn button_name="Buy" />
              </div>
            </div>
          </div>
        </div>

        {/* card two */}
        <div className="col-lg-4 col-md-6">
          <div
            className="card shadow d-flex flex-column justify-content-center align-items-center"
            style={{
              borderTop: "5px solid #FFC231",
              borderBottom: "5px solid #FFC231",
              borderLeft: "none",
              borderRight: "none",
              borderRadius: "14px",
              height: "70vh",
            }}
          >
            <div className="card-img text-center pt-4">
              <img
                className="vector_img shadow img-fluid"
                src={vector}
                alt="vector"
              />
            </div>
            <div className="card-body">
              <h5 className="fw-bold text-center my-2">6 Credit</h5>
              <p className="my-3">
                The cost of one pack is just <br />
                <span className="fw-bold price-color text-start d-inline-block my-1">
                  Rs 49
                </span>
              </p>
              <div className="buy_btn text-center my-4">
                <Btn button_name="Buy" />
              </div>
            </div>
          </div>
        </div>

        {/* Card three */}

        <div className="col-lg-4 col-md-6">
          <div
            className="card shadow d-flex flex-column justify-content-center align-items-center"
            style={{
              borderTop: "5px solid #7201C2",
              borderBottom: "5px solid #7201C2",
              borderLeft: "none",
              borderRight: "none",
              borderRadius: "14px",
            }}
          >
            <div className="card-img text-center pt-4">
              <img
                className="vector_img shadow img-fluid"
                src={vector}
                alt="vector"
              />
            </div>
            <div className="card-body">
              <h5 className="fw-bold text-center my-2">14 Credit</h5>
              <p className="my-3">
                The cost of one pack is just <br />
                <span className="fw-bold price-color text-start d-inline-block my-1">
                  Rs 99
                </span>
              </p>
              <div className="buy_btn text-center my-4">
                <Btn button_name="Buy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
