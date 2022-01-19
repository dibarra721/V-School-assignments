const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  comment: {
    type: String,
    required : true
    
  },
  issueId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  date:{
    type: Date,
    default: Date.now
  }
})
module.exports = mongoose.model("Comment", CommentSchema)