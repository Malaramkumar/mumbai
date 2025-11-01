import React from 'react';
import "./ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which hardware platforms and sensors are recommended for IoMT prototypes?",
    answer:
      "Common choices include Arduino Nano BLE and ESP32 for wireless stacks, AD8232 for ECG, MAX30102/MAX30105 for SpO2/PPG, DS18B20/MLX90614 for temperature, and BP modules with I2C/SPI bridges; for gateways, use Raspberry Pi with secure TLS MQTT."
  },
  {
    question: "How is security and privacy handled in student IoMT projects?",
    answer:
      "Use TLS over MQTT/HTTPS, signed firmware/OTA, encrypted local storage, role‑based access on cloud dashboards, and de‑identification of datasets. Follow HIPAA‑like and GDPR principles for consent, purpose limitation, and retention."
  },
  {
    question: "Can projects integrate AI for diagnostics on-device?",
    answer:
      "Yes—tiny models (e.g., 1D‑CNN, LSTM‑lite) can run via TensorFlow Lite Micro or CMSIS‑NN for beat detection, arrhythmia cues, or motion artifact rejection, offloading only summaries to the cloud to reduce bandwidth and preserve privacy."
  },
  {
    question: "What clinical validation is expected for capstone projects?",
    answer:
      "Begin with simulator traces or public datasets, then run lab tests against certified reference instruments for accuracy, drift, and latency. Any clinical trials require ethics approval and a partner hospital’s oversight."
  },
  {
    question: "How are IEEE publication standards incorporated?",
    answer:
      "Each project maintains versioned code/data, declares KPIs (accuracy, sensitivity/specificity, latency, uptime), documents protocols, and reports ablations and failure modes in IEEE‑style manuscripts."
  }
];

const IoMTMumbai = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ECE Internet of Medical Things</li>
              <li>Wearable Health Monitoring</li>
              <li>ECG SpO2 IoT Devices</li>
              <li>Secure Medical IoT</li>
              <li>Edge AI in Healthcare</li>
              <li>Remote Patient Monitoring</li>
              <li>Medical Data Analytics</li>
              <li>IEEE IoMT 2023–2025</li>
              <li>BLE & Wi‑Fi Health Nodes</li>
              <li>IoMT Cloud Dashboards</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Internet of Medical Things (IoMT) – Project Development Center (Mumbai-Based)</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — IoMT fuses biomedical instrumentation, secure connectivity, and cloud analytics to enable preventive care, diagnosis, and remote management. In Mumbai’s healthcare ecosystem, hospitals and startups adopt IoMT for continuous monitoring and decision support. The center supports B.Tech, M.Tech, and Ph.D. students with hardware–software co‑development aligned to IEEE practices and clinical workflows.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-ecosystem">
              <h2>Mumbai healthcare context</h2>
              <p>
                With strong clinical partners and med‑tech startups, teams can prototype wearable ECG/SpO2/temp/BP devices, implement secure gateways, and validate analytics pipelines. Typical stacks: Arduino Nano BLE, ESP32, Raspberry Pi, AD8232 ECG, MAX30102 PPG, and HIPAA‑like privacy controls with audited cloud traces.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative technology–industry table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>IoMT technology</th>
                      <th>Industry / sector</th>
                      <th>Purpose / functionality</th>
                      <th>Adoption (Mumbai)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Wearable ECG monitoring</td>
                      <td>Hospitals & clinics</td>
                      <td>Continuous HR/ECG acquisition</td>
                      <td>Wide</td>
                    </tr>
                    <tr>
                      <td>Cloud glucose monitoring</td>
                      <td>Diabetes management</td>
                      <td>Real‑time glucose tracking</td>
                      <td>Strong</td>
                    </tr>
                    <tr>
                      <td>AI‑integrated sensors</td>
                      <td>Diagnostics centers</td>
                      <td>Early disease detection</td>
                      <td>Rapid</td>
                    </tr>
                    <tr>
                      <td>ESP32 wireless health nodes</td>
                      <td>Remote monitoring</td>
                      <td>Realtime physiological telemetry</td>
                      <td>Broad</td>
                    </tr>
                    <tr>
                      <td>BLE wearables</td>
                      <td>Fitness & wellness</td>
                      <td>Vitals & activity monitoring</td>
                      <td>High</td>
                    </tr>
                    <tr>
                      <td>IoMT analytics platforms</td>
                      <td>Public health</td>
                      <td>Population‑level insights</td>
                      <td>Growing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The mapping aligns sensor modalities, connectivity, and analytics with Mumbai’s clinical and wellness deployments.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-cycle">
              <h2>B.Tech project development cycle</h2>
              <p>
                Fundamentals of biomedical sensing, microcontroller wireless stacks, and dashboard analytics with secure data paths.
              </p>
              <ul>
                <li><strong>Problem & topic</strong> — Select a clinically relevant use‑case (ECG, temp, SpO2) with IEEE‑aligned scope.</li>
                <li><strong>Sensor & MCU</strong> — AD8232 ECG, temp/SpO2, Arduino Nano BLE/ESP32 bring‑up, calibration.</li>
                <li><strong>Data link</strong> — Wi‑Fi or BLE; MQTT/HTTPS with TLS and device auth.</li>
                <li><strong>Dashboard</strong> — Web/mobile charts, alerts, role‑based access.</li>
                <li><strong>Testing</strong> — Simulated traces, basic accuracy/latency, unit tests.</li>
              </ul>
              <p>
                Outcome: working IoMT prototype with reproducible build and basic safety/privacy posture.
              </p>

              <h2>M.Tech project development cycle</h2>
              <p>
                Multi‑sensor integration, predictive analytics, secure cloud, and compliance‑aware design.
              </p>
              <ul>
                <li><strong>Design & simulation</strong> — Multi‑node networks; noise/artifact handling and data fusion.</li>
                <li><strong>ML integration</strong> — Risk scoring, anomaly detection, trend modeling.</li>
                <li><strong>Cloud & APIs</strong> — AWS IoT Core/Firebase; audit logs, encryption, and rotation.</li>
                <li><strong>Privacy & compliance</strong> — Consent flows, retention policies, de‑identification.</li>
                <li><strong>Validation</strong> — Benchmarks vs. references; IEEE‑style paper draft.</li>
              </ul>
              <p>
                Outcome: deployable system design with measurable clinical utility proxies and security controls.
              </p>

              <h2>Ph.D. project development cycle</h2>
              <p>
                New architectures for predictive care, secure data exchange, and cross‑facility interoperability.
              </p>
              <ul>
                <li><strong>Gaps & architecture</strong> — AI interpretation of biomedical signals; interoperable IoMT gateways.</li>
                <li><strong>Algorithms</strong> — Multi‑sensor fusion, edge inference, privacy‑preserving learning.</li>
                <li><strong>Implementation</strong> — ESP32 + edge ML; blockchain/EHR integration where justified.</li>
                <li><strong>Evaluation</strong> — Sensitivity/specificity, latency, uptime, drift, and robustness.</li>
                <li><strong>Outcome</strong> — IEEE publications, patentable modules, and clinical partner pilots.</li>
              </ul>
              <p>
                Outcome: research‑grade systems with defensible metrics and reproducible artifacts.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑aligned project titles</h2>
              <ul>
                <li>Smart ECG Monitoring with AD8232 over BLE</li>
                <li>ESP32 Real‑Time Health Telemetry with Cloud Analytics</li>
                <li>AI‑Enabled Wearable for Continuous Temperature Monitoring</li>
                <li>Multi‑Sensor IoMT Network for Cardio‑Respiratory Analysis</li>
                <li>Secure Cloud Framework for Medical Data Management</li>
                <li>Remote Patient Monitoring with Predictive Analytics</li>
                <li>Gesture‑Controlled IoMT Assistive Device</li>
                <li>Energy‑Efficient IoMT Node for Wearables</li>
                <li>Edge‑Enabled Health Data Transmission Architecture</li>
                <li>Intelligent IoMT Gateway for Hospital Patient Management</li>
              </ul>
              <p>
                Titles are scoped for clinical relevance, reproducibility, and pathway to publication or pilot.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-conclusion">
              <h2>Conclusion</h2>
              <p>
                By combining validated sensors, secure connectivity, and analytics, the center enables safe, scalable IoMT solutions. Students progress from clean data capture to privacy‑aware dashboards and predictive models, building systems that are both IEEE‑aligned and clinically meaningful in Mumbai’s ecosystem.
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
              <li><a href="/ai-ml-electronics-mumbai">AI & ML in Electronics</a></li>
              <li><a href="/communication-systems-mumbai">Communication Systems</a></li>
              <li><a href="/signal-processing-mumbai">Signal Processing</a></li>
              <li><a href="/power-electronics-mumbai">Power Electronics</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IoMTMumbai;

