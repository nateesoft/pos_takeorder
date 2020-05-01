const Task = require("../../models/pos/ProductMenu")
const express = require("express")
const router = express.Router()

router.get("/:search", (req, res, next) => {
  const searchTxt = req.params.search
  if (searchTxt) {
    Task.search(searchTxt, (err, rows) => {
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
  } else {
    Task.findAll((err, rows) => {
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
  }
})

module.exports = router
