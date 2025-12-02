import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEO from ".././assets/SEO"
const faqs = [
  {
    question: "Does MIT-ADT require a design portfolio for PhD admission?",
    answer: "Yes, applicants to design-related PhD programs must submit a portfolio along with their concept note and appear for an interview."
  },
  {
    question: "Is UGC-NET or GATE mandatory?",
    answer: "Not mandatory. Candidates with UGC-NET, JRF, MPhil, or GATE are exempt from MIT-ADT-RAT. Others must appear for the entrance exam."
  },
  {
    question: "Does MIT-ADT offer PhD fellowships?",
    answer: "Yes. Full-time candidates may receive institute fellowships up to ₹20,000/month. Project-based RAships are also available."
  },
  {
    question: "Which areas of research are popular at MIT-ADT?",
    answer: "Sustainable Architecture, AI in Media, Traditional Knowledge Systems, and Transdisciplinary Design are key focus areas."
  },
  {
    question: "What’s the typical admission timeline?",
    answer: "Applications are open from January to March, with exams in April and interviews in May."
  }
];
const keywords = [
  "MIT ADT PhD Admission 2025",
  "MIT ADT Pune PhD",
  "PhD in Design India",
  "MIT ADT RAT Entrance Test",
  "Design PhD Pune",
  "Transdisciplinary Research MIT",
  "Sustainable Architecture PhD",
  "Creative Media PhD",
  "MIT ADT Research Fellowship",
  "PhD Admission MIT Art Design Technology"
];

const MITADTPhDPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
        <SEO
        title="MIT-ADT PhD Admission 2025 | Eligibility, RAT Exam, Design Research, Fellowships"
        description="MIT-ADT University PhD Admission 2025: Eligibility, MIT-ADT-RAT exam pattern, portfolio requirements, research areas, fellowships, mode of study, fees & timeline."
        url="/colleges/mit-adt-phd"
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
        <h1>MIT Art Design & Technology University (MIT-ADT), Pune – PhD Overview</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> MIT Art Design & Technology University (MIT-ADT)</p>
              <p><strong>Address:</strong> Rajbaug, Loni Kalbhor, Pune–Solapur Highway, Pune – 412201</p>
              <p><strong>Website:</strong> <a href="https://www.mituniversity.edu.in" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty Strength & Research Ecosystem</h2>
          <p>MIT-ADT integrates arts, design, and tech in a unique transdisciplinary ecosystem, supported by high-end infrastructure and domain-specific research hubs.</p>
          <div className="card-grid">
            <div className="card">200+ research guides across creative and technical fields</div>
            <div className="card">Design Innovation Centre (DIC), VR/AR & Film Studio</div>
            <div className="card">Research themes: AI in Media, Sustainable Architecture, Traditional Knowledge</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Overview</h2>
          <p>PhD admission is through MIT-ADT-RAT and an interview that evaluates research potential, portfolio (design), and proposal alignment.</p>
          <div className="list-row">
            <div className="list-card">PG with ≥ 55%</div>
            <div className="list-card">Entrance Test (MIT-ADT-RAT) + Research Presentation</div>
            <div className="list-card">UGC-NET, JRF, MPhil, GATE holders are exempt</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Digital Tools & Library Access</h2>
          <ul>
            <li>60,000+ volumes with Scopus, JSTOR, Artstor access</li>
            <li>Design tools: Adobe Suite, Rhino, Sketch, Blender</li>
            <li>Analytics & Media platforms: SPSS, VR/AR Sandbox</li>
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
                <td>Institute Fellowship</td>
                <td>Up to ₹20,000/month for full-time scholars</td>
              </tr>
              <tr>
                <td>RA Positions</td>
                <td>Project-based research assistantships under funded labs</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="checklist-section">
          <h2>Modes & Requirements</h2>
          <ul className="checklist">
            <li>Full-time (3–6 years) – Design applicants must submit portfolios</li>
            <li>Part-time (4–7 years) – Requires industry NOC</li>
            <li>Research Concept Note + Interview</li>
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
                <td>Application Window</td>
                <td>January – March</td>
              </tr>
              <tr>
                <td>MIT-ADT-RAT</td>
                <td>April</td>
              </tr>
              <tr>
                <td>Interviews</td>
                <td>May</td>
              </tr>
              <tr>
                <td>Tuition Fee</td>
                <td>₹1.5L/year</td>
              </tr>
              <tr>
                <td>Thesis Submission</td>
                <td>₹30,000</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi Research Institute @ MIT-ADT</h2>
          <p>Our team supports creative scholars with proposal writing, funding mapping, and targeted publication plans.</p>
          <ul>
            <li>Design-journal publishing mentorship</li>
            <li>Creative media research proposal drafting</li>
            <li>Portfolio & research alignment workshops</li>
          </ul>
          <strong>“We blend aesthetic sense with academic depth—empowering MIT-ADT scholars to shape transdisciplinary narratives.”</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – MIT-ADT PhD Admissions</h2>
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
          {keywords.map((key) => (
            <li key={key}>{key}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default MITADTPhDPage;

