import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
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
    <div  className="container pt-3">
      <Navbar expand="md">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <Logo logo_icon={logo_images} />
          <CompanyName name="Macro Touch" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fw-bold">
            <Nav.Link
            style={{ color: 'white' }}
              href="#home"
              className={`mx-2 ${activeLink === "home" ? "active-link" : ""}`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              style={{ color: 'white' }}
              className={`mx-2 ${activeLink === "about" ? "active-link" : ""}`}
              onClick={() => handleLinkClick("about")}
            >
              Files
            </Nav.Link>
            <Nav.Link
              href="#services"
              style={{ color: 'white' }}
              className={`mx-2 ${
                activeLink === "services" ? "active-link" : ""
              }`}
              onClick={() => handleLinkClick("services")}
            >
              Pricing
            </Nav.Link>
          </Nav>
          <Nav>
            <Btn className="px-4 " button_name="Log In" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
