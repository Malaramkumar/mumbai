import React from 'react';
import "./EEEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which AI techniques are most impactful for Mumbai’s grids?",
    answer:
      "ANN/CNN/RNN for load and renewable forecasting, SVM and anomaly detection for substation fault classification, fuzzy–PID for voltage and power quality control, and reinforcement learning for optimal dispatch and microgrid control under dynamic demand."
  },
  {
    question: "How to ensure data quality and model robustness?",
    answer:
      "Use rigorous data validation, outlier handling, weather/calendar features, domain constraints, drift monitoring, and backtesting across multiple seasons. Maintain model/version lineage and add uncertainty bands to operational dashboards."
  },
  {
    question: "What KPIs should be tracked to prove value?",
    answer:
      "Forecast MAPE/MAE, outage prediction precision/recall, voltage deviation reduction, loss reduction, response latency, and cost/CO2 savings. For control, track stability margins, constraint violations, and curtailment avoided."
  },
  {
    question: "How to integrate AI with legacy SCADA/EMS/DMS?",
    answer:
      "Expose AI services via secure APIs, use message buses for streaming telemetry, mirror control setpoints in a sandbox, and deploy in advisory mode before closing the loop with guardrails and operator overrides."
  },
  {
    question: "What deliverables are expected per academic level?",
    answer:
      "B.Tech: dataset + baseline model + IEEE‑style report; M.Tech: advanced models + HIL/control co‑simulation + benchmarking + publication draft; Ph.D.: novel AI‑control frameworks + robustness proofs + real‑time prototypes + open artifacts."
  }
];

const AIPowerControlMumbai = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ECE AI in Power Systems</li>
              <li>Smart Grid AI Mumbai</li>
              <li>Load Forecasting ANN/CNN</li>
              <li>Fuzzy–PID Voltage Control</li>
              <li>RL for Grid Optimization</li>
              <li>SVM Fault Classification</li>
              <li>Microgrid AI Control</li>
              <li>ETAP MATLAB TensorFlow</li>
              <li>HIL Real‑Time Control</li>
              <li>IEEE Power AI 2023–2025</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Artificial Intelligence in Power & Control Systems (Mumbai‑Based)</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — This domain merges intelligent algorithms with control design, optimization, and fault analysis for resilient power operations. In Mumbai’s coastal, high‑demand context, AI elevates grid forecasting, dynamic fault detection, and predictive maintenance across utilities, industries, and smart buildings while aligning with contemporary IEEE practices.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-ecosystem">
              <h2>Applications in Mumbai’s power sector</h2>
              <p>
                Core applications include AI‑based load forecasting, substation fault diagnosis, adaptive control in microgrids/HVDC/distribution, and smart automation in industrial/building systems. Reinforcement learning supports renewable integration and dispatch optimization for utilities and large campuses.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative technology–industry table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>AI technique / model</th>
                      <th>Application area (Mumbai)</th>
                      <th>Core tools / platforms</th>
                      <th>Emerging focus (2023–2025)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Artificial neural networks</td>
                      <td>Load forecasting & demand prediction</td>
                      <td>MATLAB, Python, TensorFlow</td>
                      <td>Hybrid short‑/long‑term forecasting</td>
                    </tr>
                    <tr>
                      <td>Fuzzy logic systems</td>
                      <td>Voltage stability & power quality</td>
                      <td>Simulink, LabVIEW</td>
                      <td>Adaptive fuzzy hybrid controllers</td>
                    </tr>
                    <tr>
                      <td>Reinforcement learning</td>
                      <td>Real‑time control optimization</td>
                      <td>Python, RL Toolbox</td>
                      <td>Grid‑tied AI controllers</td>
                    </tr>
                    <tr>
                      <td>Support vector machines</td>
                      <td>Fault classification in substations</td>
                      <td>MATLAB, scikit‑learn</td>
                      <td>High‑dimensional recognition</td>
                    </tr>
                    <tr>
                      <td>Deep learning (CNN/RNN)</td>
                      <td>Renewable & microgrid management</td>
                      <td>TensorFlow, PyTorch</td>
                      <td>Predictive energy analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The mapping aligns model families with grid operations, protection, and optimization needs for Mumbai’s utilities and industries.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-cycle">
              <h2>B.Tech project development cycle</h2>
              <p>
                Foundations in AI‑assisted control and forecasting with simulation and small‑scale prototypes for urban power use‑cases.
              </p>
              <ul>
                <li><strong>Topic selection</strong> — Forecasting or predictive maintenance in Mumbai grids.</li>
                <li><strong>Data acquisition</strong> — Real‑time or open datasets with weather/calendar features.</li>
                <li><strong>Model development</strong> — ANN/fuzzy controllers in MATLAB/Python.</li>
                <li><strong>Testing & simulation</strong> — Variable loads, voltage deviations, and contingencies.</li>
                <li><strong>Documentation</strong> — IEEE‑style report with reproducible code.</li>
              </ul>
              <p>
                Sample projects: ANN short‑term load forecasting; AI fault detection for substations; fuzzy‑controlled apartment power distribution.
              </p>

              <h2>M.Tech project development cycle</h2>
              <p>
                Advanced AI models, robust optimization, and HIL/control co‑simulation with comparative studies vs. classical control.
              </p>
              <ul>
                <li><strong>Problem identification</strong> — Real control optimization needs in Mumbai networks.</li>
                <li><strong>Algorithm design</strong> — Deep nets or RL agents with safety constraints.</li>
                <li><strong>Simulation & validation</strong> — MATLAB/ETAP/TensorFlow experiments.</li>
                <li><strong>System optimization</strong> — Compare AI vs. PID/OPF baselines.</li>
                <li><strong>Publication</strong> — IEEE paper draft and artifact package.</li>
              </ul>
              <p>
                Sample projects: RL‑based optimal load management; DNN power quality monitoring in coastal environments; fuzzy–PID hybrid for renewable tie‑in.
              </p>

              <h2>Ph.D. project development cycle</h2>
              <p>
                Next‑gen adaptive frameworks merging predictive analytics, autonomous control, and real‑time optimization with field evidence.
              </p>
              <ul>
                <li><strong>Gap identification</strong> — Reliability, explainability, rare‑event handling.</li>
                <li><strong>Modeling & simulation</strong> — Hybrid AI + system dynamics and formal safety checks.</li>
                <li><strong>HIL implementation</strong> — Real‑time controllers with cyber‑secure interfaces.</li>
                <li><strong>Optimization & testing</strong> — Robustness to noise, delay, nonlinearity.</li>
                <li><strong>Dissemination</strong> — High‑impact IEEE journals and open datasets.</li>
              </ul>
              <p>
                Sample topics: adaptive deep RL for grid control; AI anomaly detection in renewable substations; hybrid neuro‑fuzzy regulation.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑aligned project titles (2023–2025)</h2>
              <ul>
                <li>AI‑Driven Fault Detection and Control Optimization in Mumbai Power Systems</li>
                <li>Deep Reinforcement Learning for Energy Load Balancing in Smart Grids</li>
                <li>Predictive Maintenance and Fault Classification Using CNN in Distribution</li>
                <li>Intelligent Voltage Regulation via Adaptive AI Controllers</li>
                <li>Real‑Time Forecasting and Anomaly Detection in Urban Grids</li>
              </ul>
              <p>
                Titles are scoped for rigorous baselines, uncertainty reporting, and reproducible artifacts aligned with IEEE expectations.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-conclusion">
              <h2>Integration & impact in Mumbai</h2>
              <p>
                AI bridges classical grid operations with next‑generation automation for utilities and large consumers. With advisory‑mode deployments, guardrails, and operator workflows, projects mature from sandbox to real‑time control, improving reliability, efficiency, and sustainability in the city’s energy ecosystem.
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
              <li><a href="/renewable-energy-mumbai">Renewable Energy</a></li>
              <li><a href="/embedded-systems-mumbai">Embedded Systems</a></li>
              <li><a href="/communication-systems-mumbai">Communication Systems</a></li>
              <li><a href="/cyber-physical-systems-mumbai">Cyber‑Physical Systems</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIPowerControlMumbai;

