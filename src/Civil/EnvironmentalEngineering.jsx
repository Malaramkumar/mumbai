import React from 'react';
import "./CivilProjectDevelopmentCenter.scss"; // Assuming a common SCSS file

const faqs = [
  {
    question: "Why is Environmental Engineering a critical field for Mumbai?",
    answer: "As a densely populated coastal megacity, Mumbai faces significant environmental challenges, including water pollution, air quality degradation, and immense pressure on its waste management systems. Environmental engineering provides the critical solutions needed to ensure sustainable urban development and a healthy living environment for its residents [170]."
  },
  {
    question: "What real-world applications do these projects focus on in Mumbai?",
    answer: "Our projects are directly linked to Mumbai's pressing needs, such as designing advanced wastewater treatment plants for the BMC, developing smart solid waste management strategies, monitoring air pollution in high-traffic corridors, and creating sustainable solutions for industrial effluent treatment [169]."
  },
  {
    question: "What modern technologies are used in Narpavi's Environmental Engineering projects?",
    answer: "We focus on cutting-edge technologies, including Membrane Bioreactors (MBR) for wastewater treatment, IoT-based sensor networks for real-time air and water quality monitoring, GIS for mapping pollution hotspots, and AI/ML for predictive environmental modeling."
  },
  {
    question: "What are some innovative research topics for M.Tech and Ph.D. scholars?",
    answer: "Advanced research topics include developing AI-driven models for urban air quality prediction, creating circular economy frameworks for waste valorization, designing hybrid membrane reactors for treating complex industrial effluents, and using digital twins for carbon-neutral building design."
  },
  {
    question: "How does Narpavi support the publication of environmental research?",
    answer: "We provide comprehensive guidance to ensure students can publish their work in high-impact journals. Our support includes helping to frame research questions aligned with IEEE standards, conducting robust data analysis, writing high-quality manuscripts, and navigating the peer-review process for Scopus and SCI-indexed publications."
  }
];

const EnvironmentalEngineeringMumbai = () => {
  return (
    <div className="CEProjectDevelopmentCenter">
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Environmental Engineering Mumbai</li>
              <li>Wastewater Treatment Research</li>
              <li>Air Pollution Monitoring</li>
              <li>Sustainable Building Design</li>
              <li>Smart Waste Management</li>
              <li>GIS-Based Environmental Studies</li>
              <li>Green Infrastructure Projects</li>
              <li>IEEE Environmental Projects</li>
              <li>Narpavi Research Institute</li>
              <li>Water Quality Monitoring</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Environmental Engineering (Mumbai-Based Civil Engineering)</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Environmental Engineering</strong> is fundamental to creating a sustainable and resilient future for Mumbai. This critical civil engineering discipline addresses the city's pressing challenges in waste management, water and air pollution, and ecosystem preservation. At Narpavi Research Institute, our projects empower students to design and implement innovative, IEEE-aligned solutions, integrating AI, IoT, and advanced treatment technologies to support Mumbai's journey towards a greener, healthier urban environment.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-applications">
              <h2>Applications in Mumbai Industries</h2>
              <ul>
                <li><strong>Municipal Waste Management:</strong> Designing integrated systems for waste collection, segregation, and resource recovery.</li>
                <li><strong>Water Resource Engineering:</strong> Developing advanced wastewater treatment and water reuse solutions for the city.</li>
                <li><strong>Air Quality Monitoring:</strong> Deploying sensor networks to track and predict air pollution in real-time.</li>
                <li><strong>Industrial Effluent Treatment:</strong> Creating specialized treatment plants for Mumbai's diverse industrial sector [166].</li>
                <li><strong>Sustainable Construction:</strong> Implementing green building principles and materials to reduce the carbon footprint of new developments.</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Methodology</th>
                      <th>Industry Application in Mumbai</th>
                      <th>Emerging Research Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Membrane Bioreactors (MBR)</td>
                      <td>Wastewater treatment plants (BMC)</td>
                      <td>Energy-efficient biofilm reactors</td>
                    </tr>
                    <tr>
                      <td>IoT-Based Air Sensors</td>
                      <td>Urban pollution monitoring</td>
                      <td>AI-enabled predictive emission mapping</td>
                    </tr>
                    <tr>
                      <td>Anaerobic Digestion</td>
                      <td>Waste-to-energy conversion</td>
                      <td>Hybrid digestion with bioenergy recovery</td>
                    </tr>
                    <tr>
                      <td>Constructed Wetlands</td>
                      <td>Natural wastewater treatment</td>
                      <td>AI-GIS based wetland restoration</td>
                    </tr>
                    <tr>
                      <td>Green Building Certification</td>
                      <td>Sustainable construction</td>
                      <td>Carbon-neutral building lifecycle analytics</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-cycle">
              <h2>B.Tech, M.Tech, and Ph.D. Project Cycles</h2>
              <h4>B.Tech Project Cycle</h4>
              <p>Focuses on foundational skills through projects like designing small-scale sewage treatment plants, building IoT-based air quality monitors, and developing plastic waste recycling models for local communities.</p>
              <h4>M.Tech Project Cycle</h4>
              <p>Emphasizes advanced analysis using tools like GIS for mapping groundwater contamination, conducting Life Cycle Assessments (LCA) for waste management systems, and formulating carbon footprint reduction strategies.</p>
              <h4>Ph.D. Project Cycle</h4>
              <p>Targets groundbreaking research, including the development of AI/ML models for urban air quality optimization, creating circular economy frameworks for resource recovery, and designing hybrid bioreactors for complex industrial effluents.</p>
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
              <li><a href="/water-resources-engineering-mumbai">Water Resources Engineering</a></li>
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

export default EnvironmentalEngineeringMumbai;

