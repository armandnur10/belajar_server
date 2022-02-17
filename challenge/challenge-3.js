const armand = require("http")

const nur = armand.createServer((req, res) => {
    let url,
        dataResponse,
        method

    if (url === '/') {
        dataResponse = {
            data: "Ini adalah HomePage"
        }
    } else if (url === 'about') {
        dataResponse = {
            data: "Ini adalah AboutPage"
        }
    } else if (url === 'form') {
        if (method === 'POST') {
            dataResponse = {
                data: "You was activated form using POST"
            }
        } else {
            dataResponse = {
                data: "Sorry please entering this site use POST methods"
            }
        }

    } else {
        dataResponse = {
            data: "404 Page Not Found"
        }
    }
})
nur.listen(5000)