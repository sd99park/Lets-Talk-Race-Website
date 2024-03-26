import "./About.css";
import ProfilePage from "./Profiles/ProfilePage";
import Story from "./Story";
import headBanner from "../../img/headbanner.png";
import InTheName from "./InTheName";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const divId = queryParams.get("scrollTo");
    if (divId) {
      const targetDiv = document.getElementById(divId);
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.search]);

  return (
    <>
      <div id="TopOfPage" />
      <img src={headBanner} style={{ width: "100%" }} />
      <div id="InTheName">
        <InTheName />
      </div>
      <div className="about-verse-one">
        <div>
          <p className="about-verse-text">
            "He has shown you, O mortal, what is good. And what does the Lord
            require of you? To act justly and to love mercy and to walk humbly
            with your God."
            <p className="about-verse-verse">Micah 6:39</p>
          </p>
        </div>
      </div>
      <div id="Story">
        <Story />
      </div>
      <div className="about-verse-two">
        <div>
          <p className="about-verse-text">
            "Do nothing out of selfish ambition or vain conceit. Rather, in
            humility value others above yourselves, not looking to your own
            interests but each of you to the interests of the others."
            <p className="about-verse-verse">Phil 2: 3-4</p>
          </p>
        </div>
      </div>
      <div id="ProfilePage">
        <ProfilePage />
      </div>
    </>
  );
};

export default About;
