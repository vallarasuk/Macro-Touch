import React, { useState } from "react";
import Logo from "./Logo";
import CompanyName from "./CompanyName";
import { Navbar, Row, Col } from "react-bootstrap";
import Btn from "./Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [profileName, setProfileName] = useState("");
  const [profileCreditScore, setProfileCreditScore] = useState("");

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const navigate = useNavigate(); // Use useNavigate hook for programmatic navigation

  const handleGetOTP = () => {
    // Send the phone number to the server to get OTP
    axios
      .post("http://localhost:5000/api/sendOTP", { phoneNumber: phone })
      .then(() => {
        setOtpSent(true);

        // Redirect to the VerifyOTP page after OTP is sent
        navigate("/verify-otp");
      })
      .catch((error) => {
        console.log("Error sending OTP:", error);
      });
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleVerifyOTP = () => {
    // Send the OTP to the server for verification
    axios
      .post("/api/verifyOTP", { otp })
      .then(() => {
        // Simulate fetching user details from the backend
        simulateFetchUserDetails()
          .then((data) => {
            setProfilePicture(data.profilePicture);
            setProfileName(data.profileName);
            setProfileCreditScore(data.profileCreditScore);
          })
          .catch((error) => {
            console.log("Error fetching user details:", error);
          });
      })
      .catch((error) => {
        console.log("Error verifying OTP:", error);
      });
  };

  // Function to simulate fetching user details from the backend
  const simulateFetchUserDetails = () => {
    // Simulate API call delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success response with user details
        const data = {
          profilePicture: "profile-picture-url",
          profileName: "John Doe",
          profileCreditScore: 750,
          // Add other user details
        };
        resolve(data);
      }, 1000);
    });
  };

  return (
    <div className="register_section p-3">
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <Logo />
        <CompanyName name="Macro Touch" />
      </Navbar.Brand>
      <div className="input_content text-center">
        <Row className="mt-md-5 pt-md-5">
          <Col>
            <h1>Register to get your First Report</h1>
            <p>
              Enter your phone number to register yourself and verify the OTP
            </p>
          </Col>
        </Row>

        <Row className="input_section d-inline-block text-center">
          <Col>
            <div className="input_field  d-inline-bock my-5">
              <PhoneInput
                country={"in"} // Set default country (e.g., India)
                value={phone}
                onChange={handlePhoneChange}
                containerClass="phone-input-container"
                inputClass="custom-input-class"
                inputProps={{
                  placeholder: "00000 00000",
                }}
              />
            </div>
            {!otpSent ? (
              <div className="input_button">
                <Btn
                  button_name="Get OTP"
                  className="input_btn"
                  onClick={handleGetOTP}
                />
              </div>
            ) : (
              <div className="input_button">
                <input
                  type="text"
                  className="input_box"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={handleOtpChange}
                />
                <Btn
                  button_name="Verify OTP"
                  className="input_btn"
                  onClick={handleVerifyOTP}
                />
              </div>
            )}
          </Col>
        </Row>

        {/* Display user details */}
        {profilePicture && (
          <div className="user-details">
            <img
              src={profilePicture}
              alt="Profile_Picture"
              className="profile-picture"
            />
            <h2 className="profile-name">{profileName}</h2>
            <p className="profile-credit-score">
              Credit Score: {profileCreditScore}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
