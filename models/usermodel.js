const sql = require("sequelize")
const { postgre } = require("../database")

var connection = postgre.db

var mahasiswa = connection.define("mahasiswa",
    {
        nim: sql.INTEGER,
        nama: sql.STRING,
        jurusan: sql.STRING
    }, {
    freezeTableName: true,
    timestamps: false
})

mahasiswa.removeAttribute('id')
module.exports = mahasiswa;