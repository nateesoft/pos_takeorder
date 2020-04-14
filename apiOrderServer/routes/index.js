const express = require("express")
const router = express.Router()

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" })
})
router.get("/version", function(req, res, next) {
  res.send("API-TAKEORDER V-1.0")
})

module.exports = router
