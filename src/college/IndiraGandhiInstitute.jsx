import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What PhD programs are offered by IGIDR?",
    answer: "IGIDR offers a PhD in Development Studies with an economics-anchored, multidisciplinary approach."
  },
  {
    question: "Is prior work experience mandatory for admission?",
    answer: "Not mandatory, but preferred for energy/environment tracks. Mid-career professionals may apply as part-time researchers."
  },
  {
    question: "Is financial support available for full-time PhD students?",
    answer: "Yes. Scholars receive ₹31,000–₹35,000/month with annual contingency and hostel subsidies."
  },
  {
    question: "What is the structure of the entrance test?",
    answer: "It is a 2-hour CBT with sections on Maths, Economics, Logical Reasoning, and Writing. Negative marking applies."
  },
  {
    question: "Does IGIDR require publications before thesis submission?",
    answer: "Yes. Two WOS-listed publications are mandatory before the pre-submission seminar."
  }
];
const keywords = [
  "IGIDR PhD Admission 2025",
  "IGIDR Development Studies PhD",
  "IGIDR Entrance Test Syllabus",
  "PhD Economics Mumbai",
  "IGIDR Fellowship 2025",
  "IGIDR Eligibility Criteria",
  "IGIDR Fees Structure",
  "IGIDR Research Labs",
  "IGIDR PhD Selection Process",
  "RBI IGIDR Research Institute"
];
const IGIDRPhD = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
       <SEO
        title="IGIDR Mumbai PhD Admission 2025 | Development Studies, Entrance Test, Fees & Fellowship"
        description="Complete guide to IGIDR Mumbai PhD 2025 — eligibility, entrance test pattern, funding, fees, research facilities, and application timeline."
        url="/colleges/igidr-phd"
        image="/assets/university-default-banner.jpg"
        keywords={keywords}
        faqs={faqs}
      />
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#admission">Admission</a></li>
          <li><a href="#facilities">Facilities</a></li>
          <li><a href="#funding">Funding</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#cta">Narpavi Support</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>IGIDR Mumbai – PhD in Development Studies Overview</h1>

        <section className="info-box">
          <h2>🏛️ University Snapshot</h2>
          <div className="info-grid">
            <p><strong>Full Name:</strong> Indira Gandhi Institute of Development Research (IGIDR)</p>
            <p><strong>Address:</strong> Gen. Vaidya Marg, Goregaon (E), Mumbai 400065</p>
            <p><strong>Website:</strong> <a href="http://www.igidr.ac.in" target="_blank" rel="noreferrer">Visit Website</a></p>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>IGIDR’s eco-friendly campus houses:</p>
          <div className="card-grid">
            <div className="card">Econometrics Lab & GIS Suite</div>
            <div className="card">500-seat Auditorium for Policy Dialogues</div>
            <div className="card">40+ Adjunct Economists & Visiting Scholars</div>
          </div>
        </section>

       
        <section className="info-table-grid">
          <div className="info-card">
            <h3>🔬 Research & Collaborations</h3>
            <ul>
              <li>RBI & IMF Macro Models</li>
              <li>Energy Lab with TIMES, MESSAGE</li>
              <li>World Bank, UNDP, ADB tie-ups</li>
            </ul>
          </div> 
          
          <section id="admission" className="horizontal-list">
          <h2>Admission Process & Eligibility</h2>
          <div className="list-row">
            <div className="list-card">PhD in Development Studies (Multidisciplinary)</div>
            <div className="list-card">Online Entrance → Proposal & Interview</div>
            <div className="list-card">55% in MA/MSc Economics or 60% in BTech/ME/MTech</div>
          </div>
        </section>

          <div className="info-card">
            <h3>📚 Library & Data Services</h3>
            <ul>
              <li>125k+ Volumes, 300+ Journals</li>
              <li>Access: JSTOR, EconLit, CEIC</li>
              <li>Datasets: CMIE, NFHS, NSSO</li>
            </ul>
          </div>
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
                <td>Scholarship</td>
                <td>₹31,000–₹35,000/month + ₹25,000/year contingency</td>
              </tr>
              <tr>
                <td>Hostel Subsidy</td>
                <td>Need-based accommodation subsidy</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Entrance Test – Format</h2>
          <ul>
            <li>2-hour Computer Based Test</li>
            <li>Maths (30%), Economics (40%), Reasoning (20%), Writing (10%)</li>
            <li>Negative marking: –0.25 per wrong answer</li>
          </ul>
        </section>

        <section className="checklist-section">
          <h2>Documentation Checklist</h2>
          <ul className="checklist">
            <li>Online Application Form</li>
            <li>SOP (500 words)</li>
            <li>Transcripts & Math proof at +2</li>
            <li>2 Academic References</li>
            <li>Category Certificate (if applicable)</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Application Timeline – 2025</h2>
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Application Window</td><td>Feb–Apr</td></tr>
              <tr><td>Entrance Test</td><td>May</td></tr>
              <tr><td>Interview</td><td>June</td></tr>
              <tr><td>Final List</td><td>July</td></tr>
              <tr><td>Orientation</td><td>August</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Fee Structure</h2>
          <ul>
            <li>Application: ₹1,000</li>
            <li>Registration: ₹16,000 (One-time)</li>
            <li>Tuition: ₹12,000/semester</li>
            <li>Hostel & Dining: ₹4,000/month</li>
            <li>Thesis Fee: ₹15,000</li>
          </ul>
        </section>

        <section>
          <h2>Additional Requirements</h2>
          <ul>
            <li>2 WOS-indexed publications before pre-submission</li>
            <li>4 hours/week assistance in teaching or tutorials</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi Research Institute Advantage</h2>
          <ul>
            <li>Python/R templates for CMIE, NFHS, NSSO</li>
            <li>Policy-anchored proposal support</li>
            <li>Conference & journal tier strategy</li>
          </ul>
          <strong>“Beat the 15% selection rate with Narpavi’s expert coaching.”</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – IGIDR PhD</h2>
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
          {keywords.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default IGIDRPhD;

