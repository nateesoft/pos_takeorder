const db = require("../config")
const table_name = "mgrbuttonsetup"

const MgrButtonSetup = {
  findByCode: (pcode, callback) => {
    return db.query(`select *  from ${table_name} where pcode=?`, [pcode], callback)
  },
  delete: (pcode, callback) => {
    return db.query(`delete from ${table_name} where pcode=?`, [pcode], callback)
  },
  add: (MgrButtonSetup, callback) => {
    const { 
      pcode, pdesc, sd_pcode, sd_pdesc,
      ex_pcode, ex_pdesc, ex_uncode, ex_undesc,
      auto_pcode, auto_pdesc, Check_before, Check_qty,
      qty, check_autoadd, Check_Extra
    } = MgrButtonSetup
    return db.query(
      `insert into ${table_name} (pcode, pdesc, sd_pcode, sd_pdesc,
        ex_pcode, ex_pdesc, ex_uncode, ex_undesc,
        auto_pcode, auto_pdesc, Check_before, Check_qty,
        qty, check_autoadd, Check_Extra) 
        values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [pcode, pdesc, sd_pcode, sd_pdesc,
        ex_pcode, ex_pdesc, ex_uncode, ex_undesc,
        auto_pcode, auto_pdesc, Check_before, Check_qty,
        qty, check_autoadd, Check_Extra], callback
    )
  }
}

module.exports = MgrButtonSetup
