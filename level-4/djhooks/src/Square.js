import React from "react"

export default function Square(props) {
  let squareColor = {backgroundColor : props.colors}
  return (
      <div >
        <p className="boxes" style={squareColor}></p>
      </div>
  )
}