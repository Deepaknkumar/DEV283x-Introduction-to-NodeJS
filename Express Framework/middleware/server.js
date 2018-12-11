// imports
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

// instantiations
const app = express()

// middleware
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req,res,next)=>{
    console.log(req.method,":",req.url)
    next()
})

app.use((req,res,next)=>{
    if(req.query.api_key){
        console.log("Authenticated")
        next()
    }   else{
        res.statusCode = 401
        res.send("Authorization failed!")
    } 
})

// routes
app.get("/",(req,res)=>{
    console.log("In Home")
    res.send("Hello World!")
})

app.get("/accounts",(req,res)=>{
    console.log("In Accounts")
    res.send({"msg":"accounts"})
})

app.post("/transactions",(req,res)=>{
    console.log(req.body)
    console.log("In Transactions")
    res.send({"msg":"transactions"})
})

app.use((err,req,res,next)=>{
    res.status(500).send(err)
})

// bootup
app.listen(3000)