import React,{useContext, useState, useEffect} from "react"
import Form from "./Form.js"
import axios from "axios"

import { Context } from '../Context'


export default function Journal () {

    const {date,meditation, _id, movement,feeling,note, deleteJournal, editJournal,currentJournal } = useContext(Context)

    const [editToggle, setEditToggle]= useState(false)
    const [dailyQuote, SetDailyQuote]=useState([])

// daily quote api
useEffect(() => {
    getQuote()
 }, [])


 function getQuote(){
    axios.get("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/today" )
    .then(res => SetDailyQuote(res.data))
    .catch(err => console.log(err))
    console.log(dailyQuote)
}




return (



    <><div className="quote">

        {dailyQuote ? dailyQuote.map(dailyQuote => <p>{dailyQuote.q}<br />-{dailyQuote.a}</p>) : null}
    </div><div className="heading">
            <h5>Welcome to your Mindfulness Journal. Below you will find a feelings wheel if you are having trouble with describing how you are feeling.
                If you head over to Journal Entries you will be able to view edit and delete entries.You can expand the text area for the notes section.
            </h5>
        </div>
        
        <Form/>
        
        <div className="currentJournal">
<h1> Todays Entry </h1>
                {currentJournal ? <p>
                    Date:{currentJournal.date}<br/>
                    Did I meditate:{currentJournal.meditation}<br/>

                   Did I move: {currentJournal.movement}<br/>
                   How am I feeling: {currentJournal.feeling}<br/>
                    Notes:{currentJournal.note}<br/>

                </p> : null}
            </div>
        
        
        
        {/* <div className="journalEntry">

            {!editToggle ?
                <>
                    <h2>Date {date}</h2>
                    <p>Did I meditate: {meditation}<br />
                        Did I move: {movement}<br />
                        How do I feel:{feeling}<br />
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
                        toggleEdit={setEditToggle} />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>

                </>}






        </div> */}
        
        
        </>

)





}