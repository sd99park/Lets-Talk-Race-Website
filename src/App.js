//import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage/MainPage";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Donate from "./components/Donate";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import HWMain from "./components/Homework/HWMain";
import Week1 from "./components/Homework/HW Pages/Week1";
import Week2 from "./components/Homework/HW Pages/Week2";
import Week3 from "./components/Homework/HW Pages/Week3";
import Week4 from "./components/Homework/HW Pages/Week4";
import Week5 from "./components/Homework/HW Pages/Week5";
import ReactGA from "react-ga";

import IntroResources from "./components/Homework/HW Pages/IntroResources";

function App() {
  const TRACKING_ID = "G-Z5CBY9MXFF"; // YOUR_OWN_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Registration" element={<Register />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Homework" element={<HWMain />} />
          <Route path="/Homework/Intro" element={<IntroResources />} />
          <Route path="/Homework/Week1" element={<Week1 />} />
          <Route path="/Homework/Week2" element={<Week2 />} />
          <Route path="/Homework/Week3" element={<Week3 />} />
          <Route path="/Homework/Week4" element={<Week4 />} />
          <Route path="/Homework/Week5" element={<Week5 />} />
          {/* <Route path="/Donate" element={<Donate />} /> */}
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
