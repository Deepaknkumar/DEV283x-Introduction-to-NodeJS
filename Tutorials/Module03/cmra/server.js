const express = require("express")
const logger = require("morgan")
const errorhandler = require("errorhandler")
const bodyparser = require("body-parser")
const mongodb = require("mongodb")

const uri = "mongodb://localhost:27017"
let app = express()

app.use(logger('dev'))
app.use(bodyparser.json())

mongodb.MongoClient.connect(uri,(error,client)=>{
    if(error){
        console.log("error" + error.message)
        return process.exit(1)
    }
    let db = client.db("edx-course-db")

    app.get("/accounts",(req,res)=>{
        db.collection("accounts")
        .find({},{sort:{_id:-1}})
        .toArray((err,accounts)=>{
            if(err){ return next(error)}
            res.send(accounts)
        })
    })

    app.post("/accounts",(req,res)=>{
        let newAccount = req.body
        console.log(newAccount)
        db.collection("accounts").insert(newAccount,(err,results)=>{
            if(err){ 
                console.log("Error:" + err.message)
                return next(error)
            }
            res.send(results)
        })
    })

    app.put("/accounts/:id",(req,res)=>{
        db.collection("accounts")
        .updateOne({_id:mongodb.ObjectID(req.params.id)},
        {$set : req.body},
        (err,results)=>{
            if(err){
                console.log("Error:" + err.message)
                return next(error)
            }
            res.send(results)
        }
        )
    })

    app.delete("/accounts/:id",(req,res)=>{
        db.collection("accounts")
        .deleteOne({_id:mongodb.ObjectID(req.params.id)},(err,results)=>{
            if(err){
                console.log("Error:" + err.message)
                return next(err)
            }
            res.send(results)
        })
    })

    app.use(errorhandler)
    app.listen(3000)
})

