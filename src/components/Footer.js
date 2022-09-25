import { useNavigate } from "react-router-dom";
import ltrLogo from "../img/ltrLogo.png";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="footer-container">
        <img src={ltrLogo} alt="ltrLogo" />
        <p onClick={() => navigate("/")}>Main</p>
        <p onClick={() => navigate("/About")}>About Us</p>
        <p>Email: ~~~~~~~</p>
      </div>
    </>
  );
};

export default Footer;
