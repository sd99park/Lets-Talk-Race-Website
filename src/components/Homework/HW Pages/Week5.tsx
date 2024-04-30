import backImg from "../../../img/back.png";
import ltrLogo from "../../../img/ltrLogo.png";
import { useNavigate } from "react-router-dom";
import "./HwPage.css";
import React from "react";

const Week5: React.FC = () => {
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
        Congratulations!! You have completed all 5 weeks of the Let's Talk Race
        course. We are so honored that you chose to spend your time with us.
        Below we have curated a list of “continuing education” resources. We
        also encourage you to continue visiting these sites to finish any
        resources you haven't had the chance to do. Please do not hesitate to
        reach out to us if you have any questions.
      </h1>

      {/* SEARCH */}
      <div>
        <h3 className="hw-center">Search on Google or Youtube</h3>
        <p className="hw-obj-title">Native American Boarding Schools</p>
        <p className="hw-obj-title">Japanese Internment Camps</p>
        <p className="hw-obj-title">Immigration Perspectives</p>
      </div>

      {/* LISTEN */}
      <div>
        <h3 className="hw-center">Listen</h3>
        <p className="hw-obj-title">
          Podcast: Here's Where It Gets Interesting <br />
          Host: Sharon McMahon <br />
          Series: Resilience (Season 1) (a deep dive into Japanese Incarceration
          of the 1940s)
        </p>

        <p className="hw-obj-title">
          Podcast: Here's Where It Gets Interesting
          <br />
          Host: Sharon McMahon
          <br />
          Series: Momentum: The Ripples Made by Ordinary People (episode
          146-162) (interesting look at the Civil Rights Movement of the 50s &
          60s)
        </p>

        <p className="hw-obj-title">
          Podcast : The Reclaim (from Asian American Christian Collaborative)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://open.spotify.com/show/415I7RXxWwki6efu8IePuJ"
              );
            }}
            href=""
          >
            https://open.spotify.com/show/415I7RXxWwki6efu8IePuJ
          </a>
        </p>
      </div>

      {/* ONLINE COURSE */}
      <div>
        <h3 className="hw-center">Online Course</h3>
        <p className="hw-obj-title">
          (11 lectures, $59.99 - highly recommend) <br /> Ethnicity, Justice and
          the People of God: An Exploration into the Biblical Theology of
          Justice Prof. N. T. Wright and Prof. Esau McCaulley
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.ntwrightonline.org/portfolio-items/ethnicity-god/?portfolioCats=50%2C52%2C49%2C51"
              );
            }}
            href=""
          >
            https://www.ntwrightonline.org/portfolio-items/ethnicity-god/?portfolioCats=50%2C52%2C49%2C51
          </a>
        </p>
      </div>

      {/* READ */}
      <div>
        <h3 className="hw-center">READ:</h3>
        <p className="hw-obj-title">
          How US systemic racism plays out in Black lives:
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://graphics.reuters.com/GLOBAL-RACE/USA/nmopajawjva/#maternal-health"
              );
            }}
            href=""
          >
            https://graphics.reuters.com/GLOBAL-RACE/USA/nmopajawjva/#maternal-health
          </a>
        </p>

        <p className="hw-obj-title">
          <em>An Indigenous Peoples' History of the United States</em> by
          Roxanne Dunbar-Oritz
        </p>

        <p className="hw-obj-title">
          <em>The Making of Asian America: A History</em> by Erika Lee
        </p>

        <p className="hw-obj-title">
          <em>An African American and Latinx History of the United States</em>
          by Paul Ortiz
        </p>

        <p className="hw-obj-title">
          <em>The Myth of the Model Minority: Asian Americans Facing Racism</em>
          by Rosalind S. Chou
        </p>

        <p className="hw-obj-title">
          <em>
            After the Last Border: Two Families and the Story of Refuge in
            America
          </em>
          by Jessica Goudeau
        </p>

        <p className="hw-obj-title">
          Reclaim Magazine (from Asian American Christian Collaborative)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.asianamericanchristiancollaborative.com/magazine"
              );
            }}
            href=""
          >
            https://www.asianamericanchristiancollaborative.com/magazine
          </a>
        </p>
      </div>

      {/* WATCH */}
      <div>
        <h3 className="hw-center">Watch</h3>
        <p className="hw-obj-title">
          <em>The African Americans; Many Rivers to Cross</em> on Amazon Prime
        </p>
        <p className="hw-obj-title">
          <em>Good Trouble</em> on Amazon (documentary about John Lewis)
        </p>
        <p className="hw-obj-title">
          <em>Bookmarks</em> on Netflix (a children's series of POC reading
          books written by POC, longest episode is 11 minutes)
        </p>

        <p className="hw-obj-title">
          Videos Produced by Asian American Christian Collaborative
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/@aachristcollab/videos");
            }}
            href=""
          >
            https://www.youtube.com/@aachristcollab/videos
          </a>
        </p>
      </div>

      <div style={{ marginBottom: "1cm" }} />
    </>
  );
};

export default Week5;
