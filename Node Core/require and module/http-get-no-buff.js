const http = require("http")

const url = "http://nodeprogram.com"
http.get(url, (response)=>{
    response.on('data',(chunk) => {
        console.log("Data:\n ",chunk.toString("utf-8"));
    })
    response.on('end', ()=>{
        console.log("response has ended");
    })
} ).on('error', (error)=>{
    console.error("Got error: ", error.message)
})