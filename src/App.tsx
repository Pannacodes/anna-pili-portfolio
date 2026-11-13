import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/projects/Portfolio";
import MyCircle from "./pages/projects/MyCircle";
import PlacePulse from "./pages/projects/PlacePulse";
import DolphinDash from "./pages/projects/DolphinDash";
import TreasureHunt from "./pages/projects/TreasureHunt";
import PersonalWebsite from "./pages/projects/PersonalWebsite";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-page text-ink font-sans">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/portfolio" element={<Portfolio />} />
          <Route path="/projects/mycircle" element={<MyCircle />} />
          <Route path="/projects/placepulse" element={<PlacePulse />} />
          <Route path="/projects/dolphin-dash" element={<DolphinDash />} />
          <Route path="/projects/treasure-hunt" element={<TreasureHunt />} />
          <Route
            path="/projects/personal-website"
            element={<PersonalWebsite />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
