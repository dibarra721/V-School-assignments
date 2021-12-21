import React, { useState, useEffect } from "react"
import axios from "axios"

import Form from "./components/Form"
import Journal from "./components/Journal"
const Context = React.createContext()

function ContextProvider(props) {

const [journalList, setJournalList]= useState([])
const [currentJournal, setCurrentJournal]= useState([])



// axios requests


function getJournals(){
    axios.get("http://localhost:9000/journals")
    .then(res => setJournalList(res.data))
    .catch(err => console.log(err.response.data.errMsg))
    console.log(journalList)
}

useEffect(() => {
   getJournals()
}, [])
function addJournal(newJournal) {
    axios.post('/journals', newJournal)
    .then ( res => {
        setCurrentJournal(res.data)
        setJournalList(prevJournals => [...prevJournals, res.data])
        console.log(journalList)
        console.log(currentJournal)
    })
}

function deleteJournal(journalId) {
    axios.delete(`./journals/${journalId}`,)
    .then(res => {
        setJournalList(prevJournals => prevJournals.filter(journal => journal._id !== journalId))
    })
    .catch(err => console.log(err))
}


function editJournal(updates , journalId){
    axios.put(`./journals/${journalId}`, updates)
    .then(res => {
        setJournalList(prevJournals => prevJournals.map(journal => journal._id !== journalId ? journal :res.data))
    })
    .catch(err => console.log(err))
    
}




return(

//     <><div className="journalContainer">
// <Form
// submit={addJournal}
// btnText="Add Journal"/>
//     </div>
    
    <Context.Provider
        value={{
            addJournal,
            getJournals,
            deleteJournal,
            editJournal,
            getJournals,
            currentJournal,
            journalList,
            // btnText
            
        }}
    >
            {props.children}
        </Context.Provider>
)


}

    export {ContextProvider,Context}