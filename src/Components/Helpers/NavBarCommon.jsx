import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Assects/Logo";
import logo_images from "../Images/whiteLogo.svg";
import "./helper_style.css";
import UserProfile from "./UserProfile";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
            <Nav.Link
              as={Link}
              to="/files"
              style={{ color: "black" }}
              className={`mx-2 ${activeLink === "files" ? "active-link" : ""}`}
              onClick={() => handleLinkClick("files")}
            >
              Files
            </Nav.Link>
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
           <UserProfile/>   
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
