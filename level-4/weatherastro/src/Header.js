import react from "react"
import {Link} from "react-router-dom"
import '.index.css'


export default function Header () {

return(

<div>


<nav>
  <ul>
  <li><Link to="/">Weather and Astronomy</Link></li>
  <li><Link to="/moon">Moon Phases</Link></li>
  <li><Link to="/horoscope">Horoscope</Link></li>
  </ul>
</nav>




</div>






)





    
}