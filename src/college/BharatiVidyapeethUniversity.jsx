import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEO from ".././assets/SEO"
const faqs = [
  {
    question: "Is VUPET compulsory for all applicants?",
    answer: "VUPET is required unless you're exempt under UGC-NET, SET, or GATE—then you're only required to appear for Paper-II (Subject Knowledge)."
  },
  {
    question: "What is the structure of VUPET?",
    answer: "VUPET has two parts: Paper-I (Research Methodology, 50 marks, MCQ) and Paper-II (Subject Specific, 50 marks, subjective). You need 50% overall to pass."
  },
  {
    question: "Are there funding options?",
    answer: "Yes. The university offers ₹25,000/month fellowships, and over 200+ sponsored RA positions (₹30,000–₹40,000/month)."
  },
  {
    question: "When does admission open?",
    answer: "For 2025, applications are open from Feb 13 to Apr 15. VUPET is on Apr 27, interviews in May, and offers by May 30."
  },
  {
    question: "What are Bharati Vidyapeeth’s research strengths?",
    answer: "CoEs in Nanotoxicology, Ayurved Genomics, and Legal-Policy domains; multiple DST/ICMR-funded projects active."
  }
];
const keywords = [
  "Bharati Vidyapeeth PhD Admission 2025",
  "Bharati Vidyapeeth Deemed University PhD",
  "BVU PhD Eligibility",
  "VUPET Exam 2025",
  "PhD in Pune",
  "Bharati Vidyapeeth Research Programs",
  "BVU PhD Fees",
  "BVU Fellowships",
  "VUPET Syllabus",
  "Narpavi PhD Guidance BVU"
];


const BharatiVidyapeethPhDPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
      <SEO
        title="Bharati Vidyapeeth PhD Admission  | VUPET, Eligibility, Fees & Research Guide"
        description="Detailed guide for Bharati Vidyapeeth (Deemed University) PhD admission including VUPET exam pattern, eligibility, research facilities, funding, timelines, fees and Narpavi support."
        url="/colleges/bharati-vidyapeeth-university"
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
        <h1>Bharati Vidyapeeth (Deemed University), Pune – PhD Admission Guide</h1>

        <section>
          <h2>University Details</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> Bharati Vidyapeeth (Deemed University)</p>
              <p><strong>Address:</strong> Dhankawadi Campus, Pune–Satara Road, Pune 411043</p>
              <p><strong>Website:</strong> <a href="https://www.bvuniversity.edu.in" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>Bharati Vidyapeeth has a robust academic environment with extensive infrastructure supporting multidisciplinary research across health sciences, law, management, and technology.</p>
          <div className="card-grid">
            <div className="card">1,600+ faculty across 29 constituent institutes</div>
            <div className="card">85-acre Pune campus with smart classrooms and research parks</div>
            <div className="card">1 PF HPC, GMP pharma pilot plant, Bloomberg Lab</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Mechanics & Eligibility</h2>
          <p>PhD admissions at Bharati Vidyapeeth are governed via the national-level entrance exam VUPET followed by an interview.</p>
          <div className="list-row">
            <div className="list-card">PG Degree with ≥ 55% marks (5% relaxation for reserved categories)</div>
            <div className="list-card">NET, SET, or GATE qualifiers are exempt from Paper-I</div>
            <div className="list-card">VUPET: 100 marks (50 + 50); 50% pass required</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Research Ecosystem & Collaborations</h2>
          <ul>
            <li>Centers of Excellence in Nanotoxicology, Ayurved Genomics, Law & Policy</li>
            <li>25+ DST, DBT, ICMR, ICSSR funded projects</li>
            <li>Doctoral mobility across constituent units and innovation hubs</li>
          </ul>
        </section>

        <section>
          <h2>Library & Digital Resources</h2>
          <ul>
            <li>Central and departmental libraries with 2L+ volumes</li>
            <li>Access to Scopus, Web of Science, Springer, JSTOR</li>
            <li>Dedicated online repository for e-thesis and publications</li>
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
                <td>University Fellowship</td>
                <td>₹25,000 per month for meritorious full-time PhD scholars</td>
              </tr>
              <tr>
                <td>Research Assistants</td>
                <td>200+ externally sponsored RAs paid ₹30,000–₹40,000/month</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>VUPET 2025 – Entrance Test Details</h2>
          <ul>
            <li>Paper-I: Research Methodology (50 marks, objective type)</li>
            <li>Paper-II: Subject Specific (50 marks, descriptive)</li>
            <li>Minimum 50% required to qualify</li>
          </ul>
        </section>

        <section className="experience-modes">
          <h2>💼 PhD Modes & Duration</h2>
          <div className="experience-cards">
            <div className="card">
              <h4>🎓 Full-Time Mode</h4>
              <p>Campus-based research under allocated guide with residency requirements</p>
            </div>
            <div className="card">
              <h4>🕴 Part-Time / Executive</h4>
              <p>Working professionals with 3+ years of relevant experience eligible</p>
            </div>
          </div>
        </section>

        <section className="delivery">
          <h3>🕘 PhD Delivery Timeline</h3>
          <ul>
            <li><strong>Application Period:</strong> Feb 13 – Apr 15, 2025</li>
            <li><strong>VUPET Exam:</strong> Apr 27, 2025</li>
            <li><strong>Interviews:</strong> May 2025</li>
            <li><strong>Offer Letters:</strong> May 30, 2025</li>
          </ul>
        </section>

        <section className="checklist-section">
          <h2>Documentation Checklist</h2>
          <ul className="checklist">
            <li>Application Form</li>
            <li>PG Degree Marksheet</li>
            <li>VUPET Admit Card</li>
            <li>Photo ID Proof</li>
            <li>Research Proposal (1,000 – 2,000 words)</li>
            <li>Experience Certificate (if any)</li>
          </ul>
        </section>

        <section>
          <h2>Indicative Fee Structure</h2>
          <ul>
            <li>Application Fee: ₹1,000</li>
            <li>Registration: ₹15,000</li>
            <li>Annual Tuition: ₹45,000/year</li>
            <li>Thesis Submission: ₹20,000</li>
          </ul>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>Minimum of 2 Scopus-indexed publications required before thesis submission</li>
            <li>Mandatory Plagiarism Report via Turnitin (≤10% similarity)</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi Advantage for Bharati Vidyapeeth</h2>
          <p><strong>Bharati Vidyapeeth (BVU)</strong>  – Narpavi’s VUPET strategists deliver entrance coaching, map guides across 29 institutes, draft multi-disciplinary grant proposals, and manage dual-publication plus patent goals to keep BVU candidates on a punctual, high-impact trajectory.</p>
          <strong>“From Research Blueprint to Final Viva – Narpavi Walks with You”</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – Bharati Vidyapeeth PhD Admissions</h2>
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

export default BharatiVidyapeethPhDPage;

