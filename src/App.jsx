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
 
import JournalPublicationSupport from './title/service6/JournalPublicationSupport';
import ResearchPublicationServices from './title/service6/ResearchPublicationServices';
import ReviewPaperPublication from './title/service6/ReviewPaperPublication';
import ConferencePaperPublication from './title/service6/ConferencePaperPublication';
      import IEEEConferencePaperPublication from './title/service6/IEEEConferencePaperPublication';
      import SpringerConferencePaperPublication from './title/service6/SpringerConferencePaperPublication';
      import ElsevierConferencePublication from './title/service6/ElsevierConferencePublication';
 
import Departments from './pages/Departments';
import SkeletonLoader from './SkeletonLoader';

 

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

        {/* college
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
        <Route path="/college/university-of-mumbai" element={<MumbaiPhDOverview />} /> */}
         
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
 
        {/* MECHANICAL */}
            <Route path="/mechanical/thermalenergyengineering" element={<ThermalEnergyEngineering />} />
            {/* Subtopics */}
            <Route path="/mechanical/thermalenergyengineering/heattransferenhancement" element={<HeatTransferEnhancement />} />
            <Route path="/mechanical/thermalenergyengineering/ComputationalFluidDynamics" element={<ComputationalFluidDynamics />} />
            <Route path="/mechanical/thermalenergyengineering/SolarThermalGeothermal" element={<SolarThermalGeothermal />} />
            <Route path="/mechanical/thermalenergyengineering/RefrigerationCryogenics" element={<RefrigerationCryogenics />} />
            <Route path="/mechanical/thermalenergyengineering/WasteHeatRecoveryEnergy" element={<WasteHeatRecoveryEnergy />} />
            <Route path="/mechanical/thermalenergyengineering/ThermalEnergy" element={<ThermalEnergy />} />

            <Route path="/mechanical/DesignManufacturing" element={<DesignManufacturing />} />
            {/* Subtopics */}
            <Route path="/mechanical/DesignManufacturing/CADCAMMechanicalDesign" element={<CADCAMMechanicalDesign />} />
            <Route path="/mechanical/DesignManufacturing/AdditiveManufacturing3DPrinting" element={<AdditiveManufacturing3DPrinting />} />
            <Route path="/mechanical/DesignManufacturing/AdvancedMachiningManufacturing" element={<AdvancedMachiningManufacturing />} />
            <Route path="/mechanical/DesignManufacturing/ProductLifecycleManagementProject" element={<ProductLifecycleManagementProject />} />
            <Route path="/mechanical/DesignManufacturing/RapidPrototypingReverse" element={<RapidPrototypingReverse />} />
            <Route path="/mechanical/DesignManufacturing/SmartManufacturingIndustry" element={<SmartManufacturingIndustry />} />

            <Route path="/mechanical/MaterialsMetallurgy" element={<MaterialsMetallurgy />} />
            {/* Subtopics */}
            <Route path="/mechanical/MaterialsMetallurgy/AdvancedCompositeMaterials" element={<AdvancedCompositeMaterials />} />
            <Route path="/mechanical/MaterialsMetallurgy/NanomaterialsforMechanical" element={<NanomaterialsforMechanical />} />
            <Route path="/mechanical/MaterialsMetallurgy/WeldingCastingJoining" element={<WeldingCastingJoining />} />
            <Route path="/mechanical/MaterialsMetallurgy/CorrosionSurfaceEngineering" element={<CorrosionSurfaceEngineering />} />
            <Route path="/mechanical/MaterialsMetallurgy/MaterialTestingNonDestructive" element={<MaterialTestingNonDestructive />} />
            <Route path="/mechanical/MaterialsMetallurgy/SmartIntelligentMaterials" element={<SmartIntelligentMaterials />} />

            <Route path="/mechanical/RoboticsAutomation" element={<RoboticsAutomation />} />
            {/* Subtopics */}
            <Route path="/mechanical/RoboticsAutomation/IndustrialCollaborativeRobots" element={<IndustrialCollaborativeRobots />} />
            <Route path="/mechanical/RoboticsAutomation/MechatronicSystemsSmart" element={<MechatronicSystemsSmart />} />
            <Route path="/mechanical/RoboticsAutomation/AutonomousVehiclesMobile" element={<AutonomousVehiclesMobile />} />
            <Route path="/mechanical/RoboticsAutomation/ControlSystemsRobotics" element={<ControlSystemsRobotics />} />
            <Route path="/mechanical/RoboticsAutomation/AIMLRobotics" element={<AIMLRobotics />} />
            <Route path="/mechanical/RoboticsAutomation/RoboticProcessAutomation" element={<RoboticProcessAutomation />} />

            <Route path="/mechanical/DynamicsVibration" element={<DynamicsVibration />} />
            {/* Subtopics */}
            <Route path="/mechanical/DynamicsVibration/StructuralDynamicsEarthquake" element={<StructuralDynamicsEarthquake />} />
            <Route path="/mechanical/DynamicsVibration/NoiseVibrationHarshness" element={<NoiseVibrationHarshness />} />
            <Route path="/mechanical/DynamicsVibration/RotorDynamicsBalancing" element={<RotorDynamicsBalancing />} />
            <Route path="/mechanical/DynamicsVibration/ModalHarmonicAnalysis" element={<ModalHarmonicAnalysis />} />
            <Route path="/mechanical/DynamicsVibration/SeismicVibrationControl" element={<SeismicVibrationControl />} />
            <Route path="/mechanical/DynamicsVibration/SmartMaterialsVibration" element={<SmartMaterialsVibration />} />

            <Route path="/mechanical/FluidMechanicsHydraulics" element={<FluidMechanicsHydraulics />} />
            {/* Subtopics */}
            <Route path="/mechanical/FluidMechanicsHydraulics/AerodynamicsAeroPropulsion" element={<AerodynamicsAeroPropulsion />} />
            <Route path="/mechanical/FluidMechanicsHydraulics/TurbomachineryGasTurbines" element={<TurbomachineryGasTurbines />} />
            <Route path="/mechanical/FluidMechanicsHydraulics/HydraulicPneumaticControl" element={<HydraulicPneumaticControl />} />
            <Route path="/mechanical/FluidMechanicsHydraulics/MultiphaseFlowHeat" element={<MultiphaseFlowHeat />} />
            <Route path="/mechanical/FluidMechanicsHydraulics/FluidStructureInteraction" element={<FluidStructureInteraction />} />
            <Route path="/mechanical/FluidMechanicsHydraulics/BiofluidMechanicsMicrofluidics" element={<BiofluidMechanicsMicrofluidics />} />

            <Route path="/mechanical/TribologyMaintenance" element={<TribologyMaintenance />} />
            {/* Subtopics */}
            <Route path="/mechanical/TribologyMaintenance/WearFrictionAnalysis" element={<WearFrictionAnalysis />} />
            <Route path="/mechanical/TribologyMaintenance/LubricationTechnologyAdvanced" element={<LubricationTechnologyAdvanced />} />
            <Route path="/mechanical/TribologyMaintenance/BearingDesignCondition" element={<BearingDesignCondition />} />
            <Route path="/mechanical/TribologyMaintenance/FaultDiagnosisRotating" element={<FaultDiagnosisRotating />} />
            <Route path="/mechanical/TribologyMaintenance/TribologyinMicroNano" element={<TribologyinMicroNano />} />
            <Route path="/mechanical/TribologyMaintenance/PredictivePreventiveMaintenance" element={<PredictivePreventiveMaintenance />} />

            <Route path="/mechanical/IndustrialProductionEngineering" element={<IndustrialProductionEngineering />} />
            {/* Subtopics */}
            <Route path="/mechanical/IndustrialProductionEngineering/LeanManufacturingTechniques" element={<LeanManufacturingTechniques />} />
            <Route path="/mechanical/IndustrialProductionEngineering/SupplyChainProcess" element={<SupplyChainProcess />} />
            <Route path="/mechanical/IndustrialProductionEngineering/SmartFactorySystems" element={<SmartFactorySystems />} />
            <Route path="/mechanical/IndustrialProductionEngineering/CostTimeOptimization" element={<CostTimeOptimization />} />

            <Route path="/mechanical/AutomobileTransportationSystems" element={<AutomobileTransportationSystems />} />
            {/* Subtopics */}
            <Route path="/mechanical/AutomobileTransportationSystems/ElectricHybridVehicleDesign" element={<ElectricHybridVehicleDesign />} />
            <Route path="/mechanical/AutomobileTransportationSystems/VehicleDynamicsCrashSafety" element={<VehicleDynamicsCrashSafety />} />
            <Route path="/mechanical/AutomobileTransportationSystems/InternalCombustionEngine" element={<InternalCombustionEngine />} />
            <Route path="/mechanical/AutomobileTransportationSystems/AutomotiveAerodynamicsFuel" element={<AutomotiveAerodynamicsFuel />} />
            <Route path="/mechanical/AutomobileTransportationSystems/AdvancedVehicleSuspensions" element={<AdvancedVehicleSuspensions />} />
            <Route path="/mechanical/AutomobileTransportationSystems/IntelligentTransportation" element={<IntelligentTransportation />} />

            <Route path="/mechanical/ComputationalSimulationTechniques" element={<ComputationalSimulationTechniques />} />
            {/* Subtopics */}
            <Route path="/mechanical/ComputationalSimulationTechniques/FiniteElementAnalysis" element={<FiniteElementAnalysis />} />
            <Route path="/mechanical/ComputationalSimulationTechniques/ComputationalFluidDynamic" element={<ComputationalFluidDynamic />} />
            <Route path="/mechanical/ComputationalSimulationTechniques/MultiBodyDynamics" element={<MultiBodyDynamics />} />
            <Route path="/mechanical/ComputationalSimulationTechniques/FractureMechanicsFatigue" element={<FractureMechanicsFatigue />} />
            <Route path="/mechanical/ComputationalSimulationTechniques/DigitalTwinSmartSimulation" element={<DigitalTwinSmartSimulation />} />
            <Route path="/mechanical/ComputationalSimulationTechniques/HighPerformanceComputing" element={<HighPerformanceComputing />} />
 
            {/* CSE  */}
            <Route path="/cse/artificial-intelligence-machine-learning" element={<ArtificialIntelligenceMachineLearning />} />
            <Route path="/cse/data-science-big-data-analytics" element={<DataScience_BigDataAnalytics />} />
            <Route path="/cse/internet-of-things" element={<InternetofThings />} />
            <Route path="/cse/cybersecurity-privacy" element={<CybersecurityPrivacy />} />
            <Route path="/cse/blockchain-distributed-systems" element={<BlockchainDistributedSystems />} />
            <Route path="/cse/cloud-edge-infrastructure" element={<CloudEdgeInfrastructure />} />
            <Route path="/cse/quantum-computing-information" element={<QuantumComputing_Information />} />
            <Route path="/cse/human-computer-interaction" element={<HumanComputerInteraction />} />
            <Route path="/cse/computer-vision-image" element={<ComputerVisionImage />} />
            <Route path="/cse/autonomous-systems-robotics" element={<AutonomousSystemsRobotics />} />
            <Route path="/cse/natural-language-processing" element={<NaturalLanguageProcessing />} />
            <Route path="/cse/digital-twins-simulation" element={<DigitalTwinsSimulation />} />
            <Route path="/cse/quantum-networking-communication" element={<QuantumNetworkingCommunication />} />
            <Route path="/cse/web-application-development" element={<WebApplicationDevelopment />} />
            <Route path="/cse/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/cse/mvp-development" element={<MVPDevelopment />} />
            <Route path="/cse/startup-software-development" element={<StartupSoftwareDevelopment />} />
            <Route path="/cse/enterprise-software-solutions" element={<EnterpriseSoftwareSolutions />} />
            <Route path="/cse/dedicated-development-teams" element={<DedicatedDevelopmentTeams />} />
            <Route path="/cse/design-lab-ui-ux-development" element={<DesignLabUI_UXDevelopment />} />
            <Route path="/cse/qa-testing-services" element={<QATestingServices />} />
            <Route path="/cse/java" element={<Java />} />
            <Route path="/cse/php-development" element={<PHPDevelopment />} />
            <Route path="/cse/spring-development" element={<SpringDevelopment />} />
            <Route path="/cse/csharp-development" element={<CSharpDevelopment />} />
            <Route path="/cse/machine-learning-based" element={<MachineLearningBased />} />
            <Route path="/cse/python-development" element={<PythonDevelopment />} />
            <Route path="/cse/matlab-projects" element={<MATLABProjects />} />
            <Route path="/cse/dotnet-projects" element={<DotNetProjects />} />
            <Route path="/cse/r-projects" element={<RProjects />} />
            <Route path="/cse/vlsi-projects" element={<VLSIProjects />} />
            <Route path="/cse/opnet-projects" element={<OPNETProjects />} />
            <Route path="/cse/robotics-projects" element={<RoboticsProjects />} />
            <Route path="/cse/ansys-projects" element={<AnsysProjects />} />
            <Route path="/cse/solidworks-projects" element={<SolidWorksProjects />} />
            <Route path="/cse/cartia-projects" element={<CartiaProjects />} />
            <Route path="/cse/labview-projects" element={<LabVIEWProjects />} />
            <Route path="/cse/power-system-projects" element={<PowerSystemProjects />} />
            <Route path="/cse/power-documents" element={<PowerDocuments />} />
            <Route path="/cse/image-processing" element={<ImageProcessing />} />
            <Route path="/cse/signal-processing" element={<SignalProcessing />} />

      {/* Civil */}
      <Route path="/civil/structural-engineering" element={<StructuralEngineering />} />
      <Route path="/civil/earthquake-resistant" element={<EarthquakeResistant />} />
      <Route path="/civil/steel-and-rcc-design" element={<SteelAndRccDesign />} />
      <Route path="/civil/tall-building-analysis" element={<TallBuildingAnalysis />} />
      <Route path="/civil/geotechnical-engineering" element={<GeotechnicalEngineering />} />
      <Route path="/civil/soil-stabilization-techniques" element={<SoilStabilizationTechniques />} />
      <Route path="/civil/foundation-design" element={<FoundationDesign />} />
      <Route path="/civil/transportation-engineering" element={<TransportationEngineering />} />
      <Route path="/civil/smart-traffic-management" element={<SmartTrafficManagement />} />
      <Route path="/civil/pavement-analysis-design" element={<PavementAnalysisDesign />} />
      <Route path="/civil/environmental-engineering" element={<EnvironmentalEngineering />} />
      <Route path="/civil/water-treatment-recycling" element={<WaterTreatmentRecycling />} />
      <Route path="/civil/construction-project" element={<ConstructionProject />} />
      <Route path="/civil/remote-sensing-gis" element={<RemoteSensingGIS />} />

      {/* ECE */}
      <Route path="/ece/vlsi-design-verification" element={<VLSIDesignandVerification />} />
      <Route path="/ece/embedded-systems-iot" element={<EmbeddedSystemsandIoT />} />
      <Route path="/ece/communication-signal-processing" element={<CommunicationSignalProcessing />} />
      <Route path="/ece/power-electronics-drives" element={<PowerElectronicsandDrives />} />
      <Route path="/ece/renewable-energy-systems" element={<RenewableEnergySystems />} />
      <Route path="/ece/embedded-iot" element={<EmbeddedandIoT />} />
      <Route path="/ece/wireless-communication-networking" element={<WirelessCommunicationandNetworking />} />
      <Route path="/ece/ai-ml-applications-electronics" element={<AIandMLApplicationsinElectronics />} />
      <Route path="/ece/internet-of-medical-things" element={<InternetofMedicalThings />} />
      <Route path="/ece/smart-antenna-microwave" element={<SmartAntennaandMicrowave />} />
      <Route path="/ece/fpga-reconfigurable-systems" element={<FPGAandReconfigurable />} />
      <Route path="/ece/cyber-physical-smart-systems" element={<CyberPhysicalandSmart />} />
      <Route path="/ece/control-systems-mechatronics" element={<ControlSystemsMechatronics />} />
      <Route path="/ece/satellite-communication-navigation" element={<SatelliteCommunicationNavigation />} />

      {/* EEE */}
      <Route path="/eee/smart-grid-microgrid" element={<SmartGridMicrogrid />} />
      <Route path="/eee/ev-charging-infrastructure-v2g" element={<EVChargingInfrastructureV2G />} />
      <Route path="/eee/power-system-stability" element={<PowerSystemStability />} />
      <Route path="/eee/load-forecasting-demand-response" element={<LoadForecastingDemandResponse />} />
      <Route path="/eee/high-voltage-dc" element={<HighVoltageDC />} />
      <Route path="/eee/power-system-protection" element={<PowerSystemProtection />} />
      <Route path="/eee/power-electronics-renewables" element={<PowerElectronicsRenewables />} />
      <Route path="/eee/embedded-iot-energy" element={<EmbeddedIoTEnergy />} />
      <Route path="/eee/smart-lighting-building" element={<SmartLightingBuilding />} />
      <Route path="/eee/condition-monitoring-diagnosis" element={<ConditionMonitoringDiagnosis />} />
      <Route path="/eee/electric-machines-coastal-marine" element={<ElectricMachinesforCoastalMarine />} />
      <Route path="/eee/power-electronics-ev-motor-drives" element={<PowerElectronicsEVMotorDrives />} />
      <Route path="/eee/wireless-power-transfer" element={<WirelessPowerTransfer />} />
      <Route path="/eee/artificial-intelligence-power" element={<ArtificialIntelligenceinPower />} />
      <Route path="/eee/smart-metering-demand-response" element={<SmartMeteringDemandResponse />} />
      
      <Route path="/1" element={<SkeletonLoader />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;        
