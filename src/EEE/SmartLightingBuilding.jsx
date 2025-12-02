import React from 'react';
import "./EEEProjectDevelopmentCenter.scss";
import SEO from ".././assets/SEO"
import LeftSidebar from '../LeftSidebar';
const faqs = [
  {
    question: "What hardware and platforms are recommended for smart lighting prototypes?",
    answer:
      "For quick prototyping use ESP32/ESP8266, Arduino Nano/Uno, and Raspberry Pi; for sensing use PIR, LDR, IR, ambient light and occupancy sensors; for control use PWM/0‑10V/DALI relays and triac/SSR dimmers; integrate Node‑RED/Blynk/AWS IoT for dashboards and control."
  },
  {
    question: "How do you ensure energy savings and user comfort together?",
    answer:
      "Combine occupancy sensing, daylight harvesting, schedule/scene logic, and adaptive dimming with human‑centric lighting (CCT tuning). Use ML to predict usage and tariff‑aware scheduling for peak‑shaving while preserving minimum lux levels."
  },
  {
    question: "What standards and safety considerations apply?",
    answer:
      "Follow local electrical codes, isolation practices for mains, surge protection, and dimmer EMI control. For building integration, align with BMS protocols (BACnet/Modbus), DALI/0‑10V lighting interfaces, and basic cyber‑security (TLS, signed OTA, RBAC)."
  },
  {
    question: "How are projects aligned to IEEE publication quality?",
    answer:
      "Define KPIs (kWh savings, peak demand reduction, maintained illuminance, user comfort CSAT, MTBF), use A/B baselines, log datasets, and document methods and ablations in an IEEE‑style manuscript with reproducible scripts."
  },
  {
    question: "Can solutions scale from flats to campuses?",
    answer:
      "Yes—start with room‑level nodes, then zone controllers and gateways (Edge + Cloud). Use topic hierarchies in MQTT, device twins, and policy‑based schedules to scale across floors, buildings, and multi‑site campuses."
  }
];
const keywords = [
  "Smart Lighting Mumbai",
  "Building Energy Automation Mumbai",
  "IoT Lighting Control ESP32",
  "Occupancy Daylight Control",
  "DALI 0-10V Dimming",
  "Human Centric Lighting AI",
  "Predictive Maintenance ML",
  "AWS IoT NodeRED Blynk",
  "BACnet Modbus BMS Integration",
  "IEEE Smart Building Projects 2023 2025"
];

const SmartLightingEnergyAutomationMumbai = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
       <SEO
        title="Smart Lighting & Building Energy Automation Projects in Mumbai | IoT, AI, DALI, BMS, IEEE 2023–2025"
        description="Smart Lighting and Building Energy Automation projects in Mumbai for B.Tech, M.Tech, and Ph.D. students. Focus on IoT lighting, occupancy control, DALI/0-10V dimming, cloud dashboards, human-centric lighting, and ML-based energy optimization aligned with IEEE standards."
        url="/eee/smart-lighting-building"
        keywords={keywords}
        faqs={faqs}
      />
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <LeftSidebar/>
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ECE Smart Lighting Mumbai</li>
              <li>Building Energy Automation</li>
              <li>ESP32 MQTT Node‑RED</li>
              <li>Occupancy Daylight Control</li>
              <li>DALI 0‑10V Dimming</li>
              <li>Human‑Centric Lighting</li>
              <li>Predictive Maintenance ML</li>
              <li>AWS IoT Blynk Dashboards</li>
              <li>BACnet Modbus BMS</li>
              <li>IEEE Building Energy 2023–2025</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Smart Lighting & Building Energy Automation – Mumbai Project Development Center</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — Smart Lighting & Building Energy Automation blends embedded control, IoT, and ML to deliver adaptive dimming, occupancy‑aware control, and predictive maintenance for Mumbai’s commercial and residential spaces. At Narpavi Research Institute, projects cover sensor‑driven lighting, tariff‑aware scheduling, and cloud analytics to achieve sustainability, efficiency, and user comfort.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-ecosystem">
              <h2>Lighting the future in Mumbai</h2>
              <p>
                With booming smart offices and high‑rise housing, the city is moving from manual switching to autonomous, sensor‑driven lighting. Prototypes at the Mumbai center use ESP32/Arduino/Raspberry Pi with LDR/PIR networks, Node‑RED pipelines, and cloud dashboards to model automated scenes, daylight harvesting, and energy reporting.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative technology–industry table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology focus</th>
                      <th>Industrial application (Mumbai)</th>
                      <th>Tools / platforms</th>
                      <th>Collaborating entities (examples)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IoT‑based smart lighting</td>
                      <td>Offices, tech parks</td>
                      <td>ESP32, Node‑RED, MQTT</td>
                      <td>Smart city and automation integrators</td>
                    </tr>
                    <tr>
                      <td>Occupancy‑based automation</td>
                      <td>Residential & commercial</td>
                      <td>PIR sensors, Arduino</td>
                      <td>Real‑estate and smart‑home programs</td>
                    </tr>
                    <tr>
                      <td>Daylight & luminance control</td>
                      <td>Green buildings, campuses</td>
                      <td>LDR sensors, Raspberry Pi</td>
                      <td>Sustainability and LEED/GRIHA projects</td>
                    </tr>
                    <tr>
                      <td>Cloud energy management</td>
                      <td>Corporate facilities & malls</td>
                      <td>AWS IoT, Blynk</td>
                      <td>BMS/EMS vendors and FM partners</td>
                    </tr>
                    <tr>
                      <td>Predictive lighting maintenance</td>
                      <td>Smart campuses & metros</td>
                      <td>Python, TensorFlow (ML)</td>
                      <td>Academic labs and city programs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The mapping shows how sensing, control, and analytics align with Mumbai’s smart‑building deployments and certification goals.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-cycle">
              <h2>B.Tech project cycle — Smart lighting foundations</h2>
              <p>
                Objective: introduce IoT‑based lighting automation with sensors and microcontrollers; deliver working demos with dashboards and schedules.
              </p>
              <ul>
                <li><strong>Phase 1</strong> — Hardware prototyping with LDR, PIR, IR; PWM dimming of LED drivers.</li>
                <li><strong>Phase 2</strong> — IoT communication via MQTT/HTTP; device topics, secure credentials.</li>
                <li><strong>Phase 3</strong> — Cloud/mobile dashboards for scenes, timers, and alerts.</li>
              </ul>
              <p>
                Example projects: IoT smart lighting with ESP32, occupancy‑triggered apartment lighting, energy‑efficient classroom lighting.
              </p>

              <h2>M.Tech project cycle — AI/ML for lighting control</h2>
              <p>
                Objective: predictive, tariff‑aware, and human‑centric lighting using data‑driven models; integrate renewables and BMS where relevant.
              </p>
              <ul>
                <li><strong>Phase 1</strong> — Dataset generation and cleansing from multi‑sensor networks.</li>
                <li><strong>Phase 2</strong> — ML‑based predictive dimming and occupancy forecasting.</li>
                <li><strong>Phase 3</strong> — Integration with PV/ESS and demand‑response schedules.</li>
              </ul>
              <p>
                Example projects: AI adaptive dimming, ML energy optimization for smart buildings, predictive corporate lighting automation.
              </p>

              <h2>Ph.D. research cycle — Intelligent infrastructure</h2>
              <p>
                Objective: scalable frameworks for edge‑intelligent buildings and district‑level energy orchestration with robust KPIs and policy compliance.
              </p>
              <ul>
                <li><strong>Phase 1</strong> — Edge‑AI and decentralized control for building clusters.</li>
                <li><strong>Phase 2</strong> — Energy analytics and optimization algorithms across zones.</li>
                <li><strong>Phase 3</strong> — City‑grid integration for smart districts and DR participation.</li>
              </ul>
              <p>
                Example projects: deep RL for lighting efficiency, edge‑AI automation framework, urban lighting optimization with IoT + ML.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑aligned project titles (2023–2025)</h2>
              <ul>
                <li>IoT‑Based Smart Lighting Control for Energy‑Efficient Buildings</li>
                <li>ML Model for Occupancy‑Based Illumination Control</li>
                <li>Cloud‑Connected Lighting Automation via MQTT</li>
                <li>Energy Management with Adaptive Dimming Control</li>
                <li>AI‑Driven Lighting Optimization for Commercial Buildings in Mumbai</li>
                <li>Wireless Sensor‑Based Smart Lighting Network Using ESP32</li>
                <li>Edge‑Enabled Smart Lighting for IoT Buildings</li>
                <li>Real‑Time Lighting Data Visualization and Control Dashboard</li>
              </ul>
              <p>
                Titles are scoped for reproducible experiments, A/B baselines, and IEEE‑style reporting with shared datasets.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-conclusion">
              <h2>Industrial & research integration</h2>
              <p>
                Projects align with green certifications (LEED/GRIHA) and partner ecosystems for deployment across offices, malls, and housing. Students gain hands‑on exposure to BMS integration, energy analytics, and predictive maintenance workflows for measurable kWh savings and comfort gains.
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

export default SmartLightingEnergyAutomationMumbai;

