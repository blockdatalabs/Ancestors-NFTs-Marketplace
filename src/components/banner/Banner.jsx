import React from "react";
import TreeOfLife from "../../assets/images/tree/tree-of-life.jpg";

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
                  Infinity possibilities at Trees of Life
                  <br />
                  <span>Create, Growth and Collect Them</span>
                  <br />{" "}
                </h2>
                <div className="row">
                  <div className="col-xl-12 col-md-12">
                    <iframe
                      src="https://tree-component-v1.pages.dev"
                      style={{ width: 400, height: 400, marginLeft: 140 }}
                      title="Tree possibilities"
                    ></iframe>
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
                  style={{ width: "868px", height: "auto", borderRadius: 40 }}
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
