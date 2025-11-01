import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./CollegesList.scss";

const CollegesList = () => {
  const colleges = [
    { name: "University of Mumbai", path: "/college/university-of-mumbai" },
    { name: "Amity University", path: "/college/amity-university" },
    { name: "Atlas SkillTech University", path: "/college/atlas-skilltech-university" },
    { name: "Homi Bhabha State University", path: "/college/homi-bhabha-state-university" },
    { name: "Homi Bhabha National Institute", path: "/college/homi-bhabha-nation-university" },
    { name: "Indira Gandhi Institute of Development Research", path: "/college/indira-gandhi-institute-of-development-research" },
    { name: "Institute of Chemical Technology", path: "/college/institute-of-chemical-technology" },
    { name: "International Institute for Population Sciences", path: "/college/international-institute-for-population-sciences" },
    { name: "Hyderabad Sind National Collegiate University", path: "/college/hyderabad-sind-national-collegiate-university" },
    { name: "Narsee Monjee Institute of Management Studies", path: "/college/narsee-monjee-institute-of-management-studies" },
    { name: "Smt. Nathibai Damodar Thackersey University", path: "/college/smt-nathibai-damodar-thackersey-university" },
    { name: "Somaiya Vidyavihar University", path: "/college/somaiya-vidyavihar-university" },
    { name: "Tata Institute of Fundamental Research", path: "/college/tata-institute-of-fundamental-research" },
    { name: "Tata Institute of Social Sciences", path: "/college/tata-institute-of-social-sciences" },
    { name: "Chhatrapati Shivaji Maharaj University", path: "/college/chhatrapati-shivaji-maharaj-university" },
    { name: "D Y Patil University", path: "/college/d-y-patil-university" },
    { name: "Ajeenkya D Y Patil University Pune", path: "/college/ajeenkya-d-y-patil-university-pune" },
    { name: "Bharati Vidyapeeth University", path: "/college/bharati-vidyapeeth-university" },
    { name: "Deccan College", path: "/college/deccan-college" },
    { name: "Dr Vishwanath Karad MIT", path: "/college/dr-vishwanath-karad-mit" },
    { name: "FLAME University Pune", path: "/college/flame-university-pune" },
    { name: "Gokhale Institute of Politics and Economics Pune", path: "/college/gokhale-institute-of-politics-and-economics-pune" },
    { name: "MIT Art Design & Technology University Pune", path: "/college/mit-art-design-&-technology-university-pune" },
    { name: "National Institute of Construction Management and Research", path: "/college/national-institute-of-construction-management-and-research" },
    { name: "Savitribai Phule Pune University", path: "/college/savitribai-phule-pune-university" },
    { name: "Spicer Adventist University Pune", path: "/college/spicer-adventist-university-pune" },
    { name: "Sri Balaji University Pune", path: "/college/sri-balaji-university-pune" },
    { name: "Symbiosis International Pune", path: "/college/symbiosis-international-pune" },
    { name: "Symbiosis Skills and Professional University Pune", path: "/college/symbiosis-skills-and-professional-university-pune" },
    { name: "Vishwakarma University Pune", path: "/college/vishwakarma-university-pune" },
    { name: "University of Mumbai", path: "/colleges/university-of-mumbai" },
    { name: "Amity University", path: "/colleges/amity-university" },
    { name: "Atlas SkillTech University", path: "/colleges/atlas-skilltech-university" },
    { name: "Homi Bhabha State University", path: "/colleges/homi-bhabha-state-university" },
    { name: "Homi Bhabha National Institute", path: "/colleges/homi-bhabha-nation-university" },
    { name: "Indira Gandhi Institute of Development Research", path: "/colleges/indira-gandhi-institute-of-development-research" },
    { name: "Institute of Chemical Technology", path: "/colleges/institute-of-chemical-technology" },
    { name: "International Institute for Population Sciences", path: "/colleges/international-institute-for-population-sciences" },
    { name: "Hyderabad Sind National Collegiate University", path: "/colleges/hyderabad-sind-national-collegiate-university" },
    { name: "Narsee Monjee Institute of Management Studies", path: "/colleges/narsee-monjee-institute-of-management-studies" },
    { name: "Smt. Nathibai Damodar Thackersey University", path: "/colleges/smt-nathibai-damodar-thackersey-university" },
    { name: "Somaiya Vidyavihar University", path: "/colleges/somaiya-vidyavihar-university" },
    { name: "Tata Institute of Fundamental Research", path: "/colleges/tata-institute-of-fundamental-research" },
    { name: "Tata Institute of Social Sciences", path: "/colleges/tata-institute-of-social-sciences" },
    { name: "Chhatrapati Shivaji Maharaj University", path: "/colleges/chhatrapati-shivaji-maharaj-university" },
    { name: "D Y Patil University", path: "/colleges/d-y-patil-university" },
    { name: "Ajeenkya D Y Patil University Pune", path: "/colleges/ajeenkya-d-y-patil-university-pune" },
    { name: "Bharati Vidyapeeth University", path: "/colleges/bharati-vidyapeeth-university" },
    { name: "Deccan College", path: "/colleges/deccan-college" },
    { name: "Dr Vishwanath Karad MIT", path: "/colleges/dr-vishwanath-karad-mit" },
    { name: "FLAME University Pune", path: "/colleges/flame-university-pune" },
    { name: "Gokhale Institute of Politics and Economics Pune", path: "/colleges/gokhale-institute-of-politics-and-economics-pune" },
    { name: "MIT Art Design & Technology University Pune", path: "/colleges/mit-art-design-&-technology-university-pune" },
    { name: "National Institute of Construction Management and Research", path: "/colleges/national-institute-of-construction-management-and-research" },
    { name: "Savitribai Phule Pune University", path: "/colleges/savitribai-phule-pune-university" },
    { name: "Spicer Adventist University Pune", path: "/colleges/spicer-adventist-university-pune" },
    { name: "Sri Balaji University Pune", path: "/colleges/sri-balaji-university-pune" },
    { name: "Symbiosis International Pune", path: "/colleges/symbiosis-international-pune" },
    { name: "Symbiosis Skills and Professional University Pune", path: "/colleges/symbiosis-skills-and-professional-university-pune" },
    { name: "Vishwakarma University Pune", path: "/colleges/vishwakarma-university-pune" },
    
  ];

  const [search, setSearch] = useState("");

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="colleges-list-container">
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="colleges-title"
      >
        PhD Universities in Maharashtra
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="search-wrapper"
      >
        <svg
          className="search-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          placeholder="Search universities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </motion.div>

      <motion.div
        className="colleges-grid"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredColleges.length > 0 ? (
          filteredColleges.map((college) => (
            <motion.div
              key={college.name}
              className="college-card-wrapper"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={college.path} className="college-card">
                <div className="card-content">
                  <span>{college.name}</span>
                </div>
                <div className="card-glow"></div>
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="no-results">No universities found.</p>
        )}
      </motion.div>
    </div>
  );
};

export default CollegesList;

