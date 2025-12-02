import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEO from ".././assets/SEO"
const faqs = [
  {
    question: "What is the eligibility for PhD admission at HBNI?",
    answer: "You must have at least 60% (CGPA 6.5) in M.Sc./M.Tech/ME. B.Tech candidates with exceptional records are also considered."
  },
  {
    question: "Is work experience mandatory for HBNI?",
    answer: "No, it is not mandatory. However, GATE/NET/JEST score must be valid as of March 31 of the intake year."
  },
  {
    question: "How much stipend is offered?",
    answer: "₹37,000/month (Years 1–2) and ₹42,000/month (Years 3–5), plus ₹40,000 contingency annually. Hostel is free or HRA provided."
  },
  {
    question: "Is there an entrance test for all candidates?",
    answer: "Not always. Some are shortlisted via GATE/NET/DAE-OCES. If required, HBNI Research Aptitude Test (3 hrs) is conducted."
  },
  {
    question: "What is the application process timeline?",
    answer: "Portal opens in February, closes March 31. Shortlist in April, interviews in May, offers by June."
  }
];
const keywords = [
  "HBNI PhD Admission 2025",
  "BARC PhD Admission",
  "DAE Fellowship PhD",
  "HBNI Research Aptitude Test",
  "Nuclear Science PhD India",
  "HBNI Eligibility 2025",
  "HBNI Stipend",
  "PhD Mumbai Universities",
  "HBNI BARC Research",
  "Homi Bhabha National Institute"
];

const HBNIPhDPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
        <SEO
        title="HBNI PhD Admission 2025 | BARC Research, Eligibility, Stipend & DAE Fellowship"
        description="Detailed guide for HBNI PhD admissions including eligibility, stipend, GATE/NET requirements, HBNI-RAT exam, research facilities at BARC/IGCAR/RRCAT, and complete 2025 timeline."
        url="/colleges/hbni-mumbai"
        image="/assets/university-default-banner.jpg"
        keywords={keywords}
        faqs={faqs}
      />

      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#admission">Admission</a></li>
          <li><a href="#infra">Infrastructure</a></li>
          <li><a href="#funding">Funding</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#cta">Narpavi Role</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Homi Bhabha National Institute (HBNI), Mumbai – PhD Overview</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong>Dr. Homi Bhabha State University (HBNI)</p>
              <p><strong>Address:</strong> Registrar, HBNI, Anushaktinagar, BARC Campus, Trombay, Mumbai – 400085</p>
              <p><strong>Website:</strong> <a href="http://www.hbni.ac.in" target="_blank" rel="noreferrer">www.hbni.ac.in</a></p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>HBNI leverages premier DAE institutions like BARC, IGCAR, RRCAT, and VECC, with 1000+ research faculty.</p>
          <div className="card-grid">
            <div className="card">1 PF Supercomputer & Hot Cells</div>
            <div className="card">BARC Multi-Probe Labs & FBTR Reactor</div>
            <div className="card">International tie-ups: CERN, ITER, KEK</div>
            <div className="card">Indus-2 Synchrotron & Tokamak Plasmas</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Pathway</h2>
          <div className="list-row">
            <div className="list-card">Shortlisting via GATE/NET/DAE-OCES</div>
            <div className="list-card">HBNI-RAT (as needed)</div>
            <div className="list-card">Technical + HR Interview</div>
          </div>
          <p><strong>Eligibility:</strong> 60% or CGPA 6.5 in PG (Science/Engg). Valid national scorecard required. B.Tech possible in rare cases.</p>
        </section>

        <section id="infra" className="highlight-boxes">
          <h2>Research Ecosystem & Labs</h2>
          <ul>
            <li>BARC Materials Lab, RRCAT Indus-2, IGCAR FBTR Reactor</li>
            <li>Library Access: DAE Consortium, Springer, IEEE, AIP</li>
            <li>Access to 100,000+ books and e-journals across DAE units</li>
            <li>International Projects: CERN-ALICE, ITER, JLab</li>
          </ul>
        </section>

        <section id="funding" className="funding-table">
          <h2>Fellowships & Support</h2>
          <table>
            <thead>
              <tr><th>Type</th><th>Details</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>DAE Fellowship</td>
                <td>₹37,000/month (Years 1–2), ₹42,000/month (Years 3–5) + Contingency ₹40,000/year</td>
              </tr>
              <tr>
                <td>Facilities</td>
                <td>Free hostel or HRA allowance</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Timeline & Fees (Aug 2025 Cohort)</h2>
          <table>
            <thead>
              <tr><th>Step</th><th>Schedule</th></tr>
            </thead>
            <tbody>
              <tr><td>Portal Opens</td><td>Feb</td></tr>
              <tr><td>Last Date</td><td>31 Mar</td></tr>
              <tr><td>Shortlist & Call</td><td>April</td></tr>
              <tr><td>Test & Interview</td><td>May</td></tr>
              <tr><td>Final Offers</td><td>June</td></tr>
              <tr><td>Application Fee</td><td>₹500</td></tr>
              <tr><td>Caution Deposit</td><td>₹10,000 (Refundable)</td></tr>
              <tr><td>Tuition</td><td>Waived (DAE-funded)</td></tr>
              <tr><td>Thesis Fee</td><td>₹20,000</td></tr>
            </tbody>
          </table>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi Research Institute @ HBNI</h2>
          <p><strong>Homi Bhabha National Institute (HBNI)</strong> – Narpavi pairs applicants with nuclear-science mentors to refine proposals that align with specific DAE unit labs (BARC, IGCAR, RRCAT), provides GATE/NET crash clinics, drafts security-clearance documentation, and offers high-impact publication coaching that leverages our alumni links to CERN and ITER—ensuring scholars clear HBNI’s rigorous technical vetting and publish quickly in SCI journals.</p>
        
          <strong>We empower nuclear science scholars to clear HBNI’s vetting and publish with global impact.</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – HBNI PhD</h2>
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

export default HBNIPhDPage;

