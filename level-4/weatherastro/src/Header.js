import './index.css'
import { Link,Routes, Route} from "react-router-dom"
import Horoscope from "./Horoscope"
import Moon from "./Moon"
// import {WeatherAstroContext} from "./WeatherContext"


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



<Routes>
    {/* <Route path="/" element={<WeatherData />}/> */}
    <Route path="/moon" element={<Moon />} render={() => <Moon/>} />
    <Route path="/horoscope" element={<Horoscope />}render={() => <Horoscope/>} />

    </Routes>


</div>



)

    
}