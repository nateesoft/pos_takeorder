const mysql = require("mysql")

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysql5password",
  database: "pos_softpos"
})

module.exports = connection