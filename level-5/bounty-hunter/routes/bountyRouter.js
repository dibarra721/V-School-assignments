const express = require('express');
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')
// const { v4: uuidv4 } = require('uuid');


// const bounties =[
//     { firstName:"bob", lastName:"slooth",living:"false", bounty:"100", type:"jedi" , _id: uuidv4() },
//     { firstName:"yoda", lastName:"cute",living:"true", bounty:"1000", type:"jedi" , _id: uuidv4() }
// ]

// get all
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
    
})


// post one
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty (req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })

//     const newBounty = req.body
//     newBounty._id = uuidv4()
//     bounties.push(newBounty)
//    res.status(201).send(newBounty)
})

// get one
bountyRouter.get("/:bountyId", (req, res, next) => {
    const bountiesId= req.params.bountyId
    const foundBounty = bounty.find(bounty => bounty._id === bountyId)
if(!foundBounty){
const error= new Error("The item was not found")
return next(error)
}

    res.status(200).send(foundBounty)
   
})

// get by type
bountyRouter.get("/search/type", (req, res) => {
    const type= req.query.type
    if(!type) {
        const error =new Error("You must provide a type")
        return next(error)
    }
    const filteredType= bounties.filter(bounty => bounty.type === type)
    res.status(200).send(filteredType)
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
    res.status(201).send(updatedBounties)
})





module.exports = bountyRouter