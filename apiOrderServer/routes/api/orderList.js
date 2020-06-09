const Task = require("../../models/takeorder/Orders")
const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  const order_no = req.query.order_no
  Task.findByOrderNo(order_no, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
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
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({"Success": rows.affectedRows})
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
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({"Success": rows.affectedRows})
    }
  })
})

router.patch("/:order_no", (req, res, next) => {
  const { order_no, table_code } = req.body
  Task.updatTableChange(order_no, table_code, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({"Success": rows.affectedRows})
    }
  })
})

router.delete("/:order_no/delete", (req, res, next) => {
  const order_no = req.params.order_no
  Task.delete(order_no, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({"Success": rows.affectedRows})
    }
  })
})

router.post("/move", (req, res, next) => {
  const order_no = req.body.order_no
  Task.move(order_no, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

router.post("/move_update", (req, res, next) => {
  const order_no = req.body.order_no
  Task.updatAfterMove(order_no, (err1, rows1) => {
    if (err1) {
      res.send({ status: "Error", msg: err1.sqlMessage || err1.errno })
    } else {
      res.status(200).json({ data: rows1 })
    }
  })
})

router.post("/reset_order", (req, res, next) => {
  Task.empty((err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ delete_count: rows.affectedRows })
    }
  })
})

module.exports = router
