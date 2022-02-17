/*
core modul : http
membuat server menggunakan module http
*/

const http = require("http")

const server = http.createServer((req, res) => {

    //inisialisasi variable yag akan digunakan
    let data;

    console.log(req)

    /**
     * object request itu banyak, tapi yang dipakai cuma 3: url, method, headers
     */

    data = {
        url : req.url,
        method : req.method,
        header : req.headers
    }

    //ini akan merubah set response menjadi berupa data json
    res.setHeader("Content-Type", "application/json")

    res.end(JSON.stringify(data))
})

server.listen(5000)

