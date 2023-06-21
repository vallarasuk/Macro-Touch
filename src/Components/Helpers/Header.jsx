import React from "react";
import NavBar from "./NavBar";
import "./helper_style.css";
import Home from "./Home";
import Content from "./Content";

const Header = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Content />
    </div>
  );
};

export default Header;
