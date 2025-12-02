import React from "react";
import "./Header.scss";
import logo from "../images/narpavi_logo_1.png";

export default function Header() {
  return (
    <header className="main-header1">
      <div className="header-center">
        <img src={logo} alt="Narpavi Logo" className="header-logo" />
        <h1 className="header-title">Narpavi Research Institute</h1>
      </div>
    </header>
  );
}
 