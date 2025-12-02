import React from "react";
import "./PhDAdmission2025Mumbai.scss";
import LeftSidebar from "../../LeftSidebar";

const universityList = [
  {
    name: "IIT Bombay",
    domains: "Engineering, Science, Interdisciplinary",
    mode: "Full-time",
    link: "https://iitb.ac.in",
  },
  {
    name: "University of Mumbai",
    domains: "Arts, Science, Commerce, Law",
    mode: "Full/Part",
    link: "https://mu.ac.in",
  },
  {
    name: "NMIMS Deemed University",
    domains: "Management, Technology, Science",
    mode: "Full/Part",
    link: "https://nmims.edu",
  },
  {
    name: "Somaiya Vidyavihar University",
    domains: "Engineering, Life Sciences, Social Sciences",
    mode: "Full/Part",
    link: "https://somaiya.edu",
  },
  {
    name: "Amity University Mumbai",
    domains: "Emerging Tech, Business, Social Research",
    mode: "Full/Part",
    link: "https://amity.edu/mumbai",
  },
  {
    name: "Chhatrapati Shivaji Maharaj Univ.",
    domains: "Commerce, IT, Applied Sciences",
    mode: "Full/Part",
    link: "https://csmu.ac.in",
  },
];

const timeline = [
  ["🔍 Application Window", "April – July 2025", "Online registration, document upload, and eligibility check"],
  ["✍️ Entrance Exams", "July – August 2025", "University-specific / UGC-NET / GATE exams based on discipline"],
  ["📜 Proposal & Interview", "August – September 2025", "Research proposal presentation + viva with doctoral committee"],
  ["✅ Provisional Admission", "September – October 2025", "Coursework begins for admitted scholars"],
  ["🧪 Topic Finalization", "Late 2025 – Early 2026", "Ethics approval, supervisor allocation, and research plan submission"],
];

const services = [
  ["🎯 University Shortlisting", "Based on domain, location, funding, and specialization"],
  ["✍️ SOP / Research Proposal Assistance", "Expert help to draft impactful research statements"],
  ["📚 Entrance Coaching (Optional)", "UGC-NET/GATE prep for PhD entrance tests"],
  ["💬 Interview & Viva Practice", "Personalized mock interviews and presentation support"],
  ["🧭 Post-Admission Research Planning", "Topic finalization, ethics support, methodology guidance"],
];

const benefits = [
  "🔹 Increased chances of getting funding/scholarships",
  "🔹 Time for proposal review and expert feedback",
  "🔹 Better preparation for exams and interviews",
  "🔹 Access to supervisors in high-demand domains",
];

const faqs = [
  {
    question: "When should I apply for PhD admission 2025 in Mumbai?",
    answer: "Most universities begin accepting applications between April and July 2025. Early preparation is key.",
  },
  {
    question: "What exams are accepted for PhD admission in Mumbai?",
    answer: "UGC-NET, CSIR-NET, GATE, and sometimes university-level entrance exams are accepted depending on the university and program.",
  },
  {
    question: "Can working professionals apply for part-time PhDs in Mumbai?",
    answer: "Yes, many universities offer part-time or executive PhD options with flexible coursework timelines.",
  },
  {
    question: "Do I need to have a research proposal ready before applying?",
    answer: "Yes, most institutions require at least a preliminary research idea or synopsis at the time of interview.",
  },
  {
    question: "Does Narpavi help in applying for multiple universities?",
    answer: "Absolutely! We help you build a parallel application strategy across 2–4 target universities.",
  },
];

const PhDAdmission2025Mumbai = () => {
  return (
    <div className="consulting-layout">
      {/* Left Sidebar */}
      <div className="side-box left-box">
         <a href="/home-page" class="buttonhp">Home Page</a>
        <LeftSidebar/>
        <h3>📘 Explore Topics</h3>
        <ul>
          <li>PhD Admission Process</li>
          <li>Guide Selection</li>
          <li>Proposal Support</li>
          <li>Research Planning</li>
          <li>Scholarship Info</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="consulting-box">
        <h1>PhD Admission 2025 in Mumbai</h1>
        <h2>Plan. Prepare. Pursue with Narpavi Research Institute</h2>

        <p>
          Are you looking to secure your PhD admission 2025 in Mumbai at a top university? With its diverse research ecosystem, Mumbai offers an ideal platform for scholars in Engineering, Management, and Arts & Science to embark on their doctoral journey.
        </p>
        <p>
          At <strong>Narpavi Research Institute</strong>, we bring over 15 years of trusted experience in offering end-to-end support for PhD admission 2025 in Mumbai—from university selection to final research submission.
        </p>

        {/* Top Universities Table */}
        <h3>🏛️ Top Universities Offering PhD Admission 2025 in Mumbai</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>University Name</th>
                <th>Research Domains Covered</th>
                <th>Mode</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {universityList.map((u, idx) => (
                <tr key={idx}>
                  <td>{u.name}</td>
                  <td>{u.domains}</td>
                  <td>{u.mode}</td>
                  <td><a href={u.link} target="_blank" rel="noopener noreferrer">{u.link.replace("https://", "")}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p><strong>👉 Apply early</strong> for the best chances of PhD admission 2025 in Mumbai.</p>

        {/* Admission Timeline */}
        <h3>🧭 PhD Admission Process 2025 in Mumbai</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr><th>Stage</th><th>Timeline</th><th>Description</th></tr>
            </thead>
            <tbody>
              {timeline.map((row, idx) => (
                <tr key={idx}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Who Can Apply */}
        <h3>💼 Who Can Apply for PhD Admission 2025 in Mumbai?</h3>
        <ul>
          <li>🎓 Postgraduates with Master’s degree in relevant disciplines</li>
          <li>🧑‍🏫 UGC-NET / CSIR-NET / GATE qualified candidates</li>
          <li>🧑‍💼 Working professionals eligible for part-time doctoral programs</li>
          <li>🌐 International applicants seeking research immersion in India</li>
        </ul>

        {/* Services Table */}
        <h3>💡 Why Narpavi Research Institute?</h3>
        <div className="table-container">
          <table>
            <thead><tr><th>Services We Offer</th><th>Description</th></tr></thead>
            <tbody>
              {services.map((s, idx) => (
                <tr key={idx}><td>{s[0]}</td><td>{s[1]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Benefits */}
        <h3>📈 Benefits of Early Planning for PhD Admission 2025 in Mumbai</h3>
        <ul>
          {benefits.map((b, idx) => <li key={idx}>{b}</li>)}
        </ul>

          {/* CTA */}
        <div className="cta">
          <h3>📞 Ready to Begin Your PhD Admission 2025 in Mumbai?</h3>
          <p>
            At Narpavi Research Institute, we go beyond admissions—we help you build your future in research.
            Whether you are aiming for IITs, central universities, or private institutions, our dedicated team ensures
            you’re always one step ahead in your PhD admission 2025 in Mumbai journey.
          </p>
          <p>
            🌐 <strong>Visit:</strong> www.narpaviresearch.com <br />
            📩 <strong>Email:</strong> info@narpaviresearch.com <br />
            📱 <strong>Call/WhatsApp:</strong> +91-XXXXXXXXXX   
          </p>
        </div>

        {/* FAQs */}
        <section className="faq-section">
          <h3>📝 FAQs – PhD Admission 2025 in Mumbai</h3>
          {faqs.map((faq, idx) => (
            <details key={idx}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>

      </div>

      {/* Right Sidebar */}
      <div className="side-box right-box">
        <h3>🔖 Tags</h3>
        <ul>
          <li>PhD Admission 2025</li>
          <li>Mumbai Universities</li>
          <li>Doctoral Programs</li>
          <li>Research Scholars</li>
          <li>PhD Guide Support</li>
          <li>UGC-NET/GATE</li>
        </ul>
      </div>
    </div>
  );
};

export default PhDAdmission2025Mumbai;

