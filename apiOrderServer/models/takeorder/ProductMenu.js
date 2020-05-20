const db = require("../../config")
const table_name = "product_menu"

const ProductMenu = {
  search: (searchTxt, callback) => {
    return db.query(
      `select * from ${table_name} where name like '%${searchTxt}%' and status = 'Y'`,
      callback
    )
  },
  findAll: (callback) => {
    return db.query(`select * from ${table_name}`, callback)
  },
  findByCode: (code, callback) => {
    return db.query(
      `select * from ${table_name} where code=? and status='Y'`,
      [code],
      callback
    )
  },
  findByGroup: (group_code, callback) => {
    return db.query(
      `select * from ${table_name} where group_code=? and status='Y'`,
      [group_code],
      callback
    )
  },
  findByGroupAndProduct: (group_code, product_code, callback) => {
    return db.query(
      `select * from ${table_name} where group_code=? and code=? and status='Y'`,
      [group_code, product_code],
      callback
    )
  },
  showRecommend: (callback) => {
    return db.query(
      `select * from ${table_name} where show_recommend='Y' and status='Y' order by code`,
      callback
    )
  }
}

module.exports = ProductMenu
