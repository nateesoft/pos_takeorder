const express = require("express")
const router = express.Router()
const Task = require("../models/Balance")

router.get("/", (req, res, next) => {
  Task.findAll((err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

router.get("/table/:tableNo", (req, res, next) => {
  const tableNo = req.params.tableNo
  Task.findByTable(tableNo, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

router.post("/create", (req, res, next) => {
  const { balance } = req.body
  const Balance = {
    index: balance.index, 
    table: balance.table_code, 
    emp: balance.emp_code, 
    plucode: balance.menu_code, 
    pname: balance.menu_name, 
    unit: balance.unit, 
    group: balance.group, 
    price: balance.price, 
    qty: balance.qty,
    total: balance.total_amount
  }
  Task.create(Balance, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ "Success": rows.affectedRows })
    }
  })
})

router.post("/reset_balance", (req, res, next) => {
    Task.empty((err, rows) => {
      if (err) {
        res.send({ status: "Error", msg: err.sqlMessage || err.errno })
      } else {
        res.status(200).json({ delete_count: rows.affectedRows })
      }
    })
})

router.post("/getIndex", (req, res, next) => {
  const tableNo = req.body.table_no
    Task.getIndexBalance(tableNo, (err, newIndex) => {
      if (err) {
        res.send({ status: "Error", msg: err.sqlMessage || err.errno })
      } else {
        res.status(200).json({ data: newIndex })
      }
    })
})

module.exports = router
