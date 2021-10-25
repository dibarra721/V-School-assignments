import React from "react";
import "./App.css"

function Badge(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          value={props.firstName}
        />
        <br />
        <input
         placeholder="last name" 
         type="text"
         name="lastname"
        value={props.lastName} />
        <br />
        <input
         placeholder="email" 
         name="email" 
         value={props.email}
         type="text"
         />
        <br />
        <input
          placeholder="birth of place"
          name="place of birth"
          value={props.placeOfBirth}
          type="text"

        />
        <br />

        <input
          placeholder="phone"
          name="phone"
          type="number"
          value={props.phone}
        />
        <br />

        <input
          placeholder="favorite food"
          name="favorite food"
          value={props.favoriteFood}
          type="text"

        />
        <br />

        <input placeholder="about"
         name="about" 
         value={props.about} 
         type="text"
         />
        
        <br />
      </form>
    </div>
  )
}

export default Badge;
