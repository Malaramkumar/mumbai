import React from 'react';
import "./CivilProjectDevelopmentCenter.scss"; // Assuming a common SCSS file

const faqs = [
  {
    question: "What makes Narpavi's Bridge Design & Monitoring center in Mumbai unique?",
    answer: "Our Mumbai center focuses on the specific challenges of designing and maintaining bridges in a dense, coastal urban environment. We combine advanced software like STAAD.Pro and ANSYS with hands-on experience in IoT-based structural health monitoring, preparing students to work on critical infrastructure like the Mumbai Trans Harbour Link [109]."
  },
  {
    question: "Which software and tools are used for these bridge projects?",
    answer: "We use a comprehensive suite of industry-standard tools, including STAAD.Pro and SAP2000 for structural design and analysis, ANSYS and ABAQUS for detailed Finite Element Analysis (FEA), and BIM software for integrated project management. For monitoring, we use IoT sensors and drone technology."
  },
  {
    question: "How do these projects address real-world challenges in Mumbai?",
    answer: "Projects are tailored to solve local problems, such as designing corrosion-resistant bridges for the coastal environment, optimizing traffic flow on high-traffic flyovers, and implementing real-time monitoring to prevent structural failures, reflecting the city's ongoing infrastructure upgrades [112]."
  },
  {
    question: "What are some advanced topics covered in M.Tech and Ph.D. research?",
    answer: "M.Tech and Ph.D. scholars explore cutting-edge areas like AI-based defect detection from drone imagery, developing self-healing concrete for enhanced durability, and creating quantum-inspired algorithms for ultra-fast stress simulations, pushing the boundaries of smart infrastructure."
  },
  {
    question: "Is there support for publishing my research in high-impact journals?",
    answer: "Absolutely. We provide end-to-end guidance for publishing in prestigious IEEE, Scopus, and SCI-indexed journals. Our mentorship covers everything from research ideation and data analysis to manuscript preparation and navigating the peer-review process."
  }
];

const BridgeDesignAndMonitoringMumbai = () => {
  return (
    <div className="CEProjectDevelopmentCenter">
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>bridge design Mumbai</li>
              <li>bridge monitoring projects</li>
              <li>structural health monitoring Mumbai</li>
              <li>steel bridge projects Mumbai</li>
              <li>RCC bridge design Mumbai</li>
              <li>composite bridge design IEEE</li>
              <li>smart bridge monitoring</li>
              <li>IoT sensors for bridges Mumbai</li>
              <li>Narpavi Research Institute</li>
              <li>civil engineering research Mumbai</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Bridge Design & Monitoring – Mumbai-Based Civil Engineering Projects</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Bridge Design & Monitoring</strong> is a critical field for ensuring the connectivity and economic vitality of a metropolis like Mumbai. At Narpavi Research Institute, our project development center provides students with IEEE-aligned projects that combine modern design software, innovative materials, and real-time monitoring techniques. We focus on creating safe, durable, and cost-effective bridge solutions tailored to Mumbai's unique urban and coastal environment.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-applications">
              <h2>Applications in Mumbai's Infrastructure</h2>
              <ul>
                <li><strong>Urban Transport Systems:</strong> Designing and optimizing bridges for high-traffic corridors and metro rail projects like the Mumbai Trans Harbour Link [107][109].</li>
                <li><strong>Port and Coastal Bridges:</strong> Creating structures that resist corrosion from the saline environment.</li>
                <li><strong>Industrial Connectivity:</strong> Developing low-maintenance bridges to connect industrial zones.</li>
                <li><strong>Smart City Initiatives:</strong> Integrating IoT-based structural health monitoring for real-time analytics.</li>
                <li><strong>Disaster Resilience:</strong> Designing bridges to withstand seismic activity and flooding.</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Method</th>
                      <th>Industry Application (Mumbai)</th>
                      <th>Key Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Finite Element Analysis (FEA)</td>
                      <td>Steel & RCC bridges</td>
                      <td>Accurate stress and strain prediction</td>
                    </tr>
                    <tr>
                      <td>Fiber Reinforced Polymer (FRP)</td>
                      <td>Coastal bridges, retrofitting</td>
                      <td>Corrosion resistance, lightweight</td>
                    </tr>
                    <tr>
                      <td>Structural Health Monitoring (SHM)</td>
                      <td>Urban flyovers, major sea links</td>
                      <td>Real-time safety assessment</td>
                    </tr>
                    <tr>
                      <td>BIM (Building Information Modeling)</td>
                      <td>Metro rail overpasses, complex interchanges</td>
                      <td>Efficient planning, clash detection</td>
                    </tr>
                    <tr>
                      <td>Drone-based Inspections</td>
                      <td>Port bridges, long-span bridges</td>
                      <td>Cost-effective, non-destructive inspection</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-cycle">
              <h2>B.Tech, M.Tech, and Ph.D. Project Cycles</h2>
              <h4>B.Tech Project Cycle</h4>
              <p>Focuses on applied design using STAAD.Pro or SAP2000, hands-on experience with IoT sensors for load measurement, and comparative studies of different bridge materials.</p>
              <h4>M.Tech Project Cycle</h4>
              <p>Emphasizes advanced simulation with FEA for seismic and wind load analysis, drone-assisted inspections with AI-based defect detection, and predictive maintenance modeling.</p>
              <h4>Ph.D. Research Cycle</h4>
              <p>Targets innovation in areas like self-healing concrete composites, AI-driven models for real-time failure detection, and quantum-inspired algorithms for ultra-fast structural simulations.</p>
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
              <li><a href="/structural-engineering-mumbai">Structural Engineering</a></li>
              <li><a href="/earthquake-resistant-structures-mumbai">Earthquake Resistant Structures</a></li>
              <li><a href="/geotechnical-engineering-mumbai">Geotechnical Engineering</a></li>
              <li><a href="/construction-management-mumbai">Construction Management</a></li>
              <li><a href="/transportation-engineering-mumbai">Transportation Engineering</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BridgeDesignAndMonitoringMumbai;

