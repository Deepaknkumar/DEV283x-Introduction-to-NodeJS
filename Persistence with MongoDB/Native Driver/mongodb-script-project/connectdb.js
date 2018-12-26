const mongodb = require("mongodb")

const mongoClient = mongodb.MongoClient;

const uri = 'mongodb://localhost:27017/edx-course-db';
mongoClient.connect(uri,(err,db)=>{
    if(err){
        console.log(err.message);
        return process.exit(1);
    }else{
        console.log("Kudos. Connected successfully to server.");
        db.close()
    }
})