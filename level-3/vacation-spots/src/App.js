import React from "react";
import vacationCard from "./vacationCard";
import data from "./data";


function App() {
    const Cards = data.map(item => <vacationCard key ={item.place} location={item} season={item.timeToGo} price={item.price} />)
return (
    <div>
    <header>Which Vacation Spot is for your</header>
    {Cards}

    </div>
    )
}







export default App;
