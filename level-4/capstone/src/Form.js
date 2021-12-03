import React, { useContext } from "react";
import { Context } from "./Context";

function Form() {
  // const [astroData, SetAstroData]= useState({})
  // const [weather, SetWeather] = useState ({})
  // const [zipcode, setZipCode]=useState("")
  document.body.style.backgroundColor = "#001d3d";

  const context = useContext(Context);
  
//  var iconCode= context.weather.current.condition.icon

  return (
    <>
      <div className="form">
        <h2>Enter your Zip Code to get Weather or Astronomy Information</h2>

        <form>
          <input
            type="number"
            value={context.zipcode}
            onChange={(e) => context.setZipCode(e.target.value)}
            placeholder="Enter Zip Code"
          />
          <br />
          <button onClick={context.getWeather}>Get Your Weather</button>
          <button onClick={context.getAstro}>Get Your Astronomy</button>
        </form>
      </div>

      <div className="container">
     

        {context.viewA === true ? 
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
         : null}

      </div>
<br/>
      <div className="weatherResults">
        <h1>ATest</h1>
        {context.viewW === true ? (
          <div className="weatherResults">
            <h4>Weather Data for Today</h4>
            <br />
            <p className="temp">
              Temperature: {context.weather.current.temp_f}
            </p>
            <p className="temp" /> Icon:
            <img alt="whoops" src={context.condition.icon}/>
          
            <br />
          </div>
        ) : null}
      </div>
    </>
  );
}
export default Form;
