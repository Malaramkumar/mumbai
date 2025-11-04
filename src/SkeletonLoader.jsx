import React, { useEffect, useState } from "react";
import "./SkeletonLoader.scss";
import CircularMenu from "./pages/CircularMenu";
const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="preloader">
        <div className="preloader-logo">
          <div className="pulse"></div>
          <h2>Narpavi <br/>Research Institute</h2>
          <p>Empowering Research Excellence</p>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
        <CircularMenu />
    </div>
  );
};

export default Preloader;
