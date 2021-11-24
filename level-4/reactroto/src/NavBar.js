import React from "react"
import {Link} from "react-router-dom"
import './Styles.css'

export default function NavBar() {
  return (

    <div>
<nav>
  <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/services">Services</Link></li>
  </ul>
</nav>
    {/* <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />} render={() => <About/>} />
    <Route path="/services" element={<Services />}render={() => <Services/>} />

    </Routes> */}

      </div>
  )
}
