import React from 'react';
import "./ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which EM and RF tools are supported for projects?",
    answer:
      "Core tools include ANSYS HFSS, CST Studio Suite, and Keysight ADS for 3D EM and circuit co‑simulation; MATLAB/Python for beamforming DSP; and PCB tools for RF layouts. For measurement, plan VNAs, spectrum analyzers, and anechoic/OTA setups."
  },
  {
    question: "How are IEEE standards embedded into project workflows?",
    answer:
      "Each project defines antenna/RF KPIs (S11, gain, AR, radiation efficiency, bandwidth, G/T, NF), test protocols, fixture de‑embedding, and uncertainty budgets, then reports them in IEEE‑style manuscripts with repeatable EM/CAD files."
  },
  {
    question: "Can projects be co‑supervised with RF labs or industry?",
    answer:
      "Yes. Co‑supervision covers array calibration benches, chamber time, and DVT checklists; IP and data use are governed by an MoU at induction, with shared test plans and milestone reviews."
  },
  {
    question: "What deliverables are expected per academic level?",
    answer:
      "B.Tech: validated single‑antenna/filter prototype + report; M.Tech: optimized array/filter + beamforming/EM co‑sim + publication draft; Ph.D.: novel geometry/material/algorithm + chamber‑verified hardware + multi‑band datasets + manuscript and IP artifacts."
  },
  {
    question: "How to plan fabrication and test time effectively?",
    answer:
      "Freeze stack‑up and feeds early, run tolerance/DFM sweeps, panelize coupons for quick S‑param checks, and book chamber/VNA windows aligned with EM milestones to de‑risk late re‑spins."
  }
];

const SmartAntennaMicrowaveMumbai = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ECE Smart Antenna Projects</li>
              <li>Microwave Engineering Mumbai</li>
              <li>HFSS CST ADS Antenna</li>
              <li>Beamforming & Phased Arrays</li>
              <li>Millimeter‑Wave Antennas</li>
              <li>Metamaterial RF Design</li>
              <li>Microstrip Patch Antenna</li>
              <li>RF & Microwave Filters</li>
              <li>MIMO Antenna Systems</li>
              <li>5G/6G Antenna Design</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>Smart Antenna and Microwave Engineering – Project Development Center (Mumbai-Based)</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — The center advances high‑frequency circuit design, antenna/array engineering, and EM simulation for wireless, radar, and satellite systems. In Mumbai’s Powai–IITB innovation corridor, projects span beamforming, phased arrays, mmWave antennas, and low‑loss microwave filters, with IEEE‑aligned methods from modeling to chamber validation.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-ecosystem">
              <h2>Mumbai RF & antenna landscape</h2>
              <p>
                A mature ecosystem of telecom, defense, and satellite providers, along with academic and private RF labs, supports beamforming experiments, microstrip miniaturization, filter topologies, and OTA testing. Students gain access to VNAs, spectrum analyzers, and anechoic facilities for measurement‑driven design.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Comparative technology–industry table</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology focus</th>
                      <th>Application industry</th>
                      <th>Primary functionality</th>
                      <th>Adoption (Mumbai)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Beamforming & phased arrays</td>
                      <td>5G & satellite communication</td>
                      <td>Directional TX/RX, interference suppression</td>
                      <td>Rapid deployment</td>
                    </tr>
                    <tr>
                      <td>Microstrip patch antennas</td>
                      <td>Wireless device manufacturing</td>
                      <td>Compact, integrable radiators</td>
                      <td>Widely used</td>
                    </tr>
                    <tr>
                      <td>RF/microwave filters</td>
                      <td>Aerospace & defense</td>
                      <td>Channelization, interference control</td>
                      <td>High adoption</td>
                    </tr>
                    <tr>
                      <td>Millimeter‑wave antennas</td>
                      <td>Automotive radar</td>
                      <td>Object detection/tracking</td>
                      <td>Emerging</td>
                    </tr>
                    <tr>
                      <td>Metamaterial antennas</td>
                      <td>Advanced comm labs</td>
                      <td>Bandwidth/gain enhancement, miniaturization</td>
                      <td>Active R&D</td>
                    </tr>
                    <tr>
                      <td>High‑freq circuit simulation</td>
                      <td>RF design firms</td>
                      <td>Front‑end/PA/LNA optimization</td>
                      <td>Standard practice</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The map aligns EM techniques and RF practices with Mumbai’s telecom, defense, and satellite workstreams.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-cycle">
              <h2>B.Tech project development cycle</h2>
              <p>
                Fundamentals in EM/RF, antenna theory, and practical prototyping with single‑band elements and basic filters.
              </p>
              <ul>
                <li><strong>Design & simulate</strong> — Microstrip patches in HFSS/CST; sweeps for S11, bandwidth, gain.</li>
                <li><strong>Beamforming basics</strong> — Linear arrays, amplitude/phase weights, pattern plots.</li>
                <li><strong>RF circuits</strong> — TL networks, simple BPF/BPF, couplers; ADS for circuit‑level checks.</li>
                <li><strong>Fabrication</strong> — PCB protos (controlled stack‑up), connectors/fixtures.</li>
                <li><strong>Testing</strong> — VNA S‑parameters, anechoic pattern vs. EM correlation.</li>
              </ul>
              <p>
                Outcome: a measured antenna/filter prototype with simulation correlation and a concise report.
              </p>

              <h2>M.Tech project development cycle</h2>
              <p>
                Advanced arrays, reconfigurability, and EM–DSP integration with system‑level validation.
              </p>
              <ul>
                <li><strong>Concept & modeling</strong> — Array geometry, coupling studies, yield/tolerance analysis.</li>
                <li><strong>Optimization</strong> — Pattern/gain/AR trade‑offs; multi‑objective EM sweeps.</li>
                <li><strong>Beamforming DSP</strong> — MATLAB/Python weights (MVDR/LMS/Codebook) and calibration.</li>
                <li><strong>Front‑end integration</strong> — Feeds, baluns, T/R modules; feed network losses.</li>
                <li><strong>Docs & publication</strong> — IEEE MTT/AP style, uncertainty and fixture de‑embedding.</li>
              </ul>
              <p>
                Outcome: an optimized, beamformed array with chamber‑verified patterns and repeatable EM models.
              </p>

              <h2>Ph.D. project development cycle</h2>
              <p>
                Novel geometries, materials, and AI‑assisted optimization with rigorous theory and hardware proof.
              </p>
              <ul>
                <li><strong>Gap analysis</strong> — Miniaturization, wideband circular polarization, mmWave packaging.</li>
                <li><strong>Mathematical models</strong> — Field formulations, array manifolds, fast solvers/surrogates.</li>
                <li><strong>Simulation stack</strong> — HFSS/CST/ADS co‑sims; EM‑driven filter/antenna co‑design.</li>
                <li><strong>Experimental</strong> — Calibrated chambers, over‑temperature/angle tests, EMI/EMC.</li>
                <li><strong>Results to IP</strong> — High‑impact IEEE journals, patent drafts, and tech transfer notes.</li>
              </ul>
              <p>
                Outcome: original contributions with validated hardware and reproducible EM datasets.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑aligned project titles</h2>
              <ul>
                <li>Compact Microstrip Patch Antenna for Sub‑6/5G Bands</li>
                <li>Beamforming on Linear Phased Arrays with Low SLL</li>
                <li>PIN‑Diode Reconfigurable Antenna for Multi‑Band Operation</li>
                <li>Low‑Insertion‑Loss Microwave Bandpass Filter</li>
                <li>Circularly Polarized Antenna for L/S‑Band Satellite Links</li>
                <li>Wideband MIMO Antenna Array for High‑Throughput Links</li>
                <li>AI‑Assisted Beamforming Weight Optimization</li>
                <li>Metamaterial‑Enhanced Patch for Bandwidth/Gain Boost</li>
                <li>Dual‑Band Microstrip Filter for RF Front‑Ends</li>
                <li>Frequency‑Selective Surface (FSS) for Antenna Isolation</li>
              </ul>
              <p>
                Titles are scoped for EM‑to‑hardware correlation and fast iteration to publication.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-conclusion">
              <h2>Industrial & academic collaboration</h2>
              <p>
                The center partners with RF labs for pattern measurements, filter tuning, and fabrication training—bridging EM theory, precise simulation, and deployable RF hardware. Graduates are prepared to deliver compact, efficient, and intelligent antenna/RF subsystems for the next era of wireless.
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
              <li><a href="/communication-systems-mumbai">Communication Systems</a></li>
              <li><a href="/signal-processing-mumbai">Signal Processing</a></li>
              <li><a href="/vlsi-design-mumbai">VLSI Design</a></li>
              <li><a href="/embedded-systems-mumbai">Embedded Systems</a></li>
              <li><a href="/wireless-security-mumbai">Wireless Security</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SmartAntennaMicrowaveMumbai;
