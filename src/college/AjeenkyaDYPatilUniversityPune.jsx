import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEO from "../assets/SEO";
const faqs = [
  {
    question: "What is the eligibility for PhD at ADYPU?",
    answer: "You must have a postgraduate degree (minimum 55%). A 5% relaxation is provided for reserved categories as per UGC norms."
  },
  {
    question: "Is the ADYPU-PET compulsory?",
    answer: "Yes, unless you have qualified NET/GATE or hold an MPhil degree. PET consists of 100 marks split across two parts."
  },
  {
    question: "Are fellowships available?",
    answer: "Yes. Internal fellowships are ₹20,000 per month. Industry Research Assistantships go up to ₹35,000 per month."
  },
  {
    question: "What is the admission timeline?",
    answer: "Applications open Nov–Jan, PET is held in February, and final results are declared in March."
  },
  {
    question: "Is there international collaboration?",
    answer: "Yes. ADYPU has a Global Mentor Program with Coventry University (UK) and HTW Berlin (Germany)."
  }
];
const keywords = [
  "ADYPU PhD Admission 2025",
  "Ajeenkya DY Patil University PhD",
  "ADYPU PhD Eligibility",
  "ADYPU PhD Entrance Exam PET",
  "PhD in Pune Universities",
  "ADYPU PhD Fees 2025",
  "ADYPU Research Programs",
  "ADYPU PhD Fellowship",
  "ADYPU PET Syllabus",
  "PhD Admission Pune"
];

const AdypuPhDPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
    <SEO
    title="ADYPU PhD Admission 2025 | Eligibility, PET Exam, Research & Fees"
    description="Complete guide for Ajeenkya D. Y. Patil University PhD admission including eligibility, PET exam details, fees, research labs, collaborations, and fellowships."
    url="/colleges/ajeenkya-d-y-patil-university-pune"
    image="/assets/university-default-banner.jpg"
    keywords={keywords}
    faqs={faqs}
    />

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
        <h1>Ajeenkya D. Y. Patil University (ADYPU), Pune – PhD Admission & Research Overview</h1>

        <section>
          <h2>University Details</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> Ajeenkya D. Y. Patil University</p>
              <p><strong>Address:</strong> Charholi Bk., via Lohegaon, Pune 412105</p>
              <p><strong>Website:</strong> <a href="https://adypu.edu.in" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>ADYPU supports a multidisciplinary research ecosystem. Scholars benefit from advanced labs and hands-on learning environments.</p>
          <div className="card-grid">
            <div className="card">Interdisciplinary supervision in Design, AI, Law & Management</div>
            <div className="card">ADYPU Design FabLab & VR-XR Studio</div>
            <div className="card">100 TF High-Performance Computing Cluster</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Mechanics & Eligibility</h2>
          <p>ADYPU conducts PET annually followed by a personal interview and aptitude assessment.</p>
          <div className="list-row">
            <div className="list-card">PG Degree with ≥ 55% marks (5% relaxation for reserved categories)</div>
            <div className="list-card">Exemption from PET for NET, GATE, or MPhil holders</div>
            <div className="list-card">PET Score: Minimum 50% to qualify</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Research Facilities & Collaborations</h2>
          <ul>
            <li>Global Mentor Program with Coventry University & HTW Berlin</li>
            <li>Design Prototyping Labs, AR/VR Studios</li>
            <li>Applied AI & ML labs integrated with industry projects</li>
          </ul>
        </section>

        <section>
          <h2>Library & Digital Resources</h2>
          <ul>
            <li>Curated research journals in Design, Technology, Management</li>
            <li>Access to Delnet, Scopus, JSTOR</li>
            <li>Remote VPN access for enrolled scholars</li>
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
                <td>₹20,000 per month for eligible full-time scholars</td>
              </tr>
              <tr>
                <td>Industrial RAships</td>
                <td>Up to ₹35,000 per month via external collaborations</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Entrance Test – ADYPU-PET</h2>
          <ul>
            <li>100 marks test divided into two parts: Research Aptitude & Subject Specific</li>
            <li>PET followed by personal interview with research proposal pitch</li>
          </ul>
        </section>

        <section className="experience-modes">
          <h2>💼 Work Experience & PhD Modes</h2>
          <div className="experience-cards">
            <div className="card">
              <h4>🎓 Full-Time Mode</h4>
              <p>For scholars able to dedicate themselves fully to research on campus</p>
            </div>
            <div className="card">
              <h4>🏢 Executive Mode</h4>
              <p>Designed for working professionals with flexible schedules and industry collaboration</p>
            </div>
          </div>
        </section>

        <section className="delivery">
          <h3>🕘 PhD Delivery Modes</h3>
          <ul>
            <li><strong>Full-time:</strong> 3–6 years</li>
            <li><strong>Part-time/Executive:</strong> 4–7 years (with NOC)</li>
          </ul>
        </section>

        <section className="checklist-section">
          <h2>Documentation Checklist</h2>
          <ul className="checklist">
            <li>Application Form</li>
            <li>Postgraduate Degree and Marksheet</li>
            <li>Research Proposal (1,000 – 2,000 words)</li>
            <li>Experience Certificate (for part-time)</li>
            <li>Photo ID & Address Proof</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Application Timeline (2025)</h2>
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Applications Open</td>
                <td>November – January</td>
              </tr>
              <tr>
                <td>PET Exam</td>
                <td>February 2025</td>
              </tr>
              <tr>
                <td>Results Declared</td>
                <td>March 2025</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Fee Structure</h2>
          <ul>
            <li>Application Fee: ₹1,500</li>
            <li>Tuition Fee: ₹1.2 Lakh per year</li>
            <li>Thesis Submission Fee: ₹30,000</li>
          </ul>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>Two quality publications are recommended during the course</li>
            <li>All research work is evaluated via Turnitin (≤10% similarity)</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>How Narpavi Supercharges ADYPU Scholars</h2>
          <p>From prototype budgeting for FabLab to co-designing funding decks, Narpavi’s cross-disciplinary team synchronises proposal, research writing and publication milestones—helping you hit ADYPU’s innovation benchmarks without derailing your work.</p>
          <strong>“From Admission to Acceleration – Narpavi is with you all the way”</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – PhD at Ajeenkya D. Y. Patil University</h2>
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
         <h3> Keywords</h3>
                <ul>{keywords.map((k) => <li key={k}>{k}</li>)}</ul>
      </aside>
    </div>
  );
};

export default AdypuPhDPage;

