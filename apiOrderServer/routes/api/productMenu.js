const Task = require("../../models/pos/ProductMenu")
const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  const searchTxt = req.query.txt
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

router.get("/:group_code", (req, res, next) => {
  const group_code = req.params.group_code

  // find product from group code
  Task.findByGroup(group_code, (err, rows) => {
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
})

router.get("/:group_code/:product_code", (req, res, next) => {
  const group_code = req.params.group_code
  const product_code = req.params.product_code
  Task.findByGroupAndProduct(group_code, product_code, (err, rows) => {
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
})

router.get("/top/recommend", (req, res, next) => {
  Task.showRecommend((err, rows) => {
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
})

module.exports = router
