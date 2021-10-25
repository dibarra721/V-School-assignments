import React from "react";
import DiceBox from "./DiceBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    numbers: [{
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
    }]
    }
  }

  rollDice = () => {
    this.setState((prevState) => {
      return {
        numbers: [
          {
            num1: (prevState.num1 = Math.floor(Math.random() * 6) + 1),
            num2: (prevState.num2 = Math.floor(Math.random() * 6) + 1),
            num3: (prevState.num3 = Math.floor(Math.random() * 6) + 1),
            num4: (prevState.num4 = Math.floor(Math.random() * 6) + 1),
            num5: (prevState.num5 = Math.floor(Math.random() * 6) + 1),
            num6: (prevState.num6 = Math.floor(Math.random() * 6) + 1),
          }]
      }
    })
  
 } 
 clearDice = () => {
   this.setState(prevState => {
     return {
       numbers : [{
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
     }]
   }
  })
}
 render () {
   const dice = this.state.numbers.map((number) => (
   <DiceBox
   key={number.id}
   number={number}
   />
   ))
     return (
       <div>
         {dice}
         <button onClick={this.rollDice}>Roll Dice</button>
         <button onClick={this.clearDice}>Clear Dice</button>
       </div>

   )
     }
 }




export default App;
