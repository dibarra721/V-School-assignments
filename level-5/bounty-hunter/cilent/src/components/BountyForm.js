import React, { useState } from "react";

export default function BountyForm(props) {
  const intiInputs = {
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    living: props.living || "",
    bounty: props.bounty || 0,
    imgUrl: props.imgUrl || "",
    type: props.type || "",
  };
  const [inputs, setInputs] = useState(intiInputs);

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value }));
  }

  function handleSubmit(e){
    e.preventDefault()
    props.submit(inputs, props._id)
    setInputs(intiInputs)
    if(props._id){
        props.toggleEdit(prevEdit => !prevEdit)
    }
}

  return (
<div className="formContainer">

    <form onSubmit={handleSubmit}>
      <h2>Add Your Bounty</h2>
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
      <select onChange={handleChange} value ={inputs.living} type="living" id="living"  name="living" required>
        
    <option >Alive or Dead</option>
    <option value='Alive'>Alive</option>
    <option value='Dead'>Dead</option>

    </select>
      <br />
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
     Jedi or Sith :

   {/* <input
        type="text"
        name="type"
        value={inputs.type}
        onChange={handleChange}
        placeholder="Sith or Jedi"
        required
      />  */}

       <select onChange={handleChange} value={inputs.type} name="type" required>
        <option>Select Type</option>
        <option value="Jedi">Jedi</option>
        <option value="Sith">Sith</option>
      </select>

      <button>{props.btnText}</button>
    </form>
    </div>
  );
}
