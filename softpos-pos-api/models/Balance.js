const db = require("../config/db")
const table_name = "balance"

const Balance = {
  findAll: (callback) => {
    return db.query(
      `select *  from ${table_name}`,
      callback
    )
  },
  create: (Balance, callback) => {
    const { 
      index, table, emp, plucode, pname, unit, group, price, qty, total
    } = Balance
    return db.query(
      `insert into ${table_name} (r_index, r_table, r_emp, r_plucode, 
        r_pname, r_unit, r_group, r_price, r_quan, r_total) 
        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [index, table, emp, plucode, pname, unit, group, price, qty, total],
      callback
    )
  },
  empty: (callback) => {
    return db.query(`delete from ${table_name}`, callback)
  }
}

module.exports = Balance
