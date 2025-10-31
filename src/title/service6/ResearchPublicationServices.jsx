import React, { useEffect, useRef, useState } from "react";
import "./ResearchPublicationServices.scss";

// All your original sections data (unchanged)
const sections = [
    {
        id: "intro",
        title: "Research Publication Services in Mumbai",
        content: `Publishing your research work is one of the most vital milestones in any academic or PhD journey. Our Research Publication Services in Mumbai help scholars, postgraduate students, and PhD candidates publish their research in reputed national and international journals with professional precision and guidance. From selecting the right journal to preparing a flawless manuscript, our team ensures your research achieves visibility, recognition, and impact in the global research community.`,
    },
    {
        id: "understanding",
        title: "Understanding Research Publication and Its Importance",
        content: `A research publication is the formal presentation of original findings, experiments, or theoretical insights in recognized academic journals, conferences, or book chapters. It signifies that your research has undergone peer review, met academic standards, and contributes new knowledge to your field.

For PhD scholars, research publication is more than a formality — it is a mandatory academic requirement and an essential proof of research authenticity. Publishing through our Research Publication Services in Mumbai not only fulfills university criteria but also enhances your academic credibility, increases citation count, and opens doors to global collaborations.`,
    },
    {
        id: "different-ways",
        title: "Different Ways of Research Publication",
        list: [
            "Journal Publications: Publish in reputed indexed journals such as Elsevier, SpringerLink, IEEE, Taylor & Francis, Wiley Online Library, or Emerald Insight.",
            "Conference Proceedings: Present your research at national and international conferences to gain feedback and recognition.",
            "Book Chapters / Monographs: Contribute chapters to academic books or edited volumes.",
            "Open Access Platforms: Share your findings on open-access journals like MDPI, PLOS ONE, or Frontiers.",
            "Institutional Repositories: Deposit your thesis or paper in university or subject-based repositories for wider access.",
        ],
        footer:
            "Each publication mode has its own standards, and our Research Publication Services in Mumbai ensure your work fits the correct academic and ethical framework.",
    },
    {
        id: "detailed-steps",
        title: "Detailed Steps in Research Publication Support",
        numberedList: [
            "Topic Refinement: Ensure your research problem is unique, relevant, and suitable for publication.",
            "Journal Identification: Shortlist appropriate national and international journals based on subject, impact factor, and indexing (Scopus, SCI, or UGC CARE).",
            "Manuscript Structuring: Organize your paper with abstract, keywords, introduction, methodology, results, and conclusion.",
            "Formatting and Referencing: Align the paper as per journal-specific guidelines (APA, MLA, IEEE, or Harvard).",
            "Plagiarism and Quality Check: Verify originality using tools like Turnitin or iThenticate.",
            "Submission Assistance: Help with online submission portals and cover letter preparation.",
            "Peer Review & Revision: Address reviewer comments, revise content, and resubmit professionally.",
            "Acceptance & Publication: Monitor final approval and publication tracking.",
        ],
        footer:
            "Our Research Publication Services in Mumbai make this complex process seamless, ensuring every step meets academic rigor.",
    },
    {
        id: "best-practices",
        title: "Best Practices for Successful Research Publication",
        list: [
            "Choose a journal aligned with your topic and audience.",
            "Follow the exact submission and referencing format.",
            "Write a concise, well-defined abstract and conclusion.",
            "Highlight the novelty and contribution of your research.",
            "Use academic language and maintain coherence throughout.",
            "Include recent and authentic citations.",
            "Always adhere to ethical research and publication policies.",
        ],
        footer:
            "Our Research Publication Services in Mumbai ensure your paper meets the highest academic and ethical benchmarks to increase acceptance rates.",
    },
    {
        id: "common-mistakes",
        title: "Common Mistakes in Research Publication",
        list: [
            "Submitting to predatory journals without verifying authenticity.",
            "Ignoring journal formatting and citation guidelines.",
            "Presenting unclear objectives or weak methodology.",
            "Plagiarism or lack of originality.",
            "Poor language, grammar, or structure.",
            "Incomplete or irrelevant references.",
            "Failure to address reviewer feedback effectively.",
        ],
        footer:
            "Our Research Publication Services in Mumbai help you avoid these pitfalls and refine your paper for global acceptance.",
    },
    {
        id: "dos-donts",
        title: "Do's and Don'ts in Research Publication",
        dos: [
            "Choose authentic and indexed journals (Scopus, SCI, UGC CARE).",
            "Conduct originality and plagiarism checks before submission.",
            "Maintain a clear structure and academic tone.",
            "Ensure data accuracy and transparency.",
            "Keep consistent formatting and referencing.",
        ],
        donts: [
            "Don't submit the same paper to multiple journals.",
            "Don't manipulate data or results.",
            "Don't ignore feedback from reviewers.",
            "Don't exceed the word count unnecessarily.",
            "Don't skip plagiarism or grammar review.",
        ],
        footer:
            "Our Research Publication Services in Mumbai guide scholars in maintaining these professional standards that international publishers like Elsevier, Wiley, and Taylor & Francis expect.",
    },
    {
        id: "support",
        title: "How Our Institute Supports Scholars in Research Publication",
        list: [
            "Journal identification and ranking analysis",
            "Manuscript editing, proofreading, and formatting",
            "Plagiarism removal and citation correction",
            "Reviewer response management",
            "Submission tracking until acceptance",
        ],
        footer:
            "We specialize in supporting submissions to Scopus, SCI, Springer, IEEE, Elsevier, MDPI, and Taylor & Francis journals. Each project is personalized to ensure the research aligns with international publication standards and timelines.",
    },
];

const timelineRows = [
    { type: "Open Access Journals", examples: "MDPI, PLOS ONE", timeline: "1–3 months" },
    { type: "Scopus Indexed Journals", examples: "Elsevier, Springer, Taylor & Francis", timeline: "3–6 months" },
    { type: "SCI / SCIE Journals", examples: "IEEE, Wiley, SpringerLink", timeline: "6–12 months" },
    { type: "UGC CARE Journals", examples: "National Academic Journals", timeline: "2–4 months" },
    { type: "High Impact Journals", examples: "Nature, ScienceDirect", timeline: "8–14 months" },
];

const faqs = [
    {
        q: "What is a Research Publication?",
        a: "A research publication is the process of presenting your original study or review findings in academic journals or conferences to contribute to scholarly knowledge.",
    },
    {
        q: "Why is research publication important for PhD scholars?",
        a: "It validates your research, fulfills PhD requirements, and builds your academic profile. Universities often mandate publication before thesis submission.",
    },
    {
        q: "Which journals are best for PhD publication?",
        a: "Reputed international publishers such as Elsevier, Springer, IEEE, Wiley, and Taylor & Francis are ideal for quality publications.",
    },
    {
        q: "How long does it take to get a paper published?",
        a: "Depending on the journal type and review process, it may take between 3–12 months. Our Research Publication Services in Mumbai help accelerate the process.",
    },
    {
        q: "Do you provide plagiarism correction and proofreading?",
        a: "Yes, both are integral parts of our Research Publication Services in Mumbai, ensuring your paper meets journal and ethical standards.",
    },
    {
        q: "Can I publish my PhD work in multiple journals?",
        a: "No, you must not submit the same work to multiple journals simultaneously. However, you can publish different parts of your research in separate publications.",
    },
];

const tocItems = [
    { id: "intro", title: "Introduction", fullTitle: "Research Publication Services in Mumbai" },
    { id: "understanding", title: "Understanding Publication", fullTitle: "Understanding Research Publication and Its Importance" },
    { id: "different-ways", title: "Publication Methods", fullTitle: "Different Ways of Research Publication" },
    { id: "detailed-steps", title: "Publication Steps", fullTitle: "Detailed Steps in Research Publication Support" },
    { id: "best-practices", title: "Best Practices", fullTitle: "Best Practices for Successful Research Publication" },
    { id: "common-mistakes", title: "Common Mistakes", fullTitle: "Common Mistakes in Research Publication" },
    { id: "dos-donts", title: "Do's & Don'ts", fullTitle: "Do's and Don'ts in Research Publication" },
    { id: "support", title: "Our Support", fullTitle: "How Our Institute Supports Scholars in Research Publication" },
    { id: "timeline", title: "Publication Timelines", fullTitle: "Best Journals and Publication Timelines" },
    { id: "faqs", title: "FAQs", fullTitle: "Frequently Asked Questions (FAQs)" },
    { id: "conclusion", title: "Conclusion", fullTitle: "Conclusion" },
];

export default function ResearchPublicationServices() {
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
        const headings = document.querySelectorAll(".rps-section-title");
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
        <div className="rps-layout">
            {/* Animated Left Sidebar - Table of Contents */}
            <aside className="rps-aside rps-aside--left fade-in-left" aria-label="Page navigation">
                <div className="rps-sidebar-header">
                    <h2 className="rps-sidebar-title">On This Page</h2>
                    <div className="rps-section-count">
                        {tocItems.length} sections
                    </div>
                </div>
                
                <nav ref={tocRef} className="rps-toc-nav" aria-labelledby="toc-heading">
                    <ul className="rps-toc-list" role="list">
                        {tocItems.map((item) => (
                            <li key={item.id} className="rps-toc-item">
                                <a
                                    href={`#h-${item.id}`}
                                    className={`rps-toc-link ${activeSection === item.id ? "rps-toc-link--active" : ""}`}
                                    onClick={(e) => scrollToSection(e, item.id)}
                                    aria-current={activeSection === item.id ? "true" : "false"}
                                >
                                    <span className="rps-toc-link-text">{item.title}</span>
                                    <div className="rps-toc-link-indicator"></div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="rps-main fade-in" id="main-content" aria-labelledby="rps-main-heading">
                <article className="rps-container">
                    <header className="rps-header">
                        <h1 id="rps-main-heading" className="rps-title">
                            Research Publication Services in Mumbai
                        </h1>
                        <p className="rps-lead">
                            Publishing your research work is one of the most vital milestones in any academic or PhD journey. Our Research Publication Services in Mumbai help scholars, postgraduate students, and PhD candidates publish their research in reputed national and international journals with professional precision and guidance. From selecting the right journal to preparing a flawless manuscript, our team ensures your research achieves visibility, recognition, and impact in the global research community.
                        </p>
                    </header>

                    {/* Your Original Sections */}
                    {sections.map((s) => (
                        <section key={s.id} id={`section-${s.id}`} className="rps-section fade-in-slide" aria-labelledby={`h-${s.id}`}>
                            <h2 id={`h-${s.id}`} className="rps-section-title">
                                {s.title}
                            </h2>

                            {s.content && s.content.split("\n\n").map((p, i) => (
                                <p key={i} className="rps-paragraph">{p}</p>
                            ))}

                            {s.list && (
                                <ul className="rps-ul">
                                    {s.list.map((item, idx) => (
                                        <li key={idx} className="rps-li">{item}</li>
                                    ))}
                                </ul>
                            )}

                            {s.numberedList && (
                                <ol className="rps-ol">
                                    {s.numberedList.map((item, idx) => (
                                        <li key={idx} className="rps-li">{item}</li>
                                    ))}
                                </ol>
                            )}

                            {s.dos && (
                                <div className="rps-grid">
                                    <div className="rps-grid-item">
                                        <h3 className="rps-subtitle rps-dos-title">Do's</h3>
                                        <ul className="rps-ul">
                                            {s.dos.map((d, i) => (
                                                <li key={i} className="rps-li rps-dos-item">{d}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rps-grid-item">
                                        <h3 className="rps-subtitle rps-donts-title">Don'ts</h3>
                                        <ul className="rps-ul">
                                            {s.donts.map((d, i) => (
                                                <li key={i} className="rps-li rps-donts-item">{d}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {s.footer && <p className="rps-paragraph rps-footer">{s.footer}</p>}
                        </section>
                    ))}

                    {/* Timeline Section */}
                    <section id="section-timeline" className="rps-section fade-in-slide" aria-labelledby="h-timeline">
                        <h2 id="h-timeline" className="rps-section-title">Best Journals and Publication Timelines</h2>

                        <p id="timeline-summary" className="sr-only">
                            Table lists journal types with examples and typical publication timelines to help plan submissions.
                        </p>

                        <div className="rps-table-wrapper">
                            <table className="rps-table" role="table" aria-describedby="timeline-summary">
                                <caption className="sr-only">Journal types, examples, and typical timelines</caption>
                                <thead>
                                    <tr>
                                        <th className="rps-th" scope="col">Journal Type</th>
                                        <th className="rps-th" scope="col">Examples</th>
                                        <th className="rps-th" scope="col">Typical Timeline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {timelineRows.map((row, i) => (
                                        <tr key={i} className="rps-table-row">
                                            <td className="rps-td rps-td--type">{row.type}</td>
                                            <td className="rps-td rps-td--examples">{row.examples}</td>
                                            <td className="rps-td rps-td--timeline">{row.timeline}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="rps-paragraph">
                            Our Research Publication Services in Mumbai streamline each stage to help scholars achieve timely publication success.
                        </p>
                    </section>

                    {/* FAQs Section */}
                    <section id="section-faqs" className="rps-section fade-in-slide" aria-labelledby="h-faqs">
                        <h2 id="h-faqs" className="rps-section-title">Frequently Asked Questions (FAQs)</h2>
                        <div className="rps-faqs-grid">
                            {faqs.map((f, i) => (
                                <details key={i} className="rps-faq-item">
                                    <summary className="rps-faq-question">
                                        <span className="rps-faq-icon">?</span>
                                        {f.q}
                                    </summary>
                                    <div className="rps-faq-answer">
                                        <p className="rps-paragraph">{f.a}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* Conclusion Section */}
                    <section id="section-conclusion" className="rps-section fade-in-slide" aria-labelledby="h-conclusion">
                        <h2 id="h-conclusion" className="rps-section-title">Conclusion</h2>
                        <div className="rps-conclusion-content">
                            <p className="rps-paragraph rps-conclusion-highlight">
                                Publishing your research is a symbol of academic excellence. With Research Publication Services in Mumbai, Narpavi Research Institute supports scholars through every stage — from manuscript preparation to international publication.
                            </p>
                            <p className="rps-paragraph">
                                We ensure your work meets global quality benchmarks, adheres to ethical standards, and gets the visibility it deserves in leading journals like Elsevier, Springer, IEEE, and Wiley.
                            </p>
                            <p className="rps-paragraph rps-conclusion-final">
                                Our aim is to transform your hard work into globally recognized research that defines your academic identity.
                            </p>
                        </div>
                    </section>
                </article>
            </main>

            {/* Floating Right Sidebar - SEO Cards */}
            <aside className="rps-aside rps-aside--right float-in-right" aria-label="Quick information">
                {/* SEO Highlights Card */}
                <div className="rps-card rps-card--primary">
                    <div className="rps-card-header">
                        <h3 className="rps-card-title">Key Services</h3>
                        <div className="rps-card-badge">Featured</div>
                    </div>
                    <ul className="rps-card-list">
                        <li className="rps-card-item">📰 Scopus & SCI Journals</li>
                        <li className="rps-card-item">📝 Manuscript Editing</li>
                        <li className="rps-card-item">🔍 Plagiarism Checking</li>
                        <li className="rps-card-item">📊 Impact Factor Analysis</li>
                        <li className="rps-card-item">🚀 Fast-track Publication</li>
                    </ul>
                    <div className="rps-card-footer">
                        <button className="rps-cta-button" aria-label="Contact for publication services">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Quick Links Card */}
                <div className="rps-card rps-card--secondary">
                    <h4 className="rps-card-title">Quick Navigation</h4>
                    <ul className="rps-card-list rps-quick-links">
                        {[
                            { href: "#h-detailed-steps", text: "Publication Process" },
                            { href: "#h-best-practices", text: "Best Practices" },
                            { href: "#h-dos-donts", text: "Guidelines" },
                            { href: "#h-timeline", text: "Timelines" },
                            { href: "#h-faqs", text: "FAQs" },
                        ].map((link, i) => (
                            <li key={i} className="rps-card-item">
                                <a
                                    href={link.href}
                                    className="rps-quick-link"
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
                <div className="rps-card rps-card--stats">
                    <h4 className="rps-card-title">Our Impact</h4>
                    <div className="rps-stats-grid">
                        <div className="rps-stat-item">
                            <span className="rps-stat-number">500+</span>
                            <span className="rps-stat-label">Papers Published</span>
                        </div>
                        <div className="rps-stat-item">
                            <span className="rps-stat-number">98%</span>
                            <span className="rps-stat-label">Acceptance Rate</span>
                        </div>
                        <div className="rps-stat-item">
                            <span className="rps-stat-number">50+</span>
                            <span className="rps-stat-label">Journals Supported</span>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
