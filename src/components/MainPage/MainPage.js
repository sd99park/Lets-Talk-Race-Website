import OpeningPage from "./OpeningPage";
import MainCards from "./MainCards";
import ListSection from "./ListSection";

import { LoremIpsum } from "react-lorem-ipsum";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="main-page-container">
        <OpeningPage />
        <MainCards />
        <ListSection />
      </div>
    </>
  );
};

export default MainPage;
