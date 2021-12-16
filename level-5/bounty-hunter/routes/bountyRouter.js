const express = require("express");
const bountyRouter = express.Router();
const Bounty = require("../models/bounty.js");


// get all
bountyRouter.get("/", (req, res, next) => {
  Bounty.find((err, bounties) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(bounties)
  })
})

// post one
bountyRouter.post("/", (req, res, next) => {
 const newBounty = new Bounty(req.body)
        newBounty.save((err, savedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
  })

})

// get one
bountyRouter.get("/:bountyId", (req, res, next) => {
  const bountiesId = req.params.bountyId
  const foundBounty = bounty.find((bounty) => bounty._id === bountyId)
  if (!foundBounty) {
    const error = new Error("The item was not found");
    return next(error);
  }

  res.status(200).send(foundBounty);
});

// get by type
bountyRouter.get("/search/type", (req, res, next) => {
 Bounty.find({ type: req.query.type}, (err, bounties) => {
   if(err){
     res.status(500)
     return next(err)
   }
   return res.status(200).send(bounties)
 })
})

// delete one
bountyRouter.delete("/:bountyId", (req, res) => {
  Bounty.findOneAndDelete(
      { _id: req.params.bountyId },
       (err, deletedItem) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res
      .status(200)
      .send(
        `Sucesffuly deleted item ${deletedItem.firstName}from the dabatabase`
      )
  })
})

// update one
bountyRouter.put("/:bountyId", (req, res, next) => {
  Bounty.findOneAndUpdate(
    { _id: req.params.bountyId },
    req.body,
    { new: true },
    (err, updatedBounty) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedBounty)
    }
  )

})


module.exports = bountyRouter
