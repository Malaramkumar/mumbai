import "./CSEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "What services does the Cybersecurity & Privacy Project Development Center offer in Mumbai?",
    answer: "Narpavi Research Institute’s Cybersecurity & Privacy Project Development Center in Mumbai supports B.Tech, M.Tech, and Ph.D. students in developing IEEE-aligned (2023–2025) projects on secure software development, cryptographic systems, privacy-preserving ML, intrusion detection, and network security for applications in banking, healthcare, IT, government, telecom, and education."
  },
  {
    question: "What types of Cybersecurity & Privacy projects are supported?",
    answer: "We support B.Tech projects (secure chat apps, IoT intrusion detection), M.Tech projects (federated learning, AI malware detection), and Ph.D. research (post-quantum cryptography, zero-trust architectures) for applications in data protection and secure systems."
  },
  {
    question: "Which tools and technologies are used in Cybersecurity & Privacy projects?",
    answer: "Our stack includes Wireshark, Metasploit, Burp Suite, TensorFlow Privacy, Hyperledger Fabric, OpenSSL, Snort, and Python for ethical hacking, blockchain, and privacy modeling."
  },
  {
    question: "How are Cybersecurity & Privacy projects aligned with IEEE standards?",
    answer: "Projects are based on IEEE Transactions (2023–2025) on Dependable and Secure Computing, Information Forensics and Security, and Network Security, focusing on cybersecurity and privacy, aligned with IEEE standards."
  },
  {
    question: "What support is provided for academic submissions in Mumbai?",
    answer: "We offer end-to-end guidance, including topic selection, implementation, testing, documentation, and support for IEEE/Scopus/SCI journal publications and patents, with collaboration opportunities in Mumbai’s industrial ecosystem."
  }
];

const CSECybersecurityPrivacyProjectDevelopmentCenter = () => {
  return (
    <div className="CSEProjectDevelopmentCenter">
      <div className="CSEProjectDevelopmentCenter-main">
        <div className="CSEProjectDevelopmentCenter-grid">
          {/* Left: Keywords */}
          <div className="CSEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Cybersecurity projects in Mumbai</li>
              <li>Privacy-preserving machine learning</li>
              <li>Blockchain for cybersecurity</li>
              <li>AI intrusion detection Mumbai</li>
              <li>Post-quantum cryptography research</li>
              <li>Secure software development projects</li>
              <li>IEEE cybersecurity papers</li>
              <li>IoT security in Mumbai</li>
              <li>Network security projects for students</li>
              <li>Cybersecurity domain research Mumbai</li>
            </ul>
          </div>

          {/* Center: Main Content */}
          <div className="CSEProjectDevelopmentCenter-center">
            <h1>Cybersecurity & Privacy – Project Development Support in Mumbai</h1>

            <section className="CSEProjectDevelopmentCenter-intro">
              <p>
                <strong>Narpavi Research Institute</strong> presents the Cybersecurity & Privacy Project Development Center in Mumbai, a global platform for B.Tech, M.Tech, and Ph.D. students to develop IEEE-aligned (2023–2025) projects on cybersecurity technologies.
              </p>
              <p>
                Cybersecurity & Privacy is one of the most critical and fast-evolving domains in computer science, focusing on protecting digital assets, networks, and applications from malicious activities, breaches, and unauthorized access. With the exponential growth of digital transformation, cloud services, and IoT adoption in Mumbai, safeguarding data integrity, confidentiality, and availability has become indispensable.
              </p>
              <p>
                This field encompasses secure software development, cryptographic systems, privacy-preserving machine learning, intrusion detection, and advanced network security. For Mumbai’s financial services, IT hubs, healthcare institutions, and government agencies, cybersecurity & privacy is not just a necessity but the backbone of trust and resilience in the digital ecosystem.
              </p>
            </section>

            <section className="CSEProjectDevelopmentCenter-applications">
              <h2>Applications in Mumbai Industries</h2>
              <ul>
                <li><strong>Banking & FinTech:</strong> Protecting online transactions, implementing blockchain-based fraud prevention, and multi-factor authentication systems.</li>
                <li><strong>Healthcare:</strong> Ensuring secure electronic health records (EHRs), privacy-preserving AI for patient data, and intrusion detection in hospital networks.</li>
                <li><strong>IT & Software Development:</strong> Secure coding practices, automated vulnerability detection, and DevSecOps pipelines.</li>
                <li><strong>Government & Public Services:</strong> National cyber defense, secure e-governance platforms, and identity management systems (e.g., Aadhaar-based services).</li>
                <li><strong>Telecom & Internet Providers:</strong> Securing 5G/6G networks, privacy in user data, and real-time anomaly detection.</li>
                <li><strong>Education & Research:</strong> Cyber labs in Mumbai universities, ethical hacking programs, and blockchain-enabled digital credentials.</li>
              </ul>
            </section>

            <section className="CSEProjectDevelopmentCenter-table">
              <h2>Comparative Table: Cybersecurity Approaches</h2>
              <div className="CSEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Traditional Security Methods</th>
                      <th>AI-Driven Security Solutions</th>
                      <th>Blockchain & Privacy Tech</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Focus Area</td>
                      <td>Firewalls, antivirus, manual patching</td>
                      <td>Automated intrusion detection, ML-driven anomaly detection</td>
                      <td>Decentralized trust, immutable records</td>
                    </tr>
                    <tr>
                      <td>Response Speed</td>
                      <td>Moderate (human intervention needed)</td>
                      <td>High (real-time automated response)</td>
                      <td>High (consensus-based validation)</td>
                    </tr>
                    <tr>
                      <td>Scalability</td>
                      <td>Limited</td>
                      <td>Scales with data and AI models</td>
                      <td>Very high with distributed ledgers</td>
                    </tr>
                    <tr>
                      <td>Data Privacy</td>
                      <td>Low (data at risk from centralization)</td>
                      <td>Medium (depends on ML design)</td>
                      <td>High (encrypted, decentralized)</td>
                    </tr>
                    <tr>
                      <td>Use in Mumbai</td>
                      <td>Legacy IT systems in SMEs</td>
                      <td>AI-based security in IT & FinTech</td>
                      <td>Blockchain for supply chain & banking</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CSEProjectDevelopmentCenter-principles">
              <h2>B.Tech, M.Tech, and Ph.D. Project Cycle in Cybersecurity & Privacy</h2>
              <h3>B.Tech Project Cycle</h3>
              <ul>
                <li>Secure chat applications with end-to-end encryption.</li>
                <li>Intrusion detection in IoT devices.</li>
                <li>Blockchain-based digital ID system.</li>
              </ul>
              <h3>M.Tech Project Cycle</h3>
              <ul>
                <li>Privacy-preserving federated learning models.</li>
                <li>AI-driven malware detection.</li>
                <li>Secure cloud data sharing frameworks.</li>
              </ul>
              <h3>Ph.D. Project Cycle</h3>
              <ul>
                <li>Advanced cryptographic algorithms for post-quantum security.</li>
                <li>Blockchain for privacy-preserving healthcare.</li>
                <li>Zero-trust architectures for smart cities.</li>
              </ul>
            </section>

            <section className="CSEProjectDevelopmentCenter-projecttitles">
              <h2>IEEE-Aligned Project Titles</h2>
              <ul>
                <li>Privacy-Preserving Machine Learning Models for Healthcare Data (IEEE, 2024)</li>
                <li>Blockchain-Based Secure Identity Management for Smart Cities (IEEE, 2023)</li>
                <li>AI-Driven Intrusion Detection Systems for 5G Networks (IEEE, 2025)</li>
                <li>Post-Quantum Cryptography Algorithms for Cloud Applications (IEEE, 2024)</li>
                <li>Zero-Trust Network Architectures for Enterprise Security (IEEE, 2023)</li>
              </ul>
            </section>

            <section className="CSEProjectDevelopmentCenter-conclusion">
              <h2>Conclusion</h2>
              <p>
                Cybersecurity & Privacy has emerged as a cornerstone of innovation and protection in Mumbai’s rapidly digitizing industries. From banking to healthcare and from government to IT enterprises, the demand for secure systems, privacy-enhancing technologies, and resilient infrastructures continues to grow. For students and researchers at B.Tech, M.Tech, and Ph.D. levels, this field offers unlimited opportunities to address global challenges while making a local impact in Mumbai.
              </p>
            </section>

            <section className="kerala-alluniversityfaq-section">
              <h2>FAQs</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, index) => (
                  <details key={index}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>

              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map((faq) => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                      }
                    }))
                  })
                }}
              />
            </section>
          </div>

          {/* Right: Subpage Links */}
          <div className="CSEProjectDevelopmentCenter-right">
            <h3>🔗 Related Services</h3>
            <ul>
              <li><a href="/iot-edge-fog-computing-project-development">Internet of Things (IoT) & Edge / Fog Computing Project Development</a></li>
              <li><a href="/data-science-big-data-analytics-project-development">Data Science, Big Data & Analytics Project Development</a></li>
              <li><a href="/artificial-intelligence-machine-learning-project-development">Artificial Intelligence & Machine Learning (AI/ML) Project Development</a></li>
              <li><a href="/high-performance-computing-mechanical-engineering-project-development">High-Performance Computing (HPC) in Mechanical Engineering Project Development</a></li>
              <li><a href="/digital-twin-smart-simulation-mechanical-engineering-project-development">Digital Twin & Smart Simulation in Mechanical Engineering Project Development</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSECybersecurityPrivacyProjectDevelopmentCenter;

