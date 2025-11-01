import React, { useEffect, useRef, useState } from "react";
import "./WebSciencePaperPublication.scss";

const sections = [
  {
    id: "intro",
    title: "Web of Science Paper Publication Services in Mumbai",
    content: `Publishing a research article in a Web of Science-indexed journal is a mark of global academic recognition. Through our Web of Science paper publication services in Mumbai, Narpavi Research Institute assists research scholars and PhD students in achieving high-quality journal publications that meet international indexing standards. Whether your research belongs to engineering, management, life sciences, or social sciences, we guide you from manuscript preparation to acceptance in SCI (Science Citation Index) and SCIE (Science Citation Index Expanded) journals.`,
  },
  {
    id: "understanding",
    title: "Understanding Web of Science Publication",
    content: `A Web of Science paper publication refers to publishing your research in journals indexed in the Web of Science (WoS) database. WoS is a prestigious citation indexing platform that includes SCI, SCIE, and ESCI journals, classified by impact factor and quartiles (Q1–Q4). Publishing in WoS‑indexed journals reflects authenticity, originality, and international visibility.`,
    footer:
      "Our Mumbai services help you shortlist suitable SCI/SCIE journals, refine manuscripts, and comply with submission and review guidelines.",
  },
  {
    id: "importance",
    title: "Why It Matters in PhD Research",
    list: [
      "Enhances your thesis’ academic credibility.",
      "Boosts research visibility and citation impact.",
      "Strengthens your profile for postdoc and faculty roles.",
      "Ensures global accessibility through SCI/SCIE indexing.",
      "Meets university publication requirements for PhD completion.",
    ],
    footer:
      "Personalized guidance ensures alignment with journal scope, ethics, and quality standards.",
  },
  {
    id: "steps",
    title: "End‑to‑End Support Workflow",
    numberedList: [
      "Journal Scoping & Matchmaking – Map your topic to suitable SCI/SCIE/ESCI journals and quartiles.",
      "Manuscript Structuring – Abstract, Introduction, Literature Review, Methods, Results, Discussion, Conclusion.",
      "Formatting & Compliance – Align with journal template, aims & scope, and author guidelines.",
      "Language Editing & Technical Review – Improve clarity, rigor, and narrative flow.",
      "Ethics & Plagiarism – Authorship compliance, COI, data availability; similarity reduction to acceptable thresholds.",
      "Submission & Peer Review – Prepare submission package, cover letter, and manage communications.",
      "Revisions – Prepare detailed response to reviewers with tracked changes and point‑wise rebuttals.",
      "Acceptance, Proofs & Indexing – Handle production queries, proofs, DOI activation, and WoS indexing checks.",
    ],
    footer:
      "This workflow minimizes editorial frictions and accelerates decision cycles.",
  },
  {
    id: "best-practices",
    title: "Best Practices for WoS Success",
    list: [
      "Target journals verified on Master Journal List; confirm quartile and scope fit.",
      "Demonstrate clear novelty, robust methods, and reproducible results.",
      "Use recent, relevant references; maintain consistent citation style.",
      "Present high‑quality figures/tables with descriptive captions.",
      "Disclose ethics, data availability, and funding transparently.",
      "Write concisely with strong academic tone and logical flow.",
    ],
    footer:
      "Adhering to these greatly improves editor triage outcomes and peer‑review acceptance.",
  },
  {
    id: "dos-donts",
    title: "Dos and Don’ts",
    dos: [
      "Use the journal’s latest author guidelines and templates.",
      "Cite authoritative sources and avoid over‑citation of non‑WoS items.",
      "Register ORCID and use consistent author affiliations.",
      "Pre‑check scope with a concise pre‑submission inquiry (when allowed).",
      "Back claims with data, statistics, and sensitivity analyses.",
    ],
    donts: [
      "Don’t submit to predatory or misleading outlets.",
      "Don’t recycle text/figures without permission and citation.",
      "Don’t ignore word, figure, or reference limits.",
      "Don’t respond vaguely to reviewer comments.",
      "Don’t bypass ethical approvals or data transparency.",
    ],
    footer:
      "These guardrails protect against desk rejections and ethical breaches.",
  },
  {
    id: "mistakes",
    title: "Common Mistakes Leading to Rejection",
    list: [
      "Mismatch with journal scope or audience.",
      "Weak contribution, incremental novelty, or unclear research gap.",
      "Poor English, structure, or figure quality.",
      "Inconsistent references and formatting.",
      "Superficial responses to reviewer critiques.",
    ],
    footer:
      "Our editorial review flags and fixes issues before submission.",
  },
  {
    id: "timeline",
    title: "Typical WoS Publication Timelines",
    timelineRows: [
      { stage: "Preparation & Internal Review", desc: "Drafting, structuring, language/technical checks", time: "3–6 weeks" },
      { stage: "Peer Review Cycle", desc: "Editor screening and external reviews (1–2 rounds)", time: "2–5 months" },
      { stage: "Acceptance to Indexing", desc: "Proofs, production, DOI, WoS indexing visibility", time: "3–8 weeks" },
    ],
    footer:
      "Actual timelines vary by journal backlog, field, and revision complexity.",
  },
  {
    id: "expertise",
    title: "Our Expertise for SCI/SCIE Journals",
    list: [
      "Journal shortlisting and quartile targeting (Q1–Q4).",
      "Advanced editing: methods clarity, result coherence, and discussion strength.",
      "Visual analytics: redraw figures, statistics, and reproducibility checklists.",
      "Ethics support: authorship, COI, IRB/IEC statements, and data policies.",
      "Response‑to‑reviewers strategy and resubmission planning.",
      "Indexing verification: Master Journal List/WoS checks post‑publication.",
    ],
    footer:
      "Experience across engineering, management, life sciences, and social sciences.",
  },
  {
    id: "faqs",
    title: "FAQs on WoS Publication Services in Mumbai",
    faqs: [
      { q: "What is Web of Science (WoS)?", a: "A premier citation platform indexing SCI, SCIE, and ESCI journals with quartile ranking by impact and citations." },
      { q: "Is WoS mandatory for PhD?", a: "Many universities require at least one SCI/SCIE paper; policies vary by institution and department." },
      { q: "How to avoid predatory journals?", a: "Verify titles on Master Journal List; check publisher imprint, editorial board, and indexing claims." },
      { q: "Can you improve a rejected paper?", a: "Yes—gap analysis, rewriting, data strengthening, and guided resubmission are supported." },
      { q: "Do you support all disciplines?", a: "Yes—engineering, management, life sciences, social sciences, and interdisciplinary areas." },
      { q: "What’s a realistic timeline?", a: "Commonly 3–6 months to first decision; acceptance and indexing add several weeks more." },
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content:
      "WoS‑indexed publication validates your research globally. With our Web of Science paper publication services in Mumbai, Narpavi Research Institute supports you from journal selection and manuscript strengthening to reviewer rebuttals, acceptance, and indexing—maximizing publication quality and impact.",
  },
];

const tocItems = [
  { id: "intro", label: "Introduction" },
  { id: "understanding", label: "Understanding WoS" },
  { id: "importance", label: "PhD Importance" },
  { id: "steps", label: "Support Workflow" },
  { id: "best-practices", label: "Best Practices" },
  { id: "dos-donts", label: "Dos & Don’ts" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "timeline", label: "Timelines" },
  { id: "expertise", label: "Our Expertise" },
  { id: "faqs", label: "FAQs" },
  { id: "conclusion", label: "Conclusion" },
];

export default function WoSConferencePublication() {
  const [active, setActive] = useState("intro");
  const tocRef = useRef(null);

  useEffect(() => {
    const headings = document.querySelectorAll(".wos-section-title");
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
    <div className="wos-layout">
      {/* Left sticky TOC */}
      <aside className="wos-aside wos-aside--left fade-in-left" aria-label="On this page">
        <div className="wos-sidebar-header">
          <h2 className="wos-sidebar-title">On this page</h2>
          <span className="wos-section-count">{tocItems.length} sections</span>
        </div>
        <nav ref={tocRef} className="wos-toc" aria-label="Section navigation">
          <ul className="wos-toc-list" role="list">
            {tocItems.map((t) => (
              <li key={t.id} className="wos-toc-item">
                <a
                  href={`#h-${t.id}`}
                  onClick={(e) => smoothScroll(e, t.id)}
                  className={`wos-toc-link ${active === t.id ? "is-active" : ""}`}
                  aria-current={active === t.id ? "true" : "false"}
                >
                  <span className="wos-toc-text">{t.label}</span>
                  <span className="wos-toc-indicator" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="wos-main fade-in" id="main-content">
        <article className="wos-container">
          <header className="wos-header">
            <h1 className="wos-title">Web of Science Paper Publication Services in Mumbai</h1>
            <p className="wos-lead">
              From journal scoping to acceptance and indexing, get end‑to‑end guidance tailored for SCI/SCIE success.
            </p>
          </header>

          {sections.map((s) => (
            <section key={s.id} id={`section-${s.id}`} className="wos-section fade-in-slide" aria-labelledby={`h-${s.id}`}>
              <h2 id={`h-${s.id}`} className="wos-section-title">{s.title}</h2>

              {s.content && s.content.split("\n\n").map((p, i) => (
                <p key={i} className="wos-paragraph">{p}</p>
              ))}

              {s.list && (
                <ul className="wos-ul">
                  {s.list.map((item, i) => (
                    <li key={i} className="wos-li">{item}</li>
                  ))}
                </ul>
              )}

              {s.numberedList && (
                <ol className="wos-ol">
                  {s.numberedList.map((item, i) => (
                    <li key={i} className="wos-li">{item}</li>
                  ))}
                </ol>
              )}

              {s.timelineRows && (
                <>
                  <p id="timeline-summary" className="sr-only">Web of Science publication timeline stages with durations.</p>
                  <div className="wos-table-wrapper">
                    <table className="wos-table" role="table" aria-describedby="timeline-summary">
                      <caption className="sr-only">WoS publication timeline</caption>
                      <thead>
                        <tr>
                          <th className="wos-th" scope="col">Stage</th>
                          <th className="wos-th" scope="col">Description</th>
                          <th className="wos-th" scope="col">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {s.timelineRows.map((row, idx) => (
                          <tr key={idx}>
                            <td className="wos-td wos-td--stage">{row.stage}</td>
                            <td className="wos-td wos-td--desc">{row.desc}</td>
                            <td className="wos-td wos-td--time">{row.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {s.faqs && (
                <div className="wos-faqs-grid">
                  {s.faqs.map((f, i) => (
                    <details key={i} className="wos-faq">
                      <summary className="wos-faq-q">{f.q}</summary>
                      <div className="wos-faq-a"><p className="wos-paragraph">{f.a}</p></div>
                    </details>
                  ))}
                </div>
              )}

              {s.footer && <p className="wos-paragraph wos-footer">{s.footer}</p>}
            </section>
          ))}
        </article>
      </main>

      {/* Right sticky SEO / Quick info */}
      <aside className="wos-aside wos-aside--right float-in-right" aria-label="Quick info">
        <div className="wos-card wos-card--primary">
          <div className="wos-card-header">
            <h3 className="wos-card-title">WoS Highlights</h3>
            <span className="wos-card-badge">SCI/SCIE</span>
          </div>
          <ul className="wos-card-list">
            <li className="wos-card-item">🧭 SCI/SCIE Journal Mapping</li>
            <li className="wos-card-item">📝 Language & Technical Editing</li>
            <li className="wos-card-item">🔁 Reviewer Rebuttal Support</li>
            <li className="wos-card-item">📊 Figures, Stats, Reproducibility</li>
            <li className="wos-card-item">✅ Indexing Verification</li>
          </ul>
          <div className="wos-card-footer">
            <button className="wos-cta-button" aria-label="Start WoS support">Get Started</button>
          </div>
        </div>

        <div className="wos-card wos-card--secondary">
          <h4 className="wos-card-title">Quick Navigation</h4>
          <ul className="wos-card-list wos-quick-links">
            {[
              { href: "#h-steps", text: "Support Workflow" },
              { href: "#h-best-practices", text: "Best Practices" },
              { href: "#h-dos-donts", text: "Dos & Don’ts" },
              { href: "#h-timeline", text: "Timelines" },
              { href: "#h-faqs", text: "FAQs" },
            ].map((l, i) => (
              <li key={i} className="wos-card-item">
                <a
                  href={l.href}
                  className="wos-quick-link"
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

        <div className="wos-card wos-card--stats">
          <h4 className="wos-card-title">Our Impact</h4>
          <div className="wos-stats-grid">
            <div className="wos-stat-item">
              <span className="wos-stat-number">140+</span>
              <span className="wos-stat-label">WoS Papers</span>
            </div>
            <div className="wos-stat-item">
              <span className="wos-stat-number">86%</span>
              <span className="wos-stat-label">Acceptance Rate</span>
            </div>
            <div className="wos-stat-item">
              <span className="wos-stat-number">25+</span>
              <span className="wos-stat-label">Disciplines</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
