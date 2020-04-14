var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" })
})

router.get("/version", function(req, res, next) {
  res.send("SOFTPOS-POS-API V-1.0")
})

module.exports = router
