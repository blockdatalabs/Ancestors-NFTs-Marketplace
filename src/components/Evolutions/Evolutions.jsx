import React, { useState } from 'react';
import InitImage from '../../assets/images/tree/init-mecha.jpg';
import Skins from '../../assets/images/tree/skins.png';
import Gen1 from '../../assets/images/tree/gen1.jpg';
import Gen2 from '../../assets/images/tree/gen2.jpg';
import Gen3 from '../../assets/images/tree/gen3.jpg';

function Evolutions(){
    const [query, setQuery] = useState('');
    const [ generation, setGeneration ] = useState();
    const handleSubmit = (event) => {
      event.preventDefault();


        // The base URL for our API
        const url = "https://ancestors.pulsarforge.io/api";
      
        fetch(url, {
          // Send a POST request
          method: "POST",
          // With a JSON-stringified body containing the query from our input
          body: JSON.stringify({ query }),
          // Set the `Content-type` header so our API knows that the request
          // is sending JSON
          headers: { 'Content-type': 'application/json' }
        })  
        .then(response => setGeneration(response))
        .then(response => console.log("GENERATION", generation))
        .then((response) => console.log("RESPONSE",response))
        .catch(err => setGeneration(''));
    };

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

                        <h4 style={{fontSize: 30}}>3d vray render, raytracing, knight helmet head, mecha stylized character wearing clothing and fabrics with glowing and blooming lights and runes, knights with sword and shield, protector, vfx light effect lines over the body, background space</h4>
                        </form>
                    </div>
                </div>
                <div className='row' style={{marginTop: 80, marginBottom: 80}}>
                { generation ?
                <> 
                    <div className='row'>
                        <div className='col-md-4'>
                        </div>
                        <div className='col-md-4'>
                            <h2>Evolutions:</h2>
                            <br />
                            <br />
                        </div>
                        <div className='col-md-4'>
                        </div>
                    </div>
                    
                    {generation.generations.map( (leoImage) =>(
                        <div key={leoImage[1]}>
                        {leoImage[1].generated_images.map( 
                            (leoGenerate, idx) => (
                            <>
                                <div className='col-md-4' key={idx} >
                                <h2>Gen {idx + 1}</h2>
                                <img src={leoGenerate?.url} style={{width: "420px", height:"420px", borderRadius: 40}} alt='generations'/>
                                </div>
                            </>
                        ))}
                    </div>
                    ))} 
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
