import React, {useState} from "react"
import './index.css'

export default function Horoscope(){

   
    const [astro, setAstro]=useState({
      // color:"",
      // description:"",
      // mood:""
    })
    
    const [sign, SetSign]=useState("")
    
      const handleSubmit = (e) => {
        e.preventDefault()
        const URL="https://aztro.sameerkumar.website/";
        fetch(`${URL}?sign=${sign}&day=today`,{
            method: 'POST'
        })
        .then(response => response.json())
    
      
        .then(json => {setAstro({json}); });
        console.log(astro)
    }
    
      
    
    
    
    
    // const oneSign= astro.map((sign) => 
    // <sign={sign}
    //   key={id} />)
      
      
    
    return (
      <>
      <div className='weatherForm'>
        <input
          type="text"
          onChange={ (e) => SetSign(e.target.value)}
          value={sign}
          placeholder='Enter Sign' />
          <button className="submitButton" onClick={handleSubmit}>Get Your Astro Today</button>
          {/* <button className="astroButton" onClick={getAstro}> Get Your Astro</button> */}
      </div>
      <div className='Results'>
    
    <p className="temp">Current Temperature: {astro.description}</p>
    {/* <p className="temp">Current Temperature: {weather.location}</p> */}
    
        
          {/* {weather.moon_phase} */}
        </div>
        
        
        </>
    )
    }
    



