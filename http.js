let http = require('http')
let fs = require("fs")
let url = require("url")
//First js server to listen to port 80
http
    .createServer()
    .on('request', (req, res) => {
        let query = url.parse(req.url, true).query
        res.writeHead(200, "Yes man", {
            "Content-type": "text/html; charset= UTF-8"
        })
        fs.readFile("index.html", (err, data) => {
            if (!err)
                data = data.toString().replace("name", query.name)
            res.end(data)
        });
    })
    .listen(80)