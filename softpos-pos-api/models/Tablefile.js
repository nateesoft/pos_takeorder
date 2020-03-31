const db = require("../config/db")
const table_name = "tablefile"

const Tablefile = {
  findAll: function(callback) {
    return db.query(
      `select Tcode, SoneCode, MacNo, Cashier, TCustomer, TOnAct, ChkBill from ${table_name} order by SoneCode, Tcode`,
      callback
    )
  },
  zoneTable: function(callback) {
    return db.query(
      `select SoneCode from ${table_name} group by SoneCode order by SoneCode`,
      callback
    )
  },
  findByZone: function(zone_code, callback) {
    return db.query(
      `select Tcode, SoneCode, MacNo, Cashier, TCustomer, TOnAct, ChkBill from ${table_name} where SoneCode=? order by tcode`,
      [zone_code],
      callback
    )
  }
}

module.exports = Tablefile
