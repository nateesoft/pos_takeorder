const Task = require("../../models/takeorder/Orders")
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
  Orders = {
    order_no: req.body.order_no,
    table_code: req.body.table_code,
    emp_code: req.body.emp_code,
    cust_count: req.body.cust_count,
    item_count: req.body.item_count,
    total_amount: req.body.total_amount
  }
  Task.add(Orders, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Success")
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
      res.json("Success")
    }
  })
})

router.delete("/:order_no/delete", (req, res, next) => {
  const order_no = req.params.order_no
  Task.delete(order_no, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Success")
    }
  })
})

router.post("/move", (req, res, next) => {
  Task.moveToBill(order_no, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Success")
    }
  })
})

module.exports = router
