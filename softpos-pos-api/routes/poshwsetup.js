const express = require("express")
const router = express.Router()
const Task = require("../models/PosHwSetup")

router.get("/macno", (req, res, next) => {
  const ip = req.ip.split(':')[ req.ip.split(':').length-1]
  Task.getTerminalIdFromIP(ip, (err, response) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      if (response.status === 'Not_Found') {
        res.status(200).json({ 
          status: response.status, 
          msg: "Please register this machine in system" 
        })
      } else {
        res.status(200).json({ status: "Success", data: response.data.terminal })
      }
    }
  })
})

module.exports = router
