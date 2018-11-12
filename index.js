'use strict'

const Koa = require('koa')
const app = new Koa()

const port = 3000

app.listen(port, ()=>{
  console.log(`listening on port ${port}`)
})
