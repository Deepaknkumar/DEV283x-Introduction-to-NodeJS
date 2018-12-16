const express = require("express")
const bodyparser = require("body-parser")
const morgan = require("morgan")
const errorhandler = require("errorhandler")

let store = {}
store.accounts = []

let app = express()
app.use(bodyparser.json())
app.use(morgan('dev'))
app.use(errorhandler())

app.get("/accounts",(req,res)=>{
    // console.log(req.header)
    res.status(200).send(store.accounts)
})

app.post("/accounts",(req,res)=>{
    // console.log(req.headers);
    let newAccount = req.body;
    let id = store.accounts.length;
    store.accounts.push(newAccount)
    console.log(store.accounts)
    res.status(201).send({id:id})
})

app.put("/accounts/:id",(req,res)=>{
    store.accounts[req.params.id] = req.body
    res.status(200).send(store.accounts[req.params.id])
})

app.delete("/accounts/:id",(req,res)=>{
    store.accounts.splice(req.params.id,1)
    //console.log(store.accounts)
    res.status(204).send()
})

app.listen(3000)