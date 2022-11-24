import EngageChurchPic from "../../img/EngageChurchPic.png";
import ltrLogo from "../../img/ltrLogo.png";
import stratPartPic from "../../img/StratPartPic.png";

import * as constants from "../../constants/MainPageConstants";
import { useNavigate } from "react-router-dom";
import "./MainCards.css";

const MainCards = () => {
  const navigate = useNavigate();

  return (
    <div className="main-card-container">
      <div className="main-card">
        <img src={EngageChurchPic} className="card1-img" />
        <h3>{constants.engageTitle}</h3>
        <p className="main-card-text">{constants.engageText}</p>
        <button className="main-section-button">Do something</button>
      </div>
      <div className="main-card">
        <img src={stratPartPic} className="card2-img" />
        <h3>{constants.partnerTitle}</h3>
        <p className="main-card-text">{constants.partnerText}</p>
        <button className="main-section-button">Do something</button>
      </div>
      <div className="main-card">
        <img src={ltrLogo} className="card3-img" />
        <h3>{constants.primaryTitle}</h3>
        <p className="main-card-text">{constants.primaryText}</p>
        <button
          className="main-section-button"
          onClick={() => navigate("/Registration")}
        >
          Sign Up!
        </button>
      </div>
    </div>
  );
};

export default MainCards;
