import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services7.scss";
 
import thesisImg from "../images/Services7_1.png";
import synopsis from "../images/Services7_2.png";
import vivavoce from "../images/Services7_3.png";
// synopsisImg from "../images/synopsis.jpg";
//import vivaImg from "../images/vivavoce.jpg";
 

const PublicationAndArticle = () => {
  const navigate = useNavigate();

  return (
    <div className="containerimage">
      <h1>Thesis Writing, Synopsis Writing Support and Viva Voce Support</h1>

     <div className="Images-wrap">
      <div
        className="photo"
        style={{ backgroundImage: `url(${thesisImg})` }}
      >
        <h2>Thesis Writing Services in Mumbai</h2>
        <button onClick={() => navigate("/thesis-writing-services")}>Explore</button>
      </div>

      <div
        className="photo"
        style={{ backgroundImage: `url(${synopsis})` }}
      >
        <h2>Synopsis Writing Services in Mumbai</h2>
        <button onClick={() => navigate("/synopsis-writing-support")}>Explore</button>
      </div>

      <div
        className="photo"
        style={{ backgroundImage: `url(${vivavoce})` }}
      >
        <h2>Viva Voce Support Services in Mumbai</h2>
        <button onClick={() => navigate("/viva-voce-support")}>Explore</button>
      </div>
    </div>

    </div>
  );
};

export default PublicationAndArticle;
