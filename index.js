let express = require('express');
let app = express()
let env = require("./helper/env")
let port = env.PORT;

let { tesruter } = require('./router')

app.use("/ngetes", tesruter)

app.get('/', (req, res) => {
    res.send(`<h1>muncul kan</h1>`)
})

app.listen(port, () => console.log(env.DB_NAME + env.DB_PASSWORD + env.DB_USERNAME))