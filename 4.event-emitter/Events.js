const events =require('events')
var eventEmitter= new events.EventEmitter()

eventEmitter.on("firsteven",function(){
console.log("this my first event")

})

eventEmitter.on("second",function(data){
    console.log(`this my first event:${data}`)
    
    })
    

eventEmitter.emit("firsteven")

eventEmitter.emit("second","psz")