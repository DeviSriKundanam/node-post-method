const express=require("express") 
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=3000;

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	res.send("server started")
})

app.post("/newData",(req,res)=>{
	const {name,password}=req.body
	console.log(name,password)
})

app.listen(port,()=>console.log("it is working on port 3000"))