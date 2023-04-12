import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import MobileSection from "./components/MobileSection";
import Contact from "./components/pages/Contact";
import Hair from "./components/pages/Hair";
import Beard from "./components/pages/Beard";
import Photo from "./components/pages/Photo";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MobileSection />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/frizerstvo" element={<Hair />} />
        <Route path="/brivstvo" element={<Beard />} />
        <Route path="/fotografija" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
