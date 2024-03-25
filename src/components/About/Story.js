import actlovewalk from "../../img/actlovewalk.png";
import worthy from "../../img/worthy.png";
import articleImage from "../../img/ArticleImage.jpeg";

const Story = () => {
  return (
    <>
      <div className="font-montserrat mx-32 md:mx-10">
        <h1 className="text-center text-5xl mb-8">Our Story</h1>
        <div className="flex lg:block lg:text-center">
          <div className="mb-20 w-3/5 lg:w-full">
            <p className="p-5 text-base">
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
            <p className="p-5 text-base">
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
          <div className="w-96 h-96 mx-auto">
            <img src={actlovewalk} className="object-contain" />
            <p className="text-xs text-center">
              Used with Permission.
              <a
                onClick={() => {
                  window.open("https://ohhappydani.com");
                }}
                className="link pl-2 lg:pl-0"
                href=""
              >
                ohhappydani.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex lg:block lg:text-center">
          <div className="w-96 h-96 mx-auto">
            <img src={worthy} className="object-contain" />
            <p className="text-xs text-center">
              Used with Permission.
              <a
                onClick={() => {
                  window.open("https://ohhappydani.com");
                }}
                className="link pr-2 lg:pr-0"
                href=""
              >
                ohhappydani.com
              </a>
            </p>
          </div>
          <div className="mb-20 w-3/5 lg:w-full">
            <p className="p-5 text-base">
              In late April, Shelley wondered if the class might be taught on
              Zoom, so she reached back out to the second group of friends and
              they all agreed to be another set of guinea pigs. They met for
              four weeks on Zoom working through the recently renamed “Let's
              Talk Race” class. It was during this class that George Floyd was
              murdered in Minneapolis.
            </p>
            <p className="p-5 text-base">
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
            <p className="p-5 text-base">
              In the fall of 2022, Shelley & David formed LTR Ministries, Inc.,
              a 501(c)3 not-for-profit organization aimed at helping White
              people and predominantly white churches begin the journey of
              racial reconciliation.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={articleImage} className="w-2/5 md:w-3/5" />
        </div>
        <p className="text-center">
          <a
            onClick={() => {
              window.open(
                "https://religionnews.com/2023/07/19/white-texas-couple-leads-lets-talk-race-class-to-educate-churchgoers/"
              );
            }}
            className="text-sm link"
            href=""
          >
            https://religionnews.com/2023/07/19/white-texas-couple-leads-lets-talk-race-class-to-educate-churchgoers/
          </a>
        </p>
      </div>
    </>
  );
};

export default Story;
