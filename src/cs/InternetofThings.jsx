import "./CSEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the Internet of Things (IoT) & Edge / Fog Computing Project Development Center offer in Mumbai?",
    answer:
      "Narpavi Research Institute’s Internet of Things (IoT) & Edge / Fog Computing Project Development Center in Mumbai supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on embedded IoT devices, sensor networks, real-time edge analytics, fog-based gateways, and secure data pipelines for smart city, healthcare, logistics, and industrial automation applications."
  },
  {
    question: "What types of IoT & Edge / Fog Computing projects are supported?",
    answer:
      "We support B.Tech projects (smart parking, water-quality monitoring), M.Tech projects (fog-enabled healthcare, AI-driven device optimization), and Ph.D. research (multi-layer IoT security, adaptive fog architectures) focused on low-latency, high-reliability systems."
  },
  {
    question: "Which tools and technologies are used in IoT & Edge / Fog Computing projects?",
    answer:
      "Our stack includes Raspberry Pi, ESP32, Arduino, MQTT, Node-RED, Docker, Kubernetes, AWS IoT, Azure IoT Hub, TensorFlow Lite, and Edge-X Foundry for rapid prototyping, deployment, and analytics."
  },
  {
    question: "How are IoT & Edge / Fog Computing projects aligned with IEEE standards?",
    answer:
      "Projects reference IEEE Internet of Things Journal, IEEE Access, and IEEE Communications standards (2023–2025) to ensure compliance with latest research and industrial practices."
  },
  {
    question: "What academic support is provided in Mumbai?",
    answer:
      "We provide end-to-end guidance: hardware selection, firmware development, cloud integration, documentation, and IEEE/Scopus/SCI journal or patent support, leveraging Mumbai’s smart-city and industrial ecosystem."
  }
];

const CSEIoTEdgeFogComputingProjectDevelopmentCenter = () => {
  return (
    <div className="CSEProjectDevelopmentCenter">
      <div className="CSEProjectDevelopmentCenter-main">
        <div className="CSEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="CSEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>IoT projects in Mumbai</li>
              <li>Edge computing research</li>
              <li>Fog computing applications</li>
              <li>Smart city IoT Mumbai</li>
              <li>IoT-based traffic monitoring</li>
              <li>Industrial IoT Mumbai</li>
              <li>Edge AI projects</li>
              <li>Fog-enabled healthcare systems</li>
              <li>IEEE IoT research papers</li>
              <li>IoT for students Mumbai</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="CSEProjectDevelopmentCenter-center">
            <h1>Internet of Things (IoT) & Edge / Fog Computing – Project Development Support in Mumbai</h1>

            {/* Introduction */}
            <section className="CSEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Internet of Things (IoT) & Edge / Fog Computing Project Development Center in Mumbai, offering IEEE-aligned (2023–2025) project support for B.Tech, M.Tech, and Ph.D. scholars.
              </p>
              <p>
                Internet of Things (IoT) & Edge / Fog Computing integrate embedded systems, sensor networks, and near-edge computing to enable real-time decision-making, efficient bandwidth use, and high reliability. In Mumbai, these technologies drive smart city infrastructure, intelligent transportation, healthcare monitoring, and Industry 4.0 automation.
              </p>
              <p>
                By moving computation closer to the data source, IoT with Edge/Fog architectures ensures ultra-low latency, enhanced data privacy, and seamless connectivity—paving the way for Mumbai’s smart and sustainable growth.
              </p>
            </section>

            {/* Applications */}
            <section className="CSEProjectDevelopmentCenter-applications">
              <h2>Applications in Mumbai Industries</h2>
              <ul>
                <li><strong>Smart City Solutions:</strong> Traffic monitoring, smart parking, street-light automation, waste-management systems.</li>
                <li><strong>Healthcare Sector:</strong> Remote patient monitoring, real-time medical device integration, predictive hospital analytics.</li>
                <li><strong>Logistics & Supply Chain:</strong> Cargo tracking sensors, temperature monitoring, real-time fleet optimization.</li>
                <li><strong>Manufacturing & Industry 4.0:</strong> Predictive maintenance, digital twins via fog nodes, process automation.</li>
                <li><strong>FinTech:</strong> Secure IoT-enabled payments with fog-based fraud detection and compliance.</li>
                <li><strong>Retail & Consumer Services:</strong> Smart kiosks, customer-tracking sensors, connected retail experiences.</li>
              </ul>
            </section>

            {/* Comparative Table */}
            <section className="CSEProjectDevelopmentCenter-table">
              <h2>Cloud vs Edge vs Fog in Mumbai Context</h2>
              <div className="CSEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Cloud Computing</th>
                      <th>Edge Computing (IoT Devices)</th>
                      <th>Fog Computing (Near-Edge Gateways)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Latency</td>
                      <td>High (distance dependent)</td>
                      <td>Ultra-low (near real-time)</td>
                      <td>Low (milliseconds)</td>
                    </tr>
                    <tr>
                      <td>Scalability</td>
                      <td>Very high</td>
                      <td>Limited by device capability</td>
                      <td>Moderate to high</td>
                    </tr>
                    <tr>
                      <td>Bandwidth Usage</td>
                      <td>High (central data transfer)</td>
                      <td>Low (local processing)</td>
                      <td>Optimized (pre-processing)</td>
                    </tr>
                    <tr>
                      <td>Data Privacy</td>
                      <td>Risky (central storage)</td>
                      <td>Safer (processed locally)</td>
                      <td>Balanced (local + distributed)</td>
                    </tr>
                    <tr>
                      <td>Typical Mumbai Use-Case</td>
                      <td>Data backup, analytics hubs</td>
                      <td>Smart traffic signals, wearables</td>
                      <td>Healthcare gateways, industrial IoT</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Project Cycles */}
            <section className="CSEProjectDevelopmentCenter-principles">
              <h2>B.Tech, M.Tech & Ph.D. Project Cycle</h2>

              <h3>B.Tech Projects</h3>
              <ul>
                <li>IoT-based smart parking system.</li>
                <li>Real-time water quality monitoring with edge devices.</li>
                <li>Traffic congestion control using sensor networks.</li>
              </ul>

              <h3>M.Tech Projects</h3>
              <ul>
                <li>Fog-enabled healthcare monitoring frameworks.</li>
                <li>AI-driven optimization of IoT devices.</li>
                <li>Secure IoT data pipelines for smart logistics.</li>
              </ul>

              <h3>Ph.D. Research</h3>
              <ul>
                <li>Multi-layer IoT security over fog networks.</li>
                <li>Urban-scale smart-city integration for Mumbai.</li>
                <li>Adaptive fog architectures for Industry 4.0.</li>
              </ul>
            </section>

            {/* IEEE Titles */}
            <section className="CSEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles</h2>
              <ul>
                <li>Real-Time Traffic Congestion Management Using Edge-Based IoT Sensors (IEEE 2024)</li>
                <li>Fog-Enabled Healthcare Monitoring Framework for Smart Hospitals (IEEE 2023)</li>
                <li>Adaptive IoT Gateway Architectures for Urban Smart Cities (IEEE 2025)</li>
                <li>Low-Latency Industrial IoT for Predictive Maintenance Using Edge AI (IEEE 2024)</li>
                <li>Energy-Efficient Data Offloading Techniques in IoT-Fog Ecosystems (IEEE 2023)</li>
              </ul>
            </section>

            {/* Conclusion */}
            <section className="CSEProjectDevelopmentCenter-conclusion">
              <h2>Conclusion</h2>
              <p>
                IoT & Edge / Fog Computing underpin Mumbai’s evolution toward a smart, sustainable metropolis. By enabling real-time analytics and reliable connectivity across healthcare, logistics, manufacturing, and urban infrastructure, this domain offers extensive research and career opportunities. Narpavi Research Institute empowers students to develop IEEE-aligned projects that drive tangible impact for industries and citizens alike.
              </p>
            </section>

            {/* FAQs */}
            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, idx) => (
                  <details key={idx}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>

              {/* FAQ Schema */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqs.map(faq => ({
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer
                      }
                    }))
                  })
                }}
              />
            </section>
          </div>

          {/* Right: Related Links */}
          <div className="CSEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/data-science-big-data-analytics-project-development">Data Science, Big Data & Analytics Project Development</a></li>
              <li><a href="/artificial-intelligence-machine-learning-project-development">Artificial Intelligence & Machine Learning (AI/ML) Project Development</a></li>
              <li><a href="/high-performance-computing-mechanical-engineering-project-development">High-Performance Computing (HPC) Project Development</a></li>
              <li><a href="/digital-twin-smart-simulation-mechanical-engineering-project-development">Digital Twin & Smart Simulation Project Development</a></li>
              <li><a href="/cybersecurity-blockchain-project-development">Cybersecurity & Blockchain Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSEIoTEdgeFogComputingProjectDevelopmentCenter;

