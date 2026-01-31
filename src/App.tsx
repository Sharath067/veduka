import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoveMarquee from "./components/LoveMarquee";
import WeddingSection from "./components/WeddingSection";
import AboutUs from "./pages/aboutus/AboutUs";
import MagicalDay from "./pages/aboutus/MagicalDay";
import HeartfeltWeddings from "./pages/aboutus/HeartfeltWeddings";
import StorySlices from "./pages/aboutus/StorySlices";
import ScrollToTop from "./components/ScrollToTop";
import ElegantSection from "./pages/aboutus/ElegantSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <LoveMarquee text="Spreading Love and Happiness to Families with Veduka Management" />
              <WeddingSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <AboutUs />
              <MagicalDay />
              <HeartfeltWeddings />
              <StorySlices />
              <ElegantSection />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
