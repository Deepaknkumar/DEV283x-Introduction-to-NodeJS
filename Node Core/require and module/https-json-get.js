const https = require("https")

const url = 'https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'

https.get(url, (res)=>{
    let siteData = "";
    res.on("data",(chunk)=>{
        siteData += chunk
    })

    res.on("end",()=>{
        try{
            let parsedData = JSON.parse(siteData)
            console.log(parsedData)
        } catch(e){
            console.log(e.message)
        }
    })

}).on("error",(err)=>{
    console.error("Got error:", err.message)
})