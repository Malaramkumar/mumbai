import React from "react";
import "./university.scss";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Does TIFR require prior research experience?",
    answer: "No. While experience is beneficial, it’s not mandatory. TIFR evaluates applicants based on entrance test performance and research aptitude."
  },
  {
    question: "Can I apply to TIFR with just a B.Tech?",
    answer: "Yes. Exceptional B.Tech graduates with strong academic records may be considered for direct PhD admission in select disciplines."
  },
  {
    question: "Is the TIFR entrance test mandatory?",
    answer: "Yes, unless you have a valid GATE, CSIR-NET, or JEST score. Such candidates may be shortlisted directly for the interview."
  },
  {
    question: "Are TIFR PhD degrees recognized internationally?",
    answer: "Yes. TIFR is a globally reputed institution with collaborations across CERN, LIGO, and more."
  },
  {
    question: "Does TIFR charge tuition fees?",
    answer: "No. There are no tuition fees for PhD students at TIFR."
  }
];

const TifrPhDPage = () => {
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
        <h1>Tata Institute of Fundamental Research (TIFR) Mumbai <br /> – PhD Admission & Research Overview</h1>

        <section>
          <h2>University Details</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name: </strong> Tata Institute of Fundamental Research (TIFR), Mumbai</p>
              <p><strong>Address:</strong> Homi Bhabha Road, Navy Nagar, Colaba, Mumbai 400 005</p>
              <p><strong>Website:</strong> <a href="https://www.tifr.res.in" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>TIFR integrates over 1,000 active researchers and faculty members spanning physics, math, biology, computer science, and education research.</p>
          <div className="card-grid">
            <div className="card">1 Petaflop Supercomputing Cluster & Cryo-EM Suite</div>
            <div className="card">National Astronomy Access + 400 MHz NMR</div>
            <div className="card">Participation in CERN, KEK, LIGO, ITER</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Mechanics & Eligibility Nuances</h2>
          <p>TIFR’s PhD programs operate on a bi-annual cycle (January & August).</p>
          <div className="list-row">
            <div className="list-card">Entrance via TIFR GS test or valid GATE/JEST/NET score</div>
            <div className="list-card">60% or more in Master’s degree (M.Sc./M.Tech)</div>
            <div className="list-card">Exceptional B.Tech candidates may apply for direct PhD</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Research Facilities & Collaborations</h2>
          <li>DAE Research Labs, Indian Synchrotron, and space telescope access</li>
          <li>Global collaborations with CERN, LIGO-India, and KEK</li>
          <li>Access to national astronomy facilities and Indian Grid Computing Consortium</li>
        </section>

        <section>
          <h2>Library & Digital Resources</h2>
          <ul>
            <li>250,000+ volumes</li>
            <li>arXiv mirror, INSPIRE-HEP, ScienceDirect</li>
            <li>Remote access for enrolled research scholars</li>
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
                <td>DAE Fellowship</td>
                <td>₹37,000 → ₹42,000/month + HRA or Hostel</td>
              </tr>
              <tr>
                <td>Contingency Grant</td>
                <td>₹40,000/year</td>
              </tr>
              <tr>
                <td>External Registration Scheme</td>
                <td>Available for DAE Scientists (on approval)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Entrance Test – TIFR GS</h2>
          <ul>
            <li>Discipline-specific CBT (90 minutes)</li>
            <li>Shortlisted candidates are invited for interviews (Tech + HR)</li>
          </ul>
        </section>

        <section>
          <h3>🎓 Academic Qualification Requirements</h3>
          <ul>
            <li>Minimum 60% in M.Sc. / M.Tech or equivalent</li>
            <li>Exceptional B.Tech holders may also be considered</li>
            <li>GATE/JEST/NET score beneficial but not mandatory</li>
          </ul>
        </section>

        <section className="experience-modes">
          <h2>💼 Work Experience & PhD Modes</h2>
          <div className="experience-cards">
            <div className="card">
              <h4>🔍 Not Mandatory</h4>
              <p>Experience is not required for full-time TIFR admission.</p>
            </div>
            <div className="card">
              <h4>🔬 External Registration</h4>
              <p>For scientists from DAE labs; separate approval required.</p>
            </div>
          </div>
        </section>

        <section className="delivery">
          <h3>🕘 PhD Delivery Modes</h3>
          <ul>
            <li><strong>Full-time:</strong> 3–6 years</li>
            <li><strong>External (ERS):</strong> Registered DAE scientists only</li>
          </ul>
        </section>

        <section className="checklist-section">
          <h2>Documentation Checklist</h2>
          <ul className="checklist">
            <li>Online Application Form</li>
            <li>PG Mark Sheets</li>
            <li>GATE/NET/JEST scorecard (if applicable)</li>
            <li>400-word Statement of Purpose</li>
            <li>Security clearance (for ERS applicants)</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>General Application Timeline</h2>
          <table>
            <thead>
              <tr>
                <th>Session</th>
                <th>Applications</th>
                <th>Test</th>
                <th>Interview</th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>August 2025</td>
                <td>Feb–Mar</td>
                <td>Apr</td>
                <td>May</td>
                <td>Jun</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Fee Structure</h2>
          <ul>
            <li>Application: ₹500</li>
            <li>Tuition Fee: ₹0 (Fully subsidized)</li>
            <li>Thesis Submission: ₹20,000</li>
          </ul>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>Minimum 3 SCI-indexed papers required before submission</li>
            <li>Mandatory 20-credit coursework</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi Research Institute: Your Success Partner</h2>
          <p>We simplify your TIFR journey through:</p>
          <ul>
            <li>TIFR-GS coaching & interview prep</li>
            <li>SOP refinement & proposal drafting</li>
            <li>Fellowship application strategy</li>
          </ul>
          <strong>“From Concept to Cryo-EM – Narpavi Powers Your Research Dreams”</strong>
        </section>

        <section className="faq-section11">
          <h2> FAQs – PhD Research & Admissions at TIFR</h2>
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
        <h3>Keywords</h3>
          <ul>
            <li>PhD Mumbai</li>
            <li>TIFR</li>
            <li>Admissions</li>
            <li>Research</li>
            <li>JEST</li>
          </ul>
      </aside>
    </div>
  );
};

export default TifrPhDPage;

