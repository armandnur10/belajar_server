const armand = require("http")

const nur = armand.createServer((req, res) =>{
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
nur.listen(5000)