const eventEmitter = require("events")

class Emitter extends eventEmitter{}

emitter  = new Emitter()

emitter.on("knock-knock",function(){
    console.log("Who is there?")
})

emitter.once("knock-knock", function(){
    console.log("Go away!")
})

emitter.emit("knock-knock")
emitter.emit("knock-knock")