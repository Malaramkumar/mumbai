import React from "react";
import "./UniversitySelectionMumbai.scss";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How many universities in Mumbai offer PhD programs?",
    answer: "Over 30 UGC-recognized institutions offer PhD programs in Mumbai across engineering, management, law, social sciences, humanities, and applied sciences."
  },
  {
    question: "Do all universities in Mumbai require a PhD entrance test?",
    answer: "Most universities conduct their own PhD Entrance Test (PET) unless you have cleared NET/JRF/GATE. IIT Bombay and TISS may have additional rounds of interviews or presentations."
  },
  {
    question: "Can I apply to multiple universities simultaneously?",
    answer: "Yes. We recommend applying to 2–3 well-aligned universities to maximize your chances. Narpavi helps manage timelines and proposal adjustments for each application."
  },
  {
    question: "What is the role of a PhD guide in choosing a university?",
    answer: "Your guide’s expertise should align with your topic. While you shortlist the university, guide availability can be the decisive factor. We help review guide profiles and suitability."
  },
  {
    question: "Does Narpavi have direct tie-ups with universities?",
    answer: "No. We maintain neutrality and independence. Our support is advisory and based on academic fit, guide research, and successful track records—not commissions or affiliations."
  }
];


const UniversitySelectionMumbai = () => {
    const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);
  return (
    <div className="university-selection-wrapper">
      {/* Left Sidebar */}
      <aside className="left-box">
        <h3>Explore Sections</h3>
        <ul>
          <li><a href="#why-matters">Why University Choice Matters</a></li>
          <li><a href="#steps-process">Step-by-Step Selection Process</a></li>
          <li><a href="#research-dna">Map University Research DNA</a></li>
          <li><a href="#faculty-infra">Faculty & Infrastructure Check</a></li>
          <li><a href="#admission-rules">Admissions & Eligibility</a></li>
          <li><a href="#labs-collab">Labs & Collaboration</a></li>
          <li><a href="#funding">Funding & Fellowship</a></li>
          <li><a href="#duration">Duration & Submission Norms</a></li>
          <li><a href="#narpavi-help">How Narpavi Helps</a></li>
          <li><a href="#final-checklist">Final Checklist</a></li>
          <li><a href="#faqs">FAQs</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>University Selection: How to Select the Right University for PhD in Mumbai</h1>
        <p className="subtitle">
          Expert Guidance for PhD Aspirants | University Shortlisting Strategy That Works
        </p>

        <section id="why-matters">
          <h2>🎯 Why Choosing the Right University Matters for Your PhD</h2>
          <p>
            Choosing the right university is crucial. It influences your research scope, funding, supervisor quality, access to labs, and post-PhD prospects. Mumbai hosts top-tier universities like IIT Bombay, TISS, NMIMS, and more—but choosing one isn’t just about rankings.
          </p>
        </section>

        <section id="steps-process">
          <h2>✅ Step-by-Step Process to Select the Right University for PhD in Mumbai</h2>
          <ol>
            <li><strong>Clarify Your Research Ambition:</strong> Define your problem, methodology, and expected outcome.</li>
            <li><strong>Draft a "Research DNA":</strong> This aligns your plan with university strengths.</li>
          </ol>
        </section>

        <section id="research-dna">
          <h2>📚 Map Each University’s Research DNA</h2>
          <table>
            <thead>
              <tr><th>Mumbai Institution</th><th>Signature Niches</th><th>Flagship Projects</th></tr>
            </thead>
            <tbody>
              <tr><td>IIT Bombay</td><td>AI, Energy, Climate Policy</td><td>€4M Indo-EU battery recycling (2024)</td></tr>
              <tr><td>TISS</td><td>Social Policy, Public Health</td><td>UNICEF migration & child welfare (2023)</td></tr>
              <tr><td>University of Mumbai</td><td>Literature, Law, Biology</td><td>FASTag coastal biodiversity (2022)</td></tr>
              <tr><td>NMIMS</td><td>FinTech, Pharmaceutics</td><td>AI trading lab with NSE (Live)</td></tr>
              <tr><td>VJTI</td><td>Robotics, Smart Manufacturing</td><td>DST smart-factory demo for MSMEs (2024)</td></tr>
              <tr><td>SNDT Women’s University</td><td>EduTech, Women’s Studies</td><td>ICSSR gig-economy gender gaps (2023)</td></tr>
            </tbody>
          </table>
        </section>

        <section id="faculty-infra">
          <h2>🔬 Investigate Faculty Depth and Research Infrastructure</h2>
          <p>Evaluate supervisors using H-index, research grants, and PhD student load. Ensure infrastructure meets your needs—whether HPC clusters, SPSS/NVivo software, or specialized sensors.</p>
        </section>

        <section id="admission-rules">
          <h2>📜 Decode Admissions Mechanics and Eligibility</h2>
          <table>
            <thead>
              <tr><th>Element</th><th>IIT Bombay</th><th>TISS</th><th>UoM</th><th>NMIMS</th></tr>
            </thead>
            <tbody>
              <tr><td>Min. PG Marks</td><td>60%</td><td>55%</td><td>55%</td><td>55%</td></tr>
              <tr><td>Entrance Exemption</td><td>GATE/JRF</td><td>NET/JRF</td><td>NET/JRF</td><td>NET/JRF</td></tr>
              <tr><td>Own Test</td><td>IIT-PET</td><td>TISS-RAT</td><td>PET</td><td>NPAT</td></tr>
              <tr><td>Proposal Needed</td><td>At application</td><td>At application</td><td>Post-PET</td><td>At application</td></tr>
              <tr><td>Guide Consent</td><td>Post-interview</td><td>Optional</td><td>Pre-interview</td><td>With application</td></tr>
            </tbody>
          </table>
        </section>

        <section id="labs-collab">
          <h2>🏛️ Evaluate Labs & Collaboration Opportunities</h2>
          <ul>
            <li>Scopus/IEEE/JSTOR access</li>
            <li>Academic writing workshops</li>
            <li>Industry/government partnerships</li>
          </ul>
        </section>

        <section id="funding">
          <h2>💰 Appraise Funding & Fellowship Ecosystem</h2>
          <ul>
            <li><strong>Internal RAs:</strong> ~₹31k/month (IIT-B)</li>
            <li><strong>External:</strong> UGC/CSIR/DST fellowships</li>
            <li><strong>CSR/MOUs:</strong> NMIMS with NSE, ICT with Reliance</li>
          </ul>
        </section>

        <section id="duration">
          <h2>⏱️ Consider Duration, Coursework & Research Environment</h2>
          <ul>
            <li>Coursework: 6 months – 1 year</li>
            <li>Thesis: 3–6 years; 5 years typical</li>
            <li>Mandatory publications: 1–2 Scopus/UGC-CARE</li>
            <li>Ethics: Turnitin screening required</li>
          </ul>
        </section>

        <section id="narpavi-help">
          <h2>🌟 How Narpavi Helps You Choose the Right University</h2>
          <ul>
            <li>Shortlists universities based on your research</li>
            <li>Matches you with faculty profiles</li>
            <li>Prepares SOP, proposals & timelines</li>
            <li>Identifies project-based funding</li>
          </ul>
        </section>
<section id="final-checklist">
  <h2>📌 Final Checklist Before Finalizing the University</h2>
  <ul className="checklist">
    <li>
      University supports your research domain
      <input type="checkbox" />
    </li>
    <li>
      Compatible guide identified
      <input type="checkbox" />
    </li>
    <li>
      Active department publishing
      <input type="checkbox" />
    </li>
    <li>
      Application window is open
      <input type="checkbox" />
    </li>
    <li>
      Facilities & labs are sufficient
      <input type="checkbox" />
    </li>
    <li>
      You meet eligibility
      <input type="checkbox" />
    </li>
    <li>
      Funding/fellowship options available
      <input type="checkbox" />
    </li>
  </ul>
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
      <aside className="right-box">
        <h4>🔍 SEO Keywords</h4>
        <ul>
          <li>Top 10 best university for PhD in Mumbai</li>
          <li>Best university for PhD in Mumbai with low fees</li>
          <li>PhD colleges in Mumbai fees structure</li>
          <li>Best university for PhD in Mumbai for CS</li>
          <li>Top 10 PhD colleges in Mumbai</li>
          <li>PhD colleges for commerce/science</li>
          <li>PhD in Mumbai University</li>
        </ul>
      </aside>
    </div>
  );
};

export default UniversitySelectionMumbai;

