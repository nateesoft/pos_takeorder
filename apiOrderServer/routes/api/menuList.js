var express = require("express")
var router = express.Router()

/* GET data listing. */
router.get("/", function(req, res, next) {
  const dataSimple = {
    title: "The Basics - Networking",
    description: "Your app fetched this from a remote endpoint!",
    menuList: [
      {
        id: "1",
        title: "Menu 01",
        releaseYear: "1977"
      }
    ]
  }
  res.json(dataSimple)
})

module.exports = router
