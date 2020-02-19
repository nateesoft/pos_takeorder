const db = require("../../config/db")
const table_name = "product_menu"

const ProductMenu = {
  findAll: function(callback) {
    return db.query(`select * from ${table_name}`, callback)
  },
  findByCode: function(code, callback) {
    return db.query(
      `select * from ${table_name} where code=? and status='Y'`,
      [code],
      callback
    )
  },
  findByGroup: function(group_code, callback) {
    return db.query(
      `select * from ${table_name} where group_code=? and status='Y'`,
      [group_code],
      callback
    )
  }
}

module.exports = ProductMenu
