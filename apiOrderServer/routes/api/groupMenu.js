const Task = require("../../models/takeorder/GroupMenu")
const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  // find all group menu
  Task.findAll((err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

router.post("/", (req, res, next) => {
  const { groupList } = req.body

  Task.updateMgr(groupList, (err, rows) => {
    if (err) {
      res.status(500).send({ status: 'Error', msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows });
    }
  })
})

module.exports = router
