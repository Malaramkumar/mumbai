import React from "react";
import "./EEEProjectDevelopmentCenter.scss";
import SEO from ".././assets/SEO";
import LeftSidebar from "../LeftSidebar";

const faqs = [
  {
    question: "Which standards and protocols are used for EV charging and V2G?",
    answer:
      "Projects reference IEEE 2030.1 for charging interoperability, IEEE 1547 for DER interconnection, and IEEE 1515 for storage and bidirectional power flow; protocol work may involve OCPP, ISO 15118 concepts, and secure MQTT for telemetry."
  },
  {
    question: "What platforms and tools are used for circuit, control, and simulation?",
    answer:
      "MATLAB/Simulink for control and scheduling, ETAP and PSIM/PSCAD for grid studies, Proteus for power electronics/circuit prototyping, and LabVIEW or Python for data acquisition and test automation."
  },
  {
    question: "Are there industry collaborations for Mumbai-based EV/V2G pilots?",
    answer:
      "Yes—Tata Power EZ Charge, Adani Electricity Mumbai Ltd., BEST Undertaking, and IIT Bombay labs support co-supervised projects, datasets, site access, and interoperability testing."
  },
  {
    question: "What are the expected deliverables by program level?",
    answer:
      "B.Tech: smart charger prototype + telemetry; M.Tech: multi-vehicle scheduling and V2G optimization study with IEEE draft; Ph.D.: adaptive V2G control with fleet or feeder-level validation, reproducible artifacts, and publication."
  },
  {
    question: "Can projects include real hardware-in-loop evaluation?",
    answer:
      "Yes—HIL setups with programmable supplies, emulated EV/EVSE, metering, and gateway controllers are supported for verifying scheduling, safety interlocks, and bidirectional power flow."
  }
];

const keywords = [
  "EV Charging Infrastructure Mumbai",
  "Vehicle to Grid Systems V2G",
  "Smart EV Charging Projects",
  "IEEE EV Charging Projects",
  "Tata Power EZ Charge Network",
  "Adani Electricity V2G Research",
  "AI Based Charging Management",
  "IoT Based EV Monitoring",
  "Electric Mobility Research Mumbai",
  "Smart Energy Systems India"
];

const EvChargingV2GMumbai = () => {
  return (
    <div className="EEEProjectDevelopmentCenter">
      {/* ✅ SEO Metadata Section */}
      <SEO
        title="EV Charging Infrastructure & V2G Projects in Mumbai | Smart Chargers, IEEE 2030.1, AI Load Balancing, IoT Integration"
        description="EV Charging & Vehicle-to-Grid (V2G) Projects in Mumbai—covering IEEE 2030.1, AI load optimization, OCPP, ISO 15118, and renewable-integrated EV infrastructure with Tata Power, Adani Electricity, and IIT Bombay collaborations."
        url="/eee/ev-charging-infrastructure-v2g"
        keywords={keywords}
        faqs={faqs}
      />

      <div className="EEEProjectDevelopmentCenter-main">
        <div className="EEEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="EEEProjectDevelopmentCenter-left">
            <LeftSidebar/>
            <h3>🔑 Keywords</h3>
            <ul>
              <li>EV Charging Infrastructure Mumbai</li>
              <li>Vehicle-to-Grid Systems (V2G)</li>
              <li>Smart EV Charging Projects</li>
              <li>IEEE EV Charging Projects</li>
              <li>Tata Power EZ Charge Network</li>
              <li>Adani Electricity R&D V2G</li>
              <li>AI-Based Charging Management</li>
              <li>IoT-Based EV Monitoring</li>
              <li>Mumbai Smart Energy Systems</li>
              <li>Electric Mobility Research Mumbai</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="EEEProjectDevelopmentCenter-center">
            <h1>
              EV Charging Infrastructure & Vehicle-to-Grid (V2G) for Mumbai – Project Development Center
            </h1>

            <section className="EEEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — The EV Charging Infrastructure & Vehicle-to-Grid (V2G) for Mumbai
                domain advances intelligent charging and bidirectional energy flow for a rapidly electrifying
                city, integrating renewable generation, IoT-based charge management, and AI-driven grid
                optimization to enable a scalable, reliable, and sustainable EV ecosystem across Andheri, Powai,
                and Navi Mumbai.
              </p>
              <p>
                Research focuses on the design, development, and deployment of smart EV charging stations and
                V2G-enabled grids that support seamless energy exchange between vehicles and the electrical
                network, with collaborations spanning Tata Power EZ Charge, Adani Electricity Mumbai Ltd., BEST
                Undertaking, and IIT Bombay.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-ecosystem">
              <h2>IEEE Alignment</h2>
              <p>
                Projects align with IEEE 2030.1 (Electric Vehicle Charging Systems and Interoperability),
                IEEE 1547 (Distributed Energy Resource Integration), and IEEE 1515 (Smart Energy Storage and
                Bidirectional Power Flow), guiding interoperable, efficient, and safe charging networks
                tailored for Mumbai’s urban infrastructure.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Focus</th>
                      <th>Industry/Institution</th>
                      <th>Application in Mumbai</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Smart EV Charging Stations</td>
                      <td>Tata Power EZ Charge</td>
                      <td>Residential and public EV charging installations</td>
                    </tr>
                    <tr>
                      <td>Vehicle-to-Grid (V2G) Systems</td>
                      <td>Adani Electricity R&D Division</td>
                      <td>Bidirectional energy flow integration</td>
                    </tr>
                    <tr>
                      <td>Renewable-Integrated Charging</td>
                      <td>MSEDCL</td>
                      <td>Solar-powered EV charging hubs</td>
                    </tr>
                    <tr>
                      <td>AI-Based Charging Management</td>
                      <td>IIT Bombay Energy Systems Lab</td>
                      <td>Load balancing and dynamic energy pricing</td>
                    </tr>
                    <tr>
                      <td>IoT-Enabled Monitoring</td>
                      <td>Narpavi Research Institute</td>
                      <td>Real-time energy and vehicle data analytics</td>
                    </tr>
                    <tr>
                      <td>Fleet Management Platforms</td>
                      <td>BEST Undertaking</td>
                      <td>Smart charging networks for buses and taxis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                This mapping aligns EV/V2G technology tracks to Mumbai’s deployment landscape, emphasizing
                interoperability, operations at scale, and fleet integration.
              </p>
            </section>

            <section className="EEEProjectDevelopmentCenter-cycle">
              <h2>B.Tech Project Development Cycle</h2>
              <p>
                Outcome: functional smart charger prototype with telemetry, safety interlocks, and validated
                simulation study.
              </p>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Stage</th>
                      <th>Description</th>
                      <th>Tools/Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. Concept Formulation</td>
                      <td>Identify charging network gaps across public and residential hubs.</td>
                      <td>Site survey, demand profiling</td>
                    </tr>
                    <tr>
                      <td>2. Design & Circuit Development</td>
                      <td>Develop smart EV charging circuit with metering and load monitoring.</td>
                      <td>Proteus, MATLAB Simulink</td>
                    </tr>
                    <tr>
                      <td>3. Communication Interface</td>
                      <td>Integrate IoT monitoring and control with embedded Wi-Fi/MCUs.</td>
                      <td>MQTT, Firebase, Arduino IDE (ESP32/NodeMCU)</td>
                    </tr>
                    <tr>
                      <td>4. Simulation & Validation</td>
                      <td>Analyze charging efficiency, grid impact, and power balance.</td>
                      <td>MATLAB, PSIM</td>
                    </tr>
                    <tr>
                      <td>5. Documentation & Report</td>
                      <td>Prepare IEEE-style report and poster/demo artifacts.</td>
                      <td>IEEE LaTeX template</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>M.Tech Project Development Cycle</h2>
              <p>
                Outcome: validated scheduler/optimizer with comparative baselines, ablations, and reproducible
                code/data.
              </p>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Stage</th>
                      <th>Research Objective</th>
                      <th>Tools & Techniques</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. Literature Analysis</td>
                      <td>Survey EV charging/V2G scheduling and interoperability research.</td>
                      <td>IEEE Xplore, Scopus</td>
                    </tr>
                    <tr>
                      <td>2. Hardware Modelling</td>
                      <td>Design hybrid AC/DC charging with multi-EV concurrency.</td>
                      <td>MATLAB, ETAP</td>
                    </tr>
                    <tr>
                      <td>3. Control Logic Implementation</td>
                      <td>Apply AI/ML for dynamic load scheduling and tariff response.</td>
                      <td>Python, TensorFlow</td>
                    </tr>
                    <tr>
                      <td>4. Optimization & Testing</td>
                      <td>Simulate multi-node energy transfer in V2G feeders.</td>
                      <td>PSCAD, LabVIEW</td>
                    </tr>
                    <tr>
                      <td>5. Paper Publication</td>
                      <td>Target IEEE Transactions on Transportation Electrification.</td>
                      <td>Narpavi Research Institute Research Wing</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>Ph.D. Research Development Cycle</h2>
              <p>
                Outcome: field-validated framework for adaptive fleet-level energy control with open artifacts.
              </p>
              <div className="EEEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Phase</th>
                      <th>Focus Area</th>
                      <th>Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. Research Design</td>
                      <td>Real-time V2G control for Mumbai EV networks (feeder/fleet).</td>
                      <td>System modelling and algorithmic control</td>
                    </tr>
                    <tr>
                      <td>2. Data Acquisition</td>
                      <td>Analyze charging demand, load fluctuations, and driver behavior.</td>
                      <td>Data analytics and IoT integration</td>
                    </tr>
                    <tr>
                      <td>3. Simulation & HW Co-Design</td>
                      <td>High-fidelity grid-vehicle energy flow with HIL hooks.</td>
                      <td>MATLAB, PSIM, ETAP</td>
                    </tr>
                    <tr>
                      <td>4. Optimization</td>
                      <td>Adaptive power routing and constraint-aware dispatch.</td>
                      <td>Deep learning algorithms</td>
                    </tr>
                    <tr>
                      <td>5. Research Dissemination</td>
                      <td>Publish in IEEE Smart Energy Systems and IET Power Electronics.</td>
                      <td>Open artifacts and advanced publication support</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="EEEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Project Titles</h2>
              <ul>
                <li>IoT-Enabled EV Charging Station for Smart Cities</li>
                <li>Real-Time V2G Energy Management for Mumbai’s Suburban Grid</li>
                <li>Load Balancing Optimization in EV Charging Networks</li>
                <li>Design of a Solar-Powered Smart Charging Hub for Apartments</li>
                <li>AI-Driven EV Load Forecasting for Urban Grids</li>
                <li>V2G-Based Energy Exchange Model for Public Bus Fleets</li>
                <li>Fault Detection and Recovery in EV Charging Infrastructure</li>
                <li>Blockchain-Based Energy Transaction for V2G Systems</li>
                <li>Smart Scheduling Algorithm for Multi-Vehicle Charging Systems</li>
                <li>Hybrid Renewable Energy Integration in Urban Charging Networks</li>
              </ul>
            </section>

            <section className="EEEProjectDevelopmentCenter-conclusion">
              <h2>Role of Narpavi Research Institute</h2>
              <p>
                The institute supports software and hardware project flows—from circuit and control design to
                predictive scheduling—leveraging MATLAB, PSIM/PSCAD, and Python, while collaborations with Tata
                Power EZ Charge, IIT Bombay, and Adani Electricity strengthen applied research and field
                implementation of EV/V2G technologies in Mumbai.
              </p>
            </section>

            {/* ✅ FAQ Section */}
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
              {/* Removed manual JsonLd – handled by SEO */}
            </section>
          </div>

          {/* Right Column – Related Fields */}
          <div className="EEEProjectDevelopmentCenter-right">
            <h3>🔗 Related EEE Fields</h3>
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

export default EvChargingV2GMumbai;
