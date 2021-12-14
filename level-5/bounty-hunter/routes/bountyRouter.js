const express = require('express');
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid');


const bounties =[
    { firstName:"bob", lastName:"slooth",living:"false", bounty:"100", type:"jedi" , _id: uuidv4() },
    { firstName:"yoda", lastName:"cute",living:"true", bounty:"1000", type:"jedi" , _id: uuidv4() }
]

// get all
bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

// get one
bountyRouter.get("/:bountiesId", (req, res) => {
    const bountiesId= req.params.bountiesId
    const foundBounty = bounties.find(bounty => bounty._id === bountiesId)
res.send(foundBounty)
    // console.log(req.params.id)
})

// get by type
bountyRouter.get("/search/type", (req, res) => {
    const type= req.query.type
    const filteredType= bounties.filter(bounty => bounty.type === type)
    res.send(filteredType)
})

// delete one
bountyRouter.delete("/:bountiesId", (req, res) => {
    const bountiesId= req.params.bountiesId
    const bountyIndex= bounties.findIndex(bounty => bounty._id === bountiesId)
    bounties.splice(bountyIndex,1)
    res.send("you have deleted a bounty")


})

// put 
bountyRouter.put("/:bountiesId", (req, res) => {
    const bountiesId= req.params.bountiesId
    const bountyIndex= bounties.findIndex(bounty => bounty._id === bountiesId)
    const updatedBounties= Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounties)
})
// post
bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
})




module.exports = bountyRouter