import React from "react";
import "./ResearchPaperWritingMumbai.scss";
import  { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import SEO from "../../assets/SEO";
import LeftSidebar from "../../LeftSidebar";
const faqs = [
  {
    question: "Who can avail of the Research Paper Writing Service in Mumbai?",
    answer:
      "Any student, researcher, or academic who wishes to publish a research paper in reputed national or international journals can benefit from our service.",
  },
  {
    question: "Which journals do you target for publication?",
    answer:
      "We assist with reputed journals such as Elsevier, Springer, Taylor & Francis, IEEE, Scopus, Web of Science, and UGC CARE-listed publications across multiple disciplines.",
  },
  {
    question: "How do you ensure the paper is plagiarism-free?",
    answer:
      "Every paper undergoes rigorous plagiarism detection using advanced tools to ensure 100% originality and authenticity.",
  },
  {
    question: "Do you assist in journal submission?",
    answer:
      "Yes, our Research Paper Writing Service in Mumbai includes guidance for journal selection, formatting, submission, and handling reviewer feedback or revisions.",
  },
  {
    question: "How long does the paper writing process take?",
    answer:
      "Depending on research complexity and scope, the complete process typically takes between 10 to 20 working days.",
  },
  {
    question: "Can you convert my thesis or dissertation into a research paper?",
    answer:
      "Yes, we specialize in transforming dissertations or thesis chapters into concise, publication-ready research papers.",
  },
  {
    question: "Will my research remain confidential?",
    answer:
      "Absolutely. We maintain strict confidentiality for all client data, research content, and manuscripts throughout the entire process.",
  },
];

const keywords = [
  "Research paper writing services in India",
  "Research paper writing services in Mumbai",
  "Journal paper writing services in India",
  "PhD thesis writing services in Mumbai",
  "Scopus paper writing services",
  "Best research paper writing services in India",
  "Top PhD thesis writing services in Mumbai",
  "Online PhD thesis writing services in Mumbai",
];

const ResearchPaperWritingServiceMumbai = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
      const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div className="ResearchPaperWritingServiceMumbai">
        <SEO
        title="Research Paper Writing Service in Mumbai | Journal & Scopus Paper Experts"
        description="Professional Research Paper Writing Services in Mumbai for scholars and researchers. Scopus, Elsevier & UGC-CARE aligned research article drafting, formatting & plagiarism-free writing support."
        url="/research-paper-writing-service-in-mumbai"
        image="/assets/research-paper-writing-service-mumbai-banner.jpg"
        keywords={keywords}
        faqs={faqs}
      />
      <div className="researchpaper-wrapper">
        {/* LEFT SECTION */}
        <div className="ResearchPaper-left">
          
          <div className="ResearchPaper-left-box">
             <a href="/home-page" class="buttonhp">Home Page</a>
            <LeftSidebar/>
            <h3>Keywords</h3>
            <ul>
              {keywords.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>            
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="ResearchPaper-main">
          <h1>Research Paper Writing Service in Mumbai</h1>

          <p>
            Publishing a well-structured research paper is one of the most
            important milestones in a scholar’s academic journey. At <strong>Narpavi Research Institute</strong>, we specialize in
            offering comprehensive and high-quality Research Paper Writing
            Service in Mumbai for college students, research scholars, and
            academicians who aim to publish their findings in reputed national
            and international journals such as Elsevier, Springer, Taylor &
            Francis, IEEE, and Scopus-indexed publications.
          </p>

          <h2>What is a Research Article or Research Paper?</h2>
          <p>
            A research paper (also referred to as a research article) is a
            detailed academic document that presents original findings,
            methodologies, data interpretation, and the significance of a
            particular study. Through our Research Paper Writing Service in
            Mumbai, we ensure that your paper is crafted to match the format,
            tone, and structure expected by top international journals such as
            Elsevier, Springer, Wiley, and UGC CARE-listed publications.
          </p>

          <h2>Detailed Steps Involved in Research Paper Writing Support</h2>
          <ul>
            <li>Understanding research scope and objectives</li>
            <li>Journal identification and formatting guidance</li>
            <li>Abstract and introduction drafting</li>
            <li>Comprehensive literature review</li>
            <li>Methodology design and documentation</li>
            <li>Data analysis and interpretation</li>
            <li>Results, discussion, and conclusion</li>
            <li>Proofreading, formatting, and plagiarism check</li>
          </ul>

          <h2>Dos and Don’ts</h2>
          <table>
            <thead>
              <tr>
                <th>Dos</th>
                <th>Don’ts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Follow the target journal’s structure and formatting</td>
                <td>Don’t exceed the journal’s word or section limits</td>
              </tr>
              <tr>
                <td>Use original and plagiarism-free content</td>
                <td>Don’t copy or rephrase existing published work</td>
              </tr>
              <tr>
                <td>Present data with clear visual support</td>
                <td>Don’t include irrelevant or weak findings</td>
              </tr>
              <tr>
                <td>Cite credible and recent references</td>
                <td>Don’t use outdated or non-academic sources</td>
              </tr>
            </tbody>
          </table>

          <h2>How Narpavi Research Institute Helps Scholars</h2>
          <ul>
            <li>Customized consultation and paper structuring</li>
            <li>Subject-specific writers across multiple fields</li>
            <li>Data analysis and interpretation support</li>
            <li>Language enhancement and academic editing</li>
            <li>Formatting and reference management</li>
            <li>Plagiarism removal and quality assurance</li>
            <li>Submission and reviewer response guidance</li>
          </ul>
       
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
                 
        </div>

        {/* RIGHT SECTION */}
        <div className="ResearchPaper-right">
          <div className="ResearchPaper-right-box">
            <h3>Related Services</h3>
            <ul>
              <li>PhD Thesis Writing Services in Mumbai</li>
              <li>Scopus Journal Publication Support</li>
              <li>Journal Selection & Formatting</li>
              <li>Proofreading & Plagiarism Removal</li>
              <li>Data Analysis & Visualization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaperWritingServiceMumbai;

