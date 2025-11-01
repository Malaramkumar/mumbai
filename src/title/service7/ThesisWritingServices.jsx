import React from "react";
import "./ThesisWritingServices.scss";

const navItems = [
  { id: "intro", label: "Overview" },
  { id: "understanding", label: "Understanding Thesis" },
  { id: "format", label: "Thesis Format" },
  { id: "contents", label: "Ideal Contents" },
  { id: "dos-donts", label: "Do’s & Don’ts" },
  { id: "remember", label: "Things to Remember" },
  { id: "approval", label: "Approval Tips" },
  { id: "rejection", label: "Reasons for Rejection" },
  { id: "best-practices", label: "Best Practices" },
  { id: "support", label: "Our Support" },
  { id: "faqs", label: "FAQs" },
];

const faqs = [
  {
    q: "What do Thesis Writing Services in Mumbai include?",
    a: "They include topic selection, literature review, research writing, formatting, plagiarism checks, and final submission guidance.",
  },
  {
    q: "Can you help with both PhD and Master’s theses?",
    a: "Yes, services cater to both PhD and postgraduate students across all domains.",
  },
  {
    q: "Do you provide plagiarism-free content?",
    a: "Absolutely. Every thesis is checked using licensed tools like Turnitin to ensure originality.",
  },
  {
    q: "How long does it take to complete a full thesis?",
    a: "Depending on complexity, the development timeline ranges from 4 to 12 weeks.",
  },
  {
    q: "Can I get guidance for thesis defense preparation?",
    a: "Yes, viva voce and presentation training is provided to help you defend your research confidently.",
  },
  {
    q: "Do you follow specific university formats?",
    a: "Yes, alignment with guidelines of Mumbai, Pune, and other Maharashtra universities is ensured.",
  },
];

export default function ThesisMumbai() {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="tm-page">
      <header className="tm-hero">
        <div className="tm-hero__content">
          <h1>Thesis Writing Services in Mumbai</h1>
          <p>
            Professional, plagiarism-free, and university-compliant theses by Narpavi Research Institute. Structured writing, clear methodology, accurate citations, and formatting aligned with UGC and university norms.
          </p>
          <div className="tm-hero__cta">
            <a href="#support" className="btn btn-primary">Get Expert Support</a>
            <a href="#faqs" className="btn btn-outline">View FAQs</a>
          </div>
        </div>
      </header>

      <div className="tm-layout">
        {/* Left Sidebar */}
        <aside className="tm-sidebar tm-sidebar--left">
          <div className="tm-card tm-card--nav">
            <h3 className="tm-card__title">Quick Navigation</h3>
            <nav className="tm-nav">
              <ul>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} onClick={(e) => handleSmoothScroll(e, item.id)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="tm-card">
            <h4 className="tm-card__title">Why Choose Us</h4>
            <ul className="tm-list">
              <li>UGC & University-compliant formatting</li>
              <li>Turnitin-checked, plagiarism 10%</li>
              <li>Domain-specific expert writers</li>
              <li>End-to-end documentation</li>
              <li>On-time delivery</li>
            </ul>
            <a className="btn btn-secondary" href="#support">Request Consultation</a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="tm-content">
          <section id="intro" className="tm-section">
            <h2>Thesis Writing Services in Mumbai</h2>
            <p>
              Writing a PhD thesis is one of the most crucial milestones in a researcher’s academic journey. With Thesis Writing Services in Mumbai by Narpavi Research Institute, scholars and students receive professional guidance in creating well-structured, plagiarism-free, and university-compliant theses. Our expert writers help transform research into a coherent, reviewer-ready document.
            </p>
            <p>
              Whether you are pursuing a PhD, M.Phil., or Master’s degree, our services simplify your documentation process with technical accuracy and scholarly presentation.
            </p>
          </section>

          <section id="understanding" className="tm-section">
            <h2>Understanding Thesis Writing</h2>
            <p>
              A thesis is a comprehensive document that showcases original research, methodology, findings, and conclusions. It validates your understanding of the topic and your contribution to the field.
            </p>
            <p>
              We assist with framing arguments, writing literature reviews, analyzing data, and presenting results with academic precision—ensuring logical structure, formal tone, proper citations, and clarity of purpose.
            </p>
          </section>

          <section id="format" className="tm-section">
            <h2>Thesis Format Followed in Universities</h2>
            <div className="tm-grid tm-grid--2">
              <ul className="tm-list">
                <li>Title Page – Title, author, university, submission date</li>
                <li>Declaration and Certificate Pages – Signed by scholar and guide</li>
                <li>Abstract – Summary of objectives and outcomes</li>
                <li>TOC, List of Figures, and Tables</li>
                <li>Chapter 1: Introduction – Background, problem, objectives, scope</li>
                <li>Chapter 2: Literature Review – Prior studies and research gap</li>
              </ul>
              <ul className="tm-list">
                <li>Chapter 3: Methodology – Design, tools, techniques</li>
                <li>Chapter 4: Data Analysis and Interpretation – Findings, charts</li>
                <li>Chapter 5: Results and Discussion – Inferences and validation</li>
                <li>Chapter 6: Conclusion and Recommendations</li>
                <li>References – APA / MLA / IEEE</li>
                <li>Appendices – Supplementary info, questionnaires, code</li>
              </ul>
            </div>
            <p className="tm-note">
              Formatting includes alignment, margins, pagination, and consistent referencing as per UGC and university guidelines.
            </p>
          </section>

          <section id="contents" className="tm-section">
            <h2>Ideal Thesis Contents</h2>
            <ul className="tm-list tm-list--bullets">
              <li>Clear objectives and precise problem definition</li>
              <li>Comprehensive literature review linking theory and prior studies</li>
              <li>Sound methodology with reproducible procedures</li>
              <li>Data presentation with tables, figures, and interpretation</li>
              <li>Strong conclusion with contributions and implications</li>
            </ul>
          </section>

          <section id="dos-donts" className="tm-section">
            <h2>Do’s and Don’ts</h2>
            <div className="tm-grid tm-grid--2">
              <div className="tm-card tm-card--accent">
                <h4>Do’s</h4>
                <ul className="tm-list">
                  <li>Follow university-specific guidelines strictly</li>
                  <li>Maintain academic tone; avoid casual language</li>
                  <li>Use peer-reviewed sources; cite correctly</li>
                  <li>Run plagiarism checks pre-submission</li>
                  <li>Ensure logical flow and transitions</li>
                  <li>Use recent references (last 5–7 years)</li>
                </ul>
              </div>
              <div className="tm-card tm-card--warn">
                <h4>Don’ts</h4>
                <ul className="tm-list">
                  <li>Don’t copy content or reuse theses</li>
                  <li>Don’t skip ethical approvals (human/animal data)</li>
                  <li>Don’t overuse jargon or long sentences</li>
                  <li>Don’t submit without grammar/format checks</li>
                  <li>Don’t forget to back up data and drafts</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="remember" className="tm-section">
            <h2>Things to Remember</h2>
            <ul className="tm-list tm-list--bullets">
              <li>Start with a detailed plan and outline</li>
              <li>Keep your supervisor informed at each stage</li>
              <li>Organize references using Mendeley/Zotero</li>
              <li>Keep plagiarism below 10% (UGC norm)</li>
              <li>Back up research data securely</li>
              <li>Maintain consistent formatting and citation style</li>
            </ul>
          </section>

          <section id="approval" className="tm-section">
            <h2>Tips to Get Your Thesis Approved</h2>
            <ul className="tm-list tm-list--checks">
              <li>Define objectives linked to clear knowledge gaps</li>
              <li>Show original contributions backed by data</li>
              <li>Maintain formatting and citation accuracy</li>
              <li>Eliminate plagiarism and grammar errors</li>
              <li>Address reviewer comments constructively</li>
              <li>Ensure consistency between abstract, results, and conclusion</li>
            </ul>
          </section>

          <section id="rejection" className="tm-section">
            <h2>Reasons for Thesis Rejection</h2>
            <ul className="tm-list tm-list--bullets">
              <li>Unclear problem definition or objectives</li>
              <li>Incomplete/irrelevant literature review</li>
              <li>Weak methodology or analysis</li>
              <li>High plagiarism percentage</li>
              <li>Mismatch between results and conclusions</li>
              <li>Lack of novelty/contribution</li>
              <li>Formatting and citation errors</li>
            </ul>
          </section>

          <section id="best-practices" className="tm-section">
            <h2>Best Practices</h2>
            <ul className="tm-list tm-list--bullets">
              <li>Start writing early and refine iteratively</li>
              <li>Align chapters with research goals</li>
              <li>Use academic/scientific vocabulary appropriately</li>
              <li>Validate every claim with data/references</li>
              <li>Proofread at every stage</li>
              <li>Use visuals (figures, graphs, tables) to strengthen points</li>
            </ul>
          </section>

          <section id="support" className="tm-section">
            <h2>Our Support on Thesis Writing</h2>
            <div className="tm-grid tm-grid--2">
              <ul className="tm-list">
                <li>Topic selection and problem formulation</li>
                <li>Comprehensive literature review (Scopus, WoS)</li>
                <li>Data analysis (SPSS, MATLAB, Python)</li>
              </ul>
              <ul className="tm-list">
                <li>Technical writing and UGC-compliant formatting</li>
                <li>Plagiarism check, editing, proofreading</li>
                <li>Pre-submission review and presentation prep</li>
              </ul>
            </div>
            <div className="tm-cta-box">
              <a href="mailto:research@narpavi.com" className="btn btn-primary">Email Us</a>
              <a href="tel:+919000000000" className="btn btn-secondary">Call Now</a>
              <a href="#faqs" className="btn btn-outline">Read FAQs</a>
            </div>
          </section>

          <section id="faqs" className="tm-section">
            <h2>FAQs on Thesis Writing Services in Mumbai</h2>
            <div className="tm-accordion">
              {faqs.map((item, idx) => (
                <details key={idx} className="tm-accordion__item">
                  <summary>{item.q}</summary>
                  <div className="tm-accordion__panel">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        </main>

        {/* Right Sidebar */}
        <aside className="tm-sidebar tm-sidebar--right">
          <div className="tm-card">
            <h4 className="tm-card__title">Free Consultation</h4>
            <p>Get a 15-minute call with our research mentor to discuss scope, timelines, and compliance.</p>
            <a className="btn btn-primary" href="mailto:research@narpavi.com">Book a Slot</a>
          </div>

          <div className="tm-card tm-card--muted">
            <h4 className="tm-card__title">Contact</h4>
            <ul className="tm-list">
              <li>Email: research@narpavi.com</li>
              <li>Phone: +91 90000 00000</li>
              <li>Mumbai & Pune Support</li>
            </ul>
          </div>

          <div className="tm-card tm-card--badges">
            <span className="tm-badge tm-badge--green">Turnitin Checked</span>
            <span className="tm-badge tm-badge--blue">UGC Compliant</span>
            <span className="tm-badge tm-badge--orange">On-time Delivery</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

