const express = require("express")
const router = express.Router()
const Task = require("../models/Stock")

router.get("/getName", (req, res, next) => {
  const pCode = '08001'
  const tableNo = 'A1'
  const macNo = '001'
  Task.getStockName(pCode, tableNo, macNo, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

module.exports = router
