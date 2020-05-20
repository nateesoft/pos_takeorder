const db = require("../../config")
const table_name = "group_menu"

const GroupMenu = {
  findAll: (callback) => {
    return db.query(`select * from ${table_name} where status='Y'`, callback)
  },
}

module.exports = GroupMenu
