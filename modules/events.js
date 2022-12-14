const EventEmitter = require("modules/events")

let run = new EventEmitter()
run.on("run", function () {
    console.log("Rasmi is running");

})

run.emit("run")