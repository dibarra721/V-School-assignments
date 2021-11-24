import React, {useContext} from "react";
import {ThemeContext} from "./ThemeProvider"

export default function Header() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme}-theme`} style={{height:'70px'}} id="header">
      <ul className="navBarList">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

