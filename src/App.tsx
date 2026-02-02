import { Routes, Route } from "react-router-dom";
import Navbar from "./components/main/Navbar";
import Hero from "./components/main/Hero";
import LoveMarquee from "./components/main/LoveMarquee";
import WeddingSection from "./components/main/WeddingSection";
import AboutUs from "./pages/aboutus/AboutUs";
import MagicalDay from "./pages/aboutus/MagicalDay";
import HeartfeltWeddings from "./pages/aboutus/HeartfeltWeddings";
import StorySlices from "./pages/aboutus/StorySlices";
import ScrollToTop from "./components/main/ScrollToTop";
import ElegantSection from "./pages/aboutus/ElegantSection";
import Footer from "./components/footer/Footer";
import WorkCarousel from "./components/main/WorkCarousel";
import WeddingStories from "./components/main/WeddingStories";
import ProcessBanner from "./components/ourProcess/ProcessBanner";
import OurProcess from "./components/ourProcess/OurProcess";
import OurServiceBanner from "./components/our-service/OurServiceBanner";
import TellYourStory from "./components/our-service/TellYourStory";
import WhatWeDo from "./components/our-service/WhatWeDo";

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
              <WorkCarousel />
              <WeddingStories />
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
        <Route
          path="/our-process"
          element={
            <>
              <ProcessBanner />
              <OurProcess />
              <Footer />
            </>
          }
        />
        <Route
          path="/our-service"
          element={
            <>
              <OurServiceBanner />
              <WhatWeDo />
              <TellYourStory />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
