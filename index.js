const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.json({
        status: true,
        message: "welcome to CI/CD"
    })
})


app.listen(port, () => console.log('> Server is up and running on port : http://localhost:' + port))