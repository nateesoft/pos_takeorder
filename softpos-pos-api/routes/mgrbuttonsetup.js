const express = require("express")
const router = express.Router()
const Task = require("../models/MgrButtonSetup")

router.get("/:pcode", (req, res, next) => {
  const pcode = req.params.pcode
  Task.findByCode(pcode, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})
router.delete("/:pcode", (req, res, next) => {
  const pcode = req.params.pcode
  Task.delete(pcode, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows.affectedRows })
    }
  })
})

router.post("/", (req, res, next) => {
  Task.add(req.body, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows.affectedRows })
    }
  })
})

module.exports = router
