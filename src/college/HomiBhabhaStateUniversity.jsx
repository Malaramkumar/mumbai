import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the PET-HBSU exam pattern?",
    answer: "The exam has 100 MCQs over 120 minutes: 30% Research Methodology, 60% Subject Core, and 10% Aptitude. Passing score: 50% overall (45% for SC/ST/OBC)."
  },
  {
    question: "Is full-time residency required?",
    answer: "Only full-time PhDs require year-round campus residency. Part-time and external modes allow flexible schedules with periodic presence."
  },
  {
    question: "Are external PhDs allowed?",
    answer: "Yes. External mode is available for industry scientists with periodic intensive visits and NOC from their employer."
  },
  {
    question: "What are the key collaborations?",
    answer: "MoUs with BARC, IIT Bombay, UNESCO Conservation Labs, and shared HPC/supercomputing infrastructure make HBSU strong in multidisciplinary research."
  },
  {
    question: "What is the application timeline?",
    answer: "Portal opens Sep 18, closes Oct 5. PET in 3rd week Oct. Interviews in late Oct. Offers by Nov 1."
  }
];

const HBSIPhDEnhancedPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
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
        <h1>Dr. Homi Bhabha State University (HBSU), Mumbai – PhD Overview</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong>Dr. Homi Bhabha State University (HBSU)</p>
              <p><strong>Address:</strong> 15, Madam Cama Road, Mumbai – 400032</p>
              <p><strong>Website:</strong> <a href="https://hbsu.ac.in" target="_blank" rel="noreferrer">www.hbsu.ac.in</a></p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>HBSU is a cluster university bringing together four premier Mumbai colleges with 450+ PhD supervisors.</p>
          <div className="card-grid">
            <div className="card">Institutes: Institute of Science, Elphinstone, Sydenham, STC</div>
            <div className="card">Shared labs: SEM, NMR, DNA Sequencer, 180TF HPC</div>
            <div className="card">Heritage Libraries with 125k+ volumes & rare archives</div>
            <div className="card">Cross-college research & colloquia</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Process</h2>
          <div className="list-row">
            <div className="list-card">Online Application</div>
            <div className="list-card">PET-HBSU (MCQ Based)</div>
            <div className="list-card">Subject Interview</div>
            <div className="list-card">NET/JRF/GATE Exemption</div>
          </div>
          <p><strong>Eligibility:</strong> PG/MPhil ≥ 55% (5% relaxation for reserved); AIU equivalence for foreign degrees.</p>
        </section>

        <section id="infra" className="highlight-boxes">
          <h2>Research Facilities & Collaborations</h2>
          <ul>
            <li>Central Instrumentation Hub: SEM, AFM, ICP-MS, 400MHz NMR</li>
            <li>Supercomputing Node (180 TF) for simulations & analytics</li>
            <li>MoUs with BARC, IIT Bombay, UNESCO Heritage Labs</li>
            <li>Library access to JSTOR, CMIE, Delnet, IEEE, Shodh-Sindhu</li>
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
                <td>₹18,000/month → ₹20,000/month after progress seminar</td>
              </tr>
              <tr>
                <td>External Grants</td>
                <td>UGC/CSIR-JRF, DST-INSPIRE, CSR Mini Grants (₹1–5L)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Timeline & Fees</h2>
          <table>
            <thead>
              <tr><th>Step</th><th>Date / Amount</th></tr>
            </thead>
            <tbody>
              <tr><td>Portal Opens</td><td>18 Sep</td></tr>
              <tr><td>Last Date</td><td>5 Oct</td></tr>
              <tr><td>PET-HBSU</td><td>3rd week Oct</td></tr>
              <tr><td>Interviews</td><td>Late Oct</td></tr>
              <tr><td>Offer Letters</td><td>1 Nov</td></tr>
              <tr><td>Application Fee</td><td>₹300</td></tr>
              <tr><td>Registration</td><td>₹10,000</td></tr>
              <tr><td>Tuition Fee</td><td>₹30,000 (Science) / ₹25,000 (Arts)</td></tr>
              <tr><td>Thesis Evaluation</td><td>₹15,000</td></tr>
            </tbody>
          </table>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi Research Institute @ HBSU</h2>
          <p>HBSU's multi-institute model can be overwhelming. Narpavi provides structured support including:</p>
          <ul>
            <li>Proposal mapping to HBSU research matrix</li>
            <li>Pre-PET coaching and compliance mentoring</li>
            <li>Turnitin screenings and publication-targeting</li>
            <li>Single-window guide allocation & document assistance</li>
          </ul>
          <strong>We reduce your admin wait time and increase publication success—backed by real faculty insights.</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – HBSU PhD</h2>
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
        <div className="tags">
          <ul>
            <li>HBSU Mumbai</li>
            <li>Cluster University PhD</li>
            <li>Institute of Science PhD</li>
            <li>PET-HBSU</li>
            <li>Narpavi Research Support</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default HBSIPhDEnhancedPage;
