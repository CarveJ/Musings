'use strict'

const Koa = require('koa')
const app = new Koa()

//middleware
const Router = require('koa-router')
const router = new Router()
const bodyparser = require('koa-bodyparser')

const { getPosts }= require('./db')
const port = 3000

app.listen(port, ()=>{
  console.log(`listening on port ${port}`)
})

router.get('/*', async (ctx) => {
  ctx.body = await getPosts
})

app.use(bodyparser())
app.use(router.routes())
