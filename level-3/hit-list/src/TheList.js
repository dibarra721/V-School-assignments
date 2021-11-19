import React from "react"


export default function List (props) {

    return(

        <div className="hitList" >
        <p className="names">Name:{props.name.name}</p>
        <img className="images" src={props.name.image} alt=""></img>
      </div>
      
    )
}