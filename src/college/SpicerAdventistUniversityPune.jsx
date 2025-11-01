import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is Spicer a UGC-recognized university?",
    answer: "Yes, Spicer Adventist University is UGC-recognized and operates as a Christian minority university."
  },
  {
    question: "Does Spicer require a PhD entrance test?",
    answer: "No written test is required; selection is via interview and research proposal review. NET/SET/MPhil holders are exempt."
  },
  {
    question: "Is theological or religious research supported?",
    answer: "Yes, Spicer actively supports research in Religious Studies, Christian Theology, and Humanities."
  },
  {
    question: "Are fellowships available?",
    answer: "Yes, minority candidate scholarships are available. External fellowship applications (e.g., UGC/ICSSR) are also supported."
  },
  {
    question: "What is the admission cycle?",
    answer: "PhD applications are accepted annually between January and March."
  }
];

const SpicerPhDPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#admission">Admission Path</a></li>
          <li><a href="#infra">Resources</a></li>
          <li><a href="#funding">Scholarships</a></li>
          <li><a href="#timeline">Timeline & Fees</a></li>
          <li><a href="#cta">Narpavi Role</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Spicer Adventist University, Pune – PhD Guide</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Address:</strong> Aundh Road, Ganeshkhind, Pune – 411067</p>
              <p><strong>Website:</strong> <a href="https://www.spiceradventistuniversity.org" target="_blank" rel="noreferrer">www.spiceradventistuniversity.org</a></p>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <h2>Academic & Research Focus</h2>
          <p>Spicer emphasizes spiritually grounded and ethically rich interdisciplinary research.</p>
          <div className="card-grid">
            <div className="card">Programs in Education, Religious Studies, Humanities, and Sciences</div>
            <div className="card">Guided by global Seventh-Day Adventist academic standards</div>
            <div className="card">Participatory and community development research emphasis</div>
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>Admission Path</h2>
          <div className="list-row">
            <div className="list-card">No written test; direct research interview</div>
            <div className="list-card">Proposal-based selection</div>
            <div className="list-card">PG degree ≥ 55% required</div>
            <div className="list-card">NET/SET/MPhil holders are exempt</div>
          </div>
        </section>

        <section id="infra" className="highlight-boxes">
          <h2>Resources & Research Support</h2>
          <ul>
            <li>Access to ATLA theological databases and global religious archives</li>
            <li>Digital library resources for Biblical Studies and Ethics</li>
            <li>Community-based research and value-integrated learning</li>
          </ul>
        </section>

        <section id="funding" className="funding-table">
          <h2>Scholarships & Support</h2>
          <table>
            <thead>
              <tr>
                <th>Source</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Internal Scholarships</td>
                <td>Merit-based support for minority scholars</td>
              </tr>
              <tr>
                <td>External Fellowships</td>
                <td>UGC/ICSSR support facilitated via office of research</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Timeline & Fee Structure</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tuition Fee</td>
                <td>₹45,000/year</td>
              </tr>
              <tr>
                <td>Application Fee</td>
                <td>₹750</td>
              </tr>
              <tr>
                <td>Admission Window</td>
                <td>January – March annually</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi: Guiding Values-Based Research</h2>
          <p>Spicer’s spiritually rooted academic framework calls for sincere and ethical research practices. Narpavi supports your doctoral journey with:</p>
          <ul>
            <li>Theological proposal refinement and citation integrity</li>
            <li>Qualitative analysis aligned with spiritual values</li>
            <li>Access to faith-aligned publication networks</li>
            <li>Editing support for religious and humanities research</li>
          </ul>
          <strong>At Spicer, your PhD becomes a mission. Let Narpavi help you fulfill it with both depth and devotion.</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – Spicer University PhD</h2>
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
            <li>Spicer University</li>
            <li>Christian Research</li>
            <li>Faith-based PhD</li>
            <li>Religious Studies</li>
            <li>UGC Minority</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SpicerPhDPage;

