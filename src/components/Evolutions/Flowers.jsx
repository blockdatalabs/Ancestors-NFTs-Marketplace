import React, { useEffect, useState } from "react";
import InitImage from "../../assets/images/tree/init-flower.jpg";
import Gen1 from "../../assets/images/tree/Flowers-1.jpg";
import Gen2 from "../../assets/images/tree/Flowers-2.jpg";
import Gen3 from "../../assets/images/tree/Flowers-3.jpg";

const getImages = async () => {
  const urlImages = "https://ancestors.pulsarforge.io/api/images";
  const resp = await fetch(urlImages, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });

  return resp.json();
};
const checkout = () => {
  if (window.unlockProtocol) {
    window.unlockProtocol.loadCheckoutModal();
  }
};
function Flowers() {
  const [query, setQuery] = useState("");
  const [generation, setGeneration] = useState([]);
  const [locked, setLocked] = useState("pending");



  const unlockHandler = (e) => {
    setLocked(e.detail);
  };

  useEffect(() => {
    window.addEventListener("unlockProtocol", unlockHandler);

    return () => {
      window.removeEventListener("unlockProtocol", unlockHandler);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // The base URL for our API
    const url = "https://ancestors.pulsarforge.io/api/flowers";

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
          <h2>
            {" "}
            <br /> <br /> Tree of Life calling World Builders <br /> <br />{" "}
          </h2>
    
          <div className="col-md-4">
            <br />
            <br />
            <br />
            <h4>Flowers Model</h4>
            <h2>Sample Image: </h2>
            <br />
            <br />
            <img
              src={InitImage}
              alt="Flowers"
              style={{ width: "380px", height: "512px", borderRadius: 40 }}
            />
          </div>
          <div className="col-md-8">
            <h2>
              {" "}
              <br /> Collect Flowers {" "}
            </h2>
            <form onSubmit={handleSubmit} className="form-group">
              <input
                type="text"
                className="form-control"
                id="query"
                name="query"
                value={query}
                placeholder="Flowers + Your Prompt"
                onChange={(event) => setQuery(event.target.value)}
                style={{  width: 700, height: 100  }}
              />

              <br />
              <br />

              <button type="submit" className="btn btn-primary" style={{padding: 25, borderRadius: 20}}>
                Growth Flowers
              </button>

              <br />
              <br />

              <h4 style={{ fontSize: 30 }}>
                hyper detailed , stunning colors, framed, cinema 4d
              </h4>
              <br />

              <h2>Sent next Flowers</h2>
            </form>
          </div>
        </div>
        <div className="row" style={{ marginTop: 80, marginBottom: 80 }}>
          {generation ? (
            <>
              <div className="row">
                <div className="col-md-7">
                  <h4>After Action Growth Flowers.</h4>
                  <h4>Scroll to Discover previous Creations:</h4>
                  <br />
                  <br />
                </div>
                <div className="col-md-5">
                  <button onClick={checkout} className="btn btn-primary" style={{padding: 25, borderRadius: 20}}>
                    Unlock 🔒 and Get Access to more Flowers 💐
                  </button>
                </div>
              </div>
              <div className="row">
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
                <div  className="col-md-8 " style={{ cursor: "pointer" }}>

                </div>
                {generation.map(
                  (leoImage, index) =>
                  locked === "locked" && index === 2 && (
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
                  locked === "locked" && index === 3 && (
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
                  locked === "locked" && index === 4 && (
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
                  locked === "locked" && index === 5 && (
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
                alt="skins of one flower"
                style={{ width: "100%", borderRadius: 40 }}
              />
            </div>
            <div className="col-md-4">
              <h2>Gen2</h2>
              <br />
              <img
                src={Gen2}
                alt="skins of one flower"
                style={{ width: "100%", borderRadius: 40 }}
              />
            </div>
            <div className="col-md-4">
              <h2>Gen3</h2>
              <br />
              <img
                src={Gen3}
                alt="skins of one flower"
                style={{ width: "100%", borderRadius: 40 }}
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Flowers;
