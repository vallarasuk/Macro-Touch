import React, { useRef, useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { FaSyncAlt } from "react-icons/fa";
import Logo from "./Logo";
import CompanyName from "./CompanyName";
import logo_images from "../Images/logomain.svg";
import Btn from "./Button";
import "./VerifyOTP.css"; // Your custom CSS file

const VerifyOTP = () => {
  const inputRefs = useRef([]);
  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval;
    if (isVerified) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isVerified]);

  useEffect(() => {
    if (timer === 0) {
      setIsVerified(false);
      setTimer(30);
    }
  }, [timer]);

  const handleInputChange = (e, index) => {
    let { value } = e.target;
    // Remove non-digit characters from the input value
    value = value.replace(/[^0-9]/g, "");

    if (value.length === 1) {
      // Move focus to the next input field when entering a digit
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }

    // Update the input value with the validated number-only value
    e.target.value = value;
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      // Move focus to the previous input field when pressing Backspace and the current field is empty
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyClick = () => {
    setIsVerified(true);
  };

  const handleResendClick = () => {
    setIsVerified(false);
    setTimer(30);
  };

  return (
    <div className="verify_section p-3">
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <Logo logo_icon={logo_images} />
        <CompanyName name="Macro Touch" />
      </Navbar.Brand>
      <div className="input_content text-center">
        <div className="mt-md-5 pt-md-5">
          <h1>Register to use our service</h1>
          <p>Enter Your received OTP</p>
          <div className="otp-input-container my-5">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                type="text"
                className="otp-input no-spin-button"
                maxLength={1}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>
          <div className="my-5 verify_layout">
            {!isVerified ? (
              <Btn
                button_name="Verify"
                className="verify_btn"
                onClick={handleVerifyClick}
              />
            ) : (
              <div className="countdown">
                {timer > 0 ? (
                  <div className="countdown-content">
                    <p>Resend in</p>
                    <p className="countdown-timer">{timer} seconds</p>
                  </div>
                ) : (
                  <div className="countdown-content">
                    <p>Click below to resend</p>
                  </div>
                )}
                <div className="countdown-icon">
                  <FaSyncAlt className="rotate-icon" />
                </div>
              </div>
            )}
          </div>

          {!isVerified && timer <= 0 && (
            <div className="resend">
              <a href="#/" onClick={handleResendClick}>
                Resend
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
