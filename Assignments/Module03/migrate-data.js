const mongodb = require("mongodb")
const async = require("async")

const customers = require("./data/m3-customer-data.json")
const customerAdresses = require("./data/m3-customer-address-data.json")

const uri = "mongodb://localhost:27017"
const objectsToProcess = parseInt(process.argv[2],10) || customers.length/10


function generateCustomersToAdd(customers,customerAdresses,index,objectsToAdd){
    let customersToAdd = []
    for(i=0;i<objectsToAdd;i++){
        customersToAdd.push(Object.assign(customers[i+index],customerAdresses[i+index]))
    }
    console.log(customersToAdd)
    return customersToAdd
}

mongodb.MongoClient.connect(uri,(err,client)=>{
    if(err){
        console.log("Error: " + err.message)
        return process.exit(1)
    }
    let db = client.db("edx-course-db")
    console.log("Connected to Database.")

    let tasks = []

    // customers.forEach((customer,index) => {
    //     customer = Object.assign(customer,customerAdresses[index])
    //     if(index%objectsToProcess ==0){
    //         let customersToAdd = []
    //     }else{
    //         customersToAdd.push
    //     }
    // });
    for(i=0;i<customers.length;i+=objectsToProcess){
        let customersToAdd = generateCustomersToAdd(customers,customerAdresses,i,objectsToProcess)
        tasks.push((callback)=>{
            db.collection("customers").insertMany(customersToAdd,(err,results)=>{
                if(err){
                    console.log("Error After db: " + err)
                    return process.exit(1)
                }
                console.log(results)
                callback(null,results)
            })
        })
    }

    async.parallel(tasks,(err,results)=>{
        if(err){
            console.log("Error: " + err)
        }
        console.log(results)
    })
})
