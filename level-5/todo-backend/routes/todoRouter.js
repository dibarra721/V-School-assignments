const express = require('express');
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid');


const todos= [
    {  name: "diana",
    description: "first do do ",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4()
}
]



// get all
todoRouter.get("/", (req, res) => {
    res.send(todos)
})

// get one
todoRouter.get("/:todosId", (req, res) => {
    const todosId= req.params.todosId
    const foundTodo = todos.find(todo => todo._id === todosId)
res.send(foundTodo)
    // console.log(req.params.id)
})

// get by type
todoRouter.get("/search/completed", (req, res) => {
    const type= req.query.completed
    const filteredType= todos.filter(bounty => bounty.completed === completed)
    res.send(filteredType)
})

// delete one
todoRouter.delete("/:todosId", (req, res) => {
    const todoId= req.params.todosId
    const todoIndex= todos.findIndex(todo => todo._id === todosId)
    todos.splice(todoIndex,1)
    res.send("you have deleted a bounty")


})

// put 
todoRouter.put("/:todosId", (req, res) => {
    const todosId= req.params.todosId
    const todoIndex= todos.findIndex(todo => todo._id === todosId)
    const updatedTodo= Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})
// post
todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to the list`)
})












module.exports = todoRouter