import { useNavigate } from "react-router-dom";
import rainbow from "../img/Rainbow.png";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
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
  );
};

export default Header;
