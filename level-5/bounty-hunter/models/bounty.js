const mongoose = require("mongoose")
const Schema = mongoose.Schema

// blueprint

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: String,
        enum: ['Alive', 'Dead'],
        required: true
    },
    bounty: {
        type: Number,
        required: true
    },
    imgUrl:{
        type: String,
        required: true
    },

    type: {
        type: String,
        enum: ['Jedi', 'Sith'],
        
}
    
})



module.exports = mongoose.model("Bounty", bountySchema)
