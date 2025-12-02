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
    desc: "Expertly written research articles with strong structure, clarity, and accurate analysis.",
    link: "/research-article-writing-service-mumbai",
    icon: <BookOpenText size={36} />,
  },
  {
    title: "Journal Paper Writing",
    desc: "High-quality journal papers crafted to meet publication standards and guidelines.",
    link: "/journal-paper-writing-service-in-mumbai",
    icon: <NotebookText size={36} />,
  },
  {
    title: "Research Paper Writing",
    desc: "Well-researched and professionally written papers with proper methodology and results.",
    link: "/research-paper-writing-service-in-mumbai",
    icon: <FilePenLine size={36} />,
  },
  {
    title: "Review Paper Writing",
    desc: "Comprehensive review papers summarizing and evaluating existing research effectively.",
    link: "/review-paper-writing-service-in-mumbai",
    icon: <ClipboardList size={36} />,
  },
  {
    title: "Review Article Writing",
    desc: "Clear and concise review articles presenting insights from multiple research sources.",
    link: "/review-article-writing-service-in-mumbai",
    icon: <BookMarked size={36} />,
  },
  {
    title: "Literature Review Writing",
    desc: "Detailed literature reviews analyzing prior studies with critical evaluation.",
    link: "/literature-review-writing-services-in-mumbai",
    icon: <FileText size={36} />,
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
            Transform your research into a publication-worthy masterpiece with our Research Article and Journal Paper Writing Services in Mumbai. At Narpavi Research Institute, we craft compelling, well-structured, and academically sound papers that meet the rigorous standards of international journals like Elsevier, Springer, IEEE, Scopus, and Web of Science. Our expert writers and editors ensure every section—introduction, methodology, results, and discussion—is logically connected, data-driven, and plagiarism-free. Whether you are preparing a conceptual paper, empirical article, or literature-based review, our guidance helps you articulate your findings with clarity and impact. Experience how our end-to-end publication support enhances your chances of journal acceptance and positions your research among globally recognized scholarly contributions.

          </p>

          <button
            onClick={() =>
              navigate("/research-article-and-journal-paper")
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

