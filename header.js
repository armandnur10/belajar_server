const http = require("http")

const server = http.createServer((req, res) =>{
    
    let dataHeader,
    dataAutorization,
    spilData,
    dataUser,
    dataResponse;

    res.setHeader("Content-Type", "application/json");

    dataHeader = req.headers;

    console.log(dataHeader);

    dataAutorization = dataHeader.authorization

    if(!dataAutorization){
        dataResponse = {
            data: "undifined Authorization"
        }

        return res.end(JSON.stringify(dataResponse))
    }
    spilData = dataAutorization.split(" ")

    dataUser = spilData[1]

    userPass = Buffer.from(dataUser, 'base64').toString();

    dataResponse = {
        token: dataHeader.authorization,
        userPass
    }

    return res.end(JSON.stringify(dataResponse))
})

server.listen(3000)