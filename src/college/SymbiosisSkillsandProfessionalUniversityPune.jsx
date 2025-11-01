import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What are SSPU's PhD focus areas?",
    answer: "SSPU focuses on applied domains like Industry 4.0, AI/ML, IoT, Retail, Healthcare, and Logistics."
  },
  {
    question: "Is SSPU’s PhD entrance mandatory?",
    answer: "Yes, unless you hold a valid NET or MPhil qualification. Otherwise, SSPU-PET is compulsory."
  },
  {
    question: "Does SSPU provide funding?",
    answer: "Yes, institutional assistantships (₹15,000–₹20,000/month) and sponsored roles via Skill India partners are available."
  },
  {
    question: "What is the research model at SSPU?",
    answer: "It is application-oriented, involving labs like Retail Analytics and Digital Manufacturing, and often industry-sponsored."
  },
  {
    question: "When is the admission cycle?",
    answer: "Typically between June and August."
  }
];

const SspuPhDPage = () => {
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
        <h1>Symbiosis Skills and Professional University (SSPU), Pune</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Address:</strong> Kiwale, Pune – 412101</p>
              <p><strong>Website:</strong> <a href="https://www.sspu.ac.in" target="_blank" rel="noreferrer">www.sspu.ac.in</a></p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <h2>Research Scope & Institutional Focus</h2>
          <p>SSPU pioneers skill-integrated applied research with strong industry ties.</p>
          <div className="card-grid">
            <div className="card">India's First Skill-Focused University</div>
            <div className="card">Focus Areas: Industry 4.0, AI/ML, IoT</div>
            <div className="card">Simulation & Digital Skilling Labs</div>
            <div className="card">Strong Industry-Academic Interface</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Pathway</h2>
          <div className="list-row">
            <div className="list-card">SSPU-PhD Entrance Test</div>
            <div className="list-card">Statement of Purpose</div>
            <div className="list-card">Personal Interview</div>
            <div className="list-card">NET/MPhil Exemption</div>
          </div>
          <p><strong>Eligibility:</strong> PG in relevant stream with ≥ 55%</p>
        </section>

        <section id="infra" className="highlight-boxes">
          <h2>Research Facilities</h2>
          <ul>
            <li>Digital Manufacturing Lab</li>
            <li>Retail Analytics Lab</li>
            <li>Cybersecurity Simulation Unit</li>
            <li>Affiliations with IBM Skills Academy, NSDC, NASSCOM</li>
          </ul>
        </section>

        <section id="funding" className="funding-table">
          <h2>Fellowships</h2>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Institutional Assistantships</td>
                <td>₹15,000–₹20,000/month for full-time scholars</td>
              </tr>
              <tr>
                <td>Sponsored Positions</td>
                <td>Available under Skill India MoUs and industry tie-ups</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Fees & Admission Timeline</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application Window</td>
                <td>June – August</td>
              </tr>
              <tr>
                <td>Tuition Fee</td>
                <td>₹80,000/year</td>
              </tr>
              <tr>
                <td>Application Fee</td>
                <td>₹1,000</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi @ SSPU – Skilling Research Excellence</h2>
          <p>At SSPU, research must meet real-world applicability. Narpavi ensures:</p>
          <ul>
            <li>Industry-aligned proposal design</li>
            <li>Funding support for product-driven research</li>
            <li>Research-to-skill translation roadmaps</li>
            <li>Guidance on experiential methodologies for AI, IoT, and Logistics</li>
          </ul>
          <strong>Your SSPU PhD, powered by Narpavi, drives both innovation and employability outcomes.</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – SSPU PhD Program</h2>
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
            <li>SSPU PhD</li>
            <li>Skill-Based Doctorate</li>
            <li>PhD in AI/ML</li>
            <li>IoT Logistics Research</li>
            <li>NASSCOM Research</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SspuPhDPage;


