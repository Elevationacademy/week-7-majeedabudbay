const mongoose = require('mongoose')
const Schema = mongoose.Schema



const wordSchema = new Schema({
  name: String,
  
})


const wordSchema = mongoose.model("wordSchema", wordSchema)




module.exports = wordSchema