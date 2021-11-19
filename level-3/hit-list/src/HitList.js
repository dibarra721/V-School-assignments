import React, { useState, useEffect} from "react";
import "./style.css";
import TheList from './TheList.js'


function HitList () {

  const [hitList, SetHitList] =useState([])

useEffect(()  => {
    fetch(
      "https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json"
    )
      .then((response) => response.json())
      .then(data => {
        SetHitList(() => [...data])
    
      })
  }, [])



  const list = hitList.map((name, index) => 
  <TheList
  key={index}
  name={name}
/>)
      
  
    return (
    
    <>
    <header className="header">
        <h1>Don Carleone's Hit List</h1>
      </header>

          <div className="nameContainer">
            {list}
            </div>
          
          </>
        
    );
 
          }
export default HitList
