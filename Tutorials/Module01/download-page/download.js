const https = require("https")
const fs = require("fs")
const path = require("path")
const uuidv1 = require("uuid/v1")

const fetchAPage = (url,callback) => {
    https.get(url, (res)=>{
        let webdata = ""
        res.on("data",(chunk)=>{
            webdata += chunk
        })
        res.on("end",()=>{
            callback(null,webdata)
        })
    }).on("error",(err)=>{
        console.log( "Got Error: " + err.message)
        callback(err);
    })
}

const downloadAPage = (url) =>{
    console.log("downloading webpage at",url)
    fetchAPage(url,(err,data)=>{
        if(err){
            return 
        }
        let folderName =  uuidv1()
        fs.mkdirSync(folderName)
        fs.writeFileSync(path.join(__dirname,folderName,"url.txt"),url)
        fs.writeFileSync(path.join(__dirname,folderName,"file.html"),data)
        console.log("downloading finished in folder ",folderName)
    })
}

downloadAPage(process.argv[2])
