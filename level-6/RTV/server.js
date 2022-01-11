const express = require("express")
const app = express()
require('dotenv').config()
const morgan = require("morgan")
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')


// process.env.SECRET


app.use(morgan("dev"))
app.use(express.json());




//connect to db
// mongoose.set("useCreateIndex", true)
mongoose.connect(
    'mongodb://localhost:27017/rtv-db',
  () => console.log("connected to the rtv database")
)



app.use('/auth', require('./routes/AuthRouter.js'));
app.use('/api', expressJwt({ secret: process.env.SECRET,  algorithms: ['HS256'] }))
app.use('/api/issue', require('./routes/IssueRouter'));




app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ message: err.message })
})

app.listen(9000, () => {
    console.log("APP is listening on PORT 9000")
  })
