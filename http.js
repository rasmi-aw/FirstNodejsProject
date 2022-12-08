let http = require('http')
let fs = require("fs")
let url = require("url")
//First js server to listen to port 80


let Server = {
    listen: (port) => {
        let server = http.createServer((req, resp) => {
            let query = url.parse(req.url)
            resp.writeHead(200, "Yes man", {
                "Content-type": "text/html; charset= UTF-8"
            })
            let data = "Nada"
            if (req.url === "/")
                fs.readFile("index.html", (err, data) => {
                    if (!err) {
                        console.log("Yes")
                        data = data.toString().replace("name", query.name).replace(ppp, "root")
                        resp.end(data)
                    } else resp.end()
                })

        })
        server.listen(port)
    }
};
//
Server.listen(80);