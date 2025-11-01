import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./FundingProposalSupport.scss";

const faqs = [
  {
    question: "What types of funding proposals do you support?",
    answer:
      "We assist in proposals for UGC, DST, ICSSR, DBT, SERB, AICTE, Horizon Europe, NIH, and many more national/international funding bodies.",
  },
  {
    question: "Do you help with both academic and industry projects?",
    answer:
      "Yes, our services cater to both academic research and industry-collaborative grant proposals.",
  },
  {
    question: "How long does it take to prepare a complete proposal?",
    answer:
      "Depending on complexity and urgency, we typically deliver proposals in 7–15 working days.",
  },
  {
    question: "Can you assist with proposal resubmissions?",
    answer:
      "Absolutely. We review reviewer feedback and help improve the proposal for resubmission.",
  },
  {
    question: "Do you provide support for international funding schemes?",
    answer:
      "Yes, including Horizon Europe, NIH, UKRI, UNDP, and other global research grant agencies.",
  },
];


const FundingProposalSupport = () => {
  const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="funding-page"> 
       {/* Left Sidebar */}
        <div className="left-side">
        <h3>Explore Topics</h3>
         <ul>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#strengths">Strengths</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#components">Proposal Components</a></li>
            <li><a href="#tips">Tips</a></li>
            <li><a href="#criteria">Evaluation</a></li>
            <li><a href="#cta">Get Started</a></li>
          </ul>
      </div>

      <div className="funding-layout">

        {/* Main Content */}
        <main className="funding-main">
          <header className="funding-header" id="intro">
            <h1>Funding Project Proposal Support in Mumbai</h1>
            <p>Empowering Research with Grants & Institutional Funding</p>
          </header>

          <section className="funding-section">
            <p>
              At Narpavi Research Institute, we offer expert-level Funding Project Proposal Support in Mumbai to help researchers, academicians, and institutions craft persuasive, well-structured proposals for securing national and international funding. Whether you're targeting UGC, DST, DBT, ICSSR, AICTE, SERB, or international grants like Horizon Europe, NIH, or UN agencies, our team provides end-to-end proposal support tailored to funding body guidelines and expectations.
            </p>
          </section>

          <section className="funding-section" id="strengths">
            <h2>🔍 Our Proposal Writing Strengths</h2>
            <table>
              <thead>
                <tr><th>Strength</th><th>Details</th></tr>
              </thead>
              <tbody>
                <tr><td>Funding Scheme Identification</td><td>Matching projects to suitable calls</td></tr>
                <tr><td>Objective & Impact Framing</td><td>Aligned with national/global goals</td></tr>
                <tr><td>Budget Structuring</td><td>Transparent and justified planning</td></tr>
                <tr><td>Admin & Compliance</td><td>Annexures, declarations, approvals</td></tr>
                <tr><td>Domain Experts</td><td>Science, Law, Humanities, Engineering, etc.</td></tr>
                <tr><td>Timely Delivery</td><td>Aligned to deadlines</td></tr>
                <tr><td>Rebuttal Strategy</td><td>Revision and resubmission support</td></tr>
                <tr><td>Ongoing Consultation</td><td>Clarifications post-submission</td></tr>
              </tbody>
            </table>
          </section>

          <section className="funding-section" id="process">
            <h2>🧭 Our Process</h2>
            <ul>
              <li>Initial Consultation</li>
              <li>Funding Scheme Mapping</li>
              <li>Proposal Drafting</li>
              <li>Budget Planning</li>
              <li>Documentation Completion</li>
              <li>Final Review & Submission</li>
            </ul>
          </section>

      <section className="funding-components-table">
  <h2>📝 Key Components of a Fundable Project Proposal</h2>
  <table>
    <thead>
      <tr>
        <th>Component</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Project Title</td>
        <td>Focused, relevant, and grant-specific</td>
      </tr>
      <tr>
        <td>Executive Summary</td>
        <td>One-page snapshot of objectives, significance, and outcomes</td>
      </tr>
      <tr>
        <td>Statement of Problem/Need Assessment</td>
        <td>Urgency, gap, and rationale</td>
      </tr>
      <tr>
        <td>Project Objectives & Deliverables</td>
        <td>Measurable, time-bound, and impactful</td>
      </tr>
      <tr>
        <td>Review of Literature/Preliminary Work</td>
        <td>Current status and knowledge base</td>
      </tr>
      <tr>
        <td>Research Methodology & Work Plan</td>
        <td>Detailed strategy and research flow</td>
      </tr>
      <tr>
        <td>Expected Outcomes & Societal Impact</td>
        <td>Innovation, relevance, and contribution</td>
      </tr>
      <tr>
        <td>Budget & Resource Allocation</td>
        <td>Transparent, cost-justified, and policy-compliant</td>
      </tr>
      <tr>
        <td>Team Composition & Roles</td>
        <td>Profiles of PI, Co-PIs, and collaborators</td>
      </tr>
      <tr>
        <td>Timeline & Milestones</td>
        <td>Gantt chart or quarterly plan</td>
      </tr>
      <tr>
        <td>Ethics & Sustainability</td>
        <td>Environmental, social, and data compliance</td>
      </tr>
      <tr>
        <td>References & Annexures</td>
        <td>Scholarly citations and supporting documents</td>
      </tr>
    </tbody>
  </table>
</section>


          <section className="funding-section" id="tips">
            <h2>⚠️ Tips for Effective Proposals</h2>
            <ul>
              <li>Align with funding goals</li>
              <li>Use real data</li>
              <li>Follow SMART format</li>
              <li>Use logical budgeting</li>
              <li>Follow formatting guidelines</li>
            </ul>
          </section>

          <section className="funding-section" id="criteria">
            <h2>🎯 Evaluation Criteria</h2>
            <table>
              <thead>
                <tr><th>Criteria</th><th>What Reviewers Expect</th></tr>
              </thead>
              <tbody>
                <tr><td>Relevance</td><td>Aligned to the call theme</td></tr>
                <tr><td>Innovation</td><td>Original and impactful</td></tr>
                <tr><td>Feasibility</td><td>Achievable plan</td></tr>
                <tr><td>Team Capacity</td><td>Qualified researchers</td></tr>
                <tr><td>Impact</td><td>Academic/social contribution</td></tr>
                <tr><td>Budgeting</td><td>Reasonable and clear</td></tr>
              </tbody>
            </table>
          </section>

          <section className="funding-cta" id="cta">
            <h2>📍 Trusted Funding Project Proposal Support in Mumbai – Get Started Today</h2>
            <p>
             With years of experience supporting funded projects across disciplines, Narpavi Research Institute is your trusted partner for Funding Project Proposal Support in Mumbai. From concept note to final submission, our support maximizes your chances of grant approval and drives your research forward with confidence and clarity.
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
        <h3>📌 Keywords</h3>
            <ul>
              <li>Funding project proposal support in Mumbai</li>
              <li>Research funding support in Mumbai</li>
              <li>Proposal writing services Mumbai</li>
              <li>Grant proposal consultants in Mumbai</li>
              <li>Academic funding support India</li>
              <li>PhD funding assistance Mumbai</li>
              <li>UGC DST DBT proposal help</li>
              <li>Research proposal writers India</li>
              <li>Funding scheme mapping support</li>
              <li>Institutional research funding Mumbai</li>
            </ul>
          </div>
    </div>
  );
};

export default FundingProposalSupport;

