import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Assects/Logo";
import logo_images from "../Images/whiteLogo.svg";
import "./helper_style.css";
import UserProfile from "./UserProfile";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLinkClick = (link) => {
    if (link !== activeLink) {
      setActiveLink(link);
      setIsMenuOpen(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to fetch user authentication status from the backend
  const fetchUserAuthenticationStatus = () => {
    // Make an API call to the backend to get the user authentication status
    // Replace 'backend_auth_endpoint' with your actual backend API endpoint
    fetch("backend_auth_endpoint")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the backend response contains an 'authenticated' field
        const authenticated = data.authenticated;
        setIsUserLoggedIn(authenticated);
      })
      .catch((error) => {
        console.error("Error fetching user authentication status:", error);
      });
  };

  // Fetch user authentication status when the component mounts
  useEffect(() => {
    fetchUserAuthenticationStatus();
  }, []);

  return (
    <div className="container pt-3">
      <Navbar expand="md">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Logo logo_icon={logo_images} />
          <div className="mx-3 mt-1">
            <h4 className="fw-bold">
              <span style={{ color: "#7201C2" }}>Macro</span>
              <span style={{ color: "#FFC231" }}>Touch</span>
            </h4>
          </div>
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
              style={{ color: "black" }}
              className={`mx-2 ${activeLink === "home" ? "active-link" : ""}`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Nav.Link>
            {/* Conditionally render the File Upload NavLink based on user authentication */}
            {isUserLoggedIn && (
              <Nav.Link
                as={Link}
                to="/files"
                style={{ color: "black" }}
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
              style={{ color: "black" }}
              className={`mx-2 ${
                activeLink === "pricing" ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick("pricing")}
            >
              Pricing
            </Nav.Link>
          </Nav>
          <Nav>
            <UserProfile />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
