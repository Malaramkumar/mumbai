import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";   //  npm i lucide-react
import "./PhdTopicSelectionMumbai.scss";                          //  ← import the shared SCSS

/* ——— side‑bar keywords (left + right) ——— */
const KEYWORDS = [
  "phd topic selection support in Mumbai",
  "best phd topic services mumbai",
  "PhD thesis support",
  "research gap analysis",
  "journal mapping Scopus",
  "feasibility study PhD",
];

/* ——— FAQ content ——— */
const FAQS = [
  {
    q: "How do you ensure the topic is accepted by Mumbai universities?",
    a: "We align strictly with university‑specific guidelines and faculty research preferences.",
  },
  {
    q: "Will the topic be suitable for publication later?",
    a: "Yes. We map topics to journals indexed in Scopus, IEEE, or UGC‑CARE during selection.",
  },
  {
    q: "What if my guide wants a topic change?",
    a: "One free revision is included within 10 days of delivery.",
  },
  {
    q: "Can you handle urgent requests?",
    a: "Absolutely—express delivery in 2‑3 working days is available.",
  },
  {
    q: "Are part‑time PhD aspirants eligible?",
    a: "Yes. We check feasibility against your time and work constraints.",
  },
  {
    q: "Do you also help with proposal writing?",
    a: "Yes. Topic selection can be bundled with our full proposal package.",
  },
];

/* ——— page component ——— */
export default function PhdTopicSelectionMumbai() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen((p) => (p === i ? null : i));

  return (
    <div className="consulting-wrapper">
      {/* — LEFT KEYWORD SIDEBAR — */}
      <aside className="left-links">
        <h3>📌 Keywords</h3>
        <ul>{KEYWORDS.map((k) => <li key={k}>{k}</li>)}</ul>
      </aside>

      {/* — MAIN CONTENT — */}
      <main className="main-content">
        <h1>🎓 PhD Topic Selection Support in Mumbai</h1>
        <h2>
          Expert guidance to choose the right research topic aligned with Mumbai’s
          top universities
        </h2>

        {/* INTRO */}
        <section>
          <h3>🎓 Introduction</h3>
          <p>
            Mumbai hosts prestigious institutions—University of Mumbai, IIT Bombay,
            TISS, NMIMS, and more. In this competitive ecosystem, selecting the
            right PhD topic demands precision, novelty, and strategic insight.
          </p>
          <p>
            Narpavi Research Institute’s <strong>PhD Topic Selection Support</strong>
            guides scholars through every step, ensuring alignment with university
            norms, research trends, and global publication standards.
          </p>
        </section>

        {/* WHY IT MATTERS */}
        <section>
          <h3>🔍 Why Topic Selection Matters</h3>
          <ul>
            <li>✅ Novel and researchable</li>
            <li>✅ Aligned with faculty interests & ongoing projects</li>
            <li>✅ Fits Scopus / UGC‑CARE journal scopes</li>
            <li>✅ Feasible for timelines & resources</li>
          </ul>
          <p>
            Overlooking feasibility or journal alignment can trigger costly delays
            or outright rejection. Our focus is strategic selection plus publication
            viability.
          </p>
        </section>

        {/* OUR PROCESS (timeline style table) */}
        <section className="process-section">
          <h3>✅ How Our Topic Selection Service Works</h3>
          <div className="table">
            {[
              ["1. Profile Assessment", "We analyse your background & university norms"],
              ["2. Literature & Trend Review", "Scanning Scopus / IEEE for emerging areas"],
              ["3. Novelty Check", "Ensuring uniqueness & zero duplication"],
              ["4. Feasibility Evaluation", "Resource + timeline practicality"],
              ["5. Journal Mapping", "Aligning with Scopus / UGC‑CARE scopes"],
              ["6. Expert Review", "Mumbai‑based academics validate short‑list"],
              ["7. Final Pack", "Abstracts, objectives, keywords for your proposal"],
            ].map(([step, desc]) => (
              <div className="row" key={step}>
                <div>{step}</div>
                <div>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* DELIVERABLES */}
        <section>
          <h3>📌 What You Receive</h3>
          <ul>
            <li><strong>3–5 custom topic options</strong> with novelty & feasibility check</li>
            <li><strong>250–300 word abstracts</strong> formatted to Mumbai university templates</li>
            <li><strong>Keyword sets</strong> for thesis & publication</li>
            <li><strong>Research‑gap analysis</strong> highlighting contribution</li>
            <li><strong>Suggested journals</strong> (Scopus, UGC‑CARE)</li>
            <li><strong>Feasibility report</strong> on resources & time</li>
          </ul>
        </section>

        {/* DOMAINS TABLE (striped card) */}
        <section className="table-section">
          <h3>🎯 Domains We Serve in Mumbai</h3>
          <div className="table">
            <div className="row head">
              <div>Discipline</div><div>Specialisations</div>
            </div>
            {[
              ["Engineering", "AI, IoT, Civil, Mechanical, Robotics"],
              ["Management", "Finance, HR, Marketing, Operations"],
              ["Education", "ICT, Educational Psychology"],
              ["Life Sciences", "Biotech, Microbiology, Pharma"],
              ["Social Sciences", "Sociology, Gender, Urban Policy"],
              ["Commerce & Law", "Taxation, Corporate Law, IPR"],
            ].map(([d, s]) => (
              <div className="row" key={d}><div>{d}</div><div>{s}</div></div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section>
          <h3>📈 Why Choose Narpavi?</h3>
          <ul>
            <li>✔ Deep knowledge of Mumbai‑university formats & ethics</li>
            <li>✔ Track record across IIT Bombay, NMIMS, TISS</li>
            <li>✔ Multilingual (English, Marathi, bilingual)</li>
            <li>✔ Optional proposal & guide‑coordination bundles</li>
            <li>✔ Fast‑track delivery (2–3 days)</li>
          </ul>
        </section>

        {/* FAQ ACCORDION */}
        <section className="faq-section11">
          <h3 className="faq-title11">❓ FAQs – Topic Selection Support</h3>
          {FAQS.map(({ q, a }, i) => (
            <div
              className={`faq-item11 ${open === i ? "active" : ""}`}
              key={i}
            >
              <div className="faq-question11" onClick={() => toggle(i)}>
                {q}
                {open === i ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
              </div>
              {open === i && <div className="faq-answer11">{a}</div>}
            </div>
          ))}
        </section>
      </main>

      {/* — RIGHT KEYWORD SIDEBAR (same list) — */}
      <aside className="right-keywords">
        <h3>📌 Keywords</h3>
        <ul>{KEYWORDS.map((k) => <li key={k}>{k}</li>)}</ul>
      </aside>
    </div>
  );
}

