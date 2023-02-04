import React from "react";
import pic from "../../img/StratPartPic.png";
import { useNavigate } from "react-router-dom";

import "./StrategyModal.css";

const StrategyModal = (props) => {
  const navigate = useNavigate();

  if (props.show === false) {
    return null;
  }

  return (
    <>
      <div className="strategy-modal" onClick={props.onClose}>
        <div
          className="strategy-container"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="strategy-img">
            <img src={pic} style={{ width: "20%" }} />
          </div>

          <p className="strategy-text">
            Are you an organization committed to reconciliation in the church?
            We would love to partner with you and help any way we can. We have a
            class that will help prepare White people to begin the journey of
            reconciliation
          </p>
          <p className="strategy-text">Let's grab coffee and dream.</p>

          <button
            className="strategy-close-button"
            onClick={() => props.onClose()}
          >
            X
          </button>
          <div className="strategy-button-div">
            <button
              className="strategy-contact-button"
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

export default StrategyModal;
