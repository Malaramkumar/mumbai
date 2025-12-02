import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEO from "../assets/SEO";
const faqs = [
  {
    question: "Does SBUP require a PhD entrance exam?",
    answer: "Yes, candidates must take the SBUP-RAT followed by a research interview. NET/JRF/MPhil holders are exempt."
  },
  {
    question: "What are the research areas supported?",
    answer: "SBUP emphasizes management-related research like HR, Business Analytics, Media, and Leadership Strategy."
  },
  {
    question: "Are corporate-funded research projects encouraged?",
    answer: "Yes. Corporate-funded research assistantships are available, especially in Marketing and HR domains."
  },
  {
    question: "Are fellowships available?",
    answer: "Internal PhD grants range from ₹15,000 to ₹22,000/month, based on merit and availability."
  },
  {
    question: "When does the PhD admission process occur?",
    answer: "Applications close in May. Entrance exam is held in June, followed by interviews in July."
  }
];
const keywords = [
  "SBUP PhD Admission ",
  "Sri Balaji University Pune PhD",
  "SBUP RAT Exam",
  "PhD in Management Pune",
  "Business Analytics PhD",
  "HR PhD Admission ",
  "Corporate PhD Research",
  "SBUP Fellowship",
  "Management Doctoral Program",
  "SBUP PhD Fees"
];
const SbupPhDPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
       <SEO
        title="SBUP PhD Admission  | RAT Exam, Eligibility, Fellowship & Research Guide"
        description="Sri Balaji University Pune PhD Admissions  – Eligibility, SBUP-RAT exam details, research ecosystem, funding, corporate assistantships, and complete admission timeline."
        url="/colleges/sbup-phd"
        keywords={keywords}
        faqs={faqs}
      />
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#admission">Admission Path</a></li>
          <li><a href="#infra">Research Ecosystem</a></li>
          <li><a href="#funding">Funding</a></li>
          <li><a href="#timeline">Timeline & Fees</a></li>
          <li><a href="#cta">Narpavi Role</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Sri Balaji University, Pune (SBUP) – PhD Guide</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Address:</strong> S. No. 55/2-7, Tathawade, Off Mumbai-Bangalore Bypass, Pune – 411033</p>
              <p><strong>Website:</strong> <a href="https://www.sbup.edu.in" target="_blank" rel="noreferrer">www.sbup.edu.in</a></p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <h2>Research Domain & Faculty</h2>
          <p>SBUP emphasizes real-world, industry-focused doctoral work in business and management fields.</p>
          <div className="card-grid">
            <div className="card">Management & HR Development</div>
            <div className="card">Business Analytics & Media Research</div>
            <div className="card">100+ Industry-experienced Research Guides</div>
            <div className="card">Corporate-aligned research encouraged</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>Admission Process</h2>
          <div className="list-row">
            <div className="list-card">SBUP-RAT (Objective Test)</div>
            <div className="list-card">Research Proposal Interview</div>
            <div className="list-card">PG Degree ≥ 55% required</div>
            <div className="list-card">NET/JRF/MPhil holders exempt</div>
          </div>
        </section>

        <section id="infra" className="highlight-boxes">
          <h2>Research Ecosystem</h2>
          <ul>
            <li>Dedicated Business Analytics Lab & Bloomberg Terminals</li>
            <li>Access to Case Study Libraries and databases</li>
            <li>Emphasis on publishing in Scopus / ABDC journals</li>
            <li>Real-world case-based research formats encouraged</li>
          </ul>
        </section>

        <section id="funding" className="funding-table">
          <h2>Funding & Fellowships</h2>
          <table>
            <thead>
              <tr>
                <th>Funding Type</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Internal Grants</td>
                <td>₹15,000–₹22,000/month (limited seats)</td>
              </tr>
              <tr>
                <td>Corporate RAs</td>
                <td>Funded assistantships in Marketing, HR, Business Strategy</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Timeline & Fee Structure</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application Deadline</td>
                <td>May</td>
              </tr>
              <tr>
                <td>Entrance Test</td>
                <td>June</td>
              </tr>
              <tr>
                <td>Interview</td>
                <td>July</td>
              </tr>
              <tr>
                <td>Tuition Fee</td>
                <td>₹1,00,000/year</td>
              </tr>
              <tr>
                <td>Thesis Processing</td>
                <td>₹25,000 (one-time)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi: The Corporate Edge for SBUP Scholars</h2>
          <p>SBUP's industry-focused research demands business-savvy execution. Narpavi helps you with:</p>
          <ul>
            <li>ABDC/Scopus journal targeting strategies</li>
            <li>Corporate presentation-ready thesis formatting</li>
            <li>Quantitative modelling for HR/Marketing data</li>
            <li>Proposal editing aligned with business logic</li>
          </ul>
          <strong>Let your PhD research deliver boardroom-level impact with Narpavi’s tailored academic-industry bridge model.</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – SBUP PhD Program</h2>
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
        <h3>Keywords</h3>
        <ul>
          {keywords.map((key) => (
            <li key={key}>{key}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default SbupPhDPage;

