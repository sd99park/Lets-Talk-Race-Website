import "./Register.css";
import * as constants from "../constants/RegistrationConstants";
import registrationOne from "../img/registrationOne.png";
import registrationTwo from "../img/registrationTwo.png";
import registrationThree from "../img/registrationThree.png";

const Register = () => {
  return (
    <>
      <div className="register-container">
        <div className="register-sections">
          <div className="register-text">
            <h1 className="register-header">{constants.regHeader}</h1>
            <p className="register-paragraph">{constants.reg1stParagraph}</p>
          </div>
          <div className="register-image">
            <img src={registrationOne} style={{ maxWidth: "100%" }} />
          </div>
        </div>

        <h2 className="register-important-title-fancy">
          Designed for white people ... Open to all
        </h2>

        <div className="register-sections">
          <div className="register-image">
            <img src={registrationTwo} style={{ maxWidth: "100%" }} />
          </div>
          <div className="register-text">
            <h2 className="register-list-title">
              {constants.regExpectListTitle}
            </h2>
            <ul className="register-expect-list">
              <li>{constants.regExpect1}</li>
              <li>{constants.regExpect2}</li>
              <li>{constants.regExpect3}</li>
              <li>{constants.regExpect4}</li>
              <li>{constants.regExpect5}</li>
              <li>{constants.regExpect6}</li>
              <li>{constants.regExpect7}</li>
            </ul>
          </div>
        </div>
        <h2 className="register-important-title">
          {constants.regImportantPt1}{" "}
          <a
            href="mailto:letstalkrace@ltrministries.com"
            className="register-contact-email"
          >
            letstalkrace@ltrministries.com
          </a>
          {constants.regImportantPt2}
        </h2>
        <div className="register-sections">
          <div className="register-text">
            <h2 className="register-rules-title">{constants.regRulesTitle}</h2>
            <p className="register-rules-para">{constants.regRulesPara}</p>
            <ol className="register-rules-list">
              <li>{constants.regRules1}</li>
              <li>{constants.regRules2}</li>
              <li>{constants.regRules3}</li>
              <li>{constants.regRules4}</li>
            </ol>
          </div>
          <div className="register-image">
            <img src={registrationThree} style={{ maxWidth: "100%" }} />
          </div>
        </div>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfOUQ7ykO40bFhYqEq_0T723I03tvBMi67xCtp4eWoBbX0K4g/viewform?embedded=true"
          width="640"
          height="2076"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default Register;
