const mysql = require("mysql")

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysql5password",
  database: "pos_takeorder"
})

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "mysql5password",
//   database: "pos_takeorder"
// })

// connection.connect(function(err) {
//   if (err) throw err
//   console.log("Connected!")
// })

module.exports = connection
