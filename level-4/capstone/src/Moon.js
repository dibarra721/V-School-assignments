import React, { useContext} from "react"
import { Context } from "./Context";


export default function Moon(){
    // const [astroData, setAstro]=useState({})

    const context = useContext(Context);
    document.body.style.backgroundColor = "#4a38bc";

    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }





return(
<>
 <div className="moonDiv">

        <img id="img" alt="" src="https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80" height={350} width={250}  />
        <br />
        <h6><center>The Moon is earth's oldest temple holding the potency of countless prayers since the dawn of time..
            a bells whose ringing <br/> brings you into the field of the Mother, where body and soul quietly drink.<br />
           -Dana Gerhardt</center> 
        </h6>
        <h1>The Lunar Month</h1>
        <center>
        <h2>The moon appears to change shape in the sky,throughout the month.In fact what is happening is 
            the moon is changing its position in relation to the Sun and Earth. the angles between the Moon  and the Sun as the Moon orbits around the 
            Earth causes different amounts of the Moon to be illuminated from our point here on Earth. The Moon has a 29 1/2- day cycle.</h2>
            </center>

{context.viewM === true?
<div className="moonphase">

<h2>Todays Moon Phase: {context.astroData.astronomy.astro.moon_phase} <br/>
 Read More about this Phase Blow </h2>
</div>
:null}

            <h6>Read more about the Moon Phases down Below</h6><br/>
          <center> <span id="dots">🌙</span></center>
           <span id="more">

            <h1>The New Moon</h1>
            <p>Keywords: a clean slate, potential, dreams <br/>
            A time to plant the Seeds of your Future. A time to dive into your desires and to think about what you want todo. 
            </p>
            <h1>The Waxing Crescent Moon </h1>
            <p>Keywords: courage, moving forward, faith <br/>
A Time to allow your dreams to flourish and blossom. This is a time to look back at the wishes and desires you had during the New Moon.<br/>
If you want something, go chase it. You can't just manifest things into existence, you have to do the work.    </p>
            <h1>The First Quarter Moon</h1>
            <p>Keywords: challenges, commitment, confidence <br/>
At this point in the lunar phase, the Moon is just far enough away to clash with the Sun, making a hard angle.<br/>
At this point it may feel like your desires are out of reach, it is time to take a look at the work you are doing. Are your actions propelling you forward?</p>
            <h1>The Gibbous Moon</h1>
            <p>Keywords: adjust,hone,tweak <br/>
The Moon is continuing to move towards fullness. Gibbous means bulging, and just like the moon hopefully life feels like there is infinite  potential for you. <br/>
If your previous plans aren't working, it may be time to set new plans. This is also a good time to re evaluate your habits</p>
            <h1>The Full  Moon</h1>
            <p>Keywords: gratitude, forgiveness, results  <br/>
During this time, many people become wound up and anxious in accordance with the Full Moon. This part of the Lunar Cycle is Yang. <br/>
The energy is intense and our feelings are on display. Use this energy to clear out and release. Once you have released it is time to fill up with gratitude.</p>
            <h1>The Third Quarter  Moon</h1>
            <p>Keywords: trust, re-evaluate, balance  <br/>
The Moon is now becoming less visible from here on out. This time of the cycle is similar to the First Quarter Moon, where any conflict that occurs is worth examining. <br/>
 The energy is intense and our feelings are on display. Use this energy to clear out and release. Once you have released it is time to fill up with gratitude.</p>


</span>
<center><button onClick={myFunction} id="myBtn">Read More</button></center>


          

            </div>  </>







)





}