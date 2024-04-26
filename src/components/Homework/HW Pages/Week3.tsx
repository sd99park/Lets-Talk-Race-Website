import backImg from "../../../img/back.png";
import ltrLogo from "../../../img/ltrLogo.png";
import week3Art from "../../../img/week3Article.pdf";
import { useNavigate } from "react-router-dom";
import "./HwPage.css";
import React from "react";

const Week3: React.FC = () => {
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
        Here is the homework to be completed AFTER Week 3 of Let's Talk Race.
        Please be prepared to discuss these in your class next week.
      </h1>

      <h2 className="hw-sec-title">REQUIRED HOMEWORK:</h2>
      <div className="hw-vid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QO15S3WC9pg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
      <p className="hw-video-desc">
        Words that Don't Belong to Everyone with Ta'Nehisi Coates (specifically
        related to the n-word) (5min)
      </p>
      <div className="hw-vid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4j3hGTRQ4rA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
      <p className="hw-video-desc">
        Pastor Michelle Henderson discusses her experience with fragility
      </p>

      <h2 className="hw-sec-title">CHOOSE YOUR OWN ADVENTURE</h2>
      <p className="hw-sec-descr">(choose any of the following)</p>

      {/* READ */}
      <div>
        <h3 className="hw-center">READ:</h3>
        <p className="hw-obj-title">Article by Dr. Robin DiAngelo</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.huffingtonpost.com/good-men-project/why-its-so-hard-to-talk-to-white-people-about-racism_b_7183710.html"
              );
            }}
            href=""
          >
            https://www.huffingtonpost.com/good-men-project/why-its-so-hard-to-talk-to-white-people-about-racism_b_7183710.html
          </a>
        </p>

        <p className="hw-obj-title">Decentering Whiteness</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "http://www.euroamerican.org/public/decenteringwhiteness.pdf"
              );
            }}
            href=""
          >
            http://www.euroamerican.org/public/decenteringwhiteness.pdf {" d"}
          </a>
        </p>

        <p className="hw-obj-title">
          Why I'm No Longer Talking to White People about Race by Reni
          Eddo-Lodge
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.theguardian.com/world/2017/may/30/why-im-no-longer-talking-to-white-people-about-race"
              );
            }}
            href=""
          >
            https://www.theguardian.com/world/2017/may/30/why-im-no-longer-talking-to-white-people-about-race
            {" d"}
          </a>
        </p>

        <p className="hw-obj-title">
          The Scientific Way to Train White People to Stop Being Racist
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://qz.com/656159/the-scientific-way-to-train-white-people-to-stop-being-racist/"
              );
            }}
            href=""
          >
            https://qz.com/656159/the-scientific-way-to-train-white-people-to-stop-being-racist/
            {" d"}
          </a>
        </p>

        <p className="hw-obj-title">
          On Being a “Good” White Person by Jessica Denise Dickson
        </p>
        <p className="hw-obj-descr">
          <a href={week3Art} download="Week 3 Reading">
            <p className="hw-obj-descr">Download Reading</p>
          </a>
        </p>
      </div>

      {/* WATCH */}
      <div>
        <h3 className="hw-center">WATCH:</h3>
        <p className="hw-obj-title">
          Scene from “This is Us”: (conversation b/w two siblings) (4 min)
          (please read post “On Being a Good White Person” to understand this
          clip better)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=33CCbXlje_Q");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=33CCbXlje_Q
          </a>
        </p>

        <p className="hw-obj-title">
          What Happens When I Try to Talk Race with White People (3 min)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=1SynR1NYcpo");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=1SynR1NYcpo
          </a>
        </p>

        <p className="hw-obj-title">Be the Bridge (9 min)</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://vimeo.com/229364106");
            }}
            href=""
          >
            https://vimeo.com/229364106
          </a>
        </p>

        <p className="hw-obj-title">
          Robin DiAngelo & Erin Trent Johnson discussing White Fragility (53
          min)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://youtu.be/LE8_0blJOtk");
            }}
            href=""
          >
            https://youtu.be/LE8_0blJOtk
          </a>
        </p>

        <p className="hw-obj-title">
          Dr. Michael Brown talks White Fragility (5 min)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://youtu.be/U0E7DWDBDJg");
            }}
            href=""
          >
            https://youtu.be/U0E7DWDBDJg
          </a>
        </p>

        <p className="hw-obj-title">Systemic Racism Explained (4 min)</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://youtu.be/YrHIQIO_bdQ");
            }}
            href=""
          >
            https://youtu.be/YrHIQIO_bdQ
          </a>
        </p>

        <p className="hw-obj-title">
          Uncomfortable Conversations with a Black Man re: Reverse Racism (7
          min) (this is Ep 4 - I recommend all of them)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=jSsoVjTgYJ0");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=jSsoVjTgYJ0
          </a>
        </p>

        <p className="hw-obj-title">
          White Fragility in the Workplace (a satire) (5 min)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=ZPDpcYEdiOg&t");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=ZPDpcYEdiOg&t
          </a>
        </p>
      </div>
      <div style={{ paddingTop: "2cm" }} />
    </>
  );
};

export default Week3;
