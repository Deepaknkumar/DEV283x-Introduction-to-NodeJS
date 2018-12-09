const eventEmitter = require('events')

class Job extends eventEmitter{}        // creates a new class

job = new Job()             // instantiates a new job object

job.on("done",function(timeDone){                           // creates an observer
    console.log('Job was pronounced done at '+ timeDone);
})

job.emit("done",new Date())             // emits/triggers the event
job.removeAllListeners()        // removes all observers