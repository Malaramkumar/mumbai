import React from "react";
import "./SynopsisWritingSupport.scss";

const navItems = [
  { id: "intro", label: "Overview" },
  { id: "what-is", label: "What is Synopsis" },
  { id: "importance", label: "Importance" },
  { id: "format", label: "Typical Format" },
  { id: "contents", label: "Ideal Contents" },
  { id: "dos-donts", label: "Do’s & Don’ts" },
  { id: "remember", label: "Things to Remember" },
  { id: "best-practices", label: "Best Practices" },
  { id: "rejections", label: "Reasons for Rejection" },
  { id: "approval", label: "Approval Tips" },
  { id: "support", label: "Our Support" },
  { id: "faqs", label: "FAQs" },
  { id: "conclusion", label: "Conclusion" },
];

const faqs = [
  {
    q: "What does Synopsis Writing Support in Mumbai include?",
    a: "It includes topic selection, literature review, methodology writing, formatting, and editing for PhD and M.Phil. scholars.",
  },
  {
    q: "How long should a synopsis be?",
    a: "Typically 8–15 pages, depending on your university’s guidelines.",
  },
  {
    q: "Can you assist with both technical and non-technical domains?",
    a: "Yes. We cover engineering, management, social sciences, and life sciences.",
  },
  {
    q: "Do you provide plagiarism-free content?",
    a: "Yes. All synopses undergo Turnitin-based plagiarism screening.",
  },
  {
    q: "How long does it take to prepare a complete synopsis?",
    a: "Usually 5–10 working days, depending on complexity and scope.",
  },
  {
    q: "Can I request revisions after submission?",
    a: "Yes. We offer unlimited revisions until your synopsis is approved.",
  },
];

export default function SynopsisMumbai() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="sm-page">
      <header className="sm-hero">
        <div className="sm-hero__content">
          <h1>Synopsis Writing Support in Mumbai</h1>
          <p>
            Get expert, university-aligned synopsis drafting by Narpavi Research Institute — concise, structured, and approval-ready. Ideal for PhD, M.Phil., and Master’s registrations at Mumbai, Pune, and other Maharashtra universities.
          </p>
          <div className="sm-hero__cta">
            <a href="#support" className="btn btn-primary">Get Support</a>
            <a href="#faqs" className="btn btn-outline">FAQs</a>
          </div>
        </div>
      </header>

      <div className="sm-layout">
        {/* Left Sidebar */}
        <aside className="sm-sidebar sm-sidebar--left">
          <div className="sm-card sm-card--nav">
            <h3 className="sm-card__title">Quick Navigation</h3>
            <nav className="sm-nav">
              <ul>
                {navItems.map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} onClick={(e) => scrollTo(e, n.id)}>
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="sm-card">
            <h4 className="sm-card__title">Why Choose Us</h4>
            <ul className="sm-list">
              <li>UGC & University-compliant formats</li>
              <li>Turnitin-checked, plagiarism  10%</li>
              <li>Domain expert writers</li>
              <li>On-time delivery</li>
              <li>Unlimited revisions till approval</li>
            </ul>
            <a className="btn btn-secondary" href="#support">Request Consultation</a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="sm-content">
          <section id="intro" className="sm-section">
            <h2>Synopsis Writing Support in Mumbai</h2>
            <p>
              Preparing a synopsis is one of the first and most crucial steps in any PhD or research journey. Our expert team helps craft a compelling, structured, and university-approved synopsis that clearly communicates research intent, objectives, and originality.
            </p>
            <p>
              Whether submitting to Mumbai University, Pune University, or others in Maharashtra, we align with university and UGC norms to ensure a smooth approval process.
            </p>
          </section>

          <section id="what-is" className="sm-section">
            <h2>Understanding What a Synopsis Is</h2>
            <p>
              A synopsis is a concise summary of your proposed research study submitted for PhD or M.Phil. registration. It includes background, objectives, methodology, expected outcomes, and references to demonstrate feasibility, relevance, and innovation.
            </p>
            <p>
              We help present your proposal clearly and persuasively to gain quick academic approval.
            </p>
          </section>

          <section id="importance" className="sm-section">
            <h2>Importance of a Well-Written Synopsis</h2>
            <ul className="sm-list sm-list--bullets">
              <li>Shows deep understanding of the research problem</li>
              <li>Identifies clear gaps in existing literature</li>
              <li>Demonstrates a feasible research plan</li>
              <li>Highlights meaningful academic contribution</li>
            </ul>
            <p className="sm-note">
              We ensure clarity, originality, and confidence to improve the likelihood of committee approval.
            </p>
          </section>

          <section id="format" className="sm-section">
            <h2>Typical Format of a Synopsis</h2>
            <div className="sm-grid sm-grid--2">
              <ul className="sm-list">
                <li>Title Page – Title, scholar’s name, affiliation</li>
                <li>Introduction – Context and significance</li>
                <li>Problem Statement – Gap the research addresses</li>
                <li>Objectives – Clear, measurable goals</li>
                <li>Review of Literature – Summary of existing research</li>
              </ul>
              <ul className="sm-list">
                <li>Methodology – Tools, techniques, data plan</li>
                <li>Scope and Limitations – Boundaries of study</li>
                <li>Expected Outcomes – Anticipated contributions</li>
                <li>References – Standard citation format</li>
              </ul>
            </div>
            <p className="sm-note">
              Documents are tailored to the exact templates of your university while following the above framework.
            </p>
          </section>

          <section id="contents" className="sm-section">
            <h2>Ideal Contents of a Synopsis</h2>
            <ul className="sm-list sm-list--bullets">
              <li>Clear, researchable problem statement</li>
              <li>Concise literature review showing the gap</li>
              <li>Well-defined objectives and hypotheses</li>
              <li>Sound methodology with justification</li>
              <li>Expected outcomes aligned with objectives</li>
              <li>Accurate referencing and formatting</li>
            </ul>
          </section>

          <section id="dos-donts" className="sm-section">
            <h2>Do’s and Don’ts</h2>
            <div className="sm-grid sm-grid--2">
              <div className="sm-card sm-card--accent">
                <h4>Do’s</h4>
                <ul className="sm-list">
                  <li>Follow your university’s exact format</li>
                  <li>Use formal academic tone</li>
                  <li>Cite current, credible references (last 5 years)</li>
                  <li>Justify topic and methodology</li>
                  <li>Keep it concise (8–15 pages)</li>
                  <li>Run plagiarism checks</li>
                </ul>
              </div>
              <div className="sm-card sm-card--warn">
                <h4>Don’ts</h4>
                <ul className="sm-list">
                  <li>Avoid vague/broad objectives</li>
                  <li>Don’t copy content or existing synopses</li>
                  <li>Don’t overload theory without purpose</li>
                  <li>Don’t skip or misquote references</li>
                  <li>Don’t ignore formatting rules</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="remember" className="sm-section">
            <h2>Things to Remember</h2>
            <ul className="sm-list sm-list--bullets">
              <li>Keep the title crisp and specific</li>
              <li>Avoid jargon; write with academic clarity</li>
              <li>Ensure sections flow logically</li>
              <li>Limit objectives to focused points</li>
              <li>Align research questions and methodology</li>
              <li>Proofread before submission</li>
            </ul>
          </section>

          <section id="best-practices" className="sm-section">
            <h2>Best Practices</h2>
            <ul className="sm-list sm-list--bullets">
              <li>Start with strong background and gap analysis</li>
              <li>Keep objectives measurable and specific</li>
              <li>Follow a scientific approach in methodology</li>
              <li>Use Scopus / Web of Science references</li>
              <li>Maintain consistent formatting</li>
              <li>Highlight expected contribution to the domain</li>
            </ul>
          </section>

          <section id="rejections" className="sm-section">
            <h2>Reasons for Synopsis Rejection</h2>
            <ul className="sm-list sm-list--bullets">
              <li>Weak or undefined problem statement</li>
              <li>Poor structure or disorganized flow</li>
              <li>Lack of novelty/contribution</li>
              <li>Inconsistent objectives and methods</li>
              <li>High plagiarism</li>
              <li>Missing or incorrect references</li>
            </ul>
          </section>

          <section id="approval" className="sm-section">
            <h2>Tips to Get Your Synopsis Approved</h2>
            <ul className="sm-list sm-list--checks">
              <li>Start early and follow timelines</li>
              <li>Use updated references from reputed databases</li>
              <li>Seek feedback and revise</li>
              <li>Keep objectives realistic and researchable</li>
              <li>Proofread for grammar and formatting</li>
              <li>Ensure plagiarism is under 10%</li>
            </ul>
          </section>

          <section id="support" className="sm-section">
            <h2>Narpavi Research Institute – Supports to Scholars</h2>
            <div className="sm-grid sm-grid--2">
              <ul className="sm-list">
                <li>Topic selection aligned with trends</li>
                <li>Customized drafts per university format</li>
                <li>Literature review from Scopus, WoS, IEEE</li>
              </ul>
              <ul className="sm-list">
                <li>Methodology design and data framework</li>
                <li>Editing, proofreading, plagiarism checks</li>
                <li>1-on-1 consultation with research experts</li>
              </ul>
            </div>
            <div className="sm-cta-box">
              <a href="mailto:research@narpavi.com" className="btn btn-primary">Email Us</a>
              <a href="tel:+919000000000" className="btn btn-secondary">Call Now</a>
              <a href="#faqs" className="btn btn-outline">Read FAQs</a>
            </div>
          </section>

          <section id="faqs" className="sm-section">
            <h2>FAQs on Synopsis Writing Support in Mumbai</h2>
            <div className="sm-accordion">
              {faqs.map((item, idx) => (
                <details key={idx} className="sm-accordion__item">
                  <summary>{item.q}</summary>
                  <div className="sm-accordion__panel">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section id="conclusion" className="sm-section">
            <h2>Conclusion</h2>
            <p>
              A well-written synopsis is the gateway to a successful PhD journey. With Narpavi Research Institute’s Synopsis Writing Support in Mumbai, you can expect academic precision, originality, and adherence to institutional standards—ensuring impactful, approval-ready submissions.
            </p>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="sm-sidebar sm-sidebar--right">
          <div className="sm-card">
            <h4 className="sm-card__title">Free Consultation</h4>
            <p>Get a 15-minute call with our research mentor to discuss topics, timelines, and formats.</p>
            <a className="btn btn-primary" href="mailto:research@narpavi.com">Book a Slot</a>
          </div>

          <div className="sm-card sm-card--muted">
            <h4 className="sm-card__title">Contact</h4>
            <ul className="sm-list">
              <li>Email: research@narpavi.com</li>
              <li>Phone: +91 90000 00000</li>
              <li>Mumbai, Pune & Maharashtra</li>
            </ul>
          </div>

          <div className="sm-card sm-card--badges">
            <span className="sm-badge sm-badge--green">Turnitin Checked</span>
            <span className="sm-badge sm-badge--blue">UGC Compliant</span>
            <span className="sm-badge sm-badge--orange">On-time Delivery</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

