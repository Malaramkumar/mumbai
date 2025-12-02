import React,{useState} from "react";
import "./university.scss";
import SEO from ".././assets/SEO";
import { ChevronDown, ChevronUp } from "lucide-react";
const faqs = [
  {
    question: "Is PET required for PhD admission at SNDT?",
    answer:
      "Yes, PET-SNDT is compulsory unless the candidate is exempt under NET/JRF/SET/GATE/MPhil."
  },
  {
    question: "What is the PET-SNDT exam pattern?",
    answer:
      "PET consists of 100 multiple-choice questions, 120 minutes duration, with 50% qualifying marks (45% for reserved categories)."
  },
  {
    question: "Does SNDT offer full-time fellowships?",
    answer:
      "Yes, University Studentship offers ₹18,000–₹20,000 per month for eligible full-time scholars."
  },
  {
    question: "Can working professionals apply for PhD?",
    answer:
      "Yes, working professionals can apply under the Part-Time or External mode with a valid NOC."
  },
  {
    question: "Is publication mandatory before thesis submission?",
    answer:
      "Yes, at least two Scopus or UGC-CARE indexed publications are required before the synopsis."
  }
];
const keywords = [
  "SNDT PhD Admission 2025",
  "SNDT Women's University PhD",
  "PET SNDT Exam",
  "PhD admission Mumbai",
  "SNDT PhD eligibility",
  "SNDT PET syllabus",
  "SNDT Research Centres",
  "Women’s University PhD",
  "SNDT Fellowship",
  "SNDT PhD exam date"
];

const SNDTPhDAdmission = () => {

 const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-layout">
        <SEO
        title="SNDT University PhD Admission 2025 | PET Exam, Eligibility, Fees & Fellowships"
        description="Complete SNDT Women’s University PhD admission guide 2025: PET exam structure, eligibility, research facilities, fees, fellowships, and application timeline."
        url="/colleges/sndt-phd"
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
        <h1>SNDT Women’s University Mumbai – PhD Admission & Research Overview</h1>

        <section>
          <h2>University Snapshot</h2>
          <div className="info-box">
            <div className="info-grid">
              <p><strong>Full Name:</strong> Smt. Nathibai Damodar Thackersey (SNDT) Women’s University</p>
              <p><strong>Address:</strong> 1, Nathibai Thackersey Road, New Marine Lines, Churchgate, Mumbai 400020, Maharashtra, India</p>
              <p><strong>Website:</strong> <a href="https://www.sndt.ac.in" target="_blank" rel="noreferrer">Visit Website</a></p>
            </div>
          </div>
        </section>

        <section id="facilities" className="feature-section">
          <h2>Faculty & Research Infrastructure</h2>
          <p>SNDT is India’s first women’s university with 300+ PhD-qualified faculty across 39 departments and 3 campuses (Churchgate, Juhu, Pune). Flagship research centres include Women’s Studies, Herbal & Nutraceutical Research, and a Central Instrumentation Facility (SEM, GC-MS, FTIR).</p>
        </section>

        <section id="admission" className="horizontal-list">
          <h2>PhD Admission Mechanics & Eligibility Nuances</h2>
          <p>PhD admissions are conducted through PET-SNDT held annually in May/June.</p>
          <div className="list-row">
            <div className="list-card">Master’s degree with ≥55% marks (5% relaxation for reserved categories)</div>
            <div className="list-card">PET exam (100 MCQs, 120 mins, 50% qualifying, 45% for SC/ST/OBC)</div>
            <div className="list-card">NET/JRF/SET/GATE/MPhil holders exempted from PET</div>
          </div>
        </section>

        <section className="highlight-boxes">
          <h2>Research Facilities & Collaborations</h2>
          <ul>
            <li>MoUs with IIT Bombay, BARC, University of Manitoba</li>
            <li>Access to INFLIBNET Shodhganga</li>
            <li>Upgraded research instruments and national repository networks</li>
          </ul>
        </section>

        <section>
          <h2>Library & Digital Resources</h2>
          <ul>
            <li>200,000+ volumes across three central libraries</li>
            <li>Remote access to Delnet, Shodh-Sindhu, JSTOR, PROQUEST</li>
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
                <td>University Studentship</td>
                <td>₹18,000 → ₹20,000/month (post-progress seminar)</td>
              </tr>
              <tr>
                <td>External Fellowships</td>
                <td>UGC-JRF, ICSSR, DST-INSPIRE, CSR-funded grants</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Academic & Work Requirements</h2>
          <ul>
            <li>Master’s Degree ≥55% (5% relaxable for SC/ST/OBC)</li>
            <li>Work-experience required only for Part-Time or Executive track (≥2 yrs)</li>
          </ul>
        </section>

        <section className="delivery">
          <h3>🕘 PhD Delivery Modes</h3>
          <ul>
            <li><strong>Full-time:</strong> 3–6 years</li>
            <li><strong>Part-time/External:</strong> 4–7 years</li>
          </ul>
        </section>

        <section className="checklist-section">
          <h2>Documentation Checklist</h2>
          <ul className="checklist">
            <li>Application form</li>
            <li>PG mark sheets</li>
            <li>1,500-word research concept</li>
            <li>Valid ID proof</li>
          </ul>
        </section>

        <section id="timeline" className="timeline-section">
          <h2>General Application Timeline</h2>
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Application</th>
                <th>Mock PET</th>
                <th>PET Exam</th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Annual</td>
                <td>March – April</td>
                <td>May</td>
                <td>June</td>
                <td>July</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>Indicative Fees</h2>
          <ul>
            <li>Application: ₹1,500</li>
            <li>Registration: ₹10,000</li>
            <li>Tuition: ₹30,000/year</li>
            <li>Thesis: ₹15,000</li>
          </ul>
        </section>

        <section>
          <h2>Additional Notes</h2>
          <ul>
            <li>Minimum two publications in UGC-CARE/Scopus-indexed journals</li>
            <li>Turnitin Similarity ≤10% before synopsis submission</li>
          </ul>
        </section>

        <section id="cta" className="cta-box">
          <h2>Narpavi Research Institute @ SNDT</h2>
          <p>PhD support tailored for women-centric research:</p>
          <ul>
            <li>Proposal and publication mentorship</li>
            <li>Mock PET & Interview training</li>
            <li>UGC/CSR fellowship guidance</li>
          </ul>
          <strong>"Empowering Doctoral Dreams – Narpavi at Every Step"</strong>
        </section>
         <section className="faq-section11">
          <h2>FAQs – SPPU PhD Admissions</h2>
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

export default SNDTPhDAdmission;

