import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCogs, FaLaptopCode, FaCity, FaMicrochip, FaBolt } from "react-icons/fa";
import "./Departments.scss";

const Departments = () => {
  const [activeDept, setActiveDept] = useState(null);

  const departments = [
    {
      id: 1,
      title: "Mechanical Engineering",
      icon: <FaCogs />,
      subs: [
        { name: "Thermal Energy Engineering", link: "/mech-1" },
        { name: "Design & Manufacturing", link: "/mech-2" },
        { name: "Materials & Metallurgy", link: "/mech-3" },
        { name: "Robotics & Automation", link: "/mech-4" },
        { name: "Dynamics & Vibration", link: "/mech-5" },
        { name: "Fluid Mechanics & Hydraulics", link: "/mech-6" },
        { name: "Tribology & Maintenance", link: "/mech-7" },
        { name: "Industrial Production", link: "/mech-8" },
        { name: "Automobile Systems", link: "/mech-9" },
        { name: "Computational Simulation", link: "/mech-10" },
      ],
    },
    {
      id: 2,
      title: "Computer Science Engineering",
      icon: <FaLaptopCode />,
      subs: [
        { name: "AI & Machine Learning", link: "/cse-1" },
        { name: "Data Science", link: "/cse-2" },
        { name: "Cyber Security", link: "/cse-4" },
        { name: "Cloud Computing", link: "/cse-6" },
        { name: "Blockchain Systems", link: "/cse-5" },
        { name: "Quantum Computing", link: "/cse-7" },
      ],
    },
    {
      id: 3,
      title: "Civil Engineering",
      icon: <FaCity />,
      subs: [
        { name: "Structural Engineering", link: "/civil-1" },
        { name: "Geotechnical Engineering", link: "/civil-5" },
        { name: "Transportation Systems", link: "/civil-8" },
        { name: "Environmental Engineering", link: "/civil-11" },
      ],
    },
    {
      id: 4,
      title: "Electronics & Communication",
      icon: <FaMicrochip />,
      subs: [
        { name: "VLSI Design", link: "/ece-1" },
        { name: "Embedded Systems", link: "/ece-2" },
        { name: "Signal Processing", link: "/ece-3" },
        { name: "Power Electronics", link: "/ece-4" },
      ],
    },
    {
      id: 5,
      title: "Electrical & Electronics",
      icon: <FaBolt />,
      subs: [
        { name: "Smart Grid Systems", link: "/eee-1" },
        { name: "EV Infrastructure", link: "/eee-2" },
        { name: "Power System Stability", link: "/eee-3" },
        { name: "High Voltage DC", link: "/eee-5" },
      ],
    },
  ];

  const toggleDept = (id) => {
    setActiveDept(activeDept === id ? null : id);
  };

  return (
    <div className="departments-page">
      <h1 className="page-title">Engineering Departments</h1>

      <div className="departments-container">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className={`department-card ${activeDept === dept.id ? "active" : ""}`}
            onClick={() => toggleDept(dept.id)}
          >
            <div className="department-header">
              <div className="icon">{dept.icon}</div>
              <h2>{dept.title}</h2>
            </div>

            <div className={`sub-section ${activeDept === dept.id ? "visible" : ""}`}>
              {dept.subs.map((sub, i) => (
                <Link key={i} to={sub.link} className="sub-link">
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;

