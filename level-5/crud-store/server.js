const express = require("express")
const app = express () 
const morgan = require("morgan")
const mongoose = require("mongoose")




//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Connect to DB
mongoose.connect('mongodb://localhost:27017/crudstorerdb', 
    () => console.log("Connected to the Store DataBase")
)

//Routes
app.use("/inventory", require("./routes/inventoryRouter.js"))

//Error handling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({err: err.message})
})

//Listen
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})