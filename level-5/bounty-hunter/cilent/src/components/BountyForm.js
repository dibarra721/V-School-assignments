import React, { useState } from "react";

export default function BountyForm(props) {
  const intiInputs = {
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    living: props.living || "",
    type: props.type || "",
    bounty: props.bounty || "",
    imgUrl: props.imgUrl || "",
  };
  const [inputs, setInputs] = useState(intiInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addBounty(inputs);
    setInputs(intiInputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      First Name:
      <input
        type="text"
        name=""
        value={inputs.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      <br />
      Last Name:
      <input
        type="text"
        name=""
        value={inputs.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
      />
      <br />
      Bounty:
      <input
        type="number"
        name=""
        value={inputs.bounty}
        onChange={handleChange}
        placeholder="Bounty"
        required
      />
      <br />
      Image:
      <input
        type="text"
        name=""
        value={inputs.imgUrl}
        onChange={handleChange}
        placeholder="Img Url"
        required
      />
      <br />
      <label id="type">Jedi or Sith</label>
      <select id="type" onChange={handleChange} value={inputs.type}>
        <option>Select Type</option>
        <option value="Jedi">Jedi</option>
        <option value="Sith">Sith</option>
      </select>
      <button>{props.btnText}</button>
    </form>
  );
}
