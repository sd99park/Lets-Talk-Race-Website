import { useNavigate } from "react-router-dom";
import BannerLogo from "../img/BannerLogo.png";
import homeworkLogo from "../img/homeworkLogo.png";
import "./Footer.css";
import React from "react";

const Footer: React.FC = () => {
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
            <a
              className="btn text-2xl bg-secondary border-black hover:bg-primary"
              onClick={() => openDonate()}
            >
              Donate
            </a>
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

        <div className="footer-bottom">
          <div className="foot-hw">
            <img
              src={homeworkLogo}
              style={{ width: "15%" }}
              onClick={() => {
                navigate("/Homework");
                window.scrollTo(0, 0);
              }}
            />
          </div>
          <p className="footer-legal">
            LTR Ministries, Inc. is a 501(c)3 organization. All donations are
            tax-deductible
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
