import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import "./ResearchArticleWritingServiceMumbai.scss";

const faqs = [
  {
    question: "Who can avail of the Research Article Writing Service in Mumbai?",
    answer:
      "Any student, research scholar, or faculty member aiming to publish in reputed journals can use our service.",
  },
  {
    question: "What journals do you support for publication?",
    answer:
      "We assist in preparing articles for Scopus, Web of Science, UGC CARE, Springer, Elsevier, and Taylor & Francis journals.",
  },
  {
    question: "Is the article plagiarism-free?",
    answer:
      "Yes. Every paper is thoroughly checked using premium plagiarism detection tools to ensure complete originality.",
  },
  {
    question: "Do you assist with journal submission and revisions?",
    answer:
      "Yes, our Research Article Writing Service in Mumbai includes submission and resubmission support based on reviewer feedback.",
  },
  {
    question: "How much time does the process take?",
    answer:
      "Typically, 10–20 working days, depending on the complexity of the study and journal guidelines.",
  },
  {
    question: "Can you convert my dissertation into a research article?",
    answer:
      "Absolutely. We specialize in condensing theses or dissertations into concise, publishable research papers that align with journal requirements.",
  },
];

const ResearchArticleWritingServiceMumbai = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="ResearchArticleWriting-page container">
      <div className="ResearchArticleWriting-grid">
        {/* Left: Keywords / SEO */}
        <aside className="ResearchArticleWriting-left">
          <h3>Keywords</h3>
          <ul>
            <li>Research Paper writing services in Mumbai</li>
            <li>PhD thesis writing services in Mumbai</li>
            <li>Thesis writing services India</li>
            <li>Journal writers near me</li>
            <li>Thesis writers professionals</li>
            <li>Top research paper writing services in Mumbai</li>
            <li>Research paper writing services in mumbai for students</li>
            <li>Online research paper writing services in mumbai</li>
            <li>Best research paper writing services in mumbai</li>
            <li>Research paper writing services near me</li>
          </ul>
        </aside>

        {/* Center: Main Content */}
        <article className="ResearchArticleWriting-center">
          <h1 className="ResearchArticleWriting-title">
            Research Article Writing Service in Mumbai
          </h1>

          <section className="ResearchArticleWriting-intro">
            <p>
              At Narpavi Research Institute, we specialize in providing professional and
              end-to-end Research Article Writing Service in Mumbai for college students,
              PhD scholars, and independent researchers who aim to publish their research in
              reputed national and international journals. Writing a high-quality research
              article is not just about summarizing results — it’s about communicating your
              study’s value to the academic community with precision, structure, and clarity.
            </p>
          </section>

          <section className="ResearchArticleWriting-what">
            <h2>What is a Research Article?</h2>
            <p>
              A research article is a structured academic document that presents original
              findings, methodologies, interpretations, and implications of a study. It
              serves as the foundation for scientific communication, enabling scholars to
              contribute to their field while validating their work through peer-reviewed
              publication.
            </p>
            <p>
              Through our Research Article Writing Service in Mumbai, Narpavi Research
              Institute ensures that every paper is built on strong analytical foundations,
              follows journal-specific standards, and maintains research integrity.
            </p>
          </section>

          <section className="ResearchArticleWriting-significance">
            <h2>Significance of a Research Article in Academic Growth</h2>
            <p>
              A well-crafted research article amplifies your academic profile, boosts your
              citation index, and opens doors to research funding and career progression. For
              college students and PhD scholars, it demonstrates your ability to think
              critically and present research insights convincingly.
            </p>
            <p>
              Our Research Article Writing Service in Mumbai helps you transform your raw
              research data into a publishable document that meets the expectations of
              reviewers and editors globally.
            </p>
          </section>

          <section className="ResearchArticleWriting-steps">
            <h2>Detailed Steps Involved in Our Research Article Writing Support</h2>
            <p>
              At Narpavi Research Institute, we follow a step-by-step approach that aligns
              with global academic publishing standards. Our Research Article Writing
              Service in Mumbai includes:
            </p>
            <ol>
              <li><b>Understanding Research Scope –</b> Analyzing your study objectives, data, and the theoretical framework.</li>
              <li><b>Journal Selection –</b> Choosing suitable UGC CARE, Scopus, or Web of Science journals based on your domain.</li>
              <li><b>Abstract &amp; Introduction Drafting –</b> Framing a powerful summary and research background.</li>
              <li><b>Comprehensive Literature Review –</b> Mapping gaps and building a strong theoretical base.</li>
              <li><b>Methodology &amp; Data Analysis –</b> Documenting your approach and interpreting statistical results.</li>
              <li><b>Findings &amp; Discussion –</b> Presenting results with clarity, tables, and visuals.</li>
              <li><b>Conclusion &amp; Recommendations –</b> Aligning findings with objectives and suggesting future directions.</li>
              <li><b>Proofreading &amp; Plagiarism Screening –</b> Final polishing for grammar, structure, and originality.</li>
            </ol>
          </section>

          <section className="ResearchArticleWriting-format">
            <h2>How Should the Best Research Article Look Like?</h2>
            <p>
              A successful research article should reflect originality, depth, and clarity. The
              best papers include:
            </p>
            <ul>
              <li>A precise abstract summarizing your contribution.</li>
              <li>Structured literature review linking prior studies.</li>
              <li>Transparent methodology and reproducible results.</li>
              <li>Meaningful discussions highlighting key insights.</li>
              <li>Consistent referencing in APA, MLA, or IEEE format.</li>
              <li>Error-free, plagiarism-free language maintaining academic integrity.</li>
            </ul>
            <p>
              Our Research Article Writing Service in Mumbai ensures every paper follows these
              principles to increase acceptance chances in reputed journals.
            </p>
          </section>

          <section className="ResearchArticleWriting-bestpractices">
            <h2>Best Practices to Get a Research Article Approved</h2>
            <p>To enhance acceptance rates in top journals, we emphasize:</p>
            <ul>
              <li>Adhering strictly to target journal guidelines.</li>
              <li>Presenting novel contributions clearly.</li>
              <li>Avoiding repetition or unsupported claims.</li>
              <li>Using visuals and tables effectively.</li>
              <li>Submitting a professionally edited, proofread version.</li>
            </ul>
            <p>
              At Narpavi Research Institute, our Research Article Writing Service in Mumbai
              incorporates these best practices, ensuring each paper is ready for successful review.
            </p>
          </section>

          <section className="ResearchArticleWriting-dosdonts">
            <h2>Dos and Don’ts in Research Article Writing</h2>
            <table className="ResearchArticleWriting-table">
              <thead>
                <tr>
                  <th>Dos</th>
                  <th>Don’ts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Follow journal format and word limit</td>
                  <td>Don’t copy text or reuse old data</td>
                </tr>
                <tr>
                  <td>Keep sentences concise and academic</td>
                  <td>Don’t use informal or vague language</td>
                </tr>
                <tr>
                  <td>Use updated references (last 5 years)</td>
                  <td>Don’t overuse citations without analysis</td>
                </tr>
                <tr>
                  <td>Ensure logical flow between sections</td>
                  <td>Don’t skip proofreading</td>
                </tr>
                <tr>
                  <td>Highlight your study’s novelty</td>
                  <td>Don’t submit without plagiarism check</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="ResearchArticleWriting-ourcontribution">
            <h2>Shaping Scholarly Excellence: Narpavi Research Institute’s Contribution to Research Writing</h2>
            <p>
              At Narpavi Research Institute, we combine academic expertise, editorial precision, and
              publishing experience to help scholars produce world-class research articles. Our
              specialized team includes subject experts, statisticians, and professional writers who
              understand the nuances of academic publishing.
            </p>

            <ol>
              <li><b>One-on-One Guidance –</b> We begin by understanding your research focus and customizing the article structure to align with your study goals.</li>
              <li><b>Expert Drafting Team –</b> Our writers are experienced in diverse disciplines — from management and engineering to social sciences and healthcare — ensuring accurate domain-specific content.</li>
              <li><b>Data Interpretation Support –</b> We help scholars interpret results effectively, ensuring findings are statistically sound and logically presented.</li>
              <li><b>Compliance with Journal Standards –</b> We format your article as per target journal specifications (Scopus, Elsevier, Springer, UGC CARE).</li>
              <li><b>Language Enhancement &amp; Academic Tone –</b> Our editors refine grammar, clarity, and coherence to maintain scholarly tone.</li>
              <li><b>Ethical Writing Practice –</b> We ensure originality, proper citations, and adherence to research ethics.</li>
              <li><b>Publication Guidance –</b> Beyond writing, we assist with submission, cover letter drafting, and handling reviewer feedback.</li>
            </ol>
          </section>

          <section className="ResearchArticleWriting-support">
            <h2>Comprehensive Support for Research Scholars and Students</h2>
            <p>
              We’ve assisted numerous college students, M.Phil. researchers, and PhD candidates across
              Mumbai in transforming their dissertations and projects into publishable research papers.
              Narpavi Research Institute’s Research Article Writing Service in Mumbai bridges the gap
              between academic effort and publication excellence.
            </p>
          </section>


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

          {/* Empower section */}
          <section className="ResearchArticleWriting-empower">
            <h2>Empowering Mumbai’s Research Community</h2>
            <p>
              At Narpavi Research Institute, our vision is to empower scholars
              across Mumbai to achieve academic excellence through impactful
              publications. With our Research Article Writing Service in Mumbai,
              we transform raw research into high-quality, journal-ready
              articles that stand out for their originality and precision.
            </p>
            <h3>Contact Narpavi Research Institute to get started</h3>
          </section>
        </article>

        {/* Right: Related Links / Services */}
        <aside className="ResearchArticleWriting-right">
          <h3>Related Services</h3>
          <ul>
            <li>Scopus Journal Publication Assistance</li>
            <li>Journal Selection Services</li>
            <li>Manuscript Formatting &amp; Proofreading</li>
            <li>Thesis to Journal Conversion</li>
            <li>Cover Letter &amp; Response to Reviewers</li>
          </ul>
        </aside>
      </div>
    </main>
  );
};

export default ResearchArticleWritingServiceMumbai;
