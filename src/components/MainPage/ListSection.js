import * as constants from "../../constants/MainPageConstants";

import diffPeople from "../../img/diffPeople.png";
import "./ListSection.css";

const ListSection = () => {
  return (
    <div className="main-page-list">
      <div className="list-section-img">
        <img
          src={diffPeople}
          alt="diffPeople"
          style={{ maxWidth: "40%", minWidth: "20rem" }}
        />
      </div>
      <div className="list-section-list">
        <h3>{constants.whatWeDoTitle}</h3>
        <ul>
          <li className="list-section-bullet">{constants.whatWeDo1}</li>
          <li className="list-section-bullet">{constants.whatWeDo2}</li>
          <li className="list-section-bullet">{constants.whatWeDo3}</li>
          <li className="list-section-bullet">{constants.whatWeDo4}</li>
          <li className="list-section-bullet">{constants.whatWeDo5}</li>
          <li className="list-section-bullet">{constants.whatWeDo6}</li>
          <li className="list-section-bullet">{constants.whatWeDo7}</li>
        </ul>
      </div>
    </div>
  );
};

export default ListSection;
