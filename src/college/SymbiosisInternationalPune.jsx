import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is the Symbiosis PhD entrance mandatory?",
    answer: "Yes, the PET-SIU is required unless you hold a valid NET, JRF, GATE, SET, or MPhil qualification."
  },
  {
    question: "What are SIU’s key PhD domains?",
    answer: "Management, Health Sciences, International Relations, and Data Science are major focus areas."
  },
  {
    question: "Does Symbiosis offer funding?",
    answer: "Yes, limited fellowships are available for full-time PhD scholars (₹18,000–₹25,000/month). External grants also apply."
  },
  {
    question: "Are international collaborations encouraged?",
    answer: "Absolutely. Symbiosis has MoUs with universities across Europe, Canada, and Asia for collaborative research."
  },
  {
    question: "When is the admission cycle?",
    answer: "Applications: April–May | PET: June | Interviews: July"
  }
];

const SiuPhDPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#admission">Admission</a></li>
          <li><a href="#infra">Infrastructure</a></li>
          <li><a href="#funding">Funding</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#cta">Narpavi Role</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Symbiosis International (Deemed University) – SIU, Pune</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Address:</strong> Lavale Hilltop Campus, Pune – 412115, Maharashtra</p>
              <p><strong>Website:</strong> <a href="https://www.siu.edu.in" target="_blank" rel="noreferrer">www.siu.edu.in</a></p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <h2>Research Strength & Faculty</h2>
          <p>Symbiosis combines academic excellence with interdisciplinary innovation across 15 institutes.</p>
          <div className="card-grid">
            <div className="card">NAAC A++ Accredited</div>
            <div className="card">400+ Approved Research Supervisors</div>
            <div className="card">SCRI Coordinates All PhD Programs</div>
            <div className="card">Focus: Management, Data Science, Health, IR</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Process</h2>
          <div className="list-row">
            <div className="list-card">PET-SIU Entrance</div>
            <div className="list-card">Research Proposal Submission</div>
            <div className="list-card">Personal Interview</div>
            <div className="list-card">NET/JRF/GATE/SET/MPhil Exemptions</div>
          </div>
          <p><strong>Eligibility:</strong> Master’s with ≥ 55% (50% for reserved categories)</p>
        </section>

        <section id="infra" className="highlight-boxes">
          <h2>Infrastructure & Collaborations</h2>
          <ul>
            <li>Advanced labs: Bioinformatics, Data Analytics, Clinical Trials</li>
            <li>Digital access: Scopus, Web of Science, Bloomberg Terminals</li>
            <li>Global MoUs with universities in Europe, Canada, and Asia</li>
          </ul>
        </section>

        <section id="funding" className="funding-table">
          <h2>Fellowship Ecosystem</h2>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Internal Fellowships</td>
                <td>₹18,000–₹25,000/month for select full-time candidates</td>
              </tr>
              <tr>
                <td>External Grants</td>
                <td>Eligibility for UGC, DST, ICSSR, and CSIR schemes</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Admission Timeline & Fee Structure</h2>
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application Window</td>
                <td>April – May</td>
              </tr>
              <tr>
                <td>PET Exam</td>
                <td>June</td>
              </tr>
              <tr>
                <td>Interviews</td>
                <td>July</td>
              </tr>
              <tr>
                <td>Tuition Fee</td>
                <td>₹1.5L/year</td>
              </tr>
              <tr>
                <td>Thesis Submission Fee</td>
                <td>₹35,000 (one-time)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi’s Role in SIU Doctoral Success</h2>
          <p>Symbiosis PhD scholars benefit from Narpavi’s comprehensive suite of research services:</p>
          <ul>
            <li>PET Coaching & Application Assistance</li>
            <li>Statement of Purpose & Research Proposal Drafting</li>
            <li>Journal-ready Manuscript Editing (Scopus/ABDC)</li>
            <li>Grant Planning & International Collaboration Roadmaps</li>
          </ul>
          <strong>We ensure your SIU PhD journey is structured, strategic, and globally respected.</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – Symbiosis PhD Program</h2>
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
            <li>SIU Pune</li>
            <li>PhD in Management</li>
            <li>Health Sciences Research</li>
            <li>Symbiosis PET</li>
            <li>UGC-CSIR Fellowships</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SiuPhDPage;

