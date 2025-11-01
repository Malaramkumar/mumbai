import React from 'react';
import "./EEEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which communication and metering stacks fit Mumbai apartments best?",
    answer:
      "For in-building networks use RS‑485/Modbus, Zigbee or Wi‑Fi; for campus/backhaul use LoRaWAN or LTE; expose device twins via MQTT/HTTP with TLS. Metering options include single/three‑phase smart meters with CTs, prepaid support, and interval logging with MDMS integration."
  },
  {
    question: "How should demand response be implemented for housing societies?",
    answer:
      "Start with time‑of‑day and event‑based signals for common loads (pumps, HVAC, corridor lighting), add opt‑in curtailment for apartments via smart plugs/relays, and incorporate price signals or incentives. Provide override options and publish fairness and comfort constraints."
  },
  {
    question: "What KPIs prove value to societies and utilities?",
    answer:
      "kWh and peak kW reduction, coincident peak shift, bill savings under ToD tariffs, PV self‑consumption lift, outage minutes avoided via microgrid islanding, response latency to DR signals, and data completeness/quality for billing and analytics."
  },
  {
    question: "How to address safety, privacy, and compliance?",
    answer:
      "Use surge protection and proper isolation for mains, follow enclosure and wiring codes, encrypt data in transit/at rest, role‑based access for dashboards, and clear data retention/consent policies. Log all switching actions for audit trails."
  },
  {
    question: "What deliverables are expected per academic level?",
    answer:
      "B.Tech: working smart‑meter/DR prototype + report; M.Tech: predictive DR + microgrid controller + benchmarking + publication draft; Ph.D.: multi‑agent/AI frameworks + HIL validation + artifact repository and IEEE manuscript."
  }
];

const SmartMeteringDRMicrogridsMumbai = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Smart Metering Apartments</li>
              <li>Demand Response (DR) Mumbai</li>
              <li>Apartment Microgrids</li>
              <li>LoRaWAN Zigbee MQTT</li>
              <li>MDMS AMI Billing</li>
              <li>PV + Battery EMS</li>
              <li>HOMER ETAP Simulink</li>
              <li>AI Load Forecasting</li>
              <li>Edge Gateways TLS</li>
              <li>IEEE Smart Grid 2023–2025</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Smart Metering, Demand Response & Microgrids for Mumbai Apartments (Mumbai‑Based)</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — This domain enables energy‑aware apartment communities using smart meters, secure communications, and microgrid controllers for optimized interaction with the grid. In Mumbai’s vertical housing and high demand context, systems that integrate PV, batteries, and demand response drive lower peaks, better reliability, and fair billing transparency.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-ecosystem">
              <h2>Mumbai apartment energy landscape</h2>
              <p>
                Cooperative societies and high‑rises benefit from interval metering, DR‑ready loads, and rooftop PV‑battery microgrids with islanding for outages. Gateways aggregate data to a management layer for billing, anomaly detection, and load shifting, while preserving occupant comfort and operational safety.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative technology–industry table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology aspect</th>
                      <th>Industry application (Mumbai)</th>
                      <th>Core tools / platforms</th>
                      <th>Emerging trends</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Smart metering</td>
                      <td>BMC/campus energy monitoring</td>
                      <td>MATLAB, Arduino, Zigbee</td>
                      <td>Real‑time billing & logging</td>
                    </tr>
                    <tr>
                      <td>Demand response</td>
                      <td>Housing load balancing</td>
                      <td>Python, IoT cloud, Node‑RED</td>
                      <td>Dynamic load management</td>
                    </tr>
                    <tr>
                      <td>Microgrid control</td>
                      <td>Rooftop PV + battery</td>
                      <td>ETAP, Simulink, Raspberry Pi</td>
                      <td>AI‑assisted strategies</td>
                    </tr>
                    <tr>
                      <td>Communication protocols</td>
                      <td>Apartment‑utility data flow</td>
                      <td>LoRaWAN, MQTT, ESP32</td>
                      <td>Secure IoT exchange</td>
                    </tr>
                    <tr>
                      <td>Energy storage optimization</td>
                      <td>Lithium‑ion integration</td>
                      <td>HOMER Pro, MATLAB</td>
                      <td>Hybrid energy models</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The matrix aligns AMI, DR, and microgrid control with Mumbai apartments’ billing needs, PV self‑consumption, and resilience goals.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-cycle">
              <h2>B.Tech project development cycle</h2>
              <p>
                Foundations in metering, secure telemetry, and DR control with small prototypes and simulations mapped to apartment use‑cases.
              </p>
              <ul>
                <li><strong>Topic selection</strong> — Urban housing load management and smart energy systems.</li>
                <li><strong>Literature review</strong> — IEEE smart meter, AMI, DR, and microgrid studies.</li>
                <li><strong>Integration</strong> — Arduino/ESP32 + sensors; MQTT/HTTP to dashboards.</li>
                <li><strong>Testing & validation</strong> — Load shifting scenarios and response timing.</li>
                <li><strong>Documentation</strong> — IEEE‑style report with data and code.</li>
              </ul>
              <p>
                Sample projects: IoT smart meter for apartment blocks; DR with smart switches; hybrid PV microgrid controller for societies.
              </p>

              <h2>M.Tech project development cycle</h2>
              <p>
                Predictive DR, microgrid EMS optimization, and HIL with comparative controller studies and publishable results.
              </p>
              <ul>
                <li><strong>Problem definition</strong> — Peak shaving and comfort constraints in apartments.</li>
                <li><strong>Algorithm development</strong> — ML load forecasting and DR scheduling.</li>
                <li><strong>HIL simulation</strong> — ETAP/SimPower + IoT hardware gateways.</li>
                <li><strong>System analysis</strong> — Compare classical vs. AI controllers.</li>
                <li><strong>Publication</strong> — IEEE draft and artifact package.</li>
              </ul>
              <p>
                Sample projects: predictive DR for smart apartments; AI energy balancing in PV microgrids; multi‑tier load management.
              </p>

              <h2>Ph.D. project development cycle</h2>
              <p>
                Scalable, autonomous frameworks with distributed intelligence, secure metering, and resilient operation across dense residential grids.
              </p>
              <ul>
                <li><strong>Research problems</strong> — Distributed optimization, privacy, and resilience.</li>
                <li><strong>Model development</strong> — Hybrid AI + optimization with multi‑agent control.</li>
                <li><strong>Validation</strong> — HW/SW co‑simulation and pilot deployments.</li>
                <li><strong>Result analysis</strong> — Reliability, latency, comfort, and cost metrics.</li>
                <li><strong>Publication</strong> — IEEE/SCI manuscripts with datasets.</li>
              </ul>
              <p>
                Sample topics: distributed AI microgrids; blockchain‑secured metering; multi‑agent RL for urban DR.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑aligned project titles</h2>
              <ul>
                <li>IoT‑Driven Smart Metering and Load Control in Mumbai Apartments</li>
                <li>AI‑Based Energy Optimization for Apartment Microgrid Communities</li>
                <li>Hybrid Solar‑Battery Microgrid Architecture for Cooperative Housing</li>
                <li>Real‑Time Demand Response Management in Urban Smart Buildings</li>
                <li>Data‑Driven Load Forecasting and Energy Management via Cloud Analytics</li>
              </ul>
              <p>
                Titles are scoped for reproducible datasets, clear DR baselines, and IEEE‑style reporting with uncertainty analysis.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-conclusion">
              <h2>Industry integration & impact</h2>
              <p>
                By combining AMI, DR, and microgrid controls, apartment complexes reduce peaks, increase PV self‑use, and improve reliability. Advisory‑mode rollouts with secure gateways and dashboards enable a smooth path to automated control aligned with city sustainability goals.
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
              <li><a href="/renewable-energy-mumbai">Renewable Energy</a></li>
              <li><a href="/power-electronics-mumbai">Power Electronics</a></li>
              <li><a href="/embedded-systems-mumbai">Embedded Systems</a></li>
              <li><a href="/ai-power-control-mumbai">AI in Power & Control</a></li>
              <li><a href="/cyber-physical-systems-mumbai">Cyber‑Physical Systems</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SmartMeteringDRMicrogridsMumbai;

