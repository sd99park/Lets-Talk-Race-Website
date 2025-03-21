import OpeningPage from "./OpeningPage";
import MainCards from "./MainCards";
import Interview from "./Interview";

import "./MainPage.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

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
        <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700 ml-28 mr-28 mb-4">
          <p>
            LTR Ministries, Inc. is a 501(c)(3) organization and makes every
            effort to ensure accurate reporting of your donations so that we can
            supply you with necessary tax documentation. If the information you
            receive from our office does not match your records, or if you fail
            to receive the needed documentation, please email us at:{" "}
            <a
              href="mailto:admin@ltrministries.com"
              className="text-secondary hover:underline"
            >
              admin@ltrministries.com
            </a>
          </p>
          <a
            onClick={() => {
              navigate("/DonationPolicy");
              window.scrollTo(0, 0);
            }}
            className="text-secondary hover:underline mt-2 block"
          >
            Click here to read our donation and gift acceptance policy.
          </a>
          <p className="mt-2">
            Thank you for your support of LTR Ministries, Inc.
          </p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
