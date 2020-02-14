var express = require("express")
var router = express.Router()

let orderList = []

/* GET data listing. */
router.get("/", (req, res, next) => {
  const dataSimple = {
    title: "The Basics - Networking",
    description: "Your app fetched this from a remote endpoint!",
    orderList
  }
  res.json(dataSimple)
})

router.post("/create", (req, res, next) => {
  orderList.push({
    code: req.body.code,
    name: req.body.name,
    price: req.body.price
  })
  res.send("add data success")
})

router.put("/:code/update", (req, res, next) => {
  orderList.push({
    code: req.body.code,
    name: req.body.name,
    price: req.body.price
  })
  res.send("add data success")
})

router.delete("/:code/delete", (req, res, next) => {
  let plus = []
  orderList = orderList.filter(item => {
    if (item.code !== req.params.code) {
      plus.push(item)
    }
  })
  res.send(orderList)
})

module.exports = router
