const http = require("http")

const url = "http://www.google.com"

let req = http.get(url, function(res){
    let webData = ""
    res.on("data", (chunk)=>{
        webData += chunk;
    })

    res.on("end",()=>{
        //  console.log(webData)
    })
    res.on("error",(err)=>{
        console.error("Error in response: ", err )
    })
}).on("error",function(err){
    console.log(`Got error: ${err}`)
} )
// console.log(req.webData)
module.exports = req.webData