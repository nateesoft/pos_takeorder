const Task = require("../../models/takeorder/MenuSubList")
const express = require("express")
const router = express.Router()

router.get("/:menu_code", (req, res, next) => {
  const menu_code = req.params.menu_code
  Task.findByCode(menu_code, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

router.get("/index/:uid", (req, res, next) => {
  const uid = req.params.uid
  Task.findSublistByIndex(uid, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

module.exports = router
