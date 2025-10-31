import React, { useEffect, useRef, useState } from "react";
import "./ElsevierConferencePublication.scss";

const sections = [
  {
    id: "intro",
    title: "Elsevier Conference Paper Publication Services in Mumbai",
    content: `Publishing a conference paper under Elsevier is one of the most powerful ways to establish your research credibility and academic visibility. At Narpavi Research Institute, our dedicated Elsevier Conference Paper Publication Services in Mumbai are designed to help college students, postgraduate researchers, and PhD scholars achieve publication success in globally recognized Elsevier conferences and proceedings.

Elsevier is one of the world’s most trusted and prestigious academic publishers, known for hosting conferences and journals indexed in Scopus, Web of Science (WoS), and ScienceDirect. With our Elsevier Conference Paper Publication Services in Mumbai, you gain access to world-class editorial, formatting, and submission support to make your paper eligible for Elsevier publication.`,
  },
  {
    id: "understanding",
    title: "Understanding Elsevier Conference Paper Publication",
    content: `An Elsevier conference paper is an academic document presented at an international conference and later published in Elsevier’s conference proceedings or partner journals. These papers often appear in well-known Elsevier platforms such as:
Procedia Computer Science
Procedia Engineering
Procedia Manufacturing
Energy Procedia
Materials Today: Proceedings

Publishing through Elsevier Conference Paper Publication Services in Mumbai enhances your visibility among global researchers and increases the chance of citations and indexing in Scopus and WoS databases.`,
  },
  {
    id: "significance",
    title: "Significance in PhD Research",
    list: [
      "Strengthens your research credentials and publication portfolio.",
      "Increases your chances of acceptance in reputed journals later.",
      "Helps you network with global research communities.",
      "Enhances your profile during academic interviews and grant applications.",
    ],
    footer:
      "Our Elsevier Conference Paper Publication Services in Mumbai guide you from writing to successful publication.",
  },
  {
    id: "steps",
    title: "Steps Involved in Elsevier Conference Paper Publication Support",
    numberedList: [
      "Topic Selection and Scope Identification – Choose a research theme aligned with Elsevier conference domains like Engineering, Data Science, AI, Management, and Environmental Studies.",
      "Abstract and Synopsis Drafting – Summarize your research idea with clarity, originality, and problem significance.",
      "Literature Review and Research Gap Identification – Conduct detailed reviews using ScienceDirect and Scopus-indexed resources.",
      "Methodology Design – Establish experimental, simulation, or analytical frameworks relevant to your research.",
      "Results and Interpretation – Present findings through clear visuals, comparative analysis, and evidence-based insights.",
      "Formatting and Reference Styling – Follow Elsevier’s specific conference template and citation standards.",
      "Proofreading and Plagiarism Removal – Ensure 100% originality and academic tone.",
      "Submission and Reviewer Communication – Manage submission and handle revisions after peer review.",
    ],
    footer:
      "We ensure quality enhancement and adherence to publication ethics at every stage.",
  },
  {
    id: "best-practices",
    title: "Best Practices for Elsevier Conference Paper Publication",
    list: [
      "Focus on originality and technical innovation.",
      "Use up-to-date references (preferably from the last five years).",
      "Keep writing concise and data-driven.",
      "Adhere strictly to Elsevier’s formatting and referencing.",
      "Include clear figures, tables, and robust results discussion.",
      "Highlight contribution and future scope explicitly.",
    ],
    footer:
      "We align manuscripts with Elsevier’s expectations to improve acceptance chances.",
  },
  {
    id: "dos-donts",
    title: "Dos and Don’ts in Elsevier Conference Paper Writing",
    dos: [
      "Use the official Elsevier conference paper template.",
      "Write with clarity, precision, and technical focus.",
      "Include high-quality visuals with accurate captions.",
      "Proofread thoroughly before submission.",
      "Follow ethical citation practices.",
    ],
    donts: [
      "Don’t use plagiarized or paraphrased content.",
      "Don’t submit incomplete or unverified results.",
      "Don’t exceed page limits or ignore formatting rules.",
      "Don’t submit to predatory or non-indexed conferences.",
    ],
    footer:
      "We help you maintain professional standards and prevent common publication errors.",
  },
  {
    id: "mistakes",
    title: "Common Mistakes in Elsevier Conference Paper Publication",
    list: [
      "Submitting to unrelated or low-quality conferences.",
      "Weak novelty or poor technical depth.",
      "Ignoring Elsevier formatting and structure.",
      "High similarity scores or copied methodology.",
      "Inadequate proofreading or grammatical issues.",
      "Missing submission deadlines.",
    ],
    footer:
      "We resolve these issues before submission to increase acceptance probability.",
  },
  {
    id: "ways",
    title: "Different Ways for Elsevier Conference Paper Publication",
    list: [
      "Direct Conference Proceedings: e.g., Materials Today: Proceedings, Procedia Computer Science.",
      "Special Issue Publications: Extended conference papers invited to Elsevier journal special issues.",
      "Collaborative Conferences: Events co-organized with universities (e.g., ICCCNT, ICETMS, ICMET, ICTCS).",
    ],
    footer:
      "Select the most suitable pathway based on your domain and objectives.",
  },
  {
    id: "timeline",
    title: "Timeline for Elsevier Conference Paper Publication",
    timelineRows: [
      { stage: "Paper Preparation & Submission", desc: "Drafting, template formatting, internal review", time: "3–5 weeks" },
      { stage: "Peer Review Process", desc: "External review cycles and decision", time: "2–4 months" },
      { stage: "Final Acceptance & Indexing", desc: "Camera-ready, production, indexing", time: "3–6 months" },
    ],
    footer:
      "We streamline the workflow for faster, high-quality results.",
  },
  {
    id: "expertise",
    title: "Our Institute’s Expertise in Elsevier Conference Paper Publication",
    list: [
      "Research topic selection and novelty analysis.",
      "Technical writing and language editing.",
      "Plagiarism removal and formatting assistance.",
      "Guidance on Elsevier submission protocols.",
      "Reviewer response drafting and final proofreading.",
      "Support for oral/poster presentations at Elsevier conferences.",
      "Experience with ICCE, ICMET, ICCT, ICTCS and related venues.",
    ],
    footer:
      "We ensure full compliance with Elsevier standards and stronger academic outcomes.",
  },
  {
    id: "faqs",
    title: "FAQs on Elsevier Conference Paper Publication Services in Mumbai",
    faqs: [
      { q: "Why is Elsevier conference publication important?", a: "Elsevier publications are peer‑reviewed, globally recognized, and often Scopus‑indexed, signaling academic excellence." },
      { q: "Who can publish an Elsevier conference paper?", a: "Undergraduates, postgraduates, and PhD researchers can publish with guided support." },
      { q: "What is the typical acceptance rate?", a: "Varies by venue (about 25%–60%) depending on research quality and selectivity." },
      { q: "Which Elsevier series accept conference papers?", a: "Common venues include Procedia Computer Science and Materials Today: Proceedings." },
      { q: "Can Elsevier conference papers be extended to journals?", a: "Yes, many venues invite extended versions for Elsevier journals." },
      { q: "What fields are covered?", a: "Engineering, AI, Management, Data Science, Materials, Social Sciences, and more." },
      { q: "How long does publication take?", a: "Usually 3–6 months from submission to indexing." },
      { q: "Do you provide end‑to‑end support?", a: "Yes, from topic selection to final publication and presentation prep." },
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content:
      "Publishing through Elsevier is a prestigious achievement. With Elsevier Conference Paper Publication Services in Mumbai, scholars receive structured guidance, editorial support, and domain expertise to meet international standards. Whether targeting Procedia Engineering, Materials Today: Proceedings, or other Elsevier conferences, Narpavi Research Institute helps you publish confidently and effectively—boosting your global academic presence.",
  },
];

const tocItems = [
  { id: "intro", label: "Introduction" },
  { id: "understanding", label: "Understanding" },
  { id: "significance", label: "Significance" },
  { id: "steps", label: "Steps" },
  { id: "best-practices", label: "Best Practices" },
  { id: "dos-donts", label: "Dos & Don’ts" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "ways", label: "Ways to Publish" },
  { id: "timeline", label: "Timeline" },
  { id: "expertise", label: "Our Expertise" },
  { id: "faqs", label: "FAQs" },
  { id: "conclusion", label: "Conclusion" },
];

export default function ElsevierConferencePublication() {
  const [active, setActive] = useState("intro");
  const tocRef = useRef(null);

  useEffect(() => {
    const headings = document.querySelectorAll(".ecp-section-title");
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
    <div className="ecp-layout">
      {/* Left sticky TOC */}
      <aside className="ecp-aside ecp-aside--left fade-in-left" aria-label="On this page">
        <div className="ecp-sidebar-header">
          <h2 className="ecp-sidebar-title">On this page</h2>
          <span className="ecp-section-count">{tocItems.length} sections</span>
        </div>
        <nav ref={tocRef} className="ecp-toc" aria-label="Section navigation">
          <ul className="ecp-toc-list" role="list">
            {tocItems.map((t) => (
              <li key={t.id} className="ecp-toc-item">
                <a
                  href={`#h-${t.id}`}
                  onClick={(e) => smoothScroll(e, t.id)}
                  className={`ecp-toc-link ${active === t.id ? "is-active" : ""}`}
                  aria-current={active === t.id ? "true" : "false"}
                >
                  <span className="ecp-toc-text">{t.label}</span>
                  <span className="ecp-toc-indicator" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="ecp-main fade-in" id="main-content">
        <article className="ecp-container">
          <header className="ecp-header">
            <h1 className="ecp-title">Elsevier Conference Paper Publication Services in Mumbai</h1>
            <p className="ecp-lead">
              Publish confidently in Elsevier proceedings with expert guidance on writing, formatting, submission, and reviewer response.
            </p>
          </header>

          {sections.map((s) => (
            <section key={s.id} id={`section-${s.id}`} className="ecp-section fade-in-slide" aria-labelledby={`h-${s.id}`}>
              <h2 id={`h-${s.id}`} className="ecp-section-title">{s.title}</h2>

              {s.content && s.content.split("\n\n").map((p, i) => (
                <p key={i} className="ecp-paragraph">{p}</p>
              ))}

              {s.list && (
                <ul className="ecp-ul">
                  {s.list.map((item, i) => (
                    <li key={i} className="ecp-li">{item}</li>
                  ))}
                </ul>
              )}

              {s.numberedList && (
                <ol className="ecp-ol">
                  {s.numberedList.map((item, i) => (
                    <li key={i} className="ecp-li">{item}</li>
                  ))}
                </ol>
              )}

              {s.timelineRows && (
                <>
                  <p id="timeline-summary" className="sr-only">Elsevier conference timeline stages with durations.</p>
                  <div className="ecp-table-wrapper">
                    <table className="ecp-table" role="table" aria-describedby="timeline-summary">
                      <caption className="sr-only">Elsevier conference paper publication timeline</caption>
                      <thead>
                        <tr>
                          <th className="ecp-th" scope="col">Stage</th>
                          <th className="ecp-th" scope="col">Description</th>
                          <th className="ecp-th" scope="col">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {s.timelineRows.map((row, idx) => (
                          <tr key={idx}>
                            <td className="ecp-td ecp-td--stage">{row.stage}</td>
                            <td className="ecp-td ecp-td--desc">{row.desc}</td>
                            <td className="ecp-td ecp-td--time">{row.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {s.faqs && (
                <div className="ecp-faqs-grid">
                  {s.faqs.map((f, i) => (
                    <details key={i} className="ecp-faq">
                      <summary className="ecp-faq-q">{f.q}</summary>
                      <div className="ecp-faq-a"><p className="ecp-paragraph">{f.a}</p></div>
                    </details>
                  ))}
                </div>
              )}

              {s.footer && <p className="ecp-paragraph ecp-footer">{s.footer}</p>}
            </section>
          ))}
        </article>
      </main>

      {/* Right sticky SEO / Quick info */}
      <aside className="ecp-aside ecp-aside--right float-in-right" aria-label="Quick info">
        <div className="ecp-card ecp-card--primary">
          <div className="ecp-card-header">
            <h3 className="ecp-card-title">Elsevier Highlights</h3>
            <span className="ecp-card-badge">Featured</span>
          </div>
          <ul className="ecp-card-list">
            <li className="ecp-card-item">🧩 Procedia & MTP Templates</li>
            <li className="ecp-card-item">📝 Language & Plagiarism QA</li>
            <li className="ecp-card-item">🔁 Reviewer Response Support</li>
            <li className="ecp-card-item">🧭 Venue Shortlisting</li>
            <li className="ecp-card-item">✅ Camera-Ready Files</li>
          </ul>
          <div className="ecp-card-footer">
            <button className="ecp-cta-button" aria-label="Start Elsevier support">Get Started</button>
          </div>
        </div>

        <div className="ecp-card ecp-card--secondary">
          <h4 className="ecp-card-title">Quick Navigation</h4>
          <ul className="ecp-card-list ecp-quick-links">
            {[
              { href: "#h-steps", text: "Publication Steps" },
              { href: "#h-best-practices", text: "Best Practices" },
              { href: "#h-dos-donts", text: "Dos & Don’ts" },
              { href: "#h-timeline", text: "Timelines" },
              { href: "#h-faqs", text: "FAQs" },
            ].map((l, i) => (
              <li key={i} className="ecp-card-item">
                <a
                  href={l.href}
                  className="ecp-quick-link"
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

        <div className="ecp-card ecp-card--stats">
          <h4 className="ecp-card-title">Our Impact</h4>
          <div className="ecp-stats-grid">
            <div className="ecp-stat-item">
              <span className="ecp-stat-number">180+</span>
              <span className="ecp-stat-label">Elsevier Papers</span>
            </div>
            <div className="ecp-stat-item">
              <span className="ecp-stat-number">91%</span>
              <span className="ecp-stat-label">Acceptance Rate</span>
            </div>
            <div className="ecp-stat-item">
              <span className="ecp-stat-number">40+</span>
              <span className="ecp-stat-label">Venues Supported</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
