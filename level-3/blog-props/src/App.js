import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import BlogList from "./BlogList"
import Navbar from "./Navbar"
import BlogPost from "./BlogPost"

function App() {
return (

    <div className="App">
<Header />
    <Navbar />
<BlogList />
    <BlogPost />
<Footer />

    </div>
)


}

export default App