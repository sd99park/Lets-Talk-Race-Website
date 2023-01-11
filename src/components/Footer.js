import { useNavigate } from "react-router-dom";
import BannerLogo from "../img/BannerLogo.png";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const openDonate = () => {
    window.open(
      "https://crm.bloomerang.co/HostedDonation?ApiKey=pub_85ea1511-7ae8-11ed-9ee6-0606629de7e9&WidgetId=45056"
    );
  };

  const openMailList = () => {
    window.open(
      "https://gmail.us7.list-manage.com/subscribe?u=d4e916972ae8c52a294d25f57&id=1bc7641333"
    );
  };

  return (
    <>
      <div className="footer-background">
        <div className="footer-container">
          <img
            className="foot-logo"
            src={BannerLogo}
            alt="ltrLogo"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          />

          <div className="foot-button-div">
            <button className="foot-donate-button" onClick={() => openDonate()}>
              Donate
            </button>
          </div>
          <p
            className="foot-links"
            onClick={() => {
              navigate("/About");
              window.scrollTo(0, 0);
            }}
          >
            About Us
          </p>
          <p
            className="foot-links"
            onClick={() => {
              navigate("/Registration");
              window.scrollTo(0, 0);
            }}
          >
            Sign up for a class
          </p>
          <p
            className="foot-links"
            onClick={() => {
              navigate("/Contact");
              window.scrollTo(0, 0);
            }}
          >
            Contact Us
          </p>

          <p className="foot-links" onClick={() => openMailList()}>
            Join our mailing list
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <p
            onClick={() => {
              navigate("/Homework");
              window.scrollTo(0, 0);
            }}
            className="foot-hw"
          >
            Homework
          </p>
          <p className="footer-legal">
            LTR Ministries, Inc. has an application pending with the Internal
            Revenue Service to be recognized as an organization exempt under
            Section 501(c)(3) of the Internal Revenue Code. Contributions are
            tax deductible to the full extent permitted by law.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
