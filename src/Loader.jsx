import React, { useEffect, useState } from "react";
import "./Loader.scss";
import CircularMenu from "./pages/CircularMenu";
import logo from "./images/narpavi_logo_1.png";

const Preloader = () => {
  const [fadeToBackground, setFadeToBackground] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeToBackground(true);
    }, 2250); // 2250 delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader-wrapper">
      {/* Preloader Background Layer */}    
      <div className={`preloader ${fadeToBackground ? "fade-bg" : ""}`}>
        <div className="preloader-bg">
          <div className="wave"></div>
          <div className="wave wave2"></div>
        </div>

        <div className="preloader-logo">    
          <div className="progress-ring">
            <svg
              className="progress-circle"
              width="100"
              height="100"
              viewBox="0 0 120 120"
            >
              <circle
                className="ring-bg"
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="6"
              />
              <circle
                className="ring-progress"
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#4db8ff"
                strokeWidth="6"
              />
            </svg>

            {/* 🖼️ Local Logo Image instead of inline SVG */}
            <img src={logo} alt="Narpavi Research Institute Logo" className="center-logo" />
          </div>

          <h1 className="institute-name">
            Narpavi <br /> Research Institute
          </h1>
          <p className="tagline">Empowering Research Excellence</p>
        </div>
      </div>

      {/* Main Foreground Content */}
      <div className={`preloader-main-content ${fadeToBackground ? "show" : ""}`}>
        <CircularMenu />
      </div>
    </div>
  );
};

export default Preloader;
