import React from 'react';
import "./EEEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which sensors and platforms are best to start with in Mumbai’s industrial context?",
    answer:
      "Begin with MEMS accelerometers (IEPE or industrial MEMS) for vibration, DS18B20/PT100 for temperature, current transformers/Hall sensors for electrical signature, and microphones/ultrasonic transducers for acoustics. Use ESP32/Raspberry Pi or NI DAQ for acquisition, and MQTT/HTTPS to stream to dashboards."
  },
  {
    question: "How should data be labeled for fault diagnosis models?",
    answer:
      "Use baseline healthy runs, seeded faults (misalignment, imbalance, bearing wear), and maintenance logs as weak labels. Segment streams into windows with overlap, compute features (RMS, kurtosis, crest factor, spectral peaks), and maintain versioned datasets with metadata (load, speed, environment)."
  },
  {
    question: "What KPIs should be tracked to prove value?",
    answer:
      "Track unplanned downtime reduction, mean time between failures (MTBF) uplift, advance warning lead time, diagnostic accuracy (precision/recall), energy anomalies detected, and maintenance cost savings. Log detection-to-action latency for operational readiness."
  },
  {
    question: "How to make edge systems robust on noisy factory floors?",
    answer:
      "Add anti-aliasing filters, shielded cabling, surge protection, synchronized sampling, watchdog resets, and local buffering during network loss. Implement OTA with signed firmware and TLS, plus configurable thresholds for on-edge alarms."
  },
  {
    question: "How to align projects with IEEE publication quality?",
    answer:
      "Define a clear protocol, baselines (traditional FFT features and SVM), ablations for sensors/features, cross-plant generalization tests, and provide an IEEE-style manuscript with reproducible scripts, model cards, and dataset statements."
  }
];

const ConditionMonitoringFaultDiagnosisMumbai = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ECE Condition Monitoring</li>
              <li>Fault Diagnosis Mumbai</li>
              <li>Vibration Analysis DSP</li>
              <li>Electrical Signature Analysis</li>
              <li>Thermal & Acoustic Sensing</li>
              <li>Edge AI Predictive Maintenance</li>
              <li>ESP32 Raspberry Pi IIoT</li>
              <li>MATLAB LabVIEW Analytics</li>
              <li>Digital Twin Maintenance</li>
              <li>IEEE Predictive 2023–2025</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Condition Monitoring & Fault Diagnosis of Machines – Mumbai Project Development Center</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — This center advances AI‑, IoT‑, and signal‑processing‑driven diagnostics for motors, pumps, gearboxes, fans, marine drives, and rail equipment. In Mumbai’s manufacturing, metro, port, and power ecosystems, teams implement vibration, electrical, thermal, and acoustic analytics to detect, classify, and predict faults, aligned with IEEE 2023–2025 practices.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-ecosystem">
              <h2>Relevance to Mumbai industries</h2>
              <p>
                With continuous operations across Navi Mumbai MIDC, Bhiwandi logistics corridors, MbPT/JNPT ports, power plants, and metro lines, predictive maintenance reduces downtime and improves safety. Projects focus on condition‑based maintenance in coastal and high‑duty environments with edge analytics and cloud dashboards.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative technology–industry table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology area</th>
                      <th>Industrial application (Mumbai)</th>
                      <th>Core tools / platforms</th>
                      <th>Emerging research trends</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vibration monitoring</td>
                      <td>Manufacturing & marine equipment</td>
                      <td>MATLAB, LabVIEW, FFT analyzers</td>
                      <td>Deep learning for pattern recognition</td>
                    </tr>
                    <tr>
                      <td>Electrical fault detection</td>
                      <td>Motors, pumps, transformers</td>
                      <td>Arduino/DAQ, DSP, Python</td>
                      <td>AI‑enabled predictive diagnosis</td>
                    </tr>
                    <tr>
                      <td>IoT condition monitoring</td>
                      <td>Smart factories & metro</td>
                      <td>ESP32, Node‑RED, ThingSpeak</td>
                      <td>Cloud‑linked predictive maintenance</td>
                    </tr>
                    <tr>
                      <td>Thermal & acoustic sensing</td>
                      <td>Energy systems & HVAC</td>
                      <td>FLIR, MEMS microphones</td>
                      <td>Multimodal condition analysis</td>
                    </tr>
                    <tr>
                      <td>Edge analytics & ML</td>
                      <td>Port machinery & manufacturing</td>
                      <td>TensorFlow, Raspberry Pi</td>
                      <td>Edge AI real‑time classification</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The matrix connects sensing modalities and analytics with Mumbai’s 24×7 industrial operations for measurable uptime gains.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-cycle">
              <h2>B.Tech project development cycle</h2>
              <p>
                Fundamentals of sensor‑based data capture, feature engineering, and basic fault inference with embedded/IoT workflows.
              </p>
              <ul>
                <li><strong>Problem identification</strong> — Choose target assets (motor, pump, blower).</li>
                <li><strong>Sensor deployment</strong> — Accelerometers, temperature, current, microphones.</li>
                <li><strong>Acquisition & preprocessing</strong> — Arduino/Raspberry Pi/NI DAQ; filtering, windowing.</li>
                <li><strong>Fault analysis</strong> — MATLAB/LabVIEW dashboards; thresholds and simple ML.</li>
                <li><strong>Documentation</strong> — IEEE‑style report with datasets and scripts.</li>
              </ul>
              <p>
                Sample projects: IoT vibration monitoring for motors, acoustic/temperature‑based health units, embedded motor fault alarms, port equipment alert systems.
              </p>

              <h2>M.Tech project development cycle</h2>
              <p>
                Advanced signal processing, multi‑sensor fusion, and ML models with real‑time IIoT integration and validation.
              </p>
              <ul>
                <li><strong>Advanced acquisition</strong> — Multi‑channel wireless nodes; synchronized sampling.</li>
                <li><strong>AI model development</strong> — SVM/CNN/transformers; domain features vs. end‑to‑end.</li>
                <li><strong>System integration</strong> — Vibration + acoustic + electrical signatures.</li>
                <li><strong>Validation</strong> — Accuracy vs. industrial benchmarks; ROC/PR, confusion matrices.</li>
                <li><strong>Publication & optimization</strong> — IEEE draft; latency, power, and lead‑time tuning.</li>
              </ul>
              <p>
                Sample projects: AI predictive maintenance for metro drives, multi‑sensor fault detection for port cranes, ML monitoring of gearboxes, edge‑AI vibration for marine assets.
              </p>

              <h2>Ph.D. project development cycle</h2>
              <p>
                Multimodal deep learning, signal fusion, and digital twins with deployment across diverse plants and transport systems.
              </p>
              <ul>
                <li><strong>Research gaps</strong> — Urban industry datasets, domain shift, environmental robustness.</li>
                <li><strong>Model formulation</strong> — Hybrid models on vibration/acoustic/current streams.</li>
                <li><strong>Implementation</strong> — Edge‑cloud testbeds; streaming feature stores.</li>
                <li><strong>Evaluation</strong> — Cross‑site validation; cost‑benefit and intervention timing.</li>
                <li><strong>Dissemination</strong> — IEEE/Scopus papers, datasets, and patentable workflows.</li>
              </ul>
              <p>
                Sample topics: deep learning for coastal zones, sensor fusion for rail systems, digital twin analytics for smart manufacturing, hybrid neural models for marine drives.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑aligned project titles (2023–2025)</h2>
              <ul>
                <li>IoT‑Based Condition Monitoring of Induction Motors via Vibration Sensors</li>
                <li>ML Predictive Maintenance for Urban Substations</li>
                <li>Edge‑AI Condition Monitoring of Port Machinery in Coastal Sites</li>
                <li>Smart Fault Diagnosis Using Electrical and Acoustic Signals</li>
                <li>Digital Twin Framework for Real‑Time Condition Monitoring</li>
                <li>AI‑Driven Anomaly Detection for Rotating Equipment</li>
                <li>Wireless Sensor Network for Equipment Health Monitoring</li>
                <li>Deep Learning‑Based Fault Classification for Marine Electrical Systems</li>
              </ul>
              <p>
                Titles are scoped for reproducible datasets, cross‑site testing, and clear operational KPIs.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-conclusion">
              <h2>Industry–academia integration & impact</h2>
              <p>
                Collaborations with manufacturing, ports, power, and metro authorities enable internships, live data acquisition, and field pilots. Outcomes include reduced downtime, lower maintenance costs, and safer operations, laying the foundation for Industry 4.0 adoption across Mumbai’s industrial corridors.
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
              <li><a href="/embedded-systems-mumbai">Embedded Systems</a></li>
              <li><a href="/signal-processing-mumbai">Signal Processing</a></li>
              <li><a href="/communication-systems-mumbai">Communication Systems</a></li>
              <li><a href="/power-electronics-mumbai">Power Electronics</a></li>
              <li><a href="/cyber-physical-systems-mumbai">Cyber‑Physical Systems</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConditionMonitoringFaultDiagnosisMumbai;
