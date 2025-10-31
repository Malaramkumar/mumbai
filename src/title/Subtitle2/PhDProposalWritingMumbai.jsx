import React from "react";
import "./PhDProposalWritingMumbai.scss";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What does the service include?",
    answer: "Includes topic validation, review development, formatting, and funding support."
  },
  {
    question: "Is it customized for Mumbai universities?",
    answer: "Yes, tailored to IITB, TISS, NMIMS, Mumbai University."
  },
  {
    question: "What’s the timeline for delivery?",
    answer: "Typically 7–14 working days. Urgent requests accepted."
  },
  {
    question: "Is the content original?",
    answer: "Yes, 100% original. Final Turnitin score under 5%."
  },
  {
    question: "Can you revise my draft proposal?",
    answer: "Yes, we revise and enhance existing drafts."
  },
  {
    question: "Do you help with funding narratives?",
    answer: "Yes, we support UGC/CSIR/DST budget narratives."
  },
  {
    question: "Do you help with methodology and tools?",
    answer: "Yes, we guide on methodology and tool selection."
  },
  {
    question: "Is this available outside Mumbai?",
    answer: "Yes, services are available across India and globally (online)."
  }
];


const PhDProposalWritingMumbai = () => {
    const [openIndex, setOpenIndex] = useState(null);
        const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="phd-proposal-wrapper">
      {/* Left Sidebar */}
      <aside className="left-side">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#what-is-proposal">What Is a Research Proposal?</a></li>
          <li><a href="#linking-proposal">Linking Proposal to University & Funding</a></li>
          <li><a href="#step-guide">Step-by-Step Guidelines</a></li>
          <li><a href="#rejection-reasons">Why Proposals Get Rejected</a></li>
          <li><a href="#mistakes-to-avoid">Mistakes to Avoid</a></li>
          <li><a href="#best-practices">Best Practices</a></li>
          <li><a href="#ideal-structure">Ideal Structure</a></li>
          <li><a href="#why-choose">Why Choose Narpavi</a></li>
          <li><a href="#faqs">❓ FAQs</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>PhD Research Proposal Writing Services in Mumbai</h1>
        <p className="subtitle">Comprehensive Guidance for Crafting Winning Doctoral Proposals</p>

        <section id="what-is-proposal">
          <h2>1. What Is a Research Proposal and Why Does It Matter?</h2>
          <p>
            A research proposal is a concise, persuasive document that outlines the what, why, and how of your intended doctoral study. Mumbai’s leading universities—such as IIT-Bombay, University of Mumbai, TISS, and NMIMS—treat this proposal as a formal roadmap for judging the feasibility, novelty, and scholarly merit of your topic.
          </p>
          <p>
            Our PhD research proposal writing services in Mumbai ensure your proposal:
            <ul>
              <li>Demonstrates a clear research gap and academic significance.</li>
              <li>Aligns with departmental strengths, available supervisors, and lab resources.</li>
              <li>Convinces scholarship committees and funding bodies of your project’s impact.</li>
            </ul>
          </p>
        </section>

        <section id="linking-proposal">
          <h2>2. Linking Your Proposal to the Right Course, University, and Funding</h2>
          <table>
            <thead>
              <tr><th>Objective</th><th>How a Strong Proposal Helps</th></tr>
            </thead>
            <tbody>
              <tr><td>University Fit</td><td>Shows direct relevance to faculty research clusters and ongoing projects.</td></tr>
              <tr><td>Course Alignment</td><td>Proves methodological skills match program coursework and lab facilities.</td></tr>
              <tr><td>Funding Eligibility</td><td>Highlights societal impact, innovation, and budget realism.</td></tr>
            </tbody>
          </table>
        </section>

        <section id="step-guide">
          <h2>3. Step-by-Step Guidelines to Draft a Doctoral Research Proposal</h2>
          <ul>
            <li><strong>Title & Keywords:</strong> Specific, ≤ 15 words, searchable.</li>
            <li><strong>Introduction & Rationale:</strong> Define problem, cite recent Mumbai-based studies, identify gap.</li>
            <li><strong>Literature Review:</strong> 8–12 high-impact sources + critique.</li>
            <li><strong>Research Questions:</strong> Clear, testable, aligned with objectives.</li>
            <li><strong>Methodology:</strong> Design, tools, data, timeline.</li>
            <li><strong>Expected Outcomes:</strong> Academic + societal relevance.</li>
            <li><strong>Budget & Resources:</strong> Itemized with justification.</li>
            <li><strong>References:</strong> APA / IEEE / Chicago; plagiarism-free.</li>
          </ul>
        </section>

        <section id="rejection-reasons">
          <h2>4. Why Proposals Get Rejected in Mumbai</h2>
          <table>
            <thead><tr><th>Common Reason</th><th>Typical Reviewer Comment</th></tr></thead>
            <tbody>
              <tr><td>Lack of Novelty</td><td>“Topic already explored; no clear gap.”</td></tr>
              <tr><td>Weak Methodology</td><td>“Design doesn’t answer the research question.”</td></tr>
              <tr><td>Over-ambitious Scope</td><td>“Timeline and resources unrealistic.”</td></tr>
              <tr><td>Poor Alignment</td><td>“Does not fit department priorities or supervisor expertise.”</td></tr>
              <tr><td>Formatting & Language Errors</td><td>“Fails to meet proposal guidelines.”</td></tr>
            </tbody>
          </table>
        </section>

        <section id="mistakes-to-avoid">
          <h2>5. Mistakes to Avoid While Drafting Your Proposal</h2>
          <ul>
            <li>Copy-pasting literature summaries without synthesis.</li>
            <li>Citing outdated or non-indexed journals.</li>
            <li>Inflated budgets lacking justification.</li>
            <li>Ignoring ethical approval procedures.</li>
            <li>Vague timelines without Gantt charts or milestones.</li>
          </ul>
        </section>

        <section id="best-practices">
          <h2>6. How to Draft a Successful Proposal—Best Practices</h2>
          <ul>
            <li>Start Early – Allocate 4–6 weeks for drafting.</li>
            <li>Consult Supervisors – Tailor content to their interests.</li>
            <li>Use Data – Add pilot surveys or simulations.</li>
            <li>Follow Structure – Use IMRAD even in proposal form.</li>
            <li>Proofread & Format – Meet word limits and citation rules.</li>
          </ul>
        </section>

        <section id="ideal-structure">
          <h2>7. Ideal Structure of a Doctoral Research Proposal</h2>
          <table>
            <thead>
              <tr><th>Section</th><th>Word Count</th><th>Core Elements</th></tr>
            </thead>
            <tbody>
              <tr><td>Title Page & Abstract</td><td>200–250</td><td>Keywords, discipline, supervisor (if any)</td></tr>
              <tr><td>Introduction</td><td>400–600</td><td>Problem statement, gap, objectives</td></tr>
              <tr><td>Literature Review</td><td>700–900</td><td>Critical synthesis, conceptual framework</td></tr>
              <tr><td>Methodology</td><td>600–800</td><td>Design, sampling, tools, analysis plan</td></tr>
              <tr><td>Timeline & Budget</td><td>150–250</td><td>Gantt chart, cost table</td></tr>
              <tr><td>Expected Outcomes</td><td>200–300</td><td>Academic + societal impact</td></tr>
              <tr><td>References</td><td>–</td><td>Formatted, recent sources</td></tr>
            </tbody>
          </table>
        </section>

        <section id="why-choose">
          <h2>8. Why Choose Narpavi’s PhD Research Proposal Writing Services in Mumbai?</h2>
          <ul>
            <li>12+ Years in PhD consulting across India.</li>
            <li>Domain-expert writers with Scopus-indexed publications.</li>
            <li>Plagiarism-free guarantee (&lt; 5% Turnitin score).</li>
            <li>Unlimited revisions until university acceptance.</li>
            <li>Integrated support for funding, SOPs, and guide selection.</li>
          </ul>
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

      {/* Right Sidebar */}
      <aside className="right-side">
        <h4>🔍 SEO Keywords</h4>
        <ul>
          <li>Top PhD research proposal writing services in Mumbai</li>
          <li>Best PhD research proposal writing services in Mumbai</li>
          <li>Online PhD research proposal writing services in Mumbai</li>
          <li>PhD thesis writing services in Mumbai</li>
          <li>PhD paper writing services</li>
          <li>Medical research paper writing services in India</li>
          <li>Research paper writing and publishing services</li>
          <li>Research paper writing services in Bangalore</li>
        </ul>
      </aside>
    </div>
  );
};

export default PhDProposalWritingMumbai;
