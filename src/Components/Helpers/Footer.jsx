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
        <div className="container">
          <div className="row">
            <div className="col-lg-8 d-flex justify-content-between py-5">
              <div className="info-section">
                <Navbar.Brand href="/" className="d-flex align-items-center">
                  <Logo logo_icon={logo_image} />
                  <CompanyName name="Macro Touch" />
                </Navbar.Brand>
                <h5 className="my-4 px-2">Feel the Veracity</h5>
                <SocialLinks />
              </div>
              <div className="quick_link_section d-flex justify-content-around">
                <div className="mx-5">
                  <h3 className="mb-4">Quick Links</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/" className="text-decoration-none">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#/" className="text-decoration-none">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a href="/price" className="text-decoration-none">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mx-5">
                  <h3 className="mb-4">Reach Us</h3>
                  <div>
                    <p>
                      <a
                        href="mailto:support@macrotouch.com"
                        className="text-decoration-none"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaEnvelope className="icon me-2" />
                        support@macrotouch.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <a
                        href="tel:+917604963319"
                        className="text-decoration-none"
                      >
                        <FaPhone className="icon me-2" /> +917604963319
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <a
                        href="https://www.google.com/maps/search/232%2C%20Salem%20Main%20Road%2C%20Chinnasalem"
                        className="text-decoration-none"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaMapMarkerAlt className="icon me-2" /> 232, Salem Main
                        Road,
                        <br /> Chinnasalem
                      </a> </p> </div> </div> </div> </div> </div> </div> </div>
      <FooterBar />
    </>
  );
};

export default Footer;
