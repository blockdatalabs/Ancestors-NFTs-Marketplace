import React from "react";
import FAQs from "../components/faqs/FaqSection";
import Roadmap from "../components/roadmap/Roadmap";
import Banner from "../components/banner/Banner";
import dataRoadMap from "../assets/data/data-roadmap";
import Footer from "../components/footer/Footer";
import Evolutions from "../components/Evolutions/Evolutions";
import Planets from "../components/Evolutions/Planets";

function Home() {
  return (
    <div className="home-3 wrapper">
      <Banner />

      <Evolutions />

      <Planets />
      
      <Roadmap data={dataRoadMap} />

      <FAQs />

      <Footer />
    </div>
  );
}

export default Home;
