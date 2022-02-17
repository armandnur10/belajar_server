//routing

const http = require('http')

const server = http.createServer((req, res) => {
    let url,
        dataResponse

    res.setHeader("Content-Type", "application/json");
    url = req.url

    //routing
    if (url === "/") {
        dataResponse == {
            data: "Ini adalah halaman Homepage"
        }
    }

    return.res.end(JSON.stringify(dataResponse))
})

server.listen(3000)