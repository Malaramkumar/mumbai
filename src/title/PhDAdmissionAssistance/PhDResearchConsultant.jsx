import React from "react";
import "./PhDResearchConsultant.scss";

const services = [
  "PhD Topic Selection & Refinement",
  "Research Proposal & Synopsis Writing Guidance",
  "Literature Review Structuring",
  "Research Design Planning (Qualitative, Quantitative, Mixed Methods)",
  "Data Analysis Support (SPSS, R, Python, Excel – based on subject)",
  "Referencing & Citation Assistance (APA, MLA, IEEE, etc.)",
  "University-Specific Formatting and Drafting Insights",
  "Journal Publication Strategy & Targeting",
];

const faqs = [
  {
    question: "Why is Narpavi Research Institute considered one of the best PhD research consultants in Mumbai?",
    answer:
      "We have over 15 years of focused experience, a deep understanding of Mumbai-based universities’ PhD processes, and an ethical approach to guiding scholars. Our domain experts provide structured, academic support—not just services, but mentorship.",
  },
  {
    question: "Do you provide support only for students in Mumbai?",
    answer:
      "While we’re based in Mumbai and understand its academic ecosystem best, we support scholars from across India through both online and offline modes.",
  },
  {
    question: "Which PhD disciplines do you support?",
    answer:
      "We specialize in Engineering, Management, and Arts & Science disciplines. Our team consists of subject-matter experts with academic and industrial research exposure.",
  },
  {
    question: "Can you help me finalize my PhD topic and write the synopsis?",
    answer:
      "Yes. We help you select a feasible, relevant, and research-worthy topic and guide you in drafting a university-compliant synopsis, including objectives, methodology, and expected outcomes.",
  },
  {
    question: "Do you offer software/data analysis guidance?",
    answer:
      "Yes. We provide support in research tools such as SPSS, R, Excel, Python, and other domain-relevant tools, depending on your subject and methodology.",
  },
  {
    question: "Do you guarantee admission or publication?",
    answer:
      "We do not guarantee admission or publication, but our structured approach significantly improves your chances of success in both. We guide you to build strong academic material that meets institutional expectations.",
  },
  {
    question: "Can working professionals also get help from your institute?",
    answer:
      "Absolutely. Our consulting services are flexible and tailored for part-time PhD scholars, working professionals, and online learners.",
  },
  {
    question: "Do you provide plagiarism check and reference support?",
    answer:
      "Yes. We help scholars ensure academic integrity by using plagiarism detection tools and guiding them through correct referencing practices (APA, MLA, IEEE, etc.).",
  },
  {
    question: "How do I get started with Narpavi Research Institute?",
    answer:
      "You can contact us through our website or WhatsApp for a one-on-one consultation. Our academic counselors will evaluate your needs and recommend a customized research roadmap.",
  },
];

const leftItems = [
  "PhD Admission Process",
  "Guide Selection Tips",
  "Proposal Writing Tips",
  "UGC Guidelines",
  "PhD Completion Support",
];

const rightTags = [
  "Best PhD assistance in India",
  "PhD consultancy in India",
  "Best PhD abroad consultants in India",
  "PhD Consultants in Chennai",
  "PhD consultancy services for abroad",
  "PhD guidance review",
  "PhD Guide eligibility",
  "PhD consultancy services in Hyderabad",
];

const PhDConsultingMumbai = () => {
  return (
    <div className="consulting-layout">
      {/* Left Sidebar */}
      <div className="left-box">
        <h3>📚 Explore More</h3>
        <ul>
          {leftItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="consulting-box">
        <h1>Best PhD Research Consultant in Mumbai</h1>
        <h2>Expert Research Guidance for PhD Aspirants | Narpavi Research Institute</h2>

        <p>
          If you're searching for the best PhD research consultant in Mumbai, your journey begins with <strong>Narpavi Research Institute</strong>—a trusted academic partner with over 15 years of experience in supporting doctoral scholars across Engineering, Management, and Arts & Science streams.
        </p>

        <p>
          Mumbai is home to prestigious institutions such as the University of Mumbai, TISS, NMIMS, Somaiya Vidyavihar, and various UGC-approved private universities. Each university has a unique research framework that includes topic approval, guide selection, proposal submission, ethics clearance, and final synopsis defense. Navigating this complex research process requires more than just academic knowledge—it requires expert guidance.
        </p>

        <p>That’s where <strong>Narpavi Research Institute</strong> comes in.</p>

        <p>
          As one of the best PhD research consultants in Mumbai, we specialize in helping scholars structure, refine, and successfully manage every phase of the PhD process—from admission support to research documentation, from proposal development to publication strategy.
        </p>

        <p>
          Our consulting approach is fully personalized. We help you choose the right research topic based on emerging academic trends and societal relevance. We guide you in preparing high-quality PhD proposals (synopsis), Statement of Purpose (SOP), academic CVs, plagiarism-free documents, and literature reviews. We also provide insights into data analysis design, referencing styles, and university formatting guidelines.
        </p>

        <p>
          Whether you're a full-time research scholar, a working professional, or an international student planning to apply in Mumbai, our services are designed to meet the specific needs of each candidate. Our consulting support aligns with university timelines, formats, and protocols—making us the preferred choice for those seeking the best PhD research consultant in Mumbai.
        </p>

        <p>
          With deep subject knowledge, domain-specific mentors, and academic integrity at our core, Narpavi Research Institute continues to lead the way in doctoral research consulting across Maharashtra.
        </p>

        {/* Services List */}
        <div className="services-section">
          <h3>🔍 Our Core Research Consulting Support Includes:</h3>
          <ul>
            {services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>

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
      </div>

      {/* Right Sidebar */}
      <div className="right-box">
        <h3>🔖 Keywords</h3>
        <ul>
          {rightTags.map((tag, idx) => (
            <li key={idx}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhDConsultingMumbai;
