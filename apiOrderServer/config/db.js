const mysql = require("mysql")
const fs = require("fs")
const path = require("path")

const mysqlIp =
  fs
    .readFileSync(path.join(__dirname, "mysql-ip"), { encoding: "utf8" })
    .trim() || "localhost"

console.log("connect mysql ip: ", mysqlIp)
const connection = mysql.createPool({
  host: mysqlIp,
  user: "root",
  password: "mysql5password",
  database: "pos_takeorder",
  port: "3306",
})

module.exports = connection
