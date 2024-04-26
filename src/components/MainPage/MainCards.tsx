import EngageChurchPic from "../../img/EngageChurchPic.png";
import ltrLogo from "../../img/ltrLogo.png";
import stratPartPic from "../../img/StratPartPic.png";
import ThreadedLogo from "../../img/ThreadedLogo.png";
import EmbracingUnityLogo from "../../img/EmbracingUnityLogo.png";
import CCCLogo from "../../img/CCCLogo.png";
import * as constants from "../../constants/MainPageConstants";
import { useNavigate } from "react-router-dom";
import React from "react";

const MainCards: React.FC = () => {
  const navigate = useNavigate();

  const navToRegistration = () => {
    navigate("/Registration");
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-montserrat flex justify-center items-center lg:flex-col ">
      <div className="card w-96 bg-gray-50 shadow-xl m-3">
        <figure className="px-10 pt-10 mt-16 mb-8">
          <img src={ltrLogo} alt="LTR Logo" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{constants.primaryTitle}</h2>
          <p>{constants.primaryText}</p>
          <div className="card-actions pt-14">
            <button
              className="btn btn-primary"
              onClick={() => navToRegistration()}
            >
              Sign Up!
            </button>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-gray-50 shadow-xl m-3">
        <figure className="px-10 pt-10">
          <img src={EngageChurchPic} alt="LTR Logo" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{constants.engageTitle}</h2>
          <p>{constants.engageText}</p>
          <div className="card-actions pt-5">
            <button
              className="btn btn-primary"
              onClick={() =>
                (
                  document.getElementById("engageModal") as HTMLDialogElement
                ).showModal()
              }
            >
              Learn More
            </button>
            <dialog id="engageModal" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <figure className="px-10 pt-10 w-1/4 m-auto lg:w-full">
                  <img
                    src={EngageChurchPic}
                    alt="LTR Logo"
                    className="rounded-xl"
                  />
                </figure>
                <div className="text-left py-5">
                  <p>Are you part of a predominantly white church?</p>
                  <p>
                    Is the community around your building diverse, while your
                    congregation is not?
                  </p>
                  <p>Are you or your church asking “what can we do”?</p>
                </div>
                <p className="text-left py-2">
                  LTR Ministries would love to come alongside you or your
                  leadership team to discuss how we can help create a strategy
                  to begin the journey of reconciliation. We believe that racial
                  reconciliation is more than just diversity (“color in the
                  pews”) and we are committed to helping your church become a
                  place where relationships can flourish among all people.
                </p>
                <p className="text-left py-2">
                  Jesus prayed, “Your kingdom come, your will be done on earth
                  as it is in heaven.” If we want to know what the church should
                  look like on earth, we need to see what it looks like in
                  heaven. John tells us in Revelation 7:9, “After this I looked,
                  and there before me was a great multitude that no one could
                  count, from every nation, tribe, people and language, standing
                  before the throne and before the Lamb. They were wearing white
                  robes and were holding palm branches in their hands.”
                </p>
                <p className="text-left py-2">
                  Let's grab coffee and dream. We have some very practical, easy
                  to engage, first steps we'd love to tell you about.{" "}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>

      <div className="card w-96 bg-gray-50 shadow-xl m-3">
        <figure className="px-10 pt-10">
          <img src={stratPartPic} alt="Partners Pic" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{constants.partnerTitle}</h2>
          <p>{constants.partnerText}</p>
          <div className="card-actions pt-5">
            <button
              className="btn btn-primary"
              onClick={() =>
                (
                  document.getElementById("partnerModal") as HTMLDialogElement
                ).showModal()
              }
            >
              Learn More
            </button>
            <dialog id="partnerModal" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="text-3xl">Our Partners</h3>

                <div className="flex lg:flex-col">
                  <div>
                    <figure className="w-80 m-auto my-20">
                      <img
                        src={ThreadedLogo}
                        alt="Threaded Logo"
                        className="rounded-xl"
                      />
                    </figure>
                    <p className="mt-5 p-2">
                      Threaded is a biblical racial reconciliation organization
                      that seeks to build relationships, reconciliation, and
                      cross-cultural collaborative actions between the diverse
                      Body of Christ and their local communities to bring
                      lasting community change.
                    </p>
                    <a
                      onClick={() => {
                        window.open("www.wearethreaded.org");
                      }}
                      className="text-sm link"
                      href=""
                    >
                      www.wearethreaded.org
                    </a>
                  </div>
                  <div>
                    <figure className="w-80 m-auto pt-5">
                      <img
                        src={CCCLogo}
                        alt="CCC Logo"
                        className="rounded-xl"
                      />
                    </figure>
                    <p className="p-2">
                      Khanh Nguyễn founded C3: Cultural Competency Consulting in
                      order to decolonize people from the shackles of white
                      supremacy and Empire. She speaks and offers trainings on
                      cultural competency, anti-racism, immigrant-refugee, and
                      Asian American advocacy all through a Biblical lens . She
                      integrates her life experiences as a Vietnamese refugee,
                      missionary, educator, leader in multi-ethnic churches and
                      dedicated follower of "brown" Jesus.
                    </p>
                    <a
                      onClick={() => {
                        window.open("https://c3consults.com/");
                      }}
                      className="text-sm link"
                      href=""
                    >
                      https://c3consults.com/
                    </a>
                  </div>
                  <div>
                    <figure className="w-80 m-auto">
                      <img
                        src={EmbracingUnityLogo}
                        alt="Embracing Unity Logo"
                        className="rounded-xl"
                      />
                    </figure>
                    <p className="p-2">
                      “Embracing Unity” is a non-profit organization dedicated
                      to building genuine multiethnic unity in the church. It is
                      our belief that if we achieve multiethnic unity within the
                      church, our communities will be so amazed that they will
                      point to us and say, “that must be Jesus at work” and it
                      will ultimately transform our communities as well.
                    </p>
                    <a
                      onClick={() => {
                        window.open("www.embracingracialunity.org");
                      }}
                      className="text-sm link"
                      href=""
                    >
                      www.embracingracialunity.org
                    </a>
                  </div>
                </div>

                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
