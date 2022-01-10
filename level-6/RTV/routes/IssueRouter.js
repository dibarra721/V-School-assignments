
const express = require("express")
const IssueRouter = express.Router()
const Issue = require("../models/Issue")
const ObjectId = require("mongodb").ObjectId
const jwt = require("jsonwebtoken")

// vote issue

IssueRouter.put("/like/:issueId", (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.bookID},
        { $inc : {likes: 1}},
        {new : true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue)
        }

    )
})



module.exports = IssueRouter