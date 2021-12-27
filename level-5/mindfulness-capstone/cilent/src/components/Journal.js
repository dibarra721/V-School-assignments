import React,{useContext, useState} from "react"
import Form from "./Form.js"


export default function Journal (props) {

    const {date, meditation, _id,  movement, feeling, note, deleteJournal, editJournal} = props

    const [editToggle, setEditToggle]= useState(false)


    //  console.log(journals)
     

return (

<>


    
        <div className="allJournals">

            { !editToggle ?
                <>
                    <h2>Date {date}</h2>
                    <p>Did I meditate: {meditation}<br />
                        Did I move: {movement}<br />
                        How do I feel:{feeling}<br />
                        Notes:{note}
                    </p>
                    <button className="deleteButton" onClick={() => deleteJournal(_id)}>Delete Entry </button>
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
                        feeling={feeling}
                        note={note}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={editJournal}
                        toggleEdit={setEditToggle} />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>

                </>
                
                }






        </div> 
        
        
        </>

)





}