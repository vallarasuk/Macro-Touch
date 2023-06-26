import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Btn from "../Assects/Button";
import Logo from "../Assects/Logo";
import CompanyName from "../Assects/CompanyName";
import logo_images from "../Images/logomain.svg";
import "./helper_style.css";

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
          <CompanyName name="Macro Touch" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
            <Nav.Link
              as={Link}
              to="/files"
              style={{ color: "white" }}
              className={`mx-2 ${activeLink === "files" ? "active-link" : ""}`}
              onClick={() => handleLinkClick("files")}
            >
              Files
            </Nav.Link>
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
            <Btn className="px-4" button_name="Log In" link="/login" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
