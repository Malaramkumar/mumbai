import React from 'react';
import "./CivilProjectDevelopmentCenter.scss"; // Assuming a common SCSS file

const faqs = [
  {
    question: "What makes Narpavi's Earthquake Resistant Structures center in Mumbai unique?",
    answer: "Our center in Mumbai focuses specifically on the region's unique seismic challenges, including its high-rise density and coastal soil conditions. We provide end-to-end support for B.Tech, M.Tech, and Ph.D. projects, integrating advanced tools like ETABS, SAP2000, and OpenSees with the latest IEEE and IS code standards to ensure real-world applicability."
  },
  {
    question: "Which software and tools are used for seismic analysis projects?",
    answer: "We utilize a comprehensive suite of industry-standard software, including ETABS and SAP2000 for structural analysis and design, ANSYS for detailed finite element modeling, and OpenSees for advanced nonlinear dynamic analysis in earthquake engineering research."
  },
  {
    question: "Are the projects aligned with current industry needs in Mumbai?",
    answer: "Absolutely. Our projects address critical needs for Mumbai's infrastructure, such as seismic retrofitting of existing buildings, performance-based design for new high-rises, and structural health monitoring for bridges and metros, making our students highly sought-after by industry."
  },
  {
    question: "What advanced research topics can Ph.D. scholars pursue?",
    answer: "Ph.D. research focuses on pioneering topics like AI-driven real-time structural health monitoring, developing Digital Twins for seismic resilience, data-driven hazard assessment for Mumbai's coastal areas, and integrating smart damping technologies in flexible high-rise structures."
  },
  {
    question: "How does Narpavi assist with publishing research in high-impact journals?",
    answer: "We offer dedicated guidance throughout the publication process, from selecting a relevant IEEE-aligned topic to structuring the manuscript, performing data analysis, and navigating the peer-review process. Our goal is to help students publish their findings in reputable Scopus/SCI-indexed journals."
  }
];

const EarthquakeResistantStructuresMumbai = () => {
  return (
    <div className="CEProjectDevelopmentCenter no-sidebar"> {/* Added 'no-sidebar' class for styling adjustments */}
      {/* The <Sidebar /> component has been removed */}
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Earthquake Resistant Structures Mumbai</li>
              <li>Seismic Design Projects Mumbai</li>
              <li>B.Tech Earthquake Engineering Projects</li>
              <li>M.Tech Seismic Analysis Research</li>
              <li>Ph.D. Structural Monitoring Mumbai</li>
              <li>Earthquake Retrofitting Projects</li>
              <li>Structural Health Monitoring Mumbai</li>
              <li>Smart Materials for Seismic Control</li>
              <li>Base Isolation Projects Mumbai</li>
              <li>Civil Engineering Research Projects</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Earthquake Resistant Structures – Project Development in Mumbai</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Earthquake Resistant Structures</strong> are fundamental to ensuring the safety and resilience of modern urban environments like Mumbai. At Narpavi Research Institute, our Project Development Center specializes in guiding students to design and analyze seismic-resilient infrastructures. Given Mumbai's classification in a significant seismic zone and its vertical growth, our projects integrate advanced computational tools and adhere to the latest IEEE and IS code standards to address these critical challenges.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-applications">
              <h2>Applications in Mumbai Industries</h2>
              <ul>
                <li><strong>Residential & Commercial High-Rises:</strong> Implementing seismic analysis and ductile detailing for tall buildings.</li>
                <li><strong>Public Infrastructure:</strong> Designing earthquake-resistant bridges, metros, and public spaces with advanced vibration control.</li>
                <li><strong>Industrial Facilities:</strong> Ensuring the structural integrity of critical industrial plants under dynamic seismic loads.</li>
                <li><strong>Smart Urban Infrastructure:</strong> Using IoT sensors for real-time structural health monitoring of key assets.</li>
                <li><strong>Disaster Resilience:</strong> Modeling and enhancing the resilience of coastal infrastructure against seismic events.</li>
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
                      <th>Key Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ETABS & SAP2000</td>
                      <td>Building design & seismic load testing</td>
                      <td>Accurate modeling and performance-based analysis</td>
                    </tr>
                    <tr>
                      <td>ANSYS</td>
                      <td>Finite element seismic simulation</td>
                      <td>Detailed stress-strain and dynamic response study</td>
                    </tr>
                    <tr>
                      <td>OpenSees</td>
                      <td>Earthquake engineering research</td>
                      <td>Advanced nonlinear dynamic analysis</td>
                    </tr>
                    <tr>
                      <td>BIM Integration</td>
                      <td>Structural and architectural synchronization</td>
                      <td>Enhanced visualization and seismic detailing</td>
                    </tr>
                    <tr>
                      <td>IoT Sensors</td>
                      <td>Real-time structural health monitoring</td>
                      <td>Continuous vibration and damage tracking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-cycle">
              <h2>B.Tech, M.Tech, and Ph.D. Project Cycle</h2>
              <h4>B.Tech Project Cycle</h4>
              <p>Focuses on seismic design fundamentals, including designing G+10 buildings in ETABS, learning retrofitting techniques like FRP wrapping, and comparing base isolation systems for typical Mumbai structures.</p>
              <h4>M.Tech Project Cycle</h4>
              <p>Involves advanced topics such as optimizing tall structures with tuned mass dampers, using AI for earthquake damage prediction, and conducting nonlinear dynamic analysis of critical infrastructure like bridge piers.</p>
              <h4>Ph.D. Research Cycle</h4>
              <p>Targets next-generation solutions like developing Digital Twins for predictive seismic modeling, using AI with IoT sensor data for real-time health monitoring, and creating data-driven seismic hazard assessments for Mumbai.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Performance Evaluation of Base Isolated RC Frames under Earthquake Loading – <i>IEEE Access, 2024</i></li>
                <li>AI-Assisted Damage Prediction in RC Frames Using Hybrid Neural Models – <i>IEEE Transactions on Industrial Informatics, 2025</i></li>
                <li>Digital Twin Framework for Seismic Resilience Monitoring in Smart Cities – <i>IEEE Internet of Things Journal, 2024</i></li>
                <li>Seismic Performance Optimization of Tall Structures with Tuned Mass Dampers</li>
                <li>Retrofitting Strategies for Masonry Structures Using Smart Materials</li>
              </ul>
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
              <li><a href="/geotechnical-engineering-mumbai">Geotechnical Engineering</a></li>
              <li><a href="/construction-management-mumbai">Construction Management</a></li>
              <li><a href="/transportation-engineering-mumbai">Transportation Engineering</a></li>
              <li><a href="/smart-city-planning-mumbai">Smart City Planning</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EarthquakeResistantStructuresMumbai;

