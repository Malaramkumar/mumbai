import React from "react";
import "./PhDAdmissionAssistancePune.scss";

const faqs = [
  {
    q: "Which universities in Pune do you assist with for PhD admissions?",
    a: "We offer complete PhD admission assistance in Pune for top institutions including Savitribai Phule Pune University (SPPU), Symbiosis International University, Bharati Vidyapeeth Deemed University, MIT-WPU, Flame University, and other UGC-recognized public and private universities.",
  },
  {
    q: "Do I need to clear an entrance exam to apply for a PhD in Pune?",
    a: "Yes, most universities in Pune require you to qualify either their PhD Entrance Test (PET) or national-level exams like UGC-NET/JRF or GATE. We help you prepare and guide you on exemption criteria if you already qualify.",
  },
  {
    q: "Can you help me choose the right research topic?",
    a: "Yes. Our experts collaborate with you to select a research-worthy topic aligned with your interests and Pune’s current academic priorities.",
  },
  {
    q: "How do you support proposal writing and formatting?",
    a: "We offer complete support for research proposal drafting, structuring, formatting per university guidelines, and originality validation via plagiarism checks.",
  },
  {
    q: "Will I get help in identifying or connecting with a guide/supervisor?",
    a: "Yes. Our team assists with guide mapping based on your research area and institutional preferences, ensuring smoother admission progression.",
  },
  {
    q: "Do you support part-time and full-time PhD admissions?",
    a: "Yes, we cater to both formats, assisting working professionals, academicians, and research enthusiasts alike.",
  },
  {
    q: "Can international students also apply for PhD programs in Pune?",
    a: "Yes. We support international scholars with eligibility evaluation, visa documentation, and full application assistance.",
  },
  {
    q: "What makes Narpavi Research Institute different?",
    a: "With over 15 years of experience, we provide ethical, end-to-end, and research-driven PhD admission guidance including post-admission mentorship.",
  },
];

const seoKeywords = [
  "Pune University PhD admission 2025",
  "PhD assistance services Pune",
  "SPPU PhD entrance guidance",
  "Symbiosis PhD admission help",
  "Bharati Vidyapeeth PhD consultancy",
  "MIT-WPU doctoral program assistance",
  "Flame University PhD support",
  "Narpavi Research Institute Pune",
];

const relatedLinks = [
  "PhD Admission Assistance in Mumbai",
  "PhD Admission Assistance in Chennai",
  "PhD Admission Assistance in Bangalore",
  "PhD Proposal Writing Support",
  "PhD Guide Selection Assistance",
];

const PhdAssistancePune = () => {
  return (
    <div className="phd-assist-pune">
      <div className="phd-pune-wrapper">
        {/* LEFT: SEO Keywords */}
        <aside className="phd-pune-left">
          <h3>SEO Keywords</h3>
          <ul>
            {seoKeywords.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        </aside>

        {/* CENTER: Main Content */}
        <main className="phd-pune-center">
          <h2>PhD Admission Assistance in Pune | Narpavi Research Institute</h2>

          <p>
            Are you aspiring to pursue a PhD from one of Pune’s prestigious universities? Narpavi Research Institute offers specialized and result-driven PhD admission assistance in Pune, designed to help scholars navigate the complex admission process and secure their place in top research institutions. With over 15 years of academic excellence and experience, we have been a trusted guide to hundreds of PhD aspirants in Pune and across Maharashtra.
          </p>

          <p>
            Pune is known as an academic and research hub, hosting premier universities like Savitribai Phule Pune University, Symbiosis International University, Bharati Vidyapeeth, MIT-WPU, Flame University, and others. Each of these institutions has its own selection protocols, entrance tests, proposal guidelines, and supervisor assignment systems. Our PhD admission assistance in Pune is finely tuned to address these university-specific requirements and deadlines. Whether you're applying through a centralized PhD entrance test (PET) or university-specific channels, we help you prepare every aspect of your application.
          </p>

          <p>
            At Narpavi Research Institute, we assist you in identifying the right university and research centre in Pune that aligns with your area of interest. We help you select a meaningful research topic, connect with a potential guide or supervisor, and craft a compelling research proposal and Statement of Purpose (SOP). Our complete PhD admission assistance in Pune includes documentation support, proposal formatting, plagiarism checks, academic writing, and interview coaching — all customized to meet the expectations of Pune’s top universities.
          </p>
          <p>
            What makes our service unique is our end-to-end support — right from eligibility check and university shortlisting to proposal submission and post-admission guidance. We also provide expert mentoring for students preparing for Savitribai Phule Pune University’s PhD Entrance Test (PET), including previous question bank support, mock tests, and subject-wise orientation. Our dedicated academic mentors and research consultants ensure that every aspect of your PhD admission in Pune is handled with professionalism, accuracy, and commitment.
          </p>
            <p>Our legacy of PhD admission assistance in Pune includes success stories in domains such as Engineering, Management, Science and more. Whether you're a working professional, full-time researcher, or international scholar aiming for research in Pune, we ensure your application stands out with quality and compliance.</p>
            <p>If you're looking for personalized and reliable PhD admission assistance in Pune, Narpavi Research Institute is your most trusted partner. Our mission is to simplify the admission process while maintaining the highest academic and ethical standards. Let us help you unlock the doors to a world-class PhD journey in Pune.</p>
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

          <h3>🔍 Keywords</h3>
          <ul className="keyword-list">
            {seoKeywords.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        </main>

        {/* RIGHT: Related Links */}
        <aside className="phd-pune-right">
          <h3>Related Services</h3>
          <ul>
            {relatedLinks.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default PhdAssistancePune;

