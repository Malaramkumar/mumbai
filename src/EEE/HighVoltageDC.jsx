import React from "react";
import "./EEEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What makes HVDC suitable for Mumbai’s coastal and islanded grid needs?",
    answer:
      "HVDC offers controllable bulk transfer with lower losses, compact corridors, and strong ride‑through against disturbances, suiting submarine/underground links, port areas, and space‑constrained urban/coastal routes."
  },
  {
    question: "Which studies are essential for coastal HVDC planning?",
    answer:
      "EMT simulations for converter dynamics, protection/contingency analysis, AC/DC interface stability, cable thermal rating in saline/coastal conditions, and corrosion/insulation coordination studies."
  },
  {
    question: "What tools are typical for HVDC modeling and validation?",
    answer:
      "PSCAD/EMTDC for EMT detail, MATLAB/Simulink and Simscape for control, ETAP or DIgSILENT for load/fault/relay coordination, PLECS for converter topologies, and PowerWorld for system‑level scenarios."
  },
  {
    question: "How to structure IEEE‑aligned evidence?",
    answer:
      "Provide system diagrams, controller block models, parameter tables, events (faults, steps), KPIs (losses, voltage stability, recovery times), and a reproducibility package with configs and datasets."
  },
  {
    question: "Can projects include hardware‑in‑loop tests?",
    answer:
      "Yes—use real‑time targets, programmable DC sources, protection relays, and SCADA emulation to validate converter control, protection selectivity, and post‑fault recovery."
  }
];

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const HvdcCoastalMumbai = () => {
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
              <li>High Voltage DC Mumbai</li>
              <li>HVDC Coastal Transmission</li>
              <li>Marine HVDC Lines</li>
              <li>PSCAD MATLAB Simulink Projects</li>
              <li>ETAP & DIgSILENT PowerFactory</li>
              <li>HVDC Stability Analysis</li>
              <li>Multi‑Terminal HVDC</li>
              <li>Offshore Substations</li>
              <li>Converter Topologies (MMC, LCC)</li>
              <li>IEEE HVDC Projects</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>High Voltage DC (HVDC) & Power Transmission in Coastal Environment</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — HVDC & coastal power transmission enable reliable, efficient, long‑distance power delivery across Mumbai’s islanded and maritime corridors, with controllable bulk transfer, minimal losses, and resilience to coastal weather and space constraints.
              </p>
              <p>
                The Narpavi Research Institute’s Mumbai Project Development Center guides B.Tech, M.Tech, and Ph.D. cohorts on IEEE‑aligned HVDC transmission, marine power systems, and coastal grid stabilization—bridging power electronics, control, and high‑voltage engineering with industrial deployments.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Focus</th>
                      <th>Industrial Relevance (Mumbai Context)</th>
                      <th>Tools & Simulation Platforms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>HVDC Line Design</td>
                      <td>Inter‑island power transfer & offshore substations</td>
                      <td>PSCAD, MATLAB Simulink, ETAP</td>
                    </tr>
                    <tr>
                      <td>Coastal Substation Protection</td>
                      <td>Tata Power & Adani Electricity substations</td>
                      <td>ETAP, DIgSILENT PowerFactory</td>
                    </tr>
                    <tr>
                      <td>Power Electronics Converters</td>
                      <td>Marine/offshore HVDC link converters</td>
                      <td>PLECS, MATLAB/Simulink, PSCAD</td>
                    </tr>
                    <tr>
                      <td>Fault Analysis & Contingency Planning</td>
                      <td>Port and islanded grids</td>
                      <td>MATLAB SimPower, PowerWorld Simulator</td>
                    </tr>
                    <tr>
                      <td>Integration with AC Networks</td>
                      <td>HVDC interface to the urban AC grid</td>
                      <td>PSCAD, ETAP, Simulink</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The matrix aligns HVDC design, protection, EMT detail, and AC/DC interface studies with Mumbai’s coastal deployment constraints.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-cycle">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                Fundamentals of HVDC line modeling, converter control, and fault behavior with simulation and benchtop prototypes to understand long‑distance and marine/coastal transmission.
              </p>
              <ul>
                <li>Modeling & Simulation of HVDC Links for Island Supply</li>
                <li>Converter Control for Coastal HVDC Transmission</li>
                <li>Fault Detection/Mitigation in Small‑Scale HVDC Networks</li>
                <li>Arduino‑Based Protection Relay Simulation for Marine Lines</li>
              </ul>
              <p>
                Tools: MATLAB/Simulink, PSCAD, Arduino, PLECS
              </p>

              <h2>M.Tech Project Development Cycle</h2>
              <p>
                Optimization, advanced modeling, and grid integration of coastal HVDC—stability margins, converter strategies, and renewable integration for high‑capacity transmission.
              </p>
              <ul>
                <li>AI‑Assisted Control for HVDC Links in Coastal Urban Grids</li>
                <li>Multi‑Terminal HVDC Stability Analysis for Mumbai Islands</li>
                <li>Renewable Integration into HVDC Transmission Systems</li>
                <li>Dynamic Modeling of Offshore HVDC Substations</li>
              </ul>
              <p>
                Tools: MATLAB Simulink, PSCAD, PLECS, ETAP, Python (AI/ML control)
              </p>

              <h2>Ph.D. Research Cycle</h2>
              <p>
                Innovative HVDC topologies, predictive control, and resilient coastal grid architectures—AI‑driven protection, offshore wind/solar integration, and multi‑terminal optimization.
              </p>
              <ul>
                <li>Multi‑Terminal HVDC Optimization for Coastal Urban Grids</li>
                <li>AI‑Driven Fault Detection & Protection in Marine HVDC Links</li>
                <li>Offshore Wind Integration into HVDC Networks</li>
                <li>Stability Enhancement for Coastal HVDC Converters</li>
              </ul>
              <p>
                Tools: PSCAD, MATLAB/Simulink, PLECS, ETAP, Python (predictive analytics)
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>Design & Control of Multi‑Terminal HVDC for Coastal Urban Networks</li>
                <li>Fault‑Tolerant HVDC for Island and Marine Applications</li>
                <li>Renewable‑Integrated HVDC Converters for Coastal Grids</li>
                <li>AI‑Based Stability Enhancement for Coastal HVDC Transmission</li>
                <li>Dynamic Modeling & Protection of Offshore HVDC Substations</li>
                <li>Predictive Control Algorithms for Multi‑Terminal HVDC Systems</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-ecosystem">
              <h2>Integration with Mumbai’s Coastal Grid Infrastructure</h2>
              <p>
                HVDC links support reliable transfer to islands, ports, and coastal industry during monsoon‑driven instability; utilities deploy long‑distance, high‑capacity links while projects leverage IEEE mentorship, simulation platforms, and lab validation for city‑specific needs.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-conclusion">
              <h2>Future Scope and Innovation</h2>
              <p>
                Priority areas include multi‑terminal HVDC for island–mainland exchange, offshore wind and floating solar integration, AI‑based predictive maintenance, high‑efficiency modular converters, and real‑time monitoring with adaptive control for coastal HVDC corridors.
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
              <li><a href="/power-systems-mumbai">Power Systems Optimization</a></li>
              <li><a href="/renewable-energy-mumbai">Renewable Energy Systems</a></li>
              <li><a href="/smart-grid-communication-mumbai">Smart Grid Communication</a></li>
              <li><a href="/distributed-generation-mumbai">Distributed Generation</a></li>
              <li><a href="/protection-systems-mumbai">Protection & SCADA Systems</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HvdcCoastalMumbai;
