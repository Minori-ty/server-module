const express = require('express')
const compression = require('compression')
const open = require('open')
// const history = require('connect-history-api-fallback')

const app = express()
app.use(compression())
// app.use(history())
app.use(express.static(__dirname + '/static'))

open('http://127.0.0.1:8888')
app.listen(8888, (err) => {
    if (!err) console.log('服务器启动成功！')
})
