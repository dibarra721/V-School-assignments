const express = require("express")
const app = express()

// middleweare for every request
app.use(express.json())

// routes
app.use("/bounties", require("./routes/bookRouter.js"))


// Server Listen 1st argument is port, second is the callback function

app.listen(9000, ()=> {
    console.log("the server is running on Port 9000")
    })