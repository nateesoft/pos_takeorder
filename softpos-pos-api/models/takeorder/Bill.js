const db = require("../../config/db")
const table_name = "bill"

const Bill = {
  findAll: function(callback) {
    return db.query(`select * from ${table_name}`, callback)
  },
  findByBillNo: function(bill_no, callback) {
    return db.query(
      `select * from ${table_name} where bill_no=? and status='Y'`,
      [bill_no],
      callback
    )
  },
  add: function(Bill, callback) {
    return db.query(
      `insert into ${table_name} values(?,?,?,?,?,?,'Y',now(),now())`,
      [
        Bill.bill_no,
        Bill.table_code,
        Bill.emp_code,
        Bill.cust_count,
        Bill.item_count,
        Bill.total_amount
      ],
      callback
    )
  },
  update: function(bill_no, Bill, callback) {
    return db.query(
      `update ${table_name} set cust_count=?, item_count=?, total_amount=?, status=? where bill_no=?`,
      [
        Bill.cust_count,
        Bill.item_count,
        Bill.total_amount,
        Bill.status,
        bill_no
      ],
      callback
    )
  },
  delete: function(bill_no, callback) {
    return db.query(
      `delete from ${table_name} where bill_no=?`,
      [bill_no],
      callback
    )
  }
}

module.exports = Bill
