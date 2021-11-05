import React,{useState} from "react";


function EditMeme (props) {

const [isEdit, setIsEdit] = useState(false)
const[generatedMemes,setGeneratedMemes] =  useState({
    topText:props.generatedMemes.topText,
bottomText:props.generatedMemes.bottomText,
image:props.randomImg
})

const handleChange =(e) => {
    const {name, value} =e.target
    setGeneratedMemes(prevGeneratedMemes => ({
        ...prevGeneratedMemes,
        [name]:value
    }))
}

    return (

        <div>
            {isEdit ?
        <form onSubmit={(e) => {
            e.preventDefault()
            props.edit(props.id, {topText:generatedMemes.topText, bottomText:generatedMemes.bottomText})
            setIsEdit(prevEdit => !prevEdit)
        }}>
                <input
                    
                    name="topText"
                    placeholder="Top Text"
                    value={generatedMemes.topText}
                    onChange={handleChange} 
                    />

                <input
                
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={generatedMemes.bottomText}
                    onChange={handleChange} />
     <button type="submit">Edit Meme</button>
                    </form>
                   
                    :
 <div>
 <h2>{props.generatedMemes.topText}
 {props.generatedMemes.bottomText}
 </h2>
 <img className="memeImg" src={props.randomImg} alt="" />

         </div>
    }
        <button onClick={() => setIsEdit(prevEdit => !prevEdit)}>{isEdit? "Cancel":"Edit"}</button>

</div>
  
    )
}




export default EditMeme;