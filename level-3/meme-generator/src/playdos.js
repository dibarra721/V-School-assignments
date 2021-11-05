import React, { useState, useEffect } from "react";


function Playdos() {
    const [upperText, setUpperText] = useState("")
    const [lowerText, setLowerText] = useState("")
    const [allMemes, setAllMemes] = useState([])
    const [meme, setMeme] = useState(null)
    const [randomMeme, setRandomMeme] = useState();

    const refreshMeme = () => {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((response) => setAllMemes(response.data.memes))
            .catch()
    };

    useEffect(() => {
        refreshMeme()
    }, [])

    const getRandomMeme = (event) => {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * Math.floor(allMemes.length));
        setRandomMeme(allMemes[randomNum].url);
    };
   


    const generateMeme = (e) => {
        e.preventDefault();
        setMeme(randomMeme)
 const handleTop = (event) => {
        setUpperText(event.target.value)
    };
    const handleBottom = (event) => {
        setLowerText(event.target.value)
    };

        console.log(meme)

    }
    return (

        <div>
            <form onSubmit={generateMeme} className="meme-form">
                <input

                    type="text"
                    name="upperText"
                    placeholder="top text"
                    value={upperText}
                    onChange={handleTop}
                />
                <input

                    type="text"
                    name="lowerText"
                    placeholder="bottom text"
                    value={lowerText}
                    onChange={handleBottom}
                />
                <button onClick={getRandomMeme} >Refresh</button>
                <button>Generate Meme</button>
            </form>
            <div className="meme">
                <img src={randomMeme} alt='' />
                <p></p>
                <h2 className="top">{upperText}</h2>
                <h2 className="bottom">{lowerText}</h2>
            </div>
        </div>
    );
}

export default Playdos;