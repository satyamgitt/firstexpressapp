// !made env variable for production ready app
require('dotenv').config()

const express = require('express')

// !main app variable
const app = express()

// !port
const port = 4000



// ! get request {home route and callback function}

app.get("/", (req, res) => {
    res.send("Lo Bhai Satyam Pahela app ban gya")
})

app.get("/twitter", (req, res) => {
    res.send("Jalwa hai Bhai ka ")
})

app.get("/youtube" , (req , res)=>{
res.send(`<h1>Hello Bro HTML</h1>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})