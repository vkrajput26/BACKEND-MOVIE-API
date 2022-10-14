const express =require("express")
const { connection,MovieModel} =require("./db")

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home page")
})

app.post("/adding", async(req,res)=>{
    const data=req.body
    const addData= new MovieModel(data)
    await addData.save()
    res.send(addData)
})

app.get("/movies",async(req,res)=>{
    const result=await MovieModel.find()
    res.send(result)
})


app.get("/filterRating", async(req,res)=>{
    const result=await MovieModel.find().sort({"rating":1})
    res.send(result)
})

app.get("/filterTitle", async(req,res)=>{
    const result=await MovieModel.find().sort({"title":1})
    res.send(result)
})

app.get("/search", async(req,res)=>{
    let searchParam=req.query.q
    if(searchParam){
      
    
      var result= await MovieModel.find({title: { '$regex': searchParam}}, {})
    }
    res.send(result)
})

app.delete("/delete/:title", async(req,res)=>{
             let titleparam=req.params["title"]
             console.log(titleparam,"deleted")
                await MovieModel.deleteOne({ title:titleparam})
                res.send("item deleted")
})

app.listen(8030, async()=>{
    try{
       await connection
        console.log("working")
    }
    catch(err){
        console.log(err)
    }
})