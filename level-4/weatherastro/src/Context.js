
import './index.css';
import React, { useState } from "react";
const Context= React.createContext()


function ContextProvider(props) {

const [astro, SetAstro]= useState({})
const [weather, SetWeather] = useState ({})
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
    SetAstro([data]);
    console.log(weather)
  })
}


// function handleChange(e){
//   const {name, value} = e.target
//       setZipCode({
//           [name]: value
//       })
// }
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
  <div>
    <Context.Provider value={{
      astro,
      weather,
      zipcode,
      getWeather,
      getAstro
    }}>
      {props.children}
    </Context.Provider>
</div>
)
}


export {ContextProvider,Context}




//     <><div className='weatherForm'>
//       <input
//         type="number"
//         value={zipcode}
//         onChange={(e) => setZipCode(e.target.value)}
//         placeholder='Enter Zip' />
//       <button className="submitButton" onSubmit={getWeather}>Get Your Weather</button>
//       <button className="astroButton" onSubmit={getAstro}> Get Your Astro</button>
//     </div>



//     <div>
// {astro.status === 200 ?

//     <div className='Results'>

//         <p className="temp">Astronomy Data for the Day: {astro.astronomy.astro.moonrise}</p>
//       </div>
//       :null

      
//       </div></>
// {/* <p className="temp">Weather: {weather.current}</p> */}




