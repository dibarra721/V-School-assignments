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
    res.send(books)
})

// get one
bookRouter.get("/:booksId", (req, res) => {
    const booksId= req.params.booksId
    const foundBook = books.find(book => book._id === booksId)
res.send(foundBook)
})

// get by type
bookRouter.get("/search/genre", (req, res) => {
    const type= req.query.genre
    const filteredType= books.filter(book => book.genre === type)
    res.send(filteredType)
})




bookRouter.post("/", (req, res) => {
    const newBook = req.body
    newBook._id = uuidv4()
    books.push(newBook)
    res.send(`Successfully added ${newBook.title} to the list`)
})









module.exports = bookRouter