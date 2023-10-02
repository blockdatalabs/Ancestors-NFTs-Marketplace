import React from "react";
import Footer from "../components/footer/Footer";
import {  Web3Button, useContract, useNFTs } from "@thirdweb-dev/react";


function BearsBuilders() {
  const { contract } = useContract("0x7568e517C68D3cB1AaF88b1E76c89a9ec926B5e0");
  // Load the NFT metadata from the contract using a hook
  const { data, isLoading, error } = useNFTs(contract);
  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>NFT not found</div>;
  return (
    <div className="home-3 wrapper row">
      <div className="col-md-3"></div>
      <div className="col-md-6" style={{marginTop: 50}}>
        <h1 style={{fontSize: 80, textAlign: "center"}}>Bears Buidlers</h1>
      </div>
      <div className="col-md-3"></div>
      <div className="col-md-4"></div>
    <div className="col-md-4" style={{marginTop: 100}}>
    <Web3Button
      contractAddress="0x7568e517C68D3cB1AaF88b1E76c89a9ec926B5e0"
      // For example, claim an NFT from this contract when the button is clicked
      action={(contract) => contract.erc721.claim(1)}
      style={{width: 620, height: 80, fontSize: 25}}
    >
      Bears Builders
    </Web3Button>
    </div>
    <div className="col-md-4"></div>
    <div className="row" style={{margin: 20, marginTop: 200}}>
    {
      data.map((nft)=>(
        
          <div className="col-md-4">
            <h2>{nft.metadata.name}</h2>
            <img src={nft.metadata.image} style={{width: "80%", borderRadius: 20}} alt="Flower Framed" />
          </div>
      ))  
    }
    </div>

    <Footer />
    </div>
  );
}

export default BearsBuilders;
