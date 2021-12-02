import React, { useContext} from "react"
import { Context } from "./Context";

export default function Moon(){
    // const [astroData, setAstro]=useState({})

    const context = useContext(Context);


return(
<>
 <div className="moonDiv">

        <img alt="" src="https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80" />
        <br />
        <p>The Moon is earth's oldest temple holding the potency of countless prayers since the dawn of time..
            a bells whose ringing brings you into the field of the Mother, where body and soul quietly drink.<br />
            -Dana Gerhardt
        </p>
        <h1>The Lunar Month</h1><br />
        <h5>The moon appears to change shape in the sky,throughout the month.In fact what is happening is 
            the moon is changing its position in relation to the Sun and Earth. the angles between the Moon  and the Sun as the Moon orbits around the 
            Earth causes different amounts of the Moon to be illuminated from our point here on Earth. The Moon has a 29 1/2- day cycle.</h5>
            

<h2>Todays Moon Phase</h2>

            {/* {context.astroData.astronomy.astro.moon_phase} */}


            <h6>Read more about the Moon Phases down Below</h6><br/>
            <h1>The New Moon</h1>
            <h1>The Waxing Crescent Moon </h1>
            <h1>The First Quarter Moon</h1>
            <h1>The Gibbous Moon</h1>
            <h1>The Full  Moon</h1>
            <h1>The Third Quarter  Moon</h1>





          

            </div>  </>







)





}