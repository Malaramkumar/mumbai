import React from "react";
import "./university.scss";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Does TISS conduct its own entrance test for PhD?",
    answer: "No. From 2024–25, TISS considers NET score (70%) + personal interview (30%) for PhD admissions."
  },
  {
    question: "Is work experience mandatory?",
    answer: "Work experience is preferred but only mandatory for Executive PhD applicants (minimum 5 years in development sector)."
  },
  {
    question: "What are the publication requirements?",
    answer: "You must publish two Scopus/ABDC-B papers and one policy brief before synopsis submission."
  },
  {
    question: "Can I pursue PhD part-time at TISS?",
    answer: "Yes. TISS offers a part-time (weekend mode) PhD for working professionals."
  },
  {
    question: "Is the TISS PhD degree recognized globally?",
    answer: "Yes. TISS is UGC-recognized and globally respected for its excellence in social science research."
  }
];

const TissPhDPage = () => {
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
        <h1>Tata Institute of Social Sciences Mumbai – PhD Admission & Research Overview</h1>

        <section>
          <h2>University Details</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> Tata Institute of Social Sciences (TISS), Mumbai</p>
              <p><strong>Address:</strong> V. N. Purav Marg, Deonar, Mumbai 400088, Maharashtra, India</p>
              <p><strong>Website:</strong> <a href="https://www.tiss.edu" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>TISS comprises 11 Schools and 45 Centres with 200+ expert faculty in areas like Social Work, Policy, Education, and Labour Studies.</p>
          <div className="card-grid">
            <div className="card">Centre for Social & Organisational Leadership (CSOL)</div>
            <div className="card">Dedicated Data Analytics & Survey Research Lab</div>
            <div className="card">Field-driven projects in collaboration with UNICEF, ILO, WHO</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Mechanics & Eligibility Nuances</h2>
          <p>TISS now follows a NET + Interview model for doctoral admission, replacing the previous RAT system.</p>
          <div className="list-row">
            <div className="list-card">70% weightage to NET score, 30% to interview</div>
            <div className="list-card">Minimum 55% in a relevant Master’s degree</div>
            <div className="list-card">5% relaxation for SC/ST/OBC candidates</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Research Facilities & Collaborations</h2>
          <li>MoUs with SAARC universities for joint supervision</li>
          <li>Field-action projects with major UN agencies and NGOs</li>
          <li>Data access to CMIE, NSSO, and NCDS archives</li>
        </section>

        <section>
          <h2>Library & Digital Resources</h2>
          <ul>
            <li>Sir Dorabji Tata Memorial Library with 3.5 lakh volumes</li>
            <li>HeinOnline, Westlaw, JSTOR, Sage</li>
            <li>Remote access for registered PhD students</li>
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
                <td>ICSSR JRF</td>
                <td>₹31,000 → ₹35,000/month + HRA</td>
              </tr>
              <tr>
                <td>Teaching Assistantship</td>
                <td>₹18,000/month (limited availability)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Entrance Selection Process</h2>
          <ul>
            <li>UGC-NET score (mandatory) – 70% weight</li>
            <li>Personal Interview – 30% weight</li>
          </ul>
        </section>

        <section>
          <h3>🎓 Academic Qualification Requirements</h3>
          <ul>
            <li>Master’s degree in relevant social-science domain</li>
            <li>Minimum 55% (5% relaxation for reserved categories)</li>
          </ul>
        </section>

        <section className="experience-modes">
          <h2>💼 Work Experience & PhD Modes</h2>
          <div className="experience-cards">
            <div className="card">
              <h4>🌱 Preferred</h4>
              <p>Experience is not mandatory but strengthens your profile.</p>
            </div>
            <div className="card">
              <h4>📅 Executive PhD</h4>
              <p>Requires minimum 5 years of development-sector experience.</p>
            </div>
          </div>
        </section>

        <section className="delivery">
          <h3>🕘 PhD Delivery Modes</h3>
          <ul>
            <li><strong>Full-time:</strong> 4–6 years</li>
            <li><strong>Part-time (weekend):</strong> 5–7 years</li>
          </ul>
        </section>

        <section className="checklist-section">
          <h2>Documentation Checklist</h2>
          <ul className="checklist">
            <li>UGC-NET Scorecard</li>
            <li>Statement of Purpose (1000 words)</li>
            <li>Two Recommendation Letters</li>
            <li>Work Experience NOC (if employed)</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>General Application Timeline</h2>
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Period</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>NET</td>
                <td>June</td>
              </tr>
              <tr>
                <td>Short-list</td>
                <td>August</td>
              </tr>
              <tr>
                <td>Interview</td>
                <td>September</td>
              </tr>
              <tr>
                <td>Final Offers</td>
                <td>October</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Fee Structure</h2>
          <ul>
            <li>Application: ₹1,500</li>
            <li>Registration: ₹12,000</li>
            <li>Tuition Fee: ₹25,000/year</li>
            <li>Thesis Submission: ₹20,000</li>
          </ul>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>Two Scopus/ABDC-B research papers required</li>
            <li>One policy brief submission mandatory</li>
            <li>Turnitin similarity must be ≤ 12%</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi Research Institute: Your Success Partner</h2>
          <p>We empower your PhD success journey through:</p>
          <ul>
            <li>NET coaching and SoP support</li>
            <li>Research paper guidance & publication mentoring</li>
            <li>Mock interview prep and proposal help</li>
          </ul>
          <strong>“From NET to Narrative – Narpavi Walks With You at TISS”</strong>
        </section>

        <section className="faq-section11">
          <h2> FAQs – PhD Admission at TISS</h2>
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
            <li>TISS</li>
            <li>PhD Mumbai</li>
            <li>Social Sciences</li>
            <li>UGC NET</li>
            <li>Executive PhD</li>
          </ul>
      </aside>
    </div>
  );
};

export default TissPhDPage;

