import React, {useState , useContext} from "react"
import { Context } from '../Context'


export default function Form () {

const context=useContext(Context)

const intiInputs = {
    date: context.date ||"",
    meditation: context.meditation || "",
    movement: context.movement || "",
    feeling: context.feeling || "",
    note: context.note || ""
}

const [inputs, setInputs]=useState(intiInputs)

function handleChange(e) {
    const {name, value} = e.target
    setInputs(prevInputs => ( {...prevInputs, [name]: value}))
}

function handleSubmit(e){
    e.preventDefault()
    context.addJournal(inputs, context._id)
    setInputs(intiInputs)
    if(context._id){
        context.toggleEdit(prevEdit => !prevEdit)
    }
    
}



    return(
        <div className="formWrapper">
            <h1>Fill out your journal for today</h1>
            <form onSubmit={handleSubmit} >
                Date:
                <input
                type="text"
                name="date"
                value={inputs.date}
                onChange={handleChange}
                placeholder="00-00-00"
                required
                />
                <br/>
                Did I meditate:
                <input
                 type="text"
                 name="meditation"
                 value={inputs.meditation}
                 onChange={handleChange}
                 placeholder="yes or no"
                 required
                 />
                 <br/>
                 Did I move:
                 <input
                 type="text"
                 name="movement"
                 value={inputs.movement}
                 onChange={handleChange}
                 placeholder="yes or no"
                 required
                 />
                 <br/>
                 How am I feeling :
                 <input
                 type="text"
                 name="feeling"
                 value={inputs.feeling}
                 onChange={handleChange}
                 placeholder="How am I feeling"
                 required
                 />
                 <br/>
                 Notes:
                 <input
                 type="text"
                 name="feeling"
                 value={inputs.note}
                 onChange={handleChange}
                 placeholder="Any extra notes. How long did I mediate for? Was it morning "
                 required
                 />
<button>{context.btnText}</button>




            </form>







        </div>
        
       
    )





}

