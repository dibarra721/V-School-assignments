const express = require("express")
const app = express()
require('dotenv').config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000
const expressJwt = require('express-jwt')


// process.env.SECRET


app.use(morgan("dev"))
app.use(express.json());




//connect to db
// mongoose.set("useCreateIndex", true)
mongoose.connect(
    "mongodb://localhost:27017/rtv",
    {
        useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("connected to the rtv database")
)



app.use('/auth', require("./routes/authRouter.js"));
app.use('/api', expressJwt({ secret: process.env.SECRET,  algorithms: ['HS256'] }))
app.use('/api/todo', require("./routes/todoRouter"));




app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ message: err.message })
})

app.listen(PORT, () => {
    console.log("App is listening on Port 9000")
})
