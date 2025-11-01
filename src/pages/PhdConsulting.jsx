import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./PhdConsulting.scss";
const faqs = [
  {
    question: "What does a PhD consulting service cover?",
    answer: "It covers everything from university selection, proposal writing, entrance preparation, to thesis drafting, journal publication, and viva voce guidance."
  },
  {
    question: "Is PhD consulting legal and acceptable in India?",
    answer: "Yes. As long as the services are ethical—such as editing, formatting, mentoring, and technical review—consulting is legal and widely accepted by scholars and universities."
  },
  {
    question: "Which universities do you support for PhD in Mumbai?",
    answer: "We support scholars applying to IIT Bombay, University of Mumbai, SNDT, TISS, NMIMS, and other recognized institutions in Maharashtra and across India."
  },
  {
    question: "Can you help with publication in UGC/Scopus/SCI journals?",
    answer: "Yes. We assist in shortlisting suitable journals, formatting as per guidelines, submitting manuscripts, and handling reviewer comments."
  },
  {
    question: "Do you help with plagiarism checks and formatting?",
    answer: "Absolutely. We use tools like Turnitin and Grammarly Premium to ensure plagiarism-free content and follow your university’s formatting requirements."
  }
];


const PhDConsultingMumbai = () => {
   const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);
  return (
    <div className="consulting-wrapper">
      <div className="left-side">
        <h3>Explore Topics</h3>
        <ul>
          <li>Admission Support</li>
          <li>Funding Guidance</li>
          <li>Proposal Writing</li>
          <li>Thesis & Journal Help</li>
          <li>Research Implementation</li>
        </ul>
      </div>

      <div className="main-content">
        <h1>PhD Consulting – Assistance and Guidance in Mumbai</h1>

        <h2>Why PhD Support Matters More Than Ever</h2>
        <p>
          Embarking on a PhD journey in today’s academic environment demands more than just knowledge—it requires strategic planning, domain expertise, and professional mentorship. With competitive admissions, funding challenges, and intense publishing pressure, scholars often need structured support to succeed.
        </p>
        <p>
          At Narpavi Research Institute, we provide expert-led PhD Consulting – Assistance and Guidance in Mumbai, supporting scholars across every stage of their doctoral lifecycle—from admissions to viva voce. Our end-to-end services are designed to empower PhD aspirants with the tools, mentorship, and technical writing skills they need to complete their research journey with confidence.
        </p>
        <p>
          Whether you're targeting IIT Bombay, University of Mumbai, TISS, or NMIMS, our customized PhD Consulting – Assistance and Guidance in Mumbai ensures that you stay on the right track—academically, professionally, and ethically.
        </p>

        <h2>🎓 PhD Admission, Funding & Career Pathways</h2>
        <p>Our PhD Consulting – Assistance and Guidance in Mumbai begins at the foundation—helping you secure admission at the right university. We assist with university selection, eligibility verification, entrance exam preparation, and proposal readiness. In addition, we guide you through available PhD funding and scholarships, such as:</p>
        <ul>
          <li>UGC-NET JRF / CSIR fellowships</li>
          <li>DST, DBT, ICSSR, and AICTE-sponsored funding</li>
          <li>University-level merit scholarships</li>
          <li>Industry-sponsored & part-time fellowships</li>
        </ul>
        <p>Beyond academics, our consulting also emphasizes career opportunities for PhD scholars in academia, research labs, corporate R&D, policy think tanks, and postdoctoral fellowships both in India and abroad. Our expert mentors help you align your PhD research with long-term employability.
</p>

        <h2>✍️ Writing Support: Proposal to Publication</h2>
        <p>A key pillar of our PhD Consulting – Assistance and Guidance in Mumbai is our professional writing support, tailored for each phase of your doctoral program. We offer:
</p>
        <div className="why-narpavi-wrapper">
  <h2>WHY CHOOSE NARPAVI FOR YOUR PHD JOURNEY?</h2>
  <p className="subtext">We offer tailored support at every stage — from proposal to viva — ensuring academic excellence with expert guidance.</p>

  <div className="service-table-wrapper">
    <table className="service-table">
      <thead>
        <tr>
          <th className="col-index"></th>
          <th className="col-service">Service</th>
          <th className="col-desc">Description</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>01</td>
          <td>Research Proposal</td>
          <td>University‑specific proposals with objectives, gap analysis, and feasibility checks</td>
        </tr>
        <tr>
          <td>02</td>
          <td>Funding Proposal</td>
          <td>Assistance in writing grant proposals for national and institutional research funds</td>
        </tr>
        <tr>
          <td>03</td>
          <td>Synopsis Writing</td>
          <td>Summarising your research direction, methods, and preliminary findings as per guidelines</td>
        </tr>
        <tr>
          <td>04</td>
          <td>Thesis Writing</td>
          <td>End‑to‑end support including data interpretation, formatting, plagiarism check, and references</td>
        </tr>
        <tr>
          <td>05</td>
          <td>Journal Article</td>
          <td>Drafting, formatting, and aligning your paper with Scopus / SCI / UGC journal scopes</td>
        </tr>
        <tr>
          <td>06</td>
          <td>Publication Support</td>
          <td>Journal shortlisting, formatting, submission, and revision handling</td>
        </tr>
        <tr>
          <td>07</td>
          <td>Viva Voce Prep</td>
          <td>Mock sessions, Q&A sets, presentation design, and confidence‑building training</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

        <p>Our writing experts ensure that your work is technically sound, plagiarism-free, and aligned with the expectations of both universities and top-tier journals.
</p>

        <h2>🔬 Research Development & Implementation Assistance</h2>
        <p>Beyond writing, successful research depends on real-world implementation. As part of our PhD Consulting – Assistance and Guidance in Mumbai, we assist scholars in:</p>
        <ul>
          <li>Finalizing research methodology and tools</li>
          <li>Designing experiments or field studies</li>
          <li>Software development for technical research (MATLAB, Python, SPSS, etc.)</li>
          <li> Data collection, coding, analysis, and visualization </li>
          <li> Prototyping and model development (especially for Engineering, IT, and Applied Sciences) </li>
        </ul>
      <p>This hands-on research implementation assistance ensures that your project doesn’t remain theoretical but evolves into actionable and publishable outcomes.</p>

        <h2>🌐 Why Choose Narpavi for PhD Consulting – Assistance and Guidance in Mumbai?</h2>
        <p>Choosing Narpavi Research Institute means partnering with Mumbai’s most trusted name in doctoral research services. Here’s what sets our PhD Consulting – Assistance and Guidance apart:</p>
        <ul>
          <li>🧑‍🏫 1-on-1 expert mentoring across 25+ domains</li>
          <li>🏛️ University-specific support for IIT-B, TISS, NMIMS, University of Mumbai, and others</li>
          <li>📄 Proposal and thesis support aligned with UGC, AICTE, and NAAC norms</li>
          <li>🧾 Plagiarism control and journal publication roadmap</li>
          <li>🎯 Career-focused consulting with academic CV, postdoc planning, and more</li>
        </ul>
        <p>We ensure that every PhD scholar is equipped not just to complete their degree—but to thrive in their research career and professional life.</p>

            <section id="faqs" className="faq-section11">
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
<<<<<<< HEAD
        </section>
=======
        </section>  
>>>>>>> 56075816bb97cd6566cbf2ae701d4aa0dc9307f9
      </div>

      <div className="right-side">
        <h3>📌 Keywords</h3>
            <ul>
              <li>Best PhD consulting assistance and guidance in Mumbai</li>
              <li>Best PhD assistance in India</li>
              <li>PhD guidance review</li>
              <li>PhD guidance in India</li>
              <li>PhD assistance services</li>
              <li>Chanakya PhD assistance</li>
              <li>PhD Guide eligibility</li>
            </ul>
      </div>
    </div>
  );
};

export default PhDConsultingMumbai;
