const express = require('express')
const app = express()
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({
        status: true,
        message: "welcome to CI/CD",
        update: "update",
        error: null
    })
})


app.listen(port, () => console.log('> Server is up and running on port : http://localhost:' + port))