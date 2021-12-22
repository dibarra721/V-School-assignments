import React, {useContext, useState} from "react";
import {Context} from "../Context"
import Journal from "./Journal";
import Form from "./Form";

function JournalList(props){

    const {journals} =useContext(Context)
    // const [editToggle, setEditToggle]= useState(false)
console.log(props)

return (

    <><h1>hello world</h1><>


    <div className="contaicer">
    {journals ? journals.map(journal => 
        <Journal

            {... journals}
            key={journal._id}
            btnText="edit"
            />
            ): null}

    </div>
    
    
    {/* <div className="journalEntry">

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

    
    
    
    
    <div className="journalContainer">
        

            {/* {journalList ? journalList.map(journal => <Journal

                {...journalList}
                key={journal._id}
                btnText="edit"
                editJournal={editJournal}
                deleteJournal={deleteJournal} />
            ) : null} */}


       </></> 
    
)




}

export default JournalList;