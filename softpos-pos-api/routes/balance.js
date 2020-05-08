var express = require("express")
var router = express.Router()
const Task = require("../models/Balance")

/* GET employ listing. */
router.get("/", function(req, res, next) {
  Task.findAll((err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})
router.post("/create", function(req, res, next) {
  const { balance: balanceRequest } = req.body
  for(let i=0;i<balanceRequest.length;i++){
    const balance = balanceRequest[i]
    Balance = {
      index: balance.index.substring(0, 10), 
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
        console.error(err)
      } else {
        console.info('add to balance +1')
      }
    })
  }
})

module.exports = router
