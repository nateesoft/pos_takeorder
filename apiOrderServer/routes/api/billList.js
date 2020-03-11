const Task = require("../../models/takeorder/Bill")
const express = require("express")
const router = express.Router()

/* GET data listing. */
router.get("/", function(req, res, next) {
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
  billList.push({
    code: req.body.code,
    name: req.body.name,
    price: req.body.price
  })
  res.send("Success")
})

module.exports = router
