import backImg from "../../../img/back.png";
import ltrLogo from "../../../img/ltrLogo.png";
import notesPage from "../../../img/notesPage.pdf";
import { useNavigate } from "react-router-dom";
import "./IntroResources.css";

const IntroResources = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    fetch("notesPage.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "notesPage.pdf";
        alink.click();
      });
    });
  };

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
      {/* <video width="50%" preload="auto">
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video> */}
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

      <h3 className="intro-title" style={{ marginTop: "2cm" }}>
        Note Taking Pages
      </h3>
      <p className="intro-desc">
        Here is a pdf you can download and print to use in taking notes
        throughout the 5 week class. This is not required, but some have found
        it helpful. Use it only if it blesses you.
      </p>
      <div className="intro-button-loc">
        <a href={notesPage} download="notes">
          <button className="intro-download-button">Download Note Pages</button>
        </a>
      </div>

      <h2 className="intro-intro">
        Here are books to read, movies/documentaries to watch, and people to
        follow.
      </h2>
      <p className="intro-desc">
        This is a list of recommendations from us to help you in your
        reconciliation journey. These are not required but we highly recommend
        you look into them.
      </p>
      <h3 className="intro-books-title">BOOKS TO READ:</h3>
      <div>
        <p className="intro-books">
          <em>Dear White Peacemakers</em> by Osheta Moore
        </p>
        <p className="intro-books">
          <em>Be the Bridge</em> by Latasha Morrison
        </p>
        <p className="intro-books">
          <em>Just Mercy</em> by Bryan Stevenson
        </p>
        <p className="intro-books">
          <em>White Awake </em> by Daniel Hill
        </p>
        <p className="intro-books">
          <em>How to Fight Racism </em> by Jemar Tisby
        </p>
        <p className="intro-books">
          <em>The Color of Compromise </em> by Jemar Tisby
        </p>
        <p className="intro-books">
          <em>Divided by Faith</em> by Michael Emerson and Christian Smith
        </p>
        <p className="intro-books">
          <em>White Too Long</em> by Robert P. Jones
        </p>
        <p className="intro-books">
          <em>White Fragility</em> by Robin DiAngelo
        </p>
        <p className="intro-books">
          <em>
            Why Are All the Black Kids Sitting Together in the Cafeteria?{" "}
          </em>{" "}
          by Beverly Daniel Tatum
        </p>
        <p className="intro-books">
          <em>So You Want to Talk about Race</em> by Ijeoma Oluo
        </p>
        <p className="intro-books">
          <em>I'm Still Here; Black Dignity in a World Made for Whiteness</em>{" "}
          by Austin Channing Brown
        </p>
        <p className="intro-books">
          <em>Chokehold: Policing Black Men</em> by Paul Butler
        </p>
        <p className="intro-books">
          <em>The New Jim Crow</em> by Michelle Alexander
        </p>
        <p className="intro-books">
          <em>Caste</em> by Isabelle Wilkerson
        </p>
        <p className="intro-books">
          <em>Between the World and Me</em> by Ta-Nehisi Coates
        </p>
        <p className="intro-books">
          <em>Born a Crime</em> by Trevor Noah
        </p>
        <p className="intro-books">
          <em>Stamped from the Beginning</em> by Ibram X. Kendhi
        </p>
        <p className="intro-books">
          <em>Stamped</em> by Ibram X. Kendhi & Jason Reynolds (this is the YA
          version)
        </p>
      </div>

      <h3 className="intro-watch-title">WATCH:</h3>
      <div className="intro-watch-container">
        <div className="intro-watch-col">
          <p className="intro-movie">Just Mercy</p>
          <p className="intro-movie">13th</p>
          <p className="intro-movie">When They See Us</p>
          <p className="intro-movie">The Hate U Give</p>
        </div>
        <div className="intro-watch-col">
          <p className="intro-movie">Selma</p>
          <p className="intro-movie">12 Years a Slave</p>
          <p className="intro-movie">Hidden Figures</p>
          <p className="intro-movie">Women of the Movement</p>
        </div>
      </div>
      <p className="intro-movie">
        The Next Question, Episode 6: Brave Together with Brené Brown (then
        watch all the rest, on YouTube)
      </p>

      <h3 className="intro-echo-title">
        EXPAND YOUR ECHO CHAMBER BY FOLLOWING:
      </h3>
      <div className="intro-echo-container">
        <div className="intro-echo-col">
          <p className="intro-echo-ppl">Latasha Morrison</p>
          <p className="intro-echo-ppl">Austin Channing Brown</p>
          <p className="intro-echo-ppl">Equal Justice Initiative</p>
          <p className="intro-echo-ppl">Rev. Dr. Brenda Salter McNeil</p>
          <p className="intro-echo-ppl">Jamar Tisby</p>
          <p className="intro-echo-ppl">Lisa Sharon Harper</p>
        </div>
        <div className="intro-echo-col">
          <p className="intro-echo-ppl">Ibram X. Kendi</p>
          <p className="intro-echo-ppl">blackliturgies (on Instagram)</p>
          <p className="intro-echo-ppl">Andre Harris</p>
          <p className="intro-echo-ppl">Mike Kelsey</p>
          <p className="intro-echo-ppl">Sean Isaac Palmer</p>
          <p className="intro-echo-ppl">Amena Brown</p>
          <p className="intro-echo-ppl">Shaun King</p>
        </div>
        <div className="intro-echo-col">
          <p className="intro-echo-ppl">Lee Merritt</p>
          <p className="intro-echo-ppl">Kyle J. Howard</p>
          <p className="intro-echo-ppl">
            blackcoffeewithwhitefriends (on Instagram)
          </p>
          <p className="intro-echo-ppl">ohhappydani (on Instagram)</p>
          <p className="intro-echo-ppl">Esau McCauley</p>
        </div>
      </div>
      <p className="intro-disclaim">
        *please know we do not agree with everything that is said or endorsed by
        this list of people, but it is good for us to learn to listen to voices
        who look at and see the world differently than we do
      </p>
      <div style={{ marginBottom: "1cm" }} />
    </>
  );
};

export default IntroResources;
