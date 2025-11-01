
import React from "react";
import "./PhdAdmissionHelpMumbai.scss";

const PhdAdmissionHelpMumbai = () => {
  const faqs = [
    {
      q: "What does your PhD admission help in Mumbai include?",
      a: "It includes support from university selection, eligibility assessment, proposal writing, guide identification, document preparation, PET assistance, and interview readiness.",
    },
    {
      q: "Which universities in Mumbai do you support?",
      a: "University of Mumbai, TISS, NMIMS, Somaiya Vidyapeeth, Amity University Mumbai, and other UGC-approved institutions.",
    },
    {
      q: "Do you assist with the Mumbai University PET exam preparation?",
      a: "Yes, we offer subject-specific guidance and previous question reviews for PET preparation.",
    },
    {
      q: "Can working professionals also get PhD admission help?",
      a: "Yes, we offer flexible part-time PhD assistance for working professionals with guide selection and topic structuring.",
    },
    {
      q: "Do you help with choosing a PhD research topic?",
      a: "Yes, our experts help identify relevant and innovative topics aligned with university requirements.",
    },
    {
      q: "Is this service available online?",
      a: "Yes, through Zoom, Google Meet, and WhatsApp — available nationwide.",
    },
  ];

  const keywords = [
    "PhD admission help in Mumbai",
    "Best PhD consultants in India",
    "PhD assistance services",
    "PhD help in Delhi",
    "PhD thesis guidance in Chennai",
    "Research proposal writing Mumbai",
    "PhD guide support",
    "Narpavi Research Institute PhD services",
  ];

  return (
    <div className="PhdAdmissionMumbai">
      <div className="PhdAdmissionMumbai-left">
        <h4>🔍 SEO Keywords</h4>
        <ul>
          {keywords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>

      <div className="PhdAdmissionMumbai-center">
        <h2>🎓 PhD Admission Help in Mumbai | Narpavi Research Institute</h2>
       <p>
          Looking for trusted, expert-led PhD admission help in Mumbai? At Narpavi Research Institute, we offer end-to-end guidance for scholars pursuing doctoral programs in Engineering, Management, and Arts & Science disciplines. With over 15 years of experience and a strong network of academic experts, we make the PhD admission process in Mumbai clear, structured, and result-oriented.
        </p>
        <p>
          Mumbai is home to some of India’s most competitive and research-driven universities, such as the University of Mumbai, TISS, NMIMS, Somaiya Vidyapeeth, Amity University Mumbai, and other UGC-recognized institutions. Each of these has a distinct admission process that includes entrance exams (like PET), proposal submission, supervisor selection, and departmental approvals. Our PhD admission help in Mumbai ensures that you meet all of these requirements with professional accuracy and academic integrity.
        </p>
        <p>
          At Narpavi Research Institute, we offer a full suite of services—from shortlisting suitable universities to preparing research proposals, SOPs, academic CVs, and guide/supervisor referrals. Whether you're applying for a full-time or part-time PhD, our PhD admission help in Mumbai covers everything from eligibility assessment and document preparation to interview training and plagiarism screening.
        </p>
        <p>
          We specialize in helping PhD aspirants within Engineering, Management, and Arts & Science domains. For Engineering scholars, we support topics in AI, IoT, Mechanical Design, Civil Engineering, and Electronics. For Management researchers, we help with research in HRM, Marketing, Finance, and Strategy. For Arts & Science, our academic consultants assist with proposals in subjects like English, Psychology, Economics, Chemistry, and Physics. Our subject-specific PhD admission help in Mumbai ensures your application aligns with current research priorities and university standards.
        </p>
        <p>
          Our support doesn’t stop with just the application. We continue to guide scholars through proposal presentations, ethics clearance, and compliance with university regulations—ensuring a seamless start to their PhD journey. Many of our students have gained admission into Mumbai’s top institutions, thanks to our hands-on, personalized approach to PhD admission help in Mumbai.
        </p>
        <p>
          Whether you're a recent postgraduate or a working professional, our flexible consultation options—both in-person and online—are designed to fit your schedule and academic needs. We pride ourselves on ethical practices, academic quality, and student success.
        </p>
        <p>
          If you are serious about pursuing your doctoral dreams and want the most reliable PhD admission help in Mumbai, Narpavi Research Institute is here to guide you every step of the way.
        </p>


         {/* FAQ Section */}
        <section className="faq-section">
          <h3>Frequently Asked Questions</h3>
          {faqs.map((faq, idx) => (
            <details key={idx}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </section>
      </div>

      <div className="PhdAdmissionMumbai-right">
        <h4>📘 Related Links</h4>
        <ul>
          <li>PhD Topic Selection Services</li>
          <li>PhD Proposal Writing Help</li>
          <li>PhD Guide Assistance</li>
          <li>PhD Thesis Support</li>
          <li>Journal Publication Help</li>
        </ul>
      </div>
    </div>
  );
};

export default PhdAdmissionHelpMumbai;

