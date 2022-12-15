//First js server to listen to port 80
http = require('http')
fs = require('fs')
url = require('url')
//
module.exports = {
    Server: {
        start: (port) => {
            let server = http.createServer((req, resp) => {
                let query = url.parse(req.url)
                resp.writeHead(200, "Yes man", {
                    "Content-type": "text/html; charset= UTF-8"
                })
                let data = "Nada"
                let stream = fs.createReadStream('./modules/index.html')
                stream.on('data', function (chunk) {
                    resp.write(chunk)
                })
                stream.on('end', function () {
                    resp.end()
                })
                stream.read()
            })
            server.listen(port)
        }
    }
}