import React, { useState } from "react";
import "./FundingPhd.scss";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEO from "../assets/SEO"; // ✅ Import reusable SEO
import LeftSidebar from "../LeftSidebar";

const faqs = [
  {
    question: "Is full PhD funding available in Mumbai?",
    answer:
      "Yes, if you qualify for schemes like UGC-JRF, CSIR-NET, or AICTE-ADF, your PhD can be fully funded including stipend, rent, and contingency.",
  },
  {
    question: "Can I get funding from Mumbai University itself?",
    answer:
      "Yes, Mumbai University offers fellowships, assistantships, and merit-based aid for full-time PhD scholars in specific departments.",
  },
  {
    question: "Are international scholarships available for Mumbai-based PhD students?",
    answer:
      "Yes. If enrolled in a PhD in Mumbai, you can apply for Fulbright-Nehru, DAAD, or Commonwealth PhD Scholarships for part of your research abroad.",
  },
  {
    question: "Does Narpavi Research Institute help in applying for funding?",
    answer:
      "We do not apply or offer funding directly, but we provide end-to-end guidance to help you: Understand eligibility, choose the right funding, and align your proposal to funding norms.",
  },
];

const PhDFundingMumbai = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  // ✅ FAQ Schema (for Google rich results)
  const faqSchema = {
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="funding-mumbai-container">
      {/* ✅ SEO Meta Tags */}
     <SEO
  title="Funding for PhD in Mumbai 2025 | Scholarships, Fellowships & Stipends"
  description="Explore PhD funding in Mumbai including UGC-NET JRF, CSIR, DST-INSPIRE, AICTE Doctoral Fellowship, and International Scholarships."
  url="/funding-for-phd-in-mumbai–2025"
  image="/assets/phd-funding-mumbai-banner.jpg"
  keywords="Government funding for PhD in Mumbai, Online funding for PhD in Mumbai, Free funding for PhD in Mumbai, Funding for PhD in Mumbai 2025, TIFR stipend for PhD, Fellowship for PhD without NET, Highest PhD stipend in India, PhD scholarships in India"
  schemaType="FAQPage"
  schemaData={faqSchema}
/>


      {/* Left Sidebar */}
      <aside className="left-links">
         <a href="/home-page" class="buttonhp">Home Page</a>
        <LeftSidebar/>
        <h3>Quick Info</h3>
        <ul>
          <li>UGC-NET JRF</li>
          <li>CSIR Fellowship</li>
          <li>DST-INSPIRE</li>
          <li>AICTE Fellowship</li>
          <li>Institutional Support</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>🎓 Funding for PhD in Mumbai – 2025</h1>
        <p>
          <strong>
            Explore Fellowships, Scholarships & Stipend Support for Doctoral
            Scholars
          </strong>{" "}
          — Expertly curated by Narpavi Research Institute
        </p>

        <p>
          Pursuing a PhD in Mumbai opens up exciting opportunities, both
          academically and financially. Mumbai, being home to premier
          institutions like IIT Bombay, Mumbai University, SNDT, and several
          private research universities, offers a variety of PhD funding options
          to support research in Engineering, Management, and Arts & Science.
        </p>

        <p>
          At Narpavi Research Institute, we specialize in guiding PhD aspirants
          in Mumbai to understand and explore financial support options—from
          national-level fellowships to institution-specific stipends. While we
          do not provide funding directly, our role is to help you navigate
          available PhD fellowships in Mumbai and make informed decisions about
          your academic future.
        </p>

        <h2>💡 Why Funding Matters for PhD Scholars in Mumbai</h2>
        <p>
          🎯 Living and researching in Mumbai can be expensive, but numerous
          funding schemes, research stipends, and government scholarships are
          available for full-time PhD students. These include monthly
          fellowships, research contingency funds, HRA, and sometimes travel
          allowances for conferences.
        </p>

        {/* 🎓 Government Fellowships Table */}
        <section className="funding-tables-wrapper">
          <section className="funding-table yellow-table">
            <h2>🎓 Government & National Fellowships</h2>
            <table>
              <thead>
                <tr>
                  <th>Fellowship Name</th>
                  <th>Monthly Stipend</th>
                  <th>Eligibility</th>
                  <th>Benefits</th>
                  <th>Duration</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>UGC-NET JRF</td>
                  <td>₹31K → ₹35K</td>
                  <td>UGC-NET qualified</td>
                  <td>HRA + ₹10k–₹20.5k/year</td>
                  <td>5 years</td>
                  <td>
                    <a
                      href="https://ugcnet.nta.nic.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ugcnet.nta.nic.in
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>CSIR-NET JRF</td>
                  <td>₹31K → ₹35K</td>
                  <td>CSIR-NET (Science/Tech streams)</td>
                  <td>HRA + ₹20k/year</td>
                  <td>5 years</td>
                  <td>
                    <a
                      href="https://csirnet.nta.nic.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      csirnet.nta.nic.in
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>DST-INSPIRE</td>
                  <td>₹31K → ₹35K</td>
                  <td>Top 1% UG/PG Science scholars</td>
                  <td>₹20k/year contingency</td>
                  <td>5 years</td>
                  <td>
                    <a
                      href="https://online-inspire.gov.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      online-inspire.gov.in
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>AICTE Doctoral Fellowship</td>
                  <td>₹31K → ₹35K</td>
                  <td>GATE-qualified Engineering grads</td>
                  <td>HRA + ₹15k/year</td>
                  <td>3 years</td>
                  <td>
                    <a
                      href="https://www.aicte-india.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      aicte-india.org
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>ICSSR Fellowship</td>
                  <td>₹20K – ₹25K</td>
                  <td>Social Sciences & Management</td>
                  <td>₹20k/year contingency</td>
                  <td>2 years</td>
                  <td>
                    <a
                      href="https://www.icssr.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      icssr.org
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 🌍 International Fellowships */}
          <section className="fellowship-grid-wrapper">
            <h2>🌍 International Fellowships</h2>
            <div className="fellowship-grid-header">
              <div className="fellowship">Fellowship</div>
              <div className="stipend">Stipend</div>
              <div className="benefits">Benefits</div>
              <div className="destination">Destination</div>
            </div>
            <div className="fellowship-grid-row">
              <div className="fellowship">Fulbright-Nehru Fellowship</div>
              <div className="stipend">$2,000–$2,500/month</div>
              <div className="benefits">
                Travel, tuition, health insurance
              </div>
              <div className="destination">USA</div>
            </div>
            <div className="fellowship-grid-row">
              <div className="fellowship">DAAD (Germany)</div>
              <div className="stipend">€1,200–€1,500/month</div>
              <div className="benefits">
                Living expenses + university fees
              </div>
              <div className="destination">Germany</div>
            </div>
            <div className="fellowship-grid-row">
              <div className="fellowship">Commonwealth PhD Scholarship</div>
              <div className="stipend">Full tuition + stipend</div>
              <div className="benefits">
                Full academic cost + airfare
              </div>
              <div className="destination">UK</div>
            </div>
          </section>

          {/* 💼 CSR / Industry Grants */}
          <section className="funding-table redblue-table">
            <h2>💼 CSR & Industry Grants</h2>
            <table>
              <thead>
                <tr>
                  <th>Fellowship</th>
                  <th>Monthly Stipend</th>
                  <th>Eligibility</th>
                  <th>Perks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TCS Research Fellowship</td>
                  <td>₹40,000 – ₹45,000</td>
                  <td>AI, Data Science, Computer Engg.</td>
                  <td>Laptop, mentorship, IP rights</td>
                </tr>
                <tr>
                  <td>Qualcomm Innovation Grant</td>
                  <td>₹3.5 – ₹4 LPA</td>
                  <td>Wireless/VLSI/AI researchers</td>
                  <td>Internship, travel allowance</td>
                </tr>
                <tr>
                  <td>Wipro Earthian Fellowship</td>
                  <td>₹25K – ₹50K/month</td>
                  <td>ESG/Sustainability research</td>
                  <td>CSR project collaboration</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        {/* 🔍 FAQs */}
        <section id="faqs" className="faq-section11">
          <h2 className="faq-title11">🔍 FAQs – PhD Funding in Mumbai</h2>
          {faqs.map((item, index) => (
            <div
              className={`faq-item11 ${openIndex === index ? "active" : ""}`}
              key={index}
            >
              <div
                className="faq-question11"
                onClick={() => toggleFAQ(index)}
              >
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
      </main>

      {/* Right Sidebar */}
      <aside className="right-keywords">
        <h3>📌 SEO Keywords</h3>
        <ul>
          <li>Government funding for PhD in Mumbai</li>
          <li>Online funding for PhD in Mumbai</li>
          <li>Free funding for PhD in Mumbai</li>
          <li>Funding for PhD in Mumbai 2025</li>
          <li>TIFR stipend for PhD</li>
          <li>Fellowship for PhD without NET</li>
          <li>Highest PhD stipend in India</li>
          <li>PhD scholarships in India</li>
        </ul>
      </aside>
    </div>
  );
};

export default PhDFundingMumbai;
