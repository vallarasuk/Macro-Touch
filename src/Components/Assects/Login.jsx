import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");
  const [showOTPField, setShowOTPField] = useState(false);

  const handleLogin = () => {
    setError("");

    // Make an API call to your backend to initiate the login process and send OTP
    axios
      .post("/api/sendOTP")
      .then((response) => {
        console.log("OTP sent successfully:", response.data);
        setShowOTPField(true);
      })
      .catch((error) => {
        setError("Failed to send OTP. Please try again.");
        console.log("OTP sending error:", error);
      });
  };

  const navigate = useNavigate(); // Use the useNavigate hook for programmatic navigation

  const handleOTPVerification = () => {
    setError("");

    // Make an API call to your backend to verify the OTP
    axios
      .post("/api/verifyOTP", { otp })
      .then((response) => {
        console.log("OTP verification successful:", response.data);
        // Assuming the backend returns a success message or a token upon successful OTP verification
        // You can handle the authentication logic here, such as storing the token in local storage, etc.
        console.log("Login successful:", response.data);

        // Use the navigate function to redirect the user to the dashboard or home page after successful login
        navigate("/files"); // Replace "/dashboard" with the actual path to your dashboard page
      })
      .catch((error) => {
        setError("Invalid OTP. Please try again.");
        console.log("OTP verification error:", error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      {!showOTPField ? (
        <button className="login-button" onClick={handleLogin}>
          Get OTP
        </button>
      ) : (
        <>
          <div className="input-field">
            <label>OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
          </div>
          <button className="login-button" onClick={handleOTPVerification}>
            Verify OTP
          </button>
        </>
      )}
      <p>
        Don't have an account? <Link to="/get_started">Register</Link>
      </p>
    </div>
  );
};

export default Login;
