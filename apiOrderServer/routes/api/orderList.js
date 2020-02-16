const OrdersTask = require("../../models/Orders")
const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  const table_code = req.query.table
  const emp_code = req.query.emp
  OrdersTask.getOrdersByTableAndEmp(table_code, emp_code, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json(rows)
    }
  })
})

router.post("/create", (req, res, next) => {
  Orders = {
    order_no: req.body.order_no,
    table_code: req.body.table_code,
    emp_code: req.body.emp_code,
    cust_count: req.body.cust_count,
    item_count: req.body.item_count,
    total_amount: req.body.total_amount
  }
  OrdersTask.addOrders(Orders, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Add data success")
    }
  })
})

router.put("/:order_no/update", (req, res, next) => {
  const order_no = req.params.order_no
  Orders = {
    cust_count: req.body.cust_count,
    item_count: req.body.item_count,
    total_amount: req.body.total_amount
  }
  OrdersTask.updateOrders(order_no, Orders, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Update data success")
    }
  })
})

router.delete("/:order_no/delete", (req, res, next) => {
  const order_no = req.params.order_no
  OrdersTask.deleteOrders(order_no, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Delete data success")
    }
  })
})

module.exports = router
