const db = require("../config")
const table_name = "product"

const Product = {
  findAll: (callback) => {
    return db.query(
      `select *  from ${table_name}`,
      callback
    )
  },
  findByCode: (pcode, callback) => {
    return db.query(
      `select *  from ${table_name} where pcode=? and PActive='Y'`,
      [pcode],
      callback
    )
  },
}

module.exports = Product
