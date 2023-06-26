import React from "react";
import Logo from "./Logo";
import logo_images from "../Images/logomain.svg";
import CompanyName from "./CompanyName";
import { Navbar } from "react-bootstrap";
import Btn from "./Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./assect_styles.css"; // Your custom CSS file

const Register = () => {
  const [phone, setPhone] = React.useState("");
  const [otpSent, setOtpSent] = React.useState(false);
  const [otp, setOtp] = React.useState("");

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleGetOTP = () => {
    // Simulate sending OTP via API call
    simulateOTPSending()
      .then(() => {
        setOtpSent(true);
      })
      .catch((error) => {
        console.log("Error sending OTP:", error);
      });
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleVerifyOTP = () => {
    // Simulate OTP verification via API call
    simulateOTPVerification()
      .then(() => {
        console.log("OTP verification successful");
      })
      .catch((error) => {
        console.log("Error verifying OTP:", error);
      });
  };

  const simulateOTPSending = () => {
    // Simulate API call delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success response
        resolve();
      }, 1000);
    });
  };

  const simulateOTPVerification = () => {
    // Simulate API call delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success response
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="register_section p-3">
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <Logo logo_icon={logo_images} />
        <CompanyName name="Macro Touch" />
      </Navbar.Brand>
      <div className="input_content text-center">
        <div className="mt-md-5 pt-md-5">
          <h1>Register to get your First Report</h1>
          <p>Enter your phone number to register yourself and verify the OTP</p>
        </div>

        <div className="input_section center-input">
          <div className="input_field my-5">
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
        </div>
      </div>
    </div>
  );
};

export default Register;
