// src/components/DepartmentNavigation.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Departments.scss';

// ---------------------------------------------------------------
// 1. DATA – keep it in sync with your <Route …> definitions
// ---------------------------------------------------------------
const departments = [
  {
    name: 'Mechanical',
    slug: 'mechanical',
    topics: [
      {
        title: 'Thermal Energy Engineering',
        slug: 'thermalenergyengineering',
        subtopics: [
          { title: 'Heat Transfer Enhancement', slug: 'heattransferenhancement' },
          { title: 'Computational Fluid Dynamics', slug: 'ComputationalFluidDynamics' },
          { title: 'Solar, Thermal & Geothermal', slug: 'SolarThermalGeothermal' },
          { title: 'Refrigeration & Cryogenics', slug: 'RefrigerationCryogenics' },
          { title: 'Waste Heat Recovery', slug: 'WasteHeatRecoveryEnergy' },
          { title: 'Thermal Energy', slug: 'ThermalEnergy' },
        ],
      },
      {
        title: 'Design & Manufacturing',
        slug: 'DesignManufacturing',
        subtopics: [
          { title: 'CAD/CAM & Mechanical Design', slug: 'CADCAMMechanicalDesign' },
          { title: 'Additive Manufacturing & 3D Printing', slug: 'AdditiveManufacturing3DPrinting' },
          { title: 'Advanced Machining', slug: 'AdvancedMachiningManufacturing' },
          { title: 'Product Lifecycle Management', slug: 'ProductLifecycleManagementProject' },
          { title: 'Rapid Prototyping & Reverse Engg.', slug: 'RapidPrototypingReverse' },
          { title: 'Smart Manufacturing (Industry 4.0)', slug: 'SmartManufacturingIndustry' },
        ],
      },
      {
        title: 'Materials & Metallurgy',
        slug: 'MaterialsMetallurgy',
        subtopics: [
          { title: 'Advanced Composite Materials', slug: 'AdvancedCompositeMaterials' },
          { title: 'Nanomaterials for Mechanical', slug: 'NanomaterialsforMechanical' },
          { title: 'Welding, Casting & Joining', slug: 'WeldingCastingJoining' },
          { title: 'Corrosion & Surface Engineering', slug: 'CorrosionSurfaceEngineering' },
          { title: 'Material Testing & NDT', slug: 'MaterialTestingNonDestructive' },
          { title: 'Smart & Intelligent Materials', slug: 'SmartIntelligentMaterials' },
        ],
      },
      // … add the rest of Mechanical topics the same way …
    ],
  },

  {
    name: 'CSE',
    slug: 'cse',
    topics: [
      { title: 'Artificial Intelligence & Machine Learning', slug: 'artificial-intelligence-machine-learning' },
      { title: 'Data Science & Big Data Analytics', slug: 'data-science-big-data-analytics' },
      { title: 'Internet of Things', slug: 'internet-of-things' },
      { title: 'Cybersecurity & Privacy', slug: 'cybersecurity-privacy' },
      // … add remaining CSE topics …
    ],
  },

  {
    name: 'Civil',
    slug: 'civil',
    topics: [
      { title: 'Structural Engineering', slug: 'structural-engineering' },
      { title: 'Earthquake Resistant Design', slug: 'earthquake-resistant' },
      // …
    ],
  },

  {
    name: 'ECE',
    slug: 'ece',
    topics: [
      { title: 'VLSI Design & Verification', slug: 'vlsi-design-verification' },
      // …
    ],
  },

  {
    name: 'EEE',
    slug: 'eee',
    topics: [
      { title: 'Smart Grid & Microgrid', slug: 'smart-grid-microgrid' },
      // …
    ],
  },

  // Add more departments if you have them
];

// ---------------------------------------------------------------
// 2. COMPONENT
// ---------------------------------------------------------------
export default function DepartmentNavigation() {
  const [openDept, setOpenDept] = useState(null);

  return (
    <nav className="dept-nav">
      <ul className="dept-list">
        {departments.map((dept) => (
          <li
            key={dept.slug}
            className="dept-item"
            onMouseEnter={() => setOpenDept(dept.slug)}
            onMouseLeave={() => setOpenDept(null)}
          >
            {/* Department link */}
            <Link to={`/${dept.slug}`} className="dept-link">
              {dept.name}
              <span className="chevron">▼</span>
            </Link>

            {/* Dropdown */}
            {openDept === dept.slug && (
              <div className="dropdown">
                <h3 className="dropdown-title">{dept.name}</h3>

                <div className="topics">
                  {dept.topics.map((topic) => (
                    <div key={topic.slug} className="topic">
                      {/* Main topic */}
                      <Link
                        to={`/${dept.slug}/${topic.slug}`}
                        className="topic-link"
                      >
                        {topic.title}
                        {topic.subtopics && <span className="chevron-right">▶</span>}
                      </Link>

                      {/* Sub-topics */}
                      {topic.subtopics && (
                        <ul className="subtopics">
                          {topic.subtopics.map((sub) => (
                            <li key={sub.slug}>
                              <Link
                                to={`/${dept.slug}/${topic.slug}/${sub.slug}`}
                                className="subtopic-link"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}