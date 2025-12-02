import React from "react";
import "./Footer.scss";
import {
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import LeftSidebar from "./LeftSidebar";

const Footer = () => {
  return (
    <footer className="footer-classic" role="contentinfo">
      <div className="footer-inner">
        {/* Column 1 */}
        <div className="footer-col">
          <LeftSidebar/>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Other Services</h3>
          <ul>
            <li>More Links</li>
            <li>
              <a href="https://narpavitech.in" target="_blank" rel="noopener noreferrer">
                narpavitech.in <FaExternalLinkAlt className="external-icon" />
              </a>
            </li>
            <li>
              <a href="https://ranmars.com" target="_blank" rel="noopener noreferrer">
                ranmarscorp.com <FaExternalLinkAlt className="external-icon" />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col footer-contact">
          <h3>Contact Details</h3>
          <p>
            <FaPhoneAlt className="icon" /> +91 9677111787 <br /> +91 9677111760
          </p>
          <p>
            <FaEnvelope className="icon" /> narpavitechmumbai@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt className="icon" />Commerz II, Goregaon, Mumbai, Maharashtra 400063
          </p>
          <p>
             <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60297.149433645776!2d72.81908109480679!3d19.170210378479286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a9286dc87f%3A0x572ab07cfc518e07!2sCommerz%20II!5e0!3m2!1sen!2sin!4v1762928107686!5m2!1sen!2sin"
        width="300"
        height="150"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Commerz II Location"
      ></iframe>

    </div>
          </p>

          {/* Social media icons */}
          <div className="footer-social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              
              <a
                href="https://wa.me/9677111787"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.facebook.com/phdresearchguidancecenterinchennai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/narpavi_research_institute2012"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>           
              <a
                href="https://www.linkedin.com/company/narpavi-technologies/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Narpavi Research Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;   
