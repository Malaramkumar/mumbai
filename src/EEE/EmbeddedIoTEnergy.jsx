import React from "react";
import "./EEEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which embedded platforms and protocols are best for Mumbai’s energy use‑cases?",
    answer:
      "ESP32/STM32/Arduino for endpoints, Raspberry Pi for gateways; MQTT/HTTP for telemetry, Modbus for meters/inverters, and secure TLS for cloud connectivity; ZigBee/LoRa for low‑power WSN links."
  },
  {
    question: "Which cloud/analytics stacks are commonly used for prototypes?",
    answer:
      "ThingSpeak and Blynk for fast PoCs, AWS IoT Core for scalable messaging, and Grafana/TimescaleDB or DynamoDB for dashboards and storage; optional edge AI via TensorFlow Lite."
  },
  {
    question: "How to keep projects IEEE‑aligned and reproducible?",
    answer:
      "Provide hardware BoM, circuit/PCB files, firmware repo, API schemas, dataset schemas, latency/uplink KPIs, power and cost budgets, and a repeatable build/flash pipeline with test logs."
  },
  {
    question: "Is hardware‑in‑loop and field testing supported?",
    answer:
      "Yes—HIL benches with emulated meters/loads, protected mains interfaces, and staged field trials at housing societies or labs with safety SOPs, fused interfaces, and isolation."
  },
  {
    question: "How to handle coastal humidity and electrical noise?",
    answer:
      "Use conformal coatings, shielded enclosures, TVS/surge and EMI filters, proper grounding, and watchdog/brown‑out firmware strategies to ensure resilience in Mumbai’s climate."
  }
];

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

const EmbeddedIoTEnergyMumbai = () => {
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
              <li>Embedded Systems & IoT for Energy Management Mumbai</li>
              <li>Smart Metering Projects</li>
              <li>IoT Energy Optimization</li>
              <li>AI‑Based Energy Management</li>
              <li>EEE Embedded Projects Mumbai</li>
              <li>Renewable Energy IoT Systems</li>
              <li>ThingSpeak AWS IoT Blynk</li>
              <li>Raspberry Pi ESP32 STM32</li>
              <li>SCADA & Edge Gateways</li>
              <li>IEEE Project Titles 2023–2025</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>Embedded Systems & IoT for Energy Management – Mumbai‑Based Project Development Center</h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — Embedded Systems & IoT for Energy Management equips Mumbai with intelligent sensing, control, and analytics—from smart meters to load controllers—unlocking conservation, predictive maintenance, and demand‑side response in residences, industry, and commercial estates.
              </p>
              <p>
                Narpavi Research Institute merges microcontroller design, IoT protocols, and AI analytics into scalable solutions, supporting simulation, prototyping, and cloud integration for smart lighting, metering, DR, and asset monitoring aligned with the city’s Smart Energy initiatives.
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
                      <td>Smart Metering Systems</td>
                      <td>Residential & commercial energy monitoring</td>
                      <td>Arduino, ESP32, ThingSpeak</td>
                      <td>Tata Power Smart Meter Division</td>
                    </tr>
                    <tr>
                      <td>IoT‑Based Load Control</td>
                      <td>Industrial HVAC and lighting automation</td>
                      <td>Raspberry Pi, Node‑RED</td>
                      <td>Siemens India, L&T Mumbai</td>
                    </tr>
                    <tr>
                      <td>Wireless Sensor Networks (WSN)</td>
                      <td>Building energy optimization</td>
                      <td>ZigBee, LoRa</td>
                      <td>Adani Electricity, IIT Bombay</td>
                    </tr>
                    <tr>
                      <td>Embedded Fault Detection Devices</td>
                      <td>Power quality & grid anomaly monitoring</td>
                      <td>Proteus, MATLAB</td>
                      <td>Reliance Energy Labs</td>
                    </tr>
                    <tr>
                      <td>Energy Data Analytics Platforms</td>
                      <td>Cloud dashboards & alerts</td>
                      <td>AWS IoT, Grafana</td>
                      <td>Schneider Electric India</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The table maps embedded/IoT stacks to Mumbai’s deployments, enabling realistic prototypes and scalable pilots.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-cycle">
              <h2>B.Tech Project Cycle – Foundations in Embedded Design</h2>
              <p>
                Objective: IoT interfacing, data acquisition, and sensor network integration from firmware to cloud dashboards with secure telemetry.
              </p>
              <ul>
                <li>IoT‑Based Smart Meter with Mobile App Interface</li>
                <li>ESP32 Energy Monitoring with Cloud Visualization</li>
                <li>Automated Load Control for Smart Apartments</li>
              </ul>
              <p>
                Phases: MCU programming → IoT comms (Wi‑Fi/MQTT/HTTP) → Cloud dashboards (ThingSpeak/Blynk); Tools: Arduino/ESP32/RPi, Proteus, LabVIEW IoT
              </p>

              <h2>M.Tech Project Cycle – Advanced System Integration</h2>
              <p>
                Objective: AI‑driven energy management and predictive control with edge intelligence and DR orchestration using embedded data.
              </p>
              <ul>
                <li>AI‑Assisted Load Forecasting via Embedded IoT</li>
                <li>Edge‑Based Energy Management for Microgrids</li>
                <li>IoT Gateway for Real‑Time Efficiency Optimization</li>
              </ul>
              <p>
                Phases: Edge AI → DR modeling → Renewable integration; Tools: Python/TensorFlow Lite, Node‑RED, AWS IoT, SCADA bridges
              </p>

              <h2>Ph.D. Research Cycle – Innovation & Scalable Deployment</h2>
              <p>
                Objective: fault‑tolerant embedded architectures, secure comms for critical energy IoT, and city‑scale sensor rollouts for utilities.
              </p>
              <ul>
                <li>Blockchain‑Secured IoT for Smart Distribution</li>
                <li>Deep Learning Load Classification on Embedded Nodes</li>
                <li>Resilient IoT Networks for Mumbai Smart Energy</li>
              </ul>
              <p>
                Phases: architecture → secure protocols → utility‑grade deployment; Tools: Embedded C/C++, TLS/MQTT‑S, PKI/Keys, OTA updates
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>IoT‑Based Smart Metering for Residential Optimization</li>
                <li>Embedded Energy Control with AI‑Based Load Forecasting</li>
                <li>Low‑Power WSN for Building Energy Management</li>
                <li>Edge Computing for Real‑Time Energy Analytics</li>
                <li>ESP32 Wireless Power Monitoring with Cloud Dashboard</li>
                <li>Secure MQTT for IoT‑Enabled Energy Devices</li>
                <li>Microcontroller‑Based Power Quality Monitoring</li>
                <li>AI‑Driven IoT for Predictive Energy Maintenance</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-ecosystem">
              <h2>Mumbai’s Industrial and Academic Collaboration Ecosystem</h2>
              <p>
                Partnerships with Tata Power, Adani Electricity, Siemens, and Schneider Electric—plus IIT Bombay, VJTI, and Narpavi Research Institute—enable real deployments across apartments, campuses, industrial estates, and microgrids.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-conclusion">
              <h2>Narpavi Research Institute’s Commitment to Innovation</h2>
              <p>
                Through mentorship, labs, and industry‑academia projects, Narpavi ensures every prototype—from undergraduate PoC to doctoral deployment—addresses Mumbai’s energy and environmental challenges with reproducible, IEEE‑aligned outcomes.
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
              <li><a href="/smart-grid-communication-mumbai">Smart Grid Communication</a></li>
              <li><a href="/renewable-energy-mumbai">Renewable Energy Systems</a></li>
              <li><a href="/power-systems-mumbai">Power System Optimization</a></li>
              <li><a href="/protection-systems-mumbai">Protection & SCADA Systems</a></li>
              <li><a href="/ev-v2g-mumbai">EV Charging & V2G</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EmbeddedIoTEnergyMumbai;
