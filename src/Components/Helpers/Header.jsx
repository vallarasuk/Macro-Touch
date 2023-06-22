import React from "react";
import NavBar from "./NavBar";
import "./helper_style.css";
import Home from "./Home";
import Content from "./Content";
import Footer from "./Footer";

const Header = () => {
  return (
    <div>
      <div className="custom_bg">
        <NavBar />
        <Home />
      </div>
      <Content />
      <Footer />
    </div>
  );
};

export default Header;
