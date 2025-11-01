import React from 'react';
import "./CivilProjectDevelopmentCenter.scss"; 

const faqs = [
  {
    question: "Why is Remote Sensing & GIS critical for civil engineering in Mumbai?",
    answer: "In a complex urban environment like Mumbai, Remote Sensing & GIS provide essential spatial data for large-scale infrastructure planning, land-use analysis, transportation network design, and environmental monitoring. These technologies enable data-driven decisions, which are crucial for the city's sustainable development [191][192]."
  },
  {
    question: "What are some real-world applications of these technologies in Mumbai?",
    answer: "These technologies are widely used by agencies like the MMRDA and BMC for projects such as the Mumbai Metro expansion, the Coastal Road Project, and smart city initiatives. Applications include urban planning, flood risk mapping, traffic analysis, and monitoring environmental changes [191]."
  },
  {
    question: "What specific software and tools are used in Narpavi's GIS projects?",
    answer: "Our projects utilize a comprehensive suite of industry-standard geospatial software, including ArcGIS and QGIS for mapping and spatial analysis, ERDAS Imagine for image processing, and advanced platforms like Google Earth Engine for large-scale data analytics [198]."
  },
  {
    question: "What advanced research topics can M.Tech and Ph.D. scholars explore?",
    answer: "Advanced research focuses on integrating geospatial technology with other emerging fields. Topics include developing AI-enhanced remote sensing frameworks for smart city planning, creating GIS-based predictive models for coastal erosion and flood risk, and using deep learning for automated land use classification from satellite imagery [190]."
  },
  {
    question: "Is there support for publishing GIS-related research papers?",
    answer: "Absolutely. Narpavi provides end-to-end guidance for publishing research in high-impact journals. We help students and researchers frame their work within IEEE standards, conduct robust spatial analysis, and prepare high-quality manuscripts for submission to top-tier Scopus and SCI-indexed publications."
  }
];

const RemoteSensingAndGISMumbai = () => {
  return (
    <div className="CEProjectDevelopmentCenter">
      <div className="CEProjectDevelopmentCenter-main">
        <div className="CEProjectDevelopmentCenter-grid">

          {/* Left Column – Keywords */}
          <div className="CEProjectDevelopmentCenter-left">
            <h3>🔑 Keywords</h3>
            <ul>
              <li>Remote Sensing & GIS</li>
              <li>Civil Engineering Mumbai</li>
              <li>Geospatial Mapping Projects</li>
              <li>GIS Urban Planning</li>
              <li>IEEE Civil Project Topics</li>
              <li>Narpavi Research Institute</li>
              <li>Satellite Imagery Civil Projects</li>
              <li>LiDAR Mapping Mumbai</li>
              <li>Smart City GIS Applications</li>
              <li>Spatial Analysis</li>
            </ul>
          </div>

          {/* Center Column – Main Content */}
          <div className="CEProjectDevelopmentCenter-center">
            <h1>Remote Sensing & GIS in Civil Engineering (Mumbai-Based)</h1>

            <section className="CEProjectDevelopmentCenter-intro">
              <p>
                <strong>Remote Sensing & GIS in Civil Engineering</strong> has become an indispensable tool for shaping Mumbai's urban future. This domain leverages spatial data from satellites, drones, and LiDAR to drive intelligent planning, monitoring, and management of infrastructure. At Narpavi Research Institute, we guide students in developing IEEE-aligned projects that apply these technologies to solve real-world challenges in transportation, environmental management, and smart city development, making it a pivotal area of modern engineering.
              </p>
            </section>

            <section className="CEProjectDevelopmentCenter-table">
              <h2>Comparative Technology–Industry Table</h2>
              <div className="CEProjectDevelopmentCenter-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Technology/Methodology</th>
                      <th>Civil Engineering Application</th>
                      <th>Tools/Software Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Remote Sensing (Satellite Imagery)</td>
                      <td>Land-use & terrain analysis</td>
                      <td>ERDAS Imagine, ENVI</td>
                    </tr>
                    <tr>
                      <td>GIS Mapping</td>
                      <td>Urban infrastructure planning</td>
                      <td>ArcGIS, QGIS [194]</td>
                    </tr>
                    <tr>
                      <td>LiDAR Technology</td>
                      <td>High-resolution 3D elevation modeling</td>
                      <td>TerraScan, Global Mapper</td>
                    </tr>
                    <tr>
                      <td>Spatial Data Analytics</td>
                      <td>Flood risk & urban growth modeling</td>
                      <td>Google Earth Engine, Python GIS</td>
                    </tr>
                    <tr>
                      <td>UAV/Drone Mapping</td>
                      <td>Real-time construction site monitoring</td>
                      <td>Pix4D, DroneDeploy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="CEProjectDevelopmentCenter-cycle">
              <h2>B.Tech, M.Tech, and Ph.D. Project Cycles</h2>
              <h4>B.Tech Project Cycle</h4>
              <p>Focuses on fundamental concepts of spatial data and GIS mapping. Students work on projects like land use change detection, road network analysis, and urban flood risk mapping using tools like ArcGIS and QGIS.</p>
              <h4>M.Tech Project Cycle</h4>
              <p>Emphasizes advanced geospatial modeling and the integration of multiple data sources. Projects include developing spatial decision support systems for waste management and monitoring coastal erosion using satellite data.</p>
              <h4>Ph.D. Research Cycle</h4>
              <p>Targets the creation of intelligent spatial systems. Research involves developing integrated frameworks that combine Remote Sensing, GIS, and AI for predictive modeling, smart city applications, and automated feature extraction from imagery.</p>
            </section>

            <section className="CEProjectDevelopmentCenter-project-titles">
              <h2>IEEE-Aligned Project Titles (2023–2025)</h2>
              <ul>
                <li>“AI and GIS Integration for Urban Infrastructure Monitoring (2023)”</li>
                <li>“Remote Sensing-Based Flood Risk Prediction Model for Mumbai (2024)”</li>
                <li>“LiDAR Data Fusion for High-Resolution 3D City Mapping (2024)”</li>
                <li>“Geospatial Intelligence Framework for Smart Transportation Planning (2025)”</li>
                <li>“Satellite-Based Environmental Impact Monitoring Using Machine Learning (2025)”</li>
              </ul>
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
          <div className="CEProjectDevelopmentCenter-right">
            <h3>🔗 Related Civil Fields</h3>
            <ul>
              <li><a href="/transportation-engineering-mumbai">Transportation Engineering</a></li>
              <li><a href="/smart-city-planning-mumbai">Smart City Planning</a></li>
              <li><a href="/environmental-engineering-mumbai">Environmental Engineering</a></li>
              <li><a href="/water-resources-engineering-mumbai">Water Resources Engineering</a></li>
              <li><a href="/construction-management-mumbai">Construction Management</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RemoteSensingAndGISMumbai;

