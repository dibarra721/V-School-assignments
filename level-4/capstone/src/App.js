import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Moon from "./Moon";
import Form from "./Form";
import Horoscope from "./Horoscope";
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";

export default function App() {
  document.body.style.backgroundColor = "#d71db2";

  return (
        
    <><NavBar />
 <>
      <Routes>

        <Route path="/form" element={<Form />} render={() => <Form />} />
        <Route path="/moon" element={<Moon />} render={() => <Moon />} />
        <Route path="/horoscope" element={<Horoscope />} render={() => <Horoscope />} />
        <Route path="/"  element={<Home />}  render={() => <Home />}/>

      </Routes>


    </>
      <Footer/>
      </>

  )
}
