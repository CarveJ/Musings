const mongoose = require('mongoose')
const fs = require('fs')

const options = {
  useNewUrlParser: true
}

mongoose.connect('mongodb://localhost/musingsDB',options)
const db = mongoose.connection;


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

const addPost = async ( title, fileName, hashtags) => {
    const filePath = `C:\/Users\/Jamie\/Documents\/MusingsBlogPost\/${fileName}.txt`
    const anObj = {title,hashtags}
    fs.readFile(filePath,'utf8', function(error, data) {
      if (error) {
        console.error("read error:  " + error.message);
      } else {
        anObj.content = data
        anObj.date = Date.now()
        const blogUpdate = new Post(anObj)
        blogUpdate.save().then(() => {
          console.log('saved')
        })
      }
    });
}

const getPosts = async () => {
  const allPosts = await Post.find()
  return allPosts
}

module.exports = { addPost, getPosts}
