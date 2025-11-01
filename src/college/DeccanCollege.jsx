import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Does Deccan College offer full-time and part-time PhDs?",
    answer: "Yes, full-time (3–6 years) and part-time (4–7 years with NOC) options are available for eligible scholars."
  },
  {
    question: "Is PET mandatory for all applicants?",
    answer: "PET is mandatory unless you’re UGC-NET/JRF or MPhil qualified, in which case you can directly attend the interview."
  },
  {
    question: "What are the research strengths of Deccan College?",
    answer: "Deccan College excels in Archaeology, Indology, Linguistics, Lexicography, and Ancient Indian History."
  },
  {
    question: "Are research fellowships available?",
    answer: "Yes. Internal assistantships (up to ₹18,000/month) and external fellowships like UGC, ICHR, and ICCSR are available."
  },
  {
    question: "What’s the PhD admission timeline?",
    answer: "Applications close in May. PET in June. Final interviews and admission decisions are completed by August."
  }
];

const DeccanCollegePhDPage = () => {
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
        <h1>Deccan College Post-Graduate and Research Institute, Pune – PhD Guide</h1>

        <section>
          <h2>University Details</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> Deccan College Post-Graduate and Research Institute</p>
              <p><strong>Address:</strong> Deccan College Road, Yerawada, Pune – 411006, Maharashtra</p>
              <p><strong>Website:</strong> <a href="http://www.dcpune.ac.in" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>Deccan College is a heritage academic institution with national recognition in the study of ancient Indian culture, linguistics, and archaeology.</p>
          <div className="card-grid">
            <div className="card">50+ experienced research faculty and UGC-recognized supervisors</div>
            <div className="card">Archaeology Laboratory Complex with 3D scanners, dating equipment, and conservation units</div>
            <div className="card">Asia's only Center for Lexicography & Epigraphy</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Mechanics & Eligibility</h2>
          <p>Admissions are conducted annually through a PET followed by an interview.</p>
          <div className="list-row">
            <div className="list-card">PG degree with ≥ 55% marks (50% for reserved categories)</div>
            <div className="list-card">UGC-NET/JRF or MPhil holders are exempt from PET</div>
            <div className="list-card">PET followed by departmental research interview</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Library & Digital Archives</h2>
          <ul>
            <li>2,00,000+ rare books and palm-leaf manuscripts</li>
            <li>Specialized catalogues in Sanskrit, Prakrit, and classical texts</li>
            <li>Access to JSTOR, Indiastat, and archaeological archives</li>
          </ul>
        </section>

        <section id="funding" className="funding-table">
          <h2>Funding & Fellowships</h2>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Internal Research Assistantship</td>
                <td>Up to ₹18,000 per month (based on merit and availability)</td>
              </tr>
              <tr>
                <td>External Fellowships</td>
                <td>Eligible for UGC, ICHR, ICCSR doctoral schemes</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="experience-modes">
          <h2>💼 PhD Delivery Modes</h2>
          <div className="experience-cards">
            <div className="card">
              <h4>🎓 Full-Time Mode</h4>
              <p>Minimum 3 years, maximum 6 years. No work experience required.</p>
            </div>
            <div className="card">
              <h4>🕴 Part-Time Mode</h4>
              <p>4 to 7 years. Requires minimum 3 years of experience and NOC from employer.</p>
            </div>
          </div>
        </section>

        <section className="checklist-section">
          <h2>Documentation Checklist</h2>
          <ul className="checklist">
            <li>Application Form</li>
            <li>Postgraduate Marksheets</li>
            <li>ID Proof and Caste Certificate (if applicable)</li>
            <li>Research Proposal (1,500–2,000 words)</li>
            <li>NOC for Part-Time applicants</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Timeline & Fees</h2>
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application Deadline</td>
                <td>May 2025</td>
              </tr>
              <tr>
                <td>PET Exam</td>
                <td>June 2025</td>
              </tr>
              <tr>
                <td>Final Admission</td>
                <td>August 2025</td>
              </tr>
              <tr>
                <td>Application Fee</td>
                <td>₹1,000</td>
              </tr>
              <tr>
                <td>Annual Tuition</td>
                <td>₹45,000</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>Ideal for research in cultural heritage, languages, archaeology, and classical literature</li>
            <li>Dedicated Sanskrit and Epigraphy archives aid primary source-based research</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi Research Institute @ Deccan College</h2>
          <p>With Deccan’s unique focus on cultural and linguistic heritage, Narpavi brings in-depth academic scaffolding: proposal editing, ICHR grant documentation, and final thesis curation.</p>
          <strong>“For scholars working on rare subjects, our mentorship and archival research support are unmatched.”</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – Deccan College PhD Admission</h2>
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
            <li>Deccan College</li>
            <li>Archaeology</li>
            <li>Indology</li>
            <li>UGC PET</li>
          </ul>
        
      </aside>
    </div>
  );
};

export default DeccanCollegePhDPage;

