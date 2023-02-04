import EngageChurchPic from "../../img/EngageChurchPic.png";
import ltrLogo from "../../img/ltrLogo.png";
import stratPartPic from "../../img/StratPartPic.png";
import EngageModal from "./EngageModal";
import StrategyModal from "./StrategyModal";
import * as constants from "../../constants/MainPageConstants";
import { useNavigate } from "react-router-dom";
import "./MainCards.css";
import { useState } from "react";

const MainCards = () => {
  const navigate = useNavigate();
  const [showEngage, setShowEngage] = useState(false);
  const [showStrategy, setShowStrategy] = useState(false);

  const onEngageClose = () => {
    setShowEngage(false);
  };

  const onStrategyClose = () => {
    setShowStrategy(false);
  };

  return (
    <>
      <EngageModal show={showEngage} onClose={onEngageClose} />
      <StrategyModal show={showStrategy} onClose={onStrategyClose} />
      <div className="main-card-container">
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
        <div className="main-card">
          <img src={EngageChurchPic} className="card1-img" />
          <h3>{constants.engageTitle}</h3>
          <p className="main-card-text">{constants.engageText}</p>
          <button
            className="main-section-button"
            onClick={() => setShowEngage(true)}
          >
            Learn More
          </button>
        </div>
        <div className="main-card">
          <img src={stratPartPic} className="card2-img" />
          <h3>{constants.partnerTitle}</h3>
          <p className="main-card-text">{constants.partnerText}</p>
          <button
            className="main-section-button"
            onClick={() => setShowStrategy(true)}
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default MainCards;
