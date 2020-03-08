const Task = require("../../models/pos/MenuSubList")
const express = require("express")
const router = express.Router()

router.get("/:menu_code", (req, res, next) => {
  const menu_code = req.params.menu_code
  Task.findByCode(menu_code, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json(rows)
    }
  })
})

module.exports = router
