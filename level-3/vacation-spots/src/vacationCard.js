import React from "react"
import "./styles.css"


function VacationCard(props) {



    
    return (
        <div>
            <h2>{props.location.place}</h2>
            <p>Price: {props.location.price}
            -Best Time to Visit : {props.location.timeToGo}</p>
               
        </div>
    )



}



export default VacationCard;

