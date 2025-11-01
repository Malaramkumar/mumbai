import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./LiteratureReviewWritingMumbai.scss";

const faqs = [
  {
    question: "Who can avail of this service?",
    answer:
      "Any college student, postgraduate researcher, or PhD scholar in Mumbai who needs professional support in writing or structuring a literature review."
  },
  {
    question: "How is a literature review different from a research article?",
    answer:
      "A literature review summarizes and analyzes existing research, while a research article presents new findings or experiments."
  },
  {
    question: "What type of journals do you align the literature review with?",
    answer:
      "We align your literature review with journals like Elsevier, Springer, Taylor & Francis, IEEE, and Scopus-indexed publications."
  },
  {
    question: "How long does it take to complete a literature review?",
    answer:
      "Typically, 10–15 working days depending on the complexity and volume of research material."
  },
  {
    question: "Will the review be plagiarism-free?",
    answer:
      "Yes. Every literature review undergoes plagiarism scanning using premium software to ensure 100% originality."
  },
  {
    question: "Can you update an existing literature review?",
    answer:
      "Yes. We revise, expand, and restructure existing literature reviews to meet publication or thesis requirements."
  },
  {
    question: "Do you provide reference management support?",
    answer:
      "Yes. We use professional tools like Mendeley, EndNote, and Zotero for citation accuracy."
  }
];

const LiteratureReviewWritingMumbai = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="LiteratureReviewWriting-page">
      <div className="LiteratureReviewWriting-grid">
        {/* Left Sidebar - SEO Keywords */}
        <div className="LiteratureReviewWriting-left">
          <h3>SEO Keywords</h3>
          <ul>
            <li>Literature Review Writing Services in Mumbai</li>
            <li>Best Literature Review Writing Support in Mumbai</li>
            <li>Professional Literature Review Help Mumbai</li>
            <li>PhD Literature Review Writing Services Mumbai</li>
            <li>Research Paper Literature Review Assistance</li>
            <li>Academic Writing Services in Mumbai</li>
            <li>Scopus Journal Literature Review Writing</li>
            <li>Thesis Literature Review Services Mumbai</li>
            <li>Dissertation Literature Review Writing India</li>
          </ul>
        </div>

        {/* Center Content */}
        <div className="LiteratureReviewWriting-center">
          <h1>Literature Review Writing Services in Mumbai</h1>

          <p>
            At <strong>Narpavi Research Institute</strong>, we specialize in
            professional <strong>Literature Review Writing Services in Mumbai</strong> for college
            students, M.Phil. candidates, and PhD research scholars who aim to publish quality
            academic work in reputed journals such as Elsevier, Springer, Taylor & Francis, IEEE,
            and Scopus-indexed publications.
          </p>

          <p>
            A literature review forms the foundation of every research study, setting the direction,
            rationale, and credibility of your academic work. Our expert guidance ensures your
            literature review is comprehensive, critical, and aligned with international research
            standards.
          </p>

          <h2>Understanding What a Literature Review Is</h2>
          <p>
            A literature review is a structured evaluation of previously published research relevant
            to your study. It helps identify existing knowledge, research gaps, theoretical
            perspectives, and emerging trends. Unlike a simple summary, a literature review involves
            critical analysis and synthesis to establish the context and significance of your own
            research.
          </p>

          <p>
            Our <strong>Literature Review Writing Services in Mumbai</strong> help scholars produce
            well-structured, plagiarism-free, and academically sound reviews that form the backbone
            of strong research articles, theses, and dissertations.
          </p>

          <h2>Why the Literature Review Is Significant in Research</h2>
          <p>A well-written literature review is crucial because it:</p>
          <ul>
            <li>Demonstrates your understanding of existing research.</li>
            <li>Helps identify gaps and contradictions in prior studies.</li>
            <li>Lays a theoretical foundation for your research model or hypothesis.</li>
            <li>Strengthens your research justification and academic credibility.</li>
            <li>
              Increases your paper’s acceptance rate in international journals like Elsevier,
              Springer, and IEEE.
            </li>
            <p>That’s why our Literature Review Writing Services in Mumbai are designed to help scholars create insightful, critical, and well-organized literature reviews suitable for global academic publishing.</p>
          </ul>

          <h2>Detailed Steps Involved in Our Literature Review Writing Support</h2>
          <p>Our systematic approach ensures that your literature review meets the highest academic standards. The Literature Review Writing Services in Mumbai provided by Narpavi Research Institute include the following stages:</p>
          <ul>
             <li>
               <strong>Topic Analysis and Objective Identification:</strong> 
               We begin by understanding your research topic, objectives, and methodology to set a clear review focus.
             </li>
             
             <li>
               <strong>Comprehensive Source Collection:</strong> 
               We collect peer-reviewed journal articles, books, and conference papers from trusted databases like 
               <em>Scopus, Web of Science, PubMed, IEEE Xplore</em>, and <em>ScienceDirect</em>.
             </li>
             
             <li>
               <strong>Screening and Selection of Relevant Studies:</strong> 
               Only credible and recent sources (typically from the last 5 years) are included to ensure updated and relevant coverage.
             </li>
             
             <li>
               <strong>Categorization and Thematic Structuring:</strong> 
               The literature is organized based on themes, variables, or theoretical frameworks for logical flow.
             </li>
             
             <li>
               <strong>Critical Evaluation and Comparative Analysis:</strong> 
               Each study is critically examined for research design, findings, and limitations to highlight trends and contradictions.
             </li>
             
             <li>
               <strong>Synthesis and Interpretation:</strong> 
               Information from multiple sources is synthesized to build a coherent narrative leading to research gaps.
             </li>
             
             <li>
               <strong>Drafting, Formatting, and Citation Management:</strong> 
               The final review is formatted according to your target journal’s or university’s guidelines (<em>APA, MLA, IEEE</em>, etc.).
             </li>
             
             <li>
               <strong>Plagiarism and Quality Check:</strong> 
               Every literature review undergoes a plagiarism scan, grammar refinement, and academic tone review before submission.
             </li>
             <p>Each step of our Literature Review Writing Services in Mumbai ensures that your paper achieves scholarly precision and publication readiness.</p>
           </ul>


        <h2>How Should the Best Literature Review Look Like?</h2>
        <p>A high-quality literature review goes beyond summarization — it must be analytical, integrative, and conceptually rich. Based on our experience offering Literature Review Writing Services in Mumbai, the best literature review should:</p>
          <ul>
            <li>Have a clear structure with introduction, body, and conclusion.</li>
            <li>Present thematic or chronological flow for logical clarity.</li>
            <li>Include credible and current sources (ideally 2018 onward).</li>
            <li>Offer critical insights rather than repetitive summaries.</li>
            <li>Identify research gaps and future directions.</li>
            <li>Maintain academic language and consistency in citations.</li>
            <p>We ensure that every literature review developed at Narpavi Research Institute reflects these global standards followed by Elsevier, Springer, and Taylor & Francis journals.</p>
          </ul>

          <h2>Best Practices to Get Your Literature Review Approved</h2>
          <p>To ensure that your literature review gains acceptance in journals or academic submissions, follow these essential best practices — the same principles applied in our Literature Review Writing Services in Mumbai:</p>
          <ul>
            <li>Choose a focused research topic with sufficient prior studies.</li>
            <li>Review recent and peer-reviewed literature only.</li>
            <li>Maintain coherence between sections and sub-themes.</li>
            <li>Use visual summaries (tables or flowcharts) for clarity.</li>
            <li>Avoid plagiarism by paraphrasing and proper referencing.</li>
            <li>Use citation managers like Mendeley or Zotero to organize references.</li>
            <li>Ensure academic writing tone throughout.</li>
            <p>These practices enhance readability, scholarly value, and journal acceptance chances.</p>
          </ul>

          <h2>Dos and Don’ts in Literature Review Writing</h2>
          <table className="LiteratureReviewWriting-table">
            <thead>
              <tr>
                <th>Dos</th>
                <th>Don’ts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Use credible sources from Scopus or Web of Science.</td>
                <td>Don’t use random blogs or non-academic sites.</td>
              </tr>
              <tr>
                <td>Write critically, not descriptively.</td>
                <td>Don’t copy or over-quote text.</td>
              </tr>
              <tr>
                <td>Cite properly and consistently.</td>
                <td>Don’t ignore citation styles.</td>
              </tr>
              <tr>
                <td>Identify research gaps clearly.</td>
                <td>Don’t include irrelevant studies.</td>
              </tr>
              <tr>
                <td>Maintain logical flow.</td>
                <td>Don’t switch topics abruptly.</td>
              </tr>
              <tr>
                <td>Proofread and check for plagiarism.</td>
                <td>Don’t submit without editing.</td>
              </tr>
            </tbody>
          </table>

          <h2>Comprehensive Research Support for Scholars in Mumbai</h2>
          <p>
            At <strong>Narpavi Research Institute</strong>, we understand that crafting a literature
            review is both time-intensive and intellectually demanding. Through our{" "}
            <strong>Literature Review Writing Services in Mumbai</strong>, we assist scholars with:
          </p>

          <ul>
            <li>End-to-End Literature Review Development — from topic identification to synthesis.</li>
            <li>Customized Structure based on journal or university guidelines.</li>
            <li>Expert Research Curation from top international databases.</li>
            <li>Plagiarism-Free Writing and Proofreading Support.</li>
            <li>Targeted Journal Preparation aligned with Elsevier, Springer, and IEEE standards.</li>
            <p>Our experienced academic team ensures that every literature review not only meets global research expectations but also enhances your study’s overall impact.</p>
          </ul>

          {/* FAQs */}
          <section id="faqs" className="faq-section11">
            <h2 className="faq-title11">🔍 FAQs – Literature Review Writing Services in Mumbai</h2>
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

          <h2>Advancing Academic Research in Mumbai</h2>
          <p>
            Through our expert Literature Review Writing Services in Mumbai, Narpavi Research Institute helps students and scholars build strong research foundations that lead to impactful publications. With our academic expertise, structured methodology, and commitment to originality, we make your literature review globally recognized and academically sound. </p>
        </div>

        {/* Right Sidebar - Related Services */}
        <div className="LiteratureReviewWriting-right">
          <h3>Related Services</h3>
          <ul>
            <li>Research Article Writing Service in Mumbai</li>
            <li>Journal Paper Writing Service</li>
            <li>PhD Thesis Writing Assistance</li>
            <li>Scopus Journal Publication Support</li>
            <li>Review Article Publication Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LiteratureReviewWritingMumbai;

