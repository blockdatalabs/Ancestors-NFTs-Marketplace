import React, { useEffect, useState, useRef } from "react";
import { uploadReference } from "@mintbase-js/storage";
import { exportComponentAsJPEG} from "react-component-export-image";
import Gen1 from "../../assets/images/tree/init-flower-1.jpg";
import Gen2 from "../../assets/images/tree/init-flower-2.jpg";
import Gen3 from "../../assets/images/tree/init-flower-3.jpg";
import Logo from "../../assets/images/logo/logo-header.png";
import { useWallet } from  '@mintbase-js/react'
import { execute, mint } from '@mintbase-js/sdk';
import NEARWalletConnector from "../near-wallet/NEARWalletConnector";
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getImages = async () => {
  const urlImages = "https://ancestors.pulsarforge.io/api/images";
  await delay(25000);
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
const TextAreaInput = ({onChange, value}) => {
  return(
    <textarea 
    type="multiliner"
    className="form-control"
    placeholder="Expanse your written lines"
    style={{  width: "100%", height: 90, borderRadius: 8, background: "lightgoldenrodyellow", marginBottom: 20  }}
  />
  )
}
function Flowers() {
  const componentRef = useRef();
  const [query, setQuery] = useState("");
  const [generation, setGeneration] = useState([]);
  const [locked, setLocked] = useState("pending");
  const [image, setImage] = useState(null);
  const [textInputs, setTextInputs] = useState([]);
  const [file, setFile] = useState(null);
  const { selector } = useWallet();
  
  const handleMint = async () => {

    const wallet = await selector.wallet();
    const reference = await handleSubmitFile(file);
    await execute(
      mint({
        noMedia: true,
         contractAddress: "woaps.mintbase1.near",
         metadata: {title:"Ancestors",reference:"fn6y3rhe4nYDG4GUu6w95tZovK8pqPoI-hGUG--zVTI"},
         ownerId: "pulsarforge.near" }),
      { wallet },   
    );
  };
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!file) return;
    //call storage method to upload file to arweave
    const metadata = {
    title: "Ancestors",
    media: file
  }
    const uploadResult = await uploadReference(metadata);
    console.log("https://arweave.net/" + uploadResult.id)
    return uploadResult.id;
  };

  const handleAddTextInput = () => {
    setTextInputs([...textInputs, '']);
  };

  const handleTextInputChange = (index, newText) => {
    const updatedTextInputs = [...textInputs];
    updatedTextInputs[index] = newText;
    setTextInputs(updatedTextInputs);
  };
  const handleDrop = (e) => {
    e.preventDefault();

    const droppedImageUrl = e.dataTransfer.getData('text');
    
    if (droppedImageUrl) {
      setImage(droppedImageUrl);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

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
        <div className="row" >
          <h2>
            {" "}
            <br /> <br /> Tree of Life calling World Builders <br /> <br />{" "}
          </h2>
          <div className="col-md-5" style={{ padding: 30, borderRadius: 40, border: "30px double coral", marginTop: 40, background: "#ebe054"}} ref={componentRef} >
              <h3>Appreciation Card, Kudos</h3>
              <br />
              <div
                className="drop-area"
              
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                {image ? (
                  <img src={image} style={{width: "100%", borderRadius: 8,marginBottom: 40}} alt="Kudos" />
                ) : (
                  <h4 style={{border: "1px solid coral", borderRadius: 8, marginBottom: 40, paddingTop: 250, paddingBottom: 250, paddingLeft: 10}}><span>Drop an image here, desktop experience</span></h4>
                )}
              </div>
              <textarea 
                type="multiliner"
                className="form-control"
                placeholder="Write your apreciation words or Kudos"
                style={{  width: "100%", height: 120, borderRadius: 8, background: "lightgoldenrodyellow", marginBottom: 20  }}
              />
              <button onClick={handleAddTextInput} style={{  width: "100%", height: 40, borderRadius: 8, background: "lightgoldenrodyellow", marginBottom: 20, border: "none"  }}>➕</button>
              {textInputs.map((text, index) => (
                <TextAreaInput
                  key={index}
                  value={text}
                  onChange={(e) => handleTextInputChange(index, e.target.value)}
                />
              ))}
              <textarea 
                type="multiliner"
                className="form-control"
                placeholder="Written by: name"
                style={{  width: "100%", height: 30, borderRadius: 8, background: "lightgoldenrodyellow", marginBottom: 40  }}
              />
              <h5 className="btn btn-primary">Created at Ancestors pulsarforge io <img src={Logo} style={{width: 125}} alt="Ancestors logo" /></h5>
            </div>
          <div className="col-md-7">
            <h2>
              {" "}
              <br /> Collect Flowers {" "}<br /> Custom Trained Model
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

              <button type="submit" className="btn btn-primary" style={{width: 400, padding: 25,margin: 20, marginRight: 20, borderRadius: 20}}>
                Growth Flowers
              </button>
              <br />
              <br />

              <h4>
                hyper detailed , stunning colors, front view, framed, day light, cinema 4d
              </h4>
              <br />
            </form>
              <div className="col-md-12">
            <button className="btn btn-secondary" onClick={() => exportComponentAsJPEG(componentRef)} style={{width: 340, height: 70, margin: 20, borderRadius: 20, marginTop: 30}}>
              Export Card as JPEG
            </button>
          </div>
            <br />
            <br />
              {generation ? (
              <>
              <div className="row">
                {generation.map(
                  (leoImage, index) =>
                    index === 0 && (
                      <div className="row" key={index}>
                        {leoImage.generated_images.map((leoGenerate, idx) => (
                          <>
                            <div className="col-md-6" key={idx}>
                              <h4>Gen {idx + 1}</h4>
                              <img
                                src={leoGenerate?.url}
                                style={{
                                  width: "90%",
                                  borderRadius: 40,
                                }}
                                alt="generations"
                              />
                            </div>
                          </>
                        ))}
                      </div>
                    ),
                )}
                <div  className="col-md-8 " style={{ cursor: "pointer" }}></div>
                </div>
                </>
            
          ) : (
            <h4>Submit, wait and get the species evolutions</h4>
          )}
          </div>
        </div>
      </div>

    </section>
  );
}

export default Flowers;
