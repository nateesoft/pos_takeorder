const Task = require("../../models/takeorder/ProductMenu")
const express = require("express")
const router = express.Router()

router.get("/:search", (req, res, next) => {
  const searchTxt = req.params.search
  if (searchTxt) {
    Task.search(searchTxt, (err, rows) => {
      if (err) {
        res.send({ status: "Error", msg: err.sqlMessage || err.errno })
      } else {
        res.status(200).json({ data: rows })
      }
    })
  } else {
    Task.findAll((err, rows) => {
      if (err) {
        res.send({ status: "Error", msg: err.sqlMessage || err.errno })
      } else {
        res.status(200).json({ data: rows })
      }
    })
  }
})

module.exports = router
