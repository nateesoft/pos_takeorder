var express = require("express")
var router = express.Router()
const Task = require("../models/Employ")

/* GET employ listing. */
router.post("/login", function(req, res, next) {
  const username = req.body.username
  const password = req.body.password
  Task.validLogin(username, password, (err, rows) => {
    if (err) {
      res.send(err)
    } else {
      if (rows.length === 0) {
        res.status(403).json({ msg: "Invalid" })
      } else {
        res.status(200).json({ msg: "Success" })
      }
    }
  })
})

module.exports = router
