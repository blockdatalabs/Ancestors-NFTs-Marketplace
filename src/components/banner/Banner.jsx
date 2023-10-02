import React from "react";
import TreeOfLife from "../../assets/images/tree/UI-FLOW.gif";
import NEARWalletConnector from "../near-wallet/NEARWalletConnector";

function Banner(props) {
  return (
    <section className="banner">
      <div className="shape right"></div>
      <div className="container big">
        <div className="row">
          <div className="col-xl-6 col-md-6">
            <div className="banner__left">
              <div className="block-text">
                <h2 className="heading">
                  Ancestors Trees of Life.
                  Create, growth and collect them
                  <br />{" "}
                  <span>Evolutions, Skins & Environments</span>
                </h2>
                <div className="row">
                  <div className="col-xl-12 col-md-12">

                  <div className="block-text">
                    <a href="https://www.mintbase.xyz/contract/woaps.mintbase1.near/nfts/all/0" target="_blank" rel="noreferrer"><h2 className="heading">WOAPs Mintbase Collection</h2></a>
                  </div>
                    <NEARWalletConnector />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="banner__left">
              <div className="block-text">
              <h2 className="heading">
                  <span>We guide creators and teams to create </span>
                  <br />
                  Collectibles to Mint
                  <br />{" "}
                  Based on custom AI image generators
                </h2>
                <img
                  src={TreeOfLife}
                  alt="tree of life"
                  style={{ border: "12px double", width: "900px", height: "auto", borderRadius: 40 }}
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
