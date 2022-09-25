import { useNavigate } from "react-router-dom";
import rainbow from "../img/Rainbow.png";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="head-container">
        <img src={rainbow} alt="Rainbow" style={{ height: "100px" }} />
        <h2 onClick={() => navigate("/")} className="links">
          To Main
        </h2>
        <h2 onClick={() => navigate("/About")} className="links">
          To About
        </h2>
      </div>
    </>
  );
};

export default Header;
