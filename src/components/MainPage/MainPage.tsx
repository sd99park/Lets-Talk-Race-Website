import OpeningPage from "./OpeningPage";
import MainCards from "./MainCards";
import Interview from "./Interview";

import "./MainPage.css";
import React from "react";

const MainPage: React.FC = () => {
  return (
    <>
      <div className="main-page-container">
        <div style={{ paddingTop: "2.5cm" }} />

        <OpeningPage />
        <div className="main-verse-one">
          <div>
            <p className="main-verse-text">
              “After this I looked, and there before me was a great multitude
              that no one could count, from every nation, tribe, people and
              language, standing before the throne and before the Lamb. They
              were wearing white robes and were holding palm branches in their
              hands.”
              <p className="main-verse-verse">Revelation 7:9</p>
            </p>
          </div>
        </div>
        <MainCards />
        <div className="main-verse-two">
          <p className="main-verse-text">
            “You are in me and I am in you. I pray that they also can be one in
            us. <br /> THEN THE WORLD WILL BELIEVE THAT YOU SENT ME.”
            <p className="main-verse-verse">John 17:21</p>
          </p>
        </div>
        <Interview />
      </div>
    </>
  );
};

export default MainPage;
