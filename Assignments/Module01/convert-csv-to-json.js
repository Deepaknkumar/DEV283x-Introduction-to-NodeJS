const fs = require("fs")
const path = require("path")

try{
    let filename = process.argv[2]
let data = fs.readFileSync(filename,{encoding:"utf-8"})
let lines = data.split("\n")
lines.forEach((line,index)=>{
    lines[index] = line.replace("\r","")
})

let outputfilename = filename.replace("csv","json")
console.log(outputfilename)

let headers = lines[0].split(",")
let jsonstr = "["
for(i = 1; i<lines.length;i++){
    let tmpdata = lines[i].split(",")
    if(tmpdata!=""){
    tmpstr= "{";
    tmpdata.forEach((val,index,arr)=>{
        tmpstr += `"${headers[index]}" : "${val}" `;
        if(index != tmpdata.length-1){
            tmpstr += `,`
        }
    })
    tmpstr += "}";
    console.log(JSON.parse(tmpstr))
    jsonstr += JSON.stringify(JSON.parse(tmpstr)) ;
    }
    if(i!=lines.length-1){
        jsonstr += ","
    }
}
jsonstr = jsonstr.slice(0,-1)+ "]";
fs.writeFileSync(outputfilename,jsonstr)
console.log(jsonstr)

}catch(err){
    console.log(err.message)
}

