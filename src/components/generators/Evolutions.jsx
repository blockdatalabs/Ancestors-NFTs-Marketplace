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

function Evolutions() {
  const [query, setQuery] = useState("");
  const [generation, setGeneration] = useState([]);
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
  return (
    <section className="banner">
      <div className="container big">
        <div className="row">
          <div className="col-md-4">
            <h4>Init Image: </h4>
            <img
              src={InitImage}
              alt="Mecha Golem"
              style={{ width: "412px", height: "284px", borderRadius: 40 }}
            />
          </div>
          <div className="col-md-8">
          {generation ? (
            <>
              <div className="row">
              <h4>Get your evolution here</h4>
              <h5>Wait around 9 seconds</h5>
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
          <div className="col-md-12">
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
                style={{  width: "100%", height: 100  }}
              />

              <br />
              <br />

              <button type="submit" className="btn btn-primary" style={{width: "100%", padding: 25, marginRight: 20, borderRadius: 20}}>
                Evolve your Adaptative Combat Vehicles, most known as Mechas
              </button>

              <br />
              <br />

              <h4 style={{ fontSize: 30 }}>
                Knight protector, polygonal, front view, glowing blooming colors, 3d, vray render
              </h4>
              <br />


            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <br />
            <br />
            <br />
            <br />
            <h4>Skins character multi variations</h4>
            <br />
            <br />
          </div>
          <div className="col-md-2"></div>
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
