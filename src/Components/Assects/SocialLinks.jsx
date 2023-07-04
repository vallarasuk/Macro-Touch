import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./assect_styles.css"

const SocialLinks = () => {
  return (
    <div className="social_links">
      <a href="#/">
        <FaInstagram className="social_icon" />
      </a>
      <a href="#/">
        <FaFacebook className="social_icon" />
      </a>
      <a href="#/">
        <FaTwitter className="social_icon" />
      </a>
    </div>
  );
};

export default SocialLinks;
