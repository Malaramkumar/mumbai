import React, { useState } from "react";
import "./university.scss";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the admission process at ICT Mumbai for PhD?",
    answer: "Via ICT-PET written test and interview. Score is valid for 2 years. JRF/NET qualified candidates are exempt."
  },
  {
    question: "What is the eligibility for PhD at ICT?",
    answer: "Minimum 60% in both UG and PG. Relaxation of 5% for JRF holders. Direct PhD routes available in select branches."
  },
  {
    question: "Is industry-sponsored PhD allowed?",
    answer: "Yes, for candidates with 3+ years of work experience in industry or government labs under the external mode."
  },
  {
    question: "What are the fees and funding options?",
    answer: "ICT Fellowship (₹31k–35k/month) subject to availability. Annual tuition ₹1.01L. Total estimated fee ~₹2.94L. 200+ funded projects also available."
  },
  {
    question: "What are the publication requirements?",
    answer: "Minimum three SCI-indexed papers and one patent (desirable) before viva."
  }
];

const ICTPhD = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
      {/* Left Sidebar */}
      <aside className="left-sidebar">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#admission">Admission</a></li>
          <li><a href="#facilities">Facilities</a></li>
          <li><a href="#funding">Funding</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#cta">Narpavi Edge</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Institute of Chemical Technology (ICT), Mumbai – PhD Admission 2025</h1>

        <section className="info-box">
          <h2>🏛️ University Snapshot</h2>
          <div className="info-grid">
             <p><strong>Full Name:</strong> Institute of Chemical Technology (ICT)</p>
            <p><strong>Address:</strong> Nathalal Parekh Marg, Matunga (E), Mumbai 400 019</p>
            <p><strong>Website:</strong> <a href="https://ictmumbai.edu.in" target="_blank" rel="noreferrer">ictmumbai.edu.in</a></p>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty Depth & Research Infrastructure</h2>
          <p>ICT boasts 300+ supervisors and 100+ PhD graduates annually:</p>
          <div className="card-grid">
            <div className="card">30+ PhD Specializations</div>
            <div className="card">DBT-ICT Centre for Energy Biosciences</div>
            <div className="card">1 PF Supercomputing Node</div>
            <div className="card">DAE-funded Pilot Plants</div>
          </div>
        </section>

       

        <section className="info-table-grid">
          <div className="info-card">
            <h3>🔬 Research Facilities</h3>
            <ul>
              <li>Cryo-TEM & Clean Rooms</li>
              <li>Bioreactor Parks & GMP Pilot Plant</li>
              <li>Partners: Reliance, IGCAR, Univ. of Manchester</li>
            </ul>
          </div>
          
           <section id="admission" className="horizontal-list">
          <h2>Admission Process & Eligibility</h2>
          <div className="list-row">
            <div className="list-card">Intakes: July & Jan</div>
            <div className="list-card">ICT-PET + Interview</div>
            <div className="list-card">60% UG & PG (5% relax for JRF)</div>
          </div>
        </section>
        
          <div className="info-card">
            <h3>📚 Library & Digital Access</h3>
            <ul>
              <li>95k+ Books, 400+ Journals</li>
              <li>Resources: SciFinder-n, Reaxys, Elsevier 360</li>
              <li>Remote Login for Scholars</li>
            </ul>
          </div>
        </section>

        <section id="funding" className="funding-table">
          <h2>Funding & Fellowship</h2>
          <table>
            <thead>
              <tr>
                <th>Fellowship Type</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ICT Fellowship</td>
                <td>₹31,000 → ₹35,000 p.m. (subject to project availability)</td>
              </tr>
              <tr>
                <td>Sponsored Projects</td>
                <td>Access to 200+ funded research projects (industry & GoI)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section >
          <h2>Program Summary</h2>
           <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>🎓 <strong>Academic Qualification:</strong> PG ≥ 60% (Direct PhD in some branches)</li>
            <li>💼 <strong>Experience:</strong> Required for Industry-Sponsored/External PhD (&gt; 3 years)</li>
            <li>📦 <strong>Modes:</strong> Full-time (3–6 yrs), Part-time (faculty), External (Govt/Industry)</li>
            <li>📝 <strong>Documents:</strong> PG Marksheets, Concept Note (1000 words), Fellowship Proof</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>Application Timeline – 2025</h2>
          <table>
            <thead>
              <tr><th>Stage</th><th>Timeline</th></tr>
            </thead>
            <tbody>
              <tr><td>Applications</td><td>Apr – May</td></tr>
              <tr><td>ICT-PET</td><td>June</td></tr>
              <tr><td>Offers</td><td>July</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Fee Structure</h2>
          <ul>
            <li>Application: ₹1,000 (₹500 for reserved)</li>
            <li>Annual Tuition: ₹1.01L</li>
            <li>Total Estimated Program Fee: ₹2.94L</li>
          </ul>
        </section>

        <section>
          <h2>Additional Requirements</h2>
          <ul>
            <li>Minimum three SCI-indexed papers</li>
            <li>One patent (desirable)</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>🔰 Narpavi Research Institute Edge @ ICT</h2>
          <ul>
            <li><strong>PET-Premium Series:</strong> 8 discipline-wise mocks + Chem-Engg workshops</li>
            <li><strong>Fellowship Navigator:</strong> Real-time dashboard for JRF/RA/PMRF opportunities</li>
            <li><strong>Pilot-Plant Concierge:</strong> Pre-booked time slots + lab safety onboarding</li>
            <li><strong>Tech-Transfer & IP:</strong> Patent support, prior art search & TTO liaison</li>
            <li><strong>Global Co-authorship:</strong> Alumni linkages for joint papers with Manchester, MIT, Sydney</li>
          </ul>
          <strong>📈 Boost your funded seat chances by 60%+ with Narpavi’s roadmap.</strong>
        </section>

        <section className="faq-section11">
          <h2>FAQs – ICT PhD Admissions</h2>
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
            <li>ICT Mumbai</li>
            <li>Chemical Engineering</li>
            <li>PhD Entrance</li>
            <li>PET Exam</li>
            <li>PhD Funding</li>
          </ul>
       
      </aside>
    </div>
  );
};

export default ICTPhD;

