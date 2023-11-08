import React from "react";
import FAQs from "../components/faqs/FaqSection";
import Roadmap from "../components/roadmap/Roadmap";
import Banner from "../components/banner/Banner";
import dataRoadMap from "../assets/data/data-roadmap";
import Footer from "../components/footer/Footer";
import Evolutions from "../components/generators/Evolutions";
import Planets from "../components/generators/Planets";
import NEARWalletConnector from "../components/near-wallet/NEARWalletConnector";
import Mecha from "../components/generators/Mecha";

function Home() {
  return (
    <div className="home-3 wrapper">
      <Banner />
      
      <Evolutions />

      <Planets />
      
      <Roadmap data={dataRoadMap} />

      <Footer />
    </div>
  );
}

export default Home;
