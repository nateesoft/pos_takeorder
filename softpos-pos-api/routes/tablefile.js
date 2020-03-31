var express = require("express")
var router = express.Router()
const Task = require("../models/Tablefile")

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
router.get("/zone", function(req, res, next) {
  Task.zoneTable((err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json(rows)
    }
  })
})
router.get("/zone/:zone_code", function(req, res, next) {
  const zone_code = req.params.zone_code
  Task.findByZone(zone_code, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      res.json(rows)
    }
  })
})

module.exports = router
