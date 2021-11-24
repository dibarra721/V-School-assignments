import React from "react"
import List from "./List"
import Header from "./Header"
import UglyThingsForm from "./UglyThingsForm"
import "./App.css"


function App() {
    return (
        <div>
            <Header />
            <UglyThingsForm />
            <List />
        </div>
    )
}

export default App