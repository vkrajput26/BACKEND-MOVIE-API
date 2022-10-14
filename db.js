
const mongoose = require("mongoose")
// connect to mongodb
const connection =mongoose.connect("mongodb://127.0.0.1:27017/movieapi")


const MovieSchema=mongoose.Schema({
      title:String,
      rating:Number,
      release_year:Number,  
})

const MovieModel= mongoose.model("apicrud",MovieSchema)

module.exports={
    connection,MovieModel
}