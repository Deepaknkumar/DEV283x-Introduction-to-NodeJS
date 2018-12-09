const path = require('path')
const Job = require(path.join(__dirname,"job"))

let job = new Job()

job.on("done", function(details){
    console.log("Weekly task was completed at " + details.completedOn + " and it was delayed for " + details.timeDelayed + "ms")
})

job.emit('start',1000)
job.emit('start',5000)
job.emit('start',0)
for(i=0; i< 10; i++){
    job.emit('start',1000*Math.random())
    job.emit('done',{completedOn: new Date(),timeDelayed: 10000*Math.random()})
}