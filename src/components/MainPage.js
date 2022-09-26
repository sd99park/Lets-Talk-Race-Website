import handShake from "../img/shakeHands.jpg";
import { LoremIpsum } from "react-lorem-ipsum";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="Container32">
        <img src={handShake} alt="HandShake" style={{ width: "100%" }} />
        <div className="textbox1">
          <h3 style={{ margin: 0 }}>Some sort of title</h3>
          <LoremIpsum />
        </div>

        <h1>Main page</h1>
        <h1>Main page</h1>
        <h1>Main page</h1>
        <h1>Main page</h1>
        <h1>Main page</h1>
        <h1>Main page</h1>
      </div>
    </>
  );
};

export default MainPage;
