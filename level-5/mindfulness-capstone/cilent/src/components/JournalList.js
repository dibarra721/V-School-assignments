import React, {useContext, useState} from "react";
import {Context} from "../Context"
import Form from "./Form";
import Journal from "./Journal";

function JournalList(props){

    const {journals, date,meditation, _id, movement,feeling,note, deleteJournal, editJournal} =useContext(Context)
    // const [editToggle, setEditToggle]= useState(false)
console.log(props)

return (

    <>
    <>
    <h2>All Your Past Journals. You can Edit and Delete Them </h2>


    <div className="container">
    {journals ? journals.map(journal => 
        <Journal

            {...journal}
            key={journal._id}
            btnText="edit"
            editJournal={editJournal}
            deleteJournal={deleteJournal}
            />
            ): null}

    </div>
    
    
    

       </> 
       </>
    
)




}

export default JournalList;