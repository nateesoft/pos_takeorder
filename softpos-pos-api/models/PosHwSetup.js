const db = require("../config")
const table_name = "poshwsetup"

const PosHwSetup = {
  getTerminalIdFromIP: (ip, callback) => {
    db.query(`select terminal from ${table_name} where macno=?`, 
    [ip], (err, rows) => {
      if (err) 
        return callback(err, null)
      
      if (rows.length === 0)
        return callback(null, { status: 'Not_Found' })
      
      return callback(null, { status: 'Success', data: rows[0]})
    })
  },
  getTerminalId: (terminalId, callback) => {
    db.query(`select terminal from ${table_name} where Terminal=?`, 
    [terminalId], (err, rows) => {
      if (err) 
        return callback(err, null)
      
      if (rows.length === 0)
        return callback(null, { status: 'Not_Found' })
      
      return callback(null, { status: 'Success', data: rows[0]})
    })
  },
}

module.exports = PosHwSetup
