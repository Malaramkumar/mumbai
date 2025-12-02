import React, { useState } from "react";
import { FiMenu, FiChevronDown, FiSearch } from "react-icons/fi";
import "./ResearchArticlePage.scss";
import LeftSidebar from "../LeftSidebar";

export default function ResearchArticlePage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What is the difference between a research article and a journal paper?",
      a: "A research article is the original study; a journal paper is the published version after peer review. Both are interrelated and essential for scholarly recognition.",
    },
    {
      q: "Can Narpavi Research Institute help me publish in Scopus and Web of Science journals?",
      a: "Yes, our experts provide complete writing and submission support for Scopus, SCI, and Web of Science journals with high impact factors.",
    },
    {
      q: "How long does it take to publish a paper?",
      a: "Depending on the journal type, it may take 1 to 6 months from submission to acceptance.",
    },
    {
      q: "Do you help in revising rejected papers?",
      a: "Absolutely. We analyze reviewer comments and rewrite your paper to meet journal standards for re-submission.",
    },
    {
      q: "What software tools do you use?",
      a: "We use advanced tools like Grammarly, Turnitin, SPSS, MATLAB, and LaTeX to ensure academic excellence.",
    },
  ];

  const quickLinks = [
    "Introduction",
    "What Is Research Article and Journal Paper Writing",
    "Significance",
    "Step-by-Step Procedure",
    "Sequence of Activities",
    "Best Practices",
    "Do’s and Don’ts",
    "Common Mistakes",
    "Various Journals",
    "Our Services",
    "Mistakes to Avoid",
    "FAQs",
    "Conclusion",
  ];

  const seoKeywords = [
    "Research article and journal paper writing services in Mumbai",
    "Best research article and journal paper writing services in Mumbai",
    "Journal writers near me",
    "Research article and journal paper writing services in Mumbai contact number",
    "Research article and journal paper writing services in Mumbai contact number near me",
  ];

  return (
    <div className="research-article-page">
      <div className="research-article-grid">

        {/* LEFT SIDEBAR */}
        <aside className="left-sidebar col-span-12 md-col-3"> 
           <a href="/home-page" class="buttonhp">Home Page</a>
            <LeftSidebar/>
          <div className="sidebar-header">
         
            <FiMenu />
            <h3>Quick Links</h3>
          </div>

          <nav className="quick-links">
            {quickLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="search-box">
            <input type="text" placeholder="Search links..." />
            <FiSearch className="search-icon" />
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="research-main col-span-12 md-col-6">

          <h1 id="introduction">
            Research Article and Journal Paper Writing Services in Mumbai
          </h1>

          <p className="intro-text">
            At Narpavi Research Institute, we specialize in providing end-to-end
            Research Article and Journal Paper Writing Services in Mumbai for
            PhD scholars, postgraduate students, and academic researchers.
          </p>

          <p>
            Whether you’re preparing your first manuscript or aiming for Q1/Q2
            journal publication, we offer structured guidance and expert support.
          </p>

          {/* ---------------- SECTIONS ---------------- */}

          <h2 id="what-is-research-article-and-journal-paper-writing">
            What Is Research Article and Journal Paper Writing?
          </h2>

          <p>
            A research article presents original scientific investigation, while
            a journal paper is a formally published and peer-reviewed document.
          </p>

          <h2 id="significance">Significance of Research Articles</h2>
          <ul>
            <li>Establishes research authenticity</li>
            <li>Increases chances of journal acceptance</li>
            <li>Enhances visibility in Scopus & Web of Science</li>
            <li>Required for thesis submission</li>
            <li>Builds academic reputation</li>
          </ul>

          <h2 id="step-by-step-procedure">Step-by-Step Procedure</h2>
          <ol>
            <li>Topic & Journal Selection</li>
            <li>Literature Review</li>
            <li>Methodology & Data Collection</li>
            <li>Manuscript Writing</li>
            <li>Formatting</li>
            <li>Plagiarism Check</li>
            <li>Peer Review</li>
            <li>Submission Support</li>
          </ol>

          <h2 id="faqs">FAQs – Research Article Writing</h2>

          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <button onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <span>{f.q}</span>
                <FiChevronDown
                  className={activeFaq === i ? "rotate" : ""}
                />
              </button>

              {activeFaq === i && (
                <div className="faq-answer">{f.a}</div>
              )}
            </div>
          ))}

          <h2 id="conclusion"></h2>
          <p>
            Publishing a high-quality paper is crucial in today’s competitive
            academic environment. We help you succeed with expert guidance.
          </p>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="right-sidebar col-span-12 md-col-3">
          <h4>SEO Keywords</h4>
          <ul>
            {seoKeywords.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>

        </aside>

      </div>
    </div>
  );
}
