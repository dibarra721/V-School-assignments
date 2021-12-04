import React, {useState} from "react"
// import './Horoscope.css'

export default function Horoscope(){
  document.body.style.backgroundColor = "#d71db2";

   
    const [astro, setAstro]=useState({})
    
    const [sign, SetSign]=useState("")
    const [view, SetView]=useState(false)
    
      const handleSubmit = (e) => {
        e.preventDefault()
        const URL="https://aztro.sameerkumar.website/";
        fetch(`${URL}?sign=${sign}&day=today`,{
            method: 'POST'
        })
        .then(response => response.json())
    
      
        .then(json => {setAstro({json})
        SetSign("") 
      SetView(true)});
        console.log(astro)
    }
    
      
      
      
    
    return (
      <div className="intel">
        <center>
        <img src="https://i.ibb.co/z7Mhj5R/toppng-com-astrology-wheel-constellations-astrology-wheel-800x796.png" alt="toppng-com-astrology-wheel-constellations-astrology-wheel-800x796" border="0" className="center" />
        </center> <br/>
      <div className='astrologyBox'>
        <form>
        <input
          type="text"
          onChange={ (e) => SetSign(e.target.value)}
          value={sign}
          placeholder='Enter Sign' />
          <button className="submitButton" onClick={handleSubmit}>Get Your Horoscope</button>
         </form> 
      </div>

        {view === true ? (
      <div className='results'>
        <h6> Your horoscope for {astro.json.current_date}</h6>
    
    <p className="temp">Description: {astro.json.description}</p>
    <p className="temp">Color: {astro.json.color}</p>
    <p className="temp">Mood: {astro.json.mood}</p>
    <p className="temp">Lucky Time: {astro.json.lucky_time}</p>
    <p className="temp">Lucky Number: {astro.json.lucky_number}</p>
    <p className="temp">Compatibility : {astro.json.compatibility}</p>

    </div>
        ) : null}
    
        
          {/* {weather.moon_phase} */}
        
        
        </div>
    )
    }
    



