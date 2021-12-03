import React, { useState } from "react"
const Context=React.createContext()

function ContextProvider(props) {

const [astroData, SetAstroData]= useState({})
const [weather, SetWeather] = useState ({})
const [zipcode, setZipCode]=useState("")
const [viewA, SetViewA]=useState(false)
const [viewW, SetViewW]=useState(false)


const getWeather =(e) => {
    e.preventDefault()
    const URL="http://api.weatherapi.com/v1/current.json?key=63c946476ed74b1489f174418212611"
      fetch(`${URL}&q=${zipcode}`,
    )
    .then ((response)=> {
      // SetResponse([response])
      if (response.ok) {
        console.log(response.status)
        return response.status.json();
    }else {
      if (response.status === 404)
      return alert ("Not sure what happened, try again")
    }
    })
    .then ((data)=> {
      SetWeather([data]);
      SetViewW(true)
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
      SetViewA(true)
      console.log(data)
    })
  }
      
return ( 
    <div>
<Context.Provider value={{
    astroData,
    viewA,
    viewW,
    zipcode,
    weather,
    getAstro,
    getWeather,
    setZipCode,
}}>
    {props.children}

</Context.Provider>


    </div>
)  

}

export {ContextProvider,Context}