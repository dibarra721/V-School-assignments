
const express = require("express")
const IssueRouter = express.Router()
const Issue = require("../models/Issue")
const ObjectId = require("mongodb").ObjectId
const jwt = require("jsonwebtoken")


// get all issues
IssueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status.apply(200).send(issues)
    })
})


// get issue by userid
IssueRouter.get("/user", ( req, res, next) => {
    Issue.find({ user: req.user._id }, (err, issues) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(200).send(issues)
      })
    })



    IssueRouter.get("/user/:userId", (req, res, next) => {
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
IssueRouter.get('/:issueId', (req, res, next) => {
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
  IssueRouter.post("/", (req, res, next) => {
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
  IssueRouter.delete("/:issueId", (req, res, next) => {
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
  IssueRouter.put("/:issueId", (req, res, next) => {
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
  
  //Upvote
  IssueRouter.put("/upvotes/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
      { _id: req.params.issueId },
      { $inc: { upVotes: 1 } },
      { new: true },
      (err, issue) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(201).send(issue)
      }
    )
  })
  //Downvote
  IssueRouter.put("/downvotes/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
      { _id: req.params.issueId },
      { $inc: { downVotes: 1 } },
      { new: true },
      (err, issue) => {
        if (err) {
          res.status(500)
        }
        return res.status(200).send(issue)
      })
  })
  

  module.exports = IssueRouter;
