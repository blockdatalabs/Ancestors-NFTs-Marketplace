import React, { useState, useEffect } from 'react';
import InitImage from '../assets/images/tree/init-golem.jpg'
import Footer from '../components/footer/Footer';
import axios from 'axios';
import Banner from '../components/banner/Banner';

function TreeOfLife() {
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
        prompt: "One Stylized Mecha Golem Character, glowing runes "+message,
        modelId: process.env.REACT_APP_LEONARDO_RUSTACEANS_MODEL,
        sd_version: 'v1_5',
        num_images: 3,
        width: 768,
        height: 768,
        guidance_scale: 11,
        init_generation_image_id: process.env.REACT_APP_LEONARDO_INIT_IMAGE_V1,
        init_strength: 0.08
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

    return (
        <div className='home-3 wrapper'>
          
        <section className="banner">
            <div className="container big">
                <div className="row">
                    <h1>
                    <br/>
                    <br/>
                      Tree of Life
                    <br/>
                    <br/>
                    </h1>
                    <h2>World Builders </h2>
        <div>
        <br/>
        <br/>
        <br/>
          <h2>Init Image: <img src={InitImage} alt='Mecha Golem' style={{width: "380px", height:"380px"}} /></h2>
        </div>
        <br />
        <br />
        <h2>        
          <br />
          <br />
          Evolve them
        </h2>
        <form onSubmit={handleSubmit} className="form-group">
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

      <h2>{message}</h2>
    </form>
        <br />
        <br />
        <div className='row' style={{marginTop: 200, marginBottom: 200}}>
        { generationId ?
          leoImages.map( (leoImage, idx) =>(
            <div className='col-md-4' key={idx} >
              <img src={leoImage?.url} style={{width: "420px", height:"420px"}} alt='generations'/>
            </div>
          )) 
          : 
          <h4>Submit, wait and get the results</h4>
        }
        </div>
                </div>
            </div>
        </section>
        
        
        <Footer />

        </div>
    );
}

export default TreeOfLife;