import "./Story.css";
import actlovewalk from "../../img/actlovewalk.png";
import worthy from "../../img/worthy.png";

const Story = () => {
  return (
    <>
      <div className="story-container">
        <h1 className="story-header">Our Story</h1>
        <div className="story-one">
          <div className="story-one-txt">
            <p className="story-p">
              The first iteration of Let's Talk Race: a Beginner's Guide to
              Conversations About Race was a four-week class created by Ron
              Holland, retired minister at The Hills church in Ft. Worth, Texas,
              in the summer of 2018. “Let's Get Ready to Talk About Race” was
              later promoted by the church following their pastor's six-week
              sermon called “Why Talk About Race?” in January of 2019. It was
              intended to prepare White people to be able to have meaningful
              conversations about race in a multiracial/multiethnic environment.
              Ron recognized that there was a lot of history and a lot of
              vocabulary that White people just didn't know.
            </p>
            <p className="story-p">
              In the fall of 2019, Shelley Park, Ron's daughter, felt an urgent
              call from the Lord to “do something.” She had seen many BIPOC in
              the racial reconciliation space ask White people to teach other
              White people. She remembered her dad's course and thought, “This
              is something I can do.” Shelley took the presentations that Ron
              had created and “made them her own.” In February 2020 she invited
              a few friends to be her guinea pigs. These four friends gathered
              around her dining table each week and walked through the classwork
              together. A second group was scheduled to start in March 2020 and
              then Covid hit.
            </p>
          </div>
          <div className="story-one-img">
            <img src={actlovewalk} className="story-first" />
            <p>
              Used with Permission.{" "}
              <a href="ohhappydany.com">ohhappydani.com</a>
            </p>
          </div>
        </div>

        <div className="story-two">
          <div className="story-two-img">
            <img src={worthy} className="story-sec" />
            <p>
              Used with Permission.{" "}
              <a href="ohhappydany.com">ohhappydani.com</a>
            </p>
          </div>
          <div className="story-two-txt">
            <p className="story-p">
              In late April, Shelley wondered if the class might be taught on
              Zoom, so she reached back out to the second group of friends and
              they all agreed to be another set of guinea pigs. They met for
              four weeks on Zoom working through the recently renamed “Let's
              Talk Race” class. It was during this class that George Floyd was
              murdered in Minneapolis.
            </p>
            <p className="story-p">
              The summer of 2020 was a moment in history that will be studied
              for years to come. The initial reaction from White people was one
              of a genuine desire to learn and understand. Let's Talk Race was
              the perfect answer for many people. After adding a fifth week to
              help accommodate more discussion, Shelley, sometimes joined by her
              husband, David Park, took more than 300 people through the class
              over the next 18 months. The class was never advertised, only
              spread via word of mouth, and participants came from all over the
              United States. Ron Holland continued to host classes at his church
              and also took several church leadership groups through the
              material.
            </p>
            <p className="story-p">
              In the fall of 2022, Shelley & David formed LTR Ministries, Inc.,
              a 501(c)3 not-for-profit organization aimed at helping White
              people and predominantly white churches begin the journey of
              racial reconciliation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
