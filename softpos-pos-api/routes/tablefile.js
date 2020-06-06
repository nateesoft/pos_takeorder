const express = require("express")
const router = express.Router()
const Task = require("../models/Tablefile")

/* GET employ listing. */
router.get("/get/:table_code", (req, res, next) => {
  const table_code = req.params.table_code
  Task.findByTCode(table_code, (err, rows) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})
router.get("/", (req, res, next) => {
  Task.findEmptyAll((err, rows) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})
router.get("/all", (req, res, next) => {
  Task.findAll((err, rows) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})
router.post("/", (req, res, next) => {
  const { table_code, cust_count, macno, emp_code } = req.body
  const tableFile = {
    table_code, cust_count, macno, emp_code
  }
  Task.update(tableFile, (err, rows) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})
router.post("/resetAll", (req, res, next) => {
  Task.resetTableFile((err, rows) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})
router.post("/updateTotal", (req, res, next) => {
  const { table_code } = req.body
  Task.updateTotal(table_code, (err, rows) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})
router.put("/logout", (req, res, next) => {
  const { table_code } = req.body
  Task.logoutTable(table_code, (err, rows) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})
router.post("/search", (req, res, next) => {
  const table_code = req.body.table_code
  Task.searchTable(table_code, (err, rows) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})
router.get("/zone", (req, res, next) => {
  Task.zoneTable((err, rows) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})
router.get("/zone/:zone_code", (req, res, next) => {
  const zone_code = req.params.zone_code
  Task.findByZone(zone_code, (err, rows) => {
    if (err) {
      res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

module.exports = router
