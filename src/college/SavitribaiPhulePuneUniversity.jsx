import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do all departments at SPPU offer PhD?",
    answer: "Yes, SPPU offers PhD across most disciplines via its departments and affiliated research centers."
  },
  {
    question: "Is PET compulsory?",
    answer: "PET is required unless you are exempt through NET, JRF, GATE, or SET qualifications."
  },
  {
    question: "How often is the PhD admission cycle?",
    answer: "Twice a year – PET in January and July followed by interviews in February and August."
  },
  {
    question: "Are fellowships available?",
    answer: "Yes. BCUD fellowships are available for university departments. External funding like CSIR/ICSSR is also encouraged."
  },
  {
    question: "Is part-time PhD allowed?",
    answer: "Yes, subject to approval by the department and research center. NOC may be required from your employer."
  }
];

const SPPUPhDPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#admission">Admission Process</a></li>
          <li><a href="#infra">Infrastructure</a></li>
          <li><a href="#funding">Fellowships</a></li>
          <li><a href="#timeline">Timeline & Fees</a></li>
          <li><a href="#cta">Narpavi Role</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Savitribai Phule Pune University (SPPU) – PhD Guide</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Address:</strong> Ganeshkhind, Pune – 411007</p>
              <p><strong>Website:</strong> <a href="https://www.unipune.ac.in" target="_blank" rel="noreferrer">www.unipune.ac.in</a></p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <h2>Faculty & Research Network</h2>
          <p>SPPU offers an expansive academic research framework via its 300+ departments and affiliated institutions.</p>
          <div className="card-grid">
            <div className="card">UGC Centres of Excellence & DST-FIST backed labs</div>
            <div className="card">Research in Sciences, Commerce, Law, Languages, and AI</div>
            <div className="card">Top-tier affiliations with national and international institutes</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Process</h2>
          <div className="list-row">
            <div className="list-card">PhD Entrance Test (PET) – twice a year</div>
            <div className="list-card">Exemption: NET, JRF, GATE, SET</div>
            <div className="list-card">PG Degree ≥ 55% required</div>
            <div className="list-card">Post-PET: Interview + Research Proposal Presentation</div>
          </div>
        </section>

        <section id="infra" className="highlight-boxes">
          <h2>Infrastructure & Digital Access</h2>
          <ul>
            <li>Scopus-indexed labs in Nanotech, Biotech, Law, and Economics</li>
            <li>Digital Repository + INFLIBNET, SSRN, JSTOR access</li>
            <li>Advanced facilities for AI, environmental science & linguistics</li>
          </ul>
        </section>

        <section id="funding" className="funding-table">
          <h2>Fellowships & Support</h2>
          <table>
            <thead>
              <tr>
                <th>Funding Type</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BCUD Fellowship</td>
                <td>₹15,000–₹25,000/month for university scholars</td>
              </tr>
              <tr>
                <td>External</td>
                <td>Eligible for CSIR, ICSSR, DST-INSPIRE, UGC-JRF</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Admission Timeline & Fees</h2>
          <table>
            <thead>
              <tr>
                <th>Factor</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application Fee</td>
                <td>₹500 (General) / ₹350 (SC/ST)</td>
              </tr>
              <tr>
                <td>Tuition Fee</td>
                <td>₹25,000/year</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td>Full-time: 3–6 years</td>
              </tr>
              <tr>
                <td>PET Dates</td>
                <td>January & July</td>
              </tr>
              <tr>
                <td>Interview</td>
                <td>February & August</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi Research Institute @ SPPU</h2>
          <p>SPPU’s vast research structure demands focus and precision. Narpavi simplifies and strengthens your journey through:</p>
          <ul>
            <li>PET Preparation & Proposal Drafting</li>
            <li>Faculty Mapping & Departmental Liaison</li>
            <li>BCUD Fellowship Application Guidance</li>
            <li>Research Publication Management & Journal Targeting</li>
          </ul>
          <strong>Your PhD at SPPU becomes not just a degree, but a platform for academic leadership.</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – SPPU PhD Admissions</h2>
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
        <div className="tags">
          <ul>
            <li>SPPU</li>
            <li>Pune University</li>
            <li>PhD Admissions</li>
            <li>PET 2025</li>
            <li>BCUD Fellowship</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SPPUPhDPage;
