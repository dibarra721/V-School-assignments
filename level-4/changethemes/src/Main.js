import React, { useContext } from "react";
import {ThemeContext} from "./ThemeProvider";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

export default function Main() {
  const {theme, toggleTheme} = useContext(ThemeContext)


  const icon = theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;


  return (
    <div className={`${theme}-theme main`} id="main">
        <h1>Click the Button Below to change the Theme</h1>
      <button className={`${theme}-theme`} onClick={toggleTheme}>
       {icon}
      </button> 

 
    </div>
  )
}

