const Task = require("../../models/takeorder/AppConfig")
const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  Task.find((err, response) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: response.data })
    }
  })
})

module.exports = router
