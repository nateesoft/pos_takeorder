const mysql = require("mysql")

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "myPassword",
  database: "pos_takeorder",
  port: "3306",
})

module.exports = connection
