import React, { useState } from "react";
import { FiMenu, FiChevronDown, FiSearch } from "react-icons/fi";
import "./PublicationPage.scss";
import LeftSidebar from "../LeftSidebar";

export default function PublicationPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What is the typical duration for a research publication?",
      a: "It varies between 1 to 6 months, depending on the journal’s peer-review cycle and response time.",
    },
    {
      q: "Can I publish in Scopus or Web of Science journals through your institute?",
      a: "Yes. We provide publication support for Scopus, SCI, and Web of Science indexed journals across disciplines.",
    },
    {
      q: "Do you help revise rejected papers?",
      a: "Absolutely. We reformat and rewrite papers based on reviewer feedback to increase acceptance chances.",
    },
    {
      q: "What tools do you use for publication preparation?",
      a: "We use Turnitin, Grammarly, LaTeX, SPSS, and EndNote for academic accuracy and referencing.",
    },
    {
      q: "Can I track my publication progress?",
      a: "Yes, our publication tracking system updates you at each stage — from submission to acceptance.",
    },
  ];

  const quickLinks = [
    "Introduction",
    "What Is Publication",
    "Significance",
    "Step-by-Step Procedure",
    "Sequence of Activities",
    "Publication Options",
    "Best Practices",
    "Do's and Don'ts",
    "Common Mistakes",
    "Our Services",
    "Mistakes to Avoid",
    "FAQs",
    "Conclusion",
  ];

  const seoKeywords = [
    "Publication Services in Mumbai",
    "Publication support in Mumbai pdf",
    "Free publication support in Mumbai",
    "Best publication support in Mumbai",
    "Research Paper writing services in Mumbai",
    "SCI paper publication",
    "Journal writers near me",
    "PhD assistance in Mumbai",
  ];

  return (
    <div className="publication-page">
      <div className="publication-grid">

        {/* LEFT SIDEBAR */}
        <aside className="left-sidebar6">
           <a href="/home-page" class="buttonhp">Home Page</a>
           <LeftSidebar/>
          <div className="sidebar-header6">
           
            <FiMenu /> <h3>Quick Links</h3>
          </div>

          <nav className="quick-links">
            {quickLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>
                {link}
              </a>
            ))}
          </nav>

        </aside>

        {/* MAIN CONTENT */}
        <main className="publication-main">
          <h1 id="introduction">Publication Services in Mumbai</h1>

          <p className="intro-text">
            In the world of academic research, publishing your findings is the bridge between effort and recognition.
          </p>

          <p>
            Whether you’re targeting Scopus, Web of Science, Springer, IEEE, or Elsevier journals, our publication experts provide end-to-end support.
          </p>

          <h2 id="what-is-publication">What Is Publication in Research?</h2>
          <p>
            Publication is the process of presenting your research findings to the global academic community.
          </p>

          <h2 id="significance">Significance of Research Publication</h2>
          <ul>
            <li>Builds credibility and academic reputation</li>
            <li>Mandatory for PhD completion</li>
            <li>Ensures global visibility</li>
            <li>Contributes to knowledge</li>
            <li>Improves academic and industry career opportunities</li>
          </ul>

          <h2 id="procedure">Step-by-Step Procedure for Paper Publication</h2>
          <ol>
            <li>Manuscript writing</li>
            <li>Journal selection</li>
            <li>Formatting as per guidelines</li>
            <li>Plagiarism check</li>
            <li>Submission</li>
            <li>Peer review response</li>
            <li>Revision</li>
            <li>Final publication</li>
          </ol>

          <h2 id="publication-options">Various Paper Publication Options</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Examples</th>
                  <th>Procedure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Scopus Journals</td>
                  <td>Elsevier, Springer</td>
                  <td>Submission → Review → Acceptance</td>
                </tr>
                <tr>
                  <td>SCI Journals</td>
                  <td>IEEE, Taylor & Francis</td>
                  <td>Advanced review</td>
                </tr>
                <tr>
                  <td>UGC CARE Journals</td>
                  <td>Indian Journals</td>
                  <td>Fast track review</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="faqs">FAQs — Publication Services in Mumbai</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <button onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <span>{f.q}</span>
                <FiChevronDown className={activeFaq === i ? "rotate" : ""} />
              </button>

              {activeFaq === i && (
                <div className="faq-answer">{f.a}</div>
              )}
            </div>
          ))}

          <h2 id="conclusion"></h2>
          <p>
            Publishing is the most important milestone in a researcher’s journey. Our experts help you publish in Scopus, Web of Science, IEEE, Springer, and more.
          </p>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="right-sidebar6">
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
