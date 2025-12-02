import React, { useEffect, useRef, useState } from "react";
import "./IEEEConferencePaperPublication.scss";
import LeftSidebar from "../../LeftSidebar";

const sections = [
  {
    id: "intro",
    title: "IEEE Conference Paper Publication Services in Mumbai",
    content: `In today’s research-driven academic environment, publishing your work in IEEE conferences can significantly enhance your scholarly profile. At Narpavi Research Institute, our specialized IEEE Conference Paper Publication Services in Mumbai guide students and scholars through every step — from technical writing to final submission — ensuring your paper meets the highest IEEE publication standards.

IEEE (Institute of Electrical and Electronics Engineers) is one of the world’s most prestigious academic platforms. Papers published through IEEE gain global visibility, professional recognition, and improved citation metrics. Our IEEE Conference Paper Publication Services in Mumbai empower scholars to publish impactful research in leading IEEE-indexed events held across India and worldwide.`,
  },
  {
    id: "understanding",
    title: "Understanding IEEE Conference Paper Publication",
    content: `An IEEE conference paper is a concise, research-focused document that presents original findings, innovative designs, or experimental results aligned with IEEE’s technical scope. Unlike journal papers, IEEE conference papers are shorter, more focused, and often serve as precursors to full journal publications.

Publishing through IEEE Conference Paper Publication Services in Mumbai helps researchers:`,
    list: [
      "Present at international conferences like IEEE ICC, IEEE ICML, IEEE INDICON, etc.",
      "Build a strong research portfolio for PhD or postdoctoral work.",
      "Network with global researchers and technical experts.",
      "Gain credibility through IEEE Xplore indexing.",
    ],
  },
  {
    id: "steps",
    title: "Steps Involved in IEEE Conference Paper Publication Support",
    numberedList: [
      "Topic and Scope Identification – Selection of topic aligned with IEEE conference themes (AI, IoT, Electrical Engineering, Computer Science, etc.).",
      "Abstract and Synopsis Preparation – Crafting precise abstracts emphasizing research novelty and technical contribution.",
      "Literature Review and Gap Analysis – Identification of research gaps using IEEE Xplore, Scopus, and ScienceDirect databases.",
      "Research Methodology Development – Designing experiments, simulations, or models according to IEEE standards.",
      "Results and Discussion – Clear presentation of outcomes using graphs, tables, and comparative analysis.",
      "Formatting and Citation – Paper formatted in IEEE double-column style with accurate in-text citations and references.",
      "Proofreading and Plagiarism Check – Ensuring originality and academic tone through expert review.",
      "Submission and Response Handling – End-to-end guidance on submission to IEEE conference portals and reviewer responses.",
    ],
    footer:
      "Each stage of our IEEE Conference Paper Publication Services in Mumbai ensures technical precision and compliance with IEEE publication ethics.",
  },
  {
    id: "best-practices",
    title: "Best Practices for IEEE Conference Paper Publication",
    list: [
      "Use recent references (preferably within the last five years).",
      "Highlight technical contribution and novelty clearly.",
      "Follow the IEEE format strictly — font, columns, and reference style.",
      "Use reproducible experiments and validated results.",
      "Keep the paper concise — usually 4 to 6 pages.",
      "Write in active voice and maintain scientific clarity.",
    ],
    footer:
      "We ensure these standards are met so your work aligns with global expectations.",
  },
  {
    id: "dos-donts",
    title: "Dos and Don’ts in IEEE Conference Paper Writing",
    dos: [
      "Include proper keywords to improve search visibility in IEEE Xplore.",
      "Follow ethical writing standards and cite all sources.",
      "Use high-quality visuals (graphs, block diagrams, schematics).",
      "Proofread multiple times to avoid formatting or grammatical errors.",
    ],
    donts: [
      "Don’t use copied or paraphrased content.",
      "Don’t exceed the page limit.",
      "Don’t ignore reviewer comments.",
      "Don’t skip plagiarism checks.",
    ],
    footer:
      "We help researchers adhere to IEEE norms and avoid these common pitfalls.",
  },
  {
    id: "mistakes",
    title: "Common Mistakes in IEEE Conference Paper Publication",
    list: [
      "Weak research novelty or lack of clear contribution.",
      "Poor adherence to IEEE formatting and citation guidelines.",
      "Over-dependence on secondary data without validation.",
      "Incomplete or vague results section.",
      "Ignoring submission deadlines and conference scope.",
    ],
    footer:
      "We refine manuscripts to meet IEEE technical and ethical standards.",
  },
  {
    id: "timeline",
    title: "Timeline for IEEE Conference Paper Publication",
    timelineRows: [
      { stage: "Initial preparation and writing", desc: "Topic, abstract, drafting, internal checks", time: "3–4 weeks" },
      { stage: "Peer review and feedback", desc: "External review cycles and decisions", time: "2–3 months" },
      { stage: "Final acceptance and indexing", desc: "Camera-ready, registration, IEEE Xplore indexing", time: "3–5 months" },
    ],
    footer:
      "We streamline the process to ensure punctual submission and faster acceptance.",
  },
  {
    id: "paths",
    title: "Different Paths for IEEE Conference Paper Publication",
    list: [
      "IEEE-Sponsored Conferences: IEEE INDICON, IEEE ICML, IEEE ICDE, IEEE ICASSP.",
      "Co-sponsored Conferences: Jointly organized by universities and IEEE chapters.",
      "Technical Co-sponsorship (TCS) Events: Approved for IEEE indexing post-acceptance.",
    ],
    footer:
      "Select the right path based on your domain and publication goals.",
  },
  {
    id: "support",
    title: "Our Institute’s Support for IEEE Conference Paper Publication",
    list: [
      "Technical content development and novelty analysis",
      "IEEE format editing and reference alignment",
      "Simulation data and experimental result support",
      "Conference selection based on your research domain",
      "Proofreading, plagiarism removal, and plagiarism report",
      "Guidance for oral or poster presentation sessions",
    ],
    footer:
      "We ensure readiness for IEEE Xplore indexing and top-tier presentations.",
  },
  {
    id: "faqs",
    title: "FAQs on IEEE Conference Paper Publication Services in Mumbai",
    faqs: [
      { q: "What makes IEEE conference papers so valuable?", a: "They are globally recognized, indexed in IEEE Xplore, and highly cited, providing strong academic credibility." },
      { q: "Can students submit independently?", a: "Yes. We guide students and scholars through independent or co-authored submissions." },
      { q: "How long does publication take?", a: "Typically 3–6 months depending on review cycles and conference schedules." },
      { q: "Is IEEE only for engineering?", a: "No. It includes computer science, data analytics, AI, communications, and interdisciplinary areas." },
      { q: "What is the acceptance rate?", a: "Varies by venue (about 25%–60%) based on quality and competitiveness." },
      { q: "Do you help with formatting and submission?", a: "Yes, we provide end-to-end IEEE formatting, submission, and response management." },
      { q: "Can conference papers become journal papers?", a: "Absolutely. Many are extended for Scopus/SCI journals later." },
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content:
      "With increasing global emphasis on technical publications, IEEE Conference Paper Publication Services in Mumbai help scholars gain international exposure. At Narpavi Research Institute, every paper is crafted, reviewed, and formatted to IEEE standards—improving its chances for global recognition. Whether targeting IEEE INDICON, IEEE ICML, or IEEE ICC, our comprehensive support helps you publish confidently and professionally.",
  },
];

const tocItems = [
  { id: "intro", label: "Introduction" },
  { id: "understanding", label: "Understanding" },
  { id: "steps", label: "Steps" },
  { id: "best-practices", label: "Best Practices" },
  { id: "dos-donts", label: "Dos & Don’ts" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "timeline", label: "Timeline" },
  { id: "paths", label: "Publication Paths" },
  { id: "support", label: "Our Support" },
  { id: "faqs", label: "FAQs" },
  { id: "conclusion", label: "Conclusion" },
];

export default function IEEEConferencePublication() {
  const [active, setActive] = useState("intro");
  const tocRef = useRef(null);

  useEffect(() => {
    const headings = document.querySelectorAll(".icp-section-title");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id.replace("h-", "");
            setActive(id);
          }
        });
      },
      { rootMargin: "-25% 0px -70% 0px", threshold: 0 }
    );
    headings.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, []);

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(`h-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="icp-layout">
      {/* Left sticky TOC */}
      <aside className="icp-aside icp-aside--left fade-in-left" aria-label="On this page">
         <a href="/home-page" class="buttonhp">Home Page</a>
        <LeftSidebar/>
        <div className="icp-sidebar-header">
          <h2 className="icp-sidebar-title">On this page</h2>
          <span className="icp-section-count">{tocItems.length} sections</span>
        </div>
        <nav ref={tocRef} className="icp-toc" aria-label="Section navigation">
          <ul className="icp-toc-list" role="list">
            {tocItems.map((t) => (
              <li key={t.id} className="icp-toc-item">
                <a
                  href={`#h-${t.id}`}
                  onClick={(e) => smoothScroll(e, t.id)}
                  className={`icp-toc-link ${active === t.id ? "is-active" : ""}`}
                  aria-current={active === t.id ? "true" : "false"}
                >
                  <span className="icp-toc-text">{t.label}</span>
                  <span className="icp-toc-indicator" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="icp-main fade-in" id="main-content">
        <article className="icp-container">
          <header className="icp-header">
            <h1 className="icp-title">IEEE Conference Paper Publication Services in Mumbai</h1>
            <p className="icp-lead">
              End-to-end guidance on IEEE-ready writing, formatting, submission, and reviewer response to maximize acceptance and visibility.
            </p>
          </header>

          {sections.map((s) => (
            <section key={s.id} id={`section-${s.id}`} className="icp-section fade-in-slide" aria-labelledby={`h-${s.id}`}>
              <h2 id={`h-${s.id}`} className="icp-section-title">{s.title}</h2>

              {s.content && s.content.split("\n\n").map((p, i) => (
                <p key={i} className="icp-paragraph">{p}</p>
              ))}

              {s.list && (
                <ul className="icp-ul">
                  {s.list.map((item, i) => (
                    <li key={i} className="icp-li">{item}</li>
                  ))}
                </ul>
              )}

              {s.numberedList && (
                <ol className="icp-ol">
                  {s.numberedList.map((item, i) => (
                    <li key={i} className="icp-li">{item}</li>
                  ))}
                </ol>
              )}

              {s.timelineRows && (
                <>
                  <p id="timeline-summary" className="sr-only">IEEE conference timeline stages with durations.</p>
                  <div className="icp-table-wrapper">
                    <table className="icp-table" role="table" aria-describedby="timeline-summary">
                      <caption className="sr-only">IEEE conference paper publication timeline</caption>
                      <thead>
                        <tr>
                          <th className="icp-th" scope="col">Stage</th>
                          <th className="icp-th" scope="col">Description</th>
                          <th className="icp-th" scope="col">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {s.timelineRows.map((row, idx) => (
                          <tr key={idx}>
                            <td className="icp-td icp-td--stage">{row.stage}</td>
                            <td className="icp-td icp-td--desc">{row.desc}</td>
                            <td className="icp-td icp-td--time">{row.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {s.faqs && (
                <div className="icp-faqs-grid">
                  {s.faqs.map((f, i) => (
                    <details key={i} className="icp-faq">
                      <summary className="icp-faq-q">{f.q}</summary>
                      <div className="icp-faq-a"><p className="icp-paragraph">{f.a}</p></div>
                    </details>
                  ))}
                </div>
              )}

              {s.footer && <p className="icp-paragraph icp-footer">{s.footer}</p>}
            </section>
          ))}
        </article>
      </main>

      {/* Right sticky SEO / Quick info */}
      <aside className="icp-aside icp-aside--right float-in-right" aria-label="Quick info">
        <div className="icp-card icp-card--primary">
          <div className="icp-card-header">
            <h3 className="icp-card-title">IEEE Highlights</h3>
            <span className="icp-card-badge">Expert</span>
          </div>
          <ul className="icp-card-list">
            <li className="icp-card-item">📑 IEEE double‑column formatting</li>
            <li className="icp-card-item">🧪 Reproducible results review</li>
            <li className="icp-card-item">🔁 Reviewer response support</li>
            <li className="icp-card-item">🧭 Venue shortlisting</li>
            <li className="icp-card-item">✅ Camera‑ready preparation</li>
          </ul>
          <div className="icp-card-footer">
            <button className="icp-cta-button" aria-label="Start IEEE support">Get Started</button>
          </div>
        </div>

        <div className="icp-card icp-card--secondary">
          <h4 className="icp-card-title">Quick Navigation</h4>
          <ul className="icp-card-list icp-quick-links">
            {[
              { href: "#h-steps", text: "Publication Steps" },
              { href: "#h-best-practices", text: "Best Practices" },
              { href: "#h-dos-donts", text: "Dos & Don’ts" },
              { href: "#h-timeline", text: "Timelines" },
              { href: "#h-faqs", text: "FAQs" },
            ].map((l, i) => (
              <li key={i} className="icp-card-item">
                <a
                  href={l.href}
                  className="icp-quick-link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {l.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="icp-card icp-card--stats">
          <h4 className="icp-card-title">Our Impact</h4>
          <div className="icp-stats-grid">
            <div className="icp-stat-item">
              <span className="icp-stat-number">150+</span>
              <span className="icp-stat-label">IEEE Papers</span>
            </div>
            <div className="icp-stat-item">
              <span className="icp-stat-number">88%</span>
              <span className="icp-stat-label">Acceptance Rate</span>
            </div>
            <div className="icp-stat-item">
              <span className="icp-stat-number">30+</span>
              <span className="icp-stat-label">Conferences</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

