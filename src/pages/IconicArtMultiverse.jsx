import React from "react";
import Roadmap from "../components/roadmap/Roadmap";
import Banner from "../components/banner/Banner";
import dataRoadMap from "../assets/data/data-roadmap";
import Footer from "../components/footer/Footer";
import Evolutions from "../components/generators/Evolutions";
import Planets from "../components/generators/Planets";
import IconicArt from "../components/generators/IconicArt";

function IconicArtMultiverse() {
  return (
    <div className="home-3 wrapper">
        <IconicArt />

      <Footer />
    </div>
  );
}

export default IconicArtMultiverse;
