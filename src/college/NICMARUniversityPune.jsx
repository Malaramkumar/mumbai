import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEO from ".././assets/SEO";
const faqs = [
  {
    question: "Is NICMAR only for Civil or Construction background?",
    answer: "While it specializes in Construction & Infrastructure Management, NICMAR accepts candidates from related disciplines like Architecture, Planning, Economics, and Management."
  },
  {
    question: "Can working professionals apply?",
    answer: "Yes. NICMAR allows Sponsored/Corporate scholars with NOC to pursue a part-time PhD."
  },
  {
    question: "Does NICMAR offer full-time fellowships?",
    answer: "Yes, full-time research scholars receive ₹25,000/month fellowship, based on performance and progress."
  },
  {
    question: "Is NICMAR-RAT compulsory?",
    answer: "Yes, unless you're exempt via UGC-NET, GATE, MPhil, or CEPT PG. Others must appear for NICMAR-RAT."
  },
  {
    question: "What are the major research areas?",
    answer: "Smart Cities, Project Risk, PPP Infrastructure, Green Construction, BIM, and Construction Finance."
  }
];
const keywords = [
  "NICMAR PhD Admission 2025",
  "NICMAR University Pune",
  "Construction Management PhD",
  "Infrastructure PhD India",
  "NICMAR RAT Exam",
  "NICMAR PhD Eligibility",
  "PhD in Smart Cities",
  "PPP Infrastructure PhD",
  "NICMAR Fellowship",
  "Construction Research India"
];
const NICMARPhDPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
       <SEO
        title="NICMAR PhD Admission 2025 | Eligibility, NICMAR-RAT Exam, Research Areas, Fees & Fellowship"
        description="NICMAR PhD Admission 2025 – NICMAR-RAT exam pattern, eligibility, construction research areas, fellowships, fees, infrastructure, and application timeline."
        url="/colleges/nicmar-phd"
        image="/assets/university-default-banner.jpg"
        keywords={keywords}
        faqs={faqs}
      />
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#admission">Admission Process</a></li>
          <li><a href="#facilities">Research Facilities</a></li>
          <li><a href="#funding">Fellowship</a></li>
          <li><a href="#timeline">Timeline & Fees</a></li>
          <li><a href="#cta">Narpavi Role</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>NICMAR University, Pune – PhD Overview</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> National Institute of Construction Management and Research (NICMAR)</p>
              <p><strong>Address:</strong> 25/1, Balewadi, N.I.A. Post Office, Pune – 411045</p>
              <p><strong>Website:</strong> <a href="https://www.nicmar.ac.in" target="_blank" rel="noreferrer">www.nicmar.ac.in</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Research & Faculty Strength</h2>
          <p>NICMAR leads India’s research in Construction Management and Infrastructure Finance.</p>
          <div className="card-grid">
            <div className="card">80+ research faculty from global EPC, Real Estate, and Infrastructure sectors</div>
            <div className="card">Focus: Smart Cities, Green Construction, PPP Models</div>
            <div className="card">Labs: Project Simulation Lab, BIM Studio, Risk & Cost Modelling Tools</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Criteria</h2>
          <div className="list-row">
            <div className="list-card">NICMAR-RAT (MCQ-based)</div>
            <div className="list-card">Concept Note + Personal Interview</div>
            <div className="list-card">PG ≥ 55% in relevant field</div>
            <div className="list-card">Exemptions: NET, GATE, CEPT PG, MPhil</div>
          </div>
        </section>

        <section id="funding" className="funding-table">
          <h2>Fellowships</h2>
          <table>
            <thead>
              <tr>
                <th>Scholar Type</th>
                <th>Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full-time</td>
                <td>₹25,000/month fellowship</td>
              </tr>
              <tr>
                <td>Corporate/Sponsored</td>
                <td>Allowed with NOC</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="highlight-boxes">
          <h2>Data Access & Tools</h2>
          <ul>
            <li>CMIE Prowess, BCI datasets, EPC contract archives</li>
            <li>Project cost estimation & BIM platforms</li>
            <li>Simulation-based construction decision tools</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Timeline & Fee Structure</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Applications</td>
                <td>April – June</td>
              </tr>
              <tr>
                <td>Entrance Exam</td>
                <td>July</td>
              </tr>
              <tr>
                <td>Result Declaration</td>
                <td>August</td>
              </tr>
              <tr>
                <td>Tuition Fee</td>
                <td>₹1.2L/year</td>
              </tr>
              <tr>
                <td>Thesis Fee</td>
                <td>₹25,000</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi for NICMAR Scholars</h2>
          <p>At NICMAR, research intersects with industry. Narpavi equips scholars to deliver impactful dissertations through:</p>
          <ul>
            <li>Construction cost modelling & SPSS training</li>
            <li>Concept Note review & Risk management analytics</li>
            <li>Publication planning in Scopus-indexed construction journals</li>
          </ul>
          <strong>“Your PhD isn't just academic—it's engineered to transform India’s built environment.”</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – NICMAR PhD Admissions</h2>
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
           <h3>Keywords</h3>
        <ul>
          {keywords.map((key) => (
            <li key={key}>{key}</li>
          ))}
        </ul>
        </div>
      </aside>
    </div>
  );
};

export default NICMARPhDPage;

