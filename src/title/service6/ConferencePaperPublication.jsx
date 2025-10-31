import React, { useEffect, useRef, useState } from "react";
import "./ConferencePaperPublication.scss";

// Conference-specific sections data
const sections = [
  {
    id: "understanding",
    title: "Understanding Conference Paper Publication",
    content: `A conference paper is a concise, impactful version of a research study presented at academic conferences. It summarizes new findings, ongoing work, or innovative methodologies that add value to a specific research area.

Engaging in conference paper publication helps researchers share ideas, gain peer feedback, enhance visibility, and build academic credibility before journal publication. Our services in Mumbai help you produce papers that stand out globally.`,
  },
  {
    id: "steps",
    title: "Steps Involved in Conference Paper Publication Support",
    numberedList: [
      "Topic Identification and Relevance Check: Choose a topic aligned with your research theme and conference scope.",
      "Abstract and Synopsis Drafting: A crisp abstract outlining objectives, methods, and key outcomes.",
      "Comprehensive Literature Review: Include current and relevant references from IEEE Xplore, Scopus, and ScienceDirect.",
      "Methodology Presentation: Clear explanation of experimental setup or framework.",
      "Results and Analysis Formatting: Structure data per IEEE or Springer templates.",
      "Proofreading and Formatting: Ensure grammar and structure meet academic standards.",
      "Submission Assistance and Revisions: Guidance during submission and review.",
    ],
    footer: "Our Conference Paper Publication Services in Mumbai ensure each step aligns with international conference standards for maximum acceptance rates.",
  },
  {
    id: "best-practices",
    title: "Best Practices for Conference Paper Publication",
    list: [
      "Keep the paper concise (4–6 pages) while maintaining comprehensive coverage.",
      "Use recent references and highlight novelty clearly to stand out in competitive selections.",
      "Follow the conference's formatting template strictly to avoid rejection.",
      "Maintain academic tone and use visuals (charts, diagrams) effectively for better impact.",
      "Practice your presentation to complement the written paper effectively.",
      "Network strategically during the conference to maximize research visibility.",
    ],
    footer: "Our experts in Mumbai guide scholars to implement these practices for successful conference presentations and publications.",
  },
  {
    id: "dos-donts",
    title: "Do's and Don'ts in Conference Paper Writing",
    dos: [
      "Start early and allocate time for multiple drafts and revisions.",
      "Follow formatting and referencing styles precisely (IEEE, ACM, APA).",
      "Ensure originality using plagiarism tools before submission.",
      "Include measurable research outcomes and clear contributions.",
      "Prepare presentation slides that complement your paper effectively.",
    ],
    donts: [
      "Don't submit unreviewed manuscripts without peer feedback.",
      "Don't ignore reviewer feedback or conference guidelines.",
      "Don't use excessive jargon that obscures your research findings.",
      "Don't copy from published works without proper citation.",
      "Don't miss submission deadlines or formatting requirements.",
    ],
    footer: "Our Conference Paper Publication Services in Mumbai help scholars avoid common pitfalls and follow best practices for international success.",
  },
  {
    id: "common-mistakes",
    title: "Common Mistakes in Conference Paper Publication",
    list: [
      "Poor structure or unclear abstract that fails to capture attention.",
      "Improper referencing or using unreliable sources that undermine credibility.",
      "Lack of novelty or missing the conference's specific scope requirements.",
      "Submitting the same paper to multiple venues simultaneously.",
      "Ignoring presentation preparation alongside paper writing.",
      "Overlooking conference-specific formatting and submission guidelines.",
    ],
    footer: "Our Mumbai-based services identify and correct these issues before submission to ensure professional-quality conference papers.",
  },
  {
    id: "expert-support",
    title: "Our Expert Support for Conference Paper Publication",
    list: [
      "Paper topic selection and novelty evaluation aligned with conference themes.",
      "Technical writing and language editing for academic excellence.",
      "Template formatting for IEEE, Elsevier, Springer, and ACM conferences.",
      "Peer-review assistance and comprehensive plagiarism checks.",
      "Guidance on conference presentation slides and delivery techniques.",
      "Strategic conference selection for maximum academic impact.",
    ],
    footer: "We specialize in preparing scholars for prestigious conferences including IEEE, Springer, Elsevier, and Scopus-indexed international events.",
  },
];

const timelines = [
  { type: "National Conferences", examples: "UGC Recognized, Regional Academic Conferences", time: "1–2 months" },
  { type: "International Conferences", examples: "IEEE, Springer, ACM Events", time: "3–6 months" },
  { type: "Scopus Indexed Conferences", examples: "Elsevier, Taylor & Francis Proceedings", time: "4–8 months" },
  { type: "High-Impact International", examples: "Major Global Research Conferences", time: "6–12 months" },
];

const faqs = [
  {
    q: "What's the difference between a journal and conference paper?",
    a: "Journal papers are comprehensive and undergo extensive peer review, while conference papers are concise presentations of preliminary or focused findings with faster publication cycles.",
  },
  {
    q: "Can undergraduate and master's students publish in conferences?",
    a: "Absolutely. Many conferences welcome student papers, and our Mumbai services help students prepare competitive submissions for both national and international events.",
  },
  {
    q: "How long does conference paper acceptance typically take?",
    a: "Acceptance timelines range from 1–6 months depending on the conference type and review process. We help expedite this through proper preparation and follow-up.",
  },
  {
    q: "Do you provide formatting for IEEE and Springer conference templates?",
    a: "Yes, our Conference Paper Publication Services in Mumbai include complete end-to-end formatting according to specific conference guidelines and publisher requirements.",
  },
  {
    q: "Can conference papers be expanded into journal publications?",
    a: "Certainly. We specialize in upgrading conference papers into full journal articles by expanding methodology, adding comprehensive analysis, and targeting appropriate journals.",
  },
  {
    q: "What makes a conference paper stand out to reviewers?",
    a: "Clear novelty, concise presentation of findings, proper formatting, and alignment with conference themes are crucial. Our experts ensure all these elements are optimized.",
  },
];

const tocItems = [
  { id: "intro", title: "Introduction", fullTitle: "Conference Paper Publication Services in Mumbai" },
  { id: "understanding", title: "Understanding", fullTitle: "Understanding Conference Paper Publication" },
  { id: "steps", title: "Publication Steps", fullTitle: "Steps Involved in Conference Paper Publication Support" },
  { id: "best-practices", title: "Best Practices", fullTitle: "Best Practices for Conference Paper Publication" },
  { id: "dos-donts", title: "Guidelines", fullTitle: "Do's and Don'ts in Conference Paper Writing" },
  { id: "common-mistakes", title: "Common Mistakes", fullTitle: "Common Mistakes in Conference Paper Publication" },
  { id: "timeline", title: "Publication Timelines", fullTitle: "Timeline for Conference Paper Publication" },
  { id: "expert-support", title: "Our Support", fullTitle: "Our Expert Support for Conference Paper Publication" },
  { id: "faqs", title: "FAQs", fullTitle: "FAQs on Conference Paper Publication Services in Mumbai" },
  { id: "conclusion", title: "Conclusion", fullTitle: "Conclusion" },
];

export default function ConferencePaperPublicationMumbai() {
  const tocRef = useRef(null);
  const [activeSection, setActiveSection] = useState("intro");

  // Intersection Observer for active TOC highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -75% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const sectionId = id.replace("h-", "");
          if (tocItems.find(item => item.id === sectionId)) {
            setActiveSection(sectionId);
          }
        }
      });
    }, observerOptions);

    const headings = document.querySelectorAll(".cpp-section-title");
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
    <div className="cpp-layout">
      {/* Animated Left Sidebar - Table of Contents */}
      <aside className="cpp-aside cpp-aside--left fade-in-left" aria-label="Page navigation">
        <div className="cpp-sidebar-header">
          <h2 className="cpp-sidebar-title">Conference Guide</h2>
          <div className="cpp-section-count">
            {tocItems.length} sections
          </div>
        </div>
        
        <nav ref={tocRef} className="cpp-toc-nav" aria-labelledby="toc-heading">
          <ul className="cpp-toc-list" role="list">
            {tocItems.map((item) => (
              <li key={item.id} className="cpp-toc-item">
                <a
                  href={`#h-${item.id}`}
                  className={`cpp-toc-link ${activeSection === item.id ? "cpp-toc-link--active" : ""}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  aria-current={activeSection === item.id ? "true" : "false"}
                >
                  <span className="cpp-toc-link-text">{item.title}</span>
                  <div className="cpp-toc-link-indicator"></div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="cpp-main fade-in" id="main-content" aria-labelledby="cpp-main-heading">
        <article className="cpp-container">
          <header className="cpp-header">
            <h1 id="cpp-main-heading" className="cpp-title">
              Conference Paper Publication Services in Mumbai
            </h1>
            <p className="cpp-lead">
              At Narpavi Research Institute, we provide end-to-end conference paper publication services in Mumbai, guiding scholars from paper drafting to final acceptance at top international and national conferences. Our team ensures your paper meets the publication guidelines of IEEE, Springer, Elsevier, Scopus, and Taylor & Francis.
            </p>
          </header>

          {/* Main Sections */}
          {sections.map((sec) => (
            <section key={sec.id} id={`section-${sec.id}`} className="cpp-section fade-in-slide" aria-labelledby={`h-${sec.id}`}>
              <h2 id={`h-${sec.id}`} className="cpp-section-title">
                {sec.title}
              </h2>

              {sec.content && (
                <div className="cpp-content">
                  {sec.content.split("\n\n").map((p, i) => (
                    <p key={i} className="cpp-paragraph">{p}</p>
                  ))}
                </div>
              )}

              {sec.list && (
                <ul className="cpp-ul">
                  {sec.list.map((item, i) => (
                    <li key={i} className="cpp-li">{item}</li>
                  ))}
                </ul>
              )}

              {sec.numberedList && (
                <ol className="cpp-ol">
                  {sec.numberedList.map((item, i) => (
                    <li key={i} className="cpp-li">{item}</li>
                  ))}
                </ol>
              )}

              {sec.dos && (
                <div className="cpp-grid">
                  <div className="cpp-grid-item">
                    <h3 className="cpp-subtitle cpp-dos-title">Do's</h3>
                    <ul className="cpp-ul">
                      {sec.dos.map((d, i) => (
                        <li key={i} className="cpp-li cpp-dos-item">✅ {d}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="cpp-grid-item">
                    <h3 className="cpp-subtitle cpp-donts-title">Don'ts</h3>
                    <ul className="cpp-ul">
                      {sec.donts.map((d, i) => (
                        <li key={i} className="cpp-li cpp-donts-item">❌ {d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {sec.footer && <p className="cpp-paragraph cpp-footer">{sec.footer}</p>}
            </section>
          ))}

          {/* Timeline Section */}
          <section id="section-timeline" className="cpp-section fade-in-slide" aria-labelledby="h-timeline">
            <h2 id="h-timeline" className="cpp-section-title">Timeline for Conference Paper Publication</h2>

            <p id="timeline-summary" className="sr-only">
              Table showing different conference types with their typical publication timelines to help researchers plan submissions effectively.
            </p>

            <div className="cpp-table-wrapper">
              <table className="cpp-table" role="table" aria-describedby="timeline-summary">
                <caption className="sr-only">Conference types and their expected publication timelines</caption>
                <thead>
                  <tr>
                    <th className="cpp-th" scope="col">Conference Type</th>
                    <th className="cpp-th" scope="col">Examples</th>
                    <th className="cpp-th" scope="col">Expected Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {timelines.map((t, i) => (
                    <tr key={i} className="cpp-table-row">
                      <td className="cpp-td cpp-td--type">{t.type}</td>
                      <td className="cpp-td cpp-td--examples">{t.examples}</td>
                      <td className="cpp-td cpp-td--timeline">{t.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="cpp-paragraph">
              Our Conference Paper Publication Services in Mumbai help researchers select appropriate conferences and manage timelines effectively for timely publications and presentations.
            </p>
          </section>

          {/* FAQs Section */}
          <section id="section-faqs" className="cpp-section fade-in-slide" aria-labelledby="h-faqs">
            <h2 id="h-faqs" className="cpp-section-title">FAQs on Conference Paper Publication Services in Mumbai</h2>
            <div className="cpp-faqs-grid">
              {faqs.map((f, i) => (
                <details key={i} className="cpp-faq-item">
                  <summary className="cpp-faq-question">
                    <span className="cpp-faq-icon">?</span>
                    {f.q}
                  </summary>
                  <div className="cpp-faq-answer">
                    <p className="cpp-paragraph">{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusion Section */}
          <section id="section-conclusion" className="cpp-section fade-in-slide" aria-labelledby="h-conclusion">
            <h2 id="h-conclusion" className="cpp-section-title">Conclusion</h2>
            <div className="cpp-conclusion-content">
              <p className="cpp-paragraph cpp-conclusion-highlight">
                In today's competitive academic world, conference paper publication services in Mumbai play a vital role in showcasing your research globally. With Narpavi Research Institute's comprehensive support, your paper not only meets technical and editorial standards but also gains international recognition.
              </p>
              <p className="cpp-paragraph">
                From topic selection and paper preparation to presentation guidance and publication in IEEE, Springer, and Scopus-indexed proceedings, we ensure every scholar achieves maximum academic impact through strategic conference participation.
              </p>
            </div>
          </section>
        </article>
      </main>

      {/* Floating Right Sidebar - SEO Cards */}
      <aside className="cpp-aside cpp-aside--right float-in-right" aria-label="Conference services information">
        {/* Primary Services Card */}
        <div className="cpp-card cpp-card--primary">
          <div className="cpp-card-header">
            <h3 className="cpp-card-title">Conference Services</h3>
            <div className="cpp-card-badge">Professional</div>
          </div>
          <ul className="cpp-card-list">
            <li className="cpp-card-item">🎯 Conference Selection Strategy</li>
            <li className="cpp-card-item">📄 IEEE/ACM Template Formatting</li>
            <li className="cpp-card-item">✍️ Technical Writing Support</li>
            <li className="cpp-card-item">👥 Peer Review Preparation</li>
            <li className="cpp-card-item">📊 Presentation Slide Design</li>
          </ul>
          <div className="cpp-card-footer">
            <button className="cpp-cta-button" aria-label="Get conference paper support">
              Publish Your Paper
            </button>
          </div>
        </div>

        {/* Quick Navigation Card */}
        <div className="cpp-card cpp-card--secondary">
          <h4 className="cpp-card-title">Quick Access</h4>
          <ul className="cpp-card-list cpp-quick-links">
            {[
              { href: "#h-steps", text: "Publication Process" },
              { href: "#h-best-practices", text: "Best Practices" },
              { href: "#h-dos-donts", text: "Do's & Don'ts" },
              { href: "#h-timeline", text: "Timelines" },
              { href: "#h-faqs", text: "Frequently Asked" },
            ].map((link, i) => (
              <li key={i} className="cpp-card-item">
                <a
                  href={link.href}
                  className="cpp-quick-link"
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

        {/* Conference Stats Card */}
        <div className="cpp-card cpp-card--stats">
          <h4 className="cpp-card-title">Conference Success</h4>
          <div className="cpp-stats-grid">
            <div className="cpp-stat-item">
              <span className="cpp-stat-number">250+</span>
              <span className="cpp-stat-label">Papers Published</span>
            </div>
            <div className="cpp-stat-item">
              <span className="cpp-stat-number">92%</span>
              <span className="cpp-stat-label">Acceptance Rate</span>
            </div>
            <div className="cpp-stat-item">
              <span className="cpp-stat-number">50+</span>
              <span className="cpp-stat-label">Conferences Supported</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
