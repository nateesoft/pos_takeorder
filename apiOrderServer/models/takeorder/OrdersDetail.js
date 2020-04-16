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
      (select sum(price) from orders_detail d where d.menu_code = od.menu_code and d.order_no=od.order_no) total_price,
      (select group_code from product_menu p where p.code = od.menu_code) group_code 
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
      `select p.group_code, t.*,
      (select group_concat(special_text) 
      from orders_specialtext ost 
      where ost.menu_index = t.uid) s_text,
      (select group_concat(p.name) 
      from orders_subcode st 
      left join product_menu p on st.sub_menu_code = p.code 
      where st.menu_index = t.uid) sub_code  
      from ${table_name} t left join product_menu p on t.menu_code = p.code 
      where menu_code=? and order_no = ?`,
      [menu_code, order_no],
      callback
    )
  },
  findByIndexForSubMenu: function (uid, callback) {
    return db.query(
      `select p.*, od.* 
      from orders_detail od 
      left join product_menu p on od.menu_code = p.code 
      where od.uid=?`,
      [uid],
      callback
    )
  },
  findByIndexForSpecialText: function (uid, callback) {
    return db.query(
      `select group_concat(special_text) special_text 
      from orders_specialtext os 
      where menu_index = ?`,
      [uid],
      callback
    )
  },
  add: function (OrdersDetail, callback) {
    const new_uuid = uuid.v4()
    const {
      order_no,
      index,
      menu_code,
      menu_name,
      price,
      qty,
      total_amount,
      specialText = [],
      subMenuCode = [],
    } = OrdersDetail
    if (specialText.length > 0) {
      for (let i = 0; i < specialText.length; i += 1) {
        const text = specialText[i].label
        db.query(`insert into orders_specialtext values(?, ?, ?, ?)`, [
          order_no,
          menu_code,
          text,
          new_uuid,
        ])
      }
    }

    if (subMenuCode.length > 0) {
      for (let i = 0; i < subMenuCode.length; i += 1) {
        const code = subMenuCode[i]
        db.query(`insert into orders_subcode values(?, ?, ?, ?)`, [
          order_no,
          menu_code,
          code,
          new_uuid,
        ])
      }
    }
    return db.query(
      `insert into ${table_name} values(?,?,?,?,?,?,?,'Y',now(),now(),?,?)`,
      [
        index,
        order_no,
        menu_code,
        menu_name,
        price,
        qty,
        total_amount,
        new_uuid,
        "N",
      ],
      callback
    )
  },
  update: function (index, OrdersDetail, callback) {
    const {
      order_no,
      menu_code,
      price,
      specialText = [],
      subMenuCode = [],
    } = OrdersDetail
    if (specialText.length > 0) {
      for (let i = 0; i < specialText.length; i += 1) {
        const text = specialText[i].label
        db.query(
          `delete from orders_specialtext where menu_index=?`,
          [index],
          (err, result, fields) => {
            if (err) throw err
            db.query(
              `insert into orders_specialtext values(?, ?, ?, ?)`,
              [order_no, menu_code, text, index],
              (err, result, fields) => {
                if (err) throw err
                console.log("update orders_specialtext success")
              }
            )
          }
        )
      }
    }
    if (subMenuCode.length > 0) {
      for (let i = 0; i < subMenuCode.length; i += 1) {
        const code = subMenuCode[i]
        db.query(
          `delete from orders_subcode where menu_index=?`,
          [index],
          (err, result, fields) => {
            if (err) throw err
            db.query(
              `insert into orders_subcode values(?, ?, ?, ?)`,
              [order_no, menu_code, code, index],
              (err, result, fields) => {
                if (err) throw err
                console.log("update orders_subcode success")
              }
            )
          }
        )
      }
    }
    return db.query(
      `update ${table_name} set qty=qty+1, total_amount=(total_amount+?) where uid=?`,
      [price, index],
      callback
    )
  },
  delete: function (index, callback) {
    db.query(
      `delete from orders_specialtext where menu_index=?`,
      [index],
      (err, result, fields) => {
        if (err) throw err
      }
    )
    db.query(
      `delete from orders_subcode where menu_index=?`,
      [index],
      (err, result, fields) => {
        if (err) throw err
      }
    )
    return db.query(`delete from ${table_name} where uid=?`, [index], callback)
  },
  empty: function (callback) {
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
  },
}

module.exports = OrdersDetail
