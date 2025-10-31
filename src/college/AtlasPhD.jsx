import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./university.scss";

const faqs = [
  {
    question: "Does ATLAS offer interdisciplinary PhDs?",
    answer: "Yes. ATLAS strongly encourages interdisciplinary proposals in Design, Management, and Technology."
  },
  {
    question: "Is the ARAT exam mandatory for all applicants?",
    answer: "Yes. All candidates must appear for ARAT unless exempted under special cases by the university."
  },
  {
    question: "Are there funding options for full-time scholars?",
    answer: "Yes. Select internal scholarships are available (₹12,000–₹20,000/month) along with project funds and CSR fellowships."
  },
  {
    question: "Can entrepreneurs apply for PhD at ATLAS?",
    answer: "Yes. Entrepreneurs and senior managers are eligible for industry-linked part-time or hybrid PhD modes."
  },
  {
    question: "How does Narpavi support ATLAS applicants?",
    answer: "We match themes with ATLAS's research focus, assist with SoP, and provide timeline reminders for ARAT and interviews."
  }
];

const AtlasPhDPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#admission">Admission Process</a></li>
          <li><a href="#facilities">Research Facilities</a></li>
          <li><a href="#funding">Funding & Scholarships</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#cta">Narpavi Help</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>ATLAS SkillTech University – PhD Research & Admission Landscape</h1>

        <section>
          <h2>University Details</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> ATLAS SkillTech University</p>
              <p><strong>Address:</strong> 1016, G Block, BKC, Mumbai – 400070</p>
              <p><strong>Website:</strong> <a href="https://atlasuniversity.edu.in" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>As one of Mumbai’s newest yet most progressive institutions, ATLAS focuses on industry-integrated research in Design, Management, Entrepreneurship, and Tech.</p>
          <div className="card-grid">
            <div className="card">80+ core PhD/industry-experienced faculty</div>
            <div className="card">Labs: Design Lab, FinTech Innovation, AI & IoT</div>
            <div className="card">Mentorship by global experts & advisors</div>
          </div>
        </section>

        <section>
          <h3>🎓 Academic Qualification</h3>
          <ul>
            <li>Master’s degree (min 55%) in allied fields</li>
            <li>Foreign degrees require AIU equivalency</li>
            <li>NET/JRF/GATE candidates may directly interview</li>
          </ul>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Mechanics</h2>
          <div className="list-row">
            <div className="list-card">Annual Intake (June–August)</div>
            <div className="list-card">ATLAS Research Aptitude Test (ARAT) + Interview</div>
            <div className="list-card">Interdisciplinary proposals welcome</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Research Facilities</h2>
          <ul>
            <li>Design Thinking, Business Analytics, Urban Planning centers</li>
            <li>AI-enabled learning platforms</li>
            <li>Remote cloud access to datasets</li>
          </ul>
        </section>

            <section id="funding" className="funding-table">
          <h2>Funding & Fellowships</h2>
          <table>
            <thead>
              <tr><th>Type</th><th>Details</th></tr>
            </thead>
            <tbody>
              <tr><td>Internal Scholarships</td><td>₹12,000–₹20,000/month</td></tr>
              <tr><td>Faculty Projects</td><td>Project-based funding</td></tr>
              <tr><td>CSR/Incubation</td><td>Via startup grants</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Library & Collaborations</h2>
          <ul>
            <li>25,000+ titles</li>
            <li>ACM, EBSCOhost, Emerald subscriptions</li>
            <li>Startup partnerships for field research</li>
          </ul>
        </section>

        

        <section className="experience-modes">
          <h2>💼 Work Experience & PhD Modes</h2>
          <div className="experience-cards">
            <div className="card">
              <h4>Preferred, Not Mandatory</h4>
              <p>Work experience benefits part-time/hybrid mode applicants.</p>
            </div>
            <div className="card">
              <h4>Full-time / Part-time / Hybrid</h4>
              <p>Weekend residencies + online mentoring available in hybrid format.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Documentation</h2>
          <ul>
            <li>Statement of Purpose + Research Intent</li>
            <li>PG Transcripts</li>
            <li>Resume for part-time</li>
            <li>Recommendation Letters (optional)</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Timeline</h2>
          <table>
            <thead>
              <tr><th>Stage</th><th>Month</th></tr>
            </thead>
            <tbody>
              <tr><td>Application</td><td>March–May</td></tr>
              <tr><td>ARAT</td><td>June</td></tr>
              <tr><td>Interview</td><td>July</td></tr>
              <tr><td>Results</td><td>July–August</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Fee Structure</h2>
          <ul>
            <li>Application Fee: ₹2,000</li>
            <li>Tuition: ₹1.2–₹1.5 Lakhs/year</li>
            <li>Thesis: ₹30,000 approx.</li>
          </ul>
        </section>

        <section>
          <h2>Additional Requirements</h2>
          <ul>
            <li>Minimum 2 research papers (Indexed/Peer-reviewed)</li>
            <li>Focus on startup-linked, applied, or design research</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>🌟 Narpavi Research Institute’s Role in Your ATLAS PhD Journey</h2>
          <h3>Narpavi supports PhD aspirants targeting ATLAS by:</h3>
          <ul>
            <li>Matching research interests with cutting-edge themes </li>
            <li>Drafting strategic SoP and research intent notes tailored for ATLAS expectations</li>
            <li>Structuring proposals with design-driven or interdisciplinary themes</li>
            <li>Ensuring timely reminders for ATLAS deadlines</li>
          </ul>
          <strong>“Design, Data & Doctorate – Narpavi Navigates It All”</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – ATLAS SkillTech PhD Admission</h2>
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
            <li>ATLAS PhD</li>
            <li>PhD in Mumbai</li>
            <li>ARAT Exam</li>
            <li>Interdisciplinary PhD</li>
            <li>Narpavi Guidance</li>
          </ul>
      </aside>
    </div>
  );
};

export default AtlasPhDPage;
