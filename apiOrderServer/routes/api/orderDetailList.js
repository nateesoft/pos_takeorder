const Task = require("../../models/takeorder/OrdersDetail")
const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  const order_no = req.query.order_no
  Task.findByOrderNo(order_no, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      if (rows.length === 0) {
        res.json({ status: "not_found" })
      } else {
        res.json(rows)
      }
    }
  })
})

router.get("/sum", (req, res, next) => {
  const order_no = req.query.order_no
  Task.findByOrderNoSummary(order_no, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      if (rows.length === 0) {
        res.json({ status: "not_found" })
      } else {
        res.json(rows)
      }
    }
  })
})

router.get("/product", (req, res, next) => {
  const order_no = req.query.order_no
  const menu_code = req.query.menu_code
  Task.findByProduct(menu_code, order_no, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      if (rows.length === 0) {
        res.json({ status: "not_found" })
      } else {
        res.json(rows)
      }
    }
  })
})

router.post("/create", (req, res, next) => {
  OrdersDetail = {
    order_no: req.body.order_no,
    table_code: req.body.table_code,
    emp_code: req.body.emp_code,
    cust_code: req.body.cust_code,
    order_status: req.body.order_status,
    index: req.body.index,
    menu_code: req.body.menu_code,
    menu_name: req.body.menu_name,
    price: req.body.price,
    qty: req.body.qty,
    total_amount: req.body.total_amount,
    order_detail_status: req.body.order_detail_status
  }
  Task.add(OrdersDetail, (err, rows) => {
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

router.delete("/", (req, res, next) => {
  const uid = req.body.uid
  Task.delete(uid, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Success")
    }
  })
})

router.delete("/empty", (req, res, next) => {
  const order_no = req.params.order_no
  Task.empty((err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Success")
    }
  })
})

module.exports = router
