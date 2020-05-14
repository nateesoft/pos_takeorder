const express = require("express")
const router = express.Router()
const Task = require("../models/Employ")

/* GET employ listing. */
router.post("/login", (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  Task.validLogin(username, password, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      if (rows.length === 0) {
        res.status(403).json({ status: "Invalid", msg: "Username/Password invalid" })
      } else {
        res.status(200).json({ status: "Success", msg: "Success" })
      }
    }
  })
})

module.exports = router
