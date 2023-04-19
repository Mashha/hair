import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import MobileSection from "./components/MobileSection";
import Contact from "./components/pages/Contact";
import Hair from "./components/pages/Hair";
import Beard from "./components/pages/Beard";
import Photo from "./components/pages/Photo";
import Footer from "./components/Footer";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import ScrollWithButton from "./components/ScrollWithButton";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <ScrollWithButton />
      <MobileSection />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/frizerstvo" element={<Hair />} />
          <Route path="/brivstvo" element={<Beard />} />
          <Route path="/fotografija" element={<Photo />} />
        </Routes>
      <Footer />
      <ScrollToTop />
    </HashRouter>
  );
}

export default App;
