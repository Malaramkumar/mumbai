import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaClipboardList,
  FaLightbulb,
  FaBook,
  FaFileUpload,
  FaPenFancy,
  FaRegFileAlt
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./CircularMenu.scss";

const CircularMenu = () => {
  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    sessionStorage.setItem("scrollToSection", sectionId);
    navigate("/home-page");
  };

  const services = [
    { text: "PhD Consulting", id: "brands", icon: <FaUserGraduate /> },
    { text: "PhD Admission", id: "admission-assistance", icon: <FaClipboardList /> },
    { text: "Proposal Writing", id: "research-proposal", icon: <FaPenFancy /> },
    { text: "Methodology", id: "methodology", icon: <FaLightbulb /> },
    { text: "Journal Writing", id: "journal-writing", icon: <FaBook /> },
    { text: "Publication", id: "publication-services", icon: <FaFileUpload /> },
    { text: "Thesis Writing", id: "thesis-writing", icon: <FaRegFileAlt /> },
  ];

  const RADIUS = 280;

  // ⭐ Background Network Animation
  useEffect(() => {
    const canvas = document.getElementById("tech-network");
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const nodes = Array.from({ length: 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0, 255, 255, 0.7)";
      ctx.strokeStyle = "rgba(0, 255, 255, 0.08)";

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="circularmenu-container">
      <canvas id="tech-network"></canvas>
      <div className="gradient gradient-blue" />
      <div className="gradient gradient-green" />

      {/* ⭐ DESKTOP CIRCLE MENU */}
      <div className="menu-desktop">
        <div className="orbitalmenu-container">
          <motion.div className="orbitalmenu-center">
            <h2 className="orbitalmenu-title">Research Hub</h2>
            <p className="orbitalmenu-subtitle">Explore Services</p>
            <div className="pulse-ring" />
          </motion.div>

          <div className="orbitalmenu-orbit" />

          <div className="orbitalmenu-rotation">
            {services.map((service, index) => {
              const angle = (index / services.length) * 2 * Math.PI;
              const x = Math.cos(angle) * RADIUS;
              const y = Math.sin(angle) * RADIUS;

              return (
                <motion.div
                  key={service.id}
                  className="orbitalmenu-item"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <div
                    className="serviceicon-container"
                    onClick={() => handleNavigation(service.id)}
                  >
                    <div className="serviceicon-iconbox">
                      <div className="serviceicon-icon">{service.icon}</div>
                    </div>
                    <span className="serviceicon-text">{service.text}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ⭐ MOBILE + TABLET MENU */}
      <div className="menu-mobile">
        <h2 className="mobile-title">Research Services</h2>
        <>
        <div className="mobilemenu-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="mobilemenu-card"
              onClick={() => handleNavigation(service.id)}
            >
              <div className="mobilemenu-icon">{service.icon}</div>
              <div className="mobilemenu-text">{service.text}</div>
            </div>
          ))}
        </div>
        </>
      </div>

    </div>
  );  
};

export default CircularMenu;
