const db = require("../config")
const table_name = "employ"

const Employ = {
  validLogin: (username, password, callback) => {
    return db.query(
      `select * from ${table_name} where code = ?`,
      [username],
      callback
    )
  }
}

module.exports = Employ
