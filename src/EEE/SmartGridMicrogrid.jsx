import React from "react";
import "./EEEProjectDevelopmentCenter.scss";
import SEO from ".././assets/SEO";
import LeftSidebar from "../LeftSidebar";

const faqs = [
  {
    question: "Which simulation tools are used for Smart Grid & Microgrid projects in Mumbai?",
    answer:
      "MATLAB Simulink, PSCAD, ETAP, and SCADA-based environments are primarily used for modeling energy distribution, testing load flow, and designing automated control frameworks."
  },
  {
    question: "Are projects aligned with IEEE Smart Grid standards?",
    answer:
      "Yes—projects follow IEEE 1547, IEEE 2030, and IEEE 1459 standards for distributed energy resource interconnection, interoperability modeling, and power measurement analysis."
  },
  {
    question: "What real-world collaborations support the initiative?",
    answer:
      "Collaborations with Adani Electricity Mumbai Limited (AEML), Tata Power R&D, IIT Bombay, and BMC Smart Energy initiatives facilitate industrial validation, data acquisition, and technical mentoring."
  },
  {
    question: "What deliverables are expected for students at each academic level?",
    answer:
      "B.Tech: MATLAB/ETAP-based prototype microgrid simulation; M.Tech: hybrid grid design with AI-based forecasting model; Ph.D.: predictive control algorithms, publications, and IEEE Transactions submissions."
  },
  {
    question: "Can students access real-time monitoring tools for projects?",
    answer:
      "Yes—students work on SCADA-integrated monitoring frameworks, IoT-based smart metering modules, and renewable energy network data provided by Mumbai smart utility partners."
  }
];

const keywords = [
  "Smart Grid Projects Mumbai",
  "Microgrid Simulation MATLAB",
  "IEEE Smart Grid Standards 2025",
  "Urban Microgrid Development Mumbai",
  "AI Based Load Forecasting Mumbai",
  "Adani Electricity Smart Energy Systems",
  "Tata Power Microgrid Projects",
  "Renewable Integration in Smart Grids",
  "Narpavi Research Institute Mumbai",
  "SCADA IoT Smart Grid Monitoring"
];

const SmartGridMicrogridMumbai = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      {/* ✅ SEO Meta Section */}
      <SEO
        title="Smart Grid & Microgrid Projects in Mumbai | IEEE 2030, AI Load Forecasting, SCADA Integration"
        description="Smart Grid and Microgrid Projects in Mumbai for B.Tech, M.Tech, and Ph.D. students. Develop IEEE 1547 & 2030-based systems with MATLAB, ETAP, PSCAD, and SCADA tools. Collaborations with Tata Power, AEML, and IIT Bombay for real-time validation and renewable integration."
        url="/eee/smart-grid-microgrid"
        keywords={keywords}
        faqs={faqs}
      />

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">
          
          {/* Left Column – Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <LeftSidebar/>
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
              <li>AI-Based Load Forecasting for Mumbai</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Smart Grid & Microgrid for Mumbai – Project Development Center</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — The Smart Grid & Microgrid for Mumbai initiative represents a transformative leap in modernizing India’s coastal urban power systems. Focusing on distributed generation, rooftop solar integration, and battery energy storage systems, the domain enhances grid reliability—especially under monsoon-induced challenges.
              </p>
              <p>
                This research domain supports digital energy management, adaptive grid balancing, and renewable energy penetration tailored to Mumbai’s large-scale industrial and residential developments. It aligns with the R&D mandates of Adani Electricity Mumbai Limited (AEML), Tata Power, and the Brihanmumbai Municipal Corporation (BMC) Smart Energy Division.
              </p>
              <p>
                Engineers and researchers employ MATLAB Simulink, PSCAD, ETAP, and SCADA monitoring systems to model next-generation smart grids capable of self-healing, renewable coordination, and dynamic power flow optimization.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-ecosystem">
              <h2>IEEE Alignment</h2>
              <p>
                The Smart Grid & Microgrid for Mumbai research framework complies with major IEEE standards including IEEE 1547 (Distributed Energy Resource Interconnection), IEEE 2030 (Smart Grid Interoperability Reference Model), and IEEE 1459 (Power Measurement and Analysis). Projects are developed under guidelines of IEEE PES, IEEE Smart Grid Technologies, and IEEE ICPS, ensuring global research visibility.
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
                      <td>Fault-tolerant automation and grid load balancing</td>
                    </tr>
                    <tr>
                      <td>Microgrid Integration</td>
                      <td>Tata Power R&D Division</td>
                      <td>Distributed solar + battery network management</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Monitoring</td>
                      <td>BMC Smart Energy Program</td>
                      <td>Energy data collection and real-time fault detection</td>
                    </tr>
                    <tr>
                      <td>AI-Based Load Forecasting</td>
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
                      <td>Monsoon-resilient control algorithm development</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-cycle">
              <h2>B.Tech, M.Tech & Ph.D. Development Cycles</h2>
              <p>
                The development cycles span simulation, optimization, and predictive modeling for Smart Grid & Microgrid deployment in Mumbai — each tailored to academic level and IEEE research standards.
              </p>

              <ul>
                <li><strong>B.Tech:</strong> MATLAB/ETAP-based prototype microgrid simulation.</li>
                <li><strong>M.Tech:</strong> Hybrid grid design with AI-based forecasting and optimization.</li>
                <li><strong>Ph.D.:</strong> Predictive control, reinforcement learning, and IEEE Transactions publications.</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Adaptive Smart Grid Control for Mumbai’s Coastal Power Distribution</li>
                <li>Design & Simulation of Rooftop Solar + Battery Microgrid for Apartments</li>
                <li>AI-Based Load Forecasting for Mumbai Urban Grids</li>
                <li>Resilient Smart Grid Architecture for Monsoon-Prone Regions</li>
                <li>IoT-Enabled Smart Metering and Demand Response in Mumbai</li>
                <li>Fault Detection & Restoration in Urban Microgrids</li>
                <li>Energy Management System for Hybrid Renewable Grids</li>
                <li>Multi-Agent Distributed Control for Mumbai Smart Grids</li>
                <li>SCADA-Integrated Microgrid Simulation for Local Power Resilience</li>
                <li>AI-Driven Load Balancing and Fault Prediction in Smart Networks</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-conclusion">
              <h2>Role of Narpavi Research Institute</h2>
              <p>
                The Narpavi Research Institute provides end-to-end academic and industrial project support for Smart Grid & Microgrid in Mumbai. Its R&D team guides students through MATLAB-based modeling, control optimization, and IEEE publication workflows. Collaborations with IIT Bombay, Tata Power, and AEML ensure access to real-time data, labs, and technical mentorship — empowering every student to build sustainable, intelligent energy systems for India’s coastal cities.
              </p>
            </section>

            {/* ✅ FAQ Section – structured data handled by SEO */}
            <section className="kerala-alluniversityfaq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="kerala-faq-items">
                {faqs.map((f) => (
                  <details key={f.question}>
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column – Related Fields */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related EEE Fields</h3>
             <ul>
  <li>
    <a href="/departments?dept=eee">Electrical & Electronics</a>
  </li>

  <li><a href="/eee/smart-grid-microgrid">Smart Grid & Microgrid</a></li>
  <li><a href="/eee/ev-charging-infrastructure-v2g">EV Charging Infrastructure & V2G</a></li>
  <li><a href="/eee/power-system-stability">Power System Stability</a></li>
  <li><a href="/eee/load-forecasting-demand-response">Load Forecasting & Demand Response</a></li>
  <li><a href="/eee/high-voltage-dc">High Voltage DC Systems</a></li>
  <li><a href="/eee/power-system-protection">Power System Protection</a></li>
  <li><a href="/eee/power-electronics-renewables">Power Electronics for Renewables</a></li>
  <li><a href="/eee/embedded-iot-energy">Embedded IoT for Energy Systems</a></li>
  <li><a href="/eee/smart-lighting-building">Smart Lighting & Building Automation</a></li>
  <li><a href="/eee/condition-monitoring-diagnosis">Condition Monitoring & Diagnosis</a></li>
  <li><a href="/eee/electric-machines-coastal-marine">Electric Machines for Coastal & Marine</a></li>
  <li><a href="/eee/power-electronics-ev-motor-drives">Power Electronics & EV Motor Drives</a></li>
  <li><a href="/eee/wireless-power-transfer">Wireless Power Transfer</a></li>
  <li><a href="/eee/artificial-intelligence-power">AI in Power Systems</a></li>
  <li><a href="/eee/smart-metering-demand-response">Smart Metering & Demand Response</a></li>

</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartGridMicrogridMumbai;
