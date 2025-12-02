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

import bgImage from "../images/Services6_bg1.png"

const services = [
  {
    title: "Journal Publication Services",
    desc: "Complete support for preparing and publishing papers in reputed journals.",
    link: "/journal-publication-support",
    icon: <BookOpenCheck size={24} />,
  },
  {
    title: "Research Publication Services",
    desc: "End-to-end assistance for publishing high-quality research in indexed platforms.",
    link: "/research-publication-services",
    icon: <FileText size={24} />,
  },
  {
    title: "Review Paper Publication Support",
    desc: "Professional help to prepare, refine, and publish review papers effectively.",
    link: "/review-paper-publication",
    icon: <FilePenLine size={24} />,
  },
  {
    title: "Conference Paper Publication Services",
    desc: "Guidance and support for drafting and publishing papers in national and international conferences.",
    link: "/conference-paper-publication",
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
          Bring your research to global recognition with our premium Publication Services in Mumbai. At Narpavi Research Institute, we specialize in transforming your academic work into publishable papers that meet the standards of leading international journals such as Scopus, Web of Science, Elsevier, Springer, and IEEE. Our experts provide end-to-end assistance—from manuscript refinement and plagiarism correction to formatting, journal selection, and submission management. Every paper is meticulously crafted to align with indexing, citation, and peer-review expectations, ensuring maximum acceptance potential. Whether it’s a research article, review paper, or conference paper, our Publication Services in Mumbai empower you to present your findings with clarity, precision, and global impact—making your research truly stand out in the academic community.
          </p>          
          <button onClick={() => navigate("/publication-service")}>
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
