import backImg from "../../../img/back.png";
import ltrLogo from "../../../img/ltrLogo.png";
import week2Glos from "../../../img/week2Glos.pdf";
import { useNavigate } from "react-router-dom";
import "./HwPage.css";

const Week2 = () => {
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
        Here is the homework to be completed AFTER Week 2 of Let's Talk Race.
        Please be prepared to discuss these in your class next week.
      </h1>

      <h2 className="hw-sec-title">REQUIRED HOMEWORK:</h2>
      <div className="hw-vid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XhOh_EGe41Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <p className="hw-video-desc">
        Mirrors of Privilege: Beyond Guilt to Responsibility (3 minutes)
      </p>
      <div className="hw-vid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/V-_lg-OcF90"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <p className="hw-video-desc">
        Dr. Darrell Bock from Dallas Theological Seminary discusses how to have
        difficult conversations (5 minutes)
      </p>

      <h2 className="hw-sec-title">CHOOSE YOUR OWN ADVENTURE</h2>
      <p className="hw-sec-descr">(choose any of the following)</p>

      {/* READ */}
      <div>
        <h3 className="hw-center">READ:</h3>
        <p className="hw-obj-title">
          10 Examples That Prove White Privilege Protects White People in Every
          Aspect Imaginable
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://everydayfeminism.com/2015/11/lessons-white-privilege-poc/"
              );
            }}
            href=""
          >
            "https://everydayfeminism.com/2015/11/lessons-white-privilege-poc/"
            {" d"}
          </a>
        </p>

        <p className="hw-obj-title">
          The original article about White Privilege by Peggy McIntosh
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.pcc.edu/illumination/wp-content/uploads/sites/54/2018/05/white-privilege-essay-mcintosh.pdf"
              );
            }}
            href=""
          >
            "https://www.pcc.edu/illumination/wp-content/uploads/sites/54/2018/05/white-privilege-essay-mcintosh.pdf"{" "}
          </a>
        </p>

        <p className="hw-obj-title">
          Microagressions in the Medical Field (behind a paywall)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.nytimes.com/2020/08/11/health/microaggression-medicine-doctors.html?action=click&module=RelatedLinks&pgtype=Article&fbclid=IwAR2EfASrtXcu4CEmQkJtXnDlhiiJyym-RXBveM_Eif3ETlaAw06LG4W2qZ8"
              );
            }}
            href=""
          >
            "https://www.nytimes.com/2020/08/11/health/microaggression-medicine-doctors.html?action=click&module=RelatedLinks&pgtype=Article&fbclid=IwAR2EfASrtXcu4CEmQkJtXnDlhiiJyym-RXBveM_Eif3ETlaAw06LG4W2qZ8"{" "}
          </a>
        </p>

        <p className="hw-obj-title">Home appraisal story</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.firstcoastnews.com/amp/article/news/local/jacksonville-couple-sees-home-appraisal-jump-40-percent-after-they-remove-all-traces-of-blackness/77-c3087e8c-0c65-4fb9-8319-da82f5c0ea20?__twitter_impression=true"
              );
            }}
            href=""
          >
            "https://www.firstcoastnews.com/amp/article/news/local/jacksonville-couple-sees-home-appraisal-jump-40-percent-after-they-remove-all-traces-of-blackness/77-c3087e8c-0c65-4fb9-8319-da82f5c0ea20?__twitter_impression=true"{" "}
          </a>
        </p>
      </div>

      {/* WATCH */}
      <div>
        <h3 className="hw-center">WATCH:</h3>
        <p className="hw-obj-title">Where are you really from? (2 minutes) </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://youtu.be/DWynJkN5HbQ");
            }}
            href=""
          >
            https://youtu.be/DWynJkN5HbQ
          </a>
        </p>

        <p className="hw-obj-title">Redlining and Suburbs: (6 minutes) </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=ETR9qrVS17g");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=ETR9qrVS17g{" "}
          </a>
        </p>

        <p className="hw-obj-title">Peggy McIntosh (3 minutes) </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=a4mjw2cVaDY");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=a4mjw2cVaDY
          </a>
        </p>

        <p className="hw-obj-title">Privilege in general (4 minutes) </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=hD5f8GuNuGQ&list=RDhRiWgx4sHGg&index=2"
              );
            }}
            href=""
          >
            https://www.youtube.com/watch?v=hD5f8GuNuGQ&list=RDhRiWgx4sHGg&index=2{" "}
          </a>
        </p>

        <p className="hw-obj-title">
          Jynx - an alternative to Facebook (a satire) (2 minutes)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=y5VdstSj_lM&feature=youtu.be&fbclid=IwAR01ebgZyqeoIg_LP8sf7RrAtnjdx5cTLkGxOe7FcWzaAZCa8pW859i98IM"
              );
            }}
            href=""
          >
            https://www.youtube.com/watch?v=y5VdstSj_lM&feature=youtu.be&fbclid=IwAR01ebgZyqeoIg_LP8sf7RrAtnjdx5cTLkGxOe7FcWzaAZCa8pW859i98IM{" "}
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
      </div>

      {/* LISTEN */}
      <div>
        <h3 className="hw-center">LISTEN:</h3>
        <p className="hw-obj-title">
          Ask NT Wright Anything #114 NT Wright, Esau McCaulley & Tim Mackie on
          Reading the Gospels While Black Pt 1:
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://podcasts.apple.com/us/podcast/114-nt-wright-esau-mccaulley-tim-mackie-on-reading/id1441656192?i=1000558293378"
              );
            }}
            href=""
          >
            https://podcasts.apple.com/us/podcast/114-nt-wright-esau-mccaulley-tim-mackie-on-reading/id1441656192?i=1000558293378{" "}
          </a>
        </p>

        <p className="hw-obj-title">
          Ask NT Wright Anything #115 Part 2: NT Wright, Esau McCaulley & Tim
          Mackie on race and the church:
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://podcasts.apple.com/us/podcast/115-part-2-nt-wright-esau-mccaulley-tim-mackie-on-race/id1441656192?i=1000559004526"
              );
            }}
            href=""
          >
            https://podcasts.apple.com/us/podcast/115-part-2-nt-wright-esau-mccaulley-tim-mackie-on-race/id1441656192?i=1000559004526{" "}
          </a>
        </p>

        <p className="hw-obj-title">
          VOX Conversations: Bryan Stevenson on how America Can Heal
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://podcasts.apple.com/us/podcast/bryan-stevenson-on-how-america-can-heal/id1081584611?i=1000485472204"
              );
            }}
            href=""
          >
            https://podcasts.apple.com/us/podcast/bryan-stevenson-on-how-america-can-heal/id1081584611?i=1000485472204{" "}
          </a>
        </p>
      </div>

      <h3 className="hw-center" style={{ marginTop: "2cm" }}>
        GLOSSARY OF TERMS:
      </h3>

      <div className="hw-button-loc">
        <a href={week2Glos} download="LTR Glossary Week 2">
          <button className="hw-download-button">Download Glossary</button>
        </a>
      </div>
      <div style={{ marginBottom: "2cm" }} />
    </>
  );
};

export default Week2;
