import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./JournalPaperWritingMumbai.scss";

const faqs = [
  {
    question: "Who can use the Journal Paper Writing Service in Mumbai?",
    answer:
      "Any student, researcher, or faculty member aiming to publish in reputed national or international journals can avail of this service."
  },
  {
    question: "Which journals do you support for publication?",
    answer:
      "We provide writing and formatting assistance for Scopus, Web of Science, Springer, Elsevier, Wiley, IEEE, and UGC CARE indexed journals."
  },
  {
    question: "Will the paper be plagiarism-free?",
    answer:
      "Yes. Every journal paper undergoes plagiarism detection and quality review to ensure 100% originality and academic integrity."
  },
  {
    question: "Can you help with journal selection?",
    answer:
      "Absolutely. Our team helps identify the most suitable journals based on your subject area, impact factor, and indexing type."
  },
  {
    question: "How long does it take to complete a journal paper?",
    answer:
      "Typically, the entire process takes 10–20 working days depending on your research complexity and data readiness."
  },
  {
    question: "Do you assist with resubmissions and reviewer comments?",
    answer:
      "Yes. We provide end-to-end revision and resubmission support to ensure successful acceptance in your target journal."
  }
];

const JournalPaperWritingMumbai = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
     <div className="JournalPaperWriting-page">
      <div className="JournalPaperWriting-grid">
      {/* Left Sidebar - SEO Keywords */}
      <div className="JournalPaperWriting-left">
        <h3>SEO Keywords</h3>
        <ul>
          <li>Top journal paper writing services in Mumbai</li>
          <li>Free journal paper writing services in Mumbai</li>
          <li>Best journal paper writing services in Mumbai</li>
          <li>Journal paper writing services in Mumbai for students</li>
          <li>Research paper writing services in India</li>
          <li>Journal paper writing services in Mumbai contact number</li>
          <li>Research paper writing services near me</li>
          <li>Cheap research paper writing services in India</li>
          <li>Top journal paper writing services in Mumbai for students</li>
        </ul>
      </div>

      {/* Center Content */}
      <div className="JournalPaperWriting-center">
        <h1>Journal Paper Writing Service in Mumbai</h1>

        <p>
          Publishing a research paper in a reputed journal is a defining milestone in every
          researcher’s academic journey. At <strong>Narpavi Research Institute</strong>, we
          provide expert and comprehensive <strong>Journal Paper Writing Service in Mumbai</strong> to help students,
          PhD scholars, and academicians publish their work in globally recognized journals such as Scopus,
          Web of Science, Elsevier, Springer, Taylor & Francis, and UGC CARE.
        </p>

        <p>
          Our dedicated team of academic writers, subject experts, and editors ensure that every journal paper we craft
          meets international publishing standards and reflects the true quality of your research.
        </p>

        <h2>What is a Research Article or Journal Paper?</h2>
        <p>
          A journal paper, often called a research article, is a scholarly document that presents
          original findings, methodologies, data analysis, and discussions derived from a research study. 
          It is the medium through which your research reaches the academic world. Through our
          <strong> Journal Paper Writing Service in Mumbai</strong>, we ensure that your paper is
          technically sound and structured to match the editorial requirements of international journals
          such as Elsevier, Springer, and Wiley.
        </p>

        <p>
          A good journal paper bridges the gap between research discovery and practical application,
          showcasing your contribution to your academic discipline.
        </p>

        <h2>Why Journal Papers are Significant in Research</h2>
        <ul>
          <li>Enhances your academic credibility.</li>
          <li>Strengthens your PhD evaluation and viva-voce performance.</li>
          <li>Helps in research funding and project approval.</li>
          <li>Increases visibility among global researchers.</li>
          <li>Builds your academic and professional reputation.</li>
        </ul>

        <h2>Detailed Steps Involved in Journal Paper Writing Support</h2>
        <ol>
          <li>Topic Understanding & Scope Analysis</li>
          <li>Target Journal Identification</li>
          <li>Abstract and Introduction Drafting</li>
          <li>Literature Review Development</li>
          <li>Methodology Framing</li>
          <li>Data Analysis & Interpretation</li>
          <li>Results and Discussion Writing</li>
          <li>Conclusion and Future Scope</li>
          <li>Formatting and Proofreading</li>
        </ol>

        <h2>How Should the Best Journal Paper Look Like?</h2>
        <ul>
          <li>A concise and impactful title.</li>
          <li>A well-written abstract summarizing purpose, methods, and results.</li>
          <li>A balanced literature review highlighting key studies.</li>
          <li>A clear methodology outlining data collection and analysis.</li>
          <li>Accurate results presented with relevant visuals and tables.</li>
          <li>A meaningful discussion connecting outcomes to previous research.</li>
          <li>Consistent formatting and referencing.</li>
          <li>Zero plagiarism and grammatical precision.</li>
        </ul>

        <h2>Best Practices to Get a Journal Paper Approved</h2>
        <ul>
          <li>Always align your paper with the journal’s aims and scope.</li>
          <li>Maintain originality and avoid self-plagiarism.</li>
          <li>Write with clarity, logic, and academic tone.</li>
          <li>Use updated references from reputed sources.</li>
          <li>Follow journal-specific formatting and referencing style.</li>
          <li>Include strong keywords for discoverability.</li>
          <li>Seek professional editing before submission.</li>
        </ul>

        <h2>Dos and Don’ts in Journal Paper Writing</h2>
        <table className="JournalPaperWriting-table">
          <thead>
            <tr>
              <th>Dos</th>
              <th>Don’ts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Follow target journal format and citation style.</td>
              <td>Don’t exceed the word limit or ignore submission rules.</td>
            </tr>
            <tr>
              <td>Keep sentences concise and academic.</td>
              <td>Don’t use casual or conversational language.</td>
            </tr>
            <tr>
              <td>Use plagiarism-free, original content.</td>
              <td>Don’t copy from internet sources.</td>
            </tr>
            <tr>
              <td>Include updated references (last 5 years).</td>
              <td>Don’t rely on outdated literature.</td>
            </tr>
            <tr>
              <td>Perform final proofreading before submission.</td>
              <td>Don’t submit without journal-style checks.</td>
            </tr>
          </tbody>
        </table>

        <h2>How Narpavi Research Institute Helps Scholars</h2>
        <p>
          At <strong>Narpavi Research Institute</strong>, we understand the challenges scholars face when
          preparing papers for international and national journals. Our
          <strong> Journal Paper Writing Service in Mumbai</strong> is designed to provide full-cycle
          support from topic selection to publication.
        </p>

        <p>
          Personalized Consultation, Expert Academic Writers, Comprehensive Drafting & Editing,
          Formatting, Language & Plagiarism Check, Submission Assistance, and Publication Mentoring —
          we ensure your paper is publication-ready.
        </p>

        {/* FAQs */}
        <section id="faqs" className="faq-section11">
          <h2 className="faq-title11">🔍 FAQs – Research Article Writing Service in Mumbai</h2>
          {faqs.map((item, index) => (
            <div
              className={`faq-item11 ${openIndex === index ? "active" : ""}`}
              key={index}
            >
              <div
                className="faq-question11"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {openIndex === index && (
                <div className="faq-answer11">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        <h2>Building Mumbai’s Research Excellence Through Publication</h2>
        <p>
          At <strong>Narpavi Research Institute</strong>, we believe that every scholar’s research
          deserves global recognition. Our <strong>Journal Paper Writing Service in Mumbai</strong>
          transforms your study into a publication-ready manuscript recognized by leading journals.
        </p>
      </div>

      {/* Right Sidebar - Related Services */}
      <div className="JournalPaperWriting-right">
        <h3>Related Services</h3>
        <ul>
          <li>Research Article Writing Service in Mumbai</li>
          <li>PhD Thesis Writing Assistance</li>
          <li>Scopus Journal Publication Support</li>
          <li>Review Article Publication Services</li>
          <li>UGC CARE Journal Submission</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default JournalPaperWritingMumbai;

