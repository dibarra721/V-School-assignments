import React, {useContext} from "react";
import {Context} from "../Context"
import Journal from "./Journal";


function Journals(){

    const {journalList, editJournal, _id, deleteJournal} =useContext(Context)



return (
    <div className="journalContainer">
        {journalList.map(journal => 
        <Journal

            {... journalList}
            key={journal._id}
            btnText="edit"
            editJournal={editJournal}
            deleteJournal={deleteJournal} />
            )}


    </div>
    
)




}

export default Journal;