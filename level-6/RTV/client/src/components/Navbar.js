import React from "react"
import {Link} from "react-router-dom"



export default function Navbar(){

    return(
<div className="navBar">

 <nav>
  <ul>
  <li><Link to="/">Home </Link></li>
  <li><Link to ="/issues">Issues</Link></li>
  <li><Link to ="/mindfulness">Mindfulness Tips</Link></li>
  <li><Link to ="/feelings">Feelings Wheel</Link></li>


  </ul>
</nav> 

</div>



    )
}