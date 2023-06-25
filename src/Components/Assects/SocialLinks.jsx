import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="px-2 social_links">
      <a href="#/">
        <FaInstagram className="me-3" />
      </a>
      <a href="#/">
        <FaFacebook className="mx-3" />
      </a>
      <a href="#/">
        <FaTwitter className="mx-3" />
      </a>
    </div>
  );
};

export default SocialLinks;
