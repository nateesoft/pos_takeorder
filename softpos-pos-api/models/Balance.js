const db = require("../config/db")
const Stock = require("./Stock")
const table_name = "balance"

const Balance = {
  findAll: (callback) => {
    return db.query(
      `select *  from ${table_name}`,
      callback
    )
  },
  findByTable: (tableNo, callback) => {
    return db.query(
      `select *  from ${table_name} where r_table=?`,
      [tableNo],
      callback
    )
  },
  create: (Balance, callback) => {
    const { 
      index, table, emp, plucode, pname, unit, group, price, qty, total, macno
    } = Balance
    
    Stock.getStockName(plucode, macno, (err, rows) => {
      if (err) throw err
      if (rows.length === 0) {
        return db.query(
          `insert into balance (r_index, r_table, r_emp, r_plucode, 
            r_pname, r_unit, r_group, r_price, r_quan, r_total) 
            values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [index, table, emp, plucode, pname, unit, group, price, qty, total],
          callback
        )
      }
      rows.map(stock => {
        Stock.updateSTKFileAdd(plucode, stock.StkCode, qty, (err1, rows1) => {
          if (err1) throw err1
          if (rows1.length === 0) {
            return db.query(
              `insert into balance (r_index, r_table, r_emp, r_plucode, 
                r_pname, r_unit, r_group, r_price, r_quan, r_total) 
                values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
              [index, table, emp, plucode, pname, unit, group, price, qty, total],
              callback
            )
          }
          const currDate = new Date()
          const STCardBean = {
            S_No: `1 ${currDate.getHours()}:${currDate.getMinutes()}:${currDate.getSeconds()}`, 
            S_SubNo: '', 
            S_Que: 0, 
            S_PCode: plucode, 
            S_Stk: stock.StkCode, 
            S_In: 0, 
            S_Out: qty, 
            S_InCost: 0, 
            S_OutCost: qty*price,
            S_ACost: 0, 
            S_Rem: 'SAL', 
            S_User: emp, 
            S_Link: ''
          }
          Stock.saveSTCard(STCardBean, (err2, rows2) => {
            if (err2) throw err2
            return db.query(
              `insert into balance (r_index, r_table, r_emp, r_plucode, 
                r_pname, r_unit, r_group, r_price, r_quan, r_total) 
                values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
              [index, table, emp, plucode, pname, unit, group, price, qty, total],
              callback
            )
          })
        })
      })
    })
  },
  empty: (callback) => {
    return db.query(`delete from ${table_name}`, callback)
  }
}

module.exports = Balance
