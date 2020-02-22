const Task = require("../../models/takeorder/OrdersDetail")
const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  const order_no = req.query.order_no
  Task.findByOrderNo(order_no, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json(rows)
    }
  })
})

router.post("/create", (req, res, next) => {
  OrdersDetail = {
    index: req.body.index,
    order_no: req.body.order_no,
    menu_code: req.body.menu_code,
    menu_name: req.body.menu_name,
    price: req.body.price,
    qty: req.body.qty,
    total_amount: req.body.total_amount
  }
  Task.add(OrdersDetail, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Add order detail success")
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
  Task.update(order_no, Orders, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Update data success")
    }
  })
})

router.delete("/:index/delete", (req, res, next) => {
  const index = req.params.index
  Task.delete(index, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Delete product success")
    }
  })
})

router.delete("/empty", (req, res, next) => {
  const order_no = req.params.order_no
  Task.empty((err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Truncate order detail success")
    }
  })
})

module.exports = router
