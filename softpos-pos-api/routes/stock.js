const express = require("express")
const router = express.Router()
const Task = require("../models/Stock")

router.get("/getName", (req, res, next) => {
  const pCode = '08001'
  const tableNo = 'A1'
  const macNo = '001'
  Task.getStockName(pCode, tableNo, macNo, (err, rows) => {
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
  const STCardBean = {
    S_Date: stcard.S_Date, 
    S_No: stcard.S_No, 
    S_SubNo: stcard.S_SubNo, 
    S_Que: stcard.S_Que, 
    S_PCode: stcard.S_PCode, 
    S_Stk: stcard.S_Stk, 
    S_In: stcard.S_In, 
    S_Out: stcard.S_Out, 
    S_InCost: stcard.S_InCost, 
    S_OutCost: stcard.S_OutCost,
    S_ACost: stcard.S_ACost, 
    S_Rem: stcard.S_Rem, 
    S_User: stcard.S_User, 
    S_EntryDate: stcard.S_EntryDate, 
    S_EntryTime: stcard.S_EntryTime, 
    S_Link: stcard.S_Link
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
