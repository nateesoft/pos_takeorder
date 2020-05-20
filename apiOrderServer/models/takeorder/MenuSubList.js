const db = require("../../config")
const table_name = "menu_sublist"

const MenuSubList = {
  findAll: (callback) => {
    return db.query(`select * from ${table_name}`, callback)
  },
  findByCode: (code, callback) => {
    return db.query(
      `select p.* from product_menu p 
      inner join menu_sublist m on p.code=m.submenu_code 
      where m.menu_code=?`,
      [code],
      callback
    )
  },
  findSublistByIndex: (uid, callback) => {
    return db.query(
      `select p.*, os.* 
      from orders_subcode os left join product_menu p on os.sub_menu_code = p.code 
      where os.menu_index = ?`,
      [uid],
      callback
    )
  },
}

module.exports = MenuSubList
