import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the NMIMS PhD Entrance structure?",
    answer:
      "It is a 90-minute, 100-mark CBT: 50% Research Methodology + 50% Subject Domain. Cut-off: 50%. No negative marking."
  },
  {
    question: "Is work experience mandatory?",
    answer:
      "Yes, for Executive and Part-time PhD tracks, a minimum of 5 years of managerial experience is required."
  },
  {
    question: "What kind of research infra is available?",
    answer:
      "NMIMS offers Bloomberg Lab, AI Analytic Hub with 16 GPU servers, Motion Capture Studio, and more."
  },
  {
    question: "What’s the fellowship structure?",
    answer:
      "Full-time PhD scholars in Engineering/TechMgmt get ₹2L/year; other RA/TA and corporate sponsorships vary by school."
  },
  {
    question: "Is publication mandatory before thesis?",
    answer:
      "Yes. Two ABDC-B or SCI-indexed papers and one conference paper are mandatory. Turnitin similarity ≤12%."
  }
];

const NMIMSPhD = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
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
        <h1>🏛️ NMIMS, Mumbai – PhD Admission 2025</h1>

        <section className="info-box">
          <h2>📍 University Snapshot</h2>
          <p><strong>Full Name:</strong> Narsee Monjee Institute of Management Studies (NMIMS)</p>
          <p><strong>Address:</strong> V. L. Mehta Road, Vile Parle (W), Mumbai 400056, India</p>
          <p><strong>Website:</strong> <a href="https://www.nmims.edu" target="_blank" rel="noreferrer">nmims.edu</a></p>
        </section>

        <section id="research" className="feature-section">
          <h2>🔬 Faculty & Research Infrastructure</h2>
          <div className="card-grid">
            <div className="card">550+ Faculty</div>
            <div className="card">21 Research Centres</div>
            <div className="card">Bloomberg Finance Lab</div>
            <div className="card">Motion Capture Studio</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>🎓 Admission & Eligibility</h2>
          <div className="list-row">
            <div className="list-card">Entrance CBT (100 marks)</div>
            <div className="list-card">Personal Interview</div>
            <div className="list-card">500-word Proposal Presentation</div>
          </div>
          <p><strong>Eligibility:</strong> Master’s ≥ 55% in relevant discipline. NET/SET/GATE/JRF holders exempt from entrance.</p>
        </section>

        <section className="info-table-grid">
          <div className="info-card">
            <h3>📡 Collaborations</h3>
            <ul>
              <li>Microsoft, Cipla, L&T, SBI Research</li>
              <li>GLP-compliant Pharma Labs</li>
              <li>Harvard Case Access (Management School)</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>📚 Library & Digital Resources</h3>
            <ul>
              <li>62k Books, 200+ Journals</li>
              <li>EBSCO, Westlaw, HeinOnline</li>
              <li>IEEE Xplore Access</li>
            </ul>
          </div>
        </section>

        <section id="funding" className="funding-table">
          <h2>💸 Funding & Fellowships</h2>
          <table>
            <thead><tr><th>Type</th><th>Details</th></tr></thead>
            <tbody>
              <tr><td>Engineering/Tech Mgmt Full-Time</td><td>₹2 lakh/year assured</td></tr>
              <tr><td>Others</td><td>RA/TA positions, Corporate Sponsorships</td></tr>
            </tbody>
          </table>
        </section>

        <section className="info-table-grid">
          <div className="info-card">
            <h3>📝 Documents</h3>
            <ul>
              <li>Online Form, PG Mark-sheets</li>
              <li>SOP + Research Idea (500 words each)</li>
              <li>Work NOC (if applicable)</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>⏱️ Modes & Duration</h3>
            <ul>
              <li>Full-time: 3–6 yrs</li>
              <li>Executive: 4–6 yrs (weekend)</li>
              <li>Part-time: 4–7 yrs</li>
            </ul>
          </div>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>📅 Application Timeline</h2>
          <table>
            <thead><tr><th>Stage</th><th>Timeline</th></tr></thead>
            <tbody>
              <tr><td>Application</td><td>Mar–May</td></tr>
              <tr><td>Test</td><td>June</td></tr>
              <tr><td>Interview</td><td>Jun–Jul</td></tr>
              <tr><td>Final List</td><td>Jul–Aug</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>📌 Additional Notes</h2>
          <ul>
            <li>2 publications mandatory: ABDC-B or SCI indexed</li>
            <li>One conference presentation</li>
            <li>Plagiarism limit ≤12%</li>
          </ul>
        </section>

        <section id="narpavi" className="cta-box">
          <h2>🔰 Narpavi Research Institute – Your Strategic Partner @ NMIMS</h2>
          <ul>
            <li>NMIMS Mock Suite: Domain-specific CBT drills with cutoff calibrators</li>
            <li>Proposal Studio: Refinement aligned to NMIMS’s research clusters</li>
            <li>Fellowship Match: Tailored alerts for industry-sponsored RA/TA openings</li>
            <li>ABDC Coach: Abstract crafting + journal selection bootcamps</li>
          </ul>
          <strong>📈 Narpavi improves conversion chances by 3× through structured mentorship.</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – NMIMS PhD Admission</h2>
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
            <li>NMIMS Mumbai</li>
            <li>PhD Admission</li>
            <li>CBT Entrance</li>
            <li>Engineering & Management</li>
            <li>Fellowship</li>
          </ul>
      </aside>
    </div>
  );
};

export default NMIMSPhD;
