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
      <div className="footer-container">
        <img
          className="foot-logo"
          src={BannerLogo}
          alt="ltrLogo"
          onClick={() => navigate("/")}
        />

        <div className="foot-button-div">
          <button className="foot-donate-button" onClick={() => openDonate()}>
            Donate
          </button>
        </div>
        <p className="foot-links" onClick={() => navigate("/About")}>
          About Us
        </p>
        <p className="foot-links" onClick={() => navigate("/Registration")}>
          Sign up for a class
        </p>
        <p className="foot-links" onClick={() => navigate("/Contact")}>
          Contact Us
        </p>

        <p className="foot-links" onClick={() => openMailList()}>
          Join our mailing list
        </p>
      </div>
    </>
  );
};

export default Footer;
