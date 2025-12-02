import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEO from ".././assets/SEO"
const faqs = [
  {
    question: "What is HPET for PhD at HSNC University?",
    answer: "HSNC PhD Entrance Test (HPET) is a 2-hour computer-based test with 100 MCQs: 30% Research Aptitude, 60% Subject Core, 10% General Aptitude. Qualifying marks: 50% (45% for reserved)."
  },
  {
    question: "Who is eligible to apply for PhD?",
    answer: "Master’s degree with ≥55% marks (50% for reserved categories). Work experience only required for Executive/Part-Time PhD."
  },
  {
    question: "What are the key research collaborations at HSNC?",
    answer: "HSNC has MoUs with IIT Bombay, BARC, and Adobe Research, along with an incubation hub for startups."
  },
  {
    question: "What kind of funding is available?",
    answer: "University Research Studentship: ₹18,000 to ₹20,000 per month. Eligible for UGC-JRF, CSIR, DST-INSPIRE, ICSSR grants."
  },
  {
    question: "Are publications required before synopsis?",
    answer: "Yes, a minimum of two SCOPUS or UGC-CARE indexed publications with ≤10% Turnitin similarity is mandatory."
  }
];
const keywords = [
  "HSNC University PhD Admissions 2025",
  "HPET Exam 2025",
  "HSNC Mumbai PhD",
  "HSNC PhD Eligibility",
  "HSNC Fellowship 2025",
  "HSNC PhD Fees",
  "HSNC Research Collaborations",
  "PhD Admission Mumbai",
  "PhD Entrance Test Maharashtra",
  "HSNC University HPET Syllabus"
];

const HSNCPhD = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
       <SEO
        title="HSNC University PhD Admission 2025 | HPET Exam, Eligibility, Fees & Research Guide"
        description="Complete guide for HSNC University's PhD admission 2025. Includes HPET exam pattern, eligibility, fees, fellowship, research labs, collaborations, and timeline."
        url="/colleges/hsnc-university-phd"
        image="/assets/university-default-banner.jpg"
        keywords={keywords}
        faqs={faqs}
      />
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#admission">Admission</a></li>
          <li><a href="#research">Research</a></li>
          <li><a href="#funding">Funding</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#narpavi">Narpavi Advantage</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>🏛️ HSNC University, Mumbai – PhD Admission 2025</h1>

        <section className="info-box">
          <h2>📍 University Snapshot</h2>
          <div className="info-grid">
          <p><strong>Full Name:</strong> Hyderabad (SIND) National Collegiate University</p>
          <p><strong>Address:</strong> D. M. Harish Building, 47 Dr R. G. Thadani Marg, Worli, Mumbai 400018, Maharashtra, India</p>
          <p><strong>Website:</strong> <a href="https://www.hsncu.edu.in" target="_blank" rel="noreferrer">hsncu.edu.in</a></p>
          </div>
        </section>

        <section id="research" className="feature-section">
          <h2>🔬 Faculty & Research Infrastructure</h2>
          <p>Formed as a cluster of H.R. College, K.C. College, and Bombay Teachers’ Training College:</p>
          <div className="card-grid">
            <div className="card">300+ Doctorally Qualified Faculty</div>
            <div className="card">Nuclear & Radiochemistry Labs</div>
            <div className="card">Digital Humanities Studios</div>
            <div className="card">Cross-campus Research Access</div>
          </div>
        </section>


        <section className="info-table-grid">
          <div className="info-card">
            <h3>🔗 Collaborations</h3>
            <ul>
              <li>IIT Bombay, BARC, Adobe Research (MoUs)</li>
              <li>Remote-Sensing & GIS Labs</li>
              <li>Social-Innovation Startup Incubator</li>
            </ul>
          </div>

          <section id="admission" className="horizontal-list">
          <h2>🎓 Admission Mechanics & Eligibility</h2>
          <div className="list-row">
            <div className="list-card">HPET CBT (100 MCQs)</div>
            <div className="list-card">Subject Interview</div>
            <div className="list-card">Exemptions for NET/JRF/M.Phil</div>
          </div>

          <p><strong>Eligibility:</strong> Master’s ≥ 55% (5% relaxation for reserved categories). Work experience required for Part-Time/Executive PhD only.</p>
          <p><strong>Reservation:</strong> As per Maharashtra Government rules.</p>
        </section>

          <div className="info-card">
            <h3>📚 Library & Digital Reach</h3>
            <ul>
              <li>170k+ volumes across 3 campuses</li>
              <li>Delnet, Shodh-Sindhu, JSTOR, PROQUEST</li>
              <li>VPN access for off-campus research</li>
            </ul>
          </div>
        </section>

        <section id="funding" className="funding-table">
          <h2>💸 Fellowship & Funding</h2>
          <table>
            <thead>
              <tr><th>Scheme</th><th>Details</th></tr>
            </thead>
            <tbody>
              <tr><td>University Research Studentship</td><td>₹18,000 → ₹20,000 p.m. (post progress seminar)</td></tr>
              <tr><td>External Eligibility</td><td>UGC-JRF, CSIR, DST-INSPIRE, ICSSR, CSR micro-grants</td></tr>
            </tbody>
          </table>
        </section>

        <section className="info-table-grid">
          <div className="info-card">
            <h3>📝 Key Docs</h3>
            <ul>
              <li>Online Form, PG Transcripts</li>
              <li>1500-word Research Proposal</li>
              <li>ID Proofs</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>📊 Delivery Modes</h3>
            <ul>
              <li>Full-time: 3–6 yrs</li>
              <li>Part-time: 4–7 yrs</li>
              <li>External: 4–7 yrs</li>
            </ul>
          </div>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>📅 2025 Timeline</h2>
          <table>
            <thead>
              <tr><th>Stage</th><th>Date</th></tr>
            </thead>
            <tbody>
              <tr><td>Application</td><td>20 Mar – 15 May</td></tr>
              <tr><td>Mock HPET</td><td>23 May</td></tr>
              <tr><td>HPET Exam</td><td>5 June</td></tr>
              <tr><td>Results</td><td>20 June</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>💰 Fee Structure</h2>
          <ul>
            <li>Application: ₹500</li>
            <li>Registration: ₹10,000</li>
            <li>Tuition: ₹30,000/year (Science), ₹25,000/year (Arts/Commerce)</li>
            <li>Thesis: ₹15,000</li>
          </ul>
        </section>

        <section>
          <h2>📌 Additional Notes</h2>
          <ul>
            <li>Mandatory 2 SCOPUS/UGC-CARE indexed publications</li>
            <li>≤ 10% Turnitin similarity before final synopsis</li>
          </ul>
        </section>

        <section id="narpavi" className="cta-box">
          <h2>🔰 Narpavi Research Institute – Strategic Partner @ HSNC</h2>
          <p><strong>Hyderabad (SIND) National Collegiate University (HSNCU)</strong> – Narpavi’s Mumbai desk simplifies the multi-college maze by pre-matching guides across HR, KC & BTTC campuses, providing CBT-style HPET mocks, fast-tracking instrumentation-lab bookings, and crafting CSR grant pitches that finance interdisciplinary research in science, commerce and digital humanities.
</p>
          <strong>🎯 Narpavi boosts your odds by 3.5× for clearing HPET and building a publication-ready portfolio.</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – HSNC PhD Admission</h2>
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

export default HSNCPhD;

