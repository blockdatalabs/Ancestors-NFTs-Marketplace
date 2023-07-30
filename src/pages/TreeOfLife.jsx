import React, { useState, useEffect } from 'react';
import InitImage from '../assets/images/tree/init-golem.jpg'
import Footer from '../components/footer/Footer';
import axios from 'axios';

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

    return (
        <div className='home-3 wrapper'>
          
        <section className="banner">
            <div className="container big">
                <div className="row">
                    <h2>
                    <br/>
                    <br/>
                      Tree of Life calling World Builders
                    <br/>
                    <br/>
                    </h2>
        <div className='col-md-6'>
        <br/>
        <br/>
        <br/>
          <h2>Init Image: <img src={InitImage} alt='Mecha Golem' style={{width: "380px", height:"380px"}} /></h2>
        </div>
        <br />
        <br />
        <div className='col-md-6'>
        <h2>        
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
          
          <h5>{message}</h5>
        </form>
        <br />
        <br />
      </div>
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
        <div className="block-text">
                                    <h3 className="heading">Join us for great 
                                          Events and alphas<br/>
                                         While interacting with like minded creators</h3>
                                         <a href="https://discord.com/invite/4mXg6QSyY8" className="action-btn" ><span style={{width: 540}}>Get Connected, wild adventures await you</span></a>
                                         
                                    <h2 className="heading"><br/>Ancestor Timeline Evolutions & Skins</h2>

                                    
                                </div>
                </div>
            </div>
        </section>
        
        
        <Footer />

        </div>
    );
}

export default TreeOfLife;