import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Building2,
  School,
  Wallet,
} from "lucide-react";

import "./Services1.scss";
import bgImage from "../images/bgmain3.png";

const services = [
  {
    title: "PhD Career Roadmap",
    desc: "Find the right mentor to shape your research direction.",
    link: "/career-opportunities-after-phd",
    icon: <Briefcase size={20} />,
  },
  {
    title: "Corporate Demand",
    desc: "Get expert help choosing impactful and feasible research topics.",
    link: "/top-mnc-hiring",
    icon: <Building2 size={20} />,
  },
  {
    title: "Leading Universities for PhD",
    desc: "Craft standout applications for top PhD programs.",
    link: "/top-phd-colleges-mumbai",
    icon: <School size={20} />,
  },
  {
    title: "Scholarships & Fellowships",
    desc: "Professional support for crafting compelling proposals.",
    link: "/funding-for-phd-in-mumbai–2025",
    icon: <Wallet size={20} />,
  },
];

const Brands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 2000);
  };

  const handleHover = (index) => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    setCurrentIndex(index);
    timeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 2000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="services1-brands-wrapper">
      {/* Background Image with Title Row and Center Content */}
      <div
        className="services1-dark-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="services1-center-content">
          <h1>PhD Consulting <br/>  Assistance and Guidance in Mumbai</h1>
          <p>At Narpavi Research Institute, we offer end-to-end PhD consulting services designed to support scholars through every stage of their doctoral journey. From expert guidance in PhD admission assistance and proposal writing to hands-on support in research methodology, implementation, and thesis development, we ensure academic excellence with precision and professionalism. Our services also include high-impact journal / conference paper writing and publishing support, synopsis preparation, viva voce training, and funding project proposal assistance. With a focus on quality, timely delivery, and personalized mentoring, we empower researchers to navigate their PhD journey with confidence and clarity.</p>
          <button onClick={() => navigate("/phd-consulting")}>
            PhD Consulting
          </button>
        </div>

        <div className="services1-title-row">
          {services.map((service, index) => (
            <div
              key={index}
              className={`services1-title-box ${index === currentIndex ? "active" : ""}`}
              onClick={() => navigate(service.link)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => startAutoSlide()}
            >
              {service.title}
            </div>
          ))}
        </div>

        {/* Cards Inside Background */}
        <div className="services1-card-row">
          {services.map((service, index) => (
            <div
              key={index}
              className={`services1-service-card ${index === currentIndex ? "active" : ""}`}
              onClick={() => navigate(service.link)}
            >
              <div className="services1-icon-circle">{service.icon}</div>
              <h3>{service.title}</h3>
              {index === currentIndex && (
                <p className="services1-desc">{service.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
