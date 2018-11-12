#!/usr/bin/env node

const program = require('commander')
const fs = require('fs')
const { addPost, getPosts } = require('./db')

program
  .version('0.1.0')
  .description('Blog Post System')

program
  .command('addPost <title> <content> <hashtags>')
  .alias('a')
  .description('add a post to the Blog')
  .action( ( title,content,hashtags ) => {
    addPost(title,content,hashtags)
  })

program
  .command('getPosts')
  .alias('g')
  .description(' get all posts')
  .action(async () => {
    const allPosts = await getPosts()
    console.log(allPosts,'all posts')
  })

program.parse(process.argv)
