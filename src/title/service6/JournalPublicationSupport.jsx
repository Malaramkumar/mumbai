import React, { useState, useEffect } from "react";
import "./JournalPublicationSupport.scss";

const timelineData = [
  { type: "Fast-track Open Access (MDPI, PLOS ONE)", time: "1–3 months" },
  { type: "Scopus Indexed", time: "3–6 months" },
  { type: "SCI / SCIE Journals (Elsevier, IEEE, Springer)", time: "6–12 months" },
  { type: "UGC CARE / National Journals", time: "2–4 months" },
  { type: "High-impact Journals (Nature, Wiley)", time: "8–14 months" },
];

const faqs = [
  {
    q: "What is the difference between Scopus and SCI journals?",
    a: "Scopus journals focus on broad citation indexing and multidisciplinary research. SCI/SCIE journals emphasize high-impact research in science and technology with a more rigorous peer-review system.",
  },
  {
    q: "How long does the journal publication process take?",
    a: "Depending on the journal, it may take 3–12 months. Our support helps expedite the process with structured submission and response systems.",
  },
  {
    q: "Can you help revise my manuscript after rejection?",
    a: "Yes. We provide detailed review and rewriting assistance to meet reviewer expectations and improve acceptance chances.",
  },
  {
    q: "Do you assist in international journal publications?",
    a: "Yes. We assist with Elsevier, Springer, IEEE, Taylor & Francis, Wiley, Emerald Insight and other indexed journals.",
  },
  {
    q: "Is plagiarism checking included in your service?",
    a: "Yes. Plagiarism check and correction are integral parts of our Journal Publication Support.",
  },
];

export default function JournalPublicationSupport() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", label: "Overview" },
    { id: "types", label: "Journal Types" },
    { id: "steps", label: "Steps in Support" },
    { id: "strength", label: "Strong Publication" },
    { id: "best", label: "Best Practices" },
    { id: "dos", label: "Do's & Don'ts" },
    { id: "assist", label: "Institute Assistance" },
    { id: "timeline", label: "Publication Timeline" },
    { id: "faq", label: "FAQs" },
    { id: "conclusion", label: "Conclusion" },
  ];

  // Scroll tracking for sidebar highlight
  useEffect(() => {
    const handleScroll = () => {
      let current = "intro";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 120) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll behavior
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <div className="jp-layout">
      {/* Left Sidebar Navigation */}
      <aside className="jp-left-nav">
        <nav>
          <ul>
            {sections.map((s) => (
              <li
                key={s.id}
                className={activeSection === s.id ? "active" : ""}
                onClick={() => scrollToSection(s.id)}
              >
                {s.label}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <article className="journal-container">
        <header id="intro" className="journal-hero">
          <h1 className="jp-title">Journal Publication Support — Mumbai</h1>
          <p>
            Publishing your research in reputed journals is the ultimate step
            toward establishing academic credibility. Our Journal Publication
            Support in Mumbai helps students and research scholars publish in
            high-impact national and international journals with confidence.
          </p>
        </header>

        <section id="types" className="jp-section">
          <h2 className="jp-subtitle">Understanding Journal Publication and Its Importance</h2>
          <p>
            Journal publication validates findings, enhances academic profiles,
            and contributes to global knowledge. We help scholars choose suitable
            journals, format manuscripts, and handle reviewer feedback.
          </p>
        </section>

        <section className="jp-section">
          <h2 className="jp-subtitle">Different Types of Journals</h2>
          <ul className="jp-list">
            <li><strong>Open Access Journals:</strong> Freely accessible (MDPI, PLOS ONE).</li>
            <li><strong>Subscription-based Journals:</strong> Require access (Elsevier, T&F).</li>
            <li><strong>Scopus Indexed Journals:</strong> Globally recognized.</li>
            <li><strong>SCI / SCIE Journals:</strong> High impact, rigorous peer review.</li>
            <li><strong>UGC CARE Journals:</strong> Accepted in India for academic progression.</li>
          </ul>
        </section>

        <section id="steps" className="jp-section">
          <h2 className="jp-subtitle">Detailed Steps in Our Support</h2>
          <ol className="jp-list">
            <li>Journal Selection and Authenticity Check</li>
            <li>Manuscript Formatting and Alignment</li>
            <li>Plagiarism & Grammar Check</li>
            <li>Cover Letter Preparation</li>
            <li>Online Submission Assistance</li>
            <li>Peer Review Handling</li>
            <li>Final Proofreading</li>
            <li>Publication Tracking</li>
          </ol>
        </section>

        <section id="strength" className="jp-section">
          <h2 className="jp-subtitle">What Makes a Strong Publication</h2>
          <ul className="jp-list">
            <li>Clear problem statement and contribution.</li>
            <li>Strong methodology and validated results.</li>
            <li>Accurate citations and ethical writing.</li>
          </ul>
        </section>

        <section id="best" className="jp-section">
          <h2 className="jp-subtitle">Best Practices</h2>
          <ul className="jp-list">
            <li>Choose authentic journals; avoid predatory ones.</li>
            <li>Maintain originality and proper citations.</li>
            <li>Follow journal formatting and submission rules strictly.</li>
            <li>Be concise and professional in responses.</li>
          </ul>
        </section>

        <section id="dos" className="jp-section">
          <h2 className="jp-subtitle">Do’s and Don’ts</h2>
          <div className="jp-do-dont">
            <div className="jp-box">
              <h4>Do’s</h4>
              <ul>
                <li>Use academic tone and proper references.</li>
                <li>Follow templates strictly.</li>
                <li>Use plagiarism tools.</li>
              </ul>
            </div>
            <div className="jp-box">
              <h4>Don’ts</h4>
              <ul>
                <li>Don’t duplicate submissions.</li>
                <li>Don’t fabricate data.</li>
                <li>Don’t ignore reviewer comments.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="assist" className="jp-section">
          <h2 className="jp-subtitle">How Our Institute Assists</h2>
          <p>
            Narpavi Research Institute supports scholars from selection to
            publication across Scopus, SCI, IEEE, Springer, and Elsevier.
          </p>
        </section>

        <section id="timeline" className="jp-section">
          <h2 className="jp-subtitle">Usual Timeline for Publication</h2>
          <table className="jp-table">
            <thead>
              <tr>
                <th>Journal Type</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {timelineData.map((row) => (
                <tr key={row.type}>
                  <td>{row.type}</td>
                  <td>{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="faq" className="jp-section">
          <h2 className="jp-subtitle">FAQs</h2>
          {faqs.map((f, i) => (
            <div key={i} className="jp-faq-item">
              <div
                className={`jp-faq-question ${openFaqIndex === i ? "active" : ""}`}
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
              >
                {f.q}
              </div>
              <div className={`jp-faq-answer ${openFaqIndex === i ? "open" : ""}`}>
                {f.a}
              </div>
            </div>
          ))}
        </section>

        <footer id="conclusion" className="jp-footer">
          Publishing in reputed journals is a milestone. Our Journal Publication
          Support in Mumbai empowers scholars to produce high-quality, globally
          recognized research articles.
        </footer>
      </article>

      {/* Right SEO Sidebar */}
      <aside className="jp-right-seo">
        <div className="seo-box">
          <h3>SEO Highlights</h3>
          <ul>
            <li>Scopus Journal Support</li>
            <li>IEEE Paper Publication Mumbai</li>
            <li>Research Paper Editing</li>
            <li>PhD Journal Assistance</li>
            <li>UGC CARE Submission Help</li>
          </ul>
        </div>

        <div className="seo-box">
          <h3>Target Keywords</h3>
          <p>
            Journal publication support in Mumbai, Scopus journal writing
            services, IEEE paper submission India, PhD publication help.
          </p>
        </div>
      </aside>
    </div>
  );
}

