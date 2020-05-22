const db = require("../config")
const table_name = "tablefile"

const Tablefile = {
  update: (tableFile, callback) => {
    const { table_code, cust_count }= tableFile
    return db.query(
      `update ${table_name} 
      set TCustomer=?, TOnAct='Y', TLoginDate=now() where Tcode=?`,
      [cust_count, table_code],
      callback
    )
  },
  findAll: (callback) => {
    return db.query(
      `select Tcode, TLoginDate, SoneCode, MacNo, Cashier, TCustomer, 
      TOnAct, ChkBill, NetTotal 
      from ${table_name} order by SoneCode, Tcode`,
      callback
    )
  },
  zoneTable: (callback) => {
    return db.query(
      `select SoneCode from ${table_name} group by SoneCode order by SoneCode`,
      callback
    )
  },
  findByZone: (zone_code, callback) => {
    return db.query(
      `select Tcode, SoneCode, MacNo, Cashier, TCustomer, TOnAct, ChkBill from ${table_name} where SoneCode=? order by tcode`,
      [zone_code],
      callback
    )
  }
}

module.exports = Tablefile
