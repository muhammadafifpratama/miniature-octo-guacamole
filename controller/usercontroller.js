const User = require("../models")

module.exports = {
    tes: (req, res) => {
        User.asd.findAll()
            .then(res => { res.status(200).send(res) })
    }
}