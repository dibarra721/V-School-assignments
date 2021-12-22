import React, {useState, useEffect} from "react"
import axios from "axios"
import "./App.css"
import Journal from "./components/Journal"

const Context = React.createContext()

function ContextProvider(props) {

const [journals, setJournals]= useState([])
const [currentJournal, setCurrentJournal]= useState({})

useEffect(() => {
    getJournals()
 }, [])
 

// axios requests


function getJournals(){
    axios.get("/journals")
    .then(res => setJournals(res.data))
    .catch(err => console.log(err.response.data.errMsg))
    console.log(journals)
}

function addJournal(newJournal) {
    axios.post('/journals', newJournal)
    .then ( res => {
        setCurrentJournal(res.data)
        setJournals(prevJournals => [...prevJournals, res.data])
        console.log(journals)
        console.log(currentJournal)
    })
}

function deleteJournal(journalId) {
    axios.delete(`./journals/${journalId}`,)
    .then(res => {
        setJournals(prevJournals => prevJournals.filter(journal => journal._id !== journalId))
    })
    .catch(err => console.log(err))
}


function editJournal(updates , journalId){
    axios.put(`./journals/${journalId}`, updates)
    .then(res => {
        setJournals(prevJournals => prevJournals.map(journal => journal._id !== journalId ? journal :res.data))
    })
    .catch(err => console.log(err))
    
}




return(
    <>
    {/* <div>
        {journals ? journals.map(journal => <Journal

            {...journalList}
            key={journal._id}
            btnText="edit"
            editJournal={editJournal}
            deleteJournal={deleteJournal} />
        ) : null}
    </div> */}
        
        <Context.Provider
            value={{
                addJournal,
                setJournals,
                setCurrentJournal,
                getJournals,
                deleteJournal,
                editJournal,
                currentJournal,
                journals,
                // btnText
            }}
        >
            {props.children}
        </Context.Provider></>
)


}

    export {ContextProvider,Context}