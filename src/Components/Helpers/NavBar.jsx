import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Btn from "../Assects/Button";
import Logo from "../Assects/Logo";
import CompanyName from "../Assects/CompanyName";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <Logo />
          <CompanyName name="vallarasu" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">Files</Nav.Link>
            <Nav.Link href="#services">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Btn button_name="hello" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
