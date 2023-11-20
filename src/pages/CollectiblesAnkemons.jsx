import React from "react";
import Footer from "../components/footer/Footer";
import {  Web3Button, useContract, useNFTs } from "@thirdweb-dev/react";
import Flowers from "../components/generators/Flowers";
import Ankemons from "../components/generators/Ankemons";


function CollectiblesAnkemons() {
  return (
    <div className="home-3 wrapper">

    <Ankemons/>

    <Footer />
  </div>
  );
}

export default CollectiblesAnkemons;
