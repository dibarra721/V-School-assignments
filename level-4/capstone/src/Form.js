import React, { useContext } from "react";
import { Context } from "./Context";

function Form() {
  // const [astroData, SetAstroData]= useState({})
  // const [weather, SetWeather] = useState ({})
  // const [zipcode, setZipCode]=useState("")

  const context = useContext(Context);

  return (
    <><div className="form">
          <h2>Enter your Zip Code to get Weather  or Astronomy Information</h2>

          <form>
              <input
                  type="number"
                  value={context.zipcode}
                  onChange={(e) => context.setZipCode(e.target.value)}
                  placeholder="Enter Zip" />
              <button oClick={context.getWeather}>Get Your Weather</button>
              <button oClick={context.getAstro}>Get Your Astronomy</button>
          </form>
      </div>


      <div className="astroResults">
      {astroData.status === 200 ?

<div className='astroResults'>
<h3>Astronomy Data for Today</h3><br/>
    <p className="temp">Moonrise: {astroData.astronomy.astro.moonrise}</p>
    <p className="temp">Sunrise: {astroData.astronomy.astro.sunrise}</p>
    <p className="temp">Sunset: {astroData.astronomy.astro.sunset}</p>
    <p className="temp">Moonset: {astroData.astronomy.astro.moonset}</p>
    <p className="temp">Moonphase: {astroData.astronomy.astro.moon_phase}</p>

</div>
: null

}

          </div>


<div className="weatherResults">

{weather.status === 200 ?

<div className='weatherResults'>
<h3>Weather Data for Today</h3><br/>
    <p className="temp">Temperature: {weather.current.temp_f}</p>
    <p className="temp">Icon: {weather.current.condition.icon}</p>


</div>
: null

}
    
</div>




          </>




  );
}
export default Form