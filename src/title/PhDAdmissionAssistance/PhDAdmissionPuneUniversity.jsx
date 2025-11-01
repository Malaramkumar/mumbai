import React from 'react';
import './PhdAdmissionPuneUniversity.scss';
 const faqs = [
  {
    question: "How do I select the right university for my research domain?",
    answer:
      "Identify universities that actively publish in your domain, have reputed guides, and possess modern facilities or labs relevant to your research area."
  },
  {
    question: "What factors should I check before applying to a university?",
    answer:
      "Review the eligibility criteria, guide availability, department research activity, funding opportunities, and the application deadlines."
  },
  {
    question: "Does Narpavi Research Institute provide university selection support?",
    answer:
      "Yes, Narpavi Research Institute assists scholars in shortlisting and evaluating universities based on research compatibility, publication track record, and funding potential."
  },
  {
    question: "Can I apply to multiple universities simultaneously?",
    answer:
      "Yes, you can apply to multiple institutions to maximize your chances, provided each application meets their respective eligibility and documentation requirements."
  },
  {
    question: "What if my research area is interdisciplinary?",
    answer:
      "In such cases, Narpavi Research Institute helps identify universities that encourage cross-disciplinary research and have collaborative departments aligned with your topic."
  }
];


const PhdPuneUniversity = () => {
  return (
    <div className="phd-pune-layout">
      {/* ================= LEFT SIDEBAR ================= */}
      <div className="left-box">
        <h3>🔑 SEO Keywords</h3>
        <ul>
          <li>PhD Admission 2025 in Pune University</li>
          <li>Savitribai Phule Pune University PhD</li>
          <li>Pune University PhD Entrance Exam 2025</li>
          <li>SPPU PhD Admission Process 2025</li>
          <li>Pune University PET 2025 Details</li>
          <li>PhD Admission Eligibility in Pune University</li>
          <li>Pune University PhD Fees Structure</li>
          <li>PhD Entrance Date Pune University 2025</li>
        </ul>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="phd-pune-box">
        <div className="content">
          <h2>🎓 PhD Admission 2025 in Pune University</h2>
          <p>
            Are you planning to apply for PhD admission 2025 in Pune University? Known officially as Savitribai Phule Pune University (SPPU), it is one of India’s most prestigious state universities, offering diverse and high-quality research opportunities. At Narpavi Research Institute, we provide structured, personalized support to help scholars successfully navigate the PhD admission 2025 in Pune University process—from application to final enrollment.
          </p>
          <p>
            Whether you belong to Engineering, Management, or Arts & Science, PhD admission 2025 in Pune University opens doors to research excellence, access to top-ranked guides, and a globally respected academic ecosystem.
          </p>

          <h3>🏛️ Why Pursue PhD at Pune University in 2025?</h3>
          <ul>
            <li>✅ NAAC ‘A+’ grade and UGC-recognized research programs</li>
            <li>✅ Over 300 affiliated colleges and 50+ academic departments</li>
            <li>✅ Availability of both full-time and part-time PhD options</li>
            <li>✅ Advanced research centres in AI, Renewable Energy, Humanities, Management, and more</li>
            <li>✅ Regular fellowships and government-supported research funding</li>
          </ul>

          <h3>📋 Application Process – PhD Admission 2025 in Pune University</h3>
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Timeline (Tentative)</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online Application</td>
                <td>April – June 2025</td>
                <td>Submit form via unipune.ac.in with required documents</td>
              </tr>
              <tr>
                <td>Eligibility Screening</td>
                <td>June 2025</td>
                <td>Based on PG qualification, marks, and exemptions (NET/GATE)</td>
              </tr>
              <tr>
                <td>PhD Entrance Test (PET)</td>
                <td>July 2025</td>
                <td>Conducted by Pune University (mandatory unless exempted)</td>
              </tr>
              <tr>
                <td>Interview & Proposal Review</td>
                <td>August 2025</td>
                <td>Viva and presentation before the Research Admission Committee</td>
              </tr>
              <tr>
                <td>Provisional Admission</td>
                <td>September – October 2025</td>
                <td>Coursework and guide allocation begins</td>
              </tr>
            </tbody>
          </table>

          <h3>🎯 Eligibility Criteria for PhD Admission 2025 in Pune University</h3>
          <ul>
            <li>A Master’s degree in a relevant discipline with at least 55% marks (50% for reserved categories)</li>
            <li>A valid score in UGC-NET, CSIR-NET, GATE, or Pune University PET</li>
            <li>A clear research interest aligned with the university’s offered domains</li>
            <li>Working professionals may apply for part-time programs</li>
          </ul>

          <h3>💼 Our Services for PhD Admission 2025 in Pune University</h3>
          <ul>
            <li>🔍 Assist in University & Department Selection based on specialization</li>
            <li>✍️ Proposal & Synopsis Development with expert feedback</li>
            <li>🧠 Provide guidance in preparing Interview & Viva Prep</li>
            <li>📄 Document Management & SOP Drafting</li>
            <li>🧭 Post-Admission Guidance for coursework, guide allotment, and research roadmap</li>
          </ul>

          <h3>🌐 Key Research Domains at Pune University</h3>
          <ul>
            <li>📘 Engineering (Mechanical, ECE, AI/ML, Civil)</li>
            <li>📊 Management (Marketing, HR, Finance, Operations)</li>
            <li>🎨 Arts & Humanities (Sociology, History, Literature)</li>
            <li>🔬 Sciences (Physics, Chemistry, Mathematics, Biotech)</li>
            <li>🌍 Interdisciplinary (Environmental Science, Social Policy, Education)</li>
          </ul>

          {/* FAQ Section */}
        <section className="faq-section">
          <h3>❓ Frequently Asked Questions</h3>
          {faqs.map((faq, idx) => (
            <details key={idx}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>

          <h3>📞 Start Your PhD Journey with Narpavi Research Institute</h3>
          <p>With our structured guidance and experienced mentors, you can confidently pursue PhD admission 2025 in Pune University.</p>
        </div>
      </div>

      {/* ================= RIGHT SIDEBAR ================= */}
      <div className="right-box">
        <h3>📚 Related Links</h3>
        <ul>
          <li><a href="/phd-admission-mumbai-university">PhD Admission 2025 in Mumbai University</a></li>
          <li><a href="/phd-admission-anna-university">PhD Admission 2025 in Anna University</a></li>
          <li><a href="/phd-admission-bangalore-university">PhD Admission 2025 in Bangalore University</a></li>
          <li><a href="/phd-admission-delhi-university">PhD Admission 2025 in Delhi University</a></li>
          <li><a href="/phd-guide-selection">PhD Guide Selection Services</a></li>
          <li><a href="/phd-synopsis-writing">PhD Synopsis Writing Services</a></li>
          <li><a href="/phd-publication-support">PhD Publication Support</a></li>
        </ul>
      </div>
    </div>
  );
};

export default PhdPuneUniversity;

