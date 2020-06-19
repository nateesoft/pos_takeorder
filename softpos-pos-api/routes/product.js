const express = require("express")
const router = express.Router()
const Task = require("../models/Product")

router.get("/", (req, res, next) => {
    Task.findAll((err, rows) => {
        if (err) {
            res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
        } else {
            res.status(200).json({ data: rows })
        }
    })
})

router.get("/:code", (req, res, next) => {
    const { code } = req.params
    Task.findByCode(code, (err, rows) => {
        if (err) {
            res.status(500).json({ status: "Error", msg: err.sqlMessage || err.errno })
        } else {
            res.status(200).json({ data: rows })
        }
    })
})

module.exports = router