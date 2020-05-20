const mysql = require("mysql")
const path = `./${process.env.SERVER||'local'}-db.json`
const data = require(path)
console.log('config file from ', path)

data.map(config => {
    const connection = mysql.createPool({
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database,
      port: config.port,
    })
    
    module.exports = connection
})
