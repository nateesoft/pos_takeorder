var express = require("express")
var router = express.Router()
const Task = require("../models/Balance")

/* GET employ listing. */
router.get("/", function(req, res, next) {
  Task.findAll((err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json(rows)
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
      macno: "001",
      emp: balance.emp_code, 
      plucode: balance.menu_code, 
      pname: balance.menu_name, 
      unit: balance.unit, 
      group: balance.group, 
      stock: "A1", 
      price: balance.price, 
      qty: balance.qty,
      total: balance.total_amount
    }
    Task.create(Balance, (err, rows) => {
      if (err) {
        console.err(err)
      } else {
        console.info(rows)
      }
    })
  }
})

module.exports = router
