import React from 'react';
import "./ECEProjectDevelopmentCenter.scss"; // Assuming a common SCSS file for ECE/VLSI

const faqs = [
  {
    question: "Why is Renewable Energy Systems a key focus in Mumbai?",
    answer: "Mumbai's growing ecosystem with solar startups, microgrid developers, and energy storage firms in Navi Mumbai drives demand for sustainable solutions in rooftop PV and hybrid systems. This aligns with national goals under MNRE for 500 GW non-fossil capacity by 2030, supported by IREDA financing [web:244][web:248]."
  },
  {
    question: "What tools are used in B.Tech renewable energy projects?",
    answer: "B.Tech students use MATLAB Simulink, HOMER Energy, and PSCAD for modeling solar PV, wind systems, and microgrids, followed by hardware prototypes like solar trackers. These tools enable efficiency analysis and simulation of energy yield in urban settings [web:245][web:38]."
  },
  {
    question: "How does the M.Tech cycle integrate smart grid technologies?",
    answer: "M.Tech projects develop intelligent controllers and hybrid PV-wind systems using embedded tech for energy management, validated in lab conditions for reliability. This focuses on optimization for industrial microgrids, preparing for deployments in Mumbai's smart city initiatives [web:246][web:250]."
  },
  {
    question: "What Ph.D. opportunities exist in energy storage and microgrids?",
    answer: "Ph.D. research explores advanced battery management and hybrid microgrids, with prototypes tested for scalability via collaborations with IITB's DESE and SECI. Emphasis on IEEE publications and patents for sustainable storage solutions [web:38][web:249]."
  },
  {
    question: "How does Mumbai support renewable project development?",
    answer: "Partnerships with PRESPL for biomass integration, SgurrEnergy consultants, and MNRE agencies provide testbeds and funding for solar-wind hybrids, enhancing hands-on validation in renewable hubs like Powai [web:243][web:245]."
  }
];

const RenewableEnergySystemsMumbai = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ECE Renewable Energy Projects</li>
              <li>Solar PV Mumbai</li>
              <li>IEEE Renewable Systems</li>
              <li>Hybrid Microgrids ECE</li>
              <li>Narpavi Renewable Center</li>
              <li>Energy Storage ECE</li>
              <li>Wind Energy Projects</li>
              <li>Smart Grid Mumbai</li>
              <li>Embedded Energy Controllers</li>
              <li>Sustainable Energy ECE</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Renewable Energy Systems Project Development Center – Mumbai</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Renewable Energy Systems</strong> form the foundation for sustainable development and the future of power generation. The Renewable Energy Systems Project Development Center (Mumbai-Based), led by Narpavi Research Institute, provides comprehensive support for B.Tech, M.Tech, and Ph.D. students worldwide, fostering both software and hardware project development. All projects follow IEEE-aligned methodologies, enabling students to engage in innovative renewable energy solutions for industrial and residential applications. Mumbai’s industrial and technological landscape, including solar and wind energy startups, microgrid developers, and energy storage companies, provides students with access to live hardware labs, industrial prototypes, and renewable energy research facilities. The center emphasizes hands-on experimentation, simulation, and performance evaluation, integrating tools such as MATLAB Simulink, HOMER Energy, PSCAD, and PVsyst for modeling and analysis.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-ecosystem">
              <h2>Mumbai’s Renewable Energy Innovation Ecosystem</h2>
              <p>Mumbai serves as a strategic hub for renewable energy innovation, housing companies specializing in solar PV, wind turbines, microgrids, and energy storage solutions. The center collaborates with these industries, offering students opportunities to develop solar tracking systems, hybrid renewable systems, microgrid energy management, and smart energy controllers. Through access to industrial setups and testbeds, students can implement and test renewable systems under realistic environmental conditions, bridging the gap between theoretical research and industrial application. The Mumbai-based ecosystem also facilitates research collaborations, internships, and project deployments, ensuring global exposure and relevance.</p>
            </section>

            <section className="ECEProjectDevelopmentCenter-cycle">
              <h2>B.Tech Project Development Cycle in Renewable Energy Systems</h2>
              <p>At the B.Tech level, students focus on fundamental concepts of renewable energy, energy conversion, and system modeling. Projects are designed to develop practical skills in solar PV, wind turbines, battery storage, and energy management systems.</p>
              <ul>
                <li><strong>Problem Identification & Literature Review</strong> – Analyze foundational renewable energy challenges aligned with IEEE principles.</li>
                <li><strong>System Design & Simulation</strong> – Model renewable systems using MATLAB, PSCAD, or HOMER Energy.</li>
                <li><strong>Hardware Implementation</strong> – Build prototypes of solar trackers, hybrid microgrids, or small-scale wind energy systems.</li>
                <li><strong>Performance Analysis</strong> – Evaluate efficiency, energy yield, and reliability under simulated or real-world conditions.</li>
                <li><strong>Documentation & Presentation</strong> – Prepare IEEE-standard technical reports and presentations.</li>
              </ul>
              <p>This cycle ensures B.Tech students acquire practical skills and foundational knowledge for energy system design and renewable energy projects.</p>

              <h2>M.Tech Project Development Cycle in Renewable Energy Systems</h2>
              <p>For M.Tech students, the focus shifts to system optimization, control strategies, and industrial applications.</p>
              <ul>
                <li><strong>Advanced Literature Review & Gap Analysis</strong> – Study complex renewable energy systems, hybrid energy integration, and smart grid technologies.</li>
                <li><strong>System Design & Algorithm Development</strong> – Develop intelligent controllers, energy management algorithms, and hybrid system architectures.</li>
                <li><strong>Hardware-Software Co-Design</strong> – Implement microgrid prototypes, PV-wind hybrid systems, or battery storage management using embedded controllers.</li>
                <li><strong>Experimental Validation</strong> – Evaluate energy efficiency, reliability, and integration under laboratory and field conditions.</li>
                <li><strong>Thesis Documentation & Industrial Collaboration</strong> – Prepare detailed reports, suitable for IEEE publication and industry partnership.</li>
              </ul>
              <p>This cycle enables M.Tech students to deliver industry-ready renewable energy solutions, integrating optimization techniques, intelligent control, and real-world deployment capabilities.</p>

              <h2>Ph.D. Project Development Cycle in Renewable Energy Systems</h2>
              <p>For Ph.D. scholars, the center emphasizes research in advanced renewable energy systems, smart grids, and energy storage optimization.</p>
              <ul>
                <li><strong>Research Problem Formulation</strong> – Identify unexplored challenges in renewable energy generation, hybrid microgrids, and sustainable energy storage.</li>
                <li><strong>System Architecture & Algorithm Design</strong> – Develop new modeling techniques, optimization frameworks, and intelligent energy controllers.</li>
                <li><strong>Prototype Development & Experimental Validation</strong> – Build and test hybrid renewable systems, smart energy controllers, and grid-integrated solutions.</li>
                <li><strong>Performance Evaluation</strong> – Analyze efficiency, reliability, scalability, and environmental impact under realistic conditions.</li>
                <li><strong>Publication & Industrial Collaboration</strong> – Document findings for IEEE publications and establish collaborations with Mumbai-based renewable energy industries.</li>
              </ul>
              <p>This cycle ensures Ph.D. candidates produce innovative research with industrial applicability, contributing to sustainable energy solutions on a global scale.</p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative Table: Technology vs Industry in Renewable Energy Systems</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology Focus</th>
                      <th>Industry Application (Mumbai-Based)</th>
                      <th>IEEE Alignment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Solar PV & Solar Tracking Systems</td>
                      <td>Solar energy startups, rooftop installations</td>
                      <td>IEEE Transactions on Sustainable Energy</td>
                    </tr>
                    <tr>
                      <td>Wind Energy Systems</td>
                      <td>Wind energy farms and turbine design companies</td>
                      <td>IEEE Journal of Emerging and Selected Topics in Power Electronics</td>
                    </tr>
                    <tr>
                      <td>Hybrid Renewable Microgrids</td>
                      <td>Industrial microgrids and smart campus solutions</td>
                      <td>IEEE Transactions on Smart Grid</td>
                    </tr>
                    <tr>
                      <td>Battery Energy Storage & Management</td>
                      <td>EV and renewable energy storage integrators</td>
                      <td>IEEE Transactions on Energy Conversion</td>
                    </tr>
                    <tr>
                      <td>Intelligent Energy Management</td>
                      <td>Grid-connected systems, smart homes, and industrial energy systems</td>
                      <td>IEEE Access</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>This table illustrates the alignment of technology with Mumbai’s renewable energy industries, highlighting opportunities for students to develop practical, deployable solutions.</p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Project Titles</h2>
              <ul>
                <li>Intelligent Solar-Wind Hybrid Microgrid with Energy Optimization</li>
                <li>AI-Based Battery Management System for Renewable Energy Storage</li>
                <li>Embedded Control System for Solar Tracker Efficiency Enhancement</li>
                <li>Microgrid Energy Management using IoT-Enabled Sensors</li>
                <li>Predictive Energy Optimization for Industrial Renewable Systems</li>
                <li>Grid-Integrated Smart Renewable Energy Controller</li>
                <li>Hybrid Renewable System with Real-Time Monitoring and Fault Detection</li>
              </ul>
              <p>These project titles are aligned with IEEE trends, ensuring that students produce innovative, publishable, and industry-relevant research.</p>
            </section>

            <section className="ECEProjectDevelopmentCenter-conclusion">
              <h2>Conclusion</h2>
              <p>The Renewable Energy Systems Project Development Center – Mumbai, operated by Narpavi Research Institute, provides an integrated environment for B.Tech, M.Tech, and Ph.D. students to transform research ideas into real-world energy solutions. The center combines hardware prototyping, software simulation, and industry collaboration, offering a Mumbai-centric ecosystem that fosters innovation, sustainability, and global research impact.</p>
            </section>
            
            <section className="kerala-alluniversityfaq-section">
              <h2>Frequently Asked Questions</h2>
              <div className="kerala-faq-items">
                {faqs.map((faq, i) => (
                  <details key={i}>
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
                    "mainEntity": faqs.map(f => ({
                      "@type": "Question",
                      "name": f.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.answer
                      }
                    }))
                  })
                }}
              />
            </section>
          </div>

          {/* Right Column – Related Services */}
          <div className="ECEProjectDevelopmentCenter-right">
            <h3>🔗 Related ECE Fields</h3>
            <ul>
              <li><a href="/power-electronics-mumbai">Power Electronics</a></li>
              <li><a href="/embedded-systems-mumbai">Embedded Systems</a></li>
              <li><a href="/communication-systems-mumbai">Communication Systems</a></li>
              <li><a href="/smart-grid-ece-mumbai">Smart Grid in ECE</a></li>
              <li><a href="/energy-storage-mumbai">Energy Storage Systems</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RenewableEnergySystemsMumbai;

