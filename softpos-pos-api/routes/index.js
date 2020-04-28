var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "API Point of Sale" })
})

router.get("/version", function(req, res, next) {
  res.send("API Point of Sale V-1.0")
})

module.exports = router
