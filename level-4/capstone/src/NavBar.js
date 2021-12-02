import React from "react"
import "./App.css"
import {Link} from "react-router-dom"



export default function NavBar(){

    return(
<div className="navBar">


 <nav>
  <ul>
  <li><Link to="/form">Weather and Astronomy</Link></li>
  <li><Link to="/moon">Moon Phase</Link></li>
  <li><Link to="/horoscope">Horoscope</Link></li>
  </ul>
</nav> 

</div>



    )
}