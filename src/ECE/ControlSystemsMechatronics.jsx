import React from "react";
import "./ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which simulation and control design tools are available at the center?",
    answer:
      "MATLAB Control Toolbox, Simulink, SCADA, PLCs, Python Automation, dSPACE, and ROS are provided for control and mechatronic system development and validation."
  },
  {
    question: "Are industry collaborations included in project supervision?",
    answer:
      "Yes—industrial partners from Mumbai and Thane, including Tata Power, Siemens Tech Labs, and Mahindra R&D Labs, support students through co‑supervised project modules and experimental access."
  },
  {
    question: "How does the center ensure IEEE alignment?",
    answer:
      "All projects follow IEEE‑style documentation—problem statement, methodology, modeling, experimental validation, and data discussion—with reproducible Simulink/HIL results."
  },
  {
    question: "What project outcomes are expected per academic program?",
    answer:
      "B.Tech: operational prototype and design report; M.Tech: validated intelligent control model and IEEE draft; Ph.D.: novel adaptive/hybrid architecture and patentable findings."
  },
  {
    question: "Can students access real‑time control hardware?",
    answer:
      "Yes—hardware‑in‑the‑loop (HIL) setups, PLCs, dSPACE units, and Simulink Real‑Time platforms are available for real‑world interfacing and model validation."
  }
];

const ControlSystemsMechatronicsMumbai = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Control Systems Projects Mumbai</li>
              <li>Mechatronics Project Development Center</li>
              <li>PLC Automation Mumbai</li>
              <li>MATLAB Simulink Projects</li>
              <li>Industrial Process Control</li>
              <li>Embedded Control Systems Design</li>
              <li>Intelligent Motion Control</li>
              <li>Model Predictive Control</li>
              <li>ROS & HIL Simulation</li>
              <li>IEEE Mechatronics 2023–2025</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Control Systems and Mechatronics – Project Development Center (Mumbai-Based)</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — The center integrates mechanical, electronic, and control systems for intelligent automation. Located in Mumbai’s industrial ecosystem, it emphasizes model‑based design, feedback control, and real‑time implementation using advanced simulation, embedded controllers, and sensing technologies.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-ecosystem">
              <h2>Mumbai industrial relevance</h2>
              <p>
                Collaborations with automotive, robotics, and process control industries in Mumbai and Thane drive innovation in smart factories, energy systems, and autonomous platforms. Students experience both simulation and deployment phases under expert guidance from Narpavi Research Institute.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Technological & industrial comparison</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology domain</th>
                      <th>Industry applications (Mumbai)</th>
                      <th>Tools & platforms</th>
                      <th>Key collaborations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Classical & Modern Control Systems</td>
                      <td>Process automation, thermal & chemical control</td>
                      <td>MATLAB Control Toolbox, Simulink</td>
                      <td>Reliance Engineering Labs, L&T Process Automation</td>
                    </tr>
                    <tr>
                      <td>Mechatronic Integration Design</td>
                      <td>Robotics, industrial automation, self‑driving systems</td>
                      <td>PLC, Arduino, NI LabVIEW</td>
                      <td>Godrej & Boyce, Mahindra Vehicle R&D Labs</td>
                    </tr>
                    <tr>
                      <td>Intelligent Motion Control</td>
                      <td>Robotic manipulators, automatic drives</td>
                      <td>Simulink Real‑Time, dSPACE, Proteus</td>
                      <td>IIT Bombay Mechatronics Center, Siemens Tech Labs</td>
                    </tr>
                    <tr>
                      <td>Industrial Process Control</td>
                      <td>Manufacturing, oil & gas, energy systems</td>
                      <td>SCADA, Python Automation, PLCs</td>
                      <td>Tata Power Systems, ABB Process Solutions</td>
                    </tr>
                    <tr>
                      <td>Autonomous System Dynamics</td>
                      <td>UAVs, AGVs, balancing platforms</td>
                      <td>ROS, MATLAB Simscape, CoppeliaSim</td>
                      <td>Mumbai Robotics & Automation Cluster</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The table links control system domains with Mumbai’s automation and robotics industries for applied project orientation.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-cycle">
              <h2>B.Tech project development cycle</h2>
              <p>
                Focused on foundational system response analysis using Simulink, sensor integration, and basic controller design.
              </p>
              <ul>
                <li><strong>Modeling</strong> — Open/closed‑loop system modeling in Simulink.</li>
                <li><strong>Controller Design</strong> — PID, relay feedback tuning, stability checks.</li>
                <li><strong>Hardware Interface</strong> — Arduino/PLC sensor‑actuator control.</li>
                <li><strong>Validation</strong> — Compare simulated and physical responses.</li>
                <li><strong>Deliverable</strong> — Functional prototype with documented control reports.</li>
              </ul>

              <h2>M.Tech project development cycle</h2>
              <p>
                Research into adaptive control and mechatronic integration for advanced automation platforms.
              </p>
              <ul>
                <li><strong>Model Predictive Control</strong> — Predictive tuning and performance tracking.</li>
                <li><strong>Adaptive/Fuzzy Systems</strong> — Intelligent control architectures for uncertainty management.</li>
                <li><strong>Hardware‑in‑the‑Loop Testing</strong> — Validate designs on Simulink Real‑Time and dSPACE.</li>
                <li><strong>Industrial Integration</strong> — Implement PLC‑SCADA & machine vision loops.</li>
                <li><strong>Deliverable</strong> — IEEE‑aligned paper with experimental results and analysis.</li>
              </ul>

              <h2>Ph.D. project development cycle</h2>
              <p>
                Advanced work in nonlinear, hybrid, and intelligent control, integrating robotics and autonomous mechatronics.
              </p>
              <ul>
                <li><strong>Algorithm Development</strong> — Adaptive, robust, and estimation‑based control models.</li>
                <li><strong>System Modeling</strong> — Multi‑degree‑of‑freedom robotic and energy systems.</li>
                <li><strong>Experimental Platform</strong> — dSPACE hardware and hybrid HIL clusters.</li>
                <li><strong>Deliverable</strong> — Novel research findings, patents, and validated demonstrations.</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑aligned project titles</h2>
              <ul>
                <li>Adaptive PID Control for Autonomous Robotic Systems</li>
                <li>Real‑Time Stability Analysis for Industrial Automation Platforms</li>
                <li>Design of Fuzzy Logic Controllers for Vehicle Dynamics</li>
                <li>Model Predictive Control for Energy‑Efficient Manufacturing Systems</li>
                <li>PLC‑Based Multi‑Loop Process Control for Smart Factories</li>
                <li>Sensor‑Fusion‑Based Motion Control for Mechatronic Devices</li>
                <li>Hardware‑in‑the‑Loop Simulation for Dynamic System Verification</li>
                <li>Robust Control Algorithms for Unmanned Ground Vehicles</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-conclusion">
              <h2>Conclusion</h2>
              <p>
                Through a structured framework combining modeling, embedded control, and validation, the center promotes innovation in automation and robotics for Mumbai’s industrial landscape. Students gain cross‑domain exposure to system design, experimentation, and research publication standards.
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

          {/* Right Column – Related Fields */}
          <div className="ECEProjectDevelopmentCenter-right">
            <h3>🔗 Related ECE fields</h3>
            <ul>
              <li><a href="/industrial-automation-mumbai">Industrial Automation</a></li>
              <li><a href="/embedded-control-systems-mumbai">Embedded Control Systems</a></li>
              <li><a href="/robotics-ai-mumbai">Robotics and AI</a></li>
              <li><a href="/smart-manufacturing-mumbai">Smart Manufacturing</a></li>
              <li><a href="/process-control-mumbai">Process Control Engineering</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ControlSystemsMechatronicsMumbai;

