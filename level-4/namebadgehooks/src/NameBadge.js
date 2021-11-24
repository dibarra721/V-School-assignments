import React from "react";
import "./App.css";


export default function NameBadge(props) {
  return (
    <div className="nameBadge">
   
      <div className="container">
        <h3>
          Name: {props.name.firstName} {props.name.lastName}
        </h3>
        Phone: {props.name.phoneNumber}
        Place of birth: {props.name.placeOfBirth}
        Favorite Food: {props.name.favoriteFood}
        Email: {props.name.email}
        About:{props.name.description}
      </div>
    </div>
  )
}
