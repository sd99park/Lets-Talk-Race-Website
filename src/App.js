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
import IntroResources from "./components/Homework/HW Pages/IntroResources";

function App() {
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
          {/* <Route path="/Donate" element={<Donate />} /> */}
          <Route path="*" exact={true} element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
