import React, { useState, useEffect } from "react";
import "./App.css"
import EditMeme from "./EditMeme";

function MemeGenerator() {
    const [newText, setNewText] = useState({
        topText: "",
        bottomText: "",
        image:"",
    })
    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/1bij.jpg")
    const [memes, setMemes] = useState([])
    const [generatedMemes, setGeneratedMemes] = useState([{
        topText: "",
        bottomText: "",
        image:"", 
    }])
    // const [memeIndex, setMemeIndex]= useState(0)



    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const [memes ] = response.data
                setMemes([{...memes}]);
            })
    }, [])



    function handleChange(event) {
        const { name, value } = event.target

        setNewText({
            ...newText,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * memes.length)
        const randMemeImg = memes[randNum].url
       return  setRandomImg(randMemeImg)
        
    }

const handleGenerator = (e ) => {
    e.preventDefault()


setGeneratedMemes(prevGeneratedMemes => [
    ...prevGeneratedMemes,{
     topText:newText.topText,
    bottomText:newText.bottomText,
    image:randomImg,
}])


 console.log (generatedMemes)
   
}

    

    return (

        
        <><div>
        <h2>Create your meme</h2>
                
                <form className="memeForm" onSubmit={handleGenerator}>
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={newText.topText}
                    onChange={handleChange} />
                <input
                    type="text"

                    name="bottomText"
                    placeholder="Bottom Text"
                    value={newText.bottomText}
                    onChange={handleChange} />

                <button onClick={handleSubmit}>Refresh Generator</button>
                <button type="submit">Generate your Meme </button>
            </form>




            <h2>List of Memes</h2>

            {memes}

            <img className="memeImg" src={randomImg} alt="" />
    <h2 className="top">{generatedMemes.topText}</h2>
    <h2 className="bottom">{generatedMemes.bottomText}</h2> */



 {/* {mappedMeme.length ? mappedMeme: null} */}



 {/* const mappedMeme = 
    generatedMemes.map((generatedMemes,index) => 
    <EditMeme 
    key={generatedMemes+index} 
    meme={generatedMemes} 
    img={randomImg}
    //  delete={handleChange}
     edit={handleChange}
     
     
     />) */}

        </div>
        
        
        <div className="meme">


{/* 
                {generatedMemes.topText}
                {generatedMemes.bottomText}
                <img className="memeImg" src={randomImg} alt={randomImg} />, */}

{/* 


/* {* 
                <img className="memeImg" src={randomImg} alt="" />
    <h2 className="top">{generatedMemes.topText}</h2>
    <h2 className="bottom">{generatedMemes.bottomText}</h2> */}


            </div></>  


    )
}


export default MemeGenerator;