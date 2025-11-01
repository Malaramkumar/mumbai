import React from 'react';
import "./CivilProjectDevelopmentCenter.scss"; // Assuming a common SCSS file

const faqs = [
  {
    question: "Why is Water Treatment & Recycling a critical focus for Mumbai?",
    answer: "As a densely populated coastal city, Mumbai faces immense pressure on its freshwater resources. Water treatment and recycling are essential for ensuring a sustainable water supply, managing wastewater effectively, and protecting the coastal ecosystem. These technologies are key to the city's long-term resilience and smart city goals [174]."
  },
  {
    question: "What are some real-world applications of these technologies in Mumbai?",
    answer: "These technologies are widely used in Mumbai. The BMC is implementing desalination projects, advanced Membrane Bioreactors (MBR) are used in STPs in Navi Mumbai and Thane, and many new real estate projects are integrating greywater recycling and rainwater harvesting systems [177][179]."
  },
  {
    question: "What specific technologies are covered in Narpavi's projects?",
    answer: "Our projects explore a range of advanced water treatment technologies, including Reverse Osmosis (RO) for desalination, Membrane Bioreactors (MBR) for wastewater recycling, Activated Carbon Filtration for industrial effluents, and IoT-based systems for real-time water quality monitoring [174]."
  },
  {
    question: "What kind of innovative research can Ph.D. scholars pursue in this field?",
    answer: "Ph.D. research focuses on cutting-edge topics such as developing AI models for predicting water quality, creating digital twins for real-time monitoring of treatment plants, designing hybrid nanomaterial membranes for advanced purification, and developing bio-electrochemical systems for energy recovery from wastewater [181]."
  },
  {
    question: "Does Narpavi offer support for publishing research in water engineering?",
    answer: "Yes, we provide comprehensive guidance for publishing in high-impact journals. Our expert mentors assist with every aspect, from defining an IEEE-aligned research topic and conducting robust analysis to writing the manuscript and navigating the submission process for top-tier Scopus and SCI-indexed publications."
  }
];

const WaterTreatmentRecyclingMumbai = () => {
  return (
    <div className="CEProjectDevelopmentCenter">
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Water Treatment Projects Mumbai</li>
              <li>Wastewater Recycling Systems</li>
              <li>RO Plant Design Research</li>
              <li>AI-Based Water Quality Monitoring</li>
              <li>Industrial Water Reuse Mumbai</li>
              <li>Smart City Water Management</li>
              <li>Nanomaterial Water Purification</li>
              <li>MBR System Projects</li>
              <li>IEEE Water Engineering</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Water Treatment & Recycling (Mumbai-Based Civil Engineering)</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Water Treatment & Recycling</strong> is a vital discipline for ensuring the sustainability of Mumbai, a megacity facing significant water resource challenges. At Narpavi Research Institute, our projects focus on developing innovative, energy-efficient, and AI-integrated water management solutions. We guide students in designing advanced systems for purification, wastewater recycling, and desalination, directly contributing to Mumbai's Smart City and environmental goals.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-applications">
              <h2>Applications in Mumbai Industries</h2>
              <ul>
                <li><strong>Municipal Water Supply:</strong> Designing and upgrading water purification plants to deliver safe drinking water across Mumbai.</li>
                <li><strong>Industrial Water Recycling:</strong> Implementing Zero Liquid Discharge (ZLD) and advanced treatment solutions for industries [176].</li>
                <li><strong>Real Estate:</strong> Integrating greywater recycling and rainwater harvesting in residential and commercial buildings.</li>
                <li><strong>Desalination:</strong> Developing seawater treatment plants to augment Mumbai's water supply, a key initiative for the BMC [181].</li>
                <li><strong>Smart Monitoring:</strong> Using IoT sensors for real-time tracking of water quality in distribution networks.</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Methodology</th>
                      <th>Industrial Application in Mumbai</th>
                      <th>Future Research Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Reverse Osmosis (RO)</td>
                      <td>Desalination & industrial purification</td>
                      <td>Low-energy and anti-fouling membranes</td>
                    </tr>
                    <tr>
                      <td>Membrane Bioreactor (MBR)</td>
                      <td>Wastewater recycling for non-potable use</td>
                      <td>Hybrid MBRs with nanomaterial filters</td>
                    </tr>
                    <tr>
                      <td>Activated Carbon Filtration</td>
                      <td>Industrial effluent polishing</td>
                      <td>Development of reusable carbon composites</td>
                    </tr>
                    <tr>
                      <td>UV & Ozone Disinfection</td>
                      <td>Municipal water purification</td>
                      <td>AI-controlled automated disinfection systems</td>
                    </tr>
                    <tr>
                      <td>IoT-Based Monitoring</td>
                      <td>Smart city water networks</td>
                      <td>Predictive analytics for contamination events</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-cycle">
              <h2>B.Tech, M.Tech, and Ph.D. Project Cycles</h2>
              <h4>B.Tech Project Cycle</h4>
              <p>Focuses on fundamental design and analysis, including projects like creating compact greywater recycling systems for buildings, building IoT-based water quality monitors, and simulating rainwater harvesting efficiency.</p>
              <h4>M.Tech Project Cycle</h4>
              <p>Emphasizes advanced modeling and optimization. Projects involve comparative studies of different treatment processes (e.g., MBR vs. ASP), using AI models to predict treatment efficiency, and optimizing hybrid RO-UV systems.</p>
              <h4>Ph.D. Project Cycle</h4>
              <p>Targets pioneering research in intelligent water systems. Topics include developing machine learning models for city-wide water recycling, creating digital twins for real-time plant monitoring, and designing advanced nanomaterial membranes.</p>
            </section>
            
            <section className="kerala-alluniversityfaq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, i) => (
                  <details key={i}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(f => ({
                      "@type": "Question",
                      "name": f.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.answer
                      }
                    }))
                  })
                }}
              />
            </section>
          </div>

          {/* Right Column – Related Services */}
          <div className="CEProjectDevelopmentCenter-right">
            <h3>🔗 Related Civil Fields</h3>
            <ul>
              <li><a href="/environmental-engineering-mumbai">Environmental Engineering</a></li>
              <li><a href="/smart-city-planning-mumbai">Smart City Planning</a></li>
              <li><a href="/construction-management-mumbai">Construction Management</a></li>
              <li><a href="/geotechnical-engineering-mumbai">Geotechnical Engineering</a></li>
              <li><a href="/transportation-engineering-mumbai">Transportation Engineering</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WaterTreatmentRecyclingMumbai;

