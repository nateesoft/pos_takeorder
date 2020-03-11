const Task = require("../../models/takeorder/BillDetail")
const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  const bill_no = req.query.bill_no
  Task.findByBillNo(bill_no, (err, rows) => {
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
  BillDetail = {
    index: req.body.index,
    bill_no: req.body.bill_no,
    order_no: req.body.order_no,
    menu_code: req.body.menu_code,
    menu_name: req.body.menu_name,
    price: req.body.price,
    qty: req.body.qty,
    total_amount: req.body.total_amount
  }
  Task.add(BillDetail, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Success")
    }
  })
})

router.put("/:bill_no/update", (req, res, next) => {
  const bill_no = req.params.bill_no
  BillDetail = {
    cust_count: req.body.cust_count,
    item_count: req.body.item_count,
    total_amount: req.body.total_amount
  }
  Task.update(bill_no, BillDetail, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Success")
    }
  })
})

router.delete("/:bill_no/delete", (req, res, next) => {
  const bill_no = req.params.bill_no
  Task.delete(bill_no, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Success")
    }
  })
})

router.delete("/empty", (req, res, next) => {
  Task.empty((err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json("Success")
    }
  })
})

module.exports = router
