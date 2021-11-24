import React from "react"
import Home from "./Home"
import Services from "./Services"
import About from "./About"
import { Routes, Route} from "react-router-dom"


export default function Main() {
    return(
    //   <><NavBar />
    <div className="main">
        {/* <NavBar/> */}
         {/* <About/>
        <Home/>
        <Services/> */}


<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />} render={() => <About/>} />
    <Route path="/services" element={<Services />}render={() => <Services/>} />

    </Routes>
     
      </div>
      
    )
}
