import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Forecast from "./Pages/Forecast";
import Saved from "./Pages/Saved";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
