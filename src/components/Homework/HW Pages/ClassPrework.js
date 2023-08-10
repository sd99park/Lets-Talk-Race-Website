import "./IntroResources.css";
import { useNavigate } from "react-router-dom";
import backImg from "../../../img/back.png";
import ltrLogo from "../../../img/ltrLogo.png";
import ltrWorkbook from "../../../img/ltrWorkbook.pdf";
import HwDownloadImgWords from "../../../img/HwDownloadImgWords.png";

const ClassPrework = () => {
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
      <h1 className="intro-title">Introductory Resources</h1>
      <h1 className="intro-title">
        Please watch both of these videos before your first class:
      </h1>
      <div className="intro-vid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FuoY9bp2DVU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <p className="intro-video-desc">
        Welcome video from founders Shelley & David Park
      </p>

      <div className="intro-vid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ex7VcmWPwkE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <p className="intro-video-desc">
        Intro video from LTR friend and pastor Steve Frissell at Bent Tree
        Fellowship
      </p>

      <div className="hw-intro-download-div">
        <a
          href={ltrWorkbook}
          download="LTR Workbook"
          className="hw-intro-workbook-download"
        >
          <img
            src={HwDownloadImgWords}
            style={{ height: "200px" }}
            className="hw-intro-download-img"
          />
        </a>
      </div>
      <div style={{ marginBottom: "1cm" }} />
    </>
  );
};

export default ClassPrework;
