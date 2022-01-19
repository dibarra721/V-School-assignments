import React from "react"
import {Link} from "react-router-dom"



export default function Navbar(props){

    const {logout}= props

    return(
<div className="navBar">

 <nav>
  <ul>
  {/* <li><Link to="/">Home </Link></li> */}
  {/* <li><Link to ="/issues"> View Your Issues</Link></li> */}
  <li><Link to ="/public">Public</Link></li>
  <li><Link to ="/profile">Profile</Link></li>
  <button onClick={logout}>Logout</button>


  </ul>
</nav> 

</div>



    )
}