import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import "./helper_style.css";

const Header = () => {
  return (
    <>
      {/* <VerifyOTP /> */}
      {/* <Register /> */}
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
