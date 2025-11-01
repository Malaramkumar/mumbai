import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the admission process for PhD at IIPS Mumbai?",
    answer: "The process includes a CBT with 75 MCQs, followed by proposal writing and interview. Negative marking of -0.25 for wrong answers."
  },
  {
    question: "What is the eligibility for IIPS PhD programs?",
    answer: "Master’s in Population Studies / Demography / Biostatistics with at least 55% (50% for reserved). Age ≤ 30 years (relaxation applicable)."
  },
  {
    question: "What are the special features of IIPS?",
    answer: "Access to NFHS raw data, UN datasets, GIS labs, and collaboration with UNFPA, World Bank, and LSTHM."
  },
  {
    question: "How much fellowship is provided?",
    answer: "GOI fellowship: ₹37,000 → ₹42,000 p.m. (for NET-qualified) + contingency of ₹10,000–₹20,500/year."
  },
  {
    question: "What are the publication requirements?",
    answer: "Two Web of Science (WoS) indexed papers are required before submission."
  }
];

const IIPSPhD = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="amity-layout">
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#admission">Admission</a></li>
          <li><a href="#facilities">Facilities</a></li>
          <li><a href="#funding">Funding</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#cta">Narpavi Advantage</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>International Institute for Population Sciences (IIPS), Mumbai – PhD Admission 2025</h1>

        <section className="info-box">
          <h2>🏛️ University Snapshot</h2>
          <div className="info-grid">
            <p><strong>Address:</strong> Govandi Station Road, Deonar, Mumbai 400088</p>
            <p><strong>Website:</strong> <a href="https://www.iipsindia.ac.in" target="_blank" rel="noreferrer">iipsindia.ac.in</a></p>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty Depth & Research Infrastructure</h2>
          <p>IIPS has over 25 core and 40 adjunct faculty and houses:</p>
          <div className="card-grid">
            <div className="card">Macro-Econometric Modelling Unit</div>
            <div className="card">Climate-Controlled Data Vaults</div>
            <div className="card">GIS Labs</div>
            <div className="card">250-node Computer Centre</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>Admission Process & Eligibility</h2>
          <div className="list-row">
            <div className="list-card">CBT (75 MCQs, 1 hr)</div>
            <div className="list-card">Proposal Writing</div>
            <div className="list-card">Interview Round</div>
          </div>
          <p><strong>Eligibility:</strong> Master's ≥ 55% in Population Studies / Demography / Biostatistics (50% for reserved). Age ≤ 30 years. Relaxations applicable.</p>
        </section>

        <section className="info-table-grid">
          <div className="info-card">
            <h3>🌐 Collaborations</h3>
            <ul>
              <li>Access to NFHS, CMIE, WDI, UN datasets</li>
              <li>MoUs: World Bank, UNFPA, LSTHM (UK)</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>📚 Library Resources</h3>
            <ul>
              <li>125k+ Population Science Volumes</li>
              <li>300+ Journals, JSTOR, EconLit, Emerald</li>
              <li>Remote access for all enrolled scholars</li>
            </ul>
          </div>
        </section>

        <section id="funding" className="funding-table">
          <h2>Funding & Fellowship</h2>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GOI Fellowship</td>
                <td>₹37,000 → ₹42,000 per month (for NET qualified)</td>
              </tr>
              <tr>
                <td>Contingency</td>
                <td>₹10,000 to ₹20,500 per year</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="info-table-grid">
          <div className="info-card">
            <h3>📄 Work & Modes</h3>
            <ul>
              <li>Work-experience preferred for environment/energy tracks</li>
              <li>Full-time: 4–6 yrs | Part-time: 5–7 yrs (weekends)</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>📝 Documents & Criteria</h3>
            <ul>
              <li>Online form, SOP (500 words)</li>
              <li>2 Academic References</li>
              <li>Proof of Math at +2 Level</li>
            </ul>
          </div>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Application Timeline – AY 2025-26</h2>
          <table>
            <thead>
              <tr><th>Stage</th><th>Month</th></tr>
            </thead>
            <tbody>
              <tr><td>Application Window</td><td>Feb – Apr</td></tr>
              <tr><td>CBT</td><td>30 June</td></tr>
              <tr><td>Interviews</td><td>June</td></tr>
              <tr><td>Offers</td><td>July</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Fee Structure</h2>
          <ul>
            <li>Application: ₹1,000</li>
            <li>Registration: ₹16,000</li>
            <li>Tuition: ₹12,000 per semester</li>
            <li>Hostel: ₹4,000 per month</li>
            <li>Thesis Fee: ₹15,000</li>
          </ul>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>Two Web of Science papers required before synopsis</li>
            <li>Mandatory 4 hours/week teaching/tutorial duty</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>🔰 Narpavi Research Institute Catalyst @ IIPS</h2>
          <ul>
            <li><strong>Quant Bootcamp:</strong> Prepares you for 75-mark CBT via timed mocks & stats revision</li>
            <li><strong>Proposal Clinic:</strong> Population & Biostat experts help frame focused proposals</li>
            <li><strong>Journal Targeting:</strong> WoS-indexed publication roadmap with mentor reviews</li>
            <li><strong>Scholarship Enablement:</strong> SOP + fellowship document support to secure GOI aid</li>
          </ul>
          <strong>🎯 With Narpavi, increase your PhD success odds by 4x at India’s top demography institute.</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – IIPS PhD Admissions</h2>
          {faqs.map((item, index) => (
            <div className={`faq-item11 ${openIndex === index ? "active" : ""}`} key={index}>
              <div className="faq-question11" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {openIndex === index && (
                <div className="faq-answer11"><p>{item.answer}</p></div>
              )}
            </div>
          ))}
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <h3>Tags</h3>
      
          <ul>
            <li>IIPS Mumbai</li>
            <li>Population Studies</li>
            <li>PhD Admission</li>
            <li>CBT Entrance</li>
            <li>Biostatistics</li>
          </ul>
      </aside>
    </div>
  );
};

export default IIPSPhD;

