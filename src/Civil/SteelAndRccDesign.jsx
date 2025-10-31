import React from 'react';
import "./CivilProjectDevelopmentCenter.scss"; // Assuming a common SCSS file

const faqs = [
  {
    question: "What kind of support does Narpavi offer for Steel and RCC Design Optimization projects in Mumbai?",
    answer: "Narpavi Research Institute provides comprehensive guidance for B.Tech, M.Tech, and Ph.D. students in Mumbai. We support every project stage, from initial design in STAAD.Pro and ETABS to advanced FEA simulation in ANSYS, culminating in publication support for IEEE, Scopus, and SCI-indexed journals."
  },
  {
    question: "Which software tools are central to these design optimization projects?",
    answer: "Our projects are built around industry-standard software, including ETABS for high-rise buildings, STAAD.Pro for general frame analysis, SAP2000 for complex structures like bridges, and ANSYS or Abaqus for detailed finite element analysis (FEA) of structural components."
  },
  {
    question: "How are the projects relevant to Mumbai's construction industry?",
    answer: "The projects directly address the needs of Mumbai’s booming infrastructure sector. They focus on cost optimization for high-rise residential towers, efficient design for metro viaducts and flyovers, and sustainable construction practices, making our students highly valuable to local and national firms."
  },
  {
    question: "What are some advanced topics covered in M.Tech and Ph.D. research?",
    answer: "M.Tech and Ph.D. scholars delve into cutting-edge areas such as multi-objective optimization using genetic algorithms, AI-based predictive modeling for structural design, the use of sustainable and green materials in RCC, and developing smart structures with IoT-based health monitoring."
  },
  {
    question: "Does Narpavi help with publishing research papers?",
    answer: "Yes, a core part of our program is dedicated to academic publication. We guide students through the entire process, from structuring the research and analyzing data to preparing the manuscript for submission to high-impact journals, ensuring their work gains academic recognition."
  }
];

const SteelAndRccDesignOptimizationMumbai = () => {
  return (
    <div className="CEProjectDevelopmentCenter">
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Steel and RCC Design Optimization Projects</li>
              <li>RCC Design Projects Mumbai</li>
              <li>Steel Structure Projects Mumbai</li>
              <li>Structural Optimization Projects</li>
              <li>M.Tech Structural Engineering Projects</li>
              <li>B.Tech Civil Projects Mumbai</li>
              <li>Ph.D. Structural Design Research</li>
              <li>Narpavi Research Institute Civil Projects</li>
              <li>ETABS STAAD.Pro Projects</li>
              <li>Sustainable Structural Design</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Steel and RCC Design Optimization Projects in Mumbai</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                In Mumbai's dynamic urban landscape, <strong>Steel and RCC Design Optimization</strong> is crucial for creating efficient, sustainable, and resilient infrastructure. At Narpavi Research Institute, our project development center focuses on integrating advanced computational tools and material science to address the unique challenges of high-rise construction, metro systems, and coastal structures in Mumbai. We guide B.Tech, M.Tech, and Ph.D. scholars in developing innovative, IEEE-aligned projects that set new benchmarks in structural engineering.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-applications">
              <h2>Applications in Mumbai Industries</h2>
              <ul>
                <li><strong>Infrastructure Projects:</strong> Designing optimized steel and RCC combinations for metro viaducts, bridges, and flyovers.</li>
                <li><strong>Commercial & Residential High-Rises:</strong> Optimizing RCC frame designs for cost-effectiveness and sustainability.</li>
                <li><strong>Industrial Facilities:</strong> Enhancing steel truss designs for warehouses, plants, and shipyards.</li>
                <li><strong>Coastal Structures:</strong> Implementing corrosion-resistant reinforcement in marine environments.</li>
                <li><strong>Redevelopment Projects:</strong> Creating lightweight and efficient designs for replacing older structures.</li>
              </ul>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Domain</th>
                      <th>Industrial Applications in Mumbai</th>
                      <th>Software / Tools Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>RCC Frame Design Optimization</td>
                      <td>Residential and commercial buildings</td>
                      <td>STAAD.Pro, ETABS, AutoCAD</td>
                    </tr>
                    <tr>
                      <td>Steel Structure Optimization</td>
                      <td>Metro bridges, warehouses, ports</td>
                      <td>ANSYS, Tekla Structures</td>
                    </tr>
                    <tr>
                      <td>Hybrid Steel–Concrete Systems</td>
                      <td>High-rise towers and corporate buildings</td>
                      <td>SAP2000, Revit</td>
                    </tr>
                    <tr>
                      <td>Sustainable Structural Design</td>
                      <td>Eco-friendly and smart city projects</td>
                      <td>MATLAB, COMSOL</td>
                    </tr>
                    <tr>
                      <td>Finite Element Analysis (FEA)</td>
                      <td>Structural stress-strain analysis</td>
                      <td>ANSYS, Abaqus</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-cycle">
              <h2>Project Development Cycles</h2>
              <h4>B.Tech Project Cycle – Fundamentals of Design Optimization</h4>
              <p>Students learn to apply IS codes (IS 456, IS 800) to design and analyze RCC/steel frames in STAAD.Pro and ETABS, focusing on load analysis, deflection, and cost-performance comparisons.</p>
              <h4>M.Tech Project Cycle – Advanced Computational Design</h4>
              <p>Scholars use optimization algorithms for complex structures like bridges and towers, compare composite systems, and analyze the environmental impact of materials, preparing their findings for journal publication.</p>
              <h4>Ph.D. Project Cycle – Intelligent and Sustainable Systems</h4>
              <p>Research focuses on multi-objective optimization, AI-based algorithms for design prediction, real-time monitoring with IoT sensors, and integrating FEA with machine learning models for patentable outcomes.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>“Comparative Study of RCC and Steel Design Optimization using ETABS”</li>
                <li>“AI-Assisted Multi-Objective Structural Optimization for High-Rise Buildings”</li>
                <li>“Cost-Efficient Beam Design through Finite Element Analysis in ANSYS”</li>
                <li>“Optimization of Structural Sections using Genetic Algorithms”</li>
                <li>“Green RCC: Sustainable Concrete Mix Design for Urban High-Rises”</li>
                <li>“Load and Stress Monitoring through IoT-Enabled Smart Structures”</li>
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

export default SteelAndRccDesignOptimizationMumbai;
