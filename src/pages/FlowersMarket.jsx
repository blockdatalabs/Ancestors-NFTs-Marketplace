import React from "react";
import Footer from "../components/footer/Footer";
import { MediaRenderer, ThirdwebNftMedia, Web3Button, useContract, useNFT, useNFTs, useUnclaimedNFTs } from "@thirdweb-dev/react";


function FlowersMarket() {
  const { contract } = useContract("0x3C1969fF9652E61b674d393f60A0372c07F7Af26");
  // Load the NFT metadata from the contract using a hook
  const { data, isLoading, error } = useNFTs(contract);
  const { nft } = useUnclaimedNFTs(contract, { start: 0, count: 100 });

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>NFT not found</div>;
  return (
    <div className="home-3 wrapper row">
      <div className="col-md-3"></div>
      <div className="col-md-6" style={{marginTop: 200}}>
        <h1>Flowers Framed Marketplace</h1>
      </div>
      <div className="col-md-3"></div>
      <div className="col-md-4"></div>
    <div className="col-md-4" style={{marginTop: 300}}>
    <Web3Button
      contractAddress="0x3C1969fF9652E61b674d393f60A0372c07F7Af26"
      // For example, claim an NFT from this contract when the button is clicked
      action={(contract) => contract.erc721.claim(1)}
      style={{width: 500, height: 80, fontSize: 25}}
    >
      Claim: Flowers Framed. 
    </Web3Button>
    </div>
    <div className="col-md-4"></div>
    {
      data.map((nft)=>(
        <div className="row" style={{margin: 40,marginTop: 200}}>
          <div className="col-md-4">
            <img src={nft.metadata.image} style={{width: "80%", borderRadius: 20}} alt="Flower Framed" />
            { nft.metadata.attributes.map((trait) => (
              <h4>{trait.trait_type} = {trait.value}</h4>
            ))}
          </div>
        </div>
      ))
    }

    <Footer />
    </div>
  );
}

export default FlowersMarket;
