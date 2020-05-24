const db = require("../../config")
const table_name = "orders_detail"

const OrdersDetail = {
  findByOrderNo: (order_no, callback) => {
    return db.query(
      `select * from ${table_name} where order_no=? and status='Y' order by created_at`,
      [order_no],
      callback
    )
  },
  findByOrderNoSummary: (order_no, callback) => {
    return db.query(
      `select od.send_order, od.menu_code, od.menu_name, od.price,
      (select sum(qty) from orders_detail d where d.menu_code = od.menu_code and d.order_no=od.order_no) total_qty, 
      (select sum(price) from orders_detail d where d.menu_code = od.menu_code and d.order_no=od.order_no) total_price,
      (select group_code from product_menu p where p.code = od.menu_code) group_code 
      from ${table_name} od 
      where od.order_no = ? and status='Y' 
      group by od.send_order, od.menu_code, od.menu_name, od.price 
      order by od.menu_name`,
      [order_no],
      callback
    )
  },
  findByProduct: (menu_code, order_no, callback) => {
    return db.query(
      `select p.group_code, t.*,
      (select group_concat(special_text) 
      from orders_specialtext ost 
      where ost.menu_index = t.uid) s_text,
      (select group_concat(p.name) 
      from orders_subcode st 
      left join product_menu p on st.sub_menu_code = p.code 
      where st.menu_index = t.uid) sub_code,  
      (select group_concat(p.code) 
      from orders_subcode st 
      left join product_menu p on st.sub_menu_code = p.code 
      where st.menu_index = t.uid) sub_code_list   
      from ${table_name} t left join product_menu p on t.menu_code = p.code 
      where menu_code=? and order_no = ?`,
      [menu_code, order_no],
      callback
    )
  },
  findByIndexForSubMenu: (uid, callback) => {
    return db.query(
      `select p.*, od.* 
      from orders_detail od 
      left join product_menu p on od.menu_code = p.code 
      where od.uid=?`,
      [uid],
      callback
    )
  },
  findByIndexForSpecialText: (uid, callback) => {
    return db.query(
      `select group_concat(special_text) special_text 
      from orders_specialtext os 
      where menu_index = ?`,
      [uid],
      callback
    )
  },
  add: (OrdersDetail, callback) => {
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
      uid, r_etd
    } = OrdersDetail
    if (specialText.length > 0) {
      for (let i = 0; i < specialText.length; i += 1) {
        const text = specialText[i].label
        db.query(`insert into orders_specialtext values(?, ?, ?, ?)`, [
          order_no,
          menu_code,
          text,
          uid,
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
          uid,
        ])
      }
    }
    return db.query(
      `insert into ${table_name} values(?,?,?,?,?,?,?,'Y',now(),now(),?,?,?)`,
      [
        index,
        order_no,
        menu_code,
        menu_name,
        price,
        qty,
        total_amount,
        uid,
        "N",
        r_etd
      ], (err, rows) => {
        if (err) throw err
        return db.query(`update orders o 
          set total_amount = (select sum(total_amount) from orders_detail od where od.order_no=o.order_no) 
          where order_no=?`, 
          [order_no], callback)
      }
    )
  },
  update: (index, OrdersDetail, callback) => {
    const {
      order_no,
      menu_code,
      specialText = [],
      subMenuCode = [],
    } = OrdersDetail

    db.query(
      `delete from orders_specialtext where menu_index=?`,
      [index],
      (err, result, fields) => {
        if (err) throw err
        console.log("truncate from orders_specialtext success")
        for (let i = 0; i < specialText.length; i += 1) {
          const text = specialText[i].label
          db.query(
            `insert into orders_specialtext values(?, ?, ?, ?)`,
            [order_no, menu_code, text, index],
            (err, result, fields) => {
              if (err) throw err
              console.log("update orders_specialtext success")
            }
          )
        }
      }
    )

    db.query(
      `delete from orders_subcode where menu_index=?`,
      [index],
      (err, result, fields) => {
        if (err) throw err
          console.log("truncate from orders_subcode success")
        for (let i = 0; i < subMenuCode.length; i += 1) {
          const code = subMenuCode[i]
          db.query(
            `insert into orders_subcode values(?, ?, ?, ?)`,
            [order_no, menu_code, code, index],
            (err, result, fields) => {
              if (err) throw err
              console.log("update orders_subcode success")
            }
          )
        }
      }
    )
    return db.query(`update orders o 
      set total_amount = (select sum(total_amount) from orders_detail od where od.order_no=o.order_no) 
      where order_no=?`, 
      [order_no], callback)
  },
  delete: (index, order_no, callback) => {
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
    db.query(`delete from ${table_name} where uid=?`, [index], (err, rows)=>{
      if (err) throw err
      return db.query(`update orders o 
        set total_amount = (select sum(total_amount) from orders_detail od where od.order_no=o.order_no) 
        where order_no=?`, 
        [order_no], callback)
    })
  }
}

module.exports = OrdersDetail
