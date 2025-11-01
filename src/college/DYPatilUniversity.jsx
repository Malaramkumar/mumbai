import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Does DYPU offer full-time and executive PhD options?",
    answer: "Yes. DYPU provides full-time, executive, and part-time PhD modes depending on your academic and industry background."
  },
  {
    question: "Is work experience mandatory?",
    answer: "Only for Executive or Part-time modes. Minimum 3 years of relevant experience is required."
  },
  {
    question: "Can I skip DYPU-PET if I have cleared NET or GATE?",
    answer: "Yes. Valid NET, JRF, GATE scores provide exemption from the DYPU-PET written test."
  },
  {
    question: "What is the structure of the entrance exam?",
    answer: "The PET is a 90-minute test with 50% Research Methodology and 50% Subject Knowledge. No negative marking."
  },
  {
    question: "Are publications required for completion?",
    answer: "Yes. At least two SCI or ABDC-B indexed papers are mandatory before final thesis submission."
  }
];

const DyPatilPhDPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#admission">Admission & Eligibility</a></li>
          <li><a href="#facilities">Research Facilities</a></li>
          <li><a href="#funding">Funding & Fellowship</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#cta">Narpavi Support</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>D. Y. Patil University (DYPU), Navi Mumbai <br />– PhD Admission & Research Overview</h1>

        <section>
          <h2>University Details</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> D. Y. Patil University</p>
              <p><strong>Address:</strong> Sector 7, Nerul, Navi Mumbai – 400 706</p>
              <p><strong>Website:</strong> <a href="https://dypatil.edu" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>DYPU fosters academic excellence with over 1,200 faculty members and a multi-disciplinary research environment spread across a 72-acre smart campus.</p>
          <div className="card-grid">
            <div className="card">Bloomberg Finance Lab</div>
            <div className="card">BSL-3 Biosafety Suite</div>
            <div className="card">AI-ML GPU Farm (32× A100 cards)</div>
            <div className="card">Foster+Partners-designed Center of Excellence</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Mechanics & Eligibility</h2>
          <p>DYPU accepts PhD applications annually. PET is followed by interview rounds for research potential evaluation.</p>
          <div className="list-row">
            <div className="list-card">Postgraduate degree with ≥ 55% marks (5% relaxation for SC/ST/OBC)</div>
            <div className="list-card">Exemption for NET, JRF, GATE qualified candidates</div>
            <div className="list-card">Executive/Part-time track requires ≥ 3 years of work experience</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Research Facilities & Collaborations</h2>
          <ul>
            <li>1,660-bed NABH Teaching Hospital for Health Sciences</li>
            <li>GPU Cluster and Innovation Labs</li>
            <li>Collaborative access to Harvard HBS Online Micro-Certifications</li>
          </ul>
        </section>

        <section>
          <h2>Library & Digital Resources</h2>
          <ul>
            <li>Extensive research holdings across 90+ programs</li>
            <li>Access to SCOPUS, JSTOR, PubMed & Delnet</li>
            <li>VPN remote access for off-campus research</li>
          </ul>
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
                <td>Doctoral Assistantship</td>
                <td>₹25,000 – ₹30,000 per month for full-time scholars</td>
              </tr>
              <tr>
                <td>Teaching Assistantship</td>
                <td>For Engineering and Health Sciences scholars</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Entrance Test – DYPU-PET</h2>
          <ul>
            <li>100 marks, 90-minute online test</li>
            <li>50% Research Methodology • 50% Subject Knowledge</li>
            <li>No negative marking</li>
          </ul>
        </section>

        <section className="experience-modes">
          <h2>💼 Work Experience & PhD Modes</h2>
          <div className="experience-cards">
            <div className="card">
              <h4>🎓 Full-Time PhD</h4>
              <p>For scholars opting for campus-based research with full funding support.</p>
            </div>
            <div className="card">
              <h4>🏢 Executive/Part-Time</h4>
              <p>Working professionals with ≥3 years experience can pursue weekend-based research.</p>
            </div>
          </div>
        </section>

        <section className="delivery">
          <h3>🕘 PhD Delivery Modes</h3>
          <ul>
            <li><strong>Full-time:</strong> 3–6 years</li>
            <li><strong>Executive/Part-time:</strong> 4–7 years with work NOC</li>
          </ul>
        </section>

        <section className="checklist-section">
          <h2>Documentation Checklist</h2>
          <ul className="checklist">
            <li>Application Form</li>
            <li>PG Degree & Transcripts</li>
            <li>Research Proposal (1,000–2,000 words)</li>
            <li>Experience Certificate (for part-time)</li>
            <li>ID & Address Proof</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Application Timeline (2025)</h2>
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application Window</td>
                <td>March – May 2025</td>
              </tr>
              <tr>
                <td>Entrance Exam (PET)</td>
                <td>June 2025</td>
              </tr>
              <tr>
                <td>Results & Offer</td>
                <td>July 2025</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Fee Structure</h2>
          <ul>
            <li>Application Fee: ₹1,500</li>
            <li>Total Tuition (approx): ₹2.5 Lakh</li>
          </ul>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>At least 2 SCI or ABDC-B indexed publications required</li>
            <li>Harvard-HBS Online micro-certifications available to top scholars</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>Why Choose Narpavi for DYPU?</h2>
          <p>Our team pairs you with ex-DYPU reviewers, secures assistantships, and fine-tunes Harvard-style case-papers—delivering proposal, funding and thesis support in a single, time-saving pipeline.</p>
          <strong>“From Entrance to Excellence – Narpavi’s Handholding at Every Stage”</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – PhD at DY Patil University</h2>
          {faqs.map((item, index) => (
            <div className={`faq-item11 ${openIndex === index ? "active" : ""}`} key={index}>
              <div className="faq-question11" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {openIndex === index && <div className="faq-answer11"><p>{item.answer}</p></div>}
            </div>
          ))}
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <h3>Tags</h3>
          <ul>
            <li>PhD Navi Mumbai</li>
            <li>DY Patil</li>
            <li>Admissions</li>
            <li>Research</li>
            <li>PET Exam</li>
          </ul>
      </aside>
    </div>
  );
};

export default DyPatilPhDPage;

