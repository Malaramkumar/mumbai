import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpenText,
  FilePenLine,
  NotebookText,
  FileText,
  ClipboardList,
  BookMarked,
} from "lucide-react"; // ✅ Updated icon set
import "./Services5.scss";

const services = [
  {
    title: "Research Article Writing",
    desc: "Find the right supervisor to align with your research journey.",
    link: "/research-article-and-journal-paper/research-article-writing-service-mumbai",
    icon: <BookOpenText size={36} />, // 📖 Represents academic article writing
  },
  {
    title: "Journal Paper Writing",
    desc: "Nail your research direction with expert topic guidance.",
    link: "/research-article-and-journal-paper/journal-paper-writing-service-in-mumbai",
    icon: <NotebookText size={36} />, // 🧾 Represents journal or notebook entry
  },
  {
    title: "Research Paper Writing",
    desc: "Craft standout SOPs, CVs, and university applications.",
    link: "/research-article-and-journal-paper/research-paper-writing-service-in-mumbai",
    icon: <FilePenLine size={36} />, // ✍️ Writing/editing paper
  },
  {
    title: "Review Paper Writing",
    desc: "Structure your PhD research proposal with expert input.",
    link: "/research-article-and-journal-paper/review-paper-writing-service-in-mumbai",
    icon: <ClipboardList size={36} />, // 🗒️ Checklist/review style icon
  },
  {
    title: "Review Article Writing",
    desc: "Choose the right university for your research goals.",
    link: "/research-article-and-journal-paper/review-article-writing-service-in-mumbai",
    icon: <BookMarked size={36} />, // 📘 Represents reviewed or referenced material
  },
  {
    title: "Literature Review Writing",
    desc: "Comprehensive support for literature surveys and summaries.",
    link: "/research-article-and-journal-paper/literature-review-writing-services-in-mumbai",
    icon: <FileText size={36} />, // 📄 Represents textual document/literature
  },
];

const Services5 = () => {
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
    <section className="services5-section">
      <div className="services5-overlay">
        {/* Top Heading */}
        <div className="services5-top-section">
          <h1>Research Article & Journal Paper Writing Support</h1>
          <p>
            At Narpavi Research Institute, our specialized PhD admission
            assistance services in Mumbai are tailored to help aspiring scholars
            make informed and strategic choices at the outset of their research
            journey. We provide comprehensive support in identifying suitable
            research topics aligned with current academic and industry trends,
            connecting candidates with qualified research guides, and preparing
            strong PhD applications.
          </p>

          <button
            onClick={() =>
              navigate("/phd-admission-assistance-for-mumbai")
            }
          >
            Research Article & Journal Paper
          </button>
        </div>

        {/* Title Row */}
        <div className="services5-title-row">
          {services.map((s, i) => (
            <div
              key={i}
              className={`services5-title-box ${
                i === currentIndex ? "active" : ""
              }`}
              onClick={() => navigate(s.link)}
            >
              {s.title}
            </div>
          ))}
        </div>

        {/* Sliding Card */}
        <div className="services5-center-slider">
          <div
            className="services5-card"
            onClick={() => navigate(current.link)}
          >
            <div className="services5-icon">{current.icon}</div>
            <h2>{current.title}</h2>
            <p>{current.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services5;
