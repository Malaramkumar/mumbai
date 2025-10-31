import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpenCheck,
  FileText,
  FilePenLine,
  Presentation,
} from "lucide-react";

import "./Services6.scss";
//import bgImage from "../images/bgmain3.png";

import bgImage from "../images/PublicationSupport.png"

const services = [
  {
    title: "Journal Publication Services",
    desc: "Get end-to-end assistance with journal selection, formatting, and submission.",
    link: "/career-opportunities-after-phd",
    icon: <BookOpenCheck size={24} />,
  },
  {
    title: "Research Publication Services",
    desc: "Professional guidance for publishing your original research with precision.",
    link: "/top-mnc-hiring",
    icon: <FileText size={24} />,
  },
  {
    title: "Review Paper Publication Support",
    desc: "Expert assistance in writing and structuring your review papers.",
    link: "/top-phd-colleges-mumbai",
    icon: <FilePenLine size={24} />,
  },
  {
    title: "Conference Paper Publication Services",
    desc: "Comprehensive support for conference paper writing and presentations.",
    link: "/top-for-phd-colleges-in-mumbai",
    icon: <Presentation size={24} />,
  },
];

const Services6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);
  };

  const handleHover = (index) => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    setCurrentIndex(index);
    timeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="services6-wrapper">
      <div
        className="services6-dark-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="services6-center-content">
          <h1>Publication Support</h1>
          <p>
            At Narpavi Research Institute, we offer end-to-end PhD consulting
            services designed to support scholars through every stage of their
            doctoral journey. From expert guidance in PhD admission assistance
            and proposal writing to hands-on support in research methodology,
            implementation, and thesis development, we ensure academic
            excellence with precision and professionalism.
          </p>
          <button onClick={() => navigate("/phd-consulting")}>
            Publication Support
          </button>
        </div>

        <div className="services6-title-row">
          {services.map((service, index) => (
            <div
              key={index}
              className={`services6-title-box ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => navigate(service.link)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => startAutoSlide()}
            >
              {service.title}
            </div>
          ))}
        </div>

        <div className="services6-card-row">
          {services.map((service, index) => (
            <div
              key={index}
              className={`services6-service-card ${
                index === currentIndex ? "active" : "" }`}
              onClick={() => navigate(service.link)}
            >
              <div className="services6-icon-circle">{service.icon}</div>
              <h3>{service.title}</h3>
              {index === currentIndex && (
                <p className="services6-desc">{service.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services6;
