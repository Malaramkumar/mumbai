import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, BookOpenCheck, Workflow } from "lucide-react";
import "./Services3.scss";

const proposalServices = [
  {
    title: "Funding Project Proposal Support",
    desc: "Expert help in crafting funding-ready PhD project proposals tailored to Indian and international agencies.",
    link: "/funding-project-support-mumbai",
    icon: <FileText size={36} />,
  },
  {
    title: "Research Methodology Assistance ",
    desc: "Get complete assistance in framing your PhD methodology chapter including design, sampling, tools, and validation.",
    link: "/methodology-support-assistance-mumbai",
    icon: <BookOpenCheck size={36} />,
  },
  {
    title: "Research Methodology Roadmap",
    desc: "Build a clear and structured methodology roadmap with step-by-step milestones for your PhD research.",
    link: "/methodology-roadmap-mumbai",
    icon: <Workflow size={36} />,
  },
];

const ResearchProposalWritingMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % proposalServices.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const current = proposalServices[currentIndex];

  return (
    <section className="services3-section">
      <div className="services3-overlay">
        <div className="services3-top-section">
          <h1>PhD Research Proposal Writing Help – Mumbai</h1>
          <p>
            We provide complete assistance for crafting PhD research proposals, including methodology design, funding alignment, and structured roadmaps. Our Mumbai-based experts help you plan, write, and refine proposals aligned with academic standards and real-world impact.
          </p>
          <button className="btn3" onClick={() => navigate("/phd-research-proposal-writing-services")}>
            Get Full Proposal Help
          </button>
        </div>

        <div className="services3-title-row-proposal">
          {proposalServices.map((s, i) => (
            <div
              key={i}
              className={`services3-title-box-proposal ${i === currentIndex ? "active" : ""}`}
              onClick={() => navigate(s.link)}
            >
              {s.title}
            </div>
          ))}
        </div>

        <div className="services3-center-slider">
          <div className="services3-card" onClick={() => navigate(current.link)}>
            <div className="services3-icon">{current.icon}</div>
            <h2>{current.title}</h2>
            <p>{current.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchProposalWritingMain;

