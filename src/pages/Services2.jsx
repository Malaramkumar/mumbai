import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  ListChecks,
  FileText,
  PencilLine,
  University,
} from "lucide-react";
import "./Services2.scss";
import bgImage from "../images/services2_bg.png"

const services = [
  {
    title: "PhD Guide Selection",
    desc: "Find the right supervisor to align with your research journey.",
    link: "/phd-guide-selection-in-mumbai",
    icon: <GraduationCap size={36} />,
  },
  {
    title: "Topic Selection Support",
    desc: "Nail your research direction with expert topic guidance.",
    link: "/phd-topic-selection-support-in-mumbai",
    icon: <ListChecks size={36} />,
  },
  {
    title: "Application Help",
    desc: "Craft standout SOPs, CVs, and university applications.",
    link: "/phd-application-help-in-mumbai",
    icon: <FileText size={36} />,
  },
  {
    title: "Proposal Writing",
    desc: "Structure your PhD research proposal with expert input.",
    link: "/phd-research-proposal-writing-services-in-mumbai",
    icon: <PencilLine size={36} />,
  },
  {
    title: "University Selection",
    desc: "Choose the right university for your research goals.",
    link: "/university-selection",
    icon: <University size={36} />,
  },
];

const ManageEngineSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const current = services[currentIndex];

 return (
  <section className="services2-main">
 <div
              className="services1-dark-section"
              style={{ backgroundImage: `url(${bgImage} )` }}>
  <section className="services2-section" >
   

    <div className="services2-overlay">
      {/* Top Heading */}
      <div className="services2-top-section">
        <h1>PhD Admission Assistance in Mumbai </h1>
        <p>At Narpavi Research Institute, our specialized PhD admission assistance services in Mumbai are tailored to help aspiring scholars make informed and strategic choices at the outset of their research journey. We provide comprehensive support in identifying suitable research topics aligned with current academic and industry trends, connecting candidates with qualified research guides, and preparing strong PhD applications. Our expert team also assists in crafting impactful research proposals that meet the specific requirements of universities and funding bodies. With in-depth knowledge of leading institutions across Mumbai, we guide candidates in selecting the right university based on their research interests, academic goals, and faculty expertise, ensuring a smooth and competitive admission process.</p>
        
        <button className="btn2" onClick={() => navigate("/phd-admission-assistance-for-mumbai")}>
          Explore Admission Help
        </button>
      </div>

      {/* Title Row */}
      <div className="services2-title-row2">
        {services.map((s, i) => (
          <div
            key={i}
            className={`services2-title-box2 ${i === currentIndex ? "active" : ""}`}
            onClick={() => navigate(s.link)}
          >
            {s.title}
          </div>
        ))}
      </div>

      {/* Sliding Card */}
      <div className="services2-center-slider">
        <div className="services2-card" onClick={() => navigate(current.link)}>
          <div className="services2-icon">{current.icon}</div>
          <h2>{current.title}</h2>
          <p>{current.desc}</p>
        </div>
      </div>
    </div>
    
  </section></div>
  </section>
);

};

export default ManageEngineSection;

