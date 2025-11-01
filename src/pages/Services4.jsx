import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Cpu,
  Cog,
  Zap,
  Radio,
  Ruler,
} from "lucide-react"; // ✅ Updated relevant icons
import "./Services4.scss";
//import "./Brands.scss"
//import bgImage from "../images/bgmain3.png";
import bgImage from "../images/ResearchMethodology.png"
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
     
    link: "/",
    icon: <Cpu size={20} />, // 💻 Computer chip icon
    bg: dept1,
  },
  {
    title: "MECHANICAL",
    desc: "Department of Mechanical Engineering",
     
    link: "/",
    icon: <Cog size={20} />, // ⚙️ Mechanical gear
    bg: dept2,
  },
  {
    title: "EEE",
    desc: "Department of Electrical & Electronics Engineering",
     
    link: "/",
    icon: <Zap size={20} />, // ⚡ Electricity icon
    bg: dept3,
  },
  {
    title: "ECE",
    desc: "Department of Electronics & Communication Engineering",
    
    link: "/",
    icon: <Radio size={20} />, // 📡 Communication signal
    bg: dept4,
  },
  {
    title: "CIVIL",
    desc: "Department of Civil Engineering",
 
    link: "/",
    icon: <Ruler size={20} />, // 📏 Architecture/measurement tool
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
          <h1>Research Methodology</h1>
          <p>
            At Narpavi Research Institute, we offer end-to-end PhD consulting
            services designed to support scholars through every stage of their
            doctoral journey. From expert guidance in PhD admission assistance
            and proposal writing to hands-on support in research methodology,
            implementation, and thesis development, we ensure academic excellence with precision and professionalism.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, nesciunt facere. Deserunt odio labore quos neque nobis tempora ea ab voluptatibus aspernatur aliquid quaerat, earum cumque sunt modi maiores maxime quasi possimus perspiciatis. Delectus, ut odit aliquid dolore repellat iusto neque laborum in magnam quod eaque iste est culpa quos eum rerum recusandae quam commodi pariatur porro laudantium, debitis deleniti. Neque suscipit, culpa soluta sed quibusdam voluptate debitis architecto asperiores laboriosam quas quasi sequi sapiente at, commodi aperiam excepturi labore tenetur quia amet voluptatum exercitationem accusamus! Nemo quos ea odio numquam odit sed obcaecati vero dolor. Totam, aut! Iste, aperiam.
          </p>
          <button onClick={() => navigate("/phd-consulting")}>
            Research Methodology
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

