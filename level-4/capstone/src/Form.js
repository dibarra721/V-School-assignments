import React, { useContext } from "react";
import { Context } from "./Context";

function Form() {

  // document.body.style.backgroundColor = "#001d3d";

  const context = useContext(Context);
  
  return (
   
      <div className="formWrapper">
        <h2>Enter your Zip Code to get Weather or Astronomy Information</h2>

        <form onSubmit={context.getWeather} >
          <input
            type="number"
            value={context.zipcode}
            onChange={(e) => context.setZipCode(e.target.value)}
            placeholder="Enter Zip Code"
            
          />
          <br />
          <button >Get Your Weather</button>
          <button onClick={context.getAstro}>Get Your Astronomy</button>
        </form>
        
  

      <div className="container">
     

        {context.viewA === true ? (
          <div className="astroResults">
           
           <h3>Astronomy Data for Today</h3>

            <p className="temp">
              Moonrise: {context.astroData.astronomy.astro.moonrise}
            </p>
            <p className="temp">
              Sunrise: {context.astroData.astronomy.astro.sunrise}
            </p>
            <p className="temp">
              Sunset: {context.astroData.astronomy.astro.sunset}
            </p>
            <p className="temp">
              Moonset: {context.astroData.astronomy.astro.moonset}
            </p>
            <p className="temp">
              Moonphase: {context.astroData.astronomy.astro.moon_phase}
            </p>
          </div>
        ): null}

      </div>

      <div className="weatherBox">
        {context.viewW === true ? (
          <div className="weatherResults">
            <h4>Weather Data for Today</h4>
            <br />
            <p className="location">
              Location: {context.weather.location.name}
            </p>
            <p className="temp">
              Temperature: {context.weather.current.temp_f}°F
            </p>
            <p className="icon" > Icon:</p>
            <img alt="whoops" src={context.weather.current.condition.icon}/>

            <br />
          </div>
        ) : null}
      </div>

      </div>
    
  )
}
export default Form
