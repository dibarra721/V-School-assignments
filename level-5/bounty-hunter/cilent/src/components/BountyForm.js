import React, { useState } from "react";

export default function BountyForm(props) {
  const intiInputs = {
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    living: props.living || "",
    type: props.type || "",
    bounty: props.bounty || 0,
    imgUrl: props.imgUrl || "",
  };
  const [inputs, setInputs] = useState(intiInputs);

  function handleChange(e) {
    const { name, value } = e.target
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submit(inputs, props._id);
    setInputs(intiInputs);
  }

  return (
<div className="formContainer">

    <form onSubmit={handleSubmit}>
      <h1>Add Your Bounty</h1>
      First Name:
      <input
        type="text"
        name="firstName"
        value={inputs.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <br />
      Last Name:
      <input
        type="text"
        name="lastName"
        value={inputs.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <br />
      Living:
      
      <select id="type" onChange={handleChange} value={inputs.living} name="type">
        <option>Select Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
      </select>
      <br />
      Bounty:
      <input
        type="number"
        name="bounty"
        value={inputs.bounty}
        onChange={handleChange}
        placeholder="Bounty"
        required
      />
      <br />
      Image:
      <input
        type="text"
        name="imgUrl"
        value={inputs.imgUrl}
        onChange={handleChange}
        placeholder="Img Url"
        required
      />
      <br />
     Jedi or Sith 
      <select id="type" onChange={handleChange} value={inputs.type} name="type">
        <option>Select Type</option>
        <option value="Jedi">Jedi</option>
        <option value="Sith">Sith</option>
      </select>

      <button>{props.btnText}</button>
    </form>
    </div>
  );
}
