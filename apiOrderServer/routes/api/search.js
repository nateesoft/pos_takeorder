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
          res.json({ status: "not_found" })
        } else {
          res.json(rows)
        }
      }
    })
  } else {
    Task.findAll((err, rows) => {
      if (err) {
        res.send(err)
      } else {
        if (rows.length === 0) {
          res.json({ status: "not_found" })
        } else {
          res.json(rows)
        }
      }
    })
  }
})

module.exports = router
