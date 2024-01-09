const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')


// Define Schema
const scoreSchema = new mongoose.Schema({
  username: String,
  date: String,
  score: Number,
  joke: ObjectId
})

scoreSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})



// Export model
module.exports = mongoose.model('Score', scoreSchema)
