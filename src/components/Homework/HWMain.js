import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./HWMain.css";
import HWMobile from "../../img/HWImgMobile.png";
import ltrLogo from "../../img/ltrLogo.png";
import * as constants from "../../constants/HWPageConstants";
import HwDownloadImg from "../../img/HwDownloadImg.png";
import ltrWorkbook from "../../img/ltrWorkbook.pdf";

const HWMain = () => {
  const navigate = useNavigate();
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isNotMobile = windowDimension > 768;

  return (
    <>
      <div className="hw-ltr-logo">
        <img src={ltrLogo} style={{ maxWidth: "50%" }} />
      </div>

      <div className="hw-main-text">
        <p>
          {constants.headerP1Pt1}
          <em>{constants.headerP1Ital}</em>
          {constants.headerP1pt2}
        </p>
        <h4 style={{ textAlign: "center" }}>{constants.headerP2}</h4>
        <p>{constants.headerP3}</p>
        <p>{constants.headerP4}</p>
        <ul>
          <li>
            <strong>Required</strong>
            {constants.headerP5}
          </li>
          <li>
            <strong>Choose Your Own Adventure</strong>
            {constants.headerP6}
          </li>
        </ul>
        <p>{constants.headerP7}</p>
        {/* Here is the beginning of the picture */}
        <div className="hw-mobile-container">
          <div className="hw-img-mobile">
            <img
              src={HWMobile}
              style={{ maxWidth: "20rem", marginTop: "30px" }}
            />
          </div>
          <div>
            <div>
              <div className="hw-text-mobile" style={{ marginBottom: "85px" }}>
                <h4
                  onClick={() => {
                    navigate("/Homework/Intro");
                    window.scrollTo(0, 0);
                  }}
                  className="hw-links"
                >
                  {constants.mainTitle1}
                </h4>
                <p>{constants.mainText1}</p>
              </div>
            </div>
            <div>
              <div className="hw-text-mobile" style={{ marginBottom: "50px" }}>
                <h4>{constants.mainTitle2}</h4>
                <p>{constants.mainText2}</p>
              </div>
            </div>
            <div>
              <div className="hw-text-mobile" style={{ marginBottom: "80px" }}>
                <h4
                  onClick={() => {
                    navigate("/Homework/Week1");
                    window.scrollTo(0, 0);
                  }}
                  className="hw-links"
                >
                  {constants.mainTitle3}
                </h4>
                <p>{constants.mainText3}</p>
              </div>
            </div>
            <div>
              <div className="hw-text-mobile" style={{ marginBottom: "60px" }}>
                <h4>{constants.mainTitle4}</h4>
                <p>{constants.mainText4}</p>
              </div>
            </div>
            <div>
              <div className="hw-text-mobile" style={{ marginBottom: "70px" }}>
                <h4
                  onClick={() => {
                    navigate("/Homework/Week2");
                    window.scrollTo(0, 0);
                  }}
                  className="hw-links"
                >
                  {constants.mainTitle5}
                </h4>
                <p>{constants.mainText5}</p>
              </div>
            </div>
            <div>
              <div className="hw-text-mobile" style={{ marginBottom: "75px" }}>
                <h4>{constants.mainTitle6}</h4>
                <p>{constants.mainText6}</p>
              </div>
            </div>
            <div>
              <div className="hw-text-mobile" style={{ marginBottom: "70px" }}>
                <h4
                  onClick={() => {
                    navigate("/Homework/Week3");
                    window.scrollTo(0, 0);
                  }}
                  className="hw-links"
                >
                  {constants.mainTitle7}
                </h4>
                <p>{constants.mainText7}</p>
              </div>
            </div>
            <div>
              <div className="hw-text-mobile" style={{ marginBottom: "70px" }}>
                <h4>{constants.mainTitle8}</h4>
                <p>{constants.mainText8}</p>
              </div>
            </div>
            <div>
              <div className="hw-text-mobile" style={{ marginBottom: "50px" }}>
                <h4
                  className="hw-links"
                  onClick={() => {
                    navigate("/Homework/Week4");
                    window.scrollTo(0, 0);
                  }}
                >
                  {constants.mainTitle9}
                </h4>
                <p>{constants.mainText9}</p>
              </div>
            </div>
            <div>
              <div className="hw-text-mobile" style={{ marginBottom: "70px" }}>
                <h4>{constants.mainTitle10}</h4>
                <p>{constants.mainText10}</p>
              </div>
            </div>
            <div>
              <div className="hw-text-mobile" style={{ marginBottom: "100px" }}>
                <h4
                  className="hw-links"
                  onClick={() => {
                    navigate("/Homework/Week5");
                    window.scrollTo(0, 0);
                  }}
                >
                  {constants.mainTitle11}
                </h4>
                <p>{constants.mainText11}</p>
                <p>{constants.mainText12}</p>
              </div>
            </div>
            <div>
              <div
                className="hw-text-mobile"
                style={{ marginBottom: "100px" }}
                d
              >
                <h4>{constants.mainTitle12}</h4>
                <p>{constants.mainText13}</p>
                <p>
                  <a
                    onClick={() => {
                      window.open("https://" + constants.mainText14);
                    }}
                    href=""
                  >
                    {constants.mainText14}
                  </a>
                </p>
                <p>
                  <a
                    onClick={() => {
                      window.open("https://" + constants.mainText15);
                    }}
                    href=""
                  >
                    {constants.mainText15}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hw-workbook"
        style={{
          backgroundImage: `url(${HwDownloadImg})`,
        }}
      >
        <div className="hw-workbook-spacing">
          <p className="hw-workbook-one">
            Click{" "}
            <a
              href={ltrWorkbook}
              download="LTR Glossary Week 1"
              className="hw-workbook-download"
            >
              here
            </a>{" "}
            to download our brand new LTR Workbook.
          </p>
          <p className="hw-workbook-two">
            Feel free to print and use to take notes and document your journey
          </p>
        </div>
      </div>
      <div style={{ paddingTop: "2cm" }} />
    </>
  );
};

export default HWMain;
