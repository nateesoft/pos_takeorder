const db = require("../config/db")

var Orders = {
  getAllOrders: function(callback) {
    return db.query("select * from orders", callback)
  },

  getOrdersByTableAndEmp: function(table_code, emp_code, callback) {
    return db.query(
      "select * from orders where table_code=? and emp_code=? and status='Y'",
      [table_code, emp_code],
      callback
    )
  },

  addOrders: function(Orders, callback) {
    return db.query(
      "insert into orders values(?,?,?,?,?,?,'Y',now(),now())",
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

  deleteOrders: function(order_no, callback) {
    return db.query("delete from orders where order_no=?", [order_no], callback)
  },

  updateOrders: function(order_no, Orders, callback) {
    return db.query(
      "update orders set cust_count=?, item_count=?, total_amount=? where order_no=?",
      [Orders.cust_count, Orders.item_count, Orders.total_amount, order_no],
      callback
    )
  }
}

module.exports = Orders
