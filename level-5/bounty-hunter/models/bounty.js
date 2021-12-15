const mongoose = require("mongoose")
const Schema = mongoose.Schema

// blueprint

const bountySchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    living: {
        type: Boolean,
        require: true
    },
    bounty: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['Jedi', 'Sith'],
    },
    imgUrl:{
        type: String,
        required: true
    }

    
})



module.exports = mongoose.model("Bounty", bountySchema)
