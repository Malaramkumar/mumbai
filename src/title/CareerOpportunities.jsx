import React, { useState } from "react";
import "./CareerOpportunities.scss";
import SEO from "../assets/SEO"; // ✅ Reusable SEO component
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaTools, FaBriefcase, FaUniversity, FaCompass } from "react-icons/fa";
import LeftSidebar from "../LeftSidebar";

// ✅ FAQs data
const faqs = [
  {
    question: "What are the best career options after completing a PhD in India?",
    answer:
      "Career options include academia (Assistant Professor, Postdoc), corporate R&D (Scientist, Analyst), public policy roles, think tanks, and entrepreneurship.",
  },
  {
    question: "Are there government jobs available for PhD holders?",
    answer:
      "Yes, top organizations like ISRO, DRDO, CSIR, and central universities regularly recruit PhD scholars for research, faculty, and policy-related roles.",
  },
  {
    question: "Can I get high-paying jobs in MNCs after my PhD?",
    answer:
      "Absolutely. Companies like Google, Microsoft, Amazon, and TCS hire PhD holders as Research Scientists, Data Scientists, and Technical Experts.",
  },
  {
    question: "What if I don’t want to go into teaching?",
    answer:
      "Apart from academia, PhDs can work in consulting, product innovation, policy formulation, entrepreneurship, or even publishing and scientific writing.",
  },
  {
    question: "How can Narpavi Research Institute help in post-PhD career planning?",
    answer:
      "We offer 1-on-1 mentoring, job mapping, proposal editing, and interview prep for academic, research, and industry roles in India and abroad.",
  },
];

// ✅ Keywords for SEO
const keywords = [
  "Career opportunities after PhD in India",
  "Top 10 career opportunities after PhD",
  "Government jobs after PhD",
  "After PhD, what next degree in India",
  "Career opportunities after PhD",
  "After PhD salary per month",
  "After PhD salary in India",
];

const CareerAfterPhD = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="career-layout">
      {/* ✅ SEO Component with Auto FAQ Schema */}
      <SEO
        title="Career Opportunities After PhD in India | Narpavi Research Institute"
        description="Explore diverse career opportunities after PhD in India and abroad in Engineering, Management, Arts & Science. Get expert mentoring and career planning support from Narpavi Research Institute."
        url="/career-opportunities-after-phd"
        image="/assets/career-after-phd-banner.jpg"
        keywords={keywords}
        faqs={faqs} // 👈 Pass FAQ array directly (auto handled in SEO.jsx)
      />

      {/* Left Sidebar */}
      <div className="side-box left-box">
         <a href="/home-page" class="buttonhp">Home Page</a>
        <LeftSidebar/>
        <h3>Explore Career Domains</h3>
        <ul>
          <li>Engineering</li>
          <li>Management</li>
          <li>Arts & Science</li>
          <li>International Research</li>
          <li>Entrepreneurship</li>
        </ul>
      </div>

      {/* Main Content */}
      <section className="career-after-phd">
        <h1>Career Opportunities After PhD</h1>
        <h2>What’s Next? Discover Your Future with Narpavi Research Institute</h2>

        <p className="intro">
          At Narpavi Research Institute, we understand that earning a doctorate
          is not the end—it's the beginning of a transformative professional
          journey. With our expert post-admission and career planning guidance,
          we empower scholars to navigate a world of career opportunities after
          PhD tailored to their domain, passion, and potential.
        </p>
        <p>
          Whether you're a PhD holder in Engineering, Management, or Arts &
          Science, the landscape of career opportunities after PhD in India and
          globally is expanding rapidly—across academia, industry, policy-making,
          research, and entrepreneurship.
        </p>

        {/* ENGINEERING */}
        <div className="career-block">
          <h3>
            <FaTools className="icon" /> Career Opportunities After PhD in
            Engineering
          </h3>
          <p>
            For Engineering PhDs, innovation and advanced research drive the job
            market. The career opportunities after PhD in Engineering span core
            industries, deep-tech startups, and global R&D centers.
          </p>
        </div>

        {/* MANAGEMENT */}
        <div className="career-block">
          <h3>
            <FaBriefcase className="icon" /> Career Opportunities After PhD in
            Management
          </h3>
          <p>
            The career opportunities after PhD in Management are both prestigious
            and lucrative, spanning B-schools, multinational corporations, and
            policy think tanks.
          </p>
        </div>

        {/* ARTS & SCIENCE */}
        <div className="career-block">
          <h3>
            <FaUniversity className="icon" /> Career Opportunities After PhD in
            Arts & Scienc
          </h3>
          <p>
            The intellectual rigor of PhD research in Arts & Science translates
            into powerful roles in academia, policy research, content leadership,
            and international collaboration.
          </p>
        </div>

        {/* CTA */}
        <div className="cta">
          <h3>
            <FaCompass className="icon" /> Plan Your Future with Narpavi Research
            Institute
          </h3>
          <p>
            We offer personalized guidance to help you unlock the right career
            opportunities after PhD.
          </p>
        </div>

        {/* FAQ Section */}
        <section className="faq-section11">
          <h2>FAQs – Career Opportunities After PhD</h2>
          {faqs.map((item, index) => (
            <div
              className={`faq-item11 ${openIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="faq-question11" onClick={() => toggleFAQ(index)}>
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
      </section>

      {/* Right Sidebar */}
      <div className="side-box right-box">
        <h3>Search Keywords for PhD Admission</h3>
        <ul>
          {keywords.map((keyword, index) => (
            <li key={index}>{keyword}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerAfterPhD;
