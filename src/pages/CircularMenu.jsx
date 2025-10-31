import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CircularMenu.scss";
import {
  FaUserGraduate,
  FaClipboardList,
  FaLightbulb,
  FaBook,
  FaFileUpload,
  FaPenFancy,
  FaAward,
  FaComments,
} from "react-icons/fa";

const CircularMenu = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  // Each service has an id (same as the <section id="..."> in Home.jsx)
  const services = [
    { name: "PhD Consulting", id: "brands", icon: <FaUserGraduate /> },
    { name: "PhD Admission", id: "admission-assistance", icon: <FaClipboardList /> },
    { name: "Research Proposal", id: "research-proposal", icon: <FaLightbulb /> },
    { name: "Methodology", id: "methodology", icon: <FaBook /> },
    { name: "Journal Writing", id: "journal-writing", icon: <FaPenFancy /> },
    { name: "Publication", id: "publication-services", icon: <FaFileUpload /> },
    { name: "Thesis Writing", id: "thesis-writing", icon: <FaAward /> },
    { name: "Viva-Voce", id: "viva-voce", icon: <FaComments /> },
  ];

  const handleRedirect = (sectionId) => {
    sessionStorage.setItem("scrollToSection", sectionId);
    navigate("/home-page");
  };

  const handleCenterClick = () => {
    if (isHovered) {
      navigate("/home-page");
    }
  };

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsHovered(false);
      setTimeoutId(null);
    }, 3000);
    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div className="interactive-hub-container">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="menu-wrapper">
        <button
          className="center-button"
          onClick={handleCenterClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered ? "Main Page" : "Our Services"}
        </button>

        {isHovered && (
          <div
            className="primary-ring"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {services.map((service, index) => {
              const angle = (360 / services.length) * index;
              return (
                <div key={service.name} className="connector-wrapper">
                  <div
                    className="primary-item-wrapper"
                    style={{ transform: `rotate(${angle}deg) translateX(35vmin)` }}
                  >
                    <button
                      className="primary-item"
                      style={{ transform: `rotate(-${angle}deg)` }}
                      onClick={() => handleRedirect(service.id)}
                    >
                      <div className="icon-container">{service.icon}</div>
                      <div className="text-container">{service.name}</div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CircularMenu;
