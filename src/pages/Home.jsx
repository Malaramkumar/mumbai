import React, { useEffect } from "react";
import Brands from "./Services1";
import Services2 from "./Services2";
import ResearchProposalWritingMain from "./Services3";
import Services4 from "./Services4";
import Services5 from "./Services5";
import Services6 from "./Services6";
import Services7 from "./Services7";
import "./Home.scss";


const Home = () => {
  useEffect(() => {
    const sectionId = sessionStorage.getItem("scrollToSection");

    if (sectionId) {
      // Delay to ensure DOM renders
      
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -60; // adjust if header overlaps
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        sessionStorage.removeItem("scrollToSection");
      }, 700);
    }
  }, []);

  return (
    <div className="home">       
      <section id="brands"><Brands /></section>
      <section id="admission-assistance"><Services2 /></section>
      <section id="research-proposal"><ResearchProposalWritingMain /></section>
      <section id="methodology"><Services4 /></section> 
      <section id="journal-writing"><Services5 /></section>
      <section id="publication-services"><Services6 /></section>
      <section id="thesis-writing"><Services7 /></section>
      
<button
  className="move-to-top"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  ↑ 
</button>

    </div>
  );
};

export default Home;
