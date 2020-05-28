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







const router = express.Router()
// const City = require('')



router.get('/words', function(req, res){

    
    word.find({}, function(err, words){
        res.send(words)
    })

})







router.post('/word', function(req, res){
    const name = req.body.name
    
   
    const word = new word({ name: name })
    word.save()
    res.send(word)
})




