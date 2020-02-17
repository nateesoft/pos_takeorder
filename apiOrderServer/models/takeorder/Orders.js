const db = require("../../config/db")
const table_name = "orders"

const Orders = {
  findAll: function(callback) {
    return db.query(`select * from ${table_name}`, callback)
  },
  findByOrderNo: function(order_no, callback) {
    return db.query(
      `select * from ${table_name} where order_no=? and status='Y'`,
      [order_no],
      callback
    )
  },
  add: function(Orders, callback) {
    return db.query(
      `insert into ${table_name} values(?,?,?,?,?,?,'Y',now(),now())`,
      [
        Orders.order_no,
        Orders.table_code,
        Orders.emp_code,
        Orders.cust_count,
        Orders.item_count,
        Orders.total_amount
      ],
      callback
    )
  },
  update: function(order_no, Orders, callback) {
    return db.query(
      `update ${table_name} set cust_count=?, item_count=?, total_amount=?, status=? where order_no=?`,
      [
        Orders.cust_count,
        Orders.item_count,
        Orders.total_amount,
        Orders.status,
        order_no
      ],
      callback
    )
  },
  delete: function(order_no, callback) {
    return db.query(
      `delete from ${table_name} where order_no=?`,
      [order_no],
      callback
    )
  },
  moveToBill: function(order_no, callback) {
    return db.query(
      `insert into bill
      (bill_no, order_no, table_code, emp_code, cust_count, item_count, total_amount, status, created_at ,updated_at) 
      select "b001", od.order_no, od.table_code, od.emp_code, od.cust_count, od.item_count, od.total_amount, 
      "Y", now(), now() 
      from orders od where order_no=?`,
      [order_no],
      callback
    )
  }
}

module.exports = Orders
