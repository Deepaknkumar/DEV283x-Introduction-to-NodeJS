const http = require("http")
// const webData = require("./http-get")
const port = 3000

// console.log(webdata)

http.createServer((req,res) => {
    console.log(req.headers)
    console.log(req.method)
    console.log(req.status)
    console.log(req.url)
    if(req.method == "POST"){
        let buff = ""
        req.on("data",(chunk)=>{
            buff += chunk
        })
        req.on("end",() =>{
            console.log("Body:", buff)
            res.end("\n Accepted Body \n\n")
        })
    }else{
    res.writeHead(200, {"Content-Type": "application/json", "Content-Type":"text/plain"})
    res.end(" Hello World\n")
    }
}).listen(port)

console.log("Server running at http://localhost:",port)