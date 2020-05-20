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
  moveToBill: (order_no, callback) => {
    return db.query(
      `insert into bill
      (bill_no, table_code, emp_code, cust_count, item_count, total_amount, status, created_at ,updated_at) 
      select od.order_no, od.table_code, od.emp_code, od.cust_count, od.item_count, od.total_amount, 
      "Y", now(), now() from orders od where od.order_no=?`,
      [order_no],
      callback
    )
  },
  moveToBillDetail: (order_no, callback) => {
    return db.query(
      `insert into bill_detail
      (\`index\`, bill_no, menu_code, menu_name, price, qty, total_amount, status, created_at ,updated_at, uid) 
      select \`index\`, od.order_no, od.menu_code, od.menu_name, od.price, od.qty, od.total_amount, 
      "Y", now(), now(), od.uid from orders_detail od where od.order_no=? and od.send_order='N'`,
      [order_no],
      callback
    )
  },
  updateOrderDetailAfterMove: (order_no, callback) => {
    db.query(`update orders_detail set send_order='Y' where order_no=? and send_order='N'`, [order_no])
    return db.query(
      `select o.*, od.*  
        from orders_detail od inner join orders o on od.order_no = o.order_no 
        where od.order_no = ?`,
      [order_no],
      callback
    )
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
