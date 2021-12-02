import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Moon from "./Moon";
import Form from "./Form";
import Horoscope from "./Horoscope";
import NavBar from "./NavBar";

export default function App() {

  const color= {backgroundColor:'#d71db2'}
  return (
        
    <><NavBar />
 <>
      <Routes>
        <Route path="/form" element={<Form />} render={() => <Form />} />
        <Route path="/moon" element={<Moon />} render={() => <Moon />} />
        <Route style={color} path="/horoscope" element={<Horoscope />} render={() => <Horoscope />} />
      </Routes>


    </></>
    

  )
}
