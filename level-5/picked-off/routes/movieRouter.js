
const express = require('express');
const movieRouter = express.Router()




movieRouter.use("/", ( req, res, next) => {
    req.body ={title :"lion kind"}
    next()
})



movieRouter.get("/", (req , res, next) => {
    res.send(req.body)
})






module.exports = movieRouter