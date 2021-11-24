import React, { useState } from "react";
import Square from "./Square";
import './App.css'


export default function App() {
const [color, setColor] =useState(["white", "white", "white", "white"])

function smallTimeDj() {
  setColor(prevColor => {
    if(prevColor[0] !== "white") {
      return ["white", "white", "white", "white"]
      } else if(prevColor[0] === "white") {
        return ["black", "black", "black", "black"]
      }
    })
  }

function partyDJ() {
  setColor(prevColor => {
    let newColors = [...prevColor]
    newColors[0] = "purple"
    newColors[1]= "purple"
    return newColors
  })
}

function proDj() {
  setColor(prevColor => {
    let newColors= [...prevColor]
    newColors[2]= "blue"
    return newColors
  })
}


function proDj2() {
  setColor(prevColor => {
    let newColors = [...prevColor]
    newColors[3]= "blue"
    return newColors
  })
}


function bigTimeDj1() {
  setColor(prevColor => {
    let newColors= [...prevColor]
    newColors[3] ="green"
    return newColors
  })
}

function bigTimeDj2() {
  setColor(prevColor =>{
    let newColors= [...prevColor]
    newColors[1]="red"
    return newColors
  })
}

function bigTimeDj3() {
  setColor(prevColor => {
    let newColors= [...prevColor]
    newColors[2]="peach"
    return newColors
  })
}


function bigTimeDj4() {
  setColor(prevColor => {
    let newColors = [...prevColor]
    newColors[3] = "orange"
    return newColors
  })
}

let boxColors = color.map((color, index) => 
<Square key={index} colors={color}/>)

return (
  <div>
      <h1 className="header">DJ React</h1>
        <div className="boxGrid">
          {boxColors}
        </div>
        <div className="buttons">
          <button onClick={smallTimeDj}>Small Time DJ</button>
          <button onClick={partyDJ}>Party Dj</button>
          <button onClick={proDj}>Left Bottom Blue</button>
          <button onClick={proDj2}>Right Bottom Blue</button>
          <button onClick={bigTimeDj1}>Big Time DJ 1</button>
          <button onClick={bigTimeDj2}>Big Time DJ 2</button>
          <button onClick={bigTimeDj3}>Big Time DJ 3</button>
          <button onClick={bigTimeDj4}>Big Time DJ 4</button>
        </div>
  </div>
)
}




