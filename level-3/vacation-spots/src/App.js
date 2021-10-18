import React from "react";
import VacationCard from './VacationCard';
import data from "./data";

function App() {
  const cards = data.map((item) => (
    <VacationCard
      key={item.id}
      location={item}
      time={item.timeToGo}
      price={item.price}
    />
  ))
  return (
    <div>
      <header>Which Vacation Spot is for your</header>
      {cards}
    </div>
  )
}

export default App;
