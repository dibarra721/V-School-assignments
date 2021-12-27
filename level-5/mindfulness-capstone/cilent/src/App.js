import React from "react"
import {Route, Routes} from "react-router-dom"
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import JournalList from "./components/JournalList"
import Mindfulness from "./components/Mindfulness";
import Home from "./components/Home";

export default function App() {

  return(
    <><div className="wrapper">
      <NavBar />
    
      <Routes>
        <Route path="/" element={<Home />} render={() => <Home />} />
        <Route path="/journals" element={<JournalList />} render={() => <JournalList />} />
        <Route path="/mindfulness" element={<Mindfulness />} render={() => <Mindfulness />} />

      </Routes>


    </div><Footer /></>
  )
}