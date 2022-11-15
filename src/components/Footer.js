import { useNavigate } from "react-router-dom";
import BannerLogo from "../img/BannerLogo.png";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="footer-container">
        <img
          className="foot-logo"
          src={BannerLogo}
          alt="ltrLogo"
          onClick={() => navigate("/")}
        />

        <div className="foot-all-links">
          <p className="foot-links" onClick={() => navigate("/About")}>
            About Us
          </p>
          <p className="foot-links" onClick={() => navigate("/Registration")}>
            Sign up for a class
          </p>
          <p className="foot-links" onClick={() => navigate("/Contact")}>
            Contact Us
          </p>
        </div>

        <a
          className="foot-links"
          href="https://gmail.us7.list-manage.com/subscribe?u=d4e916972ae8c52a294d25f57&id=1bc7641333"
          target="_blank"
          rel="noreferrer noopener"
        >
          Join our mailing list
        </a>

        <div className="foot-button-div">
          <button
            className="foot-donate-button"
            onClick={() => navigate("/Donate")}
          >
            Donate
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
