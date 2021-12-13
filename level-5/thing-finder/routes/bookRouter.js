const express = require('express')
const bookRouter = express.Router()
const { v4: uuidv4 } = require('uuid');




const books =[
    { title: "a return to love", genre:"self-help" , _id: uuidv4() },
    { title: "the universe has your back", genre:"love" , _id: uuidv4() },
    { title: "fake book", type:"self-help" , _id: uuidv4() }

]

// get all
bookRouter.get("/", (req, res) => {
    res.send(bounties)
})

// get one
bookRouter.get("/:bountiesId", (req, res) => {
    const bountiesId= req.params.bountiesId
    const foundBounty = bounties.find(bounty => bounty._id === bountiesId)
res.send(foundBounty)
    // console.log(req.params.id)
})

// get by type
bookRouter.get("/search/type", (req, res) => {
    const type= req.query.type
    const filteredType= bounties.filter(bounty => bounty.type === type)
    res.send(filteredType)
})




bookRouter.post("/", (req, res) => {
    const newBook = req.body
    newBook._id = uuidv4()
    books.push(newBook)
    res.send(`Successfully added ${newBook.title} to the list`)
})









module.exports = bookRouter