import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Btn from "../Assects/Button";
import Logo from "../Assects/Logo";
import CompanyName from "../Assects/CompanyName";
import logo_images from "../Images/logomain.svg";
import "./helper_style.css";
import axios from "axios"; // Import axios for making API requests

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // State to store login status
  const navigate = useNavigate(); // Use useNavigate hook for programmatic navigation

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check login status on mount
  useEffect(() => {
    // Make a request to the backend to check login status
    axios
      .get("/api/checkLoginStatus")
      .then((response) => {
        // Update the loggedIn state based on the response
        setLoggedIn(response.data.loggedIn);
      })
      .catch((error) => {
        console.log("Error checking login status:", error);
      });
  }, []);

  // Function to handle the "Log In" button click
  const handleLoginClick = () => {
    // Check if the user is registered based on the loggedIn state
    if (loggedIn) {
      // User is registered, redirect to the login page
      navigate("/login");
    } else {
      // User is not registered, redirect to the register page
      navigate("/get_started");
    }
  };

  return (
    <div className="container pt-3">
      <Navbar expand="md">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Logo logo_icon={logo_images} />
          <CompanyName name="Macro Touch" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleMenuToggle}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`justify-content-md-end ${isMenuOpen ? "show" : ""}`}
        >
          <Nav className="mx-auto fw-bold">
            <Nav.Link
              as={Link}
              to="/"
              style={{ color: "white" }}
              className={`mx-2 ${activeLink === "home" ? "active-link" : ""}`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Nav.Link>
            {/* Conditionally show the Files NavLink based on login status */}
            {loggedIn && (
              <Nav.Link
                as={Link}
                to="/files"
                style={{ color: "white" }}
                className={`mx-2 ${
                  activeLink === "files" ? "active-link" : ""
                }`}
                onClick={() => handleLinkClick("files")}
              >
                Files
              </Nav.Link>
            )}
            <Nav.Link
              as={Link}
              to="/price"
              style={{ color: "white" }}
              className={`mx-2 ${
                activeLink === "pricing" ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick("pricing")}
            >
              Pricing
            </Nav.Link>
          </Nav>
          <Nav>
            {/* Use the Btn component here */}
            <Btn
              className="px-4"
              button_name="Log In"
              onClick={handleLoginClick} // Call handleLoginClick function on click
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
