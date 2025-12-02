import React, { useState } from "react";
import { FiMenu, FiChevronDown, FiSearch } from "react-icons/fi";
import "./ResearchMethodology.scss";
import LeftSidebar from "../LeftSidebar";

export default function ResearchMethodologyPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "Who can avail of Research Methodology Services in Mumbai?",
      a: "PhD, M.Phil., and postgraduate students across all universities and disciplines can benefit from our support.",
    },
    {
      q: "Do you provide assistance in writing the Methodology Chapter?",
      a: "Yes. We assist in both designing and drafting the complete Methodology section as per your university’s format.",
    },
    {
      q: "Which tools do you train scholars in?",
      a: "We train in SPSS, SmartPLS, AMOS, NVivo, R, Python, and MATLAB.",
    },
    {
      q: "Can you help in revising rejected methodology chapters?",
      a: "Absolutely. Our experts reframe, validate, and strengthen rejected methodologies.",
    },
    {
      q: "Do you provide customized workshops?",
      a: "Yes, we organize one-on-one and group workshops in Mumbai for methodology design and data analysis.",
    },
    {
      q: "Is the service useful before PhD proposal submission?",
      a: "Yes, early methodology design ensures your proposal stands strong before any committee or funding body.",
    },
  ];

  const quickLinks = [
    "Overview",
    "Significance",
    "Procedure",
    "Sequence",
    "Tools & Software",
    "Do’s and Don’ts",
    "Best Practices",
    "Mistakes to Avoid",
    "Our Support",
    "FAQs",
  ];

  const seoKeywords = [
    "Research methodology services Mumbai",
    "Quantitative research methodology services Mumbai",
    "Top PhD research methodology services in Mumbai",
    "Best PhD research methodology services in Mumbai",
    "PhD guidance Mumbai",
    "PhD guidance in India",
    "Best PhD assistance in India",
    "PhD consultancy services for abroad",
    "Thesis writing services in Mumbai",
  ];

  return (
    <div className="ResearchMethodology-container">
      <div className="ResearchMethodology-grid">
        
        {/* LEFT SIDEBAR */}
        <aside className="ResearchMethodology-left">
           <a href="/home-page" class="buttonhp">Home Page</a>
            <LeftSidebar/>
            
          <div className="ResearchMethodology-links-header"> 
              
            <FiMenu className="text-xl" />
       
            <h3 className="font-semibold">Quick Links</h3>
          </div>
          <nav className="ResearchMethodology-nav">
            {quickLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                className="ResearchMethodology-link"
              >
                {l}
              </a>
            ))}
          </nav>
          
        </aside>

        {/* MAIN CONTENT */}
        <main className="ResearchMethodology-main col-span-12 md:col-span-6 bg-white rounded-2xl shadow-sm p-6 overflow-y-auto">
          <h1 className="ResearchMethodology-title text-3xl font-bold mb-2">
            Research Methodology Services in Mumbai
          </h1>
          <p className="ResearchMethodology-subtitle text-slate-600 mb-6">
            Empowering Scholars with Structured and Scientific Research Approaches
          </p>

          <section id="overview" className="ResearchMethodology-content prose max-w-none">
            <p>
              Every great research begins with a strong methodological foundation.
              <b> Narpavi Research Institute </b> provides expert-led Research Methodology Services
              in Mumbai, helping scholars build scientifically sound, ethically valid, and academically credible
              methodologies for their PhD, M.Phil., and Master’s dissertations.
            </p>

            <h2>🔍 What is Research Methodology?</h2>
            <p>
              Research methodology is the systematic framework that defines how a study is conducted —
              from data collection and sampling to analysis and interpretation.
            </p>

            <h2>🎓 Significance of Research Methodology in PhD Studies</h2>
            <p>
              A methodological blueprint validates your research outcomes through transparent procedures,
              enhances credibility, ensures replicability, and strengthens your publication prospects.
            </p>

            <h2>⚙️ Step-by-Step Procedure in Research Methodology</h2>
            <ol className="list-decimal ml-5">
              <li>Problem Identification & Objective Setting</li>
              <li>Hypothesis Formulation</li>
              <li>Design Selection</li>
              <li>Sampling Strategy</li>
              <li>Data Collection Methodology</li>
              <li>Tool Selection & Validation</li>
              <li>Data Analysis</li>
              <li>Interpretation & Inference</li>
              <li>Documentation & Reporting</li>
            </ol>

            <h2>📈 Sequence of Activities in a Strong Methodology Design</h2>
            <table className="ResearchMethodology-table border w-full text-sm">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Activity</th>
                  <th>Expected Output</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Stage 1</td><td>Topic Finalization</td><td>Clear research gap & objectives</td></tr>
                <tr><td>Stage 2</td><td>Literature Review</td><td>Conceptual framework</td></tr>
                <tr><td>Stage 3</td><td>Design & Methodology</td><td>Data collection plan</td></tr>
                <tr><td>Stage 4</td><td>Tool Development</td><td>Validated questionnaires/scales</td></tr>
                <tr><td>Stage 5</td><td>Sampling & Data Collection</td><td>Raw data readiness</td></tr>
                <tr><td>Stage 6</td><td>Analysis</td><td>Statistical results</td></tr>
                <tr><td>Stage 7</td><td>Interpretation</td><td>Research insights</td></tr>
                <tr><td>Stage 8</td><td>Conclusion</td><td>Methodology validation</td></tr>
              </tbody>
            </table>

            <h2>❓ FAQs</h2>
            <div className="ResearchMethodology-faq">
              {faqs.map((f, i) => (
                <div key={i} className="ResearchMethodology-faq-item border rounded-md mb-2">
                  <button
                    className="ResearchMethodology-faq-question w-full p-3 flex justify-between items-center"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span className="font-medium">{f.q}</span>
                    <FiChevronDown
                      className={`transition-transform ${
                        activeFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeFaq === i && (
                    <div className="ResearchMethodology-faq-answer p-3 bg-slate-50 text-sm">{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="ResearchMethodology-right col-span-12 md:col-span-3 bg-white rounded-2xl shadow-sm p-4">
          <h4 className="font-semibold mb-2">SEO Keywords</h4>
          <ul className="ResearchMethodology-keywords flex flex-col gap-2 text-sm">
            {seoKeywords.map((k) => (
              <li key={k} className="px-3 py-2 border rounded-md hover:bg-slate-50">{k}</li>
            ))}
          </ul>
          
        </aside>
      </div>
    </div>
  );
}
