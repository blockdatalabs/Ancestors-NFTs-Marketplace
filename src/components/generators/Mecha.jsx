import React, { useState } from "react";
import InitImage from "../../assets/images/tree/init-environments.jpg";
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
  await delay(12000);
  const resp = await fetch(urlImages, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });

  return resp.json();
};

function Mecha() {
  const [queryPlanet, setQueryPlanet] = useState("");
  const [generation, setGeneration] = useState([]);
  const handleSubmitPlanets = async (event) => {
    event.preventDefault();

    // The base URL for our API
    const url = "https://ancestors.pulsarforge.io/api/drivers";

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
            <br /> <br /> Drivers <br /> <br />{" "}
          </h2>
          <div className="col-md-12">
            <br />
            <br />
            <br />
            <h4>Try our Anime Style AI Model</h4>
            <br />
            <br />
          </div>
          <div className="col-md-12">
            <form onSubmit={handleSubmitPlanets} className="form-group">
              <input
                type="text"
                className="form-control"
                id="queryPlanet"
                name="queryPlanet"
                value={queryPlanet}
                placeholder="Write Your Prompt to discover places"
                onChange={(event) => setQueryPlanet(event.target.value)}
                style={{  width: "100%", height: 150, borderRadius: 10  }}
              />

              <br />
              <br />

              <button type="submit" className="btn btn-primary" style={{width: 400, padding: 25, marginRight: 20, borderRadius: 20}}>
                Create your character
              </button>

              <br />
              <br />

              <h4 style={{ fontSize: 30 }}>
                human face of a mecha driver, cyberpunk, octane render, cinema 4d
              </h4>
              <br />
            </form>
          </div>
        </div>
        <div className="row" style={{ marginTop: 80, marginBottom: 80 }}>
          {generation ? (
            <>
              <div className="row">
                <div className="col-md-12">
                  <h4>Hit the button, wait around 12 seconds, discover your driver:</h4>
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
                            <div className="col-md-12" key={idx}>
                              <h2>Gen {idx + 1}</h2>
                              <img
                                src={leoGenerate?.url}
                                style={{
                                  width: "100%",
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
            <h4>Submit</h4>
          )}
      </div>
    </div>
    </section>
  );
}

export default Mecha;
