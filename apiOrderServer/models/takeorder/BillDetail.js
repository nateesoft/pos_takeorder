const db = require("../../config/db")
const table_name = "bill_detail"

const BillDetail = {
  findByBillNo: function(bill_no, callback) {
    return db.query(
      `select * from ${table_name} where bill_no=? and status='Y'`,
      [bill_no],
      callback
    )
  },
  findByIndex: function(index, callback) {
    return db.query(
      `select * from ${table_name} where index=?`,
      [index],
      callback
    )
  },
  add: function(BillDetail, callback) {
    return db.query(
      `insert into ${table_name} values(?,?,?,?,?,?,?,'Y',now(),now())`,
      [
        BillDetail.index,
        BillDetail.bill_no,
        BillDetail.menu_code,
        BillDetail.menu_name,
        BillDetail.price,
        BillDetail.qty,
        BillDetail.total_amount
      ],
      callback
    )
  },
  update: function(index, BillDetail, callback) {
    return db.query(
      `update ${table_name} set qty=?, total_amount=? where index=?`,
      [BillDetail.qty, BillDetail.total_amount, BillDetail.status, index],
      callback
    )
  },
  delete: function(index, callback) {
    return db.query(
      `delete from ${table_name} where index=?`,
      [index],
      callback
    )
  }
}

module.exports = BillDetail
