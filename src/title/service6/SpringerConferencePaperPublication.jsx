import React, { useEffect, useRef, useState } from "react";
import "./SpringerConferencePaperPublication.scss";

const sections = [
  {
    id: "intro",
    title: "Springer Conference Paper Publication Services in Mumbai",
    content: `Publishing a conference paper with Springer is one of the most credible ways to showcase your research globally. At Narpavi Research Institute, our comprehensive Springer Conference Paper Publication Services in Mumbai are designed for college students, postgraduate researchers, and PhD scholars who wish to publish their work in Springer-indexed international conferences.

Springer is a world-renowned academic publisher that collaborates with top-tier conferences across engineering, technology, management, social sciences, and applied sciences. Having your paper published through Springer gives your research visibility in prestigious databases like SpringerLink, Scopus, and Web of Science. Our Springer Conference Paper Publication Services in Mumbai help scholars meet the high-quality requirements of Springer’s editorial and peer-review standards.`,
  },
  {
    id: "understanding",
    title: "Understanding Springer Conference Paper Publication",
    content: `A Springer conference paper is a scholarly work presented at an international academic conference and published in Springer’s conference proceedings series such as Lecture Notes in Computer Science (LNCS), Lecture Notes in Electrical Engineering (LNEE), or Advances in Intelligent Systems and Computing (AISC).

These papers contribute to ongoing academic discussions, innovations, and developments in specific research areas. Through Springer Conference Paper Publication Services in Mumbai, scholars can publish papers in events such as:
ICMLC (International Conference on Machine Learning and Computing)
ICCCE (International Conference on Communication, Computing, and Electronics)
ICAICT (International Conference on Artificial Intelligence and Communication Technologies)

Publishing in Springer ensures long-term visibility, indexing benefits, and strong academic recognition — essential for PhD scholars, research aspirants, and academicians in Mumbai and beyond.`,
  },
  {
    id: "steps",
    title: "Steps Involved in Springer Conference Paper Publication Support",
    numberedList: [
      "Topic and Scope Identification – Selecting a topic aligned with Springer’s ongoing conference series and current research trends.",
      "Abstract and Concept Framing – Crafting a precise abstract that outlines novelty, methodology, and contribution.",
      "Comprehensive Literature Review – Collecting and analyzing existing works using SpringerLink and Scopus databases.",
      "Research Methodology Design – Structuring the approach, data collection, and analytical techniques.",
      "Results and Discussion Preparation – Presenting outcomes using tables, figures, and comparative interpretations.",
      "Formatting in Springer Template – Following Springer’s template guidelines (LNCS or LNEE formats).",
      "Plagiarism Check and Proofreading – Ensuring originality, language accuracy, and zero duplication.",
      "Conference Submission and Reviewer Response Handling – Managing submission procedures, peer-review comments, and revisions.",
    ],
    footer:
      "Every stage in our Springer Conference Paper Publication Services in Mumbai ensures academic precision and compliance with Springer’s international standards.",
  },
  {
    id: "best-practices",
    title: "Best Practices for Springer Conference Paper Publication",
    list: [
      "Focus on research novelty and contribution.",
      "Maintain clarity and conciseness throughout your writing.",
      "Ensure proper referencing and citation styles as per Springer guidelines.",
      "Include clear figures, graphs, and experimental validation.",
      "Keep the word count within Springer’s specified limits (6–10 pages).",
      "Use recent literature — especially Springer, IEEE, and Elsevier sources.",
    ],
    footer:
      "Our Springer Conference Paper Publication Services in Mumbai guide you to align your manuscript perfectly with these publication best practices.",
  },
  {
    id: "dos-donts",
    title: "Dos and Don’ts in Springer Conference Paper Writing",
    dos: [
      "Follow Springer’s official paper format and author guidelines.",
      "Use original figures, graphs, and data sets.",
      "Proofread multiple times to ensure language accuracy.",
      "Cite relevant and credible sources, preferably Springer-indexed.",
      "Keep the paper objective, data-driven, and methodologically sound.",
    ],
    donts: [
      "Don’t use copied or paraphrased content from existing papers.",
      "Don’t exceed page or word limits set by the conference.",
      "Don’t use informal language or unsupported claims.",
      "Don’t miss submission deadlines or reviewer responses.",
    ],
    footer:
      "By adhering to these principles, our Springer Conference Paper Publication Services in Mumbai help you avoid rejections and secure acceptance efficiently.",
  },
  {
    id: "mistakes",
    title: "Common Mistakes in Springer Conference Paper Publication",
    list: [
      "Poor alignment with conference theme or Springer’s series.",
      "Lack of research novelty or technical depth.",
      "Improper formatting and referencing errors.",
      "Weak experimental validation or data inconsistency.",
      "High similarity or plagiarism percentage.",
      "Incomplete author details or missing conference registration.",
    ],
    footer:
      "Our Springer Conference Paper Publication Services in Mumbai ensure all these mistakes are eliminated before submission.",
  },
  {
    id: "ways",
    title: "Different Ways for Springer Conference Paper Publication",
    list: [
      "Springer-Sponsored International Conferences: Papers accepted through conferences indexed in Springer’s LNCS, LNEE, or AISC series.",
      "Collaborative Events with Universities: Joint conferences between Springer and academic institutions.",
      "SpringerLink Indexed Workshops: Workshops offering post-conference publication opportunities.",
    ],
    footer:
      "Receive tailored guidance to select the most suitable event based on your research domain and career goals.",
  },
  {
    id: "timeline",
    title: "Timeline for Springer Conference Paper Publication",
    timelineRows: [
      { stage: "Paper Writing and Preparation", desc: "Drafting, formatting, internal review", time: "3–5 weeks" },
      { stage: "Peer Review and Acceptance", desc: "Conference review cycles and notifications", time: "2–3 months" },
      { stage: "Camera-Ready & Indexing", desc: "Final files, production, indexing on SpringerLink/Scopus", time: "3–6 months" },
    ],
    footer:
      "Our services help manage each stage to ensure you never miss a deadline.",
  },
  {
    id: "expertise",
    title: "Our Institute’s Expertise in Springer Conference Paper Publication",
    list: [
      "Topic shortlisting and gap analysis aligned with Springer’s scope.",
      "Full technical writing support and plagiarism removal.",
      "Template formatting and Springer reference style adherence.",
      "Reviewer response drafting and camera-ready preparation.",
      "Submission support for international Springer events.",
      "Guidance for conference presentation and certificate procurement.",
      "Experience with Springer conferences like ICMLC, ICCT, ICCC, and ICACI.",
    ],
    footer:
      "We ensure your research gains visibility and meets Springer’s international publishing norms.",
  },
  {
    id: "faqs",
    title: "FAQs on Springer Conference Paper Publication Services in Mumbai",
    faqs: [
      {
        q: "What is the benefit of publishing in a Springer conference?",
        a: "Springer publications are globally indexed, peer-reviewed, and accessible through SpringerLink—enhancing academic recognition and citation potential.",
      },
      {
        q: "Can students publish in Springer conferences?",
        a: "Yes. Undergraduate, postgraduate, and PhD scholars can publish with guided support.",
      },
      {
        q: "How long does Springer publication take?",
        a: "Typically 3–6 months, depending on review cycles and conference schedules.",
      },
      {
        q: "What fields does Springer cover?",
        a: "Engineering, computer science, management, social science, medical research, and interdisciplinary studies.",
      },
      {
        q: "Are Springer publications Scopus or Web of Science indexed?",
        a: "Most Springer conference papers are indexed in Scopus and Web of Science.",
      },
      {
        q: "Can I extend a Springer conference paper into a journal paper?",
        a: "Yes. Many scholars extend their Springer conference papers into Springer or SCI-indexed journals later.",
      },
      {
        q: "Does Narpavi provide end-to-end publication support?",
        a: "Yes. Writing, editing, submission, and post-acceptance processes are covered.",
      },
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content:
      "Publishing with Springer is a milestone achievement for any scholar. With Springer Conference Paper Publication Services in Mumbai, you gain structured guidance, technical precision, and complete compliance with Springer’s international publishing norms. Whether you are submitting to Springer LNCS, LNEE, or AISC series, our expertise ensures your paper stands out and earns its rightful place in global academic literature.",
  },
];

const tocItems = [
  { id: "intro", label: "Introduction" },
  { id: "understanding", label: "Understanding" },
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

export default function SpringerConferencePublication() {
  const tocRef = useRef(null);
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const headings = document.querySelectorAll(".scp-section-title");
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
    <div className="scp-layout">
      {/* Left sticky TOC */}
      <aside className="scp-aside scp-aside--left fade-in-left" aria-label="On this page">
        <div className="scp-sidebar-header">
          <h2 className="scp-sidebar-title">On this page</h2>
          <span className="scp-section-count">{tocItems.length} sections</span>
        </div>
        <nav ref={tocRef} className="scp-toc" aria-label="Section navigation">
          <ul className="scp-toc-list" role="list">
            {tocItems.map((t) => (
              <li key={t.id} className="scp-toc-item">
                <a
                  href={`#h-${t.id}`}
                  onClick={(e) => smoothScroll(e, t.id)}
                  className={`scp-toc-link ${active === t.id ? "is-active" : ""}`}
                  aria-current={active === t.id ? "true" : "false"}
                >
                  <span className="scp-toc-text">{t.label}</span>
                  <span className="scp-toc-indicator" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="scp-main fade-in" id="main-content">
        <article className="scp-container">
          <header className="scp-header">
            <h1 className="scp-title">Springer Conference Paper Publication Services in Mumbai</h1>
            <p className="scp-lead">
              Publishing a conference paper with Springer showcases your research globally with visibility in SpringerLink, Scopus, and Web of Science.
            </p>
          </header>

          {sections.map((s) => (
            <section key={s.id} id={`section-${s.id}`} className="scp-section fade-in-slide" aria-labelledby={`h-${s.id}`}>
              <h2 id={`h-${s.id}`} className="scp-section-title">
                {s.title}
              </h2>

              {s.content && s.content.split("\n\n").map((p, i) => (
                <p key={i} className="scp-paragraph">{p}</p>
              ))}

              {s.list && (
                <ul className="scp-ul">
                  {s.list.map((item, i) => (
                    <li key={i} className="scp-li">{item}</li>
                  ))}
                </ul>
              )}

              {s.numberedList && (
                <ol className="scp-ol">
                  {s.numberedList.map((item, i) => (
                    <li key={i} className="scp-li">{item}</li>
                  ))}
                </ol>
              )}

              {s.faqs && (
                <div className="scp-faqs-grid">
                  {s.faqs.map((f, i) => (
                    <details key={i} className="scp-faq">
                      <summary className="scp-faq-q">{f.q}</summary>
                      <div className="scp-faq-a"><p className="scp-paragraph">{f.a}</p></div>
                    </details>
                  ))}
                </div>
              )}

              {s.timelineRows && (
                <>
                  <p id="timeline-summary" className="sr-only">Springer conference timeline stages with durations.</p>
                  <div className="scp-table-wrapper">
                    <table className="scp-table" role="table" aria-describedby="timeline-summary">
                      <caption className="sr-only">Springer conference paper publication timeline</caption>
                      <thead>
                        <tr>
                          <th className="scp-th" scope="col">Stage</th>
                          <th className="scp-th" scope="col">Description</th>
                          <th className="scp-th" scope="col">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {s.timelineRows.map((row, idx) => (
                          <tr key={idx}>
                            <td className="scp-td scp-td--stage">{row.stage}</td>
                            <td className="scp-td scp-td--desc">{row.desc}</td>
                            <td className="scp-td scp-td--time">{row.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {s.footer && <p className="scp-paragraph scp-footer">{s.footer}</p>}
            </section>
          ))}
        </article>
      </main>

      {/* Right sticky SEO / Quick info */}
      <aside className="scp-aside scp-aside--right float-in-right" aria-label="Quick info">
        <div className="scp-card scp-card--primary">
          <div className="scp-card-header">
            <h3 className="scp-card-title">Springer Highlights</h3>
            <span className="scp-card-badge">Featured</span>
          </div>
          <ul className="scp-card-list">
            <li className="scp-card-item">📚 LNCS, LNEE, AISC Templates</li>
            <li className="scp-card-item">🔎 Plagiarism & Language QA</li>
            <li className="scp-card-item">🛠 Reviewer Response Support</li>
            <li className="scp-card-item">🧭 Conference Shortlisting</li>
            <li className="scp-card-item">✅ Camera-Ready Prep</li>
          </ul>
          <div className="scp-card-footer">
            <button className="scp-cta-button" aria-label="Start Springer support">Get Started</button>
          </div>
        </div>

        <div className="scp-card scp-card--secondary">
          <h4 className="scp-card-title">Quick Navigation</h4>
          <ul className="scp-card-list scp-quick-links">
            {[
              { href: "#h-steps", text: "Publication Steps" },
              { href: "#h-best-practices", text: "Best Practices" },
              { href: "#h-dos-donts", text: "Dos & Don’ts" },
              { href: "#h-timeline", text: "Timelines" },
              { href: "#h-faqs", text: "FAQs" },
            ].map((l, i) => (
              <li key={i} className="scp-card-item">
                <a
                  href={l.href}
                  className="scp-quick-link"
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

        <div className="scp-card scp-card--stats">
          <h4 className="scp-card-title">Our Impact</h4>
          <div className="scp-stats-grid">
            <div className="scp-stat-item">
              <span className="scp-stat-number">200+</span>
              <span className="scp-stat-label">Springer Papers</span>
            </div>
            <div className="scp-stat-item">
              <span className="scp-stat-number">93%</span>
              <span className="scp-stat-label">Acceptance Rate</span>
            </div>
            <div className="scp-stat-item">
              <span className="scp-stat-number">35+</span>
              <span className="scp-stat-label">Series Supported</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

