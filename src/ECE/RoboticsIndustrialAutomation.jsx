import React from "react";
import "./ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which robotics platforms and tools are supported at the center?",
    answer:
      "The center supports ROS (Robot Operating System), Arduino Mega, Jetson Nano, MATLAB Robotics Toolbox, OpenCV, and Node‑RED. These tools enable project development in robotic kinematics, vision, motion planning, and control integration."
  },
  {
    question: "What industrial collaborations exist for robotics projects in Mumbai?",
    answer:
      "Narpavi Research Institute collaborates with TATA Motors Thane, Godrej Automation Vikhroli, Siemens Industrial Vision Labs, and L&T Smart Factory Automation. These partnerships provide students access to industrial testbeds, automation facilities, and co‑supervised research models."
  },
  {
    question: "How are IEEE standards integrated into robotics research?",
    answer:
      "Projects follow IEEE robotics and automation formatting, maintaining reproducible datasets, performance reports (speed, torque, accuracy, fault tolerance), and systematic documentation ensuring IEEE‑compatible output and publications."
  },
  {
    question: "What deliverables are defined for each academic level?",
    answer:
      "B.Tech: working robot prototype and control algorithm report; M.Tech: AI‑integrated robot or vision‑guided automation cell with IEEE draft; Ph.D.: multi‑agent robotic coordination framework, industrial publication, and deployment validation."
  },
  {
    question: "Does the center include industrial IoT or machine learning integration?",
    answer:
      "Yes—students implement communication and automation control using Node‑RED, LabVIEW, and Python‑based AI models integrated with ROS nodes and Jetson Nano for on‑board inference and networked decision‑making."
  }
];

const RoboticsIndustrialAutomationMumbai = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">
          
          {/* Left Column – Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Robotics Projects Mumbai</li>
              <li>Industrial Automation Development</li>
              <li>Collaborative Robotics Research</li>
              <li>Machine Vision Automation</li>
              <li>ROS Robotics Projects</li>
              <li>Jetson Nano Robot Development</li>
              <li>MATLAB Robotics Toolbox</li>
              <li>Smart Factory Automation Mumbai</li>
              <li>Autonomous Mobile Robots Projects</li>
              <li>IEEE Robotics 2023–2025</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Robotics and Industrial Automation – Project Development Center (Mumbai-Based)</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — The Robotics and Industrial Automation – Project Development Center (Mumbai‑Based) serves as a hub for advanced research and innovation in collaborative robotics, machine vision, and smart factory integration. As industries transition toward automation and autonomous systems, robotics plays a crucial role in transforming manufacturing, logistics, and service operations.
              </p>
              <p>
                Located in Mumbai, India’s emerging automation nucleus, the center connects academic research with industrial deployment by training students and professionals to design, simulate, and test intelligent robotic solutions. Using platforms such as ROS, Arduino Mega, Jetson Nano, and MATLAB Robotics Toolbox, participants gain experience in robot control, perception, and motion planning.
              </p>
              <p>
                The center emphasizes design, prototyping, and validation of intelligent robotic systems that merge sensors, actuators, and AI‑driven algorithms to solve real‑world industrial challenges in assembly, inspection, and logistics.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-ecosystem">
              <h2>Mumbai robotics and industrial ecosystem</h2>
              <p>
                Mumbai’s industrial ecosystem—comprising automotive plants, logistics hubs, and manufacturing clusters—offers access to automation initiatives and R&D labs from TATA Motors, Siemens, and L&T. Through these collaborations, projects extend from simulation in ROS to live implementation within industrial environments.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Technology–Industry Comparative Table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Area</th>
                      <th>Industrial Applications (Mumbai Region)</th>
                      <th>Platforms & Tools</th>
                      <th>Key Collaborations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Collaborative Robotics</td>
                      <td>Automotive assembly lines, warehouse automation</td>
                      <td>ROS, Arduino Mega</td>
                      <td>TATA Motors Thane, Godrej Automation Vikhroli</td>
                    </tr>
                    <tr>
                      <td>Machine Vision Systems</td>
                      <td>Quality inspection, object recognition, sorting systems</td>
                      <td>OpenCV, MATLAB Robotics Toolbox</td>
                      <td>Siemens Industrial Vision Labs, Navi Mumbai Tech Park</td>
                    </tr>
                    <tr>
                      <td>Mobile Robotics & AGVs</td>
                      <td>Autonomous factory logistics and material transport</td>
                      <td>ROS, Jetson Nano</td>
                      <td>L&T Smart Factory Automation, Powai Robotics Hub</td>
                    </tr>
                    <tr>
                      <td>Robotic Arm Manipulation</td>
                      <td>Precision assembly and pick‑and‑place operations</td>
                      <td>MATLAB Robotics Toolbox, Arduino IDE</td>
                      <td>Mumbai Robotics R&D Labs, IIT Bombay Robotics Cluster</td>
                    </tr>
                    <tr>
                      <td>Industrial IoT & Automation Control</td>
                      <td>Connected manufacturing, remote monitoring</td>
                      <td>Node‑RED, LabVIEW</td>
                      <td>Tata Power Smart Manufacturing Labs, Thane Automation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                This matrix aligns robotics technology domains with Mumbai’s key manufacturing, automotive, and process automation sectors.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-cycle">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                The B.Tech cycle builds fundamentals in robotic mechanics, electrical control, and embedded programming. Students learn core robotics kinematics and actuator interfacing while implementing small robots using Arduino and MATLAB.
              </p>
              <ul>
                <li><strong>Programming</strong> — Arduino and ROS for mobile robot navigation and line following.</li>
                <li><strong>Kinematics</strong> — Forward and inverse modeling using MATLAB Robotics Toolbox.</li>
                <li><strong>Control Design</strong> — PID‑based motor and servo actuator control.</li>
                <li><strong>Prototyping</strong> — Construction of pick‑and‑place robots or AMRs.</li>
                <li><strong>Deliverable</strong> — Fully working robot prototype validated within lab or partner facility.</li>
              </ul>
              <p>
                Outcome: Students gain real‑time control and integration skills convertible to industrial robotics environments.
              </p>

              <h2>M.Tech Project Development Cycle</h2>
              <p>
                The M.Tech cycle focuses on advanced design goals such as collaborative operation, machine vision integration, and industrial IoT connectivity.  
                AI‑enabled robotics systems are trained to perform adaptive control, multi‑robot coordination, and intelligent workspace automation.
              </p>
              <ul>
                <li><strong>Collaborative Robots</strong> — Design and control of cobots using ROS MoveIt and MATLAB simulations.</li>
                <li><strong>Machine Vision</strong> — OpenCV‑based object detection and real‑time inspection control.</li>
                <li><strong>AI & Edge Processing</strong> — Jetson Nano for autonomous decision‑making.</li>
                <li><strong>Industrial IoT</strong> — Sensor network communication via Node‑RED and MQTT.</li>
                <li><strong>Deliverable</strong> — IEEE‑aligned technical report with performance evaluation and precision metrics.</li>
              </ul>
              <p>
                Outcome: Deployable robotic systems optimized for scalability and integrated with AI and communication subsystems.
              </p>

              <h2>Ph.D. Project Development Cycle</h2>
              <p>
                At the doctoral level, scholars work on next‑generation robotics research involving swarm behavior, multi‑agent control, and neural automation strategies. Research focuses on high‑precision, AI‑driven industrial robotics validated through factory‑level collaborations.
              </p>
              <ul>
                <li><strong>Multi‑Agent Robotics</strong> — Distributed coordination models and shared task planning.</li>
                <li><strong>AI Automation</strong> — Deep learning for predictive maintenance and autonomous adaptation.</li>
                <li><strong>Human‑Robot Interaction</strong> — Safety and ergonomic algorithms for shared workspaces.</li>
                <li><strong>Deliverable</strong> — IEEE manuscript, open dataset repository, and industry validation report.</li>
              </ul>
              <p>
                Outcome: Innovative robotics architectures expanding the industrial automation ecosystem in India.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑Aligned Project Titles</h2>
              <ul>
                <li>Collaborative Robotic Arm for Automotive Assembly Automation</li>
                <li>Vision‑Guided Pick‑and‑Place Robot Using ROS and Jetson Nano</li>
                <li>AI‑Enhanced Mobile Robots for Warehouse Automation</li>
                <li>Multi‑Agent Coordination in Industrial Robotics</li>
                <li>Real‑Time Quality Inspection Using Machine Vision Systems</li>
                <li>Industrial IoT Integration for Robotic Process Monitoring</li>
                <li>MATLAB‑Based Robotic Kinematics and Path Planning Simulation</li>
                <li>Autonomous AGV for Material Handling in Smart Factories</li>
              </ul>
            </section>

            <section className="ECEProjectDevelopmentCenter-conclusion">
              <h2>Narpavi Research Institute – Driving Robotics Innovation</h2>
              <p>
                The Narpavi Research Institute provides a world‑class environment for developing next‑generation industrial robotic systems. Through the Robotics and Industrial Automation – Project Development Center (Mumbai‑Based), students and researchers gain practical experience in simulation, implementation, and evaluation of automation technologies under expert mentorship and industry collaboration.  
                Integrating machine learning, control optimization, and IEEE‑aligned methodologies, the institute ensures that graduates emerge as leaders in global robotics research and smart manufacturing innovation.
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
            <h3>🔗 Related ECE Fields</h3>
            <ul>
              <li><a href="/mechatronics-mumbai">Mechatronics Systems</a></li>
              <li><a href="/industrial-automation-mumbai">Industrial Automation</a></li>
              <li><a href="/machine-vision-mumbai">Machine Vision & Imaging</a></li>
              <li><a href="/ai-robotics-mumbai">AI in Robotics</a></li>
              <li><a href="/embedded-control-mumbai">Embedded Control Systems</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RoboticsIndustrialAutomationMumbai;

