const Task = require("../../models/pos/ProductMenu")
const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  Task.findAll((err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json(rows)
    }
  })
})

router.get("/group_code", (req, res, next) => {
  const group_code = req.query.group_code
  Task.findByGroup(group_code, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json(rows)
    }
  })
})

module.exports = router
