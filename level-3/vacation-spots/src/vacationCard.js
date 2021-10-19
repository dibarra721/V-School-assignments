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


function setColor(props) {
    let color = "";

    if (props === "Spring") {
        color = "#27AE60 ";
    } else if (props === "Winter") {
        color = "#3498DB ";
    } else if (props === "Fall") {
        color = "#FFBF00";
    } else {
        color = "#F7DC6F";
    }

    return color;
}



function VacationCard(props) {
console.log(props);


    return (
        <div className="CardDiv" style={{backgroundColor:setColor(props.location.timeToGo)}} >
            <h2>{props.location.place}</h2><hr></hr>
            <p>Price: {dollar(props.location.price)}<br></br><hr></hr>
            Best Time to Visit : {props.location.timeToGo}</p><hr></hr>
               
        </div>
    )

    }





export default VacationCard;

