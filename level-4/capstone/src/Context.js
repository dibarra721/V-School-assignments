import React, { useState } from "react"
const Context=React.createContext()

function ContextProvider(props) {

const [astroData, SetAstroData]= useState({})
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
      console.log(weather)
    })
  }
  
//   In Case I can't use context on the Form *
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
      SetAstroData(data);
      console.log(data)
    })
  }
      
return ( 
    <div>
<Context.Provider value={{
    astroData,
    zipcode,
    weather,
    getAstro,
    getWeather
}}>
    {props.children}
    
</Context.Provider>


    </div>
)  

}

export {ContextProvider,Context}