const MongoClient = require('mongodb').MongoClient

// insert Documents
const insertDocuments = (client,callback)=>{
    let db = client.db('edx-course-db')
    const collection = db.collection("edx-course-students-list")
    let data = [{name:"Deepak"},{name:"Bob"},{name:"John"},{name:"Peter"}];
    collection.insertMany(data,(err,result)=>{
        if (err){
            console.log(err.message)
            return process.exit(1)
        }
        console.log(result.result.n)
        console.log(result.ops.length)
        // console.log(result)
        console.log(`Inserted ${data.length} documents into edx-course-students-list`)
        callback(result)
    })
}

// update Documents
// const updateDocuments = (collection,data,callback)=>{
//     collection.update(data)
// }

const uri = 'mongodb://localhost:27017'
MongoClient.connect(uri,(err,client)=>{
    if(err){
        console.log(err.message);
        return process.exit(1);
    }
    console.log("Connected to database.")
    console.log(client.db('edx-course-db').collection('edx-course-students-list'))
    insertDocuments(client,(result)=>{
        console.log(result)
        client.close()
    })
})