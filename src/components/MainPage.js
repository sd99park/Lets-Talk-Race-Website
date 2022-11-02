import handShake from "../img/shakeHands.jpg";
import EngageChurchPic from "../img/EngageChurchPic.png";
import ltrLogo from "../img/ltrLogo.png";
import stratPartPic from "../img/StratPartPic.png";
import { useNavigate } from "react-router-dom";
import * as constants from "../constants/MainPageConstants";
import { LoremIpsum } from "react-lorem-ipsum";
import "./MainPage.css";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-page-container">
        <div className="image-container">
          <img
            src={ltrLogo}
            alt="HandShake"
            style={{ width: "65%", border: "solid" }}
          />
        </div>

        <div className="textbox1">
          <h2>{constants.missionStatement}</h2>
        </div>
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

        <div className="textbox2">
          <h3>{constants.whatWeDoTitle}</h3>
          <ul>
            <li>{constants.whatWeDo1}</li>
            <li>{constants.whatWeDo2}</li>
            <li>{constants.whatWeDo3}</li>
            <li>{constants.whatWeDo4}</li>
            <li>{constants.whatWeDo5}</li>
            <li>{constants.whatWeDo6}</li>
            <li>{constants.whatWeDo7}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainPage;
