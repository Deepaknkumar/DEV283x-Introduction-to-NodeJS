const http = require("http")

const postData = JSON.stringify({foo:"bar"})

const options = {
    hostname : "mockbin.com",
    port : 80,
    path:"/request?foo=bar&foo=baz",
    method: "POST",
    headers: {
        "Content-Type":'application/x-www-form-urlencoded',
        "Content-Length":Buffer.byteLength(postData)
    }
}

let req = http.request(options,(res)=>{
    res.on('data',(chunk)=>{
        console.log("Body:",chunk.toString("utf-8") )
    })
    res.on("end",()=>{
        console.log("No more data in response.")
    })

})

req.on("error",(err)=>{
    console.err(err)
})

req.write(postData)
req.end()