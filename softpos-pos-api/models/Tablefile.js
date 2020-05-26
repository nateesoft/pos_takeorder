const db = require("../config")
const table_name = "tablefile"

const Tablefile = {
  update: (tableFile, callback) => {
    const { table_code, cust_count, macno }= tableFile
    return db.query(
      `update ${table_name} 
      set TCustomer=?, TOnAct='Y', macno=?, TLoginDate=now() 
      where Tcode=?`,
      [cust_count, macno, table_code],
      callback
    )
  },
  updateTotal: (tableNo, callback) => {
    return db.query(
      `update ${table_name} set TOnAct='N', 
      NetTotal = (select sum(r_total) from balance b where R_Table = Tcode) 
      where Tcode=?`,
      [tableNo],
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
  findEmptyAll: (callback) => {
    return db.query(
      `select Tcode, TLoginDate, SoneCode, MacNo, Cashier, TCustomer, 
      TOnAct, ChkBill, NetTotal 
      from ${table_name} 
      where TCustomer = 0 and NetTotal = 0 order by SoneCode, Tcode`,
      callback
    )
  },
  searchTable: (table_code, callback) => {
    return db.query(
      `select Tcode, TLoginDate, SoneCode, MacNo, Cashier, TCustomer, 
      TOnAct, ChkBill, NetTotal 
      from ${table_name} where Tcode like '%${table_code}%'`,
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
