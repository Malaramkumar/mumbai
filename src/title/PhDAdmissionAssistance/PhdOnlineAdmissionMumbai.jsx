import React from "react";
import "./PhdOnlineAdmissionMumbai.scss";
import LeftSidebar from "../../LeftSidebar";

const PhdOnlineAdmissionMumbai = () => {
  const faqs = [
    {
      q: "What is online PhD admission assistance in Mumbai?",
      a: "It provides virtual, end-to-end guidance for PhD applications, including topic selection, proposal drafting, guide mapping, and document submission — all conducted online through video calls and chat.",
    },
    {
      q: "Which universities do you support for online PhD admission assistance in Mumbai?",
      a: "University of Mumbai, TISS, NMIMS, Amity University Mumbai, Somaiya Vidyavihar, and other UGC-approved universities offering PhD programs.",
    },
    {
      q: "How do I connect with your team for online assistance?",
      a: "You can book virtual sessions via Zoom, Google Meet, or WhatsApp for consultations, proposal development, and application preparation.",
    },
    {
      q: "Is online guidance as effective as in-person assistance?",
      a: "Yes. Our online PhD admission assistance in Mumbai ensures the same quality and interaction through structured, personalized virtual mentorship.",
    },
    {
      q: "Do you help with Mumbai University PET preparation online?",
      a: "Yes. We provide subject-wise guidance, past paper analysis, and mock PET sessions online.",
    },
    {
      q: "Do you assist working professionals for part-time PhDs?",
      a: "Yes, our flexible virtual support is ideal for professionals applying for part-time PhD programs in Mumbai.",
    },
  ];

  const keywords = [
    "Online PhD admission assistance in Mumbai",
    "Virtual PhD admission guidance",
    "Online PhD consultancy India",
    "PhD admission help via Zoom",
    "PhD assistance for working professionals",
    "Best online PhD consultants in Mumbai",
    "Narpavi Research Institute online PhD support",
  ];

  const relatedLinks = [
    "PhD Admission Help in Mumbai",
    "PhD Proposal Writing Services",
    "PhD Guide Assistance",
    "PhD Thesis Support Online",
    "PhD Topic Selection Help",
  ];

  return (
    <div className="PhdOnlineMumbai">
      {/* LEFT: SEO KEYWORDS */}
      <div className="PhdOnlineMumbai-left">
         <a href="/home-page" class="buttonhp">Home Page</a>
        <LeftSidebar/>
        <h4>🔍 SEO Keywords</h4>
        <ul>
          {keywords.map((word, i) => (
            <li key={i}>{word}</li>
          ))}
        </ul>
      </div>

      {/* CENTER: MAIN CONTENT */}
      <div className="PhdOnlineMumbai-center">
        <h2>🌐 Online PhD Admission Assistance in Mumbai | Narpavi Research Institute</h2>
        <p>
          Looking to pursue a PhD from Mumbai but need expert guidance from the comfort of your home? Narpavi Research Institute offers comprehensive online PhD admission assistance in Mumbai, tailored for scholars in Engineering, Management, and Arts & Science disciplines. With over 15 years of proven academic excellence, we help PhD aspirants navigate every step of the admission journey—virtually and efficiently.
        </p>
        <p>
          Mumbai is home to some of India’s most respected research universities, such as the University of Mumbai, TISS, NMIMS, Amity University Mumbai, and Somaiya Vidyavihar University. Each institution has its unique application protocols, entrance exams, proposal submission formats, and supervisor selection procedures. Through our online PhD admission assistance in Mumbai, you get direct access to experienced industrial based mentors and consultants—no matter where you're located.
        </p>
        <p>
          At Narpavi Research Institute, we make PhD admission support fully accessible through online platforms. Our virtual services include live 1-on-1 consultations, proposal development sessions, SOP reviews, guide referrals, plagiarism checks, document verification, etc., Whether you're preparing for the Mumbai University PET or submitting a research concept note to NMIMS or TISS, our online PhD admission assistance in Mumbai ensures you are academically prepared and professionally guided.
        </p>
        <p>
          We understand the challenges faced by working professionals, full-time students, and international applicants. That’s why our online PhD admission assistance in Mumbai is designed to be flexible, fast, and aligned with individual schedules. From research topic selection in Engineering and Management to literature review planning for Arts & Science disciplines, our expert academic panel provides personalized insights and recommendations over video calls, chat, and email.
        </p>
        <p>
          What sets us apart is our domain-specific and university-specific approach. For Engineering PhD aspirants, we help develop proposals in cutting-edge fields like Artificial Intelligence, Robotics, IoT, VLSI, and Renewable Energy. For Management researchers, we guide you in formulating proposals in Business Analytics, Finance, HR, and Strategic Management. In Arts & Science, we offer deep academic support in fields such as English, Sociology, Psychology, Chemistry, and Environmental Science. Our online PhD admission assistance in Mumbai ensures that each proposal meets academic standards and is aligned with the latest research priorities.
        </p>
        <p>
          Whether you’re applying for a full-time PhD or part-time program, our virtual assistance covers it all—eligibility checks, university shortlisting, guide coordination, document submission, and interview preparation. With our strong record of successful admissions and satisfied scholars, Narpavi Research Institute remains a preferred name in online PhD admission assistance in Mumbai.
        </p>
        <p>
          Start your doctoral journey with expert virtual guidance. Choose Narpavi Research Institute for reliable, ethical, and research-driven online PhD admission assistance in Mumbai—anytime, anywhere.
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

      {/* RIGHT: RELATED LINKS */}
      <div className="PhdOnlineMumbai-right">
        <h4>📘 Related Links</h4>
        <ul>
          {relatedLinks.map((link, i) => (
            <li key={i}>{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhdOnlineAdmissionMumbai;

