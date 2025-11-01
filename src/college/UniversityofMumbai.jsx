 import React from "react";
import "./MumbaiPhDOverview.scss";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is PET mandatory for all PhD applicants?",
    answer:
      "No, candidates with valid JRF, GATE, GPAT, SET, or MPhil (with coursework) are exempted from PET."
  },
  {
    question: "Can I apply without guide consent?",
    answer:
      "No, guide consent (in MU format) is mandatory before appearing for the departmental interview."
  },
  {
    question: "What is the validity of the PET score?",
    answer:
      "The PET qualification is valid for 3 years from the date of result declaration."
  },
  {
    question: "Is part-time PhD allowed while working?",
    answer:
      "Yes, but you must provide an NOC from your employer and ideally have 2+ years of relevant experience."
  },
  {
    question: "How many publications are required before thesis submission?",
    answer:
      "At least one UGC-CARE or Scopus-indexed publication is mandatory before submitting the synopsis."
  }
];


const MumbaiPhDPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);
  return (
    <div className="mu-layout">
      {/* Left Sidebar - Quick Links */}
      <div className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#details">University Details</a></li>
          <li><a href="#faculty">Faculty & Research</a></li>
          <li><a href="#admission">Admission & Eligibility</a></li>
          <li><a href="#checklist">Document Checklist</a></li>
          <li><a href="#experience">Work Experience</a></li>
          <li><a href="#facilities">Research Facilities</a></li>
          <li><a href="#funding">Fellowships</a></li>
          <li><a href="#exam">PET Format</a></li>
          <li><a href="#eligibility">Eligibility</a></li>
          <li><a href="#modes">PhD Modes</a></li>
          <li><a href="#timeline">Admission Timeline</a></li>
          <li><a href="#fees">Fee Structure</a></li>
          <li><a href="#compliance">Compliance</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="mu-container">
        <h1>🏛️ University of Mumbai – PhD Admission Overview 2025</h1>

        <section className="section-block" id="details">
          <h2>University Details</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> University of Mumbai</p>
              <p><strong>Address:</strong> University of Mumbai, Fort, Mumbai – 400032</p>
              <p><strong>Website:</strong> <a href="https://www.mu.ac.in" target="_blank" rel="noreferrer">www.mu.ac.in</a></p>
            </div>
          </div>
        </section>

        <section className="section-block" id="faculty">
          <h2>📊 Faculty Depth & Research Infrastructure</h2>
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Current Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Scholarly Output</td><td>3000+ Scopus-indexed publications (2019–24), H-index 175+</td></tr>
              <tr><td>Funding Footprint</td><td>₹110+ crore from DST, ICSSR, CSIR, AICTE, DBT, CSR</td></tr>
              <tr><td>Student-to-Guide Ratio</td><td>Capped at 8:1</td></tr>
              <tr><td>Infrastructure</td><td>SEM, AFM, ICP-MS labs; 128 TF HPC cluster; 1,700+ e-journals</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section-block" id="admission">
          <h2>🧾 Admission Mechanics & Eligibility</h2>
          <ul>
            <li>PET includes 2 papers: Research Methodology & Subject Aptitude (50% qualifying mark)</li>
            <li><strong>Exemptions:</strong> JRF, GATE, GPAT, SET, MPhil (with coursework)</li>
            <li><strong>Guide Consent:</strong> Required before departmental interview</li>
            <li><strong>Seat Notification:</strong> Published department-wise post Academic Council ratification</li>
          </ul>
        </section>

        <section className="section-block" id="checklist">
          <h2>📂 Core Document Checklist</h2>
          <ul>
            <li>Online PET application & fee receipt</li>
            <li>Statement of Purpose / 1,000-word concept note</li>
            <li>PG & UG consolidated mark-sheets</li>
            <li>Category or EWS certificate (if applicable)</li>
            <li>Entrance-exemption proof (JRF/GATE/SET)</li>
            <li>Guide consent letter (MU format)</li>
            <li>Government ID (Aadhaar/PAN/Passport)</li>
            <li>Employer NOC (for part-time route)</li>
          </ul>
        </section>

        <section className="experience-modes" id="experience">
          <h2>💼 Work-Experience Considerations</h2>
          <div className="experience-cards">
            <div className="card">
              <h4>Full-time:</h4>
              <p>Work experience is not mandatory</p>
            </div>
            <div className="card">
              <h4>Part-time / In-service:</h4>
              <p>Requires NOC from employer and at least 2 years of relevant professional experience</p>
            </div>
          </div>
        </section>

        <section className="section-block" id="facilities">
          <h2>🏛️ Research Facilities & Collaborations</h2>
          <ul>
            <li>Rajabai Library (24×7), 5 satellite libraries, Turnitin access</li>
            <li>Labs: Kalina Nanofab Cleanroom, AI Robotics (Thane), Ocean Studies (Alibag)</li>
            <li>MoUs with BARC, IIT Bombay, NSE Labs, British Council</li>
          </ul>
        </section>

        <section className="section-block" id="funding">
          <h2>🎓 Fellowships & Funding</h2>
          <table>
            <thead>
              <tr><th>Scheme</th><th>Monthly Stipend</th><th>Duration</th></tr>
            </thead>
            <tbody>
              <tr><td>University Research Fellowship</td><td>₹8,000–₹12,000</td><td>36 months</td></tr>
              <tr><td>UGC-JRF / CSIR-SRF</td><td>₹37,000–₹42,000</td><td>60 months</td></tr>
              <tr><td>DST-INSPIRE</td><td>₹31,000 + HRA</td><td>60 months</td></tr>
              <tr><td>Project Assistants (ICSSR/RUSA)</td><td>₹18,000–₹25,000</td><td>Project-based</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section-block" id="exam">
          <h2>📝 PET Examination Format</h2>
          <ul>
            <li>Held twice: January & July</li>
            <li>Paper 1: Research Aptitude (50 marks) | Paper 2: Subject-specific (50 marks)</li>
            <li><strong>Pass Mark:</strong> 50% (45% for SC/ST/PwD)</li>
          </ul>
        </section>

        <section className="section-block" id="eligibility">
          <h2>📌 Eligibility Criteria</h2>
          <ul>
            <li>Master’s degree with ≥ 55% (50% for reserved)</li>
            <li>MPhil holders with coursework may directly attend interview (PET waived)</li>
            <li>No experience needed for full-time</li>
            <li>Part-time: NOC & 2 years’ relevant experience preferred</li>
          </ul>
        </section>

        <section className="section-block" id="modes">
          <h2>📁 PhD Modes & Documentation</h2>
          <ul>
            <li>Full-Time: 3–6 years | Part-Time: 4–6 years</li>
            <li>Coursework in 1st year; quarterly progress reports for part-time</li>
            <li><strong>Documents:</strong> SoP, Transcripts, ID proof, PET/JRF proof, Guide consent, Category certificate</li>
          </ul>
        </section>

        <section className="section-block" id="timeline">
          <h2>📆 Admission Timeline (2025–26)</h2>
          <table>
            <thead>
              <tr><th>Phase</th><th>Winter Cycle</th><th>Monsoon Cycle</th></tr>
            </thead>
            <tbody>
              <tr><td>PET Notification</td><td>November</td><td>May</td></tr>
              <tr><td>Form Submission</td><td>Nov–Dec</td><td>May–Jun</td></tr>
              <tr><td>Exam</td><td>January</td><td>July</td></tr>
              <tr><td>Interview</td><td>Feb–Mar</td><td>Aug</td></tr>
              <tr><td>Registration</td><td>Apr–May</td><td>Oct</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section-block" id="fees">
          <h2>💵 Fee Structure</h2>
          <table>
            <thead>
              <tr><th>Faculty</th><th>Tuition Fee (Annual)</th></tr>
            </thead>
            <tbody>
              <tr><td>Arts / Law / Commerce</td><td>₹10,000 – ₹15,000</td></tr>
              <tr><td>Science & Technology</td><td>₹27,000 – ₹35,000</td></tr>
              <tr><td>Thesis Submission</td><td>Approx. ₹10,000 (one-time)</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section-block" id="compliance">
          <h2>✅ Compliance & Publication</h2>
          <ul>
            <li>RPE (Research & Publication Ethics) course mandatory</li>
            <li>Turnitin similarity cap: &lt; 10%</li>
            <li>Minimum one UGC-CARE or Scopus publication required before synopsis</li>
          </ul>
        </section>
        <section  className="faq-section11">
          <h2> FAQs – PhD Research Proposal Writing Services</h2>
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
      </div>

      {/* Right Sidebar - SEO Keywords */}
      <div className="right-sidebar">
        <h3>SEO Keywords</h3>
        <ul className="tags">
          <li>University of Mumbai PhD</li>
          <li>MU PET 2025</li>
          <li>PhD Admission Mumbai</li>
          <li>Research at Mumbai University</li>
          <li>Mumbai PET Exemption</li>
        </ul>
      </div>
    </div>
  );
};

export default MumbaiPhDPage;

