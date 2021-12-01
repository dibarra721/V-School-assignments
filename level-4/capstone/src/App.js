import './App.css';
import React from "react"
import Form from './Form';
import { ContextProvider } from './Context';

export default function App() {
  return (

<div>


<ContextProvider>



    <h2>THis is a test this will be where my routes are Hello WOrld </h2>
<Form/>
  
  </ContextProvider>
    </div>
  )
}

