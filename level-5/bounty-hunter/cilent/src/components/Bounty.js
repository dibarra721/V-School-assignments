import React,{useState} from "react"
import BountyForm from "./BountyForm.js"


export default function Bounty (props) {

const {firstName, lastName, bounty, _id, living, type, imgUrl, deleteBounty,btnText} =props


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
<BountyForm
firstName={firstName}
lastName={lastName}
_id={_id}
bounty={bounty}
imgUrl={imgUrl}
btnText="Submit Edit"
submit={props.editBounty}
// toggleEdit={setEdit}

/>
<button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
    </>



                }
        </div>
    )
}