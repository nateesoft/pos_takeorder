const db = require("../../config/db")
const table_name = "orders_detail"
const uuid = require("react-native-uuid")

const OrdersDetail = {
  findByOrderNo: function (order_no, callback) {
    return db.query(
      `select * from ${table_name} where order_no=? and status='Y' order by created_at`,
      [order_no],
      callback
    )
  },
  findByOrderNoSummary: function (order_no, callback) {
    return db.query(
      `select od.menu_code, od.menu_name, od.price,
      (select sum(qty) from orders_detail d where d.menu_code = od.menu_code and d.order_no=od.order_no) total_qty, 
      (select sum(price) from orders_detail d where d.menu_code = od.menu_code and d.order_no=od.order_no) total_price 
      from ${table_name} od 
      where od.order_no = ? and status='Y' 
      group by od.menu_code, od.menu_name, od.price 
      order by od.menu_name`,
      [order_no],
      callback
    )
  },
  findByProduct: function (menu_code, order_no, callback) {
    return db.query(
      `select t.*,
      (select group_concat(special_text) 
      from orders_specialtext ost 
      where ost.menu_index = t.uid) s_text,
      (select group_concat(p.name) 
      from orders_subcode st 
      left join product_menu p on st.sub_menu_code = p.code 
      where st.menu_index = t.uid) sub_code  
      from ${table_name} t where menu_code=? and order_no = ?`,
      [menu_code, order_no],
      callback
    )
  },
  findByIndex: function (index, callback) {
    return db.query(
      `select * from ${table_name} where index=?`,
      [index],
      callback
    )
  },
  add: function (OrdersDetail, callback) {
    const new_uuid = uuid.v4()
    const { specialText = [], subMenuCode = [] } = OrdersDetail
    if (specialText.length > 0) {
      for (let i = 0; i < specialText.length; i += 1) {
        const text = specialText[i].label
        db.query(`insert into orders_specialtext values(?, ?, ?, ?)`, [
          OrdersDetail.order_no,
          OrdersDetail.menu_code,
          text,
          new_uuid,
        ])
      }
    }

    if (subMenuCode.length > 0) {
      for (let i = 0; i < subMenuCode.length; i += 1) {
        const code = subMenuCode[i]
        db.query(`insert into orders_subcode values(?, ?, ?, ?)`, [
          OrdersDetail.order_no,
          OrdersDetail.menu_code,
          code,
          new_uuid,
        ])
      }
    }
    return db.query(
      `insert into ${table_name} values(?,?,?,?,?,?,?,'Y',now(),now(),?,?)`,
      [
        OrdersDetail.index,
        OrdersDetail.order_no,
        OrdersDetail.menu_code,
        OrdersDetail.menu_name,
        OrdersDetail.price,
        OrdersDetail.qty,
        OrdersDetail.total_amount,
        new_uuid,
        "N",
      ],
      callback
    )
  },
  update: function (index, OrdersDetail, callback) {
    return db.query(
      `update ${table_name} set qty=?, total_amount=? where index=?`,
      [OrdersDetail.qty, OrdersDetail.total_amount, index],
      callback
    )
  },
  delete: function (uid, callback) {
    return db.query(`delete from ${table_name} where uid=?`, [uid], callback)
  },
}

module.exports = OrdersDetail
