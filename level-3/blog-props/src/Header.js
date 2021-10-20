import React from "react";
import Navbar from './Navbar'

function Header  (props)  {
    return (

        <>
        <Navbar />
        <header class="masthead" style={{backgroundImage: 'url("https://i.ibb.co/G2GdC6B/home-bg.jpg")'}}>
            <div class="containerPostion">
                <div class="mastconatiner">
                    <div class="innerBox">
                        <div class="site-heading">
                            <h1>Clean Blog</h1>
                            <span class="subheading">A Blog Theme by Start Bootstrap</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
)
}

export default Header