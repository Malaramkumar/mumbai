import React from 'react';
import "./CivilProjectDevelopmentCenter.scss"; // Assuming a common SCSS file

const faqs = [
  {
    question: "Why is Construction & Project Management a critical field in Mumbai?",
    answer: "In a city undergoing massive infrastructure development like Mumbai, effective Construction & Project Management is essential to ensure that large-scale projects like the Coastal Road, metro lines, and high-rises are completed on time, within budget, and to the highest quality standards [184]."
  },
  {
    question: "What modern technologies are central to your project management curriculum?",
    answer: "Our curriculum integrates cutting-edge technologies that are transforming the construction industry. This includes Building Information Modeling (BIM) for 3D visualization and clash detection, AI for risk prediction, and project management software like MS Project and Primavera P6 for scheduling and resource allocation [185]."
  },
  {
    question: "What kind of projects can B.Tech and M.Tech students undertake?",
    answer: "B.Tech students work on foundational projects like cost analysis and scheduling for residential buildings using MS Project. M.Tech students tackle more complex challenges, such as developing AI-driven risk prediction models and creating BIM-based collaborative frameworks for smart city infrastructure [187]."
  },
  {
    question: "How do these projects prepare students for the industry in Mumbai?",
    answer: "Our projects are designed in collaboration with industry needs, focusing on real-world challenges faced in Mumbai's construction sector. By gaining hands-on experience with tools like BIM, Primavera, and lean construction methods, students are well-prepared for roles in top construction and project management consultancy firms [186]."
  },
  {
    question: "Is there support for Ph.D. research in advanced construction management?",
    answer: "Yes, we guide Ph.D. scholars in pioneering research areas like developing digital twins for construction sites, creating AI-enabled BIM systems for sustainable projects, and integrating IoT for automated progress tracking. We provide full support for publishing this research in high-impact IEEE and Scopus-indexed journals [188]."
  }
];

const ConstructionProjectManagementMumbai = () => {
  return (
    <div className="CEProjectDevelopmentCenter">
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Construction Project Management</li>
              <li>BIM Civil Engineering Projects</li>
              <li>Lean Construction Techniques</li>
              <li>IEEE Civil Projects Mumbai</li>
              <li>Narpavi Research Institute</li>
              <li>Smart City Infrastructure</li>
              <li>Construction Risk Management</li>
              <li>Digital Twin Construction</li>
              <li>Project Scheduling Optimization</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Construction & Project Management (Mumbai-Based)</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Construction & Project Management</strong> is the driving force behind Mumbai's ambitious infrastructure growth, ensuring that complex projects are delivered efficiently and sustainably. At Narpavi Research Institute, our Mumbai-based center focuses on integrating modern digital tools like BIM, AI-driven analytics, and lean construction principles into our project-based curriculum. We empower B.Tech, M.Tech, and Ph.D. students to master the art and science of managing large-scale civil engineering projects, from skyscrapers to metro systems.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology/Methodology</th>
                      <th>Civil Industry Application</th>
                      <th>Common Tools/Software</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Building Information Modeling (BIM)</td>
                      <td>Real-time project visualization and scheduling</td>
                      <td>Revit, Navisworks [185]</td>
                    </tr>
                    <tr>
                      <td>Lean Construction</td>
                      <td>Waste reduction and process optimization</td>
                      <td>Procore, BIM 360</td>
                    </tr>
                    <tr>
                      <td>AI-based Risk Prediction</td>
                      <td>Cost & safety risk analysis</td>
                      <td>Power BI, MATLAB</td>
                    </tr>
                    <tr>
                      <td>Project Scheduling Tools</td>
                      <td>Construction timeline management</td>
                      <td>MS Project, Primavera P6 [187]</td>
                    </tr>
                    <tr>
                      <td>Drones & Remote Monitoring</td>
                      <td>Site inspection and progress tracking</td>
                      <td>DroneDeploy, Autodesk Docs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-cycle">
              <h2>B.Tech, M.Tech, and Ph.D. Project Cycles</h2>
              <h4>B.Tech Project Cycle</h4>
              <p>Focuses on the fundamentals of project planning, scheduling, and resource management. Students learn to use essential tools like MS Project and AutoCAD to develop project plans, conduct cost analysis, and apply basic lean construction methods.</p>
              <h4>M.Tech Project Cycle</h4>
              <p>Emphasizes data-driven decision-making and advanced project controls. Scholars use BIM and Primavera for complex workflow modeling, perform predictive risk analysis, and optimize construction processes using real-world project data from Mumbai.</p>
              <h4>Ph.D. Research Cycle</h4>
              <p>Targets the development of intelligent and automated construction management systems. Research areas include creating integrated frameworks combining BIM, IoT, and AI, and developing digital twins for lifecycle optimization of infrastructure projects.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>“AI-Based Resource Optimization Framework for Construction Projects (2023)”</li>
                <li>“IoT-Enabled Project Monitoring System for Urban Construction (2024)”</li>
                <li>“Digital Twin Integration for Smart Construction Management (2025)”</li>
                <li>“Data-Driven Cost Control and Scheduling Optimization (2024)”</li>
                <li>“Risk Analysis and Prediction using Machine Learning in Civil Project Management (2025)”</li>
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
              <li><a href="/transportation-engineering-mumbai">Transportation Engineering</a></li>
              <li><a href="/smart-city-planning-mumbai">Smart City Planning</a></li>
              <li><a href="/geotechnical-engineering-mumbai">Geotechnical Engineering</a></li>
              <li><a href="/environmental-engineering-mumbai">Environmental Engineering</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ConstructionProjectManagementMumbai;

