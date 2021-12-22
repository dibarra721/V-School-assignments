import React from "react"
import {Route, Routes} from "react-router-dom"
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import JournalList from "./components/JournalList"
import Form from "./components/Form";
import Mindfulness from "./components/Mindfulness";

export default function App() {

  return(
    <><div className="wrapper">
      <NavBar />
    
      <Routes>
        <Route path="/" element={<Form />} render={() => <Form />} />
        <Route path="/journals" element={<JournalList />} render={() => <JournalList />} />
        <Route path="/mindfulness" element={<JournalList />} render={() => <Mindfulness />} />

      </Routes>


    </div><Footer /></>
  )
}