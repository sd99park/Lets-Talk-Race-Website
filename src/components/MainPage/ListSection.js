import * as constants from "../../constants/MainPageConstants";

import diffPeople from "../../img/diffPeople.png";
import "./ListSection.css";

const ListSection = () => {
  return (
    <div className="main-page-list">
      <img src={diffPeople} alt="diffPeople" style={{ width: "30%" }} />
      <div>
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
  );
};

export default ListSection;
