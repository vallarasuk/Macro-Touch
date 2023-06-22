import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../Assects/Logo";
import CompanyName from "../Assects/CompanyName";
import logo_image from "../Images/logomain.svg";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="my-5 footer_section">
      <div className="row">
        <div className="col d-flex justify-content-between">
          <div className="info-section">
            <Navbar.Brand href="#home" className="d-flex align-items-center">
              <Logo logo_icon={logo_image} />
              <CompanyName name="Macro Touch" />
            </Navbar.Brand>
            <h5 className="my-4">Feel the Veracity</h5>
          </div>

          <div className="quick_link_section d-flex justify-content-around">
            <div className="mx-5">
              <h3>Quick Links</h3>
              <ul className="list-unstyled my-4">
                <li>
                  <a href="#/" className="text-decoration-none"> Home</a>
                </li>
                <li>
                  <a href="#/" className="text-decoration-none">Testimonials</a>
                </li>
                <li>
                  <a href="#/" className="text-decoration-none">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="mx-5">
              <h3>Reach Us</h3>

              <div className="">
                <p><FaEnvelope className="icon me-2" /> support@macrotouch.com</p>
              </div>
              <div className="">
                <p><FaPhone className="icon me-2" /> +917604963319</p>
              </div>
              <div className="">
                <p><FaMapMarkerAlt className="icon me-2" /> 232, Salem Main Road, Chinnasalem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
