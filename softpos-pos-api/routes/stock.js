const express = require("express")
const router = express.Router()
const Task = require("../models/Stock")

router.get("/getName", (req, res, next) => {
  const pCode = req.query.pCode
  const macNo = req.query.macNo
  Task.getStockName(pCode, macNo, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

router.post("/stkfile", (req, res, next) => {
  const bpCode = req.body.bpCode
  const stockCode = req.body.stockCode
  const qty = req.body.qty
  Task.updateSTKFileAdd(bpCode, stockCode, qty, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

router.post("/stcard", (req, res, next) => {
  const { stcard } = req.body
  const currDate = new Date()
  const STCardBean = {
    S_No: `1 ${currDate.getHours()}:${currDate.getMinutes()}:${currDate.getSeconds()}`, 
    S_SubNo: '', 
    S_Que: 0, 
    S_PCode: stcard.S_PCode, 
    S_Stk: stcard.S_Stk, 
    S_Out: stcard.S_Out, 
    S_InCost: 0, 
    S_OutCost: stcard.S_OutCost,
    S_ACost: 0, 
    S_Rem: 'SAL', 
    S_User: stcard.S_User, 
    S_Link: ''
  }
  Task.saveSTCard(STCardBean, (err, rows) => {
    if (err) {
      res.send({ status: "Error", msg: err.sqlMessage || err.errno })
    } else {
      res.status(200).json({ data: rows })
    }
  })
})

module.exports = router
