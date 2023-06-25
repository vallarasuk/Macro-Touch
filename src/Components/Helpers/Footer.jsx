import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../Assects/Logo";
import CompanyName from "../Assects/CompanyName";
import logo_image from "../Images/logomain.svg";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import FooterBar from "./FooterBar";
import SocialLinks from "../Assects/SocialLinks";

const Footer = () => {
  return (
    <>
    <div
      className="px-5 mt-5 footer_section"
      style={{
        backgroundImage: "linear-gradient(67.3deg, #1B0069, #AD00FF)",
      }}
    >
      <div className="row">
        <div className="col d-flex justify-content-between p-5">
          <div className="info-section">
            <Navbar.Brand href="#home" className="d-flex align-items-center">
              <Logo logo_icon={logo_image} />
              <CompanyName name="Macro Touch" />
            </Navbar.Brand>
            <h5 className="my-4 px-2">Feel the Veracity</h5>
            <SocialLinks/>
          </div>

          <div className="quick_link_section d-flex justify-content-around">
            <div className="mx-5">
              <h3 className="mb-5">Quick Links</h3>
              <ul className="list-unstyled my-4">
                <li>
                  <a href="#/" className="text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#/" className="text-decoration-none">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#/" className="text-decoration-none">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-5">
              <h3 className="mb-5">Reach Us</h3>

              <div className="">
                <p>
                  <FaEnvelope className="icon me-2" /> support@macrotouch.com
                </p>
              </div>
              <div className="">
                <p>
                  <FaPhone className="icon me-2" /> +917604963319
                </p>
              </div>
              <div className="">
                <p>
                  <FaMapMarkerAlt className="icon me-2" /> 232, Salem Main Road, <br /> Chinnasalem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <FooterBar/>
      </>
  );
};

export default Footer;
