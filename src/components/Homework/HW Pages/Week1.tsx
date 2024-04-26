import backImg from "../../../img/back.png";
import ltrLogo from "../../../img/ltrLogo.png";
import { useNavigate } from "react-router-dom";
import WhiteCulture from "../../../img/WhiteCulture.pdf";
import "./HwPage.css";
import React from "react";

const Week1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hw-ltr-logo">
        <img src={ltrLogo} style={{ maxWidth: "50%" }} />
      </div>
      <button
        onClick={() => {
          navigate("/Homework");
          window.scrollTo(0, 0);
        }}
        className="hw-back-button"
      >
        <img src={backImg} style={{ height: "70px" }} />
      </button>

      <h1 className="hw-title">
        Here is the homework to be completed AFTER Week 1 of Let's Talk Race.
        Please be prepared to discuss these in your class next week.
      </h1>

      <h2 className="hw-sec-title">REQUIRED HOMEWORK:</h2>
      <div className="hw-vid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/c2tOp7OxyQ8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
      <p className="hw-video-desc">
        Bryan Stevenson speaks about identity (25 minutes)
      </p>
      <div className="hw-vid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qRc7AImUaUM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
      <p className="hw-video-desc">
        Pastor Steve Frissell discusses Ephesians 2 (7 minutes)
      </p>

      <h2 className="hw-sec-title">CHOOSE YOUR OWN ADVENTURE</h2>
      <p className="hw-sec-descr">(choose any of the following)</p>

      {/* READ */}
      <div>
        <h3 className="hw-center">READ:</h3>
        <p className="hw-obj-title">History books in America</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://news.harvard.edu/gazette/story/2020/09/harvard-historian-examines-how-textbooks-taught-white-supremacy/"
              );
            }}
            href=""
          >
            https://news.harvard.edu/gazette/story/2020/09/harvard-historian-examines-how-textbooks-taught-white-supremacy/
          </a>
        </p>

        <p className="hw-obj-title">5 Principles of Reconciliation</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://static1.squarespace.com/static/5a8641a12278e7758e00c4ae/t/5acf4f5070a6adc2356c0830/1523535712405/5PrinciplesForReconciliation_LeadersGuide_Feb2018.pdf"
              );
            }}
            href=""
          >
            https://static1.squarespace.com/static/5a8641a12278e7758e00c4ae/t/5acf4f5070a6adc2356c0830/1523535712405/5PrinciplesForReconciliation_LeadersGuide_Feb2018.pdf
          </a>
        </p>

        <p className="hw-obj-title">What is Racial Reconciliation</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "http://www.missioalliance.org/racial-reconciliation-may-not-think/"
              );
            }}
            href=""
          >
            http://www.missioalliance.org/racial-reconciliation-may-not-think/
          </a>
        </p>

        <p className="hw-obj-title">Biblical Justice</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://relevantmagazine.com/faith/what-biblical-justice/"
              );
            }}
            href=""
          >
            [] https://relevantmagazine.com/faith/what-biblical-justice/
          </a>
        </p>

        <p className="hw-obj-title">
          List of Some Aspects of White Culture in the United States
        </p>
        <p className="hw-obj-descr">
          <a href={WhiteCulture} download="AssumptionsWhiteCulture">
            <p className="hw-obj-descr">Download Reading</p>
          </a>
        </p>
      </div>

      {/* TAKE */}
      <div>
        <h3 className="hw-center">TAKE:</h3>
        <p className="hw-obj-title">Implicit Bias Test by Harvard</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://implicit.harvard.edu/implicit/takeatest.html"
              );
            }}
            href=""
          >
            https://implicit.harvard.edu/implicit/takeatest.html
          </a>
        </p>

        <p className="hw-obj-title">
          Hidden Brain Podcast: The Air We Breathe (companion podcast to
          Harvard's Implicit Bias Test - 35 minutes)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://overcast.fm/+ju9Nv35eU");
            }}
            href=""
          >
            https://overcast.fm/+ju9Nv35eU
          </a>
        </p>
      </div>

      {/* WATCH */}
      <div>
        <h3 className="hw-center">WATCH:</h3>
        <p className="hw-obj-title">
          What is "Biblical Justice"? (from the BibleProject) (6 minutes)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://youtu.be/A14THPoc4-4");
            }}
            href=""
          >
            https://youtu.be/A14THPoc4-4
          </a>
        </p>

        <p className="hw-obj-title">
          What is Implicit/Unconscious Bias? (3 minutes)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=Iaan2XSw6ho");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=Iaan2XSw6ho
          </a>
        </p>

        <p className="hw-obj-title">
          The Origin of Race (from PBS) (10 minutes)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.pbs.org/video/the-origin-of-race-in-the-usa-wbm41s/"
              );
            }}
            href=""
          >
            https://www.pbs.org/video/the-origin-of-race-in-the-usa-wbm41s/
          </a>
        </p>

        <p className="hw-obj-title">
          Color blind or color brave? (Mellody Hobson | TED2014) (14 minutes)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://ted.com/talks/mellody_hobson_color_blind_or_color_brave?utm_source=tedcomshare&utm_medium=email&utm_campaign=tedspread"
              );
            }}
            href=""
          >
            https://ted.com/talks/mellody_hobson_color_blind_or_color_brave?utm_source=tedcomshare&utm_medium=email&utm_campaign=tedspread
          </a>
        </p>

        <p className="hw-obj-title">Let's Talk About Race (11 minutes)</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://youtu.be/Rf8q-8gbfrw");
            }}
            href=""
          >
            https://youtu.be/Rf8q-8gbfrw
          </a>
        </p>

        <p className="hw-obj-title">Diversity in the Church (65 minutes)</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=xMRqZjZzRxw");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=xMRqZjZzRxw
          </a>
        </p>

        <p className="hw-obj-title">The Look (2 minutes)</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=aC7lbdD1hq0&t=7s");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=aC7lbdD1hq0&t=7s
          </a>
        </p>

        <p className="hw-obj-title">
          Why Color Blindness Will NOT End Racism (6 min)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=H4LpT9TF_ew&t");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=H4LpT9TF_ew&t
          </a>
        </p>

        <p className="hw-obj-title">Code-Switching (5 minutes)</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=QNbdn0yuUw8");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=QNbdn0yuUw8
          </a>
        </p>

        <p className="hw-obj-title">
          Markus Lloyd, Executive Director of Threaded walks us through the
          multiethnic mission of God in scripture. (5 min)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://youtu.be/Cyk_3TIXDQ0");
            }}
            href=""
          >
            https://youtu.be/Cyk_3TIXDQ0
          </a>
        </p>
      </div>

      {/* LISTEN */}
      <h3 className="hw-center">LISTEN:</h3>
      <p className="hw-sec-descr">Podcast: Scene on Radio</p>
      <p className="hw-sec-descr">
        Speaker: John Biewen, Center for Documentary Studies at Duke University
      </p>
      <p className="hw-sec-descr">Series: Seeing White (14 Episodes)</p>
      <div style={{ paddingTop: "2cm" }} />
    </>
  );
};

export default Week1;
