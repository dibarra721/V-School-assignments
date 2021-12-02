import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Moon from "./Moon";
import Form from "./Form";
import Horoscope from "./Horoscope";
import NavBar from "./NavBar";

export default function App() {
  return (
    
        <>
        <Routes>
      <Route path="/" element={<Form />} render={() => <Form />} />
      <Route path="/moon" element={<Moon />} render={() => <Moon />} />
      <Route path="/horoscope" element={<Horoscope />} render={() => <Horoscope />} />
    </Routes>
    
    
    <NavBar />
    <Form />
    </>
    

  )
}
