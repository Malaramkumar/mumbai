import React from 'react';
import "./CivilProjectDevelopmentCenter.scss"; // Assuming a common SCSS file

const faqs = [
  {
    question: "Why is Geotechnical Engineering so important for projects in Mumbai?",
    answer: "Geotechnical engineering is critical in Mumbai due to its diverse soil profiles, extensive coastal areas, and high density of high-rise structures. Proper geotechnical investigation ensures the stability and safety of foundations for everything from skyscrapers to underground metro tunnels, which is a key focus of our projects [118]."
  },
  {
    question: "What software and tools are used for Geotechnical Engineering projects at Narpavi?",
    answer: "We use a range of industry-standard software, including PLAXIS and GeoStudio for finite element analysis of soil behavior, as well as MATLAB for custom modeling. For practical work, we utilize field testing equipment and advanced lab facilities for soil sample analysis."
  },
  {
    question: "How do these projects align with Mumbai's current infrastructure needs?",
    answer: "Our projects are directly aligned with Mumbai's ongoing development, focusing on foundation design for high-rises, soil stabilization for coastal and reclaimed land, and subsurface analysis for major projects like the Mumbai Metro. This ensures our students' work has immediate real-world relevance [116]."
  },
  {
    question: "What are some advanced research areas for M.Tech and Ph.D. scholars?",
    answer: "M.Tech and Ph.D. research delves into innovative topics such as AI-based predictive modeling for soil settlement, the development of smart geosynthetics with embedded sensors, advanced soil-structure interaction analysis for coastal environments, and sustainable soil stabilization methods."
  },
  {
    question: "Is there support for publishing my geotechnical research?",
    answer: "Yes, Narpavi provides comprehensive support for publishing in high-impact journals. Our mentorship covers the entire process, from defining an IEEE-aligned research topic and conducting analysis to preparing the manuscript for submission to prestigious Scopus and SCI-indexed publications."
  }
];

const GeotechnicalEngineeringMumbai = () => {
  return (
    <div className="CEProjectDevelopmentCenter">
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>geotechnical engineering Mumbai</li>
              <li>soil testing projects Mumbai</li>
              <li>foundation design projects</li>
              <li>pile load analysis Mumbai</li>
              <li>geosynthetics civil projects</li>
              <li>B.Tech geotechnical projects</li>
              <li>M.Tech foundation optimization</li>
              <li>Ph.D. soil behavior research</li>
              <li>Narpavi Research Institute</li>
              <li>smart city soil monitoring</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Geotechnical Engineering – Mumbai-Based Civil Engineering Projects</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Geotechnical Engineering</strong> is the foundational discipline of civil engineering that studies the behavior of earth materials. In a city like Mumbai, characterized by its coastal location, variable soil conditions, and dense high-rise development, geotechnical expertise is indispensable. At Narpavi Research Institute, our Mumbai-based project center guides B.Tech, M.Tech, and Ph.D. students through IEEE-aligned projects in soil mechanics, foundation analysis, and ground improvement techniques.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-applications">
              <h2>Applications in Mumbai Industries</h2>
              <ul>
                <li><strong>High-Rise Buildings:</strong> Designing stable foundations for skyscrapers on challenging soil profiles.</li>
                <li><strong>Metro & Underground Construction:</strong> Ensuring safe tunneling and soil stabilization for subterranean transport networks.</li>
                <li><strong>Coastal & Marine Infrastructure:</strong> Analyzing seabed conditions and designing robust pile foundations for ports and coastal defenses.</li>
                <li><strong>Industrial Facilities:</strong> Assessing load-bearing capacity and ground improvement for heavy industrial plants.</li>
                <li><strong>Smart City Projects:</strong> Integrating geotechnical sensors for real-time monitoring of soil and foundation performance.</li>
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
                      <td>Geotechnical FEA (PLAXIS, GeoStudio)</td>
                      <td>High-rise foundations, underground tunnels</td>
                      <td>Accurate stress-strain simulation</td>
                    </tr>
                    <tr>
                      <td>Soil Stabilization Techniques</td>
                      <td>Industrial zones, reclaimed land</td>
                      <td>Enhanced load-bearing capacity</td>
                    </tr>
                    <tr>
                      <td>Pile Load Testing & Analysis</td>
                      <td>Bridges, ports, heavy structures</td>
                      <td>Ensures structural integrity and safety</td>
                    </tr>
                    <tr>
                      <td>Ground Penetrating Radar (GPR)</td>
                      <td>Urban tunneling and utility mapping</td>
                      <td>Non-invasive subsurface investigation</td>
                    </tr>
                    <tr>
                      <td>Instrumented Monitoring Systems</td>
                      <td>Foundations, retaining walls</td>
                      <td>Real-time data on soil behavior</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-cycle">
              <h2>B.Tech, M.Tech, and Ph.D. Project Cycles</h2>
              <h4>B.Tech Project Cycle</h4>
              <p>Focuses on fundamental skills through laboratory testing of soil properties, modeling shallow and deep foundations using software like PLAXIS, and conducting experimental studies on soil reinforcement.</p>
              <h4>M.Tech Project Cycle</h4>
              <p>Emphasizes advanced computational modeling, including FEA simulations of tunnels, AI-based prediction of soil behavior under dynamic loads, and designing optimized pile foundations for urban projects.</p>
              <h4>Ph.D. Research Cycle</h4>
              <p>Targets groundbreaking research such as developing smart geosynthetics with embedded sensors, creating machine learning models for liquefaction analysis, and investigating sustainable soil stabilization methods using industrial by-products.</p>
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
              <li><a href="/construction-management-mumbai">Construction Management</a></li>
              <li><a href="/transportation-engineering-mumbai">Transportation Engineering</a></li>
              <li><a href="/water-resources-engineering-mumbai">Water Resources Engineering</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default GeotechnicalEngineeringMumbai;

