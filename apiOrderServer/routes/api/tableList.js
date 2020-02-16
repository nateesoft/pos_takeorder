const express = require("express")
const router = express.Router()

/* GET data listing. */
router.get("/", function(req, res, next) {
  const dataSimple = {
    title: "The Basics - Networking",
    description: "Your app fetched this from a remote endpoint!",
    tableList: [
      {
        id: "1",
        title: "Table 01",
        releaseYear: "1977"
      }
    ]
  }
  res.json(dataSimple)
})

module.exports = router
