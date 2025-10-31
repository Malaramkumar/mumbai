import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What are VU’s core PhD domains?",
    answer: "Vishwakarma University offers PhDs in Engineering, Design, Music, Law, Commerce, and Liberal Arts with strong interdisciplinary support."
  },
  {
    question: "Is the entrance test mandatory?",
    answer: "VU-PET is required unless you have NET/JRF/SET/GATE or an MPhil in a relevant field."
  },
  {
    question: "Are there fellowships available?",
    answer: "Yes, full-time scholars are eligible for fellowships up to ₹20,000/month. Sponsored roles are also available."
  },
  {
    question: "Does VU support creative and design research?",
    answer: "Yes. Specialized labs in Sound Engineering, Human-Centered Design, and AI/ML are part of the infrastructure. A portfolio is required for Design/Art applicants."
  },
  {
    question: "What is the admission timeline?",
    answer: "Applications open March–May. Entrance in June. Final admissions by July."
  }
];

const VishwakarmaPhDPage = () => {
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
        <h1>Vishwakarma University (VU), Pune – PhD Guide</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Address:</strong> Kondhwa, Pune – 411048, Maharashtra</p>
              <p><strong>Website:</strong> <a href="https://www.vupune.ac.in" target="_blank" rel="noreferrer">www.vupune.ac.in</a></p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <h2>Academic & Research Profile</h2>
          <p>VU fosters new-age interdisciplinary doctoral research.</p>
          <div className="card-grid">
            <div className="card">Focus Areas: Engineering, Design, Music, Law</div>
            <div className="card">80+ Research Mentors</div>
            <div className="card">Labs: AI/ML, Human-Centered Design</div>
            <div className="card">Industry-Academia Collaboration</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Requirements</h2>
          <div className="list-row">
            <div className="list-card">VU-PET: Aptitude + Subject</div>
            <div className="list-card">Research Interview</div>
            <div className="list-card">NET/GATE/SET Exemption</div>
            <div className="list-card">Portfolio for Design/Art</div>
          </div>
          <p><strong>Eligibility:</strong> PG degree with ≥ 55%</p>
        </section>

        <section id="infra" className="highlight-boxes">
          <h2>Research Facilities</h2>
          <ul>
            <li>Music Studio Lab & Sound Engineering Suites</li>
            <li>Legal Analytics & Data Science Cluster</li>
            <li>Smart Design Innovation Labs</li>
            <li>IBM Innovation Lab • Indian Patent Office Collaborations</li>
          </ul>
        </section>

        <section id="funding" className="funding-table">
          <h2>Fellowship Support</h2>
          <table>
            <thead>
              <tr>
                <th>Funding Type</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>University Fellowships</td>
                <td>Up to ₹20,000/month for full-time PhD scholars</td>
              </tr>
              <tr>
                <td>Sponsored Projects</td>
                <td>Industry-funded RA/Research roles in emerging areas</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Admission Timeline & Fees</h2>
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Applications</td>
                <td>March – May</td>
              </tr>
              <tr>
                <td>VU-PET</td>
                <td>June</td>
              </tr>
              <tr>
                <td>Final Admission</td>
                <td>July</td>
              </tr>
              <tr>
                <td>Tuition Fee</td>
                <td>₹1.2L/year</td>
              </tr>
              <tr>
                <td>Thesis Fee</td>
                <td>₹30,000</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi’s Role in Your Vishwakarma PhD</h2>
          <p>VU emphasizes creativity, design thinking, and digital transformation. Narpavi supports with:</p>
          <ul>
            <li>Design-led research mentoring</li>
            <li>Patent proposal & IPR drafting</li>
            <li>Publication targeting in Scopus & Creative Indexes</li>
            <li>Research ethics and innovation documentation</li>
          </ul>
          <strong>Your ideas deserve visibility, structure, and strategy—Narpavi ensures your PhD becomes a legacy, not just a degree.</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – Vishwakarma University PhD</h2>
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
            <li>VU Pune PhD</li>
            <li>Design Research</li>
            <li>Sound Engineering PhD</li>
            <li>Patent-Focused Research</li>
            <li>Narpavi @ Vishwakarma</li>
          </ul>
  
      </aside>
    </div>
  );
};

export default VishwakarmaPhDPage;
