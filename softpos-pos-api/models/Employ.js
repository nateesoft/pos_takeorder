const db = require("../config")
const table_name = "employ"

const Employ = {
  validLogin: (username, password, callback) => {
    db.query(`select * from ${table_name} where code = ?`, 
    [username], (err, rows) => {
      if (err) 
        return callback(err, null)

      if (rows.length === 0)
        return callback(null, { status: 'Invalid' })
      
      callback(null, { status: 'Success', data: rows[0] })
    }
  )
  }
}

module.exports = Employ
