const mongoose = require('mongoose')

const options = {
  useNewUrlParser: true
}

mongoose.connect('mongodb://localhost/musingsDB',options)
const db = mongoose.connection;
db.once('open', ()=>{
  console.log('connected to mongodb')
})

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

const testSchema = new mongoose.Schema({
  name: String
})

const Post = mongoose.model('Post',postSchema)

const addPost = (post) => {
  const newPost = new Post(post)
  newPost.date = Date.now()
  newPost.save().then(()=>{
    console.log('saved')
  })
}

const getPosts = async () => {
  const allPosts = await Post.find()
  return allPosts
}

module.exports = { addPost, getPosts}
