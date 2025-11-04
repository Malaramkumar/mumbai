import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import "./Departments.scss";

const DepartmentProjectExplorer = () => {
  const [activeDept, setActiveDept] = useState(null);
  const [activeMain, setActiveMain] = useState(null);

  const departments = {
    Mechanical: {
      ThermalEnergyEngineering: [
       "HeatTransferEnhancement", "ComputationalFluidDynamics", "SolarThermalGeothermal", "RefrigerationCryogenics", "WasteHeatRecoveryEnergy", "ThermalEnergy",
      ],
      DesignManufacturing: [
        "CADCAMMechanicalDesign", "AdditiveManufacturing3DPrinting", "AdvancedMachiningManufacturing", "ProductLifecycleManagementProject", "RapidPrototypingReverse", "SmartManufacturingIndustry",
      ],
      MaterialsMetallurgy: [
        "AdvancedCompositeMaterials", "NanomaterialsforMechanical", "WeldingCastingJoining", "CorrosionSurfaceEngineering", "MaterialTestingNonDestructive", "SmartIntelligentMaterials",
      ], 
      
    "RoboticsAutomation": [
    "IndustrialCollaborativeRobots",
    "MechatronicSystemsSmart",
    "AutonomousVehiclesMobile",
    "ControlSystemsRobotics",
    "AIMLRobotics",
    "RoboticProcessAutomation",
  ],
  "DynamicsVibration": [
    "StructuralDynamicsEarthquake",
    "NoiseVibrationHarshness",
    "RotorDynamicsBalancing",
    "ModalHarmonicAnalysis",
    "SeismicVibrationControl",
    "SmartMaterialsVibration",
  ],
  "FluidMechanicsHydraulics": [
    "AerodynamicsAeroPropulsion",
    "TurbomachineryGasTurbines",
    "HydraulicPneumaticControl",
    "MultiphaseFlowHeat",
    "FluidStructureInteraction",
    "BiofluidMechanicsMicrofluidics",
  ],
  "TribologyMaintenance": [
    "WearFrictionAnalysis",
    "LubricationTechnologyAdvanced",
    "BearingDesignCondition",
    "FaultDiagnosisRotating",
    "TribologyinMicroNano",
    "PredictivePreventiveMaintenance",
  ],
  "IndustrialProductionEngineering": [
    "LeanManufacturingTechniques",
    "SupplyChainProcess",
    "SmartFactorySystems",
    "CostTimeOptimization",
  ],
  "AutomobileTransportationSystems": [
    "ElectricHybridVehicleDesign",
    "VehicleDynamicsCrashSafety",
    "InternalCombustionEngine",
    "AutomotiveAerodynamicsFuel",
    "AdvancedVehicleSuspensions",
    "IntelligentTransportation",
  ],
  "ComputationalSimulationTechniques": [
    "FiniteElementAnalysis",
    "ComputationalFluidDynamic",
    "MultiBodyDynamics",
    "FractureMechanicsFatigue",
    "DigitalTwinSmartSimulation",
    "HighPerformanceComputing",
  ],
    },
    Civil: {
      "Structural Engineering": [],
  "Earthquake Resistant": [],
  "Steel and RCC Design": [],
  "Tall Building Analysis": [],
  "Geotechnical Engineering": [],
  "Soil Stabilization Techniques": [],
  "Foundation Design": [],
  "Transportation Engineering": [],
  "Smart Traffic Management": [],
  "Pavement Analysis & Design": [],
  "Environmental Engineering": [],
  "Water Treatment & Recycling": [],
  "Construction Project": [],
  "Remote Sensing & GIS": [],
    },
    ECE:{
  "VLSI Design and Verification": [],
  "Embedded Systems and IoT": [],
  "Communication & Signal Processing": [],
  "Power Electronics and Drives": [],
  "Renewable Energy Systems": [],
  "Embedded and IoT": [],
  "Wireless Communication and Networking": [],
  "AI and ML Applications in Electronics": [],
  "Internet of Medical Things": [],
  "Smart Antenna and Microwave": [],
  "FPGA and Reconfigurable Systems": [],
  "Cyber Physical and Smart Systems": [],
  "Control Systems and Mechatronics": [],
  "Satellite Communication and Navigation": [],
    },
    EEE: {
      "Smart Grid and Microgrid": [],
  "EV Charging Infrastructure and V2G": [],
  "Power System Stability": [],
  "Load Forecasting and Demand Response": [],
  "High Voltage DC": [],
  "Power System Protection": [],
  "Power Electronics for Renewables": [],
  "Embedded IoT for Energy": [],
  "Smart Lighting and Building Systems": [],
  "Condition Monitoring and Diagnosis": [],
  "Electric Machines for Coastal and Marine Applications": [],
  "Power Electronics for EV Motor Drives": [],
  "Wireless Power Transfer": [],
  "Artificial Intelligence in Power Systems": [],
  "Smart Metering and Demand Response": [],
    },
    CSE: {
      "Artificial Intelligence and Machine Learning": [],
  "Data Science and Big Data Analytics": [],
  "Internet of Things": [],
  "Cybersecurity and Privacy": [],
  "Blockchain and Distributed Systems": [],
  "Cloud and Edge Infrastructure": [],
  "Quantum Computing and Information": [],
  "Human Computer Interaction": [],
  "Computer Vision and Image Processing": [],
  "Autonomous Systems and Robotics": [],
  "Natural Language Processing": [],
  "Digital Twins and Simulation": [],
  "Quantum Networking and Communication": [],
  "Web Application Development": [],
  "Mobile App Development": [],
  "MVP Development": [],
  "Startup Software Development": [],
  "Enterprise Software Solutions": [],
  "Dedicated Development Teams": [],
  "Design Lab (UI/UX Development)": [],
  "QA & Testing Services": [],
  "Java Development": [],
  "PHP Development": [],
  "Spring Development": [],
  "C# Development": [],
  "Machine Learning Based Systems": [],
  "Python Development": [],
  "MATLAB Projects": [],
  ".NET Projects": [],
  "R Projects": [],
  "VLSI Projects": [],
  "OPNET Projects": [],
  "Robotics Projects": [],
  "Ansys Projects": [],
  "SolidWorks Projects": [],
  "Cartia Projects": [],
  "LabVIEW Projects": [],
  "Power System Projects": [],
  "Power Documents": [],
  "Image Processing": [],
  "Signal Processing": [],
    },
  };

  return (
    <div className="deptExplorer-container">
      <h2 className="deptExplorer-title">Departments</h2>

      <div className="deptExplorer-list">
        {Object.entries(departments).map(([dept, topics]) => (
          <div key={dept} className="deptExplorer-department">
            <div
              className="deptExplorer-header"
              onClick={() => setActiveDept(activeDept === dept ? null : dept)}
            >
              <h3>{dept}</h3>
              <span className="icon">
                {activeDept === dept ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </div>

            {activeDept === dept && (
              <div className="deptExplorer-mainTopics">
                {Object.entries(topics).map(([main, subs]) => (
                  <div
                    key={main}
                    className={`deptExplorer-main ${
                      activeMain === main ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveMain(main)}
                    onMouseLeave={() => setActiveMain(null)}
                  >
                    <Link
                      to={`/${dept.toLowerCase()}/${main
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      {main}
                    </Link>

                    {activeMain === main && subs.length > 0 && (
                      <div className="deptExplorer-subtopics">
                        {subs.map((sub) => (
                          <Link
                            key={sub}
                            to={`/${dept.toLowerCase()}/${main
                              .replace(/\s+/g, "-")
                              .toLowerCase()}/${sub
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`}
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentProjectExplorer;
