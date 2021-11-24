import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import Footer from "./Footer"
import NavBar from './NavBar';
import Main from './Main'
import "./Styles.css"


ReactDOM.render(
  <Router>
    <NavBar />
    <Main />
    <Footer/>
  </Router>,
  document.getElementById('root')
)

