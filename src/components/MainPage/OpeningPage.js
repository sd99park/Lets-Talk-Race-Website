import peacePicture from "../../img/peacePicture.png";
import "./OpeningPage.css";

const OpeningPage = () => {
  return (
    <div className="image-container">
      <img
        src={peacePicture}
        alt="peacePicture"
        style={{ width: "55%", border: "solid" }}
      />
    </div>
  );
};

export default OpeningPage;
