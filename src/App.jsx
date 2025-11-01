import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./assets/ScrollToTop";
import Home from './pages/Home'; 
import PhDConsulting from './pages/PhdConsulting';     
import CareerAfterPhD from './title/CareerOpportunities';
import TopMNCHiringPhD from './title/TopMNC';
import TopPhDCollegesMumbai from './title/TopPhdCollege';
import FundingPhd from "./title/FundingPhd";
import PhDResearchConsultant from "./title/PhDAdmissionAssistance/PhDResearchConsultant";
import PhDAdmission2025Mumbai from './title/PhDAdmissionAssistance/PhDAdmission2025Mumbai';
import PhDAdmissionMumbaiUniversity from './title/PhDAdmissionAssistance/PhDAdmissionMumbaiUniversity';
import AdmissionPuneUniversity from './title/PhDAdmissionAssistance/PhDAdmissionPuneUniversity';
import PhDAssistancePune from './title/PhDAdmissionAssistance/PhDAdmissionAssistancePune';
import PhdAdmissionHelpMumbai from './title/PhDAdmissionAssistance/PhdAdmissionHelpMumbai';
import PhdOnlineAdmissionMumbai from './title/PhDAdmissionAssistance/PhdOnlineAdmissionMumbai';
import PhdAdmissionAssistanceMumbai2025 from './title/PhDAdmissionAssistance/PhdAdmissionAssistanceMumbai2025';
import PhDAdmissionAssistanceforThreeState from "./pages/PhDAdmissionAssistanceforThreeState"
import PhDGuideSelection from "./title/Subtitle2/PhdGuideSelectionMumbai";
import TopicSelectionSupport from "./title/Subtitle2/PhDTopicSelectionMumbai";
import PhDApplicationHelpMumbai from "./title/Subtitle2/PhDApplicationHelpMumbai";
import ProposalWritingServices from "./title/Subtitle2/PhDProposalWritingMumbai";
import UniversitySelection from "./title/Subtitle2/UniversitySelectionMumbai";

//3.0

import Main3 from "./pages/PhDResearchProposalWritingServices"
//main page
import FundingProposalSupport from './title/main3/FundingProposalSupport';
import ResearchMethodologySupport from './title/main3/ResearchMethodologySupport';
import PhDMethodologyRoadmap from './title/main3/PhDMethodologyRoadmap';
//college
import Amitycollege from './college/AmityPhDPage';
import AtlasPhD from './college/AtlasPhD';
import HBSIPhDEnhancedPage from './college/HomiBhabhaStateUniversity';
import HBNIPhDEnhancedPage from "./college/HomiBhabhaNationalInstitute";
import IGIDRPhD from './college/IndiraGandhiInstitute';
import ICTPhD from './college/InstituteofChemicalTechnology';
import IIPSPhD from './college/InternationalInstituteforPopulationSciences';
import HSNCPhD from './college/Hyderabad_SIND_NationalCollegiateUniversity';
import NMIMSPhD from './college/NarseeMonjeeInstituteofManagementStudies';
import SNDTPhDPage from './college/SmtNathibaiDamodarThackerseyuniversity';
import SVUPhDPage from './college/SomaiyaVidyaviharUniversity';
import TifrPhDPage from './college/TataInstituteofFundamentalResearch';
import TissPhDPage from './college/TataInstituteofSocialSciences';
import CsmuPhDPage from './college/ChhatrapatiShivajiMaharajUniversity';
import DyPatilPhDPage from './college/DYPatilUniversity';
import AdypuPhDPage from './college/AjeenkyaDYPatilUniversityPune';
import BharatiVidyapeethPhDPage from './college/BharatiVidyapeethUniversity';
import DeccanCollegePhDPage from './college/DeccanCollege';
import DrVishwanathKaradMIT from './college/DrVishwanathKaradMIT';
import FLAMEPhDPage from './college/FlameUniversityPune';
import GIPEPhDPage from './college/GokhaleInstituteofPoliticsandEconomicsPune';
import MITADTPhDPage from './college/MITArtDesign&TechnologyUniversityPune';
import SPPUPhDPage from './college/SavitribaiPhulePuneUniversity';
import SpicerPhDPage from './college/SpicerAdventistUniversityPune';
import SbupPhDPage from './college/SriBalajiUniversityPune';
import SiuPhDPage from './college/SymbiosisInternationalPune';
import SspuPhDPage from './college/SymbiosisSkillsandProfessionalUniversityPune';
import VishwakarmaPhDPage from './college/VishwakarmaUniversityPune';
import MumbaiPhDOverview from "./college/UniversityofMumbai"
 
import NICMARPhDPage from './college/NICMARUniversityPune';
 
//mech 
import ThermalEnergyEngineering from "./Mechanical/ThermalEnergyEngineering"
      //Sub 
      import HeatTransferEnhancement from "./Mechanical/ThermalEnergyEngineering/HeatTransferEnhancement"
      import ComputationalFluidDynamics from "./Mechanical/ThermalEnergyEngineering/ComputationalFluidDynamics"
      import SolarThermalGeothermal from "./Mechanical/ThermalEnergyEngineering/SolarThermalGeothermal"
      import RefrigerationCryogenics from "./Mechanical/ThermalEnergyEngineering/RefrigerationCryogenics"
      import WasteHeatRecoveryEnergy from "./Mechanical/ThermalEnergyEngineering/WasteHeatRecoveryEnergy"
      import ThermalEnergy from "./Mechanical/ThermalEnergyEngineering/ThermalEnergy"
import DesignManufacturing from "./Mechanical/DesignManufacturing"
      //
      import CADCAMMechanicalDesign from "./Mechanical/DesignManufacturing/CADCAMMechanicalDesign"
      import AdditiveManufacturing3DPrinting from "./Mechanical/DesignManufacturing/AdditiveManufacturing3DPrinting"
      import AdvancedMachiningManufacturing from "./Mechanical/DesignManufacturing/AdvancedMachiningManufacturing"
      import ProductLifecycleManagementProject from "./Mechanical/DesignManufacturing/ProductLifecycleManagementProject"
      import RapidPrototypingReverse from "./Mechanical/DesignManufacturing/RapidPrototypingReverse"
      import SmartManufacturingIndustry from "./Mechanical/DesignManufacturing/SmartManufacturingIndustry"
import MaterialsMetallurgy from "./Mechanical/MaterialsMetallurgy"
      //sub
      import AdvancedCompositeMaterials from "./Mechanical/MaterialsMetallurgy/AdvancedCompositeMaterials"
      import NanomaterialsforMechanical from "./Mechanical/MaterialsMetallurgy/NanomaterialsforMechanical"
      import WeldingCastingJoining from "./Mechanical/MaterialsMetallurgy/WeldingCastingJoining"
      import CorrosionSurfaceEngineering from "./Mechanical/MaterialsMetallurgy/CorrosionSurfaceEngineering"
      import MaterialTestingNonDestructive from "./Mechanical/MaterialsMetallurgy/MaterialTestingNonDestructive"
      import SmartIntelligentMaterials from "./Mechanical/MaterialsMetallurgy/SmartIntelligentMaterials"
import RoboticsAutomation from "./Mechanical/RoboticsAutomation"
      //sub
      import IndustrialCollaborativeRobots from "./Mechanical/RoboticsAutomation/IndustrialCollaborativeRobots"
      import MechatronicSystemsSmart from "./Mechanical/RoboticsAutomation/MechatronicSystemsSmart"
      import AutonomousVehiclesMobile from "./Mechanical/RoboticsAutomation/AutonomousVehiclesMobile"
      import ControlSystemsRobotics from "./Mechanical/RoboticsAutomation/ControlSystemsRobotics"
      import AIMLRobotics from "./Mechanical/RoboticsAutomation/AIMLRobotics"
      import RoboticProcessAutomation from "./Mechanical/RoboticsAutomation/RoboticProcessAutomation"
import DynamicsVibration from "./Mechanical/DynamicsVibration"
      //sub
      import StructuralDynamicsEarthquake from "./Mechanical/DynamicsVibration/StructuralDynamicsEarthquake"
      import NoiseVibrationHarshness from "./Mechanical/DynamicsVibration/NoiseVibrationHarshness"
      import RotorDynamicsBalancing from "./Mechanical/DynamicsVibration/RotorDynamicsBalancing"
      import ModalHarmonicAnalysis from "./Mechanical/DynamicsVibration/ModalHarmonicAnalysis"
      import SeismicVibrationControl from "./Mechanical/DynamicsVibration/SeismicVibrationControl"
      import SmartMaterialsVibration from "./Mechanical/DynamicsVibration/SmartMaterialsVibration"
import FluidMechanicsHydraulics from "./Mechanical/FluidMechanicsHydraulics"
      //sub
      import AerodynamicsAeroPropulsion from "./Mechanical/FluidMechanicsHydraulics/AerodynamicsAeroPropulsion"
      import TurbomachineryGasTurbines from "./Mechanical/FluidMechanicsHydraulics/TurbomachineryGasTurbines"
      import HydraulicPneumaticControl from "./Mechanical/FluidMechanicsHydraulics/HydraulicPneumaticControl"
      import MultiphaseFlowHeat from "./Mechanical/FluidMechanicsHydraulics/MultiphaseFlowHeat"
      import FluidStructureInteraction from "./Mechanical/FluidMechanicsHydraulics/FluidStructureInteraction"
      import BiofluidMechanicsMicrofluidics from "./Mechanical/FluidMechanicsHydraulics/BiofluidMechanicsMicrofluidics"
import TribologyMaintenance from "./Mechanical/TribologyMaintenance"
      //sub
      import WearFrictionAnalysis from "./Mechanical/TribologyMaintenance/WearFrictionAnalysis"
      import LubricationTechnologyAdvanced from "./Mechanical/TribologyMaintenance/LubricationTechnologyAdvanced"
      import BearingDesignCondition from "./Mechanical/TribologyMaintenance/BearingDesignCondition"
      import FaultDiagnosisRotating from "./Mechanical/TribologyMaintenance/FaultDiagnosisRotating"
      import TribologyinMicroNano from "./Mechanical/TribologyMaintenance/TribologyinMicroNano"
      import PredictivePreventiveMaintenance from "./Mechanical/TribologyMaintenance/PredictivePreventiveMaintenance"
import IndustrialProductionEngineering from "./Mechanical/IndustrialProductionEngineering"
      //sub
      import LeanManufacturingTechniques from "./Mechanical/IndustrialProductionEngineering/LeanManufacturingTechniques"
      import SupplyChainProcess from "./Mechanical/IndustrialProductionEngineering/SupplyChainProcess" 
      import SmartFactorySystems from "./Mechanical/IndustrialProductionEngineering/SmartFactorySystems"
      import CostTimeOptimization from "./Mechanical/IndustrialProductionEngineering/CostTimeOptimization"
import AutomobileTransportationSystems from "./Mechanical/AutomobileTransportationSystems"
      //sub
      import ElectricHybridVehicleDesign from "./Mechanical/AutomobileTransportationSystems/ElectricHybridVehicleDesign"
      import VehicleDynamicsCrashSafety from "./Mechanical/AutomobileTransportationSystems/VehicleDynamicsCrashSafety" 
      import InternalCombustionEngine from "./Mechanical/AutomobileTransportationSystems/InternalCombustionEngine"
      import AutomotiveAerodynamicsFuel from "./Mechanical/AutomobileTransportationSystems/AutomotiveAerodynamicsFuel"
      import AdvancedVehicleSuspensions from "./Mechanical/AutomobileTransportationSystems/AdvancedVehicleSuspensions"
      import IntelligentTransportation from "./Mechanical/AutomobileTransportationSystems/IntelligentTransportation"
import ComputationalSimulationTechniques from "./Mechanical/ComputationalSimulationTechniques"
      import FiniteElementAnalysis from "./Mechanical/ComputationalSimulationTechniques/FiniteElementAnalysis"
      import ComputationalFluidDynamic from "./Mechanical/ComputationalSimulationTechniques/ComputationalFluidDynamic"
      import MultiBodyDynamics from "./Mechanical/ComputationalSimulationTechniques/MultiBodyDynamics"
      import FractureMechanicsFatigue from "./Mechanical/ComputationalSimulationTechniques/FractureMechanicsFatigue"
      import DigitalTwinSmartSimulation from "./Mechanical/ComputationalSimulationTechniques/DigitalTwinSmartSimulation"
      import HighPerformanceComputing from "./Mechanical/ComputationalSimulationTechniques/HighPerformanceComputing" 

//CSE
import ArtificialIntelligenceMachineLearning from "./cs/ArtificialIntelligenceMachineLearning"
import DataScience_BigDataAnalytics from "./cs/DataScience_BigDataAnalytics"
import InternetofThings from "./cs/InternetofThings"
import CybersecurityPrivacy from "./cs//CybersecurityPrivacy"
import BlockchainDistributedSystems from "./cs/BlockchainDistributedSystems"
import CloudEdgeInfrastructure from "./cs/CloudEdgeInfrastructure"
import QuantumComputing_Information from "./cs/QuantumComputing_Information"
import HumanComputerInteraction from "./cs/HumanComputerInteraction"
import ComputerVisionImage from "./cs/ComputerVisionImage"
import AutonomousSystemsRobotics from "./cs/AutonomousSystemsRobotics"
import NaturalLanguageProcessing from "./cs/NaturalLanguageProcessing"
import DigitalTwinsSimulation from "./cs/DigitalTwinsSimulation"
import QuantumNetworkingCommunication from "./cs/QuantumNetworkingCommunication"
import WebApplicationDevelopment from "./cs/WebApplicationDevelopment"
import MobileAppDevelopment from "./cs/MobileAppDevelopment" 
import MVPDevelopment from "./cs/MVPDevelopment"
import StartupSoftwareDevelopment from "./cs/StartupSoftwareDevelopment"
import EnterpriseSoftwareSolutions from "./cs/EnterpriseSoftwareSolutions"
import DedicatedDevelopmentTeams from "./cs/DedicatedDevelopmentTeams"
import DesignLabUI_UXDevelopment from "./cs/DesignLabUI_UXDevelopment"
import QATestingServices from "./cs/QATestingServices"
import Java from "./cs/Java"
import PHPDevelopment from "./cs/PHPDevelopment"
import SpringDevelopment from "./cs/SpringDevelopment"
import CSharpDevelopment from "./cs/CSharpDevelopment"
import MachineLearningBased from "./cs/MachineLearningBased"
import PythonDevelopment from "./cs/PythonDevelopment"

import MATLABProjects from "./cs/MATLABProjects" 
import DotNetProjects from "./cs/DotNetProjects"
import RProjects from "./cs/RProjects" 
import VLSIProjects from "./cs/VLSIProjects"
import OPNETProjects from "./cs/OPNETProjects"
import RoboticsProjects from "./cs/RoboticsProjects" 
import AnsysProjects from "./cs/AnsysProjects"
import SolidWorksProjects from "./cs/SolidWorksProjects"
import CartiaProjects from "./cs/CartiaProjects"
import LabVIEWProjects from "./cs/LabVIEWProjects"
import PowerSystemProjects from "./cs/PowerSystemProjects"
import PowerDocuments from "./cs/PowerDocuments"
import ImageProcessing from "./cs/ImageProcessing"
import SignalProcessing from "./cs/SignalProcessing"

//Civil
import StructuralEngineering from './Civil/StructuralEngineering'
import EarthquakeResistant from "./Civil/EarthquakeResistant"
import SteelAndRccDesign from './Civil/SteelAndRccDesign'
import TallBuildingAnalysis from "./Civil/TallBuildingAnalysis"
import GeotechnicalEngineering from "./Civil/GeotechnicalEngineering"
import SoilStabilizationTechniques from "./Civil/SoilStabilizationTechniques"
import FoundationDesign from "./Civil/FoundationDesign"
import TransportationEngineering from "./Civil/TransportationEngineering"
import SmartTrafficManagement from "./Civil/SmartTrafficManagement"
import PavementAnalysisDesign from "./Civil/PavementAnalysisDesign"
import EnvironmentalEngineering from "./Civil/EnvironmentalEngineering"
import WaterTreatmentRecycling from "./Civil/WaterTreatmentRecycling" 
import ConstructionProject from "./Civil/ConstructionProject" 
import RemoteSensingGIS from "./Civil/RemoteSensingGIS"
//ECE 
import VLSIDesignandVerification from "./ECE/VLSIDesignandVerification"
import EmbeddedSystemsandIoT from "./ECE/EmbeddedSystemsandIoT"
import CommunicationSignalProcessing from "./ECE/CommunicationSignalProcessing"
import PowerElectronicsandDrives from "./ECE/PowerElectronicsandDrives"
import RenewableEnergySystems from "./ECE/RenewableEnergySystems" 
import EmbeddedandIoT from "./ECE/EmbeddedandIoT"
import WirelessCommunicationandNetworking from "./ECE/WirelessCommunicationandNetworking"
import AIandMLApplicationsinElectronics from "./ECE/AIandMLAppinElectronics"
import InternetofMedicalThings from "./ECE/InternetofMedicalThings" 
import SmartAntennaandMicrowave from "./ECE/SmartAntennaandMicrowave"
import FPGAandReconfigurable from "./ECE/FPGAandReconfigurable"
import CyberPhysicalandSmart from "./ECE/CyberPhysicalandSmart"
import ControlSystemsMechatronics from "./ECE/ControlSystemsMechatronics" 
import SatelliteCommunicationNavigation from "./ECE/SatelliteCommunicationNavigation"
//EEE
import SmartGridMicrogrid from "./EEE/SmartGridMicrogrid"
import EVChargingInfrastructureV2G from "./EEE/EVChargingInfrastructureV2G"
import PowerSystemStability from "./EEE/PowerSystemStability"
import LoadForecastingDemandResponse from "./EEE/LoadForecastingDemandResponse"
import HighVoltageDC from "./EEE/HighVoltageDC"
import PowerSystemProtection from "./EEE/PowerSystemProtection"
import PowerElectronicsRenewables from "./EEE/PowerElectronicsRenewables"
import EmbeddedIoTEnergy from "./EEE/EmbeddedIoTEnergy"
import ConditionMonitoringDiagnosis from "./EEE/ConditionMonitoringDiagnosis"
import ElectricMachinesforCoastalMarine from "./EEE/ElectricMachinesforCoastalMarine"
import PowerElectronicsEVMotorDrives from "./EEE/PowerElectronicsEVMotorDrives"
import SmartLightingBuilding from "./EEE/SmartLightingBuilding"
import WirelessPowerTransfer from "./EEE/WirelessPowerTransfer"
import ArtificialIntelligenceinPower from "./EEE/ArtificialIntelligenceinPower"
import SmartMeteringDemandResponse from "./EEE/SmartMeteringDemandResponse"

import CircularMenu from "./pages/CircularMenu"
import CollegeList from "./pages/CollegesList"
import ResearchArticleWritingServiceMumbai from './title/service5/ResearchArticleWritingServiceMumbai';
import JournalPaperWritingMumbai  from './title/service5/JournalPaperWritingMumbai';
import ResearchPaperWritingMumbai from './title/service5/ResearchPaperWritingMumbai';
import ReviewPaperWritingMumbai from './title/service5/ReviewPaperWritingMumbai';
import ReviewArticleWritingMumbai from './title/service5/ReviewArticleWritingMumbai';
import LiteratureReviewWritingMumbai from './title/service5/LiteratureReviewWritingMumbai';
 HEAD
import JournalPublicationSupport from './title/service6/JournalPublicationSupport';
import ResearchPublicationServices from './title/service6/ResearchPublicationServices';
import ReviewPaperPublication from './title/service6/ReviewPaperPublication';
import ConferencePaperPublication from './title/service6/ConferencePaperPublication';
      import IEEEConferencePaperPublication from './title/service6/IEEEConferencePaperPublication';
      import SpringerConferencePaperPublication from './title/service6/SpringerConferencePaperPublication';
      import ElsevierConferencePublication from './title/service6/ElsevierConferencePublication';
 
import Departments from './pages/Departments';

 

function App() {
  return (

    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CircularMenu />} />
        <Route path="/home-page" element={<Home />} />
        <Route path="/phd-research-proposal-writing-services" element={<Main3 />} />
        <Route path="/colleges" element={<CollegeList />} />
 
        <Route path="/departments" element={<Departments />} />       
 

        {/* PhDConsulting*/ }
        <Route path="/phd-consulting" element={<PhDConsulting />} />
        <Route path="/career-opportunities-after-phd" element={<CareerAfterPhD />} />
        <Route path="/top-mnc-hiring" element={<TopMNCHiringPhD />} />
        <Route path="/top-phd-colleges-mumbai" element={<TopPhDCollegesMumbai />} />
        <Route path="/top-for-phd-colleges-in-mumbai" element={<FundingPhd />} />
        {/* phd admission in the back page link */}
        <Route path="phd-admission-assistance-for-mumbai" element={<PhDAdmissionAssistanceforThreeState />} />
        <Route path="/best-phd-research-consultant-in-mumbai" element={<PhDResearchConsultant />} />
        <Route path="/phd-admission-2025-in-mumbai" element={<PhDAdmission2025Mumbai />} />
        <Route path="/phd-admission-2025-in-mumbai-university" element={<PhDAdmissionMumbaiUniversity />} />
        <Route path="/phd-admission-2025-in-pune-university" element={<AdmissionPuneUniversity />} />
        <Route path="/phd-admission-assistance-in-pune-university" element={<PhDAssistancePune />} />
        <Route path="/phd-admission-help-in-mumbai" element={<PhdAdmissionHelpMumbai />} />
        <Route path="/online-phd-admission-assistance-in-mumbai" element={<PhdOnlineAdmissionMumbai />} />
        <Route path="/phd-admission-assistance-in-mumbai-2025" element={<PhdAdmissionAssistanceMumbai2025 />} />
        {/* phd admission tiles  */}
        <Route path="/manageengine/phd-guide-selection-in-mumbai" element={<PhDGuideSelection />} />
        <Route path="/manageengine/phd-topic-selection-support-in-mumbai" element={<TopicSelectionSupport />} />
        <Route path="/manageengine/phd-application-help-in-mumbai" element={<PhDApplicationHelpMumbai />} />
        <Route path="/manageengine/phd-research-proposal-writing-services-in-mumbai" element={<ProposalWritingServices />} />
        <Route path="/manageengine/university-selection" element={<UniversitySelection />} />

        {/* 3 main page title */}
        <Route path="/proposal/funding-project-support-mumbai" element={<FundingProposalSupport />} />
        <Route path="/proposal/methodology-support-assistance-mumbai" element={<ResearchMethodologySupport />} />
        <Route path="/proposal/methodology-roadmap-mumbai" element={<PhDMethodologyRoadmap />} />
        
        {/* services 5 */}
        <Route path="/research-article-and-journal-paper/research-article-writing-service-mumbai" element={<ResearchArticleWritingServiceMumbai />} />
        <Route path="/research-article-and-journal-paper/journal-paper-writing-service-in-mumbai" element={<JournalPaperWritingMumbai />} />
        <Route path="/research-article-and-journal-paper/research-paper-writing-service-in-mumbai" element={<ResearchPaperWritingMumbai />} />
        <Route path="/research-article-and-journal-paper/review-paper-writing-service-in-mumbai" element={<ReviewPaperWritingMumbai />} />
        <Route path="/research-article-and-journal-paper/review-article-writing-service-in-mumbai" element={<ReviewArticleWritingMumbai />} />
        <Route path="/research-article-and-journal-paper/literature-review-writing-services-in-mumbai" element={<LiteratureReviewWritingMumbai />} />
 

        {/* Services 6 */}
        <Route path="/service6-1" element={<JournalPublicationSupport />} />
        <Route path="/service6-2" element={<ResearchPublicationServices />} />
        <Route path="/service6-3" element={<ReviewPaperPublication />} />
        <Route path="/service6-4" element={<ConferencePaperPublication />} />
            {/* Services6-4 */}
            <Route path="/service6-4-1" element={<IEEEConferencePaperPublication />} />
            <Route path="/service6-4-2" element={<SpringerConferencePaperPublication />} />
            <Route path="/service6-4-3" element={<ElsevierConferencePublication />} />

        {/* college */}
        <Route path="/college/amity-university" element={<Amitycollege />} />
        <Route path="/college/atlas-skilltech-university" element={<AtlasPhD />} />
        <Route path="/college/homi-bhabha-state-university" element={<HBSIPhDEnhancedPage />} />
        <Route path="/college/homi-bhabha-nation-university" element={<HBNIPhDEnhancedPage />} />
        <Route path="/college/indira-gandhi-institute-of-development-research" element={<IGIDRPhD />} />
        <Route path="/college/institute-of-chemical-technology" element={<ICTPhD />} />
        <Route path="/college/international-institute-for-population-sciences" element={<IIPSPhD />} /> 
        <Route path="/college/institute-of-chemical-technology" element={<ICTPhD />} />
        <Route path="/college/hyderabad-sind-national-collegiate-university" element={<HSNCPhD />} /> 
        <Route path="/college/narsee-monjee-institute-of-management-studies" element={<NMIMSPhD />} />
        <Route path="/college/smt-nathibai-damodar-thackersey-university" element={<SNDTPhDPage />} />
        <Route path="/college/somaiya-vidyavihar-university" element={<SVUPhDPage />} />
        <Route path="/college/tata-institute-of-fundamental-research" element={<TifrPhDPage />} />
        <Route path="/college/tata-institute-of-social-sciences" element={<TissPhDPage />} />
        <Route path="/college/chhatrapati-shivaji-maharaj-university" element={<CsmuPhDPage />} />
        <Route path="/college/d-y-patil-university" element={<DyPatilPhDPage />} />
        <Route path="/college/ajeenkya-d-y-patil-university-pune" element={<AdypuPhDPage />} />
        <Route path="/college/bharati-vidyapeeth-university" element={<BharatiVidyapeethPhDPage />} />
        <Route path="/college/deccan-college" element={<DeccanCollegePhDPage />} />
        <Route path="/college/dr-vishwanath-karad-mit" element={<DrVishwanathKaradMIT />} />
        <Route path="/college/flame-university-pune" element={<FLAMEPhDPage />} />
        <Route path="/college/gokhale-institute-of-politics-and-economics-pune" element={<GIPEPhDPage />} />
        <Route path="/college/mit-art-design-&-technology-university-pune" element={<MITADTPhDPage />} />
        <Route path="/college/national-institute-of-construction-management-and-research" element={<MITADTPhDPage />} />
        <Route path="/college/savitribai-phule-pune-university" element={<SPPUPhDPage />} />
        <Route path="/college/spicer-adventist-university-pune" element={<SpicerPhDPage />} />
        <Route path="/college/sri-balaji-university-pune" element={<SbupPhDPage />} />
        <Route path="/college/symbiosis-international-pune" element={<SiuPhDPage />} />
        <Route path="/college/symbiosis-skills-and-professional-university-pune" element={<SspuPhDPage />} />
        <Route path="/college/vishwakarma-university-pune" element={<VishwakarmaPhDPage />} />
        <Route path="/college/university-of-mumbai" element={<MumbaiPhDOverview />} />
 
        
        {/* college */}
        <Route path="/colleges/amity-university" element={<Amitycollege />} />
        <Route path="/colleges/atlas-skilltech-university" element={<AtlasPhD />} />
        <Route path="/colleges/homi-bhabha-state-university" element={<HBSIPhDEnhancedPage />} />
        <Route path="/colleges/homi-bhabha-nation-university" element={<HBNIPhDEnhancedPage />} />
        <Route path="/colleges/indira-gandhi-institute-of-development-research" element={<IGIDRPhD />} />
        <Route path="/colleges/institute-of-chemical-technology" element={<ICTPhD />} />
        <Route path="/colleges/international-institute-for-population-sciences" element={<IIPSPhD />} /> 
        <Route path="/colleges/institute-of-chemical-technology" element={<ICTPhD />} />
        <Route path="/colleges/hyderabad-sind-national-collegiate-university" element={<HSNCPhD />} /> 
        <Route path="/colleges/narsee-monjee-institute-of-management-studies" element={<NMIMSPhD />} />
        <Route path="/colleges/smt-nathibai-damodar-thackersey-university" element={<SNDTPhDPage />} />
        <Route path="/colleges/somaiya-vidyavihar-university" element={<SVUPhDPage />} />
        <Route path="/colleges/tata-institute-of-fundamental-research" element={<TifrPhDPage />} />
        <Route path="/colleges/tata-institute-of-social-sciences" element={<TissPhDPage />} />
        <Route path="/colleges/chhatrapati-shivaji-maharaj-university" element={<CsmuPhDPage />} />
        <Route path="/colleges/d-y-patil-university" element={<DyPatilPhDPage />} />
        <Route path="/colleges/ajeenkya-d-y-patil-university-pune" element={<AdypuPhDPage />} />
        <Route path="/colleges/bharati-vidyapeeth-university" element={<BharatiVidyapeethPhDPage />} />
        <Route path="/colleges/deccan-college" element={<DeccanCollegePhDPage />} />
        <Route path="/colleges/dr-vishwanath-karad-mit" element={<DrVishwanathKaradMIT />} />
        <Route path="/colleges/flame-university-pune" element={<FLAMEPhDPage />} />
        <Route path="/colleges/gokhale-institute-of-politics-and-economics-pune" element={<GIPEPhDPage />} />
        <Route path="/colleges/mit-art-design-&-technology-university-pune" element={<MITADTPhDPage />} />
        <Route path="/colleges/national-institute-of-construction-management-and-research" element={<NICMARPhDPage />} />
        <Route path="/colleges/savitribai-phule-pune-university" element={<SPPUPhDPage />} />
        <Route path="/colleges/spicer-adventist-university-pune" element={<SpicerPhDPage />} />
        <Route path="/colleges/sri-balaji-university-pune" element={<SbupPhDPage />} />
        <Route path="/colleges/symbiosis-international-pune" element={<SiuPhDPage />} />
        <Route path="/colleges/symbiosis-skills-and-professional-university-pune" element={<SspuPhDPage />} />
        <Route path="/colleges/vishwakarma-university-pune" element={<VishwakarmaPhDPage />} />
        <Route path="/colleges/university-of-mumbai" element={<MumbaiPhDOverview />} />
 
        {/* mech */}
        <Route path="/mech-1" element={<ThermalEnergyEngineering />} />
              {/* sub */}
              <Route path="/mech-1-1" element={<HeatTransferEnhancement />} />
              <Route path="/mech-1-2" element={<ComputationalFluidDynamics />} />
              <Route path="/mech-1-3" element={<SolarThermalGeothermal />} />
              <Route path="/mech-1-4" element={<RefrigerationCryogenics />} />
              <Route path="/mech-1-5" element={<WasteHeatRecoveryEnergy />} />
              <Route path="/mech-1-6" element={<ThermalEnergy />} />
        <Route path="/mech-2" element={<DesignManufacturing />} />
              {/* sub */}
              <Route path="mech-2-1" element={<CADCAMMechanicalDesign />} />
              <Route path="mech-2-2" element={<AdditiveManufacturing3DPrinting />} />
              <Route path="mech-2-3" element={<AdvancedMachiningManufacturing />} />
              <Route path="mech-2-4" element={<ProductLifecycleManagementProject />} />
              <Route path="mech-2-5" element={<RapidPrototypingReverse />} />
              <Route path="mech-2-6" element={<SmartManufacturingIndustry />} />
        <Route path="/mech-3" element={<MaterialsMetallurgy />} />
              {/* sub */}
              <Route path="mech-3-1" element={<AdvancedCompositeMaterials />} />
              <Route path="mech-3-2" element={<NanomaterialsforMechanical />} />
              <Route path="mech-3-3" element={<WeldingCastingJoining />} />
              <Route path="mech-3-4" element={<CorrosionSurfaceEngineering />} />
              <Route path="mech-3-5" element={<MaterialTestingNonDestructive />} />
              <Route path="mech-3-6" element={<SmartIntelligentMaterials />} />
        <Route path="/mech-4" element={<RoboticsAutomation />} />
              {/* sub */}
              <Route path="/mech-4-1" element={<IndustrialCollaborativeRobots />} />
              <Route path="/mech-4-2" element={<MechatronicSystemsSmart />} />
              <Route path="/mech-4-3" element={<AutonomousVehiclesMobile /> } />
              <Route path="/mech-4-4" element={<ControlSystemsRobotics />} />
              <Route path="/mech-4-5" element={<AIMLRobotics />} />
              <Route path="/mech-4-6" element={<RoboticProcessAutomation />} />
        <Route path="/mech-5" element={<DynamicsVibration />} />
               {/* sub */}
               <Route path="/mech-5-1" element={<StructuralDynamicsEarthquake />} />
               <Route path="/mech-5-2" element={<NoiseVibrationHarshness />} />
               <Route path="/mech-5-3" element={<RotorDynamicsBalancing />} />
               <Route path="/mech-5-4" element={<ModalHarmonicAnalysis />} />
               <Route path="/mech-5-5" element={<SeismicVibrationControl />} />
               <Route path="/mech-5-6" element={<SmartMaterialsVibration />} />
        <Route path="/mech-6" element={<FluidMechanicsHydraulics />} />
                {/* sub */}
                <Route path="/mech-6-1" element={<AerodynamicsAeroPropulsion />} />
                <Route path="/mech-6-2" element={<TurbomachineryGasTurbines />} />
                <Route path="/mech-6-3" element={<HydraulicPneumaticControl />} /> 
                <Route path="/mech-6-4" element={<MultiphaseFlowHeat />} />
                <Route path="/mech-6-5" element={<FluidStructureInteraction />} />
                <Route path="/mech-6-6" element={<BiofluidMechanicsMicrofluidics />} />
        <Route path="/mech-7" element={<TribologyMaintenance />} />
                 {/* sub */}
                  <Route path="/mech-7-1" element={<WearFrictionAnalysis />} />
                  <Route path="/mech-7-2" element={<LubricationTechnologyAdvanced />} />
                  <Route path="/mech-7-3" element={<BearingDesignCondition />} />
                  <Route path="/mech-7-4" element={<FaultDiagnosisRotating />} />
                  <Route path="/mech-7-5" element={<TribologyinMicroNano />} />
                  <Route path="/mech-7-6" element={<PredictivePreventiveMaintenance />} />
        <Route path="/mech-8" element={<IndustrialProductionEngineering />} />
                  {/* sub */}
                  <Route path="/mech-8-1" element={<LeanManufacturingTechniques />} />
                  <Route path="/mech-8-2" element={<SupplyChainProcess />} />
                  <Route path="/mech-8-3" element={<SmartFactorySystems />} />
                  <Route path="/mech-8-4" element={<CostTimeOptimization />} />

        <Route path="/mech-9" element={<AutomobileTransportationSystems />} />   
                  {/* sub */}
                  <Route path="/mech-9-1" element={<ElectricHybridVehicleDesign />} />
                  <Route path="/mech-9-2" element={<VehicleDynamicsCrashSafety />} />
                  <Route path="/mech-9-3" element={<InternalCombustionEngine />} />
                  <Route path="/mech-9-4" element={<AutomotiveAerodynamicsFuel />} />
                  <Route path="/mech-9-5" element={<AdvancedVehicleSuspensions />} />
                  <Route path="/mech-9-6" element={<IntelligentTransportation />} />
        <Route path="/mech-10" element={<ComputationalSimulationTechniques />} />
                  {/* sub */}
                  <Route path="/mech-10-1" element={<FiniteElementAnalysis />} />
                  <Route path="/mech-10-2" element={<ComputationalFluidDynamic />} />
                  <Route path="/mech-10-3" element={<MultiBodyDynamics />} />
                  <Route path="/mech-10-4" element={<FractureMechanicsFatigue />} />
                  <Route path="/mech-10-5" element={<DigitalTwinSmartSimulation />} />
                  <Route path="/mech-10-6" element={<HighPerformanceComputing />} />
 
            {/* CSE  */}
            <Route path="/cse-1" element={<ArtificialIntelligenceMachineLearning />} />
            <Route path="/cse-2" element={<DataScience_BigDataAnalytics />} />
            <Route path="/cse-3" element={<InternetofThings />} />
            <Route path="/cse-4" element={<CybersecurityPrivacy />} />
            <Route path="/cse-5" element={<BlockchainDistributedSystems />} />
            <Route path="/cse-6" element={<CloudEdgeInfrastructure />} />
            <Route path="/cse-7" element={<QuantumComputing_Information />} />
            <Route path="/cse-8" element={<HumanComputerInteraction />} />
            <Route path="/cse-9" element={<ComputerVisionImage />} />
            <Route path="/cse-10" element={<AutonomousSystemsRobotics />} />
            <Route path="/cse-11" element={<NaturalLanguageProcessing />} />
            <Route path="/cse-12" element={<DigitalTwinsSimulation />} />
            <Route path="/cse-13" element={<QuantumNetworkingCommunication />} />
            <Route path="/cse-14" element={<WebApplicationDevelopment />} />
            <Route path="/cse-15" element={<MobileAppDevelopment />} />
            <Route path="/cse-16" element={<MVPDevelopment />} />
            <Route path="/cse-17" element={<StartupSoftwareDevelopment />} />
            <Route path="/cse-18" element={<EnterpriseSoftwareSolutions />} />
            <Route path="/cse-19" element={<DedicatedDevelopmentTeams />} />
            <Route path="/cse-20" element={<DesignLabUI_UXDevelopment />} />
            <Route path="/cse-21" element={<QATestingServices />} />
            <Route path="/cse-22" element={<Java />} />
            <Route path="/cse-23" element={<PHPDevelopment />} />
            <Route path="/cse-24" element={<SpringDevelopment />} />
            <Route path="/cse-25" element={<CSharpDevelopment />} />
            <Route path="/cse-26" element={<MachineLearningBased />} />
            <Route path="/cse-27" element={<PythonDevelopment />} />
            {/*Zip */}
            <Route path="/cse-28" element={<MATLABProjects />} />       
            <Route path="/cse-29" element={<DotNetProjects />} /> 
            <Route path="/cse-30" element={<RProjects />} />  
            <Route path="/cse-31" element={<VLSIProjects />} />
            <Route path="/cse-32" element={<OPNETProjects />} />
            <Route path="/cse-33" element={<RoboticsProjects />} />
            <Route path="/cse-34" element={<AnsysProjects />} />
            <Route path="/cse-35" element={<SolidWorksProjects />} />
            <Route path="/cse-36" element={<CartiaProjects />} />
            <Route path="/cse-37" element={<LabVIEWProjects />} />
            <Route path="/cse-38" element={<PowerSystemProjects />} />
            <Route path="/cse-39" element={<PowerDocuments />} />
            <Route path="/cse-40" element={<ImageProcessing />} /> 
            <Route path="/cse-41" element={<SignalProcessing />} />
      {/* Civil */}
      <Route path="/civil-1" element={<StructuralEngineering />} />
      <Route path="/civil-2" element={<EarthquakeResistant />} />
      <Route path="/civil-3" element={<SteelAndRccDesign />} />
      <Route path="/civil-4" element={<TallBuildingAnalysis />} />
      <Route path="/civil-5" element={<GeotechnicalEngineering />} />
      <Route path="/civil-6" element={<SoilStabilizationTechniques />} />
      <Route path="/civil-7" element={<FoundationDesign />} />
      <Route path="/civil-8" element={<TransportationEngineering />} />
      <Route path="/civil-9" element={<SmartTrafficManagement />} />
      <Route path="/civil-10" element={<PavementAnalysisDesign />} />
      <Route path="/civil-11" element={<EnvironmentalEngineering />} />
      <Route path="/civil-12" element={<WaterTreatmentRecycling />} />
      <Route path="/civil-13" element={<ConstructionProject />} />
      <Route path="/civil-14" element={<RemoteSensingGIS />} />

      {/* ECE */}
      <Route path="/ece-1" element={<VLSIDesignandVerification />} />
      <Route path="/ece-2" element={<EmbeddedSystemsandIoT />} />
      <Route path="/ece-3" element={<CommunicationSignalProcessing />} />
      <Route path="/ece-4" element={<PowerElectronicsandDrives />} />
      <Route path="/ece-5" element={<RenewableEnergySystems />} />
      <Route path="/ece-6" element={<EmbeddedandIoT />} />  
      <Route path="/ece-7" element={<WirelessCommunicationandNetworking />} />   
      <Route path="/ece-8" element={<AIandMLApplicationsinElectronics />} />
      <Route path="/ece-9" element={<InternetofMedicalThings />} />
      <Route path="/ece-10" element={<SmartAntennaandMicrowave />} />
      <Route path="/ece-11" element={<FPGAandReconfigurable />} />
      <Route path="/ece-12" element={<CyberPhysicalandSmart />} />
      <Route path="/ece-13" element={<ControlSystemsMechatronics />} />
      <Route path="/ece-14" element={<SatelliteCommunicationNavigation />} />

      {/* EEE */}
      <Route path="eee-1" element={<SmartGridMicrogrid />} />
      <Route path="eee-2" element={<EVChargingInfrastructureV2G />} />
      <Route path="eee-3" element={<PowerSystemStability />} />
      <Route path="eee-4" element={<LoadForecastingDemandResponse />} />
      <Route path="eee-5" element={<HighVoltageDC />} />
      <Route path="eee-6" element={<PowerSystemProtection />} />
      <Route path="eee-7" element={<PowerElectronicsRenewables />} />
      <Route path="eee-8" element={<EmbeddedIoTEnergy />} />
      <Route path="eee-9" element={<SmartLightingBuilding />} />
      <Route path="eee-10" element={<ConditionMonitoringDiagnosis />} />
      <Route path="eee-11" element={<ElectricMachinesforCoastalMarine />} />
      <Route path="eee-12" element={<PowerElectronicsEVMotorDrives />} />
      
      <Route path="eee-13" element={<WirelessPowerTransfer />} /> 
      <Route path="eee-14" element={<ArtificialIntelligenceinPower />} />
      <Route path="eee-15" element={<SmartMeteringDemandResponse />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;        
