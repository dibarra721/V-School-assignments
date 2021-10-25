import React from "react"
import './Style.css'


function DiceBox (props){
    return(
    <div className="diceContainer">
        <div className="num">
            <h3>Dice Values</h3>
        <button className="die">Dice 1 :{props.number.num1}</button>
        <button className="die">Dice 2 :{props.number.num2}</button>
        <button className="die">Dice 3 :{props.number.num3}</button>
        <button className="die">Dice 4 :{props.number.num4}</button>
        <button className="die">Dice 5 :{props.number.num5}</button>
</div>
    </div>
    )
}


    export default DiceBox;