import "./PhDResearchProposalWritingServices.scss";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Award,
  ClipboardList,
  GraduationCap,
  ShieldCheck,
  Users,
  CheckCircle,
} from "lucide-react";
import LeftSidebar from "../LeftSidebar";

const steps = [
  "Title",
  "Aims of Study",
  "Objectives of Study",
  "Study Background (Literature Review) and significance of study",
  "Study Hypothesis e",
  "International Status",
  "Research Methodology",
  "Statistical Plan",
  "Limitations of the Study",
  "Expected Outcomes of Study"
];

const features = [
  {
    icon: <Award size={32} />,
    title: "12+ Years Experience",
    desc: "A research pioneer with a decade of impact.",
  },
  {
    icon: <ClipboardList size={32} />,
    title: "800+ Proposals Cleared",
    desc: "Trusted by scholars across top Indian universities.",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "PhD Experts Only",
    desc: "Writers hold Scopus H-index ≥ 8.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "<5% Plagiarism Guarantee",
    desc: "Every proposal is Turnitin-checked and certified.",
  },
  {
    icon: <Users size={32} />,
    title: "2-Person Expert Team",
    desc: "Dedicated Methodologist & Language Editor per project.",
  },
  {
    icon: <CheckCircle size={32} />,
    title: "90% First-Time Approval",
    desc: "9 of 10 clients secure guide nod on first try.",
  },
];

const blueprintData = [
  { section: "Title & Abstract", tip: "Include one method & one outcome keyword", benchmark: "IIT-B advises ≤ 250 words abstract" },
  { section: "Introduction", tip: "End with a “research gap” paragraph linked to UN SDGs", benchmark: "TISS reviewers value societal linkage" },
  { section: "Lit Review", tip: "Use a concept map figure", benchmark: "Favoured by ICT thesis committees" },
  { section: "Methodology", tip: "Pair each objective with a method & analysis plan", benchmark: "NMIMS requires this 1-to-1 mapping" },
  { section: "Timeline", tip: "Align with coursework semesters", benchmark: "University of Mumbai RRC checks this rigorously" },
  { section: "Budget", tip: "Use ₹ lakhs and ₹ thousands columns", benchmark: "Standard in DST proposals" },
  { section: "References", tip: "60% journal, 30% conference, 10% policy", benchmark: "Accepted ratio at VJTI" },
];

const faqs = [
  { question: "How collaborative is the writing process?", answer: "We start with a 90-minute “concept discovery” call, share a proposal skeleton within 48 h, then iterate in Google Docs so you and your guide can comment live." },
  { question: "Can you integrate preliminary data or pilot studies?", answer: "Yes—our statistical team formats pilot survey tables or lab pre-results to boost feasibility (a big plus at IIT-B’s RDC)." },
  { question: "Do funding bodies in Mumbai prefer any special sections?", answer: "ICSSR and BMC (Brihanmumbai Municipal Corporation) grants ask for “Policy Implication” paragraphs; we add these when pursuing local funding." },
  { question: "What post-submission support do you offer?", answer: "Unlimited Q&A edits until departmental approval, plus a “defense deck” (10-slide PowerPoint) used in RRC presentations." },
  { question: "Have you secured proposals during rolling admissions?", answer: "In 2023, we placed three scholars into University of Mumbai’s off-cycle seats by fast-tracking proposals in 5 business days." },
];

const PhDProposalMumbai = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="proposal-container">
      
      {/* Left Sidebar with Anchor Links */}
      <aside className="left-side">
         <a href="/home-page" class="buttonhp">Home Page</a>
        <LeftSidebar/>
        <h3>Navigation</h3>
        <ul>
          <li><a href="#why-proposal">1. Why Proposal Matters</a></li>
          <li><a href="#course-funding">2. Course & Funding</a></li>
          <li><a href="#roadmap">3. Step-by-Step Roadmap</a></li>
          <li><a href="#rejection-fixes">4. Rejection & Fixes</a></li>
          <li><a href="#mistakes">5. Mistakes to Avoid</a></li>
          <li><a href="#blueprint">6. Winning Blueprint</a></li>
          <li><a href="#best-practices">7. University Best Practices</a></li>
          <li><a href="#best-practices">8. Research Proposal Format</a></li>
          <li><a href="#why-narpavi">9. Why Narpavi</a></li>
          <li><a href="#faqs">FAQs</a></li>
       
        </ul>
      </aside>

      {/* Main Content */}
      <main className="proposal-main">
        <h1>PhD Research Proposal Writing Services in Mumbai</h1>
        <h2>In-Depth Support, University-Specific Best Practices & Case-Proven Results</h2>

      <section id="why-proposal">
          <h3>1. Why a Research Proposal is the Cornerstone of Your PhD</h3>
          <p>A research proposal is both a contract and a blueprint. In Mumbai’s top universities—IIT Bombay, University of Mumbai, TISS, NMIMS, ICT, and VJTI—no doctoral seat is confirmed until the proposal passes multi-level scrutiny. It determines:</p>
        <div className="card-list">
         <div className="proposal-card">
           <h4>Admission Viability</h4>
             <p> Committees judge novelty, depth, and alignment with departmental thrust areas.</p>
          </div>

         <div className="proposal-card">
          <h4>Supervisor Interest</h4>
            <p> Professors accept students whose proposals fit current grants or lab equipment.</p>
          </div>

          <div className="proposal-card">
            <h4>Funding Approval</h4>
            <p> Bodies like UGC-JRF, CSIR, or industry partners demand a cost-justified plan.</p>
           </div>
        </div>

          <p>Our PhD research proposal writing services in Mumbai transform your raw idea into a persuasive, data-driven document that meets these expectations.</p>
      </section>

        <section id="course-funding">
          <h3>2. How a Strong Proposal Guides Course, University & Funding Choices</h3>
          <p><strong>University Selection:</strong> Identifies departments whose projects and labs match your method (e.g., AI & Robotics at IIT-B’s S. J. Mehta School)</p>
          <p><strong>Course/Credit Planning:</strong> Maps research design to coursework—e.g., TISS requires two methodology credits aligned with your proposal</p>
          <p><strong>Best Practice:</strong> TISS encourages scholars to cite at least one recent faculty publication to prove synergy.</p>
          <p><strong>Funding Acquisition:</strong> Breaks the budget into travel, instrumentation, fieldwork & contingency lines—mirroring DST format</p>
          <p>Through our PhD research proposal writing services in Mumbai, we embed these university-specific nuances so your proposal doubles as an admission and funding dossier.</p>
        </section>


       <section id="roadmap" className="step-roadmap">
         <h3>3. Step-by-Step Roadmap to Draft a Doctoral Proposal</h3>
         <div className="roadmap-steps">
           {[
             "Concept Framing – crystalize the problem in ≤ 200 words.",
             "Mini Literature Matrix – a table linking findings, gaps, and future direction (favoured by ICT’s RRC).",
             "Research Questions & Hypotheses – numbered, measurable, and mapped to variables.",
             "Methodology Blueprint – flowchart + justification of tools (e.g., ANSYS, NVivo, SPSS).",
             "Ethical & Safety Considerations – mandatory for IIT-B Bio-labs and TISS field studies.",
             "Timeline (Gantt) – 8–12 work-packages, colour-coded; University of Mumbai insists this be < 1 page.",
             "Budget Sheet – CAPEX/OPEX split with GST, mirroring CSIR format.",
             "Expected Outcomes & Dissemination Plan – target journals (Scopus Q1/Q2) & conference roadmap.",
             "References – min. 30 citations; 70% from last five years.",
           ].map((item, index) => (
             <div key={index} className={`step-item ${index % 2 === 0 ? "left" : "right"}`}>
               <div className="circle">{String(index + 1).padStart(2, "0")}</div>
               <div className="step-content">{item}</div>
             </div>
           ))}
         </div>
         <p className="roadmap-summary">
           Every deliverable from our PhD research proposal writing services in Mumbai follows this disciplined flow, refined over 12 years and 800+ successful admissions.
         </p>
       </section>



        <section id="rejection-fixes">
        
         <h3>4. Why Proposals Get Rejected—and How We Fix Them</h3>
         <div className="card-list">
           <div className="rejection-card">
             <h4>Scope too broad</h4>
             <p><strong>Example:</strong> IIT-B rejected “green composites” topic</p>
             <p><strong>Fix:</strong> Narrowed to EV applications, aligned with grants</p>
           </div>
       
           <div className="rejection-card">
             <h4>Literature outdated</h4>
             <p><strong>Example:</strong> NMIMS cited mostly pre-2015 papers</p>
             <p><strong>Fix:</strong> Updated with 18 new Scopus citations</p>
           </div>
       
           <div className="rejection-card">
             <h4>Budget Inflated</h4>
             <p><strong>Example:</strong> TISS queried ₹4 lakh for field travel</p>
             <p><strong>Fix:</strong> Revised per TA/DA slabs, secured ₹1.5 lakh grant</p>
           </div>
         </div>
    </section>

      <section id="mistakes">
  <div className="refersection-card warning">
    <h2>⚠️ Mistakes Mumbai PhD Applicants Must Avoid</h2>
    <ul>
      <li>❌ Copy-pasting “template” aims & objectives from seniors’ proposals.</li>
      <li>❌ Ignoring department style files (University of Mumbai’s 12 pt Times New Roman, 1.5 line spacing rule).</li>
      <li>❌ Skipping plagiarism screening—panels now run Turnitin even on proposals.</li>
      <li>❌ Budgeting costly imported equipment that already exists on campus.</li>
      <li>❌ Leaving the theoretical framework vague—especially penalized at TISS and SNDT.</li>
    </ul>
    <p>
      Our team engrains these red flags into every coaching session delivered via our PhD research proposal writing services in Mumbai.
    </p>
  </div>
</section>


        <section id="blueprint">
          <h3>6. Blueprint of a Winning Proposal</h3>
          <div className="blueprint-wrapper">
            <div className="blueprint-header">
              <div className="section">Section</div>
              <div className="tip">Pro Tip</div>
              <div className="benchmark">Mumbai Benchmark</div>
            </div>
            {blueprintData.map((item, index) => (
              <div className="blueprint-row" key={index}>
                <div className="section">{item.section}</div>
                <div className="tip">{item.tip}</div>
                <div className="benchmark">{item.benchmark}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="best-practices">
          <h3>7. Proven Best Practices Across Mumbai Universities</h3>
          <ul>
            <li>Guide Alignment Sessions – IIT-B encourages a pre-proposal meeting; we simulate this with role-play interviews.</li>
            <li>Two-Page Executive Summary – TISS fast-tracks proposals with crisp summaries; we craft an elevator-pitch version.</li>
            <li>Budget-Milestone Correlation – NMIMS finance panel clears proposals faster when every expense ties to a milestone; we embed this table.</li>
            <li>Plagiarism Certificate – University of Mumbai demands &lt; 10% similarity; we supply Turnitin reports under 5%.</li>
          </ul>
          <p>These insights are baked into every assignment handled by our PhD research proposal writing services in Mumbai, giving clients a measurable edge.</p>
        </section>
        
        <section id="research proposal format">
            <div className="phd-roadmap">
      <h1>PhD Research Proposal<br />Writing Services in Mumbai</h1>
      <div className="roadmap-container">
         {steps.map((step, index) => (
          <div
            className={`roadmap-step ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="circle" data-step={index + 1}></div>
            <div className="label">{step}</div>
          </div>
        ))}
       </div>
    </div>

        </section>

<section className="why-narpavi-section" id="why-narpavi">
      <h2>Why Narpavi Is the Gold Standard</h2>
    <div className="narpavi-grid">
  {features.map((item, idx) => (
    <div className="narpavi-card" key={idx}>
      <div className="icon">{item.icon}</div>
      <h4>{item.title}</h4>
      <p>{item.desc}</p>
    </div>
  ))}
</div>

      <p className="narpavi-summary">
        Partner with us for PhD research proposal writing services in Mumbai and
        convert your research vision into an admission-winning, funding-ready
        proposal.
      </p>
 
    </section>
    
        <section id="faqs" className="faq-section">
          <h2> FAQs – PhD Research Proposal Writing Services</h2>
          {faqs.map((item, index) => (
            <div className={`faq-item ${openIndex === index ? "active" : ""}`} key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {openIndex === index && <div className="faq-answer"><p>{item.answer}</p></div>}
            </div>
          ))}
        </section>
          
      </main>

      <aside className="right-side">
        <h3>Keywords</h3>
        <ul>
          <li>Top phd research proposal writing services in mumbai</li>
          <li>Best phd research proposal writing services in mumbai</li>
          <li>Online phd research proposal writing services in mumbai</li>
          <li>PhD thesis Writing services in Mumbai</li>
          <li>PhD Paper writing services</li>
          <li>Medical research paper writing services in India</li>
          <li>Research paper writing and publishing services</li>
          <li>Research paper writing cost in India</li>
          <li>Paid research paper writing</li>
          <li>Research paper writing services Delhi</li>
        </ul>
      </aside>
    </div>
  );
};

export default PhDProposalMumbai;

