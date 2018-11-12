const mongoose = require('mongoose')

const options = {
  useNewUrlParser: true
}

mongoose.connect('mongodb://localhost/musingsDB',options)
.then(()=>console.log('connected to mongoDB'))

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  comments:[{
    message:String,
    userID: Number,
    userName: String,
    date: Date
  }],
  date: Date,
  userID: Number,
  userName: String,
  hashtags: String
})

const post = mongoose.model('Post',postSchema)
