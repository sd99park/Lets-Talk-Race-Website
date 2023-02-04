import React from "react";
import pic from "../../img/EngageChurchPic.png";
import { useNavigate } from "react-router-dom";

import "./EngageModal.css";

const EngageModal = (props) => {
  const navigate = useNavigate();

  if (props.show === false) {
    return null;
  }

  return (
    <>
      <div className="engage-modal" onClick={props.onClose}>
        <div className="engage-container" onClick={(e) => e.stopPropagation()}>
          <div className="engage-img">
            <img src={pic} style={{ width: "20%" }} />
          </div>
          <div className="engage-questions">
            <p className="engage-question">
              Are you part of a predominantly white church?
            </p>
            <p className="engage-question">
              Is the community around your building diverse, while your
              congregation is not?
            </p>
            <p className="engage-question">
              Are you or your church asking “what can we do”?
            </p>
          </div>
          <p className="engage-text">
            LTR Ministries would love to come alongside you or your leadership
            team to discuss how we can help create a strategy to begin the
            journey of reconciliation. We believe that racial reconciliation is
            more than just diversity (“color in the pews”) and we are committed
            to helping your church become a place where relationships can
            flourish among all people.
          </p>
          <p className="engage-text">
            Jesus prayed, “Your kingdom come, your will be done on earth as it
            is in heaven.” If we want to know what the church should look like
            on earth, we need to see what it looks like in heaven. John tells us
            in Revelation 7:9, “After this I looked, and there before me was a
            great multitude that no one could count, from every nation, tribe,
            people and language, standing before the throne and before the Lamb.
            They were wearing white robes and were holding palm branches in
            their hands.”
          </p>
          <p className="engage-text">
            Let's grab coffee and dream. We have some very practical, easy to
            engage, first steps we'd love to tell you about.{" "}
          </p>
          <button
            className="engage-close-button"
            onClick={() => props.onClose()}
          >
            X
          </button>
          <div className="engage-button-div">
            <button
              className="engage-contact-button"
              onClick={() => {
                navigate("/Contact");
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngageModal;
