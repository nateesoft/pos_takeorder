const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = (app) => {
  app.use(
    "/pos",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  )
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  )
}
