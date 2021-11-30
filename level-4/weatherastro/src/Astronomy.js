import React from "react"


export default function Astronomy(props) {

    return(
<div>
    {props.astro.status === 200 ?


<div class="astroResults">
   
<p className="sunrise"> Sunrise: <p className="temp">{props.astro.astronomy.astro.moonrise}</p></p>
<p className="sunrise"> Sunset: {props.astro.astronomy[0].sunset}</p>

</div>

:null


}
</div>
    )
}