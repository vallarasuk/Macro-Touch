import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // You may need to import axios if you haven't already

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError(""); // Clear any previous error messages

    // Make an API call to your backend to authenticate the user
    axios
      .post("/api/login", { email, password })
      .then((response) => {
        // Assuming the backend returns a success message or a token upon successful login
        // You can handle the authentication logic here, such as storing the token in local storage, etc.
        console.log("Login successful:", response.data);

        // Redirect the user to a dashboard or home page after successful login
        // Replace "/dashboard" with the actual path to your dashboard page
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        // Handle login error
        setError("Invalid email or password. Please try again.");
        console.log("Login error:", error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="input-field">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
