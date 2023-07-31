import React, { useState, useEffect } from 'react';
import InitImage from '../../assets/images/tree/init-golem.jpg';
import Skins from '../../assets/images/tree/skins.png';
import axios from 'axios';
import ImagesGens from '../../assets/data/imagesGens.json';
import Gen1 from '../../assets/images/tree/gen1.jpg';
import Gen2 from '../../assets/images/tree/gen2.jpg';
import Gen3 from '../../assets/images/tree/gen3.jpg';

function Evolutions(){
    const [message, setMessage] = useState('');
    const [ generationId, setGenerationId ] = useState('');
    const [leoImages, setLeoImages] = useState([])
    const handleSubmit = (event) => {
      event.preventDefault();
      let options = {
        method: 'POST',
        url: 'https://cloud.leonardo.ai/api/rest/v1/generations',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: 'Bearer ' + process.env.REACT_APP_LEONARDO_API,
        },
        data: {
          prompt: "Mecha Golem Character "+message,
          modelId: "b820ea11-02bf-4652-97ae-9ac0cc00593d",
          sd_version: 'v1_5',
          num_images: 3,
          width: 768,
          height: 768,
          guidance_scale: 11,
          init_generation_image_id: process.env.REACT_APP_LEONARDO_INIT_IMAGE_V1,
          init_strength: 0.32
        }
      };
    
      if(message !== undefined){
        axios
        .request(options)
        .then(function (response) {
          setGenerationId(response.data.sdGenerationJob.generationId)
        })
        .catch(function (error) {
          console.error(error);
          setGenerationId('')
        });
      }
    };
  
    useEffect(() => {
      if(generationId !== ''){
        const optionsGeneration = {
          method: 'GET',
          url: 'https://cloud.leonardo.ai/api/rest/v1/generations/' + generationId,
          headers: {accept: 'application/json', authorization: 'Bearer ' + process.env.REACT_APP_LEONARDO_API}
        };
        setTimeout(() => {
        axios.request(optionsGeneration)
          .then(function (response) {
            setLeoImages(response?.data.generations_by_pk.generated_images)
          })
          .catch(function (error) {
            console.error(error);
          });
          }, 14000);
        }
      });
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
                        <form className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="message"
                            name="message"
                            value={message}
                            placeholder="Your Prompt"
                            onChange={(event) =>
                                setMessage(event.target.value)
                            }
                            style={{width: 400}}
                        />

                        <br />
                        <br />

                        <button type="submit" className="btn btn-primary">Evolve them</button>

                        <br />
                        <br />

                        <h4 style={{fontSize: 30}}>Mecha Golem Character Beast wearing fashion jackets, jeans and elegant shoes with glowing runes humanoid robot style, blade arms, wheel legs, photorealistic</h4>
                        </form>
                    </div>
                </div>
                <div className='row' style={{marginTop: 80, marginBottom: 80}}>

                    <div className='row'>
                        <div className='col-md-4'>
                        </div>
                        <div className='col-md-4'>
                            <h2>Evolutions</h2>
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
                            <img src={Skins} alt='skins of one evolution' style={{width: "100%"}} />
                        </div>
                        <div className='col-md-2'>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Evolutions;
