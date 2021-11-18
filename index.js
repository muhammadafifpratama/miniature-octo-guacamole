let express = require('express');
let app = express()
let env = require("./helper/env")
let port = env.PORT;

let { userouter } = require('./router')

app.use("/ngetes", userouter)

app.get('/', (req, res) => {
    res.send(`<h1>muncul kan</h1>`)
})

app.listen(port, () => console.log(port))