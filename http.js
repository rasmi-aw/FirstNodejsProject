let http = require('http');
let fs = require("fs");
//First js server to listen to port 80
http
    .createServer()
    .on('request', (req, res) => {
        res.writeHead(200, {
            "Content-type": "text/html; charset= UTF-8"
        })
        fs.readFile("index.html", (err, data) => {
            if (!err)
                res.end(data);
        });
    })
    .listen(81);