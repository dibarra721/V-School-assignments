const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  comment: {
    type: String,
    date:Date.now
  },
  issue: {
    type: Schema.Types.ObjectId,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  }
})
module.exports = mongoose.model("Comment", CommentSchema)