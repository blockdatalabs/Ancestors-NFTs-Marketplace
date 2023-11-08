import React, { useState } from "react";
import InitImage from "../../assets/images/tree/init-mecha-v2.jpg";
import Skins from "../../assets/images/tree/skins.jpg";
import Gen1 from "../../assets/images/tree/gen1_1.jpg";
import Gen2 from "../../assets/images/tree/gen2_1.jpg";
import Gen3 from "../../assets/images/tree/gen3_1.jpg";
import { useWallet } from  '@mintbase-js/react'

const  NearWalletConnector = () => {
  const {
    connect,
    disconnect,
    activeAccountId,
    selector,
    isConnected,
    errorMessage,
  } = useWallet();


  if (!isConnected) {
    return <button  onClick={connect}>Connect To NEAR</button>
  }

  return (
    <div>
      <p>You are connected as {activeAccountId}</p>
      <button  onClick={disconnect}>Disconnect</button>
    </div>
  )
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getImages = async () => {
  const urlImages = "https://ancestors.pulsarforge.io/api/images";
  await delay(18000);
  const resp = await fetch(urlImages, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });

  return resp.json();
};

function IconicArt() {
  const [queryPlanet, setQueryPlanet] = useState("");
  const [generation, setGeneration] = useState([]);
  const handleSubmitLeonardo = async (event) => {
    event.preventDefault();

    // The base URL for our API
    const url = "https://ancestors.pulsarforge.io/api/iconic-art";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ queryPlanet }),
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
  return (
    <section className="banner">
      <div className="container big">
        <div className="row">
          <h2>
            {" "}
            <br /> <br /> Tree of Life calling World Builders <br /> <br />{" "}
          </h2>
          <div className="col-md-4">
            <br />
            <br />
            <br />
            <h4>Stable Diffusion XL</h4>
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
                Knight protector, polygonal, front view, glowing blooming colors, 3d, vray render
              </h4>
              <br />

              <h4>Sent next Evolutions</h4>
              <h5>Wait around 9 seconds to get your results</h5>
            </form>
          </div>
        </div>
        <div className="row" style={{ marginTop: 80, marginBottom: 80 }}>
          {generation ? (
            <>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <h4>After hit the button, scroll  and wait to discover your character creations:</h4>
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
                            </div>
                          </>
                        ))}
                              <h5>
                                Previous Creator Prompt: {leoImage.prompt}
                              </h5>
                      </div>
                    ),
                )}
              </div>
            </>
          ) : (
            <h4>Submit, wait and get the species evolutions</h4>
          )}
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h4>Skins character multi variations</h4>
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

export default IconicArt;
