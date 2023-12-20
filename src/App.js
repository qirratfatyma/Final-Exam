import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Future from "./components/future";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/HeroSection" element={<HeroSection />} />
        <Route path="/future" element={<Future />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
