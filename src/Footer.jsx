import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="ri-footer" aria-labelledby="ri-footer-heading">
      <h2 id="ri-footer-heading" className="sr-only">Site footer</h2>

      <div className="ri-footer__container">
        {/* Column 1: Services */}
        <nav className="ri-footer__col" aria-labelledby="ri-footer-services">
          <h3 id="ri-footer-services" className="ri-footer__title">My services</h3>
          <ul className="ri-footer__list" role="list">
            <li><a href="/services/phd-consulting" className="ri-footer__link">PhD Consulting</a></li>
            <li><a href="/services/phd-admission" className="ri-footer__link">PhD Admission</a></li>
            <li><a href="/services/research-proposal" className="ri-footer__link">Research Proposal</a></li>
            <li><a href="/services/methodology" className="ri-footer__link">Methodology</a></li>
            <li><a href="/services/journal-writing" className="ri-footer__link">Journal Writing</a></li>
            <li><a href="/services/publication" className="ri-footer__link">Publication</a></li>
            <li><a href="/services/thesis-writing" className="ri-footer__link">Thesis Writing</a></li>
          </ul>
        </nav>

        {/* Column 2: Other links */}
        <nav className="ri-footer__col" aria-labelledby="ri-footer-links">
          <h3 id="ri-footer-links" className="ri-footer__title">More links</h3>
          <ul className="ri-footer__list" role="list">
            <li>
              <a
                href="https://narpavitech.in"
                className="ri-footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                narpavitech.in
              </a>
            </li>
            <li>
              <a
                href="https://ranmars.com"
                className="ri-footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                ranmarscorp
              </a>
            </li>
          </ul>
        </nav>

        {/* Column 3: Contact */}
        <div className="ri-footer__col" aria-labelledby="ri-footer-contact">
          <h3 id="ri-footer-contact" className="ri-footer__title">Contact us</h3>

          <address className="ri-footer__address">
            <p className="ri-footer__text">
              <span className="ri-footer__label">Phone:</span>{" "}
              <a href="tel:+91XXXXXXXXXX" className="ri-footer__link">+91 XXXXXXXXXX</a>
            </p>
            <p className="ri-footer__text">
              <span className="ri-footer__label">Email:</span>{" "}
              <a href="mailto:info@narpavi.org" className="ri-footer__link">info@narpavi.org</a>
            </p>
            <p className="ri-footer__text">
              <span className="ri-footer__label">Address:</span>{" "}
              2nd Floor, Narpavi Research Institute, Mumbai, Maharashtra 400001
            </p>
            <p className="ri-footer__text">
              <span className="ri-footer__label">Location:</span>{" "}
              <a
                href="https://maps.google.com/?q=Narpavi+Research+Institute+Mumbai"
                className="ri-footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </p>
          </address>

          <div className="ri-footer__social">
            <p className="ri-footer__label">Social media</p>
            <div className="ri-footer__socialRow" role="group" aria-label="Social links">
              <a
                className="ri-social ri-social--linkedin"
                href="https://www.linkedin.com/company/narpavi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                className="ri-social ri-social--twitter"
                href="https://twitter.com/narpavi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                className="ri-social ri-social--whatsapp"
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
              <a
                className="ri-social ri-social--facebook"
                href="https://facebook.com/narpavi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                className="ri-social ri-social--instagram"
                href="https://instagram.com/narpavi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ri-footer__bottom">
        <div className="ri-footer__bottomInner">
          <p className="ri-footer__copy">© {new Date().getFullYear()} Narpavi Research Institute. All rights reserved.</p>
          <ul className="ri-footer__policies" role="list">
            <li><a href="/privacy" className="ri-footer__link">Privacy Policy</a></li>
            <li><a href="/terms" className="ri-footer__link">Terms of Service</a></li>
            <li><a href="/contact" className="ri-footer__link">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
