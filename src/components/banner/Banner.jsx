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
                  Create consistent & new art styles.
                </h2>
                <h3 className="heading">
                  AI Image Generators, create faster, focus in world building.
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
          <div className="banner__left">
            <div className="block-text">
              <img
                src={TreeOfLife}
                alt="tree of life"
                style={{ border: "12px double", width: "700px", height: "auto", borderRadius: 40 }}
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
