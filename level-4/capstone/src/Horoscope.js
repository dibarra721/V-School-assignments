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
      console.log(view)
  }
  


    return (
      <div className="intel">
        <center>
        <img src="https://i.ibb.co/z7Mhj5R/toppng-com-astrology-wheel-constellations-astrology-wheel-800x796.png" alt="toppng-com-astrology-wheel-constellations-astrology-wheel-800x796" border="0" className="center"/>
        </center> 

      <center><h6> What Are the Zodiac Sign Dates?</h6>
Aries Dates: March 21-April 19<br/>

Taurus Dates: April 20-May 20<br/>

Gemini Dates: May 21-June 20<br/>

Cancer Dates: June 21-July 22<br/>

Leo Dates: July 23-August 22<br/>

Virgo Dates: August 23-September 22<br/>

Libra Dates: September 23-October 22<br/>

Scorpio Dates: October 23-November 21<br/>

Sagittarius Dates: November 22-December 21<br/>

Capricorn Dates: December 21-January 20<br/>

Aquarius Dates: January 21-February 18<br/>

Pisces Dates: February 19-March 20<br/>
</center> <br/>



      <div className='astrologyBox' class="cursor-auto">
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={ (e) => SetSign(e.target.value)}
          value={sign}
          placeholder='Enter Sign' 
         required
         />
        <center> <button className="submitButton" >Get Your Horoscope</button></center>
        </form> 
      </div>


        {astro.json ? (
      <div className='results'>
        <h2> Your horoscope for {astro.json.current_date}</h2>
    
    <p className="temp">Description: {astro.json.description}</p>
    <p className="temp">Color: {astro.json.color}</p>
    <p className="temp">Mood: {astro.json.mood}</p>
    <p className="temp">Lucky Time: {astro.json.lucky_time}</p>
    <p className="temp">Lucky Number: {astro.json.lucky_number}</p>
    <p className="temp">Compatibility : {astro.json.compatibility}</p>

    </div>
        ) : null}
    
        
      
        
        </div>
    )
    }
    



