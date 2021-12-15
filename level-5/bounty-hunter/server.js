const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")



// middleweare for every request
app.use(express.json())
app.use(morgan('dev')) 


// connect to DB
mongoose.connect('mongodb://localhost:27017/bountiesdb',
    () => console.log("connected to the DB")
    )

// routes
app.use("/bounties", require("./routes/bountyRouter.js"))

// error handler
app.use((err,req, res, next) => {
console.log(err)
return res.send({errMsg : err.message})
})





// Server Listen 1st argument is port, second is the callback function

app.listen(9000, ()=> {
    console.log("the server is running on Port 9000")
    })