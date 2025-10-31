import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What are the eligibility criteria for MIT-WPU PhD?",
    answer: "Candidates must have a PG degree with at least 55% marks. Relaxation as per UGC norms is applicable for reserved categories."
  },
  {
    question: "Is WPU-RAT mandatory for all PhD applicants?",
    answer: "WPU-RAT is mandatory unless the candidate has cleared UGC-NET, GATE, CSIR-NET, or MPhil."
  },
  {
    question: "What research areas does MIT-WPU specialize in?",
    answer: "MIT-WPU is known for research in Peace Studies, Robotics, Renewable Energy, Cybersecurity, and Social Sciences."
  },
  {
    question: "Are scholarships available for PhD scholars?",
    answer: "Yes. Full-time PhD students may receive a ₹20,000/month Doctoral Fellowship. Industrial sponsorships are also available."
  },
  {
    question: "What is the PhD admission timeline?",
    answer: "Applications open in May, WPU-RAT is conducted in June, and results are announced by July."
  }
];

const MITWPUPhDPage = () => {
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
        <h1>Dr. Vishwanath Karad MIT World Peace University (MIT-WPU), Pune – PhD Overview</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> Dr. Vishwanath Karad MIT World Peace University (MIT-WPU)</p>
              <p><strong>Address:</strong> Kothrud, Paud Road, Pune – 411038, Maharashtra</p>
              <p><strong>Website:</strong> <a href="https://www.mitwpu.edu.in" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Capabilities</h2>
          <p>MIT-WPU brings together interdisciplinary research across Engineering, Management, Peace Studies, and Social Sciences.</p>
          <div className="card-grid">
            <div className="card">300+ recognized PhD supervisors across varied domains</div>
            <div className="card">Peace Studies Centre accredited by UNESCO and ICCR</div>
            <div className="card">Labs for Robotics, Renewable Energy, Cybersecurity & AI</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Process & Eligibility</h2>
          <p>Admissions are based on WPU-RAT followed by a research interview. Exemptions are available for national-level exam qualifiers.</p>
          <div className="list-row">
            <div className="list-card">PG degree with ≥ 55% marks (UGC norms applicable)</div>
            <div className="list-card">WPU-RAT + Interview & Research Proposal Evaluation</div>
            <div className="list-card">Exemptions for UGC-NET, GATE, CSIR-NET, MPhil</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Research Collaborations & Resources</h2>
          <ul>
            <li>MoUs with Georgia Tech, IET London & Peace Research Institute Oslo</li>
            <li>Central Research Lab with MATLAB, SPSS, AutoCAD</li>
            <li>Plagiarism check and conference funding support</li>
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
                <td>Doctoral Fellowship</td>
                <td>₹20,000/month for full-time researchers</td>
              </tr>
              <tr>
                <td>Industry Sponsorships</td>
                <td>Available through MIT-WPU’s incubation partners</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="checklist-section">
          <h2>Documentation Checklist</h2>
          <ul className="checklist">
            <li>PG Marksheets</li>
            <li>Statement of Purpose (1,000 words)</li>
            <li>ID Proof & Caste Certificate (if applicable)</li>
            <li>WPU-RAT scorecard (or NET/GATE if exempted)</li>
            <li>Research Proposal (optional at application stage)</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Timeline & Fees</h2>
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Applications Open</td>
                <td>May 2025</td>
              </tr>
              <tr>
                <td>WPU-RAT Exam</td>
                <td>June 2025</td>
              </tr>
              <tr>
                <td>Result Announcement</td>
                <td>July 2025</td>
              </tr>
              <tr>
                <td>Tuition Fee</td>
                <td>₹85,000/year</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>MIT-WPU supports both technical innovation and peace-oriented research</li>
            <li>Students receive support for publishing and conference participation</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi’s Role in Your MIT-WPU Research Journey</h2>
          <p>Whether you're pursuing innovation in solar engineering or world peace theory, Narpavi builds customized support:</p>
          <ul>
            <li>Statistical modeling & data analysis for social/technical research</li>
            <li>Proposal drafting, plagiarism check & journal submission</li>
            <li>Conference paper coaching & fellowship guidance</li>
          </ul>
          <strong>“We ensure your PhD work is not only published—but globally recognized.”</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – MIT-WPU PhD Admissions</h2>
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
            <li>PhD Pune</li>
            <li>MIT-WPU</li>
            <li>Peace Studies</li>
            <li>Engineering Research</li>
            <li>UGC NET</li>
          </ul>
      </aside>
    </div>
  );
};

export default MITWPUPhDPage;
