import React,{useState} from "react"
import BountyForm from "./BountyForm.js"


export default function Bounty (props) {

const {firstName, lastName, bounty, _id, living, type, imgUrl, deleteBounty} =props


const [editToggle, setEditToggle]= useState(false)


    return(


        <div className="bountyCard">
            { !editToggle ?
                <>
             <img src={imgUrl} alt=" notfound" style={{height: "150px", width: "150px"}}/>

                <h2>First Name: {firstName}<br/>
                Last Name: {lastName}</h2><br/>
                <p>Living: {living}<br/>
               Bounty :&euro; {bounty}<br/>
                Type:{type}<br/></p>
                <button className="deleteButton" onClick={() => deleteBounty(_id)}>Delete</button>
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
type={type}
bounty={bounty}
imgUrl={imgUrl}
btnText="Submit Edit"
submit={props.editBounty}
toggleEdit={setEditToggle}

/>
<button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
    </>



                }
        </div>

        
    )
}