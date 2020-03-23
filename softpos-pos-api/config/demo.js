const db = require("../config/db")

const Orders = {
  getAllOrders: function(callback) {
    return db.query("select * from orders", callback)
  },

  getOrdersByTable: function(id, callback) {
    return db.query("select * from orders where Id=?", [id], callback)
  },

  addOrders: function(Orders, callback) {
    return db.query(
      "insert into orders values(?,?,?)",
      [Orders.Id, Orders.Title, Orders.Status],
      callback
    )
  },

  deleteOrders: function(id, callback) {
    return db.query("delete from orders where id=?", [id], callback)
  },

  updateOrders: function(id, Orders, callback) {
    return db.query(
      "update orders set title=?, status=? where Id=?",
      [Orders.Title, Orders.Status, id],
      callback
    )
  }
}

module.exports = Orders
