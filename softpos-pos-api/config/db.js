const mysql = require("mysql")

const connection = mysql.createPool({
  host: "172.17.0.7",
  user: "root",
  password: "mysql5password",
  database: "pos_softpos",
  port: "3306",
})

module.exports = connection
