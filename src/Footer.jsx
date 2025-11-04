import React from "react";
import "./Footer.scss";
import {
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-classic" role="contentinfo">
      <div className="footer-inner">
        {/* Column 1 */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li id="brands"> PhD Consulting</li>
            <li>PhD Admission</li>
            <li>Research Proposal</li>
            <li>Methodology</li>
            <li>Journal Writing</li>
            <li>Publication</li>
            <li>Thesis Writing</li>
          </ul>
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
              <a href="https://ranmarscorp.com" target="_blank" rel="noopener noreferrer">
                ranmarscorp.com <FaExternalLinkAlt className="external-icon" />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col footer-contact">
          <h3>Contact Details</h3>
          <p>
            <FaPhoneAlt className="icon" /> +91 1234567890
          </p>
          <p>
            <FaEnvelope className="icon" /> info@narpavi.org
          </p>
          <p>
            <FaMapMarkerAlt className="icon" /> 2nd Floor, Narpavi Research Institute,
            Mumbai, Maharashtra 400001
          </p>
          <p>
            <a
              href="https://maps.google.com/?q=Narpavi+Research+Institute+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              View Location <FaExternalLinkAlt className="external-icon" />
            </a>
          </p>

          {/* Social media icons */}
          <div className="footer-social-links">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/narpavi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/narpavi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://facebook.com/narpavi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/narpavi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
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
