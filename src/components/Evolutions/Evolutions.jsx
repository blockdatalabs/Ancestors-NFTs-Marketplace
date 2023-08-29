import React, { useState } from "react";
import InitImage from "../../assets/images/tree/init-mecha-v2.jpg";
import Skins from "../../assets/images/tree/skins.jpg";
import Gen1 from "../../assets/images/tree/gen1_1.jpg";
import Gen2 from "../../assets/images/tree/gen2_1.jpg";
import Gen3 from "../../assets/images/tree/gen3_1.jpg";
import CreativeMode from "../../assets/images/tree/unlock-creative-mode.png";
import { sequence } from "0xsequence";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getImages = async () => {
  const urlImages = "https://ancestors.pulsarforge.io/api/images";
  await delay(15000);
  const resp = await fetch(urlImages, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });

  return resp.json();
};

function Evolutions() {
  const [query, setQuery] = useState("");
  const [generation, setGeneration] = useState([]);
  const [currentAccount, setCurrentAccount] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    // The base URL for our API
    const url = "https://ancestors.pulsarforge.io/api";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => response)
      .catch((err) => console.log(err));

    const results = await getImages();
    setGeneration(results?.generations);
  };
  const handleSubmitLeonardo = async (event) => {
    event.preventDefault();

    // The base URL for our API
    const url = "https://ancestors.pulsarforge.io/api/diffusion";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => response)
      .catch((err) => console.log(err));

    const results = await getImages();
    setGeneration(results?.generations);
  };
  sequence.initWallet({ defaultNetwork: "polygon" });
  const openWallet = async () => {
    const wallet = sequence.getWallet();
    const connectDetails = await wallet.connect({
      app: "Ancestors Trees of Life",
      authorize: true,
      settings: {
        theme: "light",
        bannerUrl: "https://ancestors.pulsarforge.io/logo.png",
        includedPaymentProviders: ["moonpay", "ramp"],
        defaultFundingCurrency: "matic",
        lockFundingCurrencyToDefault: false,
      },
    });
    setCurrentAccount(connectDetails.session.accountAddress);
    wallet.openWallet();
  };
  return (
    <section className="banner">
      <div className="container big">
        <div className="row">
          <h2>
            {" "}
            <br /> <br /> Tree of Life calling World Builders <br /> <br />{" "}
          </h2>
          {currentAccount === "" ? (
            <>
              <button
                type="submit"
                style={{
                  color: "blue",
                  width: 780,
                  height: 80,
                  borderRadius: 40,
                }}
                shape="square"
                onClick={() => openWallet()}
                label="Open Wallet"
              >
                {" "}
                Connect wallet & Unlock Stable Diffussion XL Creative Mode{" "}
              </button>

              <img
                src={CreativeMode}
                style={{ border: "solid 8px", borderRadius: 40, marginTop: 40 }}
                alt="creative mode"
              />
            </>
          ) : (
            <>
              <div className="col-md-4">
                <br />
                <br />
                <br />
                <h4>Wallet Connected</h4>
                <h2>Init Image: </h2>
                <br />
                <br />
                <img
                  src={InitImage}
                  alt="Mecha Golem"
                  style={{ width: "512px", height: "384px", borderRadius: 40 }}
                />
              </div>
              <div className="col-md-8">
                <h2>
                  {" "}
                  <br /> Evolve them{" "}
                </h2>
                <form onSubmit={handleSubmit} className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="query"
                    name="query"
                    value={query}
                    placeholder="Your Prompt"
                    onChange={(event) => setQuery(event.target.value)}
                    style={{ width: 700, height: 100 }}
                  />

                  <br />
                  <br />

                  <button type="submit" className="btn btn-primary" style={{width: 400, padding: 25, marginRight: 20, borderRadius: 20}}>
                    Evolve them
                  </button>

                  <br />
                  <br />

                  <h4 style={{ fontSize: 30 }}>
                    Knight protector, polygonal, front view, glowing blooming
                    colors light runes, wearing stylized clothing, 3d, spring
                    vibes, vray render
                  </h4>
                  <br />

                  <h2>Sent next Evolutions</h2>
                </form>
              </div>
            </>
          )}
          <div className="col-md-4">
            <br />
            <br />
            <br />
            <h4>Diffusion Model</h4>
            <h2>Init Image: </h2>
            <br />
            <br />
            <img
              src={InitImage}
              alt="Mecha Golem"
              style={{ width: "512px", height: "384px", borderRadius: 40 }}
            />
          </div>
          <div className="col-md-8">
            <h2>
              {" "}
              <br /> Evolve them{" "}
            </h2>
            <form onSubmit={handleSubmitLeonardo} className="form-group">
              <input
                type="text"
                className="form-control"
                id="query"
                name="query"
                value={query}
                placeholder="Write Your Prompt to Create Evolutions"
                onChange={(event) => setQuery(event.target.value)}
                style={{  width: 700, height: 100  }}
              />

              <br />
              <br />

              <button type="submit" className="btn btn-primary" style={{width: 400, padding: 25, marginRight: 20, borderRadius: 20}}>
                Evolve them
              </button>

              <br />
              <br />

              <h4 style={{ fontSize: 30 }}>
                Knight protector, polygonal, front view, glowing blooming colors
                light runes, wearing stylized clothing, 3d, spring vibes, vray
                render
              </h4>
              <br />

              <h2>Sent next Evolutions</h2>
              <p>Wait around 9 seconds to get your results</p>
            </form>
          </div>
        </div>
        <div className="row" style={{ marginTop: 80, marginBottom: 80 }}>
          {generation ? (
            <>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <h4>After hit the button, scroll to discover previous mecha creations:</h4>
                  <br />
                  <br />
                </div>
                <div className="col-md-2"></div>
              </div>
              <div className="row">
              {generation.map(
                  (leoImage, index) =>
                    index === 0 && (
                      <div className="row" key={index}>
                        {leoImage.generated_images.map((leoGenerate, idx) => (
                          <>
                            <div className="col-md-4" key={idx}>
                              <h2>Gen {idx + 1}</h2>
                              <img
                                src={leoGenerate?.url}
                                style={{
                                  width: "75%",
                                  borderRadius: 40,
                                }}
                                alt="generations"
                              />
                              <h5>
                                Previous Creator Prompt: {leoImage.prompt}
                              </h5>
                            </div>
                          </>
                        ))}
                      </div>
                    ),
                )}
                {generation.map(
                  (leoImage, index) =>
                    index === 1 && (
                      <div className="row" key={index}>
                        {leoImage.generated_images.map((leoGenerate, idx) => (
                          <>
                            <div className="col-md-4" key={idx}>
                              <h2>Gen {idx + 1}</h2>
                              <img
                                src={leoGenerate?.url}
                                style={{
                                  width: "75%",
                                  borderRadius: 40,
                                }}
                                alt="generations"
                              />
                              <h5>
                                Previous Creator Prompt: {leoImage.prompt}
                              </h5>
                            </div>
                          </>
                        ))}
                      </div>
                    ),
                )}
                {generation.map(
                  (leoImage, index) =>
                    index === 2 && (
                      <div className="row" key={index}>
                        {leoImage.generated_images.map((leoGenerate, idx) => (
                          <>
                            <div className="col-md-4" key={idx}>
                              <h2>Gen {idx + 1}</h2>
                              <img
                                src={leoGenerate?.url}
                                style={{
                                  width: "75%",
                                  borderRadius: 40,
                                }}
                                alt="generations"
                              />
                              <h5>
                                Previous Creator Prompt: {leoImage.prompt}
                              </h5>
                            </div>
                          </>
                        ))}
                      </div>
                    ),
                )}
                {generation.map(
                  (leoImage, index) =>
                    index === 3 && (
                      <div className="row" key={index}>
                        {leoImage.generated_images.map((leoGenerate, idx) => (
                          <>
                            <div className="col-md-4" key={idx}>
                              <h2>Gen {idx + 1}</h2>
                              <img
                                src={leoGenerate?.url}
                                style={{
                                  width: "75%",
                                  borderRadius: 40,
                                }}
                                alt="generations"
                              />
                              <h5>
                                Previous Creator Prompt: {leoImage.prompt}
                              </h5>
                            </div>
                          </>
                        ))}
                      </div>
                    ),
                )}
              </div>
            </>
          ) : (
            <h4>Submit, wait and get the species evolutions</h4>
          )}
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <br />
              <br />
              <br />
              <br />
              <h4>Row Generation Example:</h4>
              <br />
              <br />
            </div>
            <div className="col-md-4"></div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <h2>Gen1</h2>
              <br />
              <img
                src={Gen1}
                alt="skins of one evolution"
                style={{ width: "100%", borderRadius: 40 }}
              />
            </div>
            <div className="col-md-4">
              <h2>Gen2</h2>
              <br />
              <img
                src={Gen2}
                alt="skins of one evolution"
                style={{ width: "100%", borderRadius: 40 }}
              />
            </div>
            <div className="col-md-4">
              <h2>Gen3</h2>
              <br />
              <img
                src={Gen3}
                alt="skins of one evolution"
                style={{ width: "100%", borderRadius: 40 }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h2>Skins</h2>
            <br />
            <br />
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <br />
            <br />
            <img
              src={Skins}
              alt="skins of one evolution"
              style={{ width: "100%", borderRadius: 40 }}
            />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </section>
  );
}

export default Evolutions;
