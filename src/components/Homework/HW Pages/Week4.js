import backImg from "../../../img/back.png";
import ltrLogo from "../../../img/ltrLogo.png";
import { useNavigate } from "react-router-dom";
import week4Prompt from "../../../img/week4Prompt.png";
import "./HwPage.css";

const Week4 = () => {
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
        Here is the homework to be completed AFTER Week 4 of Let's Talk Race.
        Please be prepared to discuss these in your class next week.
      </h1>
      <h2 className="hw-sec-title">REQUIRED HOMEWORK:</h2>
      <div className="hw-ltr-logo">
        <img src={week4Prompt} style={{ maxWidth: "70%" }} />
      </div>
      <div className="hw-vid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AGUwcs9qJXY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="true"
        ></iframe>
      </div>
      <p className="hw-video-desc">
        Holy Post - Race in America by Phil Vischer (creator of VeggieTales)
      </p>
      <div className="hw-vid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BLKK-O1ZoN4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="true"
        ></iframe>
      </div>
      <p className="hw-video-desc">
        Dr. Darrell Bock from Dallas Theological Seminary discusses CRT
      </p>

      <h2 className="hw-sec-title">CHOOSE YOUR OWN ADVENTURE</h2>
      <p className="hw-sec-descr">(choose any of the following)</p>

      {/* READ */}
      <div>
        <h3 className="hw-center">READ:</h3>
        <p className="hw-obj-title">
          New History (things you may not have learned in school)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.theringer.com/2018/6/28/17511818/black-wall-street-oklahoma-greenwood-destruction-tulsa"
              );
            }}
            href=""
          >
            https://www.theringer.com/2018/6/28/17511818/black-wall-street-oklahoma-greenwood-destruction-tulsa
          </a>
        </p>

        <p className="hw-obj-title">Black Wall Street - a history lesson </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.forbes.com/sites/antoinegara/2020/06/18/the-bezos-of-black-wall-street-tulsa-race-riots-1921/#3fe5bf86f321"
              );
            }}
            href=""
          >
            https://www.forbes.com/sites/antoinegara/2020/06/18/the-bezos-of-black-wall-street-tulsa-race-riots-1921/#3fe5bf86f321{" "}
          </a>
        </p>

        <p className="hw-obj-title">Hair Discrimination Resources </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.naacpldf.org/wp-content/uploads/LDF-Primer-on-Hair-Discrimination-Resources-FINAL.pdf"
              );
            }}
            href=""
          >
            https://www.naacpldf.org/wp-content/uploads/LDF-Primer-on-Hair-Discrimination-Resources-FINAL.pdf{" "}
          </a>
        </p>

        <p className="hw-obj-title">The Crown Act </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.thecrownact.com/");
            }}
            href=""
          >
            https://www.thecrownact.com/{" "}
          </a>
        </p>

        <p className="hw-obj-title">
          Good article on how to think about whiteness
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://medium.com/@aquietstrength/what-i-wish-my-white-friends-knew-b0d7fb056113"
              );
            }}
            href=""
          >
            https://medium.com/@aquietstrength/what-i-wish-my-white-friends-knew-b0d7fb056113{" "}
          </a>
        </p>

        <p className="hw-obj-title">About Race in Hollywood </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://amp.theguardian.com/film/2016/jan/18/hollywoods-race-problem-film-industry-actors-of-colour"
              );
            }}
            href=""
          >
            https://amp.theguardian.com/film/2016/jan/18/hollywoods-race-problem-film-industry-actors-of-colour{" "}
          </a>
        </p>

        <p className="hw-obj-title">
          Article about BLM and Marxism from Christianity Today{" "}
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://churchleaders.com/voices/406005-social-justice-critical-race-theory-marxism-and-biblical-ethics.html"
              );
            }}
            href=""
          >
            https://churchleaders.com/voices/406005-social-justice-critical-race-theory-marxism-and-biblical-ethics.html{" "}
          </a>
        </p>

        <p className="hw-obj-title">
          Another article about Critical Race Theory{" "}
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://medium.com/@rasoolberry/critical-g-race-theory-the-promise-perils-of-crt-c5de933d55a1"
              );
            }}
            href=""
          >
            https://medium.com/@rasoolberry/critical-g-race-theory-the-promise-perils-of-crt-c5de933d55a1{" "}
          </a>
        </p>

        <p className="hw-obj-title">
          A Retired White Cop's Hopeful, Practical, Unique, Incomplete
          Perspective on Race and Law in the United States. (3 parts)
        </p>
        <p className="hw-obj-descr">
          Part 1:
          <a
            onClick={() => {
              window.open("http://www.beecivilbalm.com/open-letters.html");
            }}
            href=""
          >
            http://www.beecivilbalm.com/open-letters.html
          </a>
        </p>
        <p className="hw-obj-descr">
          Part 2:
          <a
            onClick={() => {
              window.open("http://www.beecivilbalm.com/open-letter-2.html");
            }}
            href=""
          >
            http://www.beecivilbalm.com/open-letter-2.html{" "}
          </a>
        </p>
        <p className="hw-obj-descr">
          Part 3:
          <a
            onClick={() => {
              window.open("http://www.beecivilbalm.com/open-letter-3.html");
            }}
            href=""
          >
            http://www.beecivilbalm.com/open-letter-3.html{" "}
          </a>
        </p>

        <p className="hw-obj-title">The Atlantic Slave Trade </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=3NXC4Q_4JVg&t=335s");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=3NXC4Q_4JVg&t=335s{" "}
          </a>
        </p>
      </div>

      {/* LISTEN */}
      <div>
        <h3 className="hw-center">LISTEN:</h3>
        <p className="hw-obj-title">The Other “Other” (51 minutes)</p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://itunes.apple.com/us/podcast/united-we-pray/id1289500755?mt=2&i=1000412108958"
              );
            }}
            href=""
          >
            https://itunes.apple.com/us/podcast/united-we-pray/id1289500755?mt=2&i=1000412108958{" "}
          </a>
        </p>
      </div>

      {/* WATCH */}
      <div>
        <h3 className="hw-center">WATCH:</h3>

        <p className="hw-obj-title">
          The Holy Post - Race in America Part 2 (26:05 min)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=u-yun74BJEc");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=u-yun74BJEc
          </a>
        </p>

        <p className="hw-obj-title">
          Recognizing past wrongs and apologizing for them is important (4
          minutes)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://youtu.be/cZTioTkHcB0");
            }}
            href=""
          >
            https://youtu.be/cZTioTkHcB0{" "}
          </a>
        </p>
        <p className="hw-obj-title">
          Former NBA star John Amaechi discusses non-racist vs anti-racist (3
          minutes)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=ZXB4TD_AdS8");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=ZXB4TD_AdS8{" "}
          </a>
        </p>
        <p className="hw-obj-title">
          Dallas Theological Seminary Chapel: Unity and Diversity (featuring Dr.
          Darrell Bock & Dr. Tony Evans)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://voice.dts.edu/chapel/cultural-engagement-chapel-unity-and-diversity/"
              );
            }}
            href=""
          >
            https://voice.dts.edu/chapel/cultural-engagement-chapel-unity-and-diversity/{" "}
          </a>
        </p>
        <p className="hw-obj-title">
          The Color of Compromise Video Study (examining the role of the church)
          (12 episodes about 15 minutes each. Some times of the year, these are
          <br />
          free. Right now you have to purchase them from Amazon). These would be
          a great companion to the book in a bookclub environment.
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.amazon.com/gp/video/detail/B083ZMNSB2/ref=share_ios_season"
              );
            }}
            href=""
          >
            https://www.amazon.com/gp/video/detail/B083ZMNSB2/ref=share_ios_season{" "}
          </a>
        </p>
        <p className="hw-obj-title">
          Hair Love - Oscar Winning Short Film 2020
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=kNw8V_Fkw28");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=kNw8V_Fkw28
          </a>
        </p>
        <p className="hw-obj-title">
          The Middle Passage (explore this site, but especially look at
          time-lapse video)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open(
                "https://www.slavevoyages.org/voyage/database#timelapse"
              );
            }}
            href=""
          >
            https://www.slavevoyages.org/voyage/database#timelapse{" "}
          </a>
        </p>

        <p className="hw-obj-title">
          Cultural Appropriation vs Appreciation (3:46 min)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=vfAp_G735r0");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=vfAp_G735r0{" "}
          </a>
        </p>

        <p className="hw-obj-title">
          Racism Experienced by Other Ethnic Groups in America (12:44 min)
        </p>
        <p className="hw-obj-descr">
          <a
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=-v8I0vlRtFY");
            }}
            href=""
          >
            https://www.youtube.com/watch?v=-v8I0vlRtFY
          </a>
        </p>
      </div>
      <div style={{ paddingTop: "2cm" }} />
    </>
  );
};

export default Week4;
