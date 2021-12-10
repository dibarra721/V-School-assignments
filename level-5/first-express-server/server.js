const express= require("express")
const app = express()
// endpoint
// callback function 
// request and response 


// middleware-functions that fire on the in between

app.use(express.json())

const users =[
    {name :"joe", age: 20},
    {name :"diana", age: 30},
    {name :"mo", age: 10},
    {name :"bob", age: 20},
]


// routes


app.get("/users", (req, res) => {
res.send(users)
})


app.post("/users", (req, res) => {
    const newUser = req.body
    users.push(newUser)
    res.send(`yay this worked ${newUser.name}`)
})




// 1:port 2: CB
app.listen(9000, ()=> {
console.log("the server is running on Port 9000")
})
