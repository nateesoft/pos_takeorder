const express = require("express")
const router = express.Router()
const Task = require("../models/PosConfigSetup")

router.get("/", (req, res, next) => {
  Task.getData((err, rows) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

module.exports = router
