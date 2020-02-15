var express = require("express")
var router = express.Router()

let billList = []

/* GET data listing. */
router.get("/", function(req, res, next) {
  const dataSimple = {
    title: "The Basics - Networking",
    description: "Your app fetched this from a remote endpoint!",
    billList: []
  }
  res.json(dataSimple)
})

router.post("/create", (req, res, next) => {
  billList.push({
    code: req.body.code,
    name: req.body.name,
    price: req.body.price
  })
  res.send("add data success")
})

module.exports = router
