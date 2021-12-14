const express = require("express")
const app = express()
const morgan = require("morgan")





// middleweare for every request
app.use(express.json())
app.use(morgan('dev')) 




// routes
app.use("/bounties", require("./routes/bountyRouter.js"))


// Server Listen 1st argument is port, second is the callback function

app.listen(9000, ()=> {
    console.log("the server is running on Port 9000")
    })