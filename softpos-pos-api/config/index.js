const util = require("util")
const mysql = require("mysql")
const path = `./${process.env.SERVER || "local"}-db.json`
const data = require(path)
console.log("config file from ", path)

data.map((config) => {
  const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port: config.port,
    connectionLimit: config.connectionLimit,
    connectTimeout: config.connectTimeout,
    acquireTimeout: config.acquireTimeout,
    waitForConnections: config.waitForConnections,
    queueLimit: config.queueLimit,
  })

  pool.query = util.promisify(pool.query)

  module.exports = pool
})
