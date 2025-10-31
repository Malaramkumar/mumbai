import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";   //  npm i lucide-react
import "./PhdGuideSelectionMumbai.scss";

/* ───── DATA ───── */
const KEYWORDS = [
  "phd guide selection in Mumbai",
  "phd guide selection in mumbai pdf",
  "phd guide selection in mumbai fees",
  "phd guide selection in mumbai 2022",
  "best phd guide selection in mumbai",
  "online phd guide selection in mumbai",
  "PhD Guide eligibility",
  "PhD guidance review",
  "Mumbai University phd guide List",
];

const FAQS = [
  { question: "Do you contact the guide directly?",
    answer: "No, we only evaluate and suggest. You initiate contact." },
  { question: "What should I send for this service?",
    answer: "Your tentative topic and the official guide list." },
  { question: "Turnaround time for review?",
    answer: "3–5 working days." },
  { question: "Will the guide support my thesis or journals?",
    answer: "We recommend guides likely to support, but involvement depends on them." },
  { question: "Can I get help if I want to change guides later?",
    answer: "Yes, we can re‑evaluate the remaining guide list." },
];

/* ───── COMPONENT ───── */
const PhdGuideSelectionMumbai = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (idx) => setOpenIndex((p) => (p === idx ? null : idx));

  return (
    <div className="PhdGuideSelectionMumbai">
      <div className="phd-guide-wrapper">
        {/* LEFT SIDEBAR */}
        <aside className="left-side">
          <h3>📢 Keywords</h3>
          <ul>{KEYWORDS.map((k) => <li key={k}>{k}</li>)}</ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="content">
          <h1>🎓 We Refer Guide for PhD in Mumbai</h1>
          <h2>Expert Evaluation of Potential Supervisors from Your University Guide List</h2>

          <section>
            <h3>🎓 What We Offer</h3>
            <p>At Narpavi Research Institute, we bring 12+ years of expertise helping
               PhD scholars across India, especially in Mumbai, select suitable guides.
               Our “We refer guide for PhD” service ensures that you choose the most
               academically aligned and professionally engaged supervisor from the approved
               university list.</p>
          </section>
    
          <section>
            <h3>📌 The Importance of Choosing the Right PhD Guide</h3>
            <ul>
              <li>🎯 Influences research direction and proposal strength</li>
              <li>⏳ Affects duration and workflow of your PhD</li>
              <li>📝 Impacts journal publishing and thesis quality</li>
              <li>✅ Improves confidence during evaluations and viva</li>
            </ul>
          </section>

          <section>
            <h3>🔍 How to Find the Right PhD Guide</h3>
            <ul>
              <li><strong>Match Domain Relevance:</strong> Guide’s past research must align with your topic.</li>
              <li><strong>Evaluate Publications & Citations:</strong> We check Scopus‑indexed work and recent publications.</li>
              <li><strong>Review Prior Supervision:</strong> Experience with past scholars is crucial.</li>
              <li><strong>Gauge Responsiveness:</strong> Signs of active academic engagement via email/seminars.</li>
              <li><strong>Assess Methodological Fit:</strong> Qualitative, Quantitative, or Mixed methods expertise.</li>
            </ul>
          </section>

          {/* KEY FACTORS – blue striped card */}
          <section className="factors">
            <h3>✅ Key Factors to Consider</h3>
            <div className="table factors-table">
              <div className="row head">
                <div>Selection Factor</div><div>Why It Matters</div>
              </div>
              <div className="row"><div>Subject Alignment</div><div>Ensures topic‑domain compatibility</div></div>
              <div className="row"><div>Publication Profile</div><div>Active publishing indicates academic engagement</div></div>
              <div className="row"><div>Prior Mentorship</div><div>Experienced guides handle challenges better</div></div>
              <div className="row"><div>Communication Style</div><div>Approachability affects collaboration</div></div>
              <div className="row"><div>University Role</div><div>Heavy admin roles may reduce availability</div></div>
              <div className="row"><div>Research Methodology</div><div>Guide must support your research approach</div></div>
            </div>
          </section>

          <section>
            <h3>🌟 How the Right Guide Makes Research Seamless</h3>
            <ul>
              <li>🧭 Research Direction: Sharpens your proposal</li>
              <li>📊 Methodology Clarity: Aligns tools and techniques</li>
              <li>📝 Journal Publishing: Boosts output and reputation</li>
              <li>⏳ Fewer Delays: Timely thesis submission & feedback</li>
              <li>🗂️ Structured Mentoring: Better reviews and defenses</li>
            </ul>
          </section>

          {/* OUR PROCESS – timeline style */}
          <section className="process">
            <h3>💼 Our Process – How We Support You</h3>
            <div className="table process-table">
              <div className="row"><div>   Guide List Submission</div><div>You provide your approved list</div></div>
              <div className="row"><div>   Topic Review</div><div>We review your proposed research area</div></div>
              <div className="row"><div>   Guide Profile Evaluation</div><div>We analyze experience, publications, and relevance</div></div>
              <div className="row"><div>   Recommendations</div><div>You receive 2–3 best‑fit suggestions with reasons</div></div>
              <div className="row"><div>   Final Consent</div><div>You approach and finalize with your preferred guide</div></div>
            </div>
          </section>

          {/* FAQ ACCORDION */}
          <section id="faqs" className="faq-section">
            <h3 className="faq-title">❓ FAQs – We Refer Guide for PhD in Mumbai</h3>
            <ol>
              {FAQS.map(({ question, answer }, idx) => (
                <li key={idx} className={openIndex === idx ? "active" : ""}>
                  <button className="faq-question" onClick={() => toggleFAQ(idx)}>
                    {question}
                    {openIndex === idx ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
                  </button>
                  {openIndex === idx && (
                    <div className="faq-answer"><p>{answer}</p></div>
                  )}
                </li>
              ))}
            </ol>
          </section>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="right-side">
          <h3>📢 Keywords</h3>
          <ul>{KEYWORDS.map((k) => <li key={k}>{k}</li>)}</ul>
        </aside>
      </div>
    </div>
  );
};

export default PhdGuideSelectionMumbai;
