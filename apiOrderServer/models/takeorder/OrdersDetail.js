const db = require("../../config/db")
const table_name = "orders_detail"
const uuid = require("react-native-uuid")

const OrdersDetail = {
  findByOrderNo: function(order_no, callback) {
    return db.query(
      `select * from ${table_name} where order_no=? and status='Y' order by created_at`,
      [order_no],
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
  add: function(OrdersDetail, callback) {
    return db.query(
      `insert into ${table_name} values(?,?,?,?,?,?,?,'Y',now(),now(),?)`,
      [
        OrdersDetail.index,
        OrdersDetail.order_no,
        OrdersDetail.menu_code,
        OrdersDetail.menu_name,
        OrdersDetail.price,
        OrdersDetail.qty,
        OrdersDetail.total_amount,
        uuid.v4()
      ],
      callback
    )
  },
  update: function(index, OrdersDetail, callback) {
    return db.query(
      `update ${table_name} set qty=?, total_amount=? where index=?`,
      [OrdersDetail.qty, OrdersDetail.total_amount, index],
      callback
    )
  },
  delete: function(uid, callback) {
    return db.query(`delete from ${table_name} where uid=?`, [uid], callback)
  },
  empty: function(index, callback) {
    return db.query(`delete from ${table_name}`, [index], callback)
  }
}

module.exports = OrdersDetail
