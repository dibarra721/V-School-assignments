import React, {useState , useContext, useEffect} from "react"
import { Context } from '../Context'
import axios from "axios"



export default function Form (props) {

const {addJournal, _id, toggleEdit, currentJournal} = useContext(Context)
const [dailyQuote, SetDailyQuote]=useState([])

const intiInputs = {
    date: "",
    meditation: "",
    movement: "",
    feeling:"",
    note: ""
}

const [inputs, setInputs]=useState(intiInputs)


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


function handleChange(e) {
    const {name, value} = e.target
    setInputs(prevInputs => ( {...prevInputs, [name]: value}))
}

function handleSubmit(e){
    e.preventDefault()
    addJournal(inputs, _id)
    setInputs(intiInputs)
    if(_id){
        toggleEdit(prevEdit => !prevEdit)
    }
    
}







// const quote = dailyQuote.map( quote, id => key={id}(<li>{dailyQuote} </li> ))

    return(
        <>
        <div className="quote">
<p>
           {dailyQuote ? dailyQuote.map(dailyQuote =>   <p>{dailyQuote.q}</p>):null}
           </p> </div>




        <div className="heading">
        <h5>Welcome to your Mindfulness Journal. Below you will find a feelings wheel if you are having trouble with describing how you are feeling.
            If you head over to Journal Entries you will be able to view edit and delete entries.You can expand the text area for the notes section.
        </h5>
        </div>
        <div className="formWrapper">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a1c9c9" fillOpacity="0.9" d="M0,192L20,170.7C40,149,80,107,120,128C160,149,200,235,240,245.3C280,256,320,192,360,186.7C400,181,440,235,480,250.7C520,267,560,245,600,250.7C640,256,680,288,720,277.3C760,267,800,213,840,192C880,171,920,181,960,202.7C1000,224,1040,256,1080,229.3C1120,203,1160,117,1200,112C1240,107,1280,181,1320,218.7C1360,256,1400,256,1420,256L1440,256L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>         
   <h1>Mindfulness Journal</h1>
            <form onSubmit={handleSubmit}>
                Date:
                <input
                    type="text"
                    name="date"
                    value={inputs.date}
                    onChange={handleChange}
                    placeholder="00-00-0000"
                    required />
                <br />
                Did I meditate:
                <input
                    type="text"
                    name="meditation"
                    value={inputs.meditation}
                    onChange={handleChange}
                    placeholder="Yes or No"
                    required />
                <br />
                Did I move:
                <input
                    type="text"
                    name="movement"
                    value={inputs.movement}
                    onChange={handleChange}
                    placeholder="Yes or No"
                    required />
                <br />
                How am I feeling :
                <input
                    type="text"
                    name="feeling"
                    value={inputs.feeling}
                    onChange={handleChange}
                    placeholder="How am I feeling"
                    required />
                <br />
                Notes:
                <textarea
                    type="text"
                    name="note"
                    textarea="true"
                    value={inputs.note}
                    onChange={handleChange}
                    placeholder="Any extra notes. How long did I meditate for? Was it morning? How long did I move for. 
                    What time of day was it "
                     
                    />
                <button>Add Entry</button>




            </form>






        </div><div className="currentJournal">

                {currentJournal.date > 0 ? <p>
                    Date:{currentJournal.date}<br/>
                    Did I meditate:{currentJournal.meditation}<br/>

                   Did I move: {currentJournal.movement}<br/>
                   How am I feeling: {currentJournal.feeling}<br/>
                    Notes:{currentJournal.note}<br/>

                </p> : null}
            </div></>

       
    )





}


