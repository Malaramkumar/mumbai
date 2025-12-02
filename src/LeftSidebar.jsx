import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserGraduate,
  FaClipboardList,
  FaLightbulb,
  FaBook,
  FaFileUpload,
  FaPenFancy,
  FaRegFileAlt
} from "react-icons/fa";
import "./LeftSidebar.scss";

// ✅ All Services List (merged inside this file)
const services = [
  { text: "PhD Consulting", id: "brands", icon: <FaUserGraduate /> },
  { text: "PhD Admission", id: "admission-assistance", icon: <FaClipboardList /> },
  { text: "Proposal Writing", id: "research-proposal", icon: <FaPenFancy /> },
  { text: "Methodology", id: "methodology", icon: <FaLightbulb /> },
  { text: "Journal Writing", id: "journal-writing", icon: <FaBook /> },
  { text: "Publication", id: "publication-services", icon: <FaFileUpload /> },
  { text: "Thesis Writing", id: "thesis-writing", icon: <FaRegFileAlt /> },
];

// ✅ Sidebar Component
const LeftSidebar = () => {
  const navigate = useNavigate();

  const handleClick = (sectionId) => {
    sessionStorage.setItem("scrollToSection", sectionId);
    navigate("/home-page");
  };

  return (
    <aside className="leftsidebar">
      <h3 className="sidebar-title">Services</h3>
      <ul className="sidebar-list">
        {services.map((service) => (
          <li
            key={service.id}
            className="sidebar-item"
            onClick={() => handleClick(service.id)}
          >
            <span className="sidebar-icon">{service.icon}</span>
            <span className="sidebar-text">{service.text}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
