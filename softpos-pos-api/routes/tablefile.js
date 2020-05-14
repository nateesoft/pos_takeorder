const express = require("express")
const router = express.Router()
const Task = require("../models/Tablefile")

/* GET employ listing. */
router.get("/", (req, res, next) => {
  Task.findAll((err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})
router.get("/zone", (req, res, next) => {
  Task.zoneTable((err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})
router.get("/zone/:zone_code", (req, res, next) => {
  const zone_code = req.params.zone_code
  Task.findByZone(zone_code, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

module.exports = router
