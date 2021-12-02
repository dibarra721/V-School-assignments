import React, { useContext } from "react";
import { Context } from "./Context";
// import './src/Images'

function Form() {
  // const [astroData, SetAstroData]= useState({})
  // const [weather, SetWeather] = useState ({})
  // const [zipcode, setZipCode]=useState("")
  document.body.style.backgroundColor = "#001d3d";

  const context = useContext(Context);

  return (
    <><div className="form">
          <h2>Enter your Zip Code to get Weather  or Astronomy Information</h2>

          <form>
              <input
                  type="number"
                  value={context.zipcode}
                  onChange={(e) => context.setZipCode(e.target.value)}
                  placeholder="Enter Zip Code" />
                  <br/>
              <button onClick={context.getWeather}>Get Your Weather</button>
              <button onClick={context.getAstro}>Get Your Astronomy</button>
          </form>
      </div>


      <div className="astroResults">
      {context.astroData.status === 200 ?

<div className='astroResults'>
<h3>Astronomy Data for Today</h3><br/>
    <p className="temp">Moonrise: {context.astroData.astronomy.astro.moonrise}</p>
    <p className="temp">Sunrise: {context.astroData.astronomy.astro.sunrise}</p>
    <p className="temp">Sunset: {context.astroData.astronomy.astro.sunset}</p>
    <p className="temp">Moonset: {context.astroData.astronomy.astro.moonset}</p>
    <p className="temp">Moonphase: {context.astroData.astronomy.astro.moon_phase}</p>

</div>
: null

}

          </div>


<div className="weatherResults">

{context.weather.status === 200 ?

<div className='weatherResults'>
<h4>Weather Data for Today</h4><br/>
    <p className="temp">Temperature: {context.weather.current.temp_f}</p>
    {/* <p className="temp">Icon: <img 
    alt=""
    src= {{context.weather.current.condition.${icon}}
    "//cdn.weatherapi.com/weather/Images/day/116.png"
    
    </p> */}
<br/>

</div>
: null

}
    
</div>




          </>




  );
}
export default Form