import React from "react";
import "./university.scss";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Does CSMU conduct its own PhD entrance exam?",
    answer: "Yes. PET-CSMU is a 120-minute MCQ-based test followed by interview and presentation."
  },
  {
    question: "Are exemptions allowed for PET-CSMU?",
    answer: "Yes. Candidates with NET, JRF, GATE, or MPhil can directly appear for the interview."
  },
  {
    question: "What is the internal fellowship amount?",
    answer: "CSMU offers ₹18,000–₹22,000 per month for full-time research scholars."
  },
  {
    question: "Can working professionals apply?",
    answer: "Yes. A part-time PhD mode is available for working professionals with NOC."
  },
  {
    question: "Are publications required?",
    answer: "Yes. Two Scopus/UGC-CARE-indexed papers and ≤10% Turnitin similarity are required pre-synopsis."
  }
];

const CsmuPhDPage = () => {
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
        <h1>Chhatrapati Shivaji Maharaj University (CSMU), Panvel <br /> – PhD Admission & Research Overview</h1>

        <section>
          <h2>University Details</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> Chhatrapati Shivaji Maharaj University</p>
              <p><strong>Address:</strong> Near Shedung Toll Plaza, Old Mumbai–Pune Highway, Panvel, Navi Mumbai 410206</p>
              <p><strong>Website:</strong> <a href="https://csmu.ac.in" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>CSMU hosts 250+ PhD supervisors across all major disciplines with strong emphasis on innovation and infrastructure.</p>
          <div className="card-grid">
            <div className="card">HPLC, GC-MS, SEM, CNC, and Cloud HPC Node (15 TF)</div>
            <div className="card">Two incubation centers: CSMU-TBI and BioNest</div>
            <div className="card">Active joint-supervision with IIT Bombay, BARC, CSIR-NCL</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Mechanics & Eligibility</h2>
          <p>Admissions are held twice a year—June & December. Applicants must pass the PET-CSMU or qualify via exemption criteria.</p>
          <div className="list-row">
            <div className="list-card">Master’s degree with ≥ 55% (5% relaxation for reserved categories)</div>
            <div className="list-card">Exemptions for NET, JRF, GATE, or MPhil</div>
            <div className="list-card">Presentation & Interview mandatory for all applicants</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Research Facilities & Collaborations</h2>
          <ul>
            <li>Joint-access MoUs with IIT-Bombay, BARC & CSIR-NCL</li>
            <li>Fully equipped Central Instrumentation Lab</li>
            <li>Scholar access badges to external partner labs</li>
          </ul>
        </section>

        <section>
          <h2>Library & Digital Resources</h2>
          <ul>
            <li>45,000+ physical volumes</li>
            <li>90+ subscribed e-databases including IEEE, SpringerLink</li>
            <li>Remote VPN access for off-campus research</li>
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
                <td>Internal Fellowship</td>
                <td>₹18,000 – ₹22,000 per month</td>
              </tr>
              <tr>
                <td>External CSR Mini-Grants</td>
                <td>₹2 – ₹5 Lakh (Industry-sponsored projects)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Entrance Test – PET-CSMU</h2>
          <ul>
            <li>120-minute MCQ test (No negative marking)</li>
            <li>30% Research Methodology • 60% Subject Core • 10% Aptitude</li>
            <li>50% pass mark (45% for reserved categories)</li>
          </ul>
        </section>

        <section className="experience-modes">
          <h2>💼 Work Experience & PhD Modes</h2>
          <div className="experience-cards">
            <div className="card">
              <h4>🔍 Not Mandatory</h4>
              <p>Experience not required for full-time mode but encouraged.</p>
            </div>
            <div className="card">
              <h4>🏢 NOC Required for Part-Time</h4>
              <p>Professionals applying for part-time must submit employer NOC.</p>
            </div>
          </div>
        </section>

        <section className="delivery">
          <h3>🕘 PhD Delivery Modes</h3>
          <ul>
            <li><strong>Full-time:</strong> 3–6 years (campus residency)</li>
            <li><strong>Part-time:</strong> 4–7 years (with NOC)</li>
          </ul>
        </section>

        <section className="checklist-section">
          <h2>Documentation Checklist</h2>
          <ul className="checklist">
            <li>Online Application Form</li>
            <li>Postgraduate Transcripts</li>
            <li>ID Proof & Address</li>
            <li>Research Proposal (1,000–2,000 words)</li>
            <li>NOC (for working professionals)</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Timeline – June 2025 Intake</h2>
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application Deadline</td>
                <td>12 June 2025</td>
              </tr>
              <tr>
                <td>PET-CSMU Exam</td>
                <td>14 June 2025</td>
              </tr>
              <tr>
                <td>Interview & Presentation</td>
                <td>28 June 2025</td>
              </tr>
              <tr>
                <td>Result Declaration</td>
                <td>30 June 2025</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Fee Structure</h2>
          <ul>
            <li>Application Fee: ₹1,000</li>
            <li>Registration Fee: ₹10,000</li>
            <li>Tuition Fee (Full-time): ₹1.4 Lakh/year</li>
            <li>Thesis Submission: ₹25,000</li>
          </ul>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>Two Scopus/UGC-CARE-indexed publications required</li>
            <li>Turnitin plagiarism ≤10% mandatory before synopsis</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi Research Institute: Your Success Partner @ CSMU</h2>
          <p>From crafting PET-ready proposals to polishing Scopus manuscripts, Narpavi’s 15-year legacy (400 + success stories) wraps every step—funding dossiers, publication mentoring, thesis structuring—into one seamless service hub so you finish faster and stronger.</p>
          <strong>“From Entrance to Excellence – Narpavi’s Handholding at Every Stage”</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – PhD at CSMU</h2>
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
            <li>PhD Mumbai</li>
            <li>CSMU</li>
            <li>Admissions</li>
            <li>Research</li>
            <li>UGC NET</li>
          </ul>
      </aside>
    </div>
  );
};

export default CsmuPhDPage;

