import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import rainbow from "../img/Rainbow.png";
import Hamburger from "../img/Hamburger.png";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [windowDimension, setWindowDimension] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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

  const isNotMobile = windowDimension > 768;

  return (
    <>
      {isNotMobile ? (
        <>
          <div className="head-container">
            <img
              src={rainbow}
              onClick={() => navigate("/")}
              alt="Rainbow"
              style={{ height: "100px" }}
            />

            <h2 onClick={() => navigate("/About")} className="links">
              About
            </h2>
            <h2 onClick={() => navigate("/Registration")} className="links">
              Class Registration
            </h2>
            <h2 onClick={() => navigate("/Contact")} className="links">
              Contact Us
            </h2>
            <h2 onClick={() => navigate("/Donate")} className="links">
              Donate
            </h2>
          </div>
        </>
      ) : (
        <>
          <div className="head-container-mobile">
            <img
              src={rainbow}
              onClick={() => navigate("/")}
              alt="Rainbow"
              style={{ height: "100px" }}
            />
            <img
              src={Hamburger}
              onClick={() => {
                if (menuIsOpen) {
                  setMenuIsOpen(false);
                } else {
                  setMenuIsOpen(true);
                }
              }}
              alt="Rainbow"
              className="hamburger"
            />
            {menuIsOpen && (
              <div>
                <h2
                  onClick={() => {
                    setMenuIsOpen(false);
                    navigate("/About");
                  }}
                  className="mobile-links"
                >
                  About
                </h2>
                <h2
                  onClick={() => {
                    setMenuIsOpen(false);
                    navigate("/Registration");
                  }}
                  className="mobile-links"
                >
                  Class Registration
                </h2>
                <h2
                  onClick={() => {
                    setMenuIsOpen(false);
                    navigate("/Contact");
                  }}
                  className="mobile-links"
                >
                  Contact Us
                </h2>
                <h2
                  onClick={() => {
                    setMenuIsOpen(false);
                    navigate("/Donate");
                  }}
                  className="mobile-links"
                >
                  Donate
                </h2>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
