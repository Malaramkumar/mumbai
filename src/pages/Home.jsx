import React, { useEffect } from "react";
import Brands from "./Services1";
import Services2 from "./Services2";
import ResearchProposalWritingMain from "./Services3";
import Services4 from "./Services4";
import Services5 from "./Services5";
import Services6 from "./Services6";
import "./Home.scss";
import Footer from "../Footer";

const Home = () => {
  useEffect(() => {
    const sectionId = sessionStorage.getItem("scrollToSection");
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
      sessionStorage.removeItem("scrollToSection");
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
      <section id="thesis-writing"><div>Thesis Writing & Viva Voce Section</div></section>
        <Footer />
    </div>
  );
};

export default Home;
