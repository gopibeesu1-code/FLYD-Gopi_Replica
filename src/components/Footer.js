import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import FUDLogo from "../assets/FUDLogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Logo Section */}
        <div className="footer-logo">
            <img src={FUDLogo} alt="fudlogo" className="logo-img" />

          <p>Study in Europe & UK</p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <ul>  
            {/* <li>Study in Sweden</li>
            <li>Study in Finland</li>
            <li>Study in Germany</li> */}
            <li>Study in France</li>
            <li>Study in Italy</li>
            <li>Study in UK</li>
          </ul>
          <ul>
            <li>Study in Ireland</li>
            <li>Study in Netherlands</li>
            <li>Study in Latvia</li>
            {/* <li>Study in Belgium</li>
            <li>Study in Spain</li>
            <li>Study in Norway</li> */}
          </ul>
          <ul>
            <li>Study in Europe</li>
            <li>Bachelor Programs</li>
            <li>Master Programs</li>
            {/* <li>Partner Universities in Europe</li>
            <li>Admitted Universities in Europe</li> */}
            <li>Services</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h3 className="social-media-text">Social Media</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

