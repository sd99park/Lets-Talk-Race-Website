import "./About.css";
import ProfilePage from "./Profiles/ProfilePage";
import Story from "./Story";
import headBanner from "../../img/headbanner.png";
import heartBanner from "../../img/heartbanner.png";
import { useState } from "react";

const About = () => {
  return (
    <>
      <img src={headBanner} style={{ width: "100%" }} />
      <div className="about-story">
        <Story />
      </div>
      <div className="about-verse">
        <div>
          <p className="about-verse-text">
            "Do nothing out of selfish ambition or vain conceit. Rather, in
            humility value others above yourselves, not looking to your own
            interests but each of you to the interests of the others."
            <p className="about-verse-verse">Phil 2: 3-4</p>
          </p>
        </div>
      </div>
      <div className="about-profile">
        <ProfilePage />
      </div>
    </>
  );
};

export default About;
