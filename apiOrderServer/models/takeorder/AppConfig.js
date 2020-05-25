const db = require("../../config")
const table_name = "app_config"

const AppConfig = {
  find: (callback) => {
    return db.query(`select * from ${table_name}`, (err, rows) => {
      if (err) 
        return callback(err, 'Error')
      
      if (rows.length === 0)
        return callback(null, 'Not_Found')
      
      callback(null, { status: 'Success', data: rows[0] })
    })
  },
}

module.exports = AppConfig
