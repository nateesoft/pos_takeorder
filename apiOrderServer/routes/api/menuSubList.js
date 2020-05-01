const Task = require("../../models/pos/MenuSubList")
const express = require("express")
const router = express.Router()

router.get("/:menu_code", (req, res, next) => {
  const menu_code = req.params.menu_code
  Task.findByCode(menu_code, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      if (rows.length === 0) {
        res.status(200).json({ status: "not_found" })
      } else {
        res.status(200).json(rows)
      }
    }
  })
})

router.get("/index/:uid", (req, res, next) => {
  const uid = req.params.uid
  Task.findSublistByIndex(uid, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      if (rows.length === 0) {
        res.status(200).json({ status: "not_found" })
      } else {
        res.status(200).json(rows)
      }
    }
  })
})

module.exports = router
