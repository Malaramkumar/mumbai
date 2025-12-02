import React from "react";
import LeftSidebar from "../../LeftSidebar";
//import "./PhDAdmissionMumbaiUniversity.scss";

const services = [
  "Department & Guide Shortlisting",
  "PET Entrance Test Guidance",
  "Proposal & SOP Drafting",
  "Application Form Assistance",
  "Interview & Viva Preparation",
  "University Format & Document Support",
];

const keywords = [
  "PhD admission 2025 in Mumbai University",
  "PET 2025 Mumbai University",
  "Part-time PhD admission MU",
  "PhD consultants Mumbai",
  "PhD guide in Mumbai University",
  " Phd admission assistance 2025 in mumbai university fees",
  "Phd admission assistance 2025 in mumbai university last date",
  "Mumbai University PhD admission 2025",
  "Phd admission assistance 2025 in mumbai university eligibility",
  "Online phd admission assistance 2025 in mumbai university",
];

const faqs = [
  {
    q: "When will Mumbai University start PhD admissions for 2025?",
    a: "The application portal usually opens between April and June. Early planning is highly recommended.",
  },
  {
    q: "Is PET compulsory for PhD admission 2025 in Mumbai University?",
    a: "Yes, unless exempted via UGC-NET, CSIR-NET, GATE, SET, or M.Phil.",
  },
  {
    q: "Can I apply without a final PG mark sheet?",
    a: "Yes, you can apply provisionally. Final documentation is needed before admission confirmation.",
  },
  {
    q: "What are the benefits of doing a PhD from Mumbai University?",
    a: "Recognized faculty, research funding, city networking, and interdisciplinary research opportunities.",
  },
  {
    q: "How does Narpavi help in the PhD process?",
    a: "We provide end-to-end guidance—department selection, PET prep, proposal writing, SOP help, and more.",
  },
  {
    q: "Is there part-time PhD admission 2025 in Mumbai University?",
    a: "Yes, working professionals and faculty are eligible under the part-time or external PhD scheme.",
  },
];

const PhDAdmissionMU2025 = () => {
  return (
    <div className="consulting-layout">
      {/* Left Sidebar */}
      <div className="left-box">
         <a href="/home-page" class="buttonhp">Home Page</a>
        <LeftSidebar/>
        <h3>Services We Offer</h3>
        <ul>
          {services.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="consulting-box">
        <h1>PhD Admission 2025 in Mumbai University</h1>
        <h2>Apply with Confidence – Expert Support from Narpavi Research Institute</h2>

        <p>
          Are you planning to pursue your PhD admission 2025 in Mumbai University? As one of India’s oldest and most prestigious universities, MU offers a strong platform for research in Engineering, Management, Arts, Science, Commerce, Law, and Social Sciences.
        </p>
        <p>
          At Narpavi Research Institute, we provide complete, personalized assistance to help aspirants succeed in every phase of the PhD admission process—from application to proposal to final enrollment.
        </p>

        <h3>🏛️ Why Choose Mumbai University for PhD in 2025?</h3>
        <ul>
          <li>UGC-recognized PhD programs</li>
          <li>Multidisciplinary research departments</li>
          <li>Strong alumni and research ecosystem</li>
          <li>Recognized guides and affiliated research centers</li>
          <li>Support for funded projects and proposals</li>
        </ul>

        <h3>📋 Application Process Timeline</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Timeline</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online Application</td>
                <td>April – June 2025</td>
                <td>Register on MU official portal</td>
              </tr>
              <tr>
                <td>Eligibility Check</td>
                <td>June – July 2025</td>
                <td>PG % and subject domain verification</td>
              </tr>
              <tr>
                <td>PET Exam</td>
                <td>July 2025</td>
                <td>University-level test for non-NET holders</td>
              </tr>
              <tr>
                <td>Proposal + Interview</td>
                <td>August 2025</td>
                <td>Research topic defense</td>
              </tr>
              <tr>
                <td>Final Admission</td>
                <td>September 2025 onwards</td>
                <td>Coursework and supervisor allotment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>📚 Eligibility Criteria</h3>
        <ul>
          <li>Master’s Degree with minimum 55% (50% for reserved)</li>
          <li>UGC-NET, CSIR-NET, GATE, or M.Phil. preferred</li>
          <li>Provisional applicants allowed (final-year PG)</li>
          <li>Part-time PhD available for working professionals</li>
        </ul>

        <h3>🧭 How Narpavi Helps You</h3>
        <ul>
          <li>Department & Guide Selection</li>
          <li>PET Coaching & Tips</li>
          <li>Proposal & SOP Writing</li>
          <li>Application Form Filling</li>
          <li>Mock Interview Practice</li>
        </ul>
        
        <div className="cta">
          <h3>📞 Ready to Apply?</h3>
          <p>Your research journey starts with expert guidance. Contact Narpavi today to plan your PhD admission 2025 in Mumbai University.</p>
          <p><strong>📩</strong> info@narpaviresearch.com</p>
          <p><strong>📱</strong> +91-XXXXXXXXXX</p>
          <p><strong>🌐</strong> www.narpaviresearch.com</p>
        </div>

        <div className="faq-section">
          <h3>💬 FAQs – PhD Admission 2025 in Mumbai University</h3>
          {faqs.map((faq, i) => (
            <details key={i}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>


      </div>

      {/* Right Sidebar */}
      <div className="right-box">
        <h3>Search Tags</h3>
        <ul>
          {keywords.map((k, i) => (
            <li key={i}>{k}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhDAdmissionMU2025;

