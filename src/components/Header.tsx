import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import rainbow from "../img/Rainbow.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [windowDimension, setWindowDimension] = useState<number | null>(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  window.addEventListener("click", function (e) {
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      if (!dropdown.contains(e.target as Node)) {
        (dropdown as any).open = false;
      }
    });
  });

  const isNotMobile: boolean = windowDimension ? windowDimension > 815 : false;

  const openDonate = () => {
    window.open(
      "https://crm.bloomerang.co/HostedDonation?ApiKey=pub_85ea1511-7ae8-11ed-9ee6-0606629de7e9&WidgetId=45056"
    );
  };

  const navToInAName = () => {
    navigate("/About?scrollTo=TopOfPage");
  };

  const navToStory = () => {
    navigate("/About?scrollTo=Story");
  };

  const navToLeadership = () => {
    navigate("/About?scrollTo=ProfilePage");
  };

  const navToRegistration = () => {
    navigate("/Registration");
    window.scrollTo(0, 0);
  };

  const NavToContact = () => {
    navigate("/Contact");
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isNotMobile ? (
        <div className="sticky top-0 z-40">
          <div className="navbar bg-base-100 bg-opacity-50">
            <div className="flex-1">
              <img
                src={rainbow}
                onClick={() => {
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
                alt="Rainbow"
                className="h-28"
              />
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 text-2xl">
                <li>
                  <details className="dropdown">
                    <summary>About</summary>
                    <ul className="p-2 bg-base-100 bg-opacity-50 rounded-t-none w-64">
                      <li>
                        <a onClick={navToInAName}>What's In a Name?</a>
                      </li>
                      <li>
                        <a onClick={navToStory}>Story</a>
                      </li>
                      <li>
                        <a onClick={navToLeadership}>Our Leadership</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a onClick={navToRegistration}>Class Registration</a>
                </li>
                <li>
                  <a onClick={NavToContact}>Contact Us</a>
                </li>
                <li>
                  <a
                    className="bg-secondary border-black hover:bg-primary"
                    onClick={openDonate}
                  >
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="sticky top-0 z-40">
          <div className="navbar bg-base-100 bg-opacity-50">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <details>
                      <summary>About</summary>
                      <ul className="p-2 bg-base-100 bg-opacity-50 rounded-t-none">
                        <li>
                          <a onClick={navToInAName}>What's In a Name?</a>
                        </li>
                        <li>
                          <a onClick={navToStory}>Story</a>
                        </li>
                        <li>
                          <a onClick={navToLeadership}>Our Leadership</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a onClick={navToRegistration}>Class Registration</a>
                  </li>
                  <li>
                    <a onClick={NavToContact}>Contact Us</a>
                  </li>
                  <li>
                    <a className="border-2" onClick={openDonate}>
                      Donate
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-end">
              <img
                src={rainbow}
                onClick={() => {
                  navigate("/");
                  window.scrollTo(0, 0);
                }}
                alt="Rainbow"
                className="head-img"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
