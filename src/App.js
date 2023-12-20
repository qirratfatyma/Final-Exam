import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/HeroSection" element={<HeroSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
