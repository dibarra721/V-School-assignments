const mongoose = require("mongoose")
const Schema = mongoose.Schema



const itemSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    color: {
        type: String
    }
})


module.exports = mongoose.model("Inventory", itemSchema)