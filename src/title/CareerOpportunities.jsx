import React from 'react';
import './CareerOpportunities.scss';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  FaTools,
  FaBriefcase,
  FaUniversity,
  FaGlobe,
  FaCompass
} from 'react-icons/fa';

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


const keywords = [
  'Career opportunities after PhD in India',
  'Top 10 career opportunities after PhD',
  'Government jobs after PhD',
  'After PhD, what next degree in India',
  'Career opportunities after PhD',
  'After PhD salary per month',
  'After PhD salary in India'
];

const CareerAfterPhD = () => {
  const [openIndex, setOpenIndex] = useState(null);
      const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);
  return (
    <div className="career-layout">
      {/* Left Sidebar */}
      <div className="side-box left-box">
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
          At Narpavi Research Institute, we understand that earning a doctorate is not the end—it's the beginning of a transformative professional journey. With our expert post-admission and career planning guidance, we empower scholars to navigate a world of career opportunities after PhD tailored to their domain, passion, and potential.        </p>
        <p>
Whether you're a PhD holder in Engineering, Management, or Arts & Science, the landscape of career opportunities after PhD in India and globally is expanding rapidly—across academia, industry, policy-making, research, and entrepreneurship.        </p>

        {/* ENGINEERING */}
        <div className="career-block">
          <h3><FaTools className="icon" /> Career Opportunities After PhD in Engineering</h3>
          <p>For Engineering PhDs, innovation and advanced research drive the job market. The career opportunities after PhD in Engineering span core industries, deep-tech startups, and global R&D centers.</p>
          <h4>Popular Career Paths:</h4>
          <ul>
            <li>R&D Scientist / Research Engineer</li>
            <li>Applied Researcher in AI, Robotics, IoT, VLSI</li>
            <li>Postdoctoral Researcher (IITs, ISRO, DRDO)</li>
            <li>Technical Consultant / Patent Analyst</li>
            <li>Product Development Head in Deep Tech</li>
            <li>Assistant/Associate Professor in Engineering Institutes</li>
          </ul>
        <h4>Sectors Hiring PhDs:</h4>
        <p>Aerospace, Automotive, Semiconductor, Energy, Research Labs, Defence, Higher Education</p>
        <h4>Earning Potential:</h4>
            <ul>
              <li>India: ₹10–18 LPA (entry), ₹25–30+ LPA (experienced)</li>
              <li>Global: $70,000–$110,000/year</li>

            </ul>
            <p>With abundant career opportunities after PhD in engineering, scholars are driving technological progress across borders.</p>
        </div>

        {/* MANAGEMENT */}
        <div className="career-block">
          <h3><FaBriefcase className="icon" /> Career Opportunities After PhD in Management</h3>
          <p>The career opportunities after PhD in Management are both prestigious and lucrative, spanning B-schools, multinational corporations, and policy think tanks. A doctoral degree in management opens doors to high-impact strategic roles.</p>
          <h4>In-Demand Roles:</h4>
          <ul>
            <li>Faculty in IIMs, XLRI, Top B-Schools</li>
            <li>Corporate Researcher</li>
            <li>Policy Analyst / Government Advisor</li>
            <li>Research Publication Editor</li>
          </ul>
          <h4>Top Sectors:</h4>
          <p>Consulting, Business Strategy, Higher Education, Policy Think Tanks, Development Agencies, Market Intelligence</p>
          <h4>Salaries:</h4>
          <ul>
            <li>India: ₹9–15 LPA in academics, ₹15–25+ LPA in corporate roles</li>
            <li>Abroad: $80,000–$130,000/year </li>

          </ul>
        <p>Today, career opportunities after PhD in management are driving leadership in academia and beyond.</p>
        </div>

        {/* ARTS & SCIENCE */}
        <div className="career-block">
          <h3><FaUniversity className="icon" /> Career Opportunities After PhD in Arts & Science</h3>
          <p>The intellectual rigor of PhD research in Arts & Science translates into powerful roles in academia, policy research, content leadership, and international collaboration. The career opportunities after PhD in Arts & Science are impactful and intellectually fulfilling.</p>
            <h4>Career Paths Include: </h4>
          <ul>
            <li>University Professor</li>
            <li>Scientific Writer</li>
            <li>Academic Writer</li>
            <li>Data Analyst in Psychology, Economics, Sociology</li>
            <li>Policy Researcher (NGOs, Govt, Think Tanks)</li>
            <li>Cultural Research Consultant</li>
            <li>Research Coordinator for International Programs</li>
          </ul>
          <h4>Employment Sectors:</h4>
          <p>Universities, Research Bodies, Government Agencies, Publishing, Developmental NGOs</p>
          <h4>Salary Ranges:</h4>
          <ul>
            <li>India: ₹7–12 LPA initially; higher with citations and grants</li>
            <li>Global: $60,000–$90,000/year + grants</li>
            <p>With global expansion in liberal research, the career opportunities after PhD in Arts & Science are more diverse than ever.</p>
          </ul>
          
        </div>

        <div className="career-block">
          <h3>🌐 Emerging Career Opportunities After PhD</h3>
          <p>PhD scholars are no longer confined to academia. Today’s dynamic world presents a growing array of alternative career opportunities after PhD, including:</p>
        <ul>
          <li>🔬 Postdoctoral Fellowships (₹50K–₹90K/month in India | $40K–$65K/year abroad)</li>
          <li>🚀 Entrepreneurship (EdTech, HealthTech, DeepTech startups led by PhDs)</li>
          <li>💼 Independent Consulting (Research advisory, data science, academic coaching)</li>
          <li>🌍 International Careers (UN, WHO, UNESCO, EU programs, overseas teaching)</li>
        </ul>
    <p>Each of these career opportunities after PhD leverages your academic expertise for societal and commercial value.</p>
        </div>

        {/* CTA */}
        <div className="cta">
          <h3><FaCompass className="icon" /> Plan Your Future with Narpavi Research Institute</h3>
          <p>
            We offer personalized guidance to help you unlock the right career opportunities after PhD.
          </p>
        </div>
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
