import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Moon from "./Moon";
import Form from "./Form";
import Horoscope from "./Horoscope";
import NavBar from "./NavBar";

export default function App() {

  return (
        
    <><NavBar />
 <>
      <Routes>

        <Route path="/form" element={<Form />} render={() => <Form />} />
        <Route path="/moon" element={<Moon />} render={() => <Moon />} />
        <Route path="/horoscope" element={<Horoscope />} render={() => <Horoscope />} />
        <Route path="/"  element={<Form />}  render={() => <Form />}/>

      </Routes>

{/* <h2>Hello Welcome to this Site. You can grab your weather and astronomy. You can also grab your horoscope. Click from one of the options from the Navigtion Bar.</h2> */}
    </></>
    

  )
}
