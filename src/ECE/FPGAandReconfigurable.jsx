import React from 'react';
import "./ECEProjectDevelopmentCenter.scss";

const faqs = [
  {
    question: "Which toolchains are supported for FPGA development?",
    answer:
      "AMD/Xilinx Vivado & Vitis, Intel Quartus Prime & Platform Designer, ModelSim/Questa for simulation, MATLAB HDL Coder/System Generator for algorithm-to-RTL, and Vitis AI or OpenVINO flows for edge inference acceleration."
  },
  {
    question: "How do you ensure IEEE alignment and reproducibility?",
    answer:
      "Each project defines KPIs (throughput, latency, LUT/FF/DSP/BRAM use, power), maintains versioned RTL/testbenches, provides synthesis/place-route reports, and publishes a repeatable build script plus a structured IEEE-style manuscript."
  },
  {
    question: "Can projects be co‑supervised with Mumbai industry labs?",
    answer:
      "Yes—co‑supervision includes access to dev kits, fixture boards, high-speed IO (MIPI, LVDS, PCIe), and compliance benches; IP and data use are governed by MoU at induction with milestone reviews."
  },
  {
    question: "What deliverables are expected per academic level?",
    answer:
      "B.Tech: working prototype + resource/power report; M.Tech: optimized accelerator + HW/SW co‑design + benchmarks + publication draft; Ph.D.: novel architecture/runtime reconfiguration + multi‑board validation + datasets/IP."
  },
  {
    question: "How are low‑power constraints addressed on FPGA?",
    answer:
      "Clock gating, DSP reuse, memory tiling, quantization (INT8/INT4), dataflow scheduling, and partial reconfiguration to swap compute kernels while keeping static I/O logic alive."
  }
];

const FpgaReconfigurableComputingMumbai = () => {
  return (
    <div className="ECEProjectDevelopmentCenter">
      <div className="ECEProjectDevelopmentCenter-main">
        <div className="ECEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="ECEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>ECE FPGA Projects Mumbai</li>
              <li>Reconfigurable Computing ECE</li>
              <li>Vivado Quartus ModelSim</li>
              <li>VHDL Verilog SystemVerilog</li>
              <li>HLS Vitis AI Acceleration</li>
              <li>Hardware–Software Co‑Design</li>
              <li>Partial Reconfiguration</li>
              <li>DSP & High‑Speed IO</li>
              <li>Edge AI on FPGA</li>
              <li>IEEE FPGA 2023–2025</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="ECEProjectDevelopmentCenter-center">
            <h1>FPGA and Reconfigurable Computing – Project Development Center (Mumbai-Based)</h1>

            <section className="ECEProjectDevelopmentCenter-intro">
              <p>
                <strong>Overview</strong> — The center enables hardware–software co‑design across AI accelerators, adaptive DSP, edge devices, and HPC‑class pipelines. In Mumbai’s semiconductor and embedded ecosystem, projects evolve from algorithm simulation to RTL/HLS, synthesis, timing closure, and board‑level validation with IEEE‑aligned documentation.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-ecosystem">
              <h2>Mumbai innovation context</h2>
              <p>
                With design firms and incubators across Powai, Andheri, and Navi Mumbai, teams gain access to FPGA dev kits, high‑speed interfaces, and lab benches for bring‑up, enabling rapid prototyping in robotics, medical electronics, secure comms, and finance analytics.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-table">
              <h2>Technological & industrial comparison</h2>
              <div className="ECEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology area</th>
                      <th>Industry applications (Mumbai)</th>
                      <th>Tools & platforms</th>
                      <th>Collaboration focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>FPGA‑based embedded systems</td>
                      <td>Edge computing, smart automation</td>
                      <td>Vivado, Quartus, ModelSim</td>
                      <td>Dev kits, fixture boards, IO bring‑up</td>
                    </tr>
                    <tr>
                      <td>Reconfigurable AI accelerators</td>
                      <td>Compressed NN inference on edge</td>
                      <td>Vitis AI, HLS, ONNX flows</td>
                      <td>INT8/INT4 quant, pipeline tiling</td>
                    </tr>
                    <tr>
                      <td>Adaptive digital signal processing</td>
                      <td>Baseband filtering, channelization</td>
                      <td>HDL Coder, IP Integrator</td>
                      <td>Latency/throughput co‑optimization</td>
                    </tr>
                    <tr>
                      <td>Hardware–software co‑design</td>
                      <td>Cyber‑physical & instrumentation</td>
                      <td>System Generator, Linux/RTOS</td>
                      <td>Driver stacks, DMA, PCIe coherency</td>
                    </tr>
                    <tr>
                      <td>Low‑power FPGA architectures</td>
                      <td>Wearables, autonomous robotics</td>
                      <td>Power estimators, Design Compiler</td>
                      <td>Gating, PR, memory tiling</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                The matrix aligns FPGA capability tracks with Mumbai’s edge‑AI, communications, and automation deployments.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-cycle">
              <h2>B.Tech project development cycle</h2>
              <p>
                Foundations in RTL, synthesis, timing, and board bring‑up with application‑first prototypes.
              </p>
              <ul>
                <li><strong>Simulation</strong> — Testbenches in ModelSim/Questa; functional coverage basics.</li>
                <li><strong>RTL/HLS</strong> — Verilog/VHDL or HLS kernels; resource/latency targets.</li>
                <li><strong>Synthesis & PnR</strong> — Timing closure, constraints (SDC/XDC), clock domain checks.</li>
                <li><strong>Board bring‑up</strong> — GPIO/UART/SPI/I2C; simple DMA to memory.</li>
                <li><strong>Report</strong> — KPIs (MHz, LUT/FF/DSP/BRAM), power and demo video.</li>
              </ul>
              <p>
                Outcome: a working FPGA demo with reproducible builds and resource/power evidence.
              </p>

              <h2>M.Tech project development cycle</h2>
              <p>
                Domain‑specific accelerators and hybrid FPGA‑CPU models with rigorous benchmarking.
              </p>
              <ul>
                <li><strong>Parameterized IP</strong> — Tunable widths, tiling, and parallelism knobs.</li>
                <li><strong>Optimization</strong> — Loop unrolling, pipelining, dataflow orchestration.</li>
                <li><strong>Co‑design</strong> — Driver/DMA, cache policy, shared buffers.</li>
                <li><strong>Benchmarks</strong> — Latency/throughput/Joule/inference; compare to CPU/GPU.</li>
                <li><strong>Publication</strong> — IEEE draft with ablations and error bars.</li>
              </ul>
              <p>
                Outcome: an optimized accelerator with clear performance‑per‑watt and resource profiles.
              </p>

              <h2>Ph.D. project development cycle</h2>
              <p>
                Novel reconfigurable architectures, runtime PR, and multi‑FPGA scaling with theory and hardware proof.
              </p>
              <ul>
                <li><strong>Architecture</strong> — Dataflow graphs, NoC/AXI fabrics, scratchpad policies.</li>
                <li><strong>Runtime</strong> — Partial reconfiguration managers, thermal‑aware schedulers.</li>
                <li><strong>Validation</strong> — Multi‑board clusters, high‑speed links, formal checks.</li>
                <li><strong>Outcomes</strong> — IEEE manuscripts, IP cores, and artifact repositories.</li>
              </ul>
              <p>
                Outcome: original HW/SW co‑optimization with deployable cores and datasets.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-project-titles">
              <h2>IEEE‑aligned project titles</h2>
              <ul>
                <li>FPGA‑Based Real‑Time Object Detection Accelerator</li>
                <li>Dynamic Partial Reconfiguration for NN Pruning</li>
                <li>Hardware–Software Co‑Design of Edge AI Processors</li>
                <li>Reconfigurable Cryptographic Engine for IoT Security</li>
                <li>FPGA‑Integrated High‑Speed Baseband for 5G</li>
                <li>Adaptive Reconfigurable Architecture for Autonomous Systems</li>
                <li>AI‑Inspired Reconfigurable DSP for Biomedical Signals</li>
              </ul>
              <p>
                Titles are scoped for measurable speedups, power savings, and stable timing closure on real boards.
              </p>
            </section>

            <section className="ECEProjectDevelopmentCenter-conclusion">
              <h2>Conclusion</h2>
              <p>
                By coupling HLS/RTL rigor with board‑level validation, the center accelerates concept‑to‑prototype for Mumbai’s edge‑AI and embedded markets. Students graduate with reproducible flows, defensible metrics, and publication‑ready evidence aligned with IEEE expectations.
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
              <li><a href="/vlsi-design-mumbai">VLSI Design</a></li>
              <li><a href="/embedded-systems-mumbai">Embedded Systems</a></li>
              <li><a href="/ai-ml-electronics-mumbai">AI & ML in Electronics</a></li>
              <li><a href="/communication-systems-mumbai">Communication Systems</a></li>
              <li><a href="/signal-processing-mumbai">Signal Processing</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FpgaReconfigurableComputingMumbai;

