const express = require("express")
const inventoryRouter = express.Router()
const Item = require ("../models/inventory.js")



//('/') routes 
inventoryRouter.route('/')
    //get all
    .get((req, res, next) => {
        Item.find((err, items) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(items)
        })
    })
    //add new item
    .post((req, res, next) => {
        const newItem = new Item(req.body)
        newItem.save((err, savedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedItem)
        })
    })
    
//("/:itemId") routes
inventoryRouter.route('/:itemId')
    //get one
    .get((req, res, next) => {
        Item.find({_id: req.params.itemId}, (err, item) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(item)
        })
    })
    //delete one
    .delete((req, res, next) => {
        Item.findOneAndDelete({_id: req.params.itemId}, (err, deletedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`successfully deleted ${deletedItem.title} from the database`)
        })
    })
    //update
    .put((req, res, next) => {
        Item.findOneAndUpdate(
            {_id: req.params.itemId},
            req.body,
            {new: true},
            (err, updatedItem) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedItem)
            }
        )
    })




module.exports = inventoryRouter