import React, { useEffect, useRef, useState } from "react";
import "./ReviewPaperPublication.scss";
import LeftSidebar from "../../LeftSidebar";

// Your original sections data (unchanged)
const sections = [
  {
    id: "intro",
    title: "Review Paper Publication Services in Mumbai",
    content: `Publishing a review paper is one of the most effective ways to establish academic expertise and demonstrate your deep understanding of existing research. Our Review Paper Publication Services in Mumbai are designed to guide college students, postgraduate researchers, and PhD scholars in writing and publishing well-structured review papers in reputed national and international journals such as Elsevier, Springer, Wiley, Taylor & Francis, and IEEE.

Through our Review Paper Publication Services in Mumbai, we help you analyze, synthesize, and present existing research in a scholarly format that meets global academic standards and enhances your visibility in the research community.`,
  },
  {
    id: "understanding",
    title: "Understanding Review Paper Publication and Its Importance",
    list: [
      "Builds a strong foundation for your thesis or dissertation.",
      "Highlights your ability to critically evaluate literature.",
      "Demonstrates your understanding of key research developments.",
      "Enhances your academic profile and citation count.",
      "Increases your chances of publication in high-impact journals like ScienceDirect, SpringerLink, IEEE Access, and MDPI.",
    ],
    footer:
      "That's why our Review Paper Publication Services in Mumbai are in high demand among researchers who aim to build a strong academic footprint early in their careers.",
  },
  {
    id: "different-ways",
    title: "Different Ways of Review Paper Publication",
    list: [
      "Systematic Review Papers: Provide structured summaries of studies using defined methods.",
      "Narrative Reviews: Discuss the topic conceptually without strict methodology.",
      "Meta-Analyses: Combine statistical data from multiple studies to identify patterns.",
      "Critical Reviews: Provide a deeper critique of current findings, identifying research gaps.",
      "Scoping Reviews: Explore emerging topics and research directions.",
    ],
    footer:
      "We ensure your review paper aligns with the preferred format of target journals like Elsevier's Journal of Cleaner Production, Taylor & Francis Review Journals, or Springer Nature Reviews.",
  },
  {
    id: "steps",
    title: "Detailed Steps in Review Paper Publication Support",
    numberedList: [
      "Topic Identification: Select a relevant and trending research area with sufficient existing studies.",
      "Comprehensive Literature Search: Gather journal articles, conference papers, and reports from authentic databases such as Scopus, Web of Science, and PubMed.",
      "Critical Evaluation: Analyze and categorize previous studies, highlighting their contributions, strengths, and limitations.",
      "Structuring the Paper: Create a strong outline — introduction, thematic review, critical discussion, and conclusion.",
      "Referencing and Citation: Apply consistent citation styles (APA, MLA, IEEE, or Harvard).",
      "Language Editing and Plagiarism Check: Refine language, remove redundancy, and ensure originality using tools like Turnitin.",
      "Journal Selection: Identify suitable national or international journals for submission based on indexing and scope.",
      "Submission and Peer Review Support: Prepare a compelling cover letter, submit the manuscript, and handle reviewer feedback.",
    ],
    footer:
      "Each step of our Review Paper Publication Services in Mumbai ensures your paper meets publication standards and stands out in the peer-review process.",
  },
  {
    id: "best-practices",
    title: "Best Practices for Successful Review Paper Publication",
    list: [
      "Choose a focused and well-defined research theme.",
      "Use recent and credible sources from authentic databases.",
      "Maintain a logical flow and balance between description and critique.",
      "Include visual aids such as tables, frameworks, and conceptual diagrams.",
      "Write in clear, concise, and formal academic language.",
      "Follow the journal's author guidelines meticulously.",
      "End with future research directions and practical implications.",
    ],
    footer:
      "Our Review Paper Publication Services in Mumbai help scholars master these practices to increase the acceptance rate in leading journals like Elsevier, Wiley, and Taylor & Francis.",
  },
  {
    id: "mistakes",
    title: "Common Mistakes in Review Paper Writing and Publication",
    list: [
      "Selecting too broad or outdated topics.",
      "Lack of a clear structure or conceptual framework.",
      "Over-dependence on a few studies without comprehensive coverage.",
      "Plagiarism or excessive paraphrasing.",
      "Missing recent publications in the review.",
      "Inaccurate or inconsistent citation styles.",
      "Submitting to predatory or low-impact journals.",
      "Ignoring reviewer feedback.",
    ],
    footer:
      "Our Review Paper Publication Services in Mumbai are designed to help you avoid these pitfalls and produce a publication-ready paper that meets international standards.",
  },
  {
    id: "dos-donts",
    title: "Do's and Don'ts in Review Paper Publication",
    dos: [
      "Select a relevant and current research topic.",
      "Maintain academic tone and logical flow.",
      "Use updated references from reputable sources.",
      "Verify originality and remove plagiarism.",
      "Follow the targeted journal's structure and guidelines strictly.",
    ],
    donts: [
      "Don't copy or reuse old data without citations.",
      "Don't overcomplicate the paper with unnecessary details.",
      "Don't use unreliable or non-academic sources.",
      "Don't ignore reviewer feedback.",
      "Don't submit to multiple journals simultaneously.",
    ],
  },
  {
    id: "support",
    title: "Our Institute's Support for Review Paper Publication",
    list: [
      "Topic selection based on research trends and impact potential.",
      "Comprehensive literature collection from Scopus and Web of Science.",
      "Professional writing, editing, and plagiarism correction.",
      "Journal selection and indexing verification (Scopus, SCI, UGC CARE).",
      "Peer review and resubmission guidance for top-tier journals.",
    ],
    footer:
      "We provide tailored mentorship to help scholars publish in prestigious journals like Elsevier, SpringerLink, IEEE Access, and Wiley Online Library, ensuring international visibility and academic success.",
  },
];

const timelines = [
  { type: "Open Access Journals", examples: "MDPI, PLOS ONE", time: "1–3 months" },
  { type: "Scopus Indexed Journals", examples: "Elsevier, Springer, Taylor & Francis", time: "3–6 months" },
  { type: "SCI / SCIE Journals", examples: "Wiley, IEEE, Springer Nature", time: "6–12 months" },
  { type: "UGC CARE Journals", examples: "National Level Academic Journals", time: "2–4 months" },
];

const faqs = [
  {
    q: "What is a review paper publication?",
    a: "It's an analytical paper summarizing existing research on a topic, offering insights, gaps, and future research directions.",
  },
  {
    q: "Why is review paper publication important for PhD scholars?",
    a: "It helps scholars gain deep domain understanding, demonstrates critical thinking, and strengthens their thesis or dissertation foundation.",
  },
  {
    q: "Which journals accept review papers?",
    a: "Leading journals like Elsevier's Renewable and Sustainable Energy Reviews, IEEE Access, Springer Nature Reviews, and Taylor & Francis Review Series frequently publish review articles.",
  },
  {
    q: "What is the usual review paper publication timeline?",
    a: "Depending on the journal type, it ranges from 3–12 months. Our Review Paper Publication Services in Mumbai help minimize delays through structured submission and feedback handling.",
  },
  {
    q: "What's the difference between a review paper and a research paper?",
    a: "A research paper presents new findings or experiments, while a review paper analyzes and summarizes previously published research.",
  },
  {
    q: "Do you assist in improving rejected review papers?",
    a: "Yes. Our Review Paper Publication Services in Mumbai include manuscript re-evaluation and rewriting support based on reviewer feedback.",
  },
];

const tocItems = [
  { id: "intro", title: "Introduction", fullTitle: "Review Paper Publication Services in Mumbai" },
  { id: "understanding", title: "Importance", fullTitle: "Understanding Review Paper Publication and Its Importance" },
  { id: "different-ways", title: "Review Types", fullTitle: "Different Ways of Review Paper Publication" },
  { id: "steps", title: "Publication Process", fullTitle: "Detailed Steps in Review Paper Publication Support" },
  { id: "best-practices", title: "Best Practices", fullTitle: "Best Practices for Successful Review Paper Publication" },
  { id: "mistakes", title: "Common Mistakes", fullTitle: "Common Mistakes in Review Paper Writing and Publication" },
  { id: "dos-donts", title: "Guidelines", fullTitle: "Do's and Don'ts in Review Paper Publication" },
  { id: "support", title: "Our Support", fullTitle: "Our Institute's Support for Review Paper Publication" },
  { id: "timeline", title: "Publication Timelines", fullTitle: "Expected Timelines for Review Paper Publication" },
  { id: "faqs", title: "FAQs", fullTitle: "Frequently Asked Questions (FAQs)" },
  { id: "conclusion", title: "Conclusion", fullTitle: "Conclusion" },
];

export default function ReviewPaperPublicationServices() {
  const tocRef = useRef(null);
  const [activeSection, setActiveSection] = useState("intro");

  // Intersection Observer for active TOC highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -75% 0px", // 25% from top, 75% from bottom
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id.replace("h-", ""));
        }
      });
    }, observerOptions);

    // Observe all section headings
    const headings = document.querySelectorAll(".rpps-section-title");
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll animation for TOC links
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(`h-${sectionId}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="rpps-layout">
      {/* Animated Left Sidebar - Table of Contents */}
      <aside className="rpps-aside rpps-aside--left fade-in-left" aria-label="Page navigation">
         <a href="/home-page" class="buttonhp">Home Page</a>
        <LeftSidebar/>
        <div className="rpps-sidebar-header">
          <h2 className="rpps-sidebar-title">On This Page</h2>
          <div className="rpps-section-count">
            {tocItems.length} sections
          </div>
        </div>
        
        <nav ref={tocRef} className="rpps-toc-nav" aria-labelledby="toc-heading">
          <ul className="rpps-toc-list" role="list">
            {tocItems.map((item) => (
              <li key={item.id} className="rpps-toc-item">
                <a
                  href={`#h-${item.id}`}
                  className={`rpps-toc-link ${activeSection === item.id ? "rpps-toc-link--active" : ""}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  aria-current={activeSection === item.id ? "true" : "false"}
                >
                  <span className="rpps-toc-link-text">{item.title}</span>
                  <div className="rpps-toc-link-indicator"></div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="rpps-main fade-in" id="main-content" aria-labelledby="rpps-main-heading">
        <article className="rpps-container">
          <header className="rpps-header">
            <h1 id="rpps-main-heading" className="rpps-title">
              Review Paper Publication Services in Mumbai
            </h1>
            <p className="rpps-lead">
              Publishing a review paper is one of the most effective ways to establish academic expertise and demonstrate your deep understanding of existing research. Our Review Paper Publication Services in Mumbai guide researchers to publish well-structured review papers in reputed journals such as Elsevier, Springer, Wiley, Taylor & Francis, and IEEE.
            </p>
          </header>

          {/* Your Original Sections */}
          {sections.map((sec) => (
            <section key={sec.id} id={`section-${sec.id}`} className="rpps-section fade-in-slide" aria-labelledby={`h-${sec.id}`}>
              <h2 id={`h-${sec.id}`} className="rpps-section-title">
                {sec.title}
              </h2>

              {sec.content && (
                <div className="rpps-content">
                  {sec.content.split("\n\n").map((p, i) => (
                    <p key={i} className="rpps-paragraph">{p}</p>
                  ))}
                </div>
              )}

              {sec.list && (
                <ul className="rpps-ul">
                  {sec.list.map((item, i) => (
                    <li key={i} className="rpps-li">{item}</li>
                  ))}
                </ul>
              )}

              {sec.numberedList && (
                <ol className="rpps-ol">
                  {sec.numberedList.map((item, i) => (
                    <li key={i} className="rpps-li">{item}</li>
                  ))}
                </ol>
              )}

              {sec.dos && (
                <div className="rpps-grid">
                  <div className="rpps-grid-item">
                    <h3 className="rpps-subtitle rpps-dos-title">Do's</h3>
                    <ul className="rpps-ul">
                      {sec.dos.map((d, i) => (
                        <li key={i} className="rpps-li rpps-dos-item">✅ {d}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rpps-grid-item">
                    <h3 className="rpps-subtitle rpps-donts-title">Don'ts</h3>
                    <ul className="rpps-ul">
                      {sec.donts.map((d, i) => (
                        <li key={i} className="rpps-li rpps-donts-item">❌ {d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {sec.footer && <p className="rpps-paragraph rpps-footer">{sec.footer}</p>}
            </section>
          ))}

          {/* Timeline Section */}
          <section id="section-timeline" className="rpps-section fade-in-slide" aria-labelledby="h-timeline">
            <h2 id="h-timeline" className="rpps-section-title">Expected Timelines for Review Paper Publication</h2>

            <p id="timeline-summary" className="sr-only">
              Table lists journal types with examples and typical publication timelines to help plan review paper submissions.
            </p>

            <div className="rpps-table-wrapper">
              <table className="rpps-table" role="table" aria-describedby="timeline-summary">
                <caption className="sr-only">Review paper journal types, examples, and publication timelines</caption>
                <thead>
                  <tr>
                    <th className="rpps-th" scope="col">Type of Journal</th>
                    <th className="rpps-th" scope="col">Examples</th>
                    <th className="rpps-th" scope="col">Expected Publication Time</th>
                  </tr>
                </thead>
                <tbody>
                  {timelines.map((t, i) => (
                    <tr key={i} className="rpps-table-row">
                      <td className="rpps-td rpps-td--type">{t.type}</td>
                      <td className="rpps-td rpps-td--examples">{t.examples}</td>
                      <td className="rpps-td rpps-td--timeline">{t.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="rpps-paragraph">
              Our Review Paper Publication Services in Mumbai streamline each stage to help researchers achieve timely publication success in their chosen journals.
            </p>
          </section>

          {/* FAQs Section */}
          <section id="section-faqs" className="rpps-section fade-in-slide" aria-labelledby="h-faqs">
            <h2 id="h-faqs" className="rpps-section-title">Frequently Asked Questions (FAQs)</h2>
            <div className="rpps-faqs-grid">
              {faqs.map((f, i) => (
                <details key={i} className="rpps-faq-item">
                  <summary className="rpps-faq-question">
                    <span className="rpps-faq-icon">?</span>
                    {f.q}
                  </summary>
                  <div className="rpps-faq-answer">
                    <p className="rpps-paragraph">{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusion Section */}
          <section id="section-conclusion" className="rpps-section fade-in-slide" aria-labelledby="h-conclusion">
            <h2 id="h-conclusion" className="rpps-section-title"></h2>
            <div className="rpps-conclusion-content">
              <p className="rpps-paragraph rpps-conclusion-highlight">
                Publishing a review paper reflects scholarly maturity and mastery over a field of study. With our Review Paper Publication Services in Mumbai, Narpavi Research Institute empowers researchers to publish impactful, well-structured, and globally recognized review papers.
              </p>
              <p className="rpps-paragraph">
                From topic selection to final acceptance in top-tier journals like Elsevier, Springer, and Wiley, we ensure every scholar's work achieves academic excellence, ethical integrity, and international recognition.
              </p>
            </div>
          </section>
        </article>
      </main>

      {/* Floating Right Sidebar - SEO Cards */}
      <aside className="rpps-aside rpps-aside--right float-in-right" aria-label="Quick information">
        {/* SEO Highlights Card */}
        <div className="rpps-card rpps-card--primary">
          <div className="rpps-card-header">
            <h3 className="rpps-card-title">Review Paper Services</h3>
            <div className="rpps-card-badge">Expert</div>
          </div>
          <ul className="rpps-card-list">
            <li className="rpps-card-item">🔍 Literature Review Synthesis</li>
            <li className="rpps-card-item">📚 Scopus & Web of Science Search</li>
            <li className="rpps-card-item">✏️ Critical Analysis Writing</li>
            <li className="rpps-card-item">📊 Meta-Analysis Support</li>
            <li className="rpps-card-item">🎯 High-Impact Journal Targeting</li>
          </ul>
          <div className="rpps-card-footer">
            <button className="rpps-cta-button" aria-label="Start your review paper publication">
              Start Publishing
            </button>
          </div>
        </div>

        {/* Quick Links Card */}
        <div className="rpps-card rpps-card--secondary">
          <h4 className="rpps-card-title">Quick Navigation</h4>
          <ul className="rpps-card-list rpps-quick-links">
            {[
              { href: "#h-steps", text: "Publication Process" },
              { href: "#h-best-practices", text: "Best Practices" },
              { href: "#h-dos-donts", text: "Guidelines" },
              { href: "#h-timeline", text: "Timelines" },
              { href: "#h-faqs", text: "FAQs" },
            ].map((link, i) => (
              <li key={i} className="rpps-card-item">
                <a
                  href={link.href}
                  className="rpps-quick-link"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats Card */}
        <div className="rpps-card rpps-card--stats">
          <h4 className="rpps-card-title">Our Expertise</h4>
          <div className="rpps-stats-grid">
            <div className="rpps-stat-item">
              <span className="rpps-stat-number">300+</span>
              <span className="rpps-stat-label">Review Papers Published</span>
            </div>
            <div className="rpps-stat-item">
              <span className="rpps-stat-number">95%</span>
              <span className="rpps-stat-label">Success Rate</span>
            </div>
            <div className="rpps-stat-item">
              <span className="rpps-stat-number">40+</span>
              <span className="rpps-stat-label">Journals Supported</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

