import React,{useState} from "react"
import AddBountyForm from "./BountyForm.js"


export default function Bounty (props) {
const {firstName, lastName, bounty, _id, living, type} =props


const [editToggle, setEditToggle]= useState(false)






    return(


        <div className="bountyCard">
            { !editToggle ?
                <><h1>First Name:{firstName}</h1>
                <h1>Last Name:{lastName}</h1>
                <p>{living}</p>
                <p>{bounty}</p>
                <p>{type}</p>
                <button className="deleteButton" onClick={() => props.deleteBounty(_id)}>Delete</button>
                <button
                className="editButton"
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                   
</>

:
<>
<AddBountyForm
firstName={firstName}
living={living}
btnText="Submit Edit"
/>
<button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
    </>



                }
        </div>
    )
}