import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./PhDAdmissionAssistanceforThreeState.scss";

const seoKeywords = [
  "PhD admission assistance in Mumbai",
  "Online PhD admission assistance in Mumbai",
  "PhD admission consultants in India",
  "PhD assistance services",
  "PhD guide",
  "PhD help in Mumbai",
  "Best PhD admission consultants in Maharashtra and Mumbai",
  "Best phd admission support in mumbai",
  "Best PhD assistance in India",
  "Academic research consultancy services",
  "Top phd research consultant in mumbai",
  "Best phd research consultant in mumbai",
  "PhD consultancy in India",
  "Research Consultancy firm",
];

const navLinks = [
  { path: "/best-phd-research-consultant-in-Mumbai", label: "PhD Research Consultant" },
  { path: "/phd-admission-2025-in-mumbai", label: "PhD Admission 2025 in Mumbai" },
  { path: "/phd-admission-2025-in-mumbai-university", label: "PhD Admission in Mumbai University" },
  { path: "/phd-admission-2025-in-pune-university", label: "PhD Admission in Pune University" },
  { path: "/phd-admission-assistance-in-pune-university", label: "PhD Admission Assistance in Pune University" },
  { path: "/phd-admission-help-in-Mumbai", label: "PhD Admission Help in Mumbai" },
  { path: "/online-phd-admission-assistance-in-Mumbai", label: "Online PhD Admission Assistance in Mumbai" },
  { path: "/phd-admission-assistance-in-mumbai-2025", label: "PhD Admission Assistance in Mumbai 2025" },
];

const faqs = [
  {
    question: "Who can apply for PhD admission assistance in Mumbai?",
    answer:
      "Anyone with a Master’s degree (or equivalent) in a relevant field and a desire to pursue a doctoral degree can apply. We assist scholars from engineering, management, science, arts, and social science backgrounds.",
  },
  {
    question: "Is online PhD admission assistance available for outstation candidates?",
    answer:
      "Yes, we provide comprehensive online PhD admission assistance through calls, video sessions, email, and shared documents. Our team ensures constant communication and transparency throughout the process.",
  },
  {
    question: "Do you help in selecting the PhD research topic?",
    answer:
      "Absolutely. Topic selection is one of our core strengths. We analyze your academic background, research interests, and career goals to help identify a relevant and impactful research topic.",
  },
  {
    question: "What does your PhD proposal assistance include?",
    answer:
      "Our assistance includes topic refinement, research gap identification, objective framing, methodology design, plagiarism check, and final formatting as per university guidelines.",
  },
  {
    question: "Do you offer support after the PhD admission is completed?",
    answer:
      "Yes, we offer end-to-end research support including research implementation, journal/conference paper writing, publication, synopsis, and thesis guidance.",
  },
];


const PhDAdmissionMainPage = () => {
  const navigate = useNavigate();
  
const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-page-container">
      {/* Left Sidebar */}
      <aside className="left-side">
        <h3>🔍 SEO Keywords</h3>
        <ul>
          {seoKeywords.map((keyword, idx) => (
            <li key={idx}>{keyword}</li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>PhD Admission Assistance in Mumbai | Narpavi Research Institute</h1>
        <p>With over 15 years of expertise, Narpavi Research Institute stands as a trusted leader in PhD admission assistance in Mumbai. Our institute is dedicated to empowering doctoral aspirants with the right guidance, resources, and support to successfully secure admissions in top-tier universities across Maharashtra, including renowned institutions in Mumbai, Pune, and Nagpur. From selecting the right university to preparing a compelling research proposal, we offer end-to-end solutions tailored to your academic goals.</p>

        <p>At Narpavi Research Institute, we understand that pursuing a PhD is not just about clearing eligibility; it’s about strategically aligning your academic profile with the expectations of leading universities. Our specialized PhD admission assistance in Mumbai ensures that students are well-prepared at every step—from eligibility checks, documentation, and topic selection, to guide/mentor referrals, proposal drafting, and assist in any university-specific admission requirement. Our in-depth understanding of institutional frameworks and admission norms helps us provide highly customized support for each aspirant.</p>

        <p>We take pride in our vast network of industrial experts and professionals across disciplines, helping you secure mentorships that align with your field of research. With our proven track record in PhD admission assistance in Mumbai, we have successfully helped hundreds of candidates gain admission in prestigious universities such as Mumbai University, Shivaji University, Savitribai Phule Pune University and other UGC-recognized private and public institutions.</p>

        <p>What sets us apart is our strategic, research-focused approach. We don’t just help you get into a PhD program—we lay the foundation for your doctoral success. Our dedicated support in proposal development, topic refinement, plagiarism check, and academic SOP creation forms the backbone of our PhD admission assistance in Mumbai. Whether you're in the early stage of deciding your domain or already have a research idea in mind, our experienced team is here to streamline your admission journey.</p>
     
        <p>Our process includes guiding in identifying the right university based on your academic background, interest area, and long-term goals. We guide you in presenting your research interest in a manner that appeals to the university’s PhD admission panel. This comprehensive, ethical, and transparent approach makes us a preferred choice for PhD admission assistance in Mumbai among aspiring scholars.</p>

        <p>In addition to admissions, we extend our support beyond the enrolment phase—providing post-admission research planning, research Methodology including Implementation and Development, Research Article/Journal paper writing, Publication support, Synopsis writing support and Thesis writing support/guidance. This holistic service ecosystem makes Narpavi Research Institute a one-stop destination for all your PhD academic needs.</p>

        <p>If you are seeking reliable, result-oriented, and personalized PhD admission assistance in Mumbai, look no further than Narpavi Research Institute. Let us help you turn your academic aspirations into research excellence.</p>

        <h2>Why PhD admission in Mumbai & Maharashtra:</h2>
        <ul>
          <li>🎓 150+ UGC & AICTE-recognized universities and research institutes</li>
          <li>🏫 Top institutions: IIT Bombay, University of Mumbai, Savitribai Phule Pune University, TISS, VJTI</li>
          <li>💰 Affordable tuition starting from ₹30,000/year</li>
          <li>🧪 Research grants from UGC, CSIR, DBT, DST & SERB</li>
          <li>🛬 Well-connected for global scholars via Mumbai & Pune international airports</li>
        </ul>

        <h2>PhD funding opportunities in Mumbai & Maharashtra:</h2>
        <ul>
          <li>💸 UGC-NET JRF and CSIR provide ₹31,000–₹35,000/month plus HRA</li>
          <li>🧪 DST-INSPIRE, DBT-BET, and SERB offer up to ₹35,000/month</li>
          <li>🎓 Rajiv Gandhi (SC/ST), Maulana Azad (Minorities): ₹25,000–₹28,000/month</li>
          <li>📘 Eklavya Scholarship: ₹5,000/month to eligible full-time PhD scholars</li>
          <li>🏅 Institutional Assistantships: ₹20,000–₹30,000/month</li>
          <li>🌍 Global fellowships (DAAD, Fulbright, Erasmus+): ₹1.2 lakh/month incl. travel/research</li>
        </ul>

        <h2>🏆 What Makes Our PhD admission support Exceptional</h2>
        <ul>
          <li>✔️ 15+ years of academic consulting expertise</li>
          <li>✔️ Served 1,000+ PhD aspirants across India</li>
          <li>✔️ Deep knowledge of Maharashtra's PhD ecosystem</li>
          <li>✔️ Online and On-ground support in Mumbai</li>
          <li>✔️ Expert mentoring/guidance from various industries</li>
        </ul>

        <h2>Shape Your Research Future in Mumbai —With Us by Your Side</h2>
        <p>PhD admissions in Mumbai require a clear academic vision, expert mentorship, and strategic
execution. We deliver all three—guided by transparency, upheld by integrity, and supported by a
consistent record of successful outcomes.</p>

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
      <aside className="right-side">
        <h3>📁 Related Services</h3>
        <ul>
          {navLinks.map((link, idx) => (
            <li key={idx} onClick={() => navigate(link.path)}>{link.label}</li>
          ))}
        </ul>
      </aside>
      
    </div>
  );
};

export default PhDAdmissionMainPage;

