const db = require("../../config/db")
const table_name = "menu_sublist"

const MenuSubList = {
  findAll: function(callback) {
    return db.query(`select * from ${table_name}`, callback)
  },
  findByCode: function(code, callback) {
    return db.query(
      `select p.* from product_menu p 
      inner join menu_sublist m on p.code=m.submenu_code 
      where m.menu_code=?`,
      [code],
      callback
    )
  }
}

module.exports = MenuSubList
