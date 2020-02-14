const mysql = require("mysql") // เรียกใช้งาน MySQL module

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql8password",
  database: "testdb"
})

db.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack)
    return
  }
  console.log("connected as id " + db.threadId)
})

module.exports = db
