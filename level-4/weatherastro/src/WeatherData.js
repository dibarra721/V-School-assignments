import React from "react"


export default function WeatherData (props) {

    return(

        <div className="weather" >
        <p className="names">Name:{props.name.name}</p>
        <p className="sunrise"> Sunrise:{props.name.sunrise} </p>
        <p className="sunset"> sunset:{props.name.sunset} </p>

      </div>
      
    )
}