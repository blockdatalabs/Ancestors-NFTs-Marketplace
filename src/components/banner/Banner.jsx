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
                  Glimpse of AI Art experiences.
                </h2>
                <h4 className="heading">
                  Kudos, Iconic Art, Gallery Art Styles, Ankemons Cards.
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
          <div className="banner__left">
              <div className="block-text">
          <img
            src={TreeOfLife}
            alt="tree of life"
            style={{ border: "12px double", width: "500px", height: "auto", borderRadius: 40 }}
          />
          <div className="block-text">
            <a href="https://www.mintbase.xyz/contract/woaps.mintbase1.near/nfts/all/0" target="_blank" rel="noreferrer"><h4 className="heading">Minter WOAPs Collection</h4></a>
          </div>
            <NEARWalletConnector />
          </div>
          </div>
      </div>       
      </div>
      </div>
    </section>
  );
}

export default Banner;
