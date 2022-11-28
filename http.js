let http = require('http');

//First js server to listen to port 80
http
    .createServer()
    .on('request', (req, res) => {
        res.writeHead(200, "Congrats man")
        res.end("rasmi");
    })
    .listen(80);