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
                  Trees of Life
                  <br />
                  <span>Create, Growth and Collect Them</span>
                  <br />{" "}
                </h2>
                <div className="row">
                  <div className="col-xl-12 col-md-12">
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
                  <span>Ancestors Evolutions & Skins </span>
                  <br />
                  Only the choosen Step Up
                </h2>
                <img
                  src={TreeOfLife}
                  alt="tree of life"
                  style={{ border: "12px double", width: "900px", height: "auto", borderRadius: 40 }}
                />
              </div>
            </div>
            
          </div>
          <div className="row">
              <div className="col-xl-12 col-md-12">
              <div className="block-text">
                <h2 className="heading">
                  We help creators and teams to create 
                  <br />
                  <span>Custom AI Image Generators to mint collectibles based on their style</span>
                  <br />{" "}
                </h2>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
