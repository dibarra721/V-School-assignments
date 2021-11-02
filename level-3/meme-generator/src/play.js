import React from "react";
import "./App.css"


function Play() {
    const [memes, setMemes] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "" 
    })
    const [memeIndex, setMemeIndex] = React.useState(0);
    const [captions, setCaptions] = React.useState([])


function getMemeImage() {
    const randomNum= Math.floor(Math.random() * memes.length)
    const url=memes[randomNum].url
    setMemes(prevMeme => ({
        ...prevMeme,
        randomImage:url
    }))
}const generatedMeme= (e) => {

    const {name,value} = e.target.value || 
    setCaptions(prevCaptions => ({
        ...prevCaptions,
        [name] :value
           }))
        }

console.log(generateMeme)

React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setMemes(data.data.memes))
    
}, []);

React.useEffect(() => {
    if (memes.length) {
        console.log(memes[memeIndex].box_count.value)
        setCaptions(Array(memes[memeIndex].box_count).fill(''));
    }
}, [memeIndex, memes]);

const updateCaption = (e, index) => {
    e.preventDefault()
    setCaptions(prevCaptions => ({
        ...prevCaptions,
        setCaptions
    },[]))

        captions.map((box_count, i) => {
            if (index === i) {
                
                return updateCaption;
            } else {
                console.log(box_count.value)
                return box_count;
            }
        })
    ;
};



return (
    memes.length ?
        <div className='container'>


            <form onSubmit={generateMeme}>
                {
                    captions.map((c, index) => (
                        <input onChange={(e) => updateCaption(e, index)} key={index} />

                    ))
                }
                <li className='memeCaptions'>{captions[0]}</li>
                <li className='memeCaptions'>{captions[1]}</li>
                <li className='memeCaptions'>{captions[2]}</li>
                <li className='memeCaptions'>{captions[3]}</li>
                <li className='memeCaptions'>{captions[4]}</li>
                <img src={memes[memeIndex].url} alt='meme' />
                <button className='generateNewMeme'>Generate</button>
                <button onClick={() => setMemeIndex(memeIndex + 1)} className='skipButton'>Refresh</button>
            </form>


        </div> : <></>
)
}

export default MemeGenerator;



            {/* <button onClick={{generateMeme}} className='generateNewMeme'>Generate</button>
            <button onClick={() => setMemeIndex(memeIndex + 1)} className='skipButton'>Refresh</button>
            {
                captions.map((c, index) => (
                    <input onChange={(e) => updateCaption(e, index)} key={index} />
                ))
            }
            <li>{captions[0]}</li>
            <li>{captions[1]}</li>
            <li>{captions[2]}</li>
            <li>{captions[3]}</li>
            <li>{captions[4]}</li>
            <img src={memes[memeIndex].url} alt='meme' />
        </div> : <></> */}
)
}
export default Play;