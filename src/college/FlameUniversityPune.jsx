import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Does FLAME University conduct an entrance test for PhD?",
    answer: "No. FLAME does not conduct an entrance exam. Shortlisting is based on academic record, research proposal, and interview. UGC-NET is preferred but not mandatory."
  },
  {
    question: "What are the key research domains?",
    answer: "Psychology, Public Policy, Economics, Humanities, Media & Communication, and Sustainability studies."
  },
  {
    question: "Is financial support available for FLAME PhD scholars?",
    answer: "Yes. Full-time scholars may receive up to ₹30,000/month along with research seed grants."
  },
  {
    question: "What is the Statement of Research Intent (SoR)?",
    answer: "It’s a 1500-word statement describing your intended research topic, rationale, relevance, and research methodology."
  },
  {
    question: "What is the PhD application cycle?",
    answer: "FLAME University accepts applications annually between April and July."
  }
];

const FLAMEPhDPage = () => {
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
        <h1>FLAME University, Pune – PhD Overview</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> FLAME University</p>
              <p><strong>Address:</strong> Lavale, Off Pune-Bangalore Highway, Pune – 412115, Maharashtra</p>
              <p><strong>Website:</strong> <a href="https://www.flame.edu.in" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Interdisciplinary Strength</h2>
          <p>FLAME brings a unique liberal arts approach to research, led by globally trained faculty and thematic centers of excellence.</p>
          <div className="card-grid">
            <div className="card">100+ faculty with degrees from Ivy League, Oxford, IIMs</div>
            <div className="card">Centers of Excellence in Behavioral Sciences, Data Sciences, and Sustainability</div>
            <div className="card">Research domains: Psychology, Economics, Media, Policy, Humanities</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Process</h2>
          <p>Admission is based on Statement of Research Intent, academic background, and an interview. There is no entrance exam.</p>
          <div className="list-row">
            <div className="list-card">PG degree with strong academic merit</div>
            <div className="list-card">Statement of Research Intent (1500 words)</div>
            <div className="list-card">UGC-NET preferred but not mandatory</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Facilities & Global Collaborations</h2>
          <ul>
            <li>Wharton Global Faculty Workshops (exclusive access)</li>
            <li>Research databases: EBSCO, Scopus, Emerald, ICPSR</li>
            <li>Library & digital repository for liberal arts research</li>
          </ul>
        </section>

        <section id="funding" className="funding-table">
          <h2>Fellowships & Research Support</h2>
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
                <td>Up to ₹30,000/month for full-time researchers</td>
              </tr>
              <tr>
                <td>Seed Grant</td>
                <td>Available for high-impact interdisciplinary research</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="checklist-section">
          <h2>Application Essentials</h2>
          <ul className="checklist">
            <li>Statement of Research Intent (1500 words)</li>
            <li>2 Letters of Recommendation</li>
            <li>Updated Curriculum Vitae</li>
            <li>Postgraduate Degree Transcripts</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Timeline & Fee</h2>
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application Window</td>
                <td>April – July (Annual Cycle)</td>
              </tr>
              <tr>
                <td>Fee</td>
                <td>₹1.2 Lakhs / year</td>
              </tr>
              <tr>
                <td>Selection Process</td>
                <td>Research Proposal Review + Interview</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>Research focus on storytelling, policy relevance, and qualitative methods</li>
            <li>High visibility publication strategy encouraged from Year 1</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>How Narpavi Accelerates PhDs at FLAME</h2>
          <p>FLAME’s narrative-style research demands more than data—it requires storytelling clarity and policy framing precision.</p>
          <ul>
            <li>Custom SoR editing & narrative flow enhancement</li>
            <li>Interdisciplinary research toolkit for liberal arts scholars</li>
            <li>Publication strategy & seed grant proposal support</li>
          </ul>
          <strong>“Your PhD should be a statement, not just a submission.”</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – FLAME PhD Admissions</h2>
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
            <li>FLAME University</li>
            <li>Social Sciences</li>
            <li>Research Proposal</li>
            <li>Liberal Arts</li>
          </ul>
      </aside>
    </div>
  );
};

export default FLAMEPhDPage;
