import React from 'react';
import "./CivilProjectDevelopmentCenter.scss"; // Assuming a common SCSS file for Civil centers

const faqs = [
  {
    question: "What kind of support does Narpavi offer for Structural Engineering projects in Mumbai?",
    answer: "Narpavi Research Institute provides comprehensive guidance for B.Tech, M.Tech, and Ph.D. students in Mumbai. We support every stage, from topic selection aligned with IEEE standards (2023–2025) to advanced analysis using ETABS, SAP2000, and ANSYS, and finally, assistance with publishing in Scopus/SCI-indexed journals."
  },
  {
    question: "Which software tools are used for the projects?",
    answer: "Our projects utilize a suite of industry-standard software essential for modern structural analysis, including ETABS for high-rise buildings, SAP2000 for bridges, STAAD.Pro for general structures, and ANSYS for detailed finite element analysis (FEA)."
  },
  {
    question: "How are the projects relevant to Mumbai's infrastructure challenges?",
    answer: "Projects are specifically designed to address Mumbai's unique structural challenges, such as seismic analysis for high-rise buildings, durability assessment for coastal bridges and flyovers, and retrofitting strategies for aging urban infrastructure. This ensures all project work has direct, real-world applicability."
  },
  {
    question: "What advanced topics are covered in M.Tech and Ph.D. projects?",
    answer: "M.Tech and Ph.D. scholars explore cutting-edge topics, including nonlinear seismic analysis, AI-integrated structural health monitoring, the application of smart materials for retrofitting, and the development of digital twins for predictive maintenance of urban infrastructure."
  },
  {
    question: "Can I get help with publishing my structural engineering research?",
    answer: "Yes, we offer dedicated support for academic publications. Our team guides you through manuscript preparation, data analysis, and journal selection to help you publish your research in high-impact IEEE, Scopus, or SCI-indexed journals."
  }
];

const StructuralEngineeringMumbai = () => {
  return (
    <div className="CEProjectDevelopmentCenter"> {/* Assuming a Civil Engineering class name */}
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Structural Engineering Mumbai</li>
              <li>B.Tech Structural Projects Mumbai</li>
              <li>M.Tech Structural Engineering Research</li>
              <li>Ph.D. Structural Analysis Mumbai</li>
              <li>High-Rise Structural Design Projects</li>
              <li>Bridge Design & Monitoring Mumbai</li>
              <li>Reinforced Concrete Design Projects</li>
              <li>Seismic Analysis Projects Mumbai</li>
              <li>FEA Structural Projects</li>
              <li>Civil Engineering Research Mumbai</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Structural Engineering – Project Development in Mumbai</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Structural Engineering</strong> is the backbone of urban development, ensuring the safety and resilience of buildings, bridges, and infrastructure. At Narpavi Research Institute in Mumbai, we empower B.Tech, M.Tech, and Ph.D. scholars to create innovative, IEEE-aligned structural solutions. Our projects integrate advanced analysis, high-strength materials, and computational tools like ETABS, SAP2000, and ANSYS, providing hands-on experience to tackle Mumbai's unique infrastructure challenges.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-applications">
              <h2>Applications of Structural Engineering in Mumbai</h2>
              <ul>
                <li><strong>High-Rise Buildings:</strong> Seismic design and load optimization for Mumbai’s skyline.</li>
                <li><strong>Bridges & Flyovers:</strong> Structural health monitoring and fatigue analysis for critical transport links.</li>
                <li><strong>Industrial Structures:</strong> Ensuring the stability of factories and power plants.</li>
                <li><strong>Water Tanks & Reservoirs:</strong> Designing structures to withstand variable loads and environmental stress.</li>
                <li><strong>Infrastructure Renovation:</strong> Developing retrofitting techniques to strengthen existing urban structures.</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology / Tool</th>
                      <th>Mumbai Industry Applications</th>
                      <th>Key Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ETABS</td>
                      <td>High-rise buildings, commercial complexes</td>
                      <td>Efficient structural modeling and analysis</td>
                    </tr>
                    <tr>
                      <td>SAP2000</td>
                      <td>Bridges, flyovers, industrial structures</td>
                      <td>Advanced dynamic and static load analysis</td>
                    </tr>
                    <tr>
                      <td>STAAD.Pro</td>
                      <td>Residential and industrial constructions</td>
                      <td>Comprehensive analysis with optimization</td>
                    </tr>
                    <tr>
                      <td>ANSYS</td>
                      <td>Material testing, stress simulations</td>
                      <td>High-accuracy finite element analysis</td>
                    </tr>
                    <tr>
                      <td>BIM</td>
                      <td>Large-scale infrastructure projects</td>
                      <td>Enhanced collaboration and cost estimation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-cycle">
              <h2>Project Development Cycle</h2>
              <h4>B.Tech Project Cycle</h4>
              <p>Focuses on core skills through projects like designing residential buildings, performing seismic analysis, and conducting FEA on beams, using tools like ETABS and STAAD.Pro.</p>
              <h4>M.Tech Project Cycle</h4>
              <p>Emphasizes advanced topics such as nonlinear seismic analysis of tall buildings, IoT-based bridge monitoring, and using smart composite materials, with tools like ABAQUS and ANSYS.</p>
              <h4>Ph.D. Research Cycle</h4>
              <p>Targets innovative research including AI-integrated structural health monitoring, seismic resilience modeling for coastal infrastructure, and digital twin implementation for predictive maintenance.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Seismic Performance Assessment of Reinforced Concrete Buildings in Urban India – <i>IEEE Access, 2024</i></li>
                <li>Performance-Based Seismic Design of Tall Buildings Using Advanced FEM – <i>IEEE Transactions on Engineering, 2023</i></li>
                <li>AI-Based Structural Health Monitoring for Urban High-Rise Buildings – <i>IEEE Transactions on Industrial Informatics, 2025</i></li>
                <li>Structural Optimization of High-Rise Buildings Under Dynamic Loading</li>
                <li>IoT-Based Health Monitoring of Bridges for Long-Term Durability</li>
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
              <li><a href="/geotechnical-engineering-mumbai">Geotechnical Engineering</a></li>
              <li><a href="/transportation-engineering-mumbai">Transportation Engineering</a></li>
              <li><a href="/environmental-engineering-mumbai">Environmental Engineering</a></li>
              <li><a href="/construction-management-mumbai">Construction Management</a></li>
              <li><a href="/water-resources-engineering-mumbai">Water Resources Engineering</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default StructuralEngineeringMumbai;
