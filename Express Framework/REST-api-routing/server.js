const express = require("express")
const bodyparser = require("body-parser")
const app = express()

app.use(bodyparser.json())

let profile = [{
    username : "Dee",
    email: "NA",
    url: "www.github.com/Deepaknkumar"
}]

app.get("/profile",(req,res)=>{
    if(req.query.id) return res.send(profile[req.query.id])
    res.send(profile)
})

app.post("/profile",(req,res)=>{
    if(!req.body.first_name.trim() || !req.body.last_name.trim()){
        console.log("First name and Last name not Found.")
        return res.sendStatus(400)
    }
    let obj = {
        first_name : req.body.first_name,
        last_name: req.body.last_name
    }
    profile.push(obj)
    console.log(profile)
    console.log(profile)
    res.sendStatus(201)
})

app.put("/profile/:id",(req,res)=>{
    console.log(req.params.id,profile,req.body)
    Object.assign(profile[req.params.id],req.body)
    console.log(profile[req.params.id])
    res.sendStatus(204)
})

app.delete("/profile/:id",(req,res)=>{
    profile[req.params.id] = {}
    console.log(profile[req.params.id])
    res.sendStatus(204)
})

app.listen(3000)