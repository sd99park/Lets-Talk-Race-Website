import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import rainbow from "../img/Rainbow.png";

const Header = () => {
  const navigate = useNavigate();
  const [windowDimension, setWindowDimension] = useState(null);

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
    document.querySelectorAll(".dropdown").forEach(function (dropdown) {
      if (!dropdown.contains(e.target)) {
        dropdown.open = false;
      }
    });
  });

  const isNotMobile = windowDimension > 815;

  const openDonate = () => {
    window.open(
      "https://crm.bloomerang.co/HostedDonation?ApiKey=pub_85ea1511-7ae8-11ed-9ee6-0606629de7e9&WidgetId=45056"
    );
  };

  const navToInAName = () => {
    navigate("/About?scrollTo=TopOfPage");
  };

  // TODO: These need to scroll to specific divs
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
        <div class="sticky top-0 z-40">
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
                  <details class="dropdown">
                    <summary>About</summary>
                    <ul className="p-2 bg-base-100 bg-opacity-50 rounded-t-none w-64">
                      <li>
                        <a onClick={() => navToInAName()}>What's In a Name?</a>
                      </li>
                      <li>
                        <a onClick={() => navToStory()}>Story</a>
                      </li>
                      <li>
                        <a onClick={() => navToLeadership()}>Our Leadership</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a onClick={() => navToRegistration()}>Class Registration</a>
                </li>
                <li>
                  <a onClick={() => NavToContact()}>Contact Us</a>
                </li>
                <li>
                  <a
                    className="bg-secondary border-black hover:bg-primary"
                    onClick={() => openDonate()}
                  >
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div class="sticky top-0 z-40">
          <div class="navbar bg-base-100 bg-opacity-50">
            <div class="navbar-start">
              <div class="dropdown">
                <div
                  tabindex="0"
                  role="button"
                  class="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabindex="0"
                  class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <details>
                      <summary>About</summary>
                      <ul className="p-2 bg-base-100 bg-opacity-50 rounded-t-none">
                        <li>
                          <a onClick={() => navToInAName()}>
                            What's In a Name?
                          </a>
                        </li>
                        <li>
                          <a onClick={() => navToStory()}>Story</a>
                        </li>
                        <li>
                          <a onClick={() => navToLeadership()}>
                            Our Leadership
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a onClick={() => navToRegistration()}>
                      Class Registration
                    </a>
                  </li>
                  <li>
                    <a onClick={() => NavToContact()}>Contact Us</a>
                  </li>
                  <li>
                    <a className="border-2" onClick={() => openDonate()}>
                      Donate
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="navbar-end">
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
