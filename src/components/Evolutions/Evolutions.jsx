import React, { useEffect, useState } from 'react';
import InitImage from '../../assets/images/tree/init-mecha.jpg';
import Skins from '../../assets/images/tree/skins.png';
import Gen1 from '../../assets/images/tree/gen1.jpg';
import Gen2 from '../../assets/images/tree/gen2.jpg';
import Gen3 from '../../assets/images/tree/gen3.jpg';

const getImages = async () => {
    const urlImages = "https://ancestors.pulsarforge.io/api/images";
    const resp = await fetch(urlImages, {
        method: "GET",
        headers: { 'Content-type': 'application/json' }
      })

    return resp.json();
}

function Evolutions(){
    const [query, setQuery] = useState('');
    const [ generation, setGeneration ] = useState([]);
    const handleSubmit = async (event) => {
      event.preventDefault();


        // The base URL for our API
        const url = "https://ancestors.pulsarforge.io/api";
      
        fetch(url, {
          method: "POST",
          body: JSON.stringify({ query }),
          headers: { "accept": "application/json", 'Content-type': 'application/json' }
        })  
        .then(response => response)
        .catch(err => console.log(err));

        const results = await getImages();
        setGeneration(results?.generations);
      

    };

    console.log("GENERATION", generation);
    return(
        <section className="banner">
            <div className="container big">
                <div className="row">
                    <h2> <br/> <br/> Tree of Life calling World Builders <br/> <br/> </h2>
                    <div className='col-md-4'>
                        <br/>
                        <br/>
                        <br/>
                        <h2>Init Image: </h2>
                        <br/>
                        <br/>
                        <img src={InitImage} alt='Mecha Golem' style={{width: "380px", height:"380px", borderRadius: 40}} />
                    </div>
                    <div className='col-md-8'> 
                        <h2> <br /> Evolve them </h2>
                        <form onSubmit={handleSubmit} className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="query"
                            name="query"
                            value={query}
                            placeholder="Your Prompt"
                            onChange={(event) =>
                              setQuery(event.target.value)
                            }
                            style={{width: 400}}
                        />

                        <br />
                        <br />

                        <button type="submit" className="btn btn-primary">Evolve them</button>

                        <br />
                        <br />

                        <h4 style={{fontSize: 30}}>Mecha character with sword and shield, golem knight  earth protector, polygonal, front view, glowing blooming green light runes, smooth soft stylized art, 3d, summer vibes, vray render.</h4>
                        </form>
                    </div>
                </div>
                <div className='row' style={{marginTop: 80, marginBottom: 80}}>
                { generation ?
                <> 
                    <div className='row'>
                        <div className='col-md-2'>
                        </div>
                        <div className='col-md-8'>
                            <h4>Discover previous Evolutions</h4>
                            <br />
                            <br />
                            <h4>Sent next Evolutions</h4>
                            <br />
                            <br />
                        </div>
                        <div className='col-md-2'>
                        </div>
                    </div>
                    <div className='row'>
                    {generation.map( (leoImage, index) =>(
                        index === 1 && (
                        <div className='row' key={index}>
                        {leoImage.generated_images.map( 
                            (leoGenerate, idx) => (
                            <>
                                <div className='col-md-4' key={idx} >
                                <h2>Gen {idx + 1}</h2>
                                <img src={leoGenerate?.url} style={{width: "512px", height:"384px", borderRadius: 40}} alt='generations'/>
                                <h5>Previous Creator Prompt: {leoImage.prompt}</h5>
                                </div>
                            </>
                        ))}
                        
                        </div>
                        )
                        
                    ))} 
                    {generation.map( (leoImage, index) =>(
                        index === 2 && (
                        <div className='row' key={index}>
                        {leoImage.generated_images.map( 
                            (leoGenerate, idx) => (
                            <>
                                <div className='col-md-4' key={idx} >
                                <h2>Gen {idx + 1}</h2>
                                <img src={leoGenerate?.url} style={{width: "512px", height:"384px",  borderRadius: 40}} alt='generations'/>
                                <h5>Previous Creator Prompt: {leoImage.prompt}</h5>
                                </div>
                            </>
                        ))}
                        
                        </div>
                        )
                        
                    ))} 
                    {generation.map( (leoImage, index) =>(
                        index === 3 && (
                        <div className='row' key={index}>
                        {leoImage.generated_images.map( 
                            (leoGenerate, idx) => (
                            <>
                                <div className='col-md-4' key={idx} >
                                <h2>Gen {idx + 1}</h2>
                                <img src={leoGenerate?.url} style={{width: "512px", height:"384px",  borderRadius: 40}} alt='generations'/>
                                <h5>Previous Creator Prompt: {leoImage.prompt}</h5>
                                </div>
                            </>
                        ))}
                        
                        </div>
                        )
                        
                    ))} 
                    </div>
                </>
                : 
                <h4>Submit, wait and get the species evolutions</h4>
              }
                    <div className='row'>
                        <div className='col-md-4'>
                        </div>
                        <div className='col-md-4'>
                        <br />
                            <br />
                            <br />
                            <br />
                            <h2>Example: Evolutions</h2>
                            <br />
                            <br />
                        </div>
                        <div className='col-md-4'>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col-md-4'>
                            <h2>Gen1</h2>
                            <br />
                            <img src={Gen1} alt='skins of one evolution' style={{width: "100%", borderRadius: 40}} />
                        </div>
                        <div className='col-md-4'>
                            <h2>Gen2</h2>
                            <br />
                            <img src={Gen2} alt='skins of one evolution' style={{width: "100%", borderRadius: 40}} />
                        </div>
                        <div className='col-md-4'>
                            <h2>Gen3</h2>
                            <br />
                            <img src={Gen3} alt='skins of one evolution' style={{width: "100%", borderRadius: 40}} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        </div>
                        <div className='col-md-4'>
                            <h2>Skins</h2>
                            <br />
                            <br />
                        </div>
                        <div className='col-md-4'>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-2'>
                        </div>
                        <div className='col-md-8'>
                            <br />
                            <br />
                            <img src={Skins} alt='skins of one evolution' style={{width: "100%", borderRadius: 40}} />
                        </div>
                        <div className='col-md-2'>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Evolutions;
