import React from "react";
import "./university.scss";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Does Amity University offer full-time and part-time PhD programs?",
    answer: "Yes. Amity offers both full-time and part-time PhD options across various disciplines."
  },
  {
    question: "What is the eligibility for PhD admission?",
    answer: "Minimum 55% in postgraduation (relevant domain) from a recognized university. Relaxation may apply for SC/ST/OBC as per UGC norms."
  },
  {
    question: "Is an entrance exam mandatory?",
    answer: "Yes. Candidates must clear the Amity Entrance Exam and Interview. Exemptions are available for NET/JRF/GATE-qualified candidates."
  },
  {
    question: "Can I apply if I’m working full-time?",
    answer: "Yes. You can apply for the part-time PhD, provided you submit an NOC from your employer and fulfill Amity’s eligibility criteria."
  },
  {
    question: "Is the PhD degree from Amity University UGC recognized?",
    answer: "Yes. Amity University is UGC-approved, and its PhD degrees are recognized in India and abroad."
  }
];


const AmityPhDEnhancedPage = () => {
  
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
        <h1>Amity University Mumbai – PhD Admission & Research Overview</h1>

        <section>
          <h2>University Details</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:  </strong>  Amity University Mumbai</p>
              <p><strong>Address:</strong> Amity Education Valley, Bhatan Village, Panvel, Mumbai – Pune Expressway</p>
              <p><strong>Website:</strong> <a href="https://www.amity.edu/mumbai" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>Amity University Mumbai boasts a robust academic ecosystem with 200+ PhD-qualified faculty members across disciplines. The institution emphasizes interdisciplinary research, encouraging scholars to work on socially impactful topics. Each department has access to state-of-the-art labs, innovation cells, and simulation centers.</p>
          <div className="card-grid">
            <div className="card">Dedicated research labs for AI, nanotech, biotech, and management sciences</div>
            <div className="card">Regular inter-university collaborations with national and international partners</div>
            <div className="card">Industry-academia linkages for real-world applications</div>
            
          </div>
        </section>

        <section id="admission" className="horizontal-list">
          <h2> PhD Admission Mechanics & Eligibility Nuances</h2>
          <p>Amity’s PhD admissions follow a bi-annual cycle (January & July). Candidates can apply online via the university portal.</p>
          <div className="list-row">
            <div className="list-card">Master’s degree (minimum 55%) or equivalent in a relevant field.</div>
            <div className="list-card">SC/ST/OBC/Minority candidates may avail of a 5% relaxation as per UGC norms.</div>
            <div className="list-card">Candidates with MPhil or UGC-NET/JRF may receive direct admission or PET exemption.</div>      
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Research Facilities & Collaborations</h2>
         
            <li>50+ research centers and incubators</li>
            <li>Collaborations with AICTE, DRDO, ISRO, and international universities</li>
            <li>Amity Innovation Incubator access</li>
          
        </section>

        <section>
          <h2>Library & Digital Resources</h2>
          <p>Amity Mumbai’s Central Library includes:</p>
          <ul>
            <li>50,000+ volumes</li>
            <li>Access to Springer, IEEE, JSTOR, ScienceDirect</li>
            <li>Remote access for scholars</li>
          </ul>
        </section>

        <section id="funding" className="funding-table">
          <h2>Funding & Fellowship</h2>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Merit Fellowships</td>
                <td>₹15,000 – ₹30,000/month</td>
              </tr>
              <tr>
                <td>Project Grants</td>
                <td>DST, ICSSR, Private Sponsors</td>
              </tr>
              <tr>
                <td>JRF Scholars</td>
                <td>Supported if UGC/CSIR Qualified</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>PET – Entrance Test</h2>
          <ul>
            <li>Objective-type entrance covering Research Methodology, Subject Knowledge, and General Aptitude</li>
            <li>2-hour online test followed by a Personal Interview</li>

          </ul>
        </section>

        <section>
  <h3>🎓 Academic Qualification Requirements</h3>
  <ul>
    <li><strong>Minimum 55% in Postgraduation</strong> (relevant to chosen research domain)</li>
    <li><strong>Transcripts</strong> from a recognized university</li>
    <li><strong>Equivalency certificate</strong> required for foreign degrees</li>
  </ul>
</section>

 <section className="experience-modes">
  <h2>💼 Work Experience & PhD Modes</h2>
  <div className="experience-cards">
    <div className="card">
      <h4>🔍 Not Mandatory</h4>
      <p>Having industry or research experience strengthens your application and topic relevance.</p>
    </div>
    <div className="card">
      <h4>🏢 Executive/Part-Time Eligible</h4>
      <p>Candidates from R&D or corporate sectors are encouraged to apply under the Executive/Part-Time PhD mode.</p>
    </div>
  </div>
</section>


        <section className="delivery">
  <h3>🕘 PhD Delivery Modes</h3>
  <ul>
    <li><strong>Full-time PhD:</strong> Minimum 3 years, Maximum 6 years</li>
    <li><strong>Part-time PhD:</strong> Requires proof of employment and NOC</li>
    <li><strong>Sponsored/Corporate Research:</strong> For working professionals under industry-academic partnerships</li>
  </ul>
</section>


        <section className="checklist-section">
          <h2>Documentation Checklist</h2>
          <ul className="checklist">
            <li>Application Form</li>
            <li>PG Mark Sheets</li>
            <li>Migration & Character Certificates</li>
            <li>Research Proposal (1,000–2,000 words)</li>
            <li>ID Proof & Address</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>General Application Timeline</h2>
          <table>
            <thead>
              <tr>
                <th>Cycle</th>
                <th>Application</th>
                <th>Entrance</th>
                <th>Interview</th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jan</td>
                <td>Sep–Nov</td>
                <td>Dec</td>
                <td>Jan</td>
                <td>Jan-End</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Mar–May</td>
                <td>Jun</td>
                <td>Jun–Jul</td>
                <td>Jul-End</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Fee Structure</h2>
          <ul>
            <li>Application: ₹1,500</li>
            <li>Registration: ₹10,000</li>
            <li>Annual Tuition: ₹75,000–₹1,00,000</li>
            <li>Thesis: ₹20,000–₹30,000</li>
          </ul>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>At least 2 Scopus-indexed publications required</li>
            <li>Turnitin Plagiarism Report ≤10% required</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi Research Institute: Your Success Partner</h2>
          <p>We simplify your PhD admission journey through:</p>
          <ul>
            <li>Personalized topic & guide selection</li>
            <li>Proposal, publication, and thesis help</li>
            <li>Mock interviews and PET coaching</li>
          </ul>
          <strong>“From Entrance to Excellence – Narpavi’s Handholding at Every Stage”</strong>
        </section>

        <section  className="faq-section11">
          <h2> FAQs – PhD Research Proposal Writing Services</h2>
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

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <h3>Tags</h3>
          <ul>
          <li>PhD Mumbai</li>
          <li>Amity</li>
          <li>Admissions</li>
          <li>Research</li>
          <li>UGC NET</li>
          </ul>
      </aside>
    </div>
  );
};

export default AmityPhDEnhancedPage;

