const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(path.resolve(__dirname, ".", "build")))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, ".", "build", "index.html"))
})

app.get("/version", (req, res) => {
  res.send("Take order Version 1.0")
})

app.listen(3000, () => {
  console.log("Server running at port 3000")
})
