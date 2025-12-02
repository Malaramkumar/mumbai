// src/pages/DepartmentsPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Departments.scss";

const DEPARTMENTS = [
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    path: "/mechanical",
    isMain: true,
    topics: [
      {
        name: "Thermal Energy Engineering",
        path: "/mechanical/thermal-energy-engineering",
        subs: [
          { name: "Heat Transfer Enhancement", path: "/mechanical/thermal-energy-engineering/heat-transfer-enhancement" },
          { name: "Computational Fluid Dynamics", path: "/mechanical/thermal-energy-engineering/computational-fluid-dynamics" },
          { name: "Solar Thermal & Geothermal", path: "/mechanical/thermal-energy-engineering/solar-thermal-geothermal" },
          { name: "Refrigeration & Cryogenics", path: "/mechanical/thermal-energy-engineering/refrigeration-cryogenics" },
          { name: "Waste Heat Recovery & Energy", path: "/mechanical/thermal-energy-engineering/waste-heat-recovery-energy" },
          { name: "Thermal Energy", path: "/mechanical/thermal-energy-engineering/thermal-energy" },
        ],
      },
      {
        name: "Design & Manufacturing",
        path: "/mechanical/design-manufacturing",
        subs: [
          { name: "CAD/CAM Mechanical Design", path: "/mechanical/design-manufacturing/cadcam-mechanical-design" },
          { name: "Additive Manufacturing (3D Printing)", path: "/mechanical/design-manufacturing/additive-manufacturing-3d-printing" },
          { name: "Advanced Machining & Manufacturing", path: "/mechanical/design-manufacturing/advanced-machining-manufacturing" },
          { name: "Product Lifecycle Management", path: "/mechanical/design-manufacturing/product-lifecycle-management-project" },
          { name: "Rapid Prototyping & Reverse Engineering", path: "/mechanical/design-manufacturing/rapid-prototyping-reverse" },
          { name: "Smart Manufacturing & Industry 4.0", path: "/mechanical/design-manufacturing/smart-manufacturing-industry" },
        ],
      },
      {
    name: "Materials & Metallurgy",
    path: "/mechanical/materials-metallurgy",
    subs: [
      { name: "Advanced Composite Materials", path: "/mechanical/materials-metallurgy/advanced-composite-materials" },
      { name: "Nanomaterials for Mechanical", path: "/mechanical/materials-metallurgy/nanomaterials-for-mechanical" },
      { name: "Welding, Casting & Joining", path: "/mechanical/materials-metallurgy/welding-casting-joining" },
      { name: "Corrosion & Surface Engineering", path: "/mechanical/materials-metallurgy/corrosion-surface-engineering" },
      { name: "Material Testing & Non-Destructive", path: "/mechanical/materials-metallurgy/material-testing-non-destructive" },
      { name: "Smart & Intelligent Materials", path: "/mechanical/materials-metallurgy/smart-intelligent-materials" },
    ],
  },
  {
    name: "Robotics & Automation",
    path: "/mechanical/robotics-automation",
    subs: [
      { name: "Industrial & Collaborative Robots", path: "/mechanical/robotics-automation/industrial-collaborative-robots" },
      { name: "Mechatronic Systems & Smart Devices", path: "/mechanical/robotics-automation/mechatronic-systems-smart" },
      { name: "Autonomous Vehicles & Mobile Robots", path: "/mechanical/robotics-automation/autonomous-vehicles-mobile" },
      { name: "Control Systems in Robotics", path: "/mechanical/robotics-automation/control-systems-robotics" },
      { name: "AI & ML in Robotics", path: "/mechanical/robotics-automation/ai-ml-robotics" },
      { name: "Robotic Process Automation (RPA)", path: "/mechanical/robotics-automation/robotic-process-automation" },
    ],
  },
  {
    name: "Dynamics & Vibration",
    path: "/mechanical/dynamics-vibration",
    subs: [
      { name: "Structural Dynamics & Earthquake", path: "/mechanical/dynamics-vibration/structural-dynamics-earthquake" },
      { name: "Noise, Vibration & Harshness", path: "/mechanical/dynamics-vibration/noise-vibration-harshness" },
      { name: "Rotor Dynamics & Balancing", path: "/mechanical/dynamics-vibration/rotor-dynamics-balancing" },
      { name: "Modal & Harmonic Analysis", path: "/mechanical/dynamics-vibration/modal-harmonic-analysis" },
      { name: "Seismic Vibration Control", path: "/mechanical/dynamics-vibration/seismic-vibration-control" },
      { name: "Smart Materials in Vibration", path: "/mechanical/dynamics-vibration/smart-materials-vibration" },
    ],
  },
  {
    name: "Fluid Mechanics & Hydraulics",
    path: "/mechanical/fluid-mechanics-hydraulics",
    subs: [
      { name: "Aerodynamics & Aero Propulsion", path: "/mechanical/fluid-mechanics-hydraulics/aerodynamics-aero-propulsion" },
      { name: "Turbomachinery & Gas Turbines", path: "/mechanical/fluid-mechanics-hydraulics/turbomachinery-gas-turbines" },
      { name: "Hydraulic & Pneumatic Control", path: "/mechanical/fluid-mechanics-hydraulics/hydraulic-pneumatic-control" },
      { name: "Multiphase Flow & Heat Transfer", path: "/mechanical/fluid-mechanics-hydraulics/multiphase-flow-heat" },
      { name: "Fluid-Structure Interaction", path: "/mechanical/fluid-mechanics-hydraulics/fluid-structure-interaction" },
      { name: "Biofluid Mechanics & Microfluidics", path: "/mechanical/fluid-mechanics-hydraulics/biofluid-mechanics-microfluidics" },
    ],
  },
  {
    name: "Tribology & Maintenance",
    path: "/mechanical/tribology-maintenance",
    subs: [
      { name: "Wear & Friction Analysis", path: "/mechanical/tribology-maintenance/wear-friction-analysis" },
      { name: "Lubrication Technology (Advanced)", path: "/mechanical/tribology-maintenance/lubrication-technology-advanced" },
      { name: "Bearing Design & Condition", path: "/mechanical/tribology-maintenance/bearing-design-condition" },
      { name: "Fault Diagnosis (Rotating Machinery)", path: "/mechanical/tribology-maintenance/fault-diagnosis-rotating" },
      { name: "Tribology in Micro/Nano Systems", path: "/mechanical/tribology-maintenance/tribology-in-micro-nano" },
      { name: "Predictive & Preventive Maintenance", path: "/mechanical/tribology-maintenance/predictive-preventive-maintenance" },
    ],
  },
  {
    name: "Industrial & Production Engineering",
    path: "/mechanical/industrial-production-engineering",
    subs: [
      { name: "Lean Manufacturing Techniques", path: "/mechanical/industrial-production-engineering/lean-manufacturing-techniques" },
      { name: "Supply Chain Process", path: "/mechanical/industrial-production-engineering/supply-chain-process" },
      { name: "Smart Factory Systems", path: "/mechanical/industrial-production-engineering/smart-factory-systems" },
      { name: "Cost & Time Optimization", path: "/mechanical/industrial-production-engineering/cost-time-optimization" },
    ],
  },
  {
    name: "Automobile & Transportation Systems",
    path: "/mechanical/automobile-transportation-systems",
    subs: [
      { name: "Electric & Hybrid Vehicle Design", path: "/mechanical/automobile-transportation-systems/electric-hybrid-vehicle-design" },
      { name: "Vehicle Dynamics & Crash Safety", path: "/mechanical/automobile-transportation-systems/vehicle-dynamics-crash-safety" },
      { name: "Internal Combustion Engines", path: "/mechanical/automobile-transportation-systems/internal-combustion-engine" },
      { name: "Automotive Aerodynamics & Fuel Systems", path: "/mechanical/automobile-transportation-systems/automotive-aerodynamics-fuel" },
      { name: "Advanced Vehicle Suspensions", path: "/mechanical/automobile-transportation-systems/advanced-vehicle-suspensions" },
      { name: "Intelligent Transportation Systems", path: "/mechanical/automobile-transportation-systems/intelligent-transportation" },
    ],
  },
  {
    name: "Computational Simulation Techniques",
    path: "/mechanical/computational-simulation-techniques",
    subs: [
      { name: "Finite Element Analysis (FEA)", path: "/mechanical/computational-simulation-techniques/finite-element-analysis" },
      { name: "Computational Fluid Dynamics (CFD)", path: "/mechanical/computational-simulation-techniques/computational-fluid-dynamic" },
      { name: "Multi-Body Dynamics", path: "/mechanical/computational-simulation-techniques/multi-body-dynamics" },
      { name: "Fracture Mechanics & Fatigue", path: "/mechanical/computational-simulation-techniques/fracture-mechanics-fatigue" },
      { name: "Digital Twin & Smart Simulation", path: "/mechanical/computational-simulation-techniques/digital-twin-smart-simulation" },
      { name: "High Performance Computing (HPC)", path: "/mechanical/computational-simulation-techniques/high-performance-computing" },
    ],
  },
    ],
  },
{
  id: "cse",
  title: "Computer Science & Engineering",
  path: "/cse",
  topics: [
    { name: "Artificial Intelligence & Machine Learning", path: "/cse/artificial-intelligence-machine-learning" },
    { name: "Custom Software Development", path: "/cse/custom-software-development" },
    { name: "Data Science & Big Data Analytics", path: "/cse/data-science-big-data-analytics" },
    { name: "Internet of Things (IoT)", path: "/cse/internet-of-things" },
    { name: "Cybersecurity & Privacy", path: "/cse/cybersecurity-privacy" },
    { name: "Blockchain & Distributed Systems", path: "/cse/blockchain-distributed-systems" },
    { name: "Cloud & Edge Infrastructure", path: "/cse/cloud-edge-infrastructure" },
    { name: "Quantum Computing & Information", path: "/cse/quantum-computing-information" },
    { name: "Human-Computer Interaction", path: "/cse/human-computer-interaction" },
    { name: "Computer Vision & Image Processing", path: "/cse/computer-vision-image" },
    { name: "Autonomous Systems & Robotics", path: "/cse/autonomous-systems-robotics" },
    { name: "Natural Language Processing", path: "/cse/natural-language-processing" },
    { name: "Digital Twins & Simulation", path: "/cse/digital-twins-simulation" },
    { name: "Quantum Networking & Communication", path: "/cse/quantum-networking-communication" },
    { name: "Web Application Development", path: "/cse/web-application-development" },
    { name: "Mobile App Development", path: "/cse/mobile-app-development" },
    { name: "MVP Development", path: "/cse/mvp-development" },
    { name: "Startup Software Development", path: "/cse/startup-software-development" },
    { name: "Enterprise Software Solutions", path: "/cse/enterprise-software-solutions" },
    { name: "Dedicated Development Teams", path: "/cse/dedicated-development-teams" },
    { name: "Design Lab UI/UX Development", path: "/cse/design-lab-ui-ux-development" },
    { name: "QA & Testing Services", path: "/cse/qa-testing-services" },
    { name: "Java Development", path: "/cse/java" },
    { name: "PHP Development", path: "/cse/php-development" },
    { name: "Spring Development", path: "/cse/spring-development" },
    { name: "C# Development", path: "/cse/csharp-development" },
    { name: "Machine Learning Based Projects", path: "/cse/machine-learning-based" },
    { name: "Python Development", path: "/cse/python-development" },
    { name: "MATLAB Projects", path: "/cse/matlab-projects" },
    { name: "DotNet Projects", path: "/cse/dotnet-projects" },
    { name: "R Projects", path: "/cse/r-projects" },
    { name: "NS3 Projects", path: "/cse/ns3-projects" },
    { name: "VLSI Projects", path: "/cse/vlsi-projects" },
    { name: "OPNET Projects", path: "/cse/opnet-projects" },
    { name: "Robotics Projects", path: "/cse/robotics-projects" },
    { name: "ANSYS Projects", path: "/cse/ansys-projects" },
    { name: "SolidWorks Projects", path: "/cse/solidworks-projects" },
    { name: "Cartia Projects", path: "/cse/cartia-projects" },
    { name: "LabVIEW Projects", path: "/cse/labview-projects" },
    { name: "Power System Projects", path: "/cse/power-system-projects" },
    { name: "Power Documents", path: "/cse/power-documents" },
    { name: "Image Processing", path: "/cse/image-processing" },
    { name: "Signal Processing", path: "/cse/signal-processing" },
  ],
},

{
  id: "civil",
  title: "Civil Engineering",
  path: "/civil",
  topics: [
    { name: "Structural Engineering", path: "/civil/structural-engineering" },
    { name: "Bridge Design & Monitoring", path: "/civil/bridgedesign-and-monitoring" },
    { name: "Earthquake Resistant Design", path: "/civil/earthquake-resistant" },
    { name: "Steel & RCC Design", path: "/civil/steel-and-rcc-design" },
    { name: "Tall Building Analysis", path: "/civil/tall-building-analysis" },
    { name: "Geotechnical Engineering", path: "/civil/geotechnical-engineering" },
    { name: "Soil Stabilization Techniques", path: "/civil/soil-stabilization-techniques" },
    { name: "Foundation Design", path: "/civil/foundation-design" },
    { name: "Transportation Engineering", path: "/civil/transportation-engineering" },
    { name: "Smart Traffic Management", path: "/civil/smart-traffic-management" },
    { name: "Pavement Analysis & Design", path: "/civil/pavement-analysis-design" },
    { name: "Environmental Engineering", path: "/civil/environmental-engineering" },
    { name: "Water Treatment & Recycling", path: "/civil/water-treatment-recycling" },
    { name: "Construction Project Management", path: "/civil/construction-project" },
    { name: "Remote Sensing & GIS", path: "/civil/remote-sensing-gis" },
  ],
},

 {
  id: "ece",
  title: "Electronics & Communication",
  path: "/ece",
  topics: [
    { name: "VLSI Design & Verification", path: "/ece/vlsi-design-verification" },
    { name: "Embedded Systems & IoT", path: "/ece/embedded-systems-iot" },
    { name: "Communication & Signal Processing", path: "/ece/communication-signal-processing" },
    { name: "Power Electronics & Drives", path: "/ece/power-electronics-drives" },
    { name: "Renewable Energy Systems", path: "/ece/renewable-energy-systems" },
    { name: "Embedded & IoT Applications", path: "/ece/embedded-iot" },
    { name: "Wireless Communication & Networking", path: "/ece/wireless-communication-networking" },
    { name: "AI & ML Applications in Electronics", path: "/ece/ai-ml-applications-electronics" },
    { name: "Internet of Medical Things (IoMT)", path: "/ece/internet-of-medical-things" },
    { name: "Smart Antenna & Microwave Engineering", path: "/ece/smart-antenna-microwave" },
    { name: "FPGA & Reconfigurable Systems", path: "/ece/fpga-reconfigurable-systems" },
    { name: "Cyber Physical & Smart Systems", path: "/ece/cyber-physical-smart-systems" },
    { name: "Control Systems & Mechatronics", path: "/ece/control-systems-mechatronics" },
    { name: "Satellite Communication & Navigation", path: "/ece/satellite-communication-navigation" },
    { name: "Optical Communication & Photonics", path: "/ece/optical-communication-photonics" },
    { name: "Robotics & Industrial Automation", path: "/ece/robotics-industrial-automation-mumbai" },
  ],
},

{
  id: "eee",
  title: "Electrical & Electronics",
  path: "/eee",
  topics: [
    { name: "Smart Grid & Microgrid", path: "/eee/smart-grid-microgrid" },
    { name: "EV Charging Infrastructure & V2G", path: "/eee/ev-charging-infrastructure-v2g" },
    { name: "Power System Stability", path: "/eee/power-system-stability" },
    { name: "Load Forecasting & Demand Response", path: "/eee/load-forecasting-demand-response" },
    { name: "High Voltage DC Systems", path: "/eee/high-voltage-dc" },
    { name: "Power System Protection", path: "/eee/power-system-protection" },
    { name: "Power Electronics for Renewables", path: "/eee/power-electronics-renewables" },
    { name: "Embedded IoT for Energy Systems", path: "/eee/embedded-iot-energy" },
    { name: "Smart Lighting & Building Automation", path: "/eee/smart-lighting-building" },
    { name: "Condition Monitoring & Diagnosis", path: "/eee/condition-monitoring-diagnosis" },
    { name: "Electric Machines for Coastal & Marine", path: "/eee/electric-machines-coastal-marine" },
    { name: "Power Electronics & EV Motor Drives", path: "/eee/power-electronics-ev-motor-drives" },
    { name: "Wireless Power Transfer", path: "/eee/wireless-power-transfer" },
    { name: "AI in Power Systems", path: "/eee/artificial-intelligence-power" },
    { name: "Smart Metering & Demand Response", path: "/eee/smart-metering-demand-response" },
  ],
},
];

const DepartmentsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const deptParam = query.get("dept");

  const [activeDept, setActiveDept] = useState(deptParam || "mechanical");

  useEffect(() => {
    if (deptParam) {
      setActiveDept(deptParam);
    }
  }, [deptParam]);

  const handleTabClick = (id) => {
    setActiveDept(id);
    navigate(`/departments?dept=${id}`);
  };

  const current = DEPARTMENTS.find(d => d.id === activeDept);

  return (
    <div className="dept-wrapper">
      <div className="dept-tabs">
        {DEPARTMENTS.map(dept => (
          <button
            key={dept.id}
            className={`tab ${activeDept === dept.id ? "active" : ""}`}
            onClick={() => handleTabClick(dept.id)}
          >
            {dept.title}
          </button>
        ))}
      </div>

      <div className="dept-content">
        <h1>{current.title}</h1>

        <div className="topic-grid">
          {current.topics.map((topic, i) => (
            <div
              key={i}
              className="topic-card"
              onClick={() => navigate(topic.path)}
            >
              <h2>{topic.name}</h2>

              {current.isMain && topic.subs && (
                <ul className="sub-list">
                  {topic.subs.map((sub, j) => (
                    <li
                      key={j}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(sub.path);
                      }}
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentsPage;
