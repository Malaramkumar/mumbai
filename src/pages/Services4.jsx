import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cpu, Cog, Zap, Radio, Ruler } from "lucide-react";
import "./Services4.scss";
//import "./Brands.scss"
//import bgImage from "../images/bgmain3.png";
import bgImage from "../images/Services4_bg.png"
// ✅ Import department background images

import dept1 from "../images/dept/dept1.png";
import dept2 from "../images/dept/dept2.png";
import dept3 from "../images/dept/dept3.png";
import dept4 from "../images/dept/dept4.png";
import dept5 from "../images/dept/dept5.png";

const services = [
  {
    title: "CSC/IT",
    desc: "Department of Computer Science & Information Technology",
    link: "/departments?dept=cse",
    icon: <Cpu size={20} />,
    bg: dept1,
  },
  {
    title: "MECHANICAL",
    desc: "Department of Mechanical Engineering",
    link: "/departments?dept=mechanical",
    icon: <Cog size={20} />,
    bg: dept2,
  },
  {
    title: "EEE",
    desc: "Department of Electrical & Electronics Engineering",
    link: "/departments?dept=eee",
    icon: <Zap size={20} />,
    bg: dept3,
  },
  {
    title: "ECE",
    desc: "Department of Electronics & Communication Engineering",
    link: "/departments?dept=ece",
    icon: <Radio size={20} />,
    bg: dept4,
  },
  {
    title: "CIVIL",
    desc: "Department of Civil Engineering",
    link: "/departments?dept=civil",
    icon: <Ruler size={20} />,
    bg: dept5,
  },
];


const Services4 = () => {
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
    <section className="services4-wrapper">
      <div
        className="services4-dark-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="services4-center-content">
          <h1>Research Implementation</h1>
          <p>
           A well-crafted research methodology is the backbone of every successful PhD and academic study—it transforms ideas into credible, data-driven discoveries. At Narpavi Research Institute, our Research Methodology Services in Mumbai empower scholars to design, validate, and execute research with precision, clarity, and global academic standards. From defining hypotheses to selecting analytical tools like SPSS, MATLAB, or NVivo, our experts ensure your methodology is not just compliant but publication-ready for Scopus, Web of Science, or UGC-approved journals. Explore how our structured and personalized guidance helps you master every stage—from research design to data interpretation—and elevate your work to international excellence.

          </p>
          <button onClick={() => navigate("/research-methodology")}>
            Research Implementation
          </button>
        </div>

        <div className="services4-title-row">
          {services.map((service, index) => (
            <div
              key={index}
              className={`services4-title-box ${
                index === currentIndex ? "services4-active" : ""
              }`}
              onClick={() => navigate(service.link)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => startAutoSlide()}
            >
              {service.title}
            </div>
          ))}
        </div>

        {/* ✅ Cards with background images */}
        <div className="services4-card-row">
          {services.map((service, index) => (
            <div
              key={index}
              className={`services4-service-card ${
                index === currentIndex ? "services4-active" : ""
              }`}
              onClick={() => navigate(service.link)}
              style={{
                backgroundImage: `url(${service.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="services4-icon-circle">{service.icon}</div>
              <h3>{service.title}</h3>
              {index === currentIndex && (
                <p className="services4-desc">{service.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services4;

