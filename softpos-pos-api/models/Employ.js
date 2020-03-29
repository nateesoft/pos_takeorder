const db = require("../config/db")
const table_name = "employ"

const Employ = {
  validLogin: function(username, password, callback) {
    return db.query(
      `select * from ${table_name} where name = ?`,
      [username],
      callback
    )
  }
}

module.exports = Employ
