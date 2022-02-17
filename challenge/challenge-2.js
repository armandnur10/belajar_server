const armand = require("http")

const nur = armand.createServer((req, res) =>{
    let url,
    dataResponse

    if (url === '/') {
        dataResponse = {
            data: "Ini adalah HomePage"
        }
    }
    else if (url === 'about') {
        dataResponse = {
            data: "Ini adalah AboutPage"
        }
    }
    else if (url === 'form') {
        dataResponse = {
            data: "Ini adalah FormPage"
        }
    }
    else {
        dataResponse = {
            data: "404 Page Not Found"
        }
    }
})
nur.listen(5000)