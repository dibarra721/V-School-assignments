import React, { useState} from "react";
// import { UserContext } from "../../context/UserProvider";


const initInputs = {
    title: "",
     description: ""
  }

export default function AddIssueForm(props) {
    
      const [ inputs, setInputs ] = useState(initInputs)
      const { addIssue } = props
      
      
      function handleChange(e){
          const { name, value } = e.target
          setInputs(prevInputs => ({
              ...prevInputs,
               [name]: value
            }))
        }
        
        function handleSubmit(e){
            e.preventDefault()
            addIssue(inputs)
            setInputs(initInputs)
        }
        
        const { title, description } = inputs





        
    return(
   
    

<form onSubmit={handleSubmit}>

<input
type ="text"
name="title"
value={title}
placeholder="name of issue"
onChange={handleChange}
required

/>


<textarea
type="text"
name="description"
value={description}
placeholder="what is the issue"
onChange={handleChange}
required
/>
<br/>
<button type="submit"  >Post issue</button>

</form>

        
        
     
    )
}