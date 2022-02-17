//routing

const http = require('http')

const server = http.createServer((req, res) => {
    let url,
        dataResponse

    res.setHeader("Content-Type", "application/json");
    url = req.url

    //routing
    if (url === "/") {
        dataResponse = {
            data: "Ini adalah halaman Homepage"
        }
    } else if (url === '/login') {
        dataResponse = {
            data: "Ini adalah halaman Login"
        }
    } else{
        dataResponse = {
            data: "404 Not Found"
        }
    }

    return res.end(JSON.stringify(dataResponse))
})

server.listen(5000)