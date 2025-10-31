import React from "react";
import "./EEEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which protection studies are most critical for Mumbai utilities?",
    answer:
      "Short‑circuit and arc‑flash studies, relay coordination for mixed overhead/underground feeders, differential and distance protection for HV corridors, and cyber‑secure IEC 61850 substation automation."
  },
  {
    question: "What tools are recommended for modeling, fault studies, and coordination?",
    answer:
      "ETAP and DIgSILENT PowerFactory for load/fault/coordination, MATLAB/Simulink and SimPower for algorithmic studies, PSCAD for EMT detail, and SCADA simulators/LabVIEW for automation testing."
  },
  {
    question: "How to ensure IEEE‑aligned documentation and reproducibility?",
    answer:
      "Provide one‑line diagrams, relay logic/curves, CT/VT data, TCC plots, event sequences, clearing times, sensitivity margins, datasets, and versioned configs, all structured per IEEE manuscript guidelines."
  },
  {
    question: "Can projects include PMU‑based detection and synchrophasor analytics?",
    answer:
      "Yes—use PMU data streams to implement rapid fault classification/location and oscillation detection, feeding optimized relay settings with communication‑latency compensation."
  },
  {
    question: "Do you support hardware‑in‑loop and microcontroller prototypes?",
    answer:
      "Yes—prototypes with embedded relays, breaker trip logic, and IEC 61850‑style messaging can be evaluated with HIL benches and SCADA emulation for end‑to‑end validation."
  }
];

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const PowerProtectionMumbaiUtilities = () => {
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
              <li>Power System Protection Mumbai</li>
              <li>Relay Coordination Simulation</li>
              <li>Fault Detection & Isolation</li>
              <li>Arc‑Flash Assessment</li>
              <li>IEC 61850 Substation Automation</li>
              <li>PMU/Synchrophasor Analytics</li>
              <li>MATLAB ETAP DIgSILENT</li>
              <li>PSCAD EMT Modeling</li>
              <li>Protection for Coastal Substations</li>
              <li>IEEE Power Engineering Projects</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Power System Protection for Mumbai Utilities</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — Power System Protection for Mumbai Utilities ensures uninterrupted, safe, and reliable power across India’s largest metropolitan network as load centers densify, underground substations expand, and renewables integrate at distribution and transmission levels.
              </p>
              <p>
                The Narpavi Research Institute’s Project Development Center delivers IEEE‑standard support for modeling, simulation, and prototyping of relay coordination, real‑time fault detection, arc‑flash mitigation, and intelligent fault diagnosis tailored to Mumbai’s dynamic, load‑intensive grid.
              </p>
              <p>
                This specialization blends protection engineering, digital relaying, and substation automation aligned with utilities like Tata Power, AEML, and BEST for direct industrial relevance.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Protection Focus</th>
                      <th>Industry Relevance in Mumbai</th>
                      <th>Core Tools / Simulation Platforms</th>
                      <th>Emerging Research Areas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Relay Coordination and Selectivity</td>
                      <td>Tata Power substations, AEML networks</td>
                      <td>ETAP, DIgSILENT PowerFactory</td>
                      <td>Adaptive/AI‑based coordination</td>
                    </tr>
                    <tr>
                      <td>Fault Detection & Isolation</td>
                      <td>Underground and coastal substations</td>
                      <td>MATLAB/Simulink, PSCAD</td>
                      <td>Real‑time AI/ML fault detection</td>
                    </tr>
                    <tr>
                      <td>Arc Flash & Equipment Protection</td>
                      <td>Industrial zones, Andheri MIDC/Navi Mumbai</td>
                      <td>ETAP Arc Flash, PSCAD</td>
                      <td>Smart relays, predictive monitoring</td>
                    </tr>
                    <tr>
                      <td>Transmission Line Protection</td>
                      <td>HV corridors across Thane, Vikhroli</td>
                      <td>MATLAB SimPower, PSCAD</td>
                      <td>Hybrid differential/distance schemes</td>
                    </tr>
                    <tr>
                      <td>Smart Substation Automation (IEC 61850)</td>
                      <td>SCADA‑integrated control at utilities</td>
                      <td>LabVIEW, SCADA simulators</td>
                      <td>Cyber‑physical protection systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The table links protection domains with Mumbai’s utility operations, tools, and emerging AI‑centric research threads.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-cycle">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                Fundamentals in relays, CT/VT instrumentation, breaker logic, and TCC‑based coordination using simulation and microcontroller prototypes.
              </p>
              <ul>
                <li>Simulation of Overcurrent & Earth Fault Protection for Substations</li>
                <li>Digital Differential Relay Coordination in MATLAB/Simulink</li>
                <li>Microcontroller‑Based Overcurrent Protection System</li>
                <li>Coastal Transmission Line Fault Protection Concepts</li>
              </ul>
              <p>
                Cycle Phases: Concept → Simulation Setup → Fault Analysis → Coordination Studies → Prototype & IEEE‑format Report
              </p>

              <h2>M.Tech Project Development Cycle</h2>
              <p>
                Automation, adaptive protection, and AI‑assisted decisions with SCADA integration and performance optimization for response speed and sensitivity.
              </p>
              <ul>
                <li>AI‑Assisted Relay Coordination for Distribution Grids</li>
                <li>Real‑Time Fault Detection using PMUs</li>
                <li>IEC 61850‑Based Smart Substation Protection</li>
                <li>Adaptive Coordination for Mixed AC‑DC Networks</li>
              </ul>
              <p>
                Cycle Phases: Problem Identification → Modeling → SCADA Integration → Performance Evaluation → IEEE Publication
              </p>

              <h2>Ph.D. Research Development Cycle</h2>
              <p>
                Digital protection, data‑driven reliability, and cyber‑secure substation design for HV transmission and coastal substations with rigorous validation.
              </p>
              <ul>
                <li>AI‑Driven Adaptive Protection in Coastal Urban Networks</li>
                <li>Deep Learning Fault Diagnosis with Synchrophasors</li>
                <li>Real‑Time Protection for HVDC–AC Hybrid Grids</li>
                <li>Secure SCADA‑Based Relay Systems</li>
              </ul>
              <p>
                Cycle Phases: Problem Definition → Hybrid Modeling → Simulation & Experimental Validation → Metrics & Sensitivity → Publication
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑Aligned Project Titles</h2>
              <ul>
                <li>Adaptive Overcurrent Protection for Urban Distribution Networks</li>
                <li>ML‑Based Fault Classification for Mumbai Utilities</li>
                <li>Relay Coordination with Communication Latency Compensation</li>
                <li>Cyber‑Secure IEC 61850 Substation Protection</li>
                <li>AI‑Optimized TCC for Coastal Transmission Lines</li>
                <li>PMU‑Based Fault Location in HVDC–AC Interconnections</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-ecosystem">
              <h2>Integration with Mumbai’s Industrial Ecosystem</h2>
              <p>
                Collaboration with Tata Power, AEML, and BEST aligns academic work to real‑time fault detection, predictive maintenance, and relay modernization across dense urban and coastal substations with marine‑environment mitigations.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-conclusion">
              <h2>Future Scope & Innovation</h2>
              <p>
                The roadmap includes AI‑integrated adaptive protection, SCADA–PMU–IoT convergence, digital‑twin‑based relay prediction, cyber‑secure automation, and hybrid HVDC–AC protection for smart cities with IEEE‑compliant outputs and reproducible artifacts.
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
              <li><a href="/power-systems-mumbai">Power System Optimization</a></li>
              <li><a href="/protection-systems-mumbai">Protection & SCADA Systems</a></li>
              <li><a href="/smart-grid-communication-mumbai">Smart Grid Communication</a></li>
              <li><a href="/renewable-energy-mumbai">Renewable Energy Systems</a></li>
              <li><a href="/hvdc-coastal-mumbai">HVDC & Coastal Transmission</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PowerProtectionMumbaiUtilities;
