const createError = require("http-errors")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const cors = require('cors')

const indexRouter = require("./routes/index")
const orderRouter = require("./routes/api/orderList")
const orderDetailRouter = require("./routes/api/orderDetailList")
const productMenuRouter = require("./routes/api/productMenu")
const searchRouter = require("./routes/api/search")
const subMenuRouter = require("./routes/api/menuSubList")

const app = express()
app.use(cors())

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/api/", indexRouter)
app.use("/api/orders", orderRouter)
app.use("/api/orders_detail", orderDetailRouter)
app.use("/api/product", productMenuRouter)
app.use("/api/search", searchRouter)
app.use("/api/menu_list", subMenuRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
