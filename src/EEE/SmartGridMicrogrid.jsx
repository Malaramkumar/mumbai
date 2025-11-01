import React from "react";
import "./EEEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which simulation tools are used for Smart Grid & Microgrid projects in Mumbai?",
    answer:
      "MATLAB Simulink, PSCAD, ETAP, and SCADA‑based environments are primarily used for modeling energy distribution, testing load flow, and designing automated control frameworks."
  },
  {
    question: "Are projects aligned with IEEE Smart Grid standards?",
    answer:
      "Yes—projects follow IEEE 1547, IEEE 2030, and IEEE 1459 standards for distributed energy resource interconnection, interoperability modeling, and power measurement analysis."
  },
  {
    question: "What real‑world collaborations support the initiative?",
    answer:
      "Collaborations with Adani Electricity Mumbai Limited (AEML), Tata Power R&D, IIT Bombay, and BMC Smart Energy initiatives facilitate industrial validation, data acquisition, and technical mentoring."
  },
  {
    question: "What deliverables are expected for students at each academic level?",
    answer:
      "B.Tech: MATLAB/ETAP‑based prototype microgrid simulation; M.Tech: hybrid grid design with AI‑based forecasting model; Ph.D.: predictive control algorithms, publications, and IEEE Transactions submissions."
  },
  {
    question: "Can students access real‑time monitoring tools for projects?",
    answer:
      "Yes—students work on SCADA‑integrated monitoring frameworks, IoT‑based smart metering modules, and renewable energy network data provided by Mumbai smart utility partners."
  }
];

// Optional: reusable JSON-LD component
const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    // must be a string
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const SmartGridMicrogridMumbai = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
    }))
  };

  return (
    <div className="EEEProjectDevelopmentCenter">
      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          {/* Left Column – Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Smart Grid & Microgrid for Mumbai</li>
              <li>Smart Grid Projects in Mumbai</li>
              <li>IEEE Smart Grid Projects 2025</li>
              <li>Microgrid Simulation Using MATLAB</li>
              <li>Mumbai Power Distribution Research</li>
              <li>Narpavi Research Institute Smart Grid Support</li>
              <li>Tata Power Microgrid Projects</li>
              <li>Adani Electricity Smart Energy Systems</li>
              <li>Urban Microgrid Development Mumbai</li>
              <li>AI‑Based Load Forecasting for Mumbai</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Smart Grid & Microgrid for Mumbai – Project Development Center</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — The Smart Grid & Microgrid for Mumbai initiative represents a transformative leap in modernizing India’s coastal urban power systems. Focusing on distributed generation, rooftop solar integration, and battery energy storage systems, the domain enhances grid reliability—especially under monsoon‑induced challenges.
              </p>
              <p>
                This research domain supports digital energy management, adaptive grid balancing, and renewable energy penetration tailored to Mumbai’s large‑scale industrial and residential developments. It aligns with the R&D mandates of Adani Electricity Mumbai Limited (AEML), Tata Power, and the Brihanmumbai Municipal Corporation (BMC) Smart Energy Division.
              </p>
              <p>
                Engineers and researchers employ MATLAB Simulink, PSCAD, ETAP, and SCADA monitoring systems to model next‑generation smart grids capable of self‑healing, renewable coordination, and dynamic power flow optimization.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-ecosystem">
              <h2>IEEE Alignment</h2>
              <p>
                The Smart Grid & Microgrid for Mumbai research framework complies with major IEEE standards including IEEE 1547 (Distributed Energy Resource Interconnection), IEEE 2030 (Smart Grid Interoperability Reference Model), and IEEE 1459 (Power Measurement and Analysis). Projects are developed under guidelines of IEEE PES, IEEE Smart Grid Technologies, and IEEE ICPS, ensuring global research visibility.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Focus</th>
                      <th>Industry/Institution</th>
                      <th>Application in Mumbai</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Smart Grid Automation</td>
                      <td>Adani Electricity Mumbai Ltd (AEML)</td>
                      <td>Fault‑tolerant automation and grid load balancing</td>
                    </tr>
                    <tr>
                      <td>Microgrid Integration</td>
                      <td>Tata Power R&D Division</td>
                      <td>Distributed solar + battery network management</td>
                    </tr>
                    <tr>
                      <td>IoT‑Enabled Monitoring</td>
                      <td>BMC Smart Energy Program</td>
                      <td>Energy data collection and real‑time fault detection</td>
                    </tr>
                    <tr>
                      <td>AI‑Based Load Forecasting</td>
                      <td>IIT Bombay, Narpavi Research Institute</td>
                      <td>Predictive control and dynamic energy optimization</td>
                    </tr>
                    <tr>
                      <td>Hybrid Renewable Systems</td>
                      <td>Mumbai Housing Societies & Developers</td>
                      <td>Rooftop solar and battery integration for apartments</td>
                    </tr>
                    <tr>
                      <td>Resilience Modelling</td>
                      <td>IIT Bombay – Energy Science Department</td>
                      <td>Monsoon‑resilient control algorithm development</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The comparative table links R&D focus areas directly with Mumbai’s industrial stakeholders actively deploying smart grid technologies.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-cycle">
              <h2>B.Tech Project Development Cycle</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Stage</th>
                      <th>Description</th>
                      <th>Tools/Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. Problem Definition</td>
                      <td>Identify gaps in Mumbai’s local energy distribution systems.</td>
                      <td>Data acquisition, MATLAB Power Toolbox</td>
                    </tr>
                    <tr>
                      <td>2. Design & Modelling</td>
                      <td>Develop rooftop solar + battery microgrid prototype.</td>
                      <td>PSCAD, ETAP</td>
                    </tr>
                    <tr>
                      <td>3. Simulation</td>
                      <td>Conduct load flow and voltage stability analysis.</td>
                      <td>MATLAB Simulink</td>
                    </tr>
                    <tr>
                      <td>4. Control Implementation</td>
                      <td>Implement smart switching and automated fault recovery.</td>
                      <td>SCADA Integration, Microcontroller Logic</td>
                    </tr>
                    <tr>
                      <td>5. Documentation</td>
                      <td>Prepare IEEE‑format technical report and presentation.</td>
                      <td>LaTeX, IEEE Templates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Outcome: functional prototype demonstrating adaptive grid stability enhancement.</p>

              <h2>M.Tech Project Development Cycle</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Stage</th>
                      <th>Research Objective</th>
                      <th>Tools & Techniques</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. Literature Review</td>
                      <td>Analyze IEEE & Elsevier papers on microgrid resilience.</td>
                      <td>IEEE Xplore, Scopus</td>
                    </tr>
                    <tr>
                      <td>2. System Design</td>
                      <td>Develop hybrid AC/DC microgrid architecture.</td>
                      <td>MATLAB, ETAP</td>
                    </tr>
                    <tr>
                      <td>3. Optimization</td>
                      <td>Implement machine-learning‑driven load forecasting models.</td>
                      <td>Python, Simulink</td>
                    </tr>
                    <tr>
                      <td>4. Testing & Validation</td>
                      <td>Evaluate grid operation reliability under monsoon conditions.</td>
                      <td>Hardware‑in‑Loop Testing</td>
                    </tr>
                    <tr>
                      <td>5. Publication</td>
                      <td>Submit findings to IEEE Smart Grid and PES conferences.</td>
                      <td>Narpavi Research Institute Publication Support</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Outcome: validated hybrid grid supported by AI‑empowered forecasting and communication frameworks.</p>

              <h2>Ph.D. Research Development Cycle</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Phase</th>
                      <th>Focus Area</th>
                      <th>Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. Research Framing</td>
                      <td>Develop AI‑based energy optimization for distributed grids.</td>
                      <td>Predictive Modeling</td>
                    </tr>
                    <tr>
                      <td>2. Data Acquisition</td>
                      <td>Integrate SCADA, IoT network data from BMC sensors.</td>
                      <td>Edge Computing, Data Fusion</td>
                    </tr>
                    <tr>
                      <td>3. Model Implementation</td>
                      <td>Apply hybrid neural‑fuzzy algorithms for real‑time balancing.</td>
                      <td>MATLAB, Python</td>
                    </tr>
                    <tr>
                      <td>4. Simulation & Validation</td>
                      <td>Monitor grid fault recovery and adaptive control testing.</td>
                      <td>ETAP, PSCAD</td>
                    </tr>
                    <tr>
                      <td>5. Research Dissemination</td>
                      <td>Publish in IEEE Transactions on Smart Grid & IET Renewable Power.</td>
                      <td>International Recognition, Industrial Tech Transfer</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Adaptive Smart Grid Control for Mumbai’s Coastal Power Distribution</li>
                <li>Design & Simulation of Rooftop Solar + Battery Microgrid for Apartments</li>
                <li>AI‑Based Load Forecasting for Mumbai Urban Grids</li>
                <li>Resilient Smart Grid Architecture for Monsoon‑Prone Regions</li>
                <li>IoT‑Enabled Smart Metering and Demand Response in Mumbai Localities</li>
                <li>Fault Detection & Restoration in Urban Microgrids</li>
                <li>Energy Management System for Hybrid Renewable Grids</li>
                <li>Multi‑Agent Distributed Control for Mumbai Smart Grids</li>
                <li>SCADA‑Integrated Microgrid Simulation for Local Power Resilience</li>
                <li>AI‑Driven Load Balancing and Fault Prediction in Smart Networks</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-conclusion">
              <h2>Role of Narpavi Research Institute</h2>
              <p>
                The Narpavi Research Institute provides end‑to‑end academic and industrial project support for Smart Grid & Microgrid for Mumbai. Its expert R&D team guides students through MATLAB‑based modeling, control optimization, and IEEE publication workflows. Strategic collaborations with IIT Bombay, Tata Power, and AEML enable real‑time data access, laboratory testing, and publication assistance, ensuring that every student contributes to sustainable and intelligent energy innovation in India’s financial capital.
              </p>
            </section>

            <section className="kerala-alluniversityfaq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="kerala-faq-items">
                {faqs.map((f) => (
                  <details key={f.question}>
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
                  </details>
                ))}
              </div>

              {/* JSON-LD FAQ Schema */}
              <JsonLd data={faqSchema} />
            </section>
          </div>

          {/* Right Column – Related Fields */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related EEE Fields</h3>
            <ul>
              <li><a href="/renewable-energy-mumbai">Renewable Energy Systems</a></li>
              <li><a href="/power-systems-mumbai">Power System Optimization</a></li>
              <li><a href="/distributed-generation-mumbai">Distributed Generation</a></li>
              <li><a href="/smart-grid-communication-mumbai">Smart Grid Communication</a></li>
              <li><a href="/energy-management-mumbai">Energy Management Systems</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartGridMicrogridMumbai;

