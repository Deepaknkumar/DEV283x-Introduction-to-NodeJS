const eventEmitter = require("events")

class Job extends eventEmitter{
    constructor(ops){
        super(ops);
        this.on('start', (timedelayed) => {
            this.process(timedelayed)
        })
    }

    process(timedelayed){
        setTimeout( () =>{
            this.emit('done',{completedOn: new Date(), timeDelayed: timedelayed})
        },timedelayed)
    }
}
module.exports = Job