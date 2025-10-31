import React from "react";
import "./EEEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which converter topologies are most relevant for Mumbai’s urban PV and storage?",
    answer:
      "High‑efficiency DC–DC (buck/boost/Cuk/SEPIC), bidirectional converters for BESS/EV charging, and grid‑tied DC–AC with multilevel (NPC/ANPC/CHB) inverters for PQ improvement and voltage sag ride‑through."
  },
  {
    question: "What tools are recommended for converter design, control, and validation?",
    answer:
      "MATLAB/Simulink & Simscape for control and plant co‑simulation, PLECS for fast converter prototyping, PSCAD for grid interactions, ETAP for interconnection studies, and LabVIEW for HIL/datalogging."
  },
  {
    question: "How to maintain IEEE alignment and reproducibility?",
    answer:
      "Provide converter schematics, device ratings, control block diagrams, switching patterns, MPPT/PLL specs, test scenarios, KPI tables (η, THD, PF, transient recovery), and a versioned artifact bundle."
  },
  {
    question: "Are hardware prototypes and HIL supported?",
    answer:
      "Yes—PWM control on MCU/FPGA, isolated gate drivers, sensing/ADC, programmable sources/loads, and real‑time targets for validating efficiency, dynamics, and protection logic."
  },
  {
    question: "How to address coastal environment challenges?",
    answer:
      "Use conformal‑coated PCBs, corrosion‑resistant enclosures, thermal derating, surge/EMI filtering, and conform IEC/IEEE PQ and insulation coordination for humid, saline urban sites."
  }
];

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const PowerElectronicsRenewablesMumbai = () => {
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
              <li>Power Electronics for Renewable Energy Systems Mumbai</li>
              <li>Solar Converter Projects</li>
              <li>DC–DC Converter Design</li>
              <li>Grid‑Tied Inverter Optimization</li>
              <li>Multilevel Inverter Control</li>
              <li>MPPT & BMS for BESS</li>
              <li>MATLAB/Simulink PLECS PSCAD</li>
              <li>PQ & Harmonic Reduction</li>
              <li>IEEE 2023–2025 Titles</li>
              <li>Narpavi Research Institute</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Power Electronics for Renewable Energy Systems – Mumbai‑Based Project Development Center</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — This program accelerates Mumbai’s renewable transition by developing efficient, reliable, and adaptive power electronic converters that interface PV, wind, and storage with the urban grid, addressing coastal humidity, voltage sags, and fluctuating loads.
              </p>
              <p>
                The Narpavi Research Institute integrates converter design, control optimization, and grid interfacing to deliver prototypes and simulations aligned with educational and industrial needs in Mumbai’s microgrids, rooftops, and EV‑linked storage systems.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Focus</th>
                      <th>Industrial Application (Mumbai)</th>
                      <th>Tools / Platforms Used</th>
                      <th>Collaborating Entities</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DC–DC Converters for Rooftop Solar</td>
                      <td>Residential/commercial energy systems</td>
                      <td>MATLAB Simulink, PLECS</td>
                      <td>Tata Power Solar, BMC Renewable</td>
                    </tr>
                    <tr>
                      <td>Grid‑Tied Inverters</td>
                      <td>Smart grid & net‑metering integration</td>
                      <td>PSCAD, LabVIEW</td>
                      <td>Adani Electricity, IIT Bombay</td>
                    </tr>
                    <tr>
                      <td>MPPT & Battery Management</td>
                      <td>EV charging and storage hubs</td>
                      <td>MATLAB Control Toolbox</td>
                      <td>Reliance Energy Labs, Mahindra Powertrain</td>
                    </tr>
                    <tr>
                      <td>Multilevel Inverters for Microgrids</td>
                      <td>Cooperative housing microgrids</td>
                      <td>PLECS, ETAP</td>
                      <td>Mumbai Metro Power Labs</td>
                    </tr>
                    <tr>
                      <td>Harmonics & Power Quality</td>
                      <td>Industrial/port‑based facilities</td>
                      <td>MATLAB FFT Toolbox</td>
                      <td>SEEPZ, Godrej Industries</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The matrix aligns converter/control technologies with Mumbai’s rooftop PV, microgrid, and industrial PQ needs for realistic deployment.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-cycle">
              <h2>B.Tech Project Cycle – Application‑Oriented Foundations</h2>
              <p>
                Objective: hands‑on converter design and control, from DC–DC fundamentals to MPPT validation and battery charging integration with microcontrollers.
              </p>
              <ul>
                <li>Design & Simulation of Buck–Boost Converter for Solar PV</li>
                <li>PWM‑Based DC–AC Inverter for Residential Systems</li>
                <li>Microcontroller‑Based Power Conditioning Unit for Off‑Grid</li>
              </ul>
              <p>
                Phases: DC–DC modeling → MPPT simulation → Battery charger integration; Tools: MATLAB/Simulink, PLECS, Arduino
              </p>

              <h2>M.Tech Project Cycle – Advanced Research & Optimization</h2>
              <p>
                Objective: efficient, AI‑integrated, adaptive control with multi‑objective optimization, predictive current control, and digital twin‑ready designs.
              </p>
              <ul>
                <li>Adaptive Neural Network‑Based MPPT for Solar Inverters</li>
                <li>Grid‑Tied Converter with Predictive Current Control</li>
                <li>MPC of Multilevel Inverter for Urban Microgrids</li>
              </ul>
              <p>
                Phases: AI/ML optimization → hybrid objectives → real‑time control; Tools: MATLAB, Python, PSCAD, LabVIEW
              </p>

              <h2>Ph.D. Research Cycle – Innovation & Industry Collaboration</h2>
              <p>
                Objective: intelligent DC–AC control architectures, network‑aware converter integration, and field‑validated prototypes under Mumbai’s coastal grid constraints.
              </p>
              <ul>
                <li>AI‑Enhanced Fault‑Tolerant Converter Topologies</li>
                <li>Hybrid DC‑Link Converter for Distributed Solar in Mumbai</li>
                <li>PQ Management via AI‑Assisted Active Filters</li>
              </ul>
              <p>
                Phases: control architecture → utility integration → field validation; Tools: MATLAB/Simulink, PSCAD, PLECS, ETAP
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Multi‑Port DC–DC Converter for Hybrid Renewable Systems</li>
                <li>AI‑Optimized Inverter Switching for Solar–Battery Microgrids</li>
                <li>Real‑Time Load/Voltage Control via Power Converters</li>
                <li>ML‑Assisted Fault Detection in Grid‑Tied Inverters (Coastal)</li>
                <li>Bidirectional DC–AC Converters for EV Charging Stations</li>
                <li>FPGA‑Based PWM Controller for Power Conditioning Units</li>
                <li>MPC of Multilevel Inverters in Mumbai Smart Grids</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-ecosystem">
              <h2>Mumbai Industrial Ecosystem and Opportunities</h2>
              <p>
                Collaborations with Tata Power Solar, Adani Electricity, and Siemens Mumbai, alongside IIT Bombay and VJTI labs, enable deployments in housing microgrids, commercial rooftops, and EV hubs in Andheri, Powai, and Navi Mumbai.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-conclusion">
              <h2>Significance of Narpavi Research Institute</h2>
              <p>
                Narpavi’s program blends mentorship, simulation labs, and prototyping to meet IEEE/Scopus/industry standards from concept through validation, building Mumbai’s next generation of power electronics leaders.
              </p>
            </section>

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
              <JsonLd data={faqSchema} />
            </section>
          </div>

          {/* Right Column – Related Fields */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related EEE Fields</h3>
            <ul>
              <li><a href="/renewable-energy-mumbai">Renewable Energy Systems</a></li>
              <li><a href="/power-systems-mumbai">Power System Optimization</a></li>
              <li><a href="/smart-grid-communication-mumbai">Smart Grid Communication</a></li>
              <li><a href="/ev-v2g-mumbai">EV Charging & V2G</a></li>
              <li><a href="/protection-systems-mumbai">Protection & SCADA Systems</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PowerElectronicsRenewablesMumbai;
