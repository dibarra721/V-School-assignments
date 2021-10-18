import React from "react"
import "./styles.css"

function dollar(props){
    let dollar = "";

    if (props > 1000) {
        dollar = "$$$";
    } else if (props < 500) {
        dollar = "$";
    } else {
        dollar = "$$";
    }

    return dollar;
}  


function VacationCard(props) {
console.log(props);


    return (
        <div>
            <h2>{props.location.place}</h2>
            <p>Price: {dollar(props.location.price)}<br></br>
            Best Time to Visit : {props.location.timeToGo}</p>
               
        </div>
    )

    }





export default VacationCard;

