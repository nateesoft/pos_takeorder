const mysql = require("mysql")
const fs = require("fs")

try {
  const mysql_ip = fs.readFileSync("mysql-ip", "utf8") || "localhost"
  console.log("connect mysql ip: ", mysql_ip.trim())
  const connection = mysql.createPool({
    host: mysql_ip,
    user: "root",
    password: "mysql5password",
    database: "pos_takeorder",
    port: "3306",
  })

  module.exports = connection
} catch (e) {
  console.log("Error:", e.stack)
}
