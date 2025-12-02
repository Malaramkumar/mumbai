import React from "react";
import "./ResearchMethodologySupport.scss";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEO from "../../assets/SEO";
import LeftSidebar from "../../LeftSidebar";
 const faqs = [
  {
    question: "Do you help with research methodology for all domains?",
    answer: "Yes, we offer methodology support for Science, Social Science, Engineering, Management, Law, and Humanities with domain-specific experts."
  },
  {
    question: "Can you assist with qualitative and quantitative designs?",
    answer: "Absolutely. We support quantitative, qualitative, and mixed-methods research designs, including sampling, tool development, and data analysis."
  },
  {
    question: "Do you help align with university-specific formats?",
    answer: "Yes, we customize methodology chapters as per university-specific formats such as those of Mumbai University, TISS, NMIMS, IIT-B, and SNDT."
  },
  {
    question: "Will you help in designing tools like questionnaires and guides?",
    answer: "Yes, we develop tools like structured surveys, interview guides, and rating scales, along with pilot testing and validation support."
  },
  {
    question: "Do you support IRB/Ethics Committee documentation?",
    answer: "Yes, we assist in preparing and formatting documents required for ethics clearance, informed consent forms, and participant information sheets."
  }
];
const keywords = [
  "PhD Research Methodology Support Mumbai",
  "Research Methodology Chapter Help",
  "University-Compliant PhD Methodology",
  "Quantitative and Qualitative Design Mumbai",
  "Tool Development for PhD Mumbai",
  "SPSS and R Data Analysis Mumbai",
  "Research Ethics Documentation India",
  "PhD Fieldwork Assistance in Mumbai",
  "IRB Approval Support for PhD",
  "Chapter 3 Methodology Writing Service",
];

const ResearchMethodologySupport = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);
  return (
    <div className="methodology-page">
       <SEO
        title="PhD Research Methodology Support in Mumbai | Quantitative, Qualitative, and Mixed Methods | Narpavi Research Institute"
        description="Expert PhD research methodology support in Mumbai. Assistance with research design, sampling, data analysis, tool development, and ethics documentation for university-compliant methodology chapters."
        url="/methodology-support-assistance-mumbai"
        image="/assets/research-methodology-support-mumbai-banner.jpg"
        keywords={keywords}
        faqs={faqs} // ✅ Enables rich FAQ schema in Google
      />
      {/* Left Sidebar */}
      <div className="left-side">
         <a href="/home-page" class="buttonhp">Home Page</a>
        <LeftSidebar/>
        {/* <h3>Explore Sections</h3>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#university-guidelines">University Guidelines</a></li>
          <li><a href="#workflow">Workflow</a></li>
          <li><a href="#structure">Chapter Structure</a></li>
          <li><a href="#mistakes">Common Mistakes</a></li>
          <li><a href="#cta">Get Support</a></li>
        </ul> */}
      </div>

      {/* Main Content */}
      <div className="methodology-layout">
        <main className="methodology-main">
          <header className="methodology-header">
            <h1>🧪 PhD Research Methodology Support and Assistance in Mumbai</h1>
            <p>Domain-Aligned, University-Compliant Research Design Support</p>
          </header>

          <section className="methodology-section" id="services">
            <p>
              At Narpavi Research Institute, we specialize in offering comprehensive PhD research methodology support in Mumbai, tailored to the specific requirements of universities across the city. Our experienced team ensures your methodology chapter meets both academic rigor and the formal criteria set by Mumbai’s leading institutions.
            </p>

            <h2>🎯 Services Offered</h2>
            <ul>
              <li> Research Design: Quantitative, Qualitative, and Mixed-Methods</li>
              <li> Sampling Techniques & Sample Size Justification</li>
              <li> Tool Development: Surveys, Schedules, Interview Guides</li>
              <li> Data Collection & Fieldwork Strategy</li>
              <li> Analysis with SPSS, R, NVivo, MATLAB, Python</li>
              <li> Ethics Committee/IRB Documentation & Compliance</li>
              <li> Methodology Chapter Drafting & Formatting per University Guidelines</li>
              <li> Validation Techniques: Reliability, Validity, Triangulation</li>
            </ul>
          </section>

          <section className="methodology-section" id="university-guidelines">
            <h2>🏛️ Research Methodology Requirements – Mumbai’s Leading Universities</h2>
            <table>
              <thead>
                <tr>
                  <th>University</th>
                  <th>Methodology Guidelines Highlights</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>University of Mumbai</td>
                  <td>Requires clear articulation of hypothesis/objectives, justification of method (quantitative/qualitative), sampling design, tool validation, ethical clearance, and alignment with UGC regulations.</td>
                </tr>
                <tr>
                  <td>IIT Bombay</td>
                  <td>Emphasizes experimental and applied research design, simulation-based tools (MATLAB/Python), reproducibility of methods, and technical validation.</td>
                </tr>
                <tr>
                  <td>TISS</td>
                  <td>Focus on ethics, participatory research, grounded theory, and in-depth qualitative techniques. IRB approval is mandatory.</td>
                </tr>
                <tr>
                  <td>NMIMS</td>
                  <td>Focuses on empirical business/management studies, regression models, SPSS/AMOS-based analysis.</td>
                </tr>
                <tr>
                  <td>SNDT Women’s University</td>
                  <td>Requires justified sampling, validated tools, statistical techniques, and ethical formatting standards.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="methodology-section" id="workflow">
            <h2>🔁 Methodology Workflow</h2>
            <table>
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Action</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Define Objectives</td>
                  <td>Clarify research intent</td>
                  <td>Assessing mental health support in women’s colleges in Mumbai</td>
                </tr>
                <tr>
                  <td>Choose Methodology</td>
                  <td>Select approach based on field</td>
                  <td>Qualitative interviews and thematic analysis for SNDT study</td>
                </tr>
                <tr>
                  <td>Design Tools</td>
                  <td>Develop surveys, guides, etc.</td>
                  <td>Structured questionnaire for NMIMS MBA alumni</td>
                </tr>
                <tr>
                  <td>Seek Ethics Approval</td>
                  <td>Submit forms to university IRB</td>
                  <td>TISS requires pre-field ethics clearance and consent templates</td>
                </tr>
                <tr>
                  <td>Fieldwork Execution</td>
                  <td>Conduct data collection</td>
                  <td>IIT Bombay project involving simulation of mechanical structures</td>
                </tr>
                <tr>
                  <td>Finalize Chapter</td>
                  <td>Format and structure write-up</td>
                  <td>Include sections on sampling, tools, analysis, limitations</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="methodology-section" id="structure">
            <h2>📘 Chapter Structure Recommended by Mumbai Universities</h2>
            <ul>
              <li>Introduction to Methodology</li>
              <li>Research Design and Rationale</li>
              <li>Population and Sampling Techniques</li>
              <li>Instrumentation/Tools Used</li>
              <li>Data Collection Process</li>
              <li>Data Analysis Techniques</li>
              <li>Ethical Considerations</li>
              <li>Limitations and Scope</li>
            </ul>
          </section>

         <section className="funding-section methodology-mistakes">
  <h2>🔍 Avoid Common Methodology Mistakes</h2>
  <ul className="highlight-warning">
    <li><strong>❌ Using incompatible tools</strong> for discipline-specific research</li>
    <li><strong>❌ Inadequate justification</strong> of sampling methods</li>
    <li><strong>❌ Omitting university-specified sections</strong> (e.g., ethical compliance, pilot testing)</li>
    <li><strong>❌ Not aligning tools</strong> with objectives and hypotheses</li>
  </ul>
</section>

          <section className="methodology-cta-box">
  <h2>Narpavi Research Institute: Your Partner for Robust PhD Research Methodology</h2>
  <ul>
    <li>Academic consultants with domain and university-specific expertise</li>
    <li>Compliance with UGC, NAAC, AICTE, and university regulations</li>
    <li>Support for advanced tools and statistical packages</li>
    <li>Unlimited reviews to ensure department-level approval</li>
    <li>Ready-to-submit university-compliant methodology chapters</li>
  </ul>
  <p className="cta-description">
    Achieving Academic Alignment: Your Methodology – Narpavi Research Institute helps you meet the research design expectations of Mumbai’s top universities with confidence and clarity. From hypothesis to ethics to analysis, we offer the most reliable PhD research methodology support services built for approvals and academic success.
  </p>
</section>

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
      </div>

      {/* Right Sidebar */}
      <div className="right-side">
        <h3>📌 SEO Keywords</h3>
        <ul>{keywords.map((k) => <li key={k}>{k}</li>)}</ul>
      </div>
    </div>
  );
};

export default ResearchMethodologySupport;

