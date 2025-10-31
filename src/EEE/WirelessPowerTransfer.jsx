import React from 'react';
import "./EEEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which WPT approach should be used for Mumbai deployments?",
    answer:
      "Use resonant inductive systems for stationary pads at depots and parking, and explore dynamic wireless charging for bus corridors and depot queues. Select GaN/SiC high‑frequency converters, sealed enclosures (IP65+), and corrosion‑resistant hardware for coastal humidity and salt exposure."
  },
  {
    question: "How to meet safety, EMI/EMC, and interoperability needs?",
    answer:
      "Design to established coil exposure limits, implement active object/foreign‑object detection, and add shielding/compensation to control stray fields. Validate EMI with pre‑compliance scans, ensure alignment tolerance, and follow communication handshakes across vehicle and ground units for reliable power transfer."
  },
  {
    question: "What KPIs should be tracked in pilots?",
    answer:
      "End‑to‑end efficiency vs. air‑gap/misalignment, power transfer stability under wet conditions, charge energy per dwell minute, grid PQ (THD, PF), thermal rise of power stage, and maintenance intervals. For fleets, quantify availability, cost per kWh delivered, and utilization profiles."
  },
  {
    question: "How to integrate WPT with smart grids and fleets?",
    answer:
      "Use bidirectional converters for V2G where applicable, implement scheduling and tariff‑aware control, and coordinate with depot energy management (ESS/PV). Add OCPP‑style telemetry and secure cloud links for real‑time monitoring and predictive maintenance."
  },
  {
    question: "What deliverables are expected across levels?",
    answer:
      "B.Tech: low‑power pad prototype + efficiency curves; M.Tech: resonant inverter with adaptive control + EMI pre‑checks + publication draft; Ph.D.: multi‑vehicle WPT frameworks, EMI mitigation, AI optimization + field data and IEEE manuscript."
  }
];

const WirelessPowerChargingMumbai = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ECE Wireless Power Transfer</li>
              <li>Inductive & Resonant Charging</li>
              <li>Dynamic Wireless Charging</li>
              <li>GaN/SiC HF Converters</li>
              <li>Pad Alignment & FOD</li>
              <li>EV Depot Charging Mumbai</li>
              <li>Marine Wireless Charging</li>
              <li>Smart Grid & V2G</li>
              <li>EMI/EMC Compliance</li>
              <li>IEEE WPT 2023–2025</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Wireless Power Transfer & Charging Infrastructure (Mumbai‑Based)</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — Wireless Power Transfer (WPT) uses magnetic induction and resonant coupling to deliver energy without physical connectors, enabling maintenance‑light charging for EVs, buses, and marine vessels. In dense, coastal Mumbai, WPT addresses space, corrosion, and uptime challenges while integrating with smart grids and fleet operations.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-ecosystem">
              <h2>Applications across Mumbai</h2>
              <p>
                Stationary pads serve depots and parking hubs in business districts; dynamic segments suit bus corridors and queue zones; marine docks benefit from sealed, corrosion‑resistant modules. Projects at the center cover coil design, resonant inverters, alignment tolerance, FOD, telemetry, and grid‑aware control tuned to Mumbai’s climate.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative technology–industry table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology type</th>
                      <th>Mumbai application</th>
                      <th>Core tools / techniques</th>
                      <th>Research trends (2023–2025)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Inductive power transfer</td>
                      <td>Public EV bus terminals</td>
                      <td>MATLAB, Ansys Maxwell</td>
                      <td>Resonant coupling optimization</td>
                    </tr>
                    <tr>
                      <td>Capacitive power transfer</td>
                      <td>Parking‑pad chargers</td>
                      <td>Simulink, HFSS</td>
                      <td>Compact, lightweight designs</td>
                    </tr>
                    <tr>
                      <td>Dynamic power transfer</td>
                      <td>Metro/highway corridors</td>
                      <td>NS‑3, IoT monitoring</td>
                      <td>Smart road‑embedded lines</td>
                    </tr>
                    <tr>
                      <td>Marine wireless power</td>
                      <td>Ferry/coastal vehicles</td>
                      <td>GaN HF converters</td>
                      <td>Corrosion‑resistant modules</td>
                    </tr>
                    <tr>
                      <td>Bidirectional power (V2G)</td>
                      <td>Fleet depots, grid mgmt</td>
                      <td>DSP/FPGA control</td>
                      <td>Vehicle–grid energy sharing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The mapping aligns WPT modalities with depot, corridor, and dock use‑cases, emphasizing coastal resilience and grid integration.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-cycle">
              <h2>B.Tech project development cycle</h2>
              <p>
                Practical low‑power pad prototypes with clear coupling, alignment, and efficiency characterization for Mumbai‑relevant gaps.
              </p>
              <ul>
                <li><strong>Conceptualization</strong> — Identify EV/microgrid charging needs and dwell‑time windows.</li>
                <li><strong>Simulation</strong> — Analyze coupling coefficients and compensation networks.</li>
                <li><strong>Hardware design</strong> — Build low‑power inductive chargers with safe enclosures.</li>
                <li><strong>Testing</strong> — Evaluate air‑gap, lateral offset, load variation, and wet conditions.</li>
                <li><strong>Documentation</strong> — IEEE‑style report with data, uncertainties, and limits.</li>
              </ul>
              <p>
                Sample projects: e‑bike inductive charger; compact resonant pad for two‑wheelers; IoT‑enabled WPT for metro parking.
              </p>

              <h2>M.Tech project development cycle</h2>
              <p>
                Performance enhancement, high‑frequency control, and grid‑aware operation of WPT with EMI pre‑checks and benchmarks.
              </p>
              <ul>
                <li><strong>Design</strong> — High‑frequency resonant inverters and compensation topologies.</li>
                <li><strong>Simulation</strong> — Power quality under varying loads and alignment.</li>
                <li><strong>Optimization</strong> — Adaptive frequency/phase control on DSP.</li>
                <li><strong>Validation</strong> — Compare against industrial WPT benchmarks.</li>
                <li><strong>Publication</strong> — IEEE/Scopus draft with ablations and test scripts.</li>
              </ul>
              <p>
                Sample projects: DSP‑controlled WPT for EV fleets; adaptive resonant converter for dockside charging; real‑time control for dynamic bus charging.
              </p>

              <h2>Ph.D. project development cycle</h2>
              <p>
                Electromagnetic modeling, EMI mitigation, and AI‑driven optimization for large‑scale grid and marine WPT in coastal climates.
              </p>
              <ul>
                <li><strong>Gaps</strong> — Coastal EMI/EMC issues, alignment tolerance, multi‑vehicle scheduling.</li>
                <li><strong>Modeling</strong> — Field optimization, loss/thermal analysis, shielded coil design.</li>
                <li><strong>Implementation</strong> — GaN/SiC hardware, robust comms, secure telemetry.</li>
                <li><strong>Evaluation</strong> — Real‑time datasets, predictive performance models.</li>
                <li><strong>Publication</strong> — IEEE Transactions/SCI submissions with artifacts.</li>
              </ul>
              <p>
                Sample topics: dynamic WPT frameworks for metro fleets; EMI mitigation in resonant systems; AI optimization of inductive power flow for grid coupling.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑aligned project titles (2023–2025)</h2>
              <ul>
                <li>High‑Efficiency Resonant Inductive Charger for Urban EVs</li>
                <li>Dynamic Power Transfer Network for City Bus Corridors</li>
                <li>Multi‑Node Marine Wireless Charging Platform</li>
                <li>Smart Grid‑Integrated Wireless Charging with Bidirectional Flow</li>
                <li>AI‑Driven GaN Converter Design for Inductive EV Power</li>
              </ul>
              <p>
                Titles are scoped for reproducible simulations, compensation tuning, EMI pre‑checks, and IEEE‑style reporting.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-conclusion">
              <h2>Integration & impact in Mumbai</h2>
              <p>
                WPT enables scalable, maintenance‑light charging in dense urban and coastal zones. With fleet scheduling, grid coordination, and corrosion‑resistant hardware, projects progress from lab pads to depot pilots—advancing Mumbai’s clean mobility with aligned engineering and documentation practices.
              </p>
            </section>

            <section className="kerala-alluniversityfaq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="kerala-faq-items">
                {faqs.map((f, i) => (
                  <details key={i}>
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
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
                      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                    }))
                  })
                }}
              />
            </section>
          </div>

          {/* Right Column – Related Services */}
          <div className="ECEProjectDevelopmentCenter-right">
            <h3>🔗 Related ECE fields</h3>
            <ul>
              <li><a href="/power-electronics-mumbai">Power Electronics</a></li>
              <li><a href="/embedded-systems-mumbai">Embedded Systems</a></li>
              <li><a href="/renewable-energy-mumbai">Renewable Energy</a></li>
              <li><a href="/communication-systems-mumbai">Communication Systems</a></li>
              <li><a href="/cyber-physical-systems-mumbai">Cyber‑Physical Systems</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WirelessPowerChargingMumbai;
