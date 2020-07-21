const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
// app.use(bodyParser.json())

const data = require('./data.json')
app.get('/getList', function (req, res) {
    res.json(data)
})

app.get('/', (req, res) => {
    res.send("Alive")
})



app.listen(3000, () => {
    console.log("Server Running...")
})
