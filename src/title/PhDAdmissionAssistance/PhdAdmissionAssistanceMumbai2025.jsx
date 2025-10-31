
import React from "react";
import "./PhdAdmissionAssistanceMumbai2025.scss";

const PhdAdmissionAssistanceMumbai2025 = () => {
  const seoKeywords = [
    "PhD admission assistance 2025 in Mumbai",
    "PhD admission process in Mumbai University",
    "PhD guide selection in Mumbai",
    "PhD proposal writing help Mumbai",
    "Narpavi Research Institute PhD support Mumbai",
  ];

  const relatedLinks = [
    "PhD Admission Assistance 2025 in Pune",
    "PhD Admission Assistance 2025 in Chennai",
    "PhD Admission Assistance 2025 in Delhi",
    "PhD Proposal Writing Services in Mumbai",
    "PhD Guide Selection Support 2025",
  ];

  const faqs = [
    {
      question:
        "What is the last date for PhD admission 2025 in Mumbai University?",
      answer: "The online application is expected to close by June 2025.",
    },
    {
      question: "Is PET compulsory for all applicants?",
      answer:
        "Candidates with valid UGC-NET, CSIR, GATE, or SET scores are exempted from PET.",
    },
    {
      question: "Can working professionals apply for part-time PhD?",
      answer:
        "Yes, Mumbai University allows part-time PhD programs for eligible working professionals.",
    },
    {
      question: "What is the structure of the PET exam?",
      answer:
        "The PET exam consists of two sections: research methodology and subject-specific questions.",
    },
    {
      question: "Does Narpavi Research Institute assist with the application?",
      answer:
        "Yes, we guide candidates with application forms, research proposals, and documentation, but applications are submitted by candidates themselves.",
    },
  ];

  return (
    <div className="phd-mumbai-layout">
      {/* LEFT: SEO KEYWORDS */}
      <aside className="phd-mumbai-left">
        <h3>SEO Keywords</h3>
        <ul>
          {seoKeywords.map((keyword, index) => (
            <li key={index}>{keyword}</li>
          ))}
        </ul>
      </aside>

      {/* CENTER: MAIN CONTENT */}
      <section className="phd-mumbai-center">
         <h1>🎓 PhD Admission Assistance 2025 in Mumbai | Powered by Narpavi Research Institute</h1>
        <p>
          Are you aiming to pursue a PhD in Engineering, Management, or Arts & Science from a top university in Mumbai? Narpavi Research Institute offers expert-led PhD admission assistance 2025 in Mumbai, tailored specifically for scholars in these core domains. With over 15 years of specialized experience, we guide aspirants through the complete admission lifecycle—from university selection to final proposal approval—ensuring a successful, stress-free start to your research journey.
        </p>
        <p>
          Mumbai is a leading academic hub, home to renowned research institutions such as University of Mumbai, IIT Bombay (for interdisciplinary collaboration), NMIMS Deemed-to-be University, TISS (for management and social sciences), Somaiya Vidyavihar University, and Amity University Mumbai. These universities offer competitive and research-intensive doctoral programs. Our dedicated PhD admission assistance 2025 in Mumbai equips candidates in Engineering, Management, and Arts & Science with the right tools, strategy, and support to meet these institutions’ rigorous expectations.
        </p>
        <p>
          At Narpavi Research Institute, our approach is structured, ethical, and discipline-specific. We offer customized research proposal guidance, topic selection assistance, guide/supervisor mapping, university shortlisting, plagiarism checks, and help with documentation and compliance. Our PhD admission assistance 2025 in Mumbai is specially designed for aspirants from technical, managerial, and academic backgrounds who wish to take their research ambitions to the next level.
        </p>
        <p>
          If you're applying for a PhD in Engineering, our experts help you identify relevant domains like AI, IoT, Robotics, Renewable Energy, VLSI, or Mechanical Design, and align your proposal with ongoing departmental research at Mumbai-based institutions. For Management PhD aspirants, we assist in formulating research proposals in areas such as Business Analytics, HRM, Finance, Strategy, and Marketing. For scholars in Arts & Science, we help refine research areas across disciplines like English, Economics, Psychology, Physics, Chemistry, or Life Sciences.
        </p>
        <p>
          Our PhD admission assistance 2025 in Mumbai includes preparation for university entrance exams (like the PET at University of Mumbai), proposal formatting as per specific university norms, SOP development, and even mock interviews to boost your selection chances. We work closely with scholars to ensure every element of the application reflects academic clarity, research relevance, and institutional alignment.
        </p>
        <p>
          Whether you’re a working professional looking for part-time opportunities or a fresh postgraduate pursuing full-time doctoral research, our PhD admission assistance 2025 in Mumbai is designed to fit your schedule and academic profile. We simplify the process, offer expert academic counseling, and guide you step by step, ensuring transparency, accuracy, and timely action.
        </p>
        <p>
          Join hundreds of successful PhD aspirants who began their journey with Narpavi. If you are looking for domain-specific, research-focused PhD admission assistance 2025 in Mumbai, choose Narpavi Research Institute—your trusted academic partner in Engineering, Management, and Arts & Science research.
        </p>
        <section id="final-checklist">
          <h2>📌 Final Checklist Before Finalizing the University</h2>
          <ul className="checklist">
            <li>University supports your research domain <input type="checkbox" /></li>
            <li>Compatible guide identified <input type="checkbox" /></li>
            <li>Active department publishing <input type="checkbox" /></li>
            <li>Application window is open <input type="checkbox" /></li>
            <li>Facilities & labs are sufficient <input type="checkbox" /></li>
            <li>You meet eligibility <input type="checkbox" /></li>
            <li>Funding/fellowship options available <input type="checkbox" /></li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h3>Frequently Asked Questions</h3>
          {faqs.map((faq, idx) => (
            <details key={idx}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>

      </section>

      {/* RIGHT: RELATED LINKS */}
      <aside className="phd-mumbai-right">
        <h3>Related Links</h3>
        <ul>
          {relatedLinks.map((link, index) => (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default PhdAdmissionAssistanceMumbai2025;
