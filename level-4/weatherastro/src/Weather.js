
import './index.css';
import React, { useState } from "react";
import Astronomy from './Astronomy';
// import axios from "axios";
// import WeatherData from './WeatherData';


export default function Weather() {


const [astro, SetAstro]= useState({
  // astronomy:[{
  //  sunrise: "",
  // sunset: "",
  // moonrise: "",
  // moonset: "",
  // moon_phase: "",
  // moon_illumination: "",
  // }]
  // sunrise: "",
  // sunset: "",
  // moonrise: "",
  // moonset: "",
  // moon_phase: "",
  // moon_illumination: "",

})

const [weather, SetWeather] = useState ({
  // temp_f: "",
  //   text: "",
  //   icon: ""
    })
const [zipcode, setZipCode]=useState("")

const getWeather =(e) => {
  e.preventDefault()
  const URL="http://api.weatherapi.com/v1/current.json?key=63c946476ed74b1489f174418212611"
    fetch(`${URL}&q=${zipcode}`,
  )
  .then ((response)=> {
    if (response.ok) {
      console.log(response.status)
      return response.json();
  }else {
    if (response.status === 404)
    return alert ("Not sure what happened, try again")
  }
  })
  .then ((data)=> {
    SetWeather([data]);
    console.log(weather)
  })
}

const getAstro=(e) => {
  e.preventDefault()
  const URL= "http://api.weatherapi.com/v1/astronomy.json?key=63c946476ed74b1489f174418212611"
  fetch(`${URL}&q=${zipcode}`,
  console.log(zipcode),
   {
	"method": "GET",
	
}) 
  .then ((response)=> {
    if (response.ok) {
      console.log(response.status)
      return response.json();
  }else {
    if (response.status === 404)
    return alert ("Not sure what happened, try again")
  }
  })
  .then ((data)=> {
    SetAstro(data);
    console.log(data)
  })
}


  
  



  return (
    <>
    <div className='weatherForm'>
      <input
        type="number"
        value={zipcode}
        onChange={ (e) => setZipCode(e.target.value)}
        placeholder='Enter Zip' />
        <button className="submitButton" onSubmit={getWeather}>Get Your Weather</button>
        <button className="astroButton" onSubmit={getAstro}> Get Your Astro</button>
    </div>
    <div className='Results'>


{/* <p className="temp">Astronomy Data for the Day : {astro.astronomy.astro.moonrise}</p> */}
{/* <p className="temp">Weather: {weather.current}</p> */}



{/* <Astronomy
astro={astro}
/>
{astro} */}

      </div>
      
      
      </>
  )
}


