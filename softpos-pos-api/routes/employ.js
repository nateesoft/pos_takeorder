const express = require("express")
const router = express.Router()
const Task = require("../models/Employ")

/* GET employ listing. */
router.post("/login", (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  Task.validLogin(username, password, (err, response) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      if (response.status === 'Invalid') {
        res.status(200).json({ 
          status: response.status, 
          msg: "Username/Password invalid" 
        })
      } else {
        res.status(200).json({ status: response.status, msg: "Success" })
      }
    }
  })
})

module.exports = router
