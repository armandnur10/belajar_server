const http = require("http")

const server = http.createServer((req, res) =>{
    let url,
    method,
    dataResponse;

    res.setHeader("Content-Type", "application/JSON");

    url = req.url

    method = req.method ?? "get";

    //routing
    if (url === "/") {
        dataResponse = {
            data: "Ini adalah halaman Homepage"
        }
    } else if (url === '/login') {
        if(method === 'POST'){
            dataResponse = {
            data: "Anda Berhasil Login dengan menggunkana method POST"
        }
    }else if(method === 'PUT') {
        dataResponse = {
            data: "PUT method was activated"
        }
    }
        else{
            dataResponse = {
                data: "Maaf, ubah terlebih dahulu menjadi method POST"
            }
        }
    } else{
        dataResponse = {
            data: "404 Not Found"
        }
    }

    return res.end(JSON.stringify(dataResponse))
})

server.listen(5000)