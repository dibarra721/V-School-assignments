import React, {useContext} from "react"
import {ThemeContext} from "./ThemeProvider"


export default function Footer() {
    const {theme}= useContext(ThemeContext)
return (
<footer className="footer">

    <h1 className={`${theme}-theme`}> Check this out 

<li>oh a footer</li>

</h1>

</footer>



)

}