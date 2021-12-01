import React, {useContext} from "react"
import { Context } from "./Context"


export default function WeatherForm(props){
const context=useContext(Context)

    // const [astro, SetAstro]= useState({})
    // const [weather, SetWeather] = useState ({})
    //  const [zipcode, setZipCode]=useState("")

return (

    <>
    <div className='weatherForm'>
        <h2>Enter your zip Code to get Weather And  Astronomy Information</h2>


        <form >

            <input
                type="number"
                value={context.zipcode}
                onChange={(e) => context.setZipCode(e.target.value)}
                placeholder='Enter Zip' />
            <button oClick={context.getWeather}>Get Your Weather</button>
            <button oClick={context.getAstro}>Get Your Astronomy</button>

            {/* <button className="astroButton" onClick={getAstro}> Get Your Astro</button> */}
        </form> </div>
        
        <div>
            {astro.status === 200 ?

                <div className='Results'>

                    <p className="temp">Astronomy Data for the Day: {astro.astronomy.astro.moonrise}</p>
                </div>
                : null
                
                }



</div></>



            )


            }