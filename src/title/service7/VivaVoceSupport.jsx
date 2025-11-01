import React, { useEffect, useRef, useState } from "react";
import "./VivaVoceSupport.scss";

const sections = [
  {
    id: "intro",
    title: "Viva Voce Support in Mumbai",
    content: `The final stage of any PhD or postgraduate research journey is the viva voce — an oral examination that determines the scholar’s understanding, originality, and confidence in defending their thesis. Through Viva Voce Support in Mumbai by Narpavi Research Institute, scholars receive professional, end-to-end guidance to prepare for their thesis defense with clarity, precision, and confidence.

Our expert mentors help you anticipate examiner questions, refine your presentation, and strengthen your research defense skills. With our Viva Voce Support in Mumbai, students can confidently face university panels and successfully defend their PhD, M.Phil., or Master’s research work.`,
  },
  {
    id: "understanding",
    title: "Understanding What Viva Voce Means",
    content: `A viva voce (Latin for “by live voice”) is an oral examination conducted after thesis submission. It allows examiners to assess the scholar’s knowledge, originality, methodology, and ability to justify their findings.

Our Viva Voce Support in Mumbai trains scholars in articulating their research confidently, clarifying doubts, and presenting their work professionally in front of internal and external examiners.`,
  },
  {
    id: "significance",
    title: "Significance of Viva Voce in Research",
    list: [
      "Understands the depth and scope of their research area.",
      "Can defend the methodology and results confidently.",
      "Demonstrates academic maturity and originality.",
      "Has a clear understanding of contribution to existing knowledge.",
    ],
    footer:
      "We empower scholars to handle this crucial stage with preparation, clarity, and composure.",
  },
  {
    id: "structure",
    title: "Typical Viva Voce Structure",
    list: [
      "Opening Presentation – A 10–15 minute PowerPoint overview of research.",
      "Question & Answer Session – Problem statement, methodology, results, findings.",
      "Clarifications and Discussions – Justification of approach, interpretation, originality.",
      "Feedback and Recommendations – Improvements or corrections suggested.",
      "Final Decision – Approval, revision, or resubmission.",
    ],
    footer:
      "Training, mock sessions, and constructive feedback ensure excellent performance.",
  },
  {
    id: "preparation-stages",
    title: "Key Stages in Viva Voce Preparation",
    numberedList: [
      "Understanding the Thesis – Reviewing each chapter in detail.",
      "Identifying Key Questions – Predicting examiner questions from your content.",
      "Developing Clear Explanations – Short, confident answers to complex queries.",
      "Preparing Presentation Slides – Concise, visual highlights of objectives, results, implications.",
      "Mock Viva Sessions – Simulated exams with subject experts.",
      "Handling Anxiety & Time Management – Composure and confident communication.",
    ],
    footer:
      "Our structured pathway prepares scholars for both technical and non‑technical questions.",
  },
  {
    id: "common-questions",
    title: "Common Questions Asked During Viva Voce",
    list: [
      "What motivated you to choose this research topic?",
      "What gap did your research address?",
      "How is your work different from previous studies?",
      "Why did you choose this particular methodology?",
      "What challenges did you face during your research?",
      "What are your key findings and contributions?",
      "How can your research be applied in real‑world scenarios?",
    ],
    footer:
      "We help craft precise, academically strong, and evidence‑backed responses.",
  },
  {
    id: "dos-donts",
    title: "Dos and Don’ts During Viva Voce",
    dos: [
      "Remain calm, polite, and confident.",
      "Listen carefully before answering.",
      "Use academic terms and avoid slang.",
      "Support every claim with evidence or reference.",
      "Be honest if unsure about a question.",
      "Carry a summarized thesis and key data visuals.",
    ],
    donts: [
      "Don’t argue with examiners or sound defensive.",
      "Don’t memorize answers — focus on understanding.",
      "Don’t ignore contributions of other researchers.",
      "Don’t rush through answers.",
      "Don’t rely on filler words like “umm” or “you know”.",
    ],
    footer:
      "Master professional etiquette and the right communication approach for success.",
  },
  {
    id: "remember",
    title: "Things to Remember for a Successful Viva",
    list: [
      "Review the thesis thoroughly — know every figure, table, and result.",
      "Revisit literature to stay updated on recent publications.",
      "Prepare for cross‑disciplinary questions.",
      "Anticipate methodological critiques and prepare justifications.",
      "Rehearse your presentation multiple times.",
      "Stay composed and maintain a professional tone.",
    ],
    footer:
      "Checklists and one‑on‑one guidance help scholars achieve precision and confidence.",
  },
  {
    id: "best-practices",
    title: "Best Practices for Viva Voce Success",
    list: [
      "Prepare summary sheets of each chapter.",
      "Highlight novel contributions and significance.",
      "Keep answers short, structured, and confident.",
      "Back statements with data and citations.",
      "Maintain eye contact and positive body language.",
      "Practice with mock sessions for fluency and timing.",
    ],
    footer:
      "These practices elevate examiner impressions and overall performance.",
  },
  {
    id: "mistakes",
    title: "Common Mistakes During Viva",
    list: [
      "Over‑reliance on memorized answers.",
      "Inability to explain figures, graphs, or tables.",
      "Vague or overgeneralized responses.",
      "Lack of clarity in methodology or statistics.",
      "Becoming defensive when challenged.",
      "Poor presentation structure or unclear slides.",
    ],
    footer:
      "Professional coaching and rehearsal sessions help avoid these pitfalls.",
  },
  {
    id: "support",
    title: "Our Support in Viva Voce Preparation",
    list: [
      "Personalized one‑on‑one support.",
      "Inputs for PowerPoint presentation design aligned with university expectations.",
      "Q&A preparation support.",
      "Guidance for post‑viva revisions and report corrections.",
      "Readiness for national/international universities and conference defenses (IEEE, Springer, Elsevier, Scopus).",
    ],
    footer:
      "Receive holistic readiness across content, delivery, and etiquette.",
  },
  {
    id: "timeline",
    title: "Recommended Preparation Timeline",
    timelineRows: [
      { stage: "Week 1", desc: "Thesis review, gap scan, summary sheets, slide outline", time: "3–5 days" },
      { stage: "Week 2", desc: "Mock viva #1, Q&A bank, slide finalization", time: "3–4 days" },
      { stage: "Week 3", desc: "Mock viva #2, anxiety/time management drills, polishing", time: "3–4 days" },
    ],
    footer:
      "Actual timelines vary by thesis complexity and university expectations.",
  },
  {
    id: "faqs",
    title: "FAQs on Viva Voce Support in Mumbai",
    faqs: [
      { q: "What is included in the support?", a: "Thesis review, Q&A prep, presentation design, mock sessions, and confidence training." },
      { q: "Who can use this service?", a: "PhD, M.Phil., and postgraduate scholars across domains." },
      { q: "Do you conduct mock sessions?", a: "Yes, multiple mock sessions simulating real exam conditions." },
      { q: "How long does preparation take?", a: "Typically 1–3 weeks depending on thesis complexity and availability." },
      { q: "Do you help with online viva sessions?", a: "Yes, including platform checks, tech rehearsals, and delivery tweaks." },
      { q: "Can you help with slides?", a: "Absolutely, structured and visually engaging slides that summarize research effectively." },
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content:
      "Facing a viva voce can be daunting, but with the right preparation and expert guidance, success becomes certain. With Narpavi Research Institute’s Viva Voce Support in Mumbai, scholars can confidently defend their research before any review committee. Our comprehensive preparation process—from mock sessions to presentation refinement—ensures performance with confidence, precision, and professionalism.",
  },
];

const tocItems = [
  { id: "intro", label: "Introduction" },
  { id: "understanding", label: "What is Viva" },
  { id: "significance", label: "Significance" },
  { id: "structure", label: "Viva Structure" },
  { id: "preparation-stages", label: "Prep Stages" },
  { id: "common-questions", label: "Common Questions" },
  { id: "dos-donts", label: "Dos & Don’ts" },
  { id: "remember", label: "Things to Remember" },
  { id: "best-practices", label: "Best Practices" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "support", label: "Our Support" },
  { id: "timeline", label: "Timeline" },
  { id: "faqs", label: "FAQs" },
  { id: "conclusion", label: "Conclusion" },
];

export default function VivaVoceSupport() {
  const [active, setActive] = useState("intro");
  const tocRef = useRef(null);

  useEffect(() => {
    const headings = document.querySelectorAll(".vvs-section-title");
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
    <div className="vvs-layout">
      {/* Left sticky TOC */}
      <aside className="vvs-aside vvs-aside--left fade-in-left" aria-label="On this page">
        <div className="vvs-sidebar-header">
          <h2 className="vvs-sidebar-title">On this page</h2>
          <span className="vvs-section-count">{tocItems.length} sections</span>
        </div>
        <nav ref={tocRef} className="vvs-toc" aria-label="Section navigation">
          <ul className="vvs-toc-list" role="list">
            {tocItems.map((t) => (
              <li key={t.id} className="vvs-toc-item">
                <a
                  href={`#h-${t.id}`}
                  onClick={(e) => smoothScroll(e, t.id)}
                  className={`vvs-toc-link ${active === t.id ? "is-active" : ""}`}
                  aria-current={active === t.id ? "true" : "false"}
                >
                  <span className="vvs-toc-text">{t.label}</span>
                  <span className="vvs-toc-indicator" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="vvs-main fade-in" id="main-content">
        <article className="vvs-container">
          <header className="vvs-header">
            <h1 className="vvs-title">Viva Voce Support in Mumbai</h1>
            <p className="vvs-lead">
              End‑to‑end coaching for structured defense: presentation, Q&A mastery, mock vivas, and confident delivery.
            </p>
          </header>

          {sections.map((s) => (
            <section key={s.id} id={`section-${s.id}`} className="vvs-section fade-in-slide" aria-labelledby={`h-${s.id}`}>
              <h2 id={`h-${s.id}`} className="vvs-section-title">{s.title}</h2>

              {s.content && s.content.split("\n\n").map((p, i) => (
                <p key={i} className="vvs-paragraph">{p}</p>
              ))}

              {s.list && (
                <ul className="vvs-ul">
                  {s.list.map((item, i) => (
                    <li key={i} className="vvs-li">{item}</li>
                  ))}
                </ul>
              )}

              {s.numberedList && (
                <ol className="vvs-ol">
                  {s.numberedList.map((item, i) => (
                    <li key={i} className="vvs-li">{item}</li>
                  ))}
                </ol>
              )}

              {s.timelineRows && (
                <>
                  <p id="timeline-summary" className="sr-only">Viva preparation timeline stages with durations.</p>
                  <div className="vvs-table-wrapper">
                    <table className="vvs-table" role="table" aria-describedby="timeline-summary">
                      <caption className="sr-only">Viva voce preparation timeline</caption>
                      <thead>
                        <tr>
                          <th className="vvs-th" scope="col">Stage</th>
                          <th className="vvs-th" scope="col">Description</th>
                          <th className="vvs-th" scope="col">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {s.timelineRows.map((row, idx) => (
                          <tr key={idx}>
                            <td className="vvs-td vvs-td--stage">{row.stage}</td>
                            <td className="vvs-td vvs-td--desc">{row.desc}</td>
                            <td className="vvs-td vvs-td--time">{row.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {s.faqs && (
                <div className="vvs-faqs-grid">
                  {s.faqs.map((f, i) => (
                    <details key={i} className="vvs-faq">
                      <summary className="vvs-faq-q">{f.q}</summary>
                      <div className="vvs-faq-a"><p className="vvs-paragraph">{f.a}</p></div>
                    </details>
                  ))}
                </div>
              )}

              {s.footer && <p className="vvs-paragraph vvs-footer">{s.footer}</p>}
            </section>
          ))}
        </article>
      </main>

      {/* Right sticky SEO / Quick info */}
      <aside className="vvs-aside vvs-aside--right float-in-right" aria-label="Quick info">
        <div className="vvs-card vvs-card--primary">
          <div className="vvs-card-header">
            <h3 className="vvs-card-title">Viva Highlights</h3>
            <span className="vvs-card-badge">Premium</span>
          </div>
          <ul className="vvs-card-list">
            <li className="vvs-card-item">🧭 Thesis Deep‑Dive & Q‑Bank</li>
            <li className="vvs-card-item">🗂 Slide Design Inputs</li>
            <li className="vvs-card-item">🎤 Mock Viva Sessions</li>
            <li className="vvs-card-item">🧠 Anxiety & Time Coaching</li>
            <li className="vvs-card-item">✅ Post‑Viva Revision Support</li>
          </ul>
          <div className="vvs-card-footer">
            <button className="vvs-cta-button" aria-label="Start viva support">Get Started</button>
          </div>
        </div>

        <div className="vvs-card vvs-card--secondary">
          <h4 className="vvs-card-title">Quick Navigation</h4>
          <ul className="vvs-card-list vvs-quick-links">
            {[
              { href: "#h-preparation-stages", text: "Prep Stages" },
              { href: "#h-common-questions", text: "Common Questions" },
              { href: "#h-dos-donts", text: "Dos & Don’ts" },
              { href: "#h-timeline", text: "Timeline" },
              { href: "#h-faqs", text: "FAQs" },
            ].map((l, i) => (
              <li key={i} className="vvs-card-item">
                <a
                  href={l.href}
                  className="vvs-quick-link"
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

        <div className="vvs-card vvs-card--stats">
          <h4 className="vvs-card-title">Our Impact</h4>
          <div className="vvs-stats-grid">
            <div className="vvs-stat-item">
              <span className="vvs-stat-number">300+</span>
              <span className="vvs-stat-label">Vivas Trained</span>
            </div>
            <div className="vvs-stat-item">
              <span className="vvs-stat-number">95%</span>
              <span className="vvs-stat-label">Success Rate</span>
            </div>
            <div className="vvs-stat-item">
              <span className="vvs-stat-number">50+</span>
              <span className="vvs-stat-label">Universities</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

