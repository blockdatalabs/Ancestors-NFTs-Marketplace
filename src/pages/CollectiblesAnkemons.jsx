import React from "react";
import Footer from "../components/footer/Footer";
import {  Web3Button, useContract, useNFTs } from "@thirdweb-dev/react";
import Flowers from "../components/generators/Flowers";
import Ankemons from "../components/generators/Ankemons";


function CollectiblesAnkemons() {
  const { contract } = useContract("0x3C1969fF9652E61b674d393f60A0372c07F7Af26");
  // Load the NFT metadata from the contract using a hook
  const { data, isLoading, error } = useNFTs(contract);
  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>NFT not found</div>;
  return (
    <div className="home-3 wrapper">

    <Ankemons/>

    <Footer />
  </div>
  );
}

export default CollectiblesAnkemons;
