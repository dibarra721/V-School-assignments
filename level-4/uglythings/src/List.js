import React, {useContext} from "react"
import Thing from "./Thing"
import "./App.css"


import {UglyThingsContext} from "./uglyContext"

function List() {
    const context = useContext(UglyThingsContext)
    const list = context.listOfUgly.map((thing) => <Thing thing={thing} key={thing._id}/>)
    
    return (
        <div className="uglyResults">
            <h1>Your List of Ugly Things</h1>
            {list}
        </div>
    )
}

export default List