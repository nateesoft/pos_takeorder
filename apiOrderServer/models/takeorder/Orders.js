const db = require("../../config")
const table_name = "orders"

const Orders = {
  findAll: (callback) => {
    return db.query(`select * from ${table_name}`, callback)
  },
  findByOrderNo: (order_no, callback) => {
    return db.query(
      `select * from ${table_name} where order_no=? and status='Y'`,
      [order_no],
      callback
    )
  },
  findOrderNotSendToBill: (order_no, callback) => {
    return db.query(
      `select * from orders_detail where order_no=? and order_send='N'`,
      [order_no],
      callback
    )
  },
  add: (Orders, callback) => {
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
  update: (order_no, Orders, callback) => {
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
  delete: (order_no, callback) => {
    return db.query(
      `delete from ${table_name} where order_no=?`,
      [order_no],
      callback
    )
  },
  move: (order_no, callback) => {
    return db.query(`select o.*, od.*  from orders_detail od 
      inner join orders o on od.order_no = o.order_no 
      where od.send_order='N' and od.order_no = ?`, 
      [order_no], callback)
  },
  updatAfterMove: (order_no, callback) => {
    return db.query(
      `update orders_detail set send_order='Y' 
      where order_no=? and send_order='N'`, 
      [order_no], callback)
  },
  empty: (callback) => {
    db.query(`delete from orders_detail`, (err, result, fields) => {
      if (err) throw err
    })
    db.query(`delete from orders_specialtext`, (err, result, fields) => {
      if (err) throw err
    })
    db.query(`delete from orders_subcode`, (err, result, fields) => {
      if (err) throw err
    })
    return db.query(`delete from orders`, callback)
  }
}

module.exports = Orders
