import React from 'react';
import "./CivilProjectDevelopmentCenter.scss"; // Assuming a common SCSS file

const faqs = [
  {
    question: "Why are Smart Traffic Management Systems crucial for Mumbai?",
    answer: "Smart Traffic Management Systems (STMS) are crucial for Mumbai to combat its severe traffic congestion, reduce travel times, and improve road safety. By integrating AI, IoT, and real-time data analytics, these systems optimize traffic flow on the city's dense road networks, aligning with its Smart City mission [149]."
  },
  {
    question: "What real-world STMS implementations are happening in and around Mumbai?",
    answer: "Authorities are actively deploying Intelligent Traffic Management Systems (ITMS) on major arteries like the Mumbai-Pune Expressway and Samruddhi Mahamarg. These systems use AI-powered cameras to detect violations like speeding and lane cutting, automatically issuing e-challans to improve driver discipline and reduce accidents [147][148]."
  },
  {
    question: "What technologies are covered in Narpavi's STMS projects?",
    answer: "Our projects cover a wide range of modern technologies, including IoT sensors for real-time data collection, machine learning for predictive traffic flow analysis, computer vision for vehicle detection, and cloud computing for centralized data management and control [152]."
  },
  {
    question: "What kind of projects can B.Tech and M.Tech students undertake?",
    answer: "B.Tech students can work on foundational projects like Arduino-based smart signals or IoT traffic density monitors. M.Tech students can tackle more advanced topics, such as developing AI-based traffic prediction models or designing intelligent parking allocation systems for suburban areas."
  },
  {
    question: "How does Narpavi support Ph.D. research in this domain?",
    answer: "For Ph.D. scholars, we support cutting-edge research in areas like developing city-wide AI-IoT traffic management architectures, creating cloud-based decision support systems for urban mobility, and designing multi-objective optimization models for smart traffic policies, with full guidance for publication in top IEEE journals."
  }
];

const SmartTrafficManagementMumbai = () => {
  return (
    <div className="CEProjectDevelopmentCenter">
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Smart Traffic Management Mumbai</li>
              <li>Intelligent Transportation Projects</li>
              <li>Civil Engineering Research Mumbai</li>
              <li>IoT in Traffic Systems</li>
              <li>AI Traffic Prediction Projects</li>
              <li>IEEE Transportation Papers</li>
              <li>Narpavi Research Institute</li>
              <li>Urban Mobility Optimization</li>
              <li>Smart City Civil Projects</li>
              <li>Traffic Flow Analysis</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Smart Traffic Management Systems (Mumbai-Based Civil Engineering)</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Smart Traffic Management Systems (STMS)</strong> are transforming urban mobility in Mumbai, a city renowned for its high traffic density. By integrating IoT, AI, and real-time data analytics, STMS offers innovative solutions to minimize congestion, enhance safety, and promote sustainable transport. At Narpavi Research Institute, we guide students in developing IEEE-aligned projects that design, simulate, and implement these next-generation systems, directly contributing to Mumbai's Smart City goals.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology/Concept</th>
                      <th>Real-World Industry Application</th>
                      <th>Mumbai-Specific Implementation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IoT Sensors & Edge Devices</td>
                      <td>Real-time traffic monitoring</td>
                      <td>Deployed at Mumbai’s major intersections [149]</td>
                    </tr>
                    <tr>
                      <td>Machine Learning Algorithms</td>
                      <td>Predictive traffic flow analytics</td>
                      <td>Integrated with BMC smart road projects</td>
                    </tr>
                    <tr>
                      <td>Computer Vision</td>
                      <td>Vehicle and pedestrian detection</td>
                      <td>CCTV & drone-based monitoring systems [148]</td>
                    </tr>
                    <tr>
                      <td>Intelligent Transport Systems (ITS)</td>
                      <td>Urban mobility optimization</td>
                      <td>Integrated with MMRDA initiatives [153]</td>
                    </tr>
                    <tr>
                      <td>Cloud Computing</td>
                      <td>Centralized traffic data storage</td>
                      <td>Unified control under Smart City Mission</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-cycle">
              <h2>B.Tech, M.Tech, and Ph.D. Project Cycles</h2>
              <h4>B.Tech Project Cycle</h4>
              <p>Focuses on the fundamentals of smart systems. Projects include creating Arduino-based smart signals, IoT-enabled traffic density monitors, and using Raspberry Pi for image processing-based traffic light automation.</p>
              <h4>M.Tech Project Cycle</h4>
              <p>Emphasizes advanced algorithms and system integration. Projects include AI-based traffic flow prediction using deep learning, designing intelligent parking systems, and developing hybrid optimization models for public transport.</p>
              <h4>Ph.D. Project Cycle</h4>
              <p>Targets innovative, multi-parameter intelligent control systems. Research topics include developing comprehensive AI-IoT architectures for metro cities, creating cloud-based decision support systems, and designing multi-objective optimization models for traffic policy.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Real-Time Vehicle Density Estimation using CNN and IoT Frameworks (2023)</li>
                <li>Adaptive Traffic Signal Optimization through Reinforcement Learning (2024)</li>
                <li>Drone-Assisted Intelligent Traffic Flow Analytics in Mumbai (2025)</li>
                <li>Big Data-Based Smart Mobility Management System for Urban Areas (2023)</li>
                <li>Edge-Computing Driven Smart Intersection Control Using AI (2024)</li>
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
              <li><a href="/transportation-engineering-mumbai">Transportation Engineering</a></li>
              <li><a href="/smart-city-planning-mumbai">Smart City Planning</a></li>
              <li><a href="/construction-management-mumbai">Construction Management</a></li>
              <li><a href="/geotechnical-engineering-mumbai">Geotechnical Engineering</a></li>
              <li><a href="/structural-engineering-mumbai">Structural Engineering</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SmartTrafficManagementMumbai;
