import React,{useContext, useState} from "react"
import Form from "./Form.js"
import { Context } from '../Context'


export default function Journal () {

    const {date,meditation, _id, movement,feeling,note, deleteJournal, editJournal } = useContext(Context)

    const [editToggle, setEditToggle]= useState(false)


return (

<div className="journalEntry">

{ !editToggle ?
<>
<h2>Date {date}</h2>
<p>Did I meditate: {meditation}<br/>
Did I move: {movement}<br/>
How do I feel:{feeling}<br/>
Notes:{note}
</p>
<button className="deleteButton" onClick={deleteJournal(_id)}>Delete Entry</button>
<button
className="editButton"
onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit Entry</button>


</>
:
<>
<Form
date={date}
meditation={meditation}
movement={movement}
_id={_id}
btnText="Submit Edit"
submit={editJournal}
toggleEdit={setEditToggle}
/>
<button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>

</>




}






</div>

)





}