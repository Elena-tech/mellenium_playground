import React from "react";
import Navbar from "./components/molecules/Navbar";
import Hero from "./components/organisms/Hero";
import StatsSection from "./components/organisms/Stats";
import Network from "./components/organisms/Network";
import Footer from "./components/organisms/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <Network />
      <Footer />
      {/* ...other sections... */}
    </>
  );
};

export default App;
