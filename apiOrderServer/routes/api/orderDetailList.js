const Task = require("../../models/takeorder/OrdersDetail")
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

router.get("/sub_menu/:uid", (req, res, next) => {
  const uid = req.params.uid
  Task.findByIndexForSubMenu(uid, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

router.get("/special_text/:uid", (req, res, next) => {
  const uid = req.params.uid
  Task.findByIndexForSpecialText(uid, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

router.get("/sum", (req, res, next) => {
  const order_no = req.query.order_no
  Task.findByOrderNoSummary(order_no, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

router.get("/product", (req, res, next) => {
  const order_no = req.query.order_no
  const menu_code = req.query.menu_code
  Task.findByProduct(menu_code, order_no, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

router.post("/create", (req, res, next) => {
  OrdersDetail = {
    uid: req.body.uid,
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
    order_detail_status: req.body.order_detail_status,
    specialText: req.body.special_text,
    subMenuCode: req.body.sub_menu_code,
    r_etd: req.body.r_etd
  }
  Task.add(OrdersDetail, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({"Success": rows.affectedRows})
    }
  })
})

router.put("/:index/update", (req, res, next) => {
  const index = req.params.index
  OrdersDetail = {
    order_no: req.body.order_no,
    menu_code: req.body.menu_code,
    specialText: req.body.special_text,
    subMenuCode: req.body.sub_menu_code,
  }
  Task.update(index, OrdersDetail, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({"Success": rows.affectedRows})
    }
  })
})

router.delete("/", (req, res, next) => {
  const uid = req.body.uid
  const order_no = req.body.order_no
  Task.delete(uid, order_no, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({"Success": rows.affectedRows})
    }
  })
})

router.delete("/empty", (req, res, next) => {
  Task.empty((err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({"Success": rows.affectedRows})
    }
  })
})

module.exports = router
