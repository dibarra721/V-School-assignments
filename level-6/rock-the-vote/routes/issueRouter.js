const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/Issue.js')

// Get All Issues
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, issues) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

issueRouter.get('/user', (req, res, next) => {
  Issue.find({ user: req.user._id }, (err, issues) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

issueRouter.get("/user/:userId", (req, res, next) => {
  Issue.find(
    { user: req.params.userId },
    (err, issues) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issues)
    })
})

//get a issue by the id
issueRouter.get('/:issueId', (req, res, next) => {
  Issue.findById(req.params.issueId, (err, issue) => {
    if (err) {
      res.status(500)
      return next(err)
    } else if (!issue) {
      res.status(404)
      return next(new Error('No post item has been found.'))
    }
    return res.send(issue)
  })
})

// Add new Issue
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})

// Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.user._id },
    (err, deletedIssue) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
    }
  )
})

// Update Issue 
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.user._id },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

//Likes
issueRouter.put("/like/:issueId", (req, res, next) => {
  const userId = req.user._id
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    { $push: { votedUser: userId  },
      $inc: { likes: 1 }
    },
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})
//Dislikes
issueRouter.put("/dislike/:issueId", (req, res, next) => {
  const userId = req.user._id 
      console.log(userId)
      Issue.findOneAndUpdate(
        { _id: req.params.issueId },
        { $push: { votedUser: userId  },
          $inc: { dislikes: 1 }
        },
        { new: true },
        (err, updatedIssue) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(201).send(updatedIssue)
        }
      )
    })

module.exports = issueRouter;