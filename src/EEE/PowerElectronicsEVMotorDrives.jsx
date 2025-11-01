import React from 'react';
import "./EEEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which devices and platforms are best for Mumbai’s EV drives?",
    answer:
      "Use SiC/GaN for high-frequency, high-efficiency traction inverters; pair with DSP/MCU (TI C2000) or FPGA for control; simulate in MATLAB/Simulink or PSIM; validate with HIL benches; design thermal paths for humid, coastal operation."
  },
  {
    question: "How to manage regenerative braking in congested traffic?",
    answer:
      "Adopt field‑oriented control with torque‑demand blending, DC‑link energy buffering, and battery/BMS constraints; tune decel thresholds and anti‑lock strategies; log recovered energy and thermal rise to refine drive profiles."
  },
  {
    question: "What KPIs should be tracked for EV motor drives?",
    answer:
      "Inverter efficiency vs. load/speed, torque ripple, transient response, THD, switching/thermal losses, SOH/SOC impact, and Wh/km in Mumbai’s stop‑go traffic; include humidity/temperature derating and enclosure IP considerations."
  },
  {
    question: "How are IEEE requirements reflected in student projects?",
    answer:
      "Define baselines, publish test protocols (city/traffic cycles), report uncertainty, provide reproducible models/firmware, and include ablation studies on modulation schemes, device choices, and cooling strategies."
  },
  {
    question: "Can projects integrate V2G and grid services?",
    answer:
      "Yes—use bidirectional chargers, grid‑tie controls, and tariff/DR logic; ensure islanding protection, EMI/EMC compliance, and secure comms for metering and dispatch."
  }
];

const PowerElectronicsEVMotorDrivesMumbai = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ECE EV Motor Drives</li>
              <li>SiC GaN Traction Inverters</li>
              <li>FOC & SVPWM Control</li>
              <li>BLDC PMSM Controllers</li>
              <li>Bidirectional DC‑DC</li>
              <li>HIL Testing for EV</li>
              <li>Battery Management Systems</li>
              <li>Vehicle‑to‑Grid (V2G)</li>
              <li>PSIM MATLAB Simulink</li>
              <li>IEEE EV Drives 2023–2025</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Power Electronics for EV Motor Drives (Mumbai‑Based)</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — EV motor drives couple high‑efficiency power conversion with precise control for torque, speed, and regenerative braking. In Mumbai’s dense, humid, and stop‑go environment, power electronics tailored to local duty cycles underpin e‑bikes, e‑autos, buses, and private fleets—advancing sustainable, grid‑friendly mobility.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-ecosystem">
              <h2>Mumbai relevance</h2>
              <p>
                City‑specific drives must handle voltage dips, thermal/humidity stress, and frequent transients. Projects at the center optimize traction inverters, DC‑DC stages, wide‑bandgap devices, and hybrid energy management to reduce Wh/km, boost reliability, and enable smart charging and V2G participation.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative technology–industry table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology area</th>
                      <th>Industry application (Mumbai)</th>
                      <th>Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>DC–DC converters</td>
                      <td>E‑bike charging, battery balancing</td>
                      <td>High reliability with fluctuating supply</td>
                    </tr>
                    <tr>
                      <td>Inverter design</td>
                      <td>Metro/e‑bus traction drives</td>
                      <td>Efficient traction + regenerative capture</td>
                    </tr>
                    <tr>
                      <td>BLDC & PMSM controllers</td>
                      <td>E‑autos, scooters</td>
                      <td>High torque and reduced losses</td>
                    </tr>
                    <tr>
                      <td>Battery management systems</td>
                      <td>Malls/complex EV stations</td>
                      <td>Safety and extended pack life</td>
                    </tr>
                    <tr>
                      <td>Vehicle‑to‑Grid (V2G)</td>
                      <td>Urban substation integration</td>
                      <td>Bidirectional power for DR</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The matrix aligns converter and controller choices with Mumbai’s traction, charging, and grid‑interaction needs.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-cycle">
              <h2>B.Tech project cycle — application‑oriented development</h2>
              <p>
                Foundations in circuit simulation, prototyping, and drive testing under realistic thermal and traffic profiles.
              </p>
              <ul>
                <li><strong>Problem identification</strong> — Losses in e‑auto/scooter drives.</li>
                <li><strong>Design & simulation</strong> — Inverters/converters in MATLAB/PSIM.</li>
                <li><strong>Prototype development</strong> — Small‑scale drive with motor + battery.</li>
                <li><strong>Testing & optimization</strong> — Efficiency, temperature, torque response.</li>
              </ul>
              <p>
                Example projects: bidirectional DC–DC for e‑bike charging; IoT‑enabled BLDC control; regenerative braking for e‑autos.
              </p>

              <h2>M.Tech project cycle — advanced control & integration</h2>
              <p>
                Control algorithms on DSP/FPGA with HIL validation for stop‑go traffic and environmental stress.
              </p>
              <ul>
                <li><strong>Advanced simulation</strong> — PWM with SVPWM/DPWM and FOC.</li>
                <li><strong>HIL testing</strong> — Drive cycles, fault insertions, humidity/derating.</li>
                <li><strong>Control development</strong> — DSP/FPGA implementation.</li>
                <li><strong>Validation</strong> — Load variability, thermal robustness, EMI/EMC basics.</li>
              </ul>
              <p>
                Example projects: DSP‑controlled inverter for e‑bus traction; fuzzy logic PMSM for e‑rickshaws; AI‑based converter fault detection.
              </p>

              <h2>Ph.D. project cycle — research & innovation</h2>
              <p>
                Grid‑integration, WBG devices, and predictive analytics with industrial collaboration and city‑scale scenarios.
              </p>
              <ul>
                <li><strong>WBG modules</strong> — SiC/GaN packaging, fast gate drivers.</li>
                <li><strong>Adaptive control</strong> — Learning‑based regenerative strategies.</li>
                <li><strong>Smart charging & V2G</strong> — Bi‑directional converters and DR logic.</li>
                <li><strong>Prognostics</strong> — Deep learning on motor/converter telemetry.</li>
              </ul>
              <p>
                Example topics: SiC/GaN power modules for coastal EV/marine; neural predictive control in regen; V2G grid‑tied chargers.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑aligned project titles (2023–2025)</h2>
              <ul>
                <li>Intelligent Vector Control for PMSM Drives in Urban E‑Mobility</li>
                <li>Grid‑Tied EV Charger Design with Bidirectional Energy Flow</li>
                <li>Predictive Maintenance Framework for EV Power Converters</li>
                <li>Fuzzy‑Optimized BLDC Drive for Mumbai E‑Bike Networks</li>
                <li>Multi‑Level Inverter for Heavy EV Traction Applications</li>
              </ul>
              <p>
                Titles are scoped for reproducible simulations, HIL evidence, and IEEE‑style reporting with uncertainty analysis.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-conclusion">
              <h2>Industrial integration & impact</h2>
              <p>
                By bridging power electronics, embedded control, and grid services, the center supports Mumbai’s e‑mobility goals with city‑ready drive systems. Students build deployable solutions for local fleets and charging networks with measurable efficiency and reliability gains.
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
              <li><a href="/communication-systems-mumbai">Communication Systems</a></li>
              <li><a href="/renewable-energy-mumbai">Renewable Energy</a></li>
              <li><a href="/condition-monitoring-mumbai">Condition Monitoring</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PowerElectronicsEVMotorDrivesMumbai;

