import React from "react";
import "./university.scss";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Does SVU offer both full-time and part-time PhD programs?",
    answer: "Yes. Somaiya Vidyavihar University offers both full-time and part-time/hybrid PhD programs."
  },
  {
    question: "What is the eligibility for SVU PhD admission?",
    answer: "A minimum of 55% in postgraduation is required (relaxations apply as per norms)."
  },
  {
    question: "Is PET mandatory for all applicants?",
    answer: "Yes. SVU conducts its own PhD Entrance Test (PET) followed by an interview and research presentation."
  },
  {
    question: "What kind of funding is available for PhD scholars?",
    answer: "SVU offers internal doctoral assistantships (₹25,000/month) and RA positions under sponsored projects."
  },
  {
    question: "What are the publication requirements before thesis submission?",
    answer: "A minimum of two Scopus/ABDC papers and one national conference presentation is required."
  }
];
const keywords = [
  "SVU PhD Admission 2025",
  "Somaiya PhD Eligibility",
  "SVU PET Exam",
  "PhD Mumbai",
  "Somaiya Vidyavihar PhD",
  "SVU Research Facilities",
  "PhD Fellowship Mumbai",
  "SVU Doctoral Assistantship",
  "Somaiya PET Syllabus",
  "SVU PhD Fee Structure"
];
const SVUPhDPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
         <SEO
        title="SVU PhD Admission 2025 | Eligibility, PET Exam, Research & Fellowship"
        description="Somaiya Vidyavihar University PhD Admissions 2025 – Eligibility, PET exam, research infrastructure, funding, required publications, and admission timeline."
        url="/colleges/svu-phd"
        image="/assets/university-default-banner.jpg"
        keywords={keywords}
        faqs={faqs}
      />
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

      <main className="main-content">
        <h1>Somaiya Vidyavihar University – PhD Admission & Research Overview</h1>

        <section>
          <h2>University Details</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> Somaiya Vidyavihar University (SVU), Mumbai</p>
              <p><strong>Address:</strong> Vidyavihar (E), Mumbai 400077, Maharashtra, India</p>
              <p><strong>Website:</strong> <a href="https://www.somaiya.edu" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>SVU hosts 250+ research guides across disciplines including Engineering, Management, Humanities, and Dharma Studies. The campus is equipped with cutting-edge infrastructure.</p>
          <div className="card-grid">
            <div className="card">AI-ML Super-Computing Cluster (100 TF)</div>
            <div className="card">Bloomberg Finance Lab & Bio-Innovation Centre</div>
            <div className="card">Centres of Excellence in Energy, Polymers, Dharma Studies</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Mechanics & Eligibility</h2>
          <p>PhD admission at SVU is conducted via an annual cycle through the SVU-PET followed by a research proposal presentation and interview.</p>
          <div className="list-row">
            <div className="list-card">Postgraduation ≥ 55% (discipline-relevant)</div>
            <div className="list-card">NET/JRF/GATE holders exempted from PET</div>
            <div className="list-card">Work experience mandatory for Executive/Part-Time tracks</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Research Facilities & Collaborations</h2>
          <ul>
            <li>Live MoUs with IIT Bombay, Tata Power, Loughborough University</li>
            <li>Centres of Excellence in Energy Engineering and Buddhist Studies</li>
            <li>Pilot-scale fermenters & Supercomputing infrastructure</li>
          </ul>
        </section>

        <section>
          <h2>Library & Digital Resources</h2>
          <p>Somaiya LRC provides:</p>
          <ul>
            <li>140,000+ books & 200+ journals</li>
            <li>IEEE, ACM, EBSCO, JSTOR remote access</li>
          </ul>
        </section>

        <section id="funding" className="funding-table">
          <h2>Funding & Fellowship</h2>
          <table>
            <thead>
              <tr><th>Type</th><th>Details</th></tr>
            </thead>
            <tbody>
              <tr><td>Doctoral Assistantship</td><td>₹25,000/month for full-time scholars</td></tr>
              <tr><td>Sponsored Projects</td><td>RA positions ₹30,000–₹45,000/month</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>PET – Entrance Test</h2>
          <ul>
            <li>Written test followed by research presentation and personal interview</li>
            <li>Exemptions for UGC-NET, JRF, GATE holders</li>
          </ul>
        </section>

        <section>
          <h3>🎓 Academic Qualification Requirements</h3>
          <ul>
            <li><strong>Postgraduation ≥ 55%</strong> in relevant discipline</li>
            <li><strong>Official transcripts</strong> from recognized universities</li>
          </ul>
        </section>

        <section className="experience-modes">
          <h2>💼 Work Experience & PhD Modes</h2>
          <div className="experience-cards">
            <div className="card">
              <h4>🔍 Required for Executive Track</h4>
              <p>At least 3 years of work experience is mandatory for Executive/Part-time mode.</p>
            </div>
            <div className="card">
              <h4>📘 Preferred</h4>
              <p>Full-time applicants with research background are prioritized.</p>
            </div>
          </div>
        </section>

        <section className="delivery">
          <h3>🕘 PhD Delivery Modes</h3>
          <ul>
            <li><strong>Full-time:</strong> 3–6 years</li>
            <li><strong>Part-time/Hybrid:</strong> 4–7 years (weekend residencies)</li>
          </ul>
        </section>

        <section className="checklist-section">
          <h2>Documentation Checklist</h2>
          <ul className="checklist">
            <li>Online application</li>
            <li>PG mark sheets</li>
            <li>1,000-word SoP</li>
            <li>Resume</li>
            <li>Photo ID</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>General Application Timeline</h2>
          <table>
            <thead>
              <tr><th>Stage</th><th>Timeline</th></tr>
            </thead>
            <tbody>
              <tr><td>Applications</td><td>March – May</td></tr>
              <tr><td>PET Exam</td><td>June</td></tr>
              <tr><td>Interviews</td><td>July</td></tr>
              <tr><td>Final Offers</td><td>August</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Fee Structure</h2>
          <ul>
            <li>Application: ₹1,000</li>
            <li>Annual Tuition Fee: ₹50,000</li>
          </ul>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>Two Scopus/ABDC-indexed papers required</li>
            <li>At least one national conference before thesis submission</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi Research Institute: Your Success Partner</h2>
          <p>We support your SVU PhD journey through:</p>
          <ul>
            <li>Proposal ideation and guide mapping</li>
            <li>Paper publication & Turnitin help</li>
            <li>Mock PET & interview coaching</li>
          </ul>
          <strong>“Your research deserves the best start – Narpavi delivers it.”</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – SVU PhD Admissions</h2>
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

export default SVUPhDPage;

