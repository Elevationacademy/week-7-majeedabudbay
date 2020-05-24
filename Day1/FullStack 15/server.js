const express = require('express')

const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, 'dist')))

const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/fs", { useNewUrlParser: true, useUnifiedTopology: true })



const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})




app.get('/sanity', function(req, res){
    res.send("Ok!")
})