import React from "react";
import NavBar from "./NavBar";
import "./helper_style.css";
import Home from "./Home";
import Content from "./Content";
import Footer from "./Footer";
import Register from "../Assects/Register";
import VerifyOTP from "../Assects/VerifyOTP";

const Header = () => {
  return (
    <>
      <VerifyOTP />
      <Register />
      <div className="home_section">
        <NavBar />
        <Home />
      </div>
      <Content />
      <Footer />
    </>
  );
};

export default Header;
