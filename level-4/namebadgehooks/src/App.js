import React, { useState } from "react";
import "./App.css";
import NameBadge from "./NameBadge.js";

export default function App() {
  const [data, setData] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    about: "",
  });

  const [nameBadge, setNameBadge] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setNameBadge((prevNameBadge) => [data, ...prevNameBadge]);
    setData((prevData) => ({
      id: (prevData.id += 1),
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      about: "",
    }));
  }

  const badge = nameBadge.map((name) => (
    <NameBadge key={name.id} name={name} />
  ));

  return (
    <><div className="box">
      <form className="nameForm" onSubmit={handleSubmit}>
        First Name:
        <input
          placeholder="first name"
          minLength={"3"}
          type={"text"}
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          required="Required" />
        <br />
        Last Name:
        <input
          placeholder="last name"
          minLength={"3"}
          type={"text"}
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          required="Required" />
        <br />
        Email:
        <input
          type="text"
          minLength={"3"}
          placeholder="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required="Required" />
        <br />
        Place of Birth :
        <input
          type="text"
          minLength={"3"}
          placeholder="birth of place"
          name="placeOfBirth"
          value={data.placeOfBirth}
          onChange={handleChange}
          required="Required" />
        <br />
        Phone:
        <input
          type="number"
          minLength={"10"}
          placeholder="phone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          required="Required" />
        <br />
        Favorite Food:
        <input
          type="text"
          minLength={"3"}
          placeholder="favorite food"
          name="favoriteFood"
          value={data.favoriteFood}
          onChange={handleChange}
          required="Required" />
        <br />
        About:
        <textarea
          type="text"
          minLength={"3"}
          placeholder="about"
          name="about"
          value={data.about}
          onChange={handleChange}
          required="Required"
          textarea />
        <br />
        <button>Submit</button>
      </form>

    </div><div className="nameContainer">
    <h1>Name Badge</h1><br/>
        {badge}
      </div></>
  )
}
