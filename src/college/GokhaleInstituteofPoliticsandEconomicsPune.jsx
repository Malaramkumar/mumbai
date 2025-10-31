import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Does GIPE require an entrance test for PhD?",
    answer: "Yes. GIPE conducts its own PhD Entrance Test (GIPE-PET), followed by a personal interview. UGC-NET, JRF, or MPhil holders are exempt."
  },
  {
    question: "What is the core specialization of GIPE?",
    answer: "GIPE specializes in Economics, Public Finance, Population Studies, and Trade. It is one of India's oldest research institutes in economics."
  },
  {
    question: "Is financial support available for PhD students?",
    answer: "Yes. GIPE supports UGC/ICSSR/JRF scholars and offers limited internal Teaching Assistantships."
  },
  {
    question: "What data sources does GIPE provide access to?",
    answer: "Scholars get access to NSSO, CMIE, EPW research data, and global datasets through UNDP and IGIDR linkages."
  },
  {
    question: "What is the admission timeline?",
    answer: "GIPE conducts PET in May, interviews in June, and final offers are released by July."
  }
];

const GIPEPhDPage = () => {
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
        <h1>Gokhale Institute of Politics and Economics (GIPE), Pune – PhD Overview</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> Gokhale Institute of Politics and Economics (GIPE)</p>
              <p><strong>Address:</strong> BMCC Road, Deccan Gymkhana, Pune – 411004</p>
              <p><strong>Website:</strong> <a href="https://www.gipe.ac.in" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Strength</h2>
          <p>GIPE is India’s oldest economics research-only university, with globally reputed economists and specialized centres in applied policy and data sciences.</p>
          <div className="card-grid">
            <div className="card">60+ PhD guides with experience at RBI, UNDP, NITI Aayog</div>
            <div className="card">Centres for Population Studies, Public Finance, Trade Economics</div>
            <div className="card">Access to panel datasets and research consortiums</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Process</h2>
          <p>GIPE conducts an annual PhD Entrance Test (PET), followed by an interview. Exemptions available for qualified candidates.</p>
          <div className="list-row">
            <div className="list-card">PG in Economics or allied domain with ≥ 55%</div>
            <div className="list-card">GIPE-PET (objective test) + Personal Interview</div>
            <div className="list-card">NET/JRF/MPhil holders are exempt from PET</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Data Access & Collaborations</h2>
          <ul>
            <li>Research access: NSSO, CMIE, EPW, UNDP datasets</li>
            <li>MoUs with LSE, IGIDR, and University of Warwick</li>
            <li>Collaborative research projects with public policy think tanks</li>
          </ul>
        </section>

        <section id="funding" className="funding-table">
          <h2>Funding & Fellowships</h2>
          <table>
            <thead>
              <tr>
                <th>Fellowship</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UGC/ICSSR/JRF</td>
                <td>Standard national fellowships for eligible candidates</td>
              </tr>
              <tr>
                <td>GIPE TA</td>
                <td>Limited Teaching Assistantships (₹15,000–₹20,000/month)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="checklist-section">
          <h2>Application Requirements</h2>
          <ul className="checklist">
            <li>PG Transcript (Economics or related field)</li>
            <li>UGC-NET/JRF certificate (if applicable)</li>
            <li>Research Proposal (1,000–1,500 words)</li>
            <li>Updated CV</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Timeline & Fee Structure</h2>
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PET Exam</td>
                <td>May</td>
              </tr>
              <tr>
                <td>Interviews</td>
                <td>June</td>
              </tr>
              <tr>
                <td>Final Offers</td>
                <td>July</td>
              </tr>
              <tr>
                <td>Tuition</td>
                <td>₹30,000/year</td>
              </tr>
              <tr>
                <td>Thesis Fee</td>
                <td>₹15,000</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>Ideal for scholars pursuing applied economics, trade policy, or population research</li>
            <li>Publication in journals like EPW is highly encouraged</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>Why Choose Narpavi at GIPE?</h2>
          <p>Narpavi supports GIPE scholars from research design to data analysis and publishing.</p>
          <ul>
            <li>Advanced regression modelling & econometrics mentoring</li>
            <li>Support for ICSSR & UGC grant proposals</li>
            <li>Workshops for EPW journal publishing</li>
          </ul>
          <strong>“From data prep to thesis curation – Narpavi walks with GIPE economists at every step.”</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – GIPE PhD Admissions</h2>
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
            <li>PhD in Economics</li>
            <li>GIPE Pune</li>
            <li>Public Policy</li>
            <li>Data Analytics</li>
            <li>ICSSR</li>
          </ul>
      </aside>
    </div>
  );
};

export default GIPEPhDPage;
