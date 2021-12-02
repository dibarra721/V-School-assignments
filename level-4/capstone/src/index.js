import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ContextProvider } from './Context';
// import NavBar from "./NavBar"

ReactDOM.render(
  <BrowserRouter>
  <ContextProvider>
    <App />
  </ContextProvider>,
   </BrowserRouter>,
  document.getElementById('root')
)


