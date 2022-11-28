let http = require('http');

//First js server to listen to port 80
http
    .createServer()
    .on('request', (req, res) => {
        console.log("rasmi");
        res.end("rasmi");
    })
    .listen(80);